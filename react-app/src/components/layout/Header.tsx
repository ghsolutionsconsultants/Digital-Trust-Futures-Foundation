import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV } from '../../data/navigation';
import { ORG } from '../../data/siteConfig';
import { ArrowIcon, CaretIcon } from '../ui/Icon';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useTheme();

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  // Scroll handler: sticky + progress bar
  useEffect(() => {
    let ticking = false;
    function onScroll() {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      setStuck(y > 8);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
      ticking = false;
    }
    function handleScroll() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop nav on resize > 1080
  useEffect(() => {
    function onResize() {
      if (mobileOpen && window.innerWidth >= 1080) setMobileOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [mobileOpen]);

  // Close desktop nav on outside click / Escape
  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpenItem(null); setMobileOpen(false); }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenItem(null);
    }
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKeydown); document.removeEventListener('click', onClick); };
  }, []);

  const activeKey = NAV.find((n) =>
    location.pathname === '/' + n.key || location.pathname.startsWith('/' + n.key + '/')
  )?.key ?? '';

  const handleNavTriggerClick = useCallback((key: string, e: React.MouseEvent) => {
    if (window.matchMedia('(min-width: 1080px)').matches) {
      if (openItem !== key) { e.preventDefault(); setOpenItem(key); }
    }
  }, [openItem]);

  const handleMouseEnter = useCallback((key: string) => {
    if (window.matchMedia('(hover: hover) and (min-width: 1080px)').matches) setOpenItem(key);
  }, []);

  const handleMouseLeave = useCallback((key: string) => {
    if (window.matchMedia('(hover: hover) and (min-width: 1080px)').matches) {
      setTimeout(() => setOpenItem((prev) => prev === key ? null : prev), 160);
    }
  }, []);

  return (
    <>
      <header className={`site-header${stuck ? ' is-stuck' : ''}`} id="site-header" ref={navRef}>
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label={`${ORG} — home`}>
            <img className="brand-logo-light" src="/assets/img/logo-full.png" alt={ORG} width={988} height={466} fetchPriority="high" />
            <img className="brand-logo-dark" src="/assets/img/logo-full-inverse.png" alt={ORG} width={988} height={466} />
          </Link>

          <nav className="nav" aria-label="Primary">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '.15rem', listStyle: 'none' }}>
              {NAV.map((item) => (
                <li
                  key={item.key}
                  className={`nav-item${item.children ? '' : ''}${openItem === item.key ? ' is-open' : ''}`}
                  data-nav-item={item.children ? '' : undefined}
                  onMouseEnter={() => item.children && handleMouseEnter(item.key)}
                  onMouseLeave={() => item.children && handleMouseLeave(item.key)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenItem(null);
                  }}
                >
                  {item.children ? (
                    <>
                      <Link
                        className="nav-link"
                        to={item.href}
                        aria-current={activeKey === item.key ? 'page' : undefined}
                        aria-expanded={openItem === item.key}
                        data-nav-trigger=""
                        onClick={(e) => handleNavTriggerClick(item.key, e)}
                        onKeyDown={(e) => {
                          if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setOpenItem(item.key);
                          }
                        }}
                      >
                        {item.label}<CaretIcon />
                      </Link>
                      <div className="nav-panel" data-nav-panel="">
                        {item.children.map((child) => (
                          <Link key={child.href} to={child.href}>
                            {child.label}<span>{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      className="nav-link"
                      to={item.href}
                      aria-current={activeKey === item.key ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              data-theme-toggle=""
              aria-label="Switch to dark theme"
              title="Switch theme"
            >
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden={true}>
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            </button>

            <Link className="btn btn--primary btn--sm header-cta" to="/get-involved#partner">
              Partner with us<ArrowIcon />
            </Link>

            <button
              className="menu-toggle"
              type="button"
              data-menu-toggle=""
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="menu-bars" aria-hidden={true}><span /><span /><span /></span>Menu
            </button>
          </div>
        </div>
        <div className="progress-rail" aria-hidden={true}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </header>

      {/* Mobile nav */}
      <div className={`mobile-nav${mobileOpen ? ' is-open' : ''}`} id="mobile-nav" data-mobile-nav="">
        <div className="container">
          {NAV.map((item) =>
            item.children ? (
              <details key={item.key}>
                <summary>{item.label}<CaretIcon /></summary>
                <div className="mobile-panel">
                  {item.children.map((c) => (
                    <Link key={c.href} to={c.href} onClick={() => setMobileOpen(false)}>{c.label}</Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link key={item.key} className="mobile-top" to={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <Link className="btn btn--accent" to="/get-involved#partner" onClick={() => setMobileOpen(false)}>
            Partner with us<ArrowIcon />
          </Link>
          <Link className="btn btn--ghost" to="/support-our-work" style={{ width: '100%', justifyContent: 'center', marginTop: '.75rem' }} onClick={() => setMobileOpen(false)}>
            Support our work<ArrowIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
