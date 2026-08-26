import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useFilterChips } from '../../hooks/useFilterChips';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling to anchor
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  useScrollReveal();
  useFilterChips();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
