import { Link } from 'react-router-dom';
import { FOOTER_COLS } from '../../data/navigation';
import { ORG_LEGAL, YEAR } from '../../data/siteConfig';
import { Icon } from '../ui/Icon';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img
              className="footer-logo"
              src="/assets/img/logo-full-inverse.png"
              alt="Digital Trust Futures Foundation"
              width={988}
              height={466}
              loading="lazy"
            />
            <p className="footer-blurb">
              An independent, non-profit public-benefit organisation strengthening the safety, security,
              inclusion and trustworthiness of digital public infrastructure, digital public goods,
              open-source technology and AI-enabled public services.
            </p>
            <div className="footer-contact">
              <div>All enquiries · <a href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a></div>
              <div>Security disclosures follow the <Link to="/security">disclosure policy</Link>.</div>
            </div>
            <p className="mono-label" style={{ marginTop: '1.5rem' }}>{ORG_LEGAL} · South Africa</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="footer-col">
                <h2>{col.heading}</h2>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-legal">
            © {YEAR} {ORG_LEGAL}. Registered as a non-profit company in South Africa; NPO and
            public-benefit organisation status to be pursued subject to specialist legal and tax advice.
          </p>
          <nav aria-label="Legal">
            <Link to="/legal/privacy">Privacy</Link>
            <Link to="/legal/cookies">Cookies</Link>
            <Link to="/legal/terms">Terms of use</Link>
            <Link to="/legal/safeguarding">Safeguarding</Link>
            <Link to="/security">Security</Link>
            <Link to="/credits">Credits</Link>
          </nav>
          <span className="licence-badge">
            <Icon name="check" size={13} /> Open resources CC BY 4.0
          </span>
        </div>
      </div>
    </footer>
  );
}
