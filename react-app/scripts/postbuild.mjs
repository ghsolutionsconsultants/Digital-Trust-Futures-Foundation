/**
 * Post-build steps that Vite does not cover.
 *
 * 1. SPA fallback. GitHub Pages serves 404.html for any path it has no file
 *    for. Making that a copy of index.html lets the router handle /about,
 *    /human-rights and the rest — without it, every route except / is a 404.
 *
 * 2. Sitemap. Generated from the real route list so it can never drift from
 *    what the router actually serves.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', '..', 'website');
const SITE = 'https://digitaltrustfuturesfoundation.org';

// Route, change frequency, priority. Keep in step with src/App.tsx.
const ROUTES = [
  ['/', 'monthly', '1.0'],
  ['/about', 'monthly', '0.8'],
  ['/human-rights', 'monthly', '0.9'],
  ['/governance', 'monthly', '0.7'],
  ['/what-we-do', 'monthly', '0.9'],
  ['/divisions/dpi-trust-lab', 'monthly', '0.7'],
  ['/divisions/open-digital-commons', 'monthly', '0.7'],
  ['/divisions/policy-evidence-centre', 'monthly', '0.7'],
  ['/divisions/skills-academy', 'monthly', '0.7'],
  ['/divisions/cyber-safety-centre', 'monthly', '0.7'],
  ['/programmes', 'monthly', '0.9'],
  ['/research', 'monthly', '0.8'],
  ['/open-source', 'monthly', '0.7'],
  ['/civil-society', 'monthly', '0.9'],
  ['/children-young-people', 'monthly', '0.9'],
  ['/get-involved', 'monthly', '0.8'],
  ['/support-our-work', 'monthly', '0.9'],
  ['/news', 'weekly', '0.6'],
  ['/contact', 'monthly', '0.7'],
  ['/security', 'monthly', '0.7'],
  ['/credits', 'yearly', '0.4'],
  ['/legal/privacy', 'yearly', '0.4'],
  ['/legal/cookies', 'yearly', '0.4'],
  ['/legal/terms', 'yearly', '0.4'],
  ['/legal/safeguarding', 'yearly', '0.4'],
];

const indexPath = join(out, 'index.html');
if (!existsSync(indexPath)) {
  console.error('postbuild: no index.html in website/ — did the build run?');
  process.exit(1);
}

writeFileSync(join(out, '404.html'), readFileSync(indexPath));
console.log('postbuild: 404.html written as SPA fallback');

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map(([path, freq, pri]) =>
  `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${today}</lastmod>\n` +
  `    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`
).join('\n');

writeFileSync(join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`postbuild: sitemap.xml written with ${ROUTES.length} routes`);
