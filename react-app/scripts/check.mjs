/**
 * Browser checks for the built site.
 *
 *   npm run build && npm run check
 *
 * Serves ../website the way GitHub Pages does (unknown paths fall back to
 * 404.html) and drives a real Chrome. Headless Chrome's --virtual-time-budget
 * does not tick IntersectionObserver or requestAnimationFrame reliably, so
 * anything touching scroll-reveal has to run here rather than in a DOM dump.
 */
import puppeteer from 'puppeteer-core';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'website');
const PORT = 8945;
const SITE = 'https://digitaltrustfuturesfoundation.org';
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json',
  '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.xml':'application/xml', '.txt':'text/plain' };

const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let file = join(ROOT, url);
  try {
    const s = await stat(file);
    if (s.isDirectory()) file = join(file, 'index.html');
    await stat(file);
  } catch { file = join(ROOT, '404.html'); }          // SPA fallback, as Pages does
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(500).end(); }
});
await new Promise(r => server.listen(PORT, r));
const B = `http://localhost:${PORT}`;

const ROUTES = ['/','/about','/human-rights','/civil-society','/children-young-people','/governance',
  '/what-we-do','/programmes','/research','/open-source','/get-involved','/support-our-work',
  '/news','/contact','/security','/credits','/divisions/dpi-trust-lab','/divisions/skills-academy',
  '/legal/privacy','/legal/cookies','/legal/terms','/legal/safeguarding','/thank-you'];

const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); };

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox','--disable-gpu'], defaultViewport: { width: 1440, height: 900 } });

// ── every route mounts, reveals its content, and logs no errors ──────────────
let deadRoutes = 0, fadedRoutes = 0, errorRoutes = 0;
for (const route of ROUTES) {
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  page.on('requestfailed', r => errs.push('failed: ' + r.url()));

  await page.goto(B + route, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));

  await page.evaluate(async () => {                    // scroll as a reader would
    const max = () => document.documentElement.scrollHeight - window.innerHeight;
    let y = 0, guard = 0;
    while (y < max() && guard++ < 600) { y = Math.min(y + 350, max()); window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
    window.scrollTo(0, max());
    await new Promise(r => setTimeout(r, 1800));       // outlast the 0.75s fade
  });

  const s = await page.evaluate(() => {
    const faded = el => parseFloat(getComputedStyle(el).opacity) < 0.99 && el.getBoundingClientRect().height > 0;
    return {
      mounted: !!document.querySelector('#root > *'),
      h1s: document.querySelectorAll('h1').length,
      stillFaded: [...document.querySelectorAll('[data-reveal],[data-reveal-stagger],[data-reveal-stagger] > *')].filter(faded).length,
    };
  });

  if (!s.mounted) deadRoutes++;
  if (s.stillFaded) fadedRoutes++;
  if (errs.length) { errorRoutes++; console.error(`  ${route}: ${errs.slice(0,2).join(' | ')}`); }
  await page.close();
}
check(`all ${ROUTES.length} routes mount`, deadRoutes === 0, `${deadRoutes} dead`);
check('no content left invisible after scrolling', fadedRoutes === 0, `${fadedRoutes} route(s) affected`);
check('no JavaScript errors or failed requests', errorRoutes === 0, `${errorRoutes} route(s) affected`);

// ── metadata is per-route and not duplicated ─────────────────────────────────
{
  const page = await browser.newPage();
  let bad = 0;
  for (const r of ['/','/about','/human-rights','/divisions/skills-academy','/legal/terms']) {
    await page.goto(B + r, { waitUntil: 'networkidle0' });
    await new Promise(x => setTimeout(x, 700));
    const m = await page.evaluate(() => ({
      titles: document.querySelectorAll('title').length,
      canon: [...document.querySelectorAll('link[rel=canonical]')].map(l => l.href),
      og: [...document.querySelectorAll('meta[property="og:url"]')].map(x => x.content),
    }));
    const want = SITE + (r === '/' ? '/' : r);
    if (m.titles !== 1 || m.canon.length !== 1 || m.canon[0] !== want || m.og[0] !== want) {
      bad++; console.error(`  ${r}: titles=${m.titles} canonical=${m.canon.join(',')}`);
    }
  }
  check('one correct canonical, og:url and title per route', bad === 0, `${bad} wrong`);
  await page.close();
}

// ── the interactive pieces ───────────────────────────────────────────────────
{
  const page = await browser.newPage();
  await page.goto(B + '/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 700));
  const bg = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);

  const settle = () => new Promise(r => setTimeout(r, 700));  // outlast the .3s transition
  const light = await bg();
  check('defaults to the light theme', light === 'rgb(247, 245, 241)', light);
  await page.click('[data-theme-toggle]'); await settle();
  const dark = await bg();
  check('theme toggle switches to dark', dark === 'rgb(8, 15, 23)', dark);
  check('theme choice persists', (await page.evaluate(() => localStorage.getItem('dtff-theme'))) === 'dark');

  await page.evaluate(() => document.querySelector('a[href="/human-rights"]')?.click());
  await new Promise(r => setTimeout(r, 900));
  check('client-side navigation works', page.url().endsWith('/human-rights'), page.url().replace(B, ''));
  await settle();
  const afterNav = await bg();
  check('theme survives navigation', afterNav === 'rgb(8, 15, 23)', afterNav);
  check('document title updates on navigation', /Human Rights/.test(await page.title()));

  await page.goto(B + '/research', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 700));
  const before = await page.evaluate(() => document.querySelectorAll('[data-tags]:not(.is-hidden)').length);
  await page.evaluate(() => [...document.querySelectorAll('[data-filter]')].find(c => c.getAttribute('data-filter') !== 'all')?.click());
  await new Promise(r => setTimeout(r, 300));
  const after = await page.evaluate(() => document.querySelectorAll('[data-tags]:not(.is-hidden)').length);
  check('resource filters narrow the list', before > 0 && after > 0 && after < before, `${before} -> ${after}`);

  await page.goto(B + '/get-involved', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 700));
  const form = await page.evaluate(() => {
    const f = document.querySelector('form[action*="web3forms"]');
    if (!f) return null;
    const v = n => f.querySelector(`[name="${n}"]`)?.value;
    return { action: f.action, key: !!v('access_key'), honeypot: !!f.querySelector('[name=botcheck]'), redirect: v('redirect') };
  });
  check('enquiry form posts to Web3Forms with key and honeypot',
    !!form && form.key && form.honeypot && form.action === 'https://api.web3forms.com/submit');
  check('form redirect targets a real route (not a .html redirect)',
    !!form && form.redirect === `${SITE}/thank-you`, form?.redirect || 'missing');

  // Legacy .html URLs from the previous static site — the email signature uses these.
  let redirected = 0;
  for (const [from, to] of [['/security.html','/security'], ['/legal/privacy.html','/legal/privacy'], ['/about.html','/about']]) {
    await page.goto(B + from, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 800));
    if (new URL(page.url()).pathname === to) redirected++;
  }
  check('legacy .html URLs redirect to modern routes', redirected === 3, `${redirected}/3`);
  await page.close();
}

await browser.close();
server.close();

const failed = results.filter(r => !r.ok);
console.log();
for (const r of results) console.log(`  ${r.ok ? 'PASS' : 'FAIL'} — ${r.name}${r.detail ? `  [${r.detail}]` : ''}`);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
process.exit(failed.length ? 1 : 0);
