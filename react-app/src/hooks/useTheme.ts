import { useEffect } from 'react';

const STORE = 'dtff-theme';

export function useTheme() {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');

    function currentTheme() {
      return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function syncLabel() {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      buttons.forEach((b) => {
        b.setAttribute('aria-label', `Switch to ${next} theme`);
        b.setAttribute('title', `Switch to ${next} theme`);
      });
      const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', currentTheme() === 'dark' ? '#080F17' : '#F7F5F1');
    }

    function toggle() {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(STORE, next); } catch (_) { /* ignore */ }
      syncLabel();
    }

    buttons.forEach((b) => b.addEventListener('click', toggle));
    syncLabel();

    return () => {
      buttons.forEach((b) => b.removeEventListener('click', toggle));
    };
  }, []);
}
