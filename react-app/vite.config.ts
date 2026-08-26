import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../website',
    // Everything the site needs lives in public/, so the output directory can
    // be cleared on every build. That makes the deployed site reproducible and
    // stops stale pages from a previous structure lingering alongside it.
    emptyOutDir: true,
  },
});
