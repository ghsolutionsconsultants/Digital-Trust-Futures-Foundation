import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to let React render the new page elements before querying
    const timer = setTimeout(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const targets = document.querySelectorAll<HTMLElement>(
        '[data-reveal], [data-reveal-stagger], [data-reveal-group]',
      );

      if (!('IntersectionObserver' in window) || reduceMotion.matches) {
        targets.forEach((el) => el.classList.add('is-revealed'));
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
      );

      targets.forEach((el) => io.observe(el));

      return () => io.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);
}
