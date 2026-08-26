import { useEffect } from 'react';

/**
 * Wires up data-filter-scope / data-filter / data-tags chip filtering.
 * This mirrors the filter logic from the original main.js.
 * Called once per route change (from Layout).
 */
export function useFilterChips() {
  useEffect(() => {
    const scopes = document.querySelectorAll<HTMLElement>('[data-filter-scope]');

    const cleanups: (() => void)[] = [];

    scopes.forEach((scope) => {
      const chips = Array.from(scope.querySelectorAll<HTMLElement>('[data-filter]'));
      const items = Array.from(scope.querySelectorAll<HTMLElement>('[data-tags]'));
      const counter = scope.querySelector<HTMLElement>('[data-filter-count]');
      const empty = scope.querySelector<HTMLElement>('[data-filter-empty]');

      function apply(value: string) {
        let shown = 0;
        items.forEach((item) => {
          const tags = (item.getAttribute('data-tags') || '').split(/\s+/);
          const match = value === 'all' || tags.includes(value);
          item.classList.toggle('is-hidden', !match);
          if (match) shown++;
        });
        chips.forEach((c) => {
          c.setAttribute('aria-pressed', String(c.getAttribute('data-filter') === value));
        });
        if (counter) counter.textContent = `${shown} ${shown === 1 ? 'item' : 'items'}`;
        if (empty) empty.classList.toggle('is-hidden', shown !== 0);
      }

      const handlers: [HTMLElement, () => void][] = chips.map((chip) => {
        const fn = () => apply(chip.getAttribute('data-filter') || 'all');
        chip.addEventListener('click', fn);
        return [chip, fn];
      });

      apply('all');

      cleanups.push(() => {
        handlers.forEach(([chip, fn]) => chip.removeEventListener('click', fn));
      });
    });

    return () => cleanups.forEach((fn) => fn());
  });
}
