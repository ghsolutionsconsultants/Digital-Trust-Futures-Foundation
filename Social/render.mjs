/**
 * Renders the launch infographic at LinkedIn's 4:5 portrait size.
 *
 * The page is served from react-app/public so /assets/fonts/fonts.css and the
 * inverse logo resolve exactly as they do on the site — the card is set in the
 * Foundation's own Newsreader, Inter and IBM Plex Mono rather than substitutes.
 */
import puppeteer from 'puppeteer-core';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(here, '..', '..', '..', '..', '..', '..',
  'Users', 't', 'Claude Projects', 'Digital Trust Future Foundation ', 'react-app', 'public');
const ROOT = process.env.DTFF_PUBLIC || PUBLIC;
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 8951;
const W = 1080, H = 1350;

const TYPES = { '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg' };

const html = await readFile(join(here, 'launch-card.html'), 'utf8');

const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/' || url === '/card.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(html);
  }
  const file = join(ROOT, url);
  try {
    await stat(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(PORT, r));

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--disable-gpu', '--font-render-hinting=none'],
});
const page = await browser.newPage();
const SCALE = 2;
await page.setViewport({ width: W, height: H, deviceScaleFactor: SCALE });
await page.goto(`http://localhost:${PORT}/card.html`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 400));

// Measure the in-flow content only. scrollHeight would also count the
// decorative glows, which bleed past the card on purpose.
const fit = await page.evaluate(() => {
  const c = document.querySelector('.card');
  const top = c.getBoundingClientRect().top;
  const pad = parseFloat(getComputedStyle(c).paddingBottom);
  const inFlow = [...c.children].filter((e) => getComputedStyle(e).position !== 'absolute');
  const h = Math.round(Math.max(...inFlow.map((e) => e.getBoundingClientRect().bottom - top)));
  return { h, overflow: Math.max(0, h - (c.clientHeight - pad)) };
});

const out = join(here, 'dtff-launch-infographic.png');
await page.screenshot({ path: out, type: 'png' });
await browser.close();
server.close();

const { size } = await stat(out);
console.log(`wrote ${out}`);
console.log(`  canvas ${W}x${H} @${SCALE}x   content bottom ${fit.h}px of ${H - 54}px usable   overflow ${fit.overflow}px`);
console.log(`  ${(size / 1024).toFixed(0)} KB`);
if (fit.overflow > 0) { console.error('  CONTENT IS CROPPED'); process.exit(1); }
