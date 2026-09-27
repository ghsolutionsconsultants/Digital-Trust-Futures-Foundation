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
        // threshold must stay 0. A ratio threshold is a fraction of the
        // *element*, so a section taller than roughly 12x the viewport can
        // never satisfy 0.08 and would stay invisible for good — which is
        // what happened to the article pages on a short window. rootMargin
        // alone gives the "wait until it is properly on screen" feel.
        { rootMargin: '0px 0px -12% 0px', threshold: 0 },
      );

      targets.forEach((el) => io.observe(el));

      return () => io.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);
}
