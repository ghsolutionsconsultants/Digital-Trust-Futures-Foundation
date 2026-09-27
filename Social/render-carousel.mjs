/**
 * Renders the launch carousel: one continuous 1080×1350-per-slide canvas,
 * captured as N windows and assembled into the PDF LinkedIn wants for a
 * document post.
 *
 * Capturing windows rather than separate pages is the whole point — the
 * gradient, the ring system and the hairline track run through the slide cuts,
 * so swiping reads as moving across one object instead of flipping cards.
 */
import puppeteer from 'puppeteer-core';
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.DTFF_PUBLIC || join(here, '..', 'react-app', 'public');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 8952;
const W = 1080, H = 1350;
const SCALE = 2;

const TYPES = { '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg' };
const html = await readFile(join(here, 'carousel.html'), 'utf8');

const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/' || url === '/carousel.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(html);
  }
  const file = join(ROOT, url);
  try {
    await stat(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(404).end(); }
});
await new Promise((r) => server.listen(PORT, r));

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--font-render-hinting=none'],
});
const page = await browser.newPage();
const N = 8;
await page.setViewport({ width: W * N, height: H, deviceScaleFactor: SCALE });
await page.goto(`http://localhost:${PORT}/carousel.html`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 500));

const count = await page.evaluate(() => document.querySelectorAll('.slide').length);
if (count !== N) {
  console.error(`expected ${N} slides, found ${count} — update N in this script`);
  process.exit(1);
}

// Content that spills past its slide would be silently cropped by the window.
const overflow = await page.evaluate(() =>
  [...document.querySelectorAll('.slide')].map((s, i) => {
    const pad = parseFloat(getComputedStyle(s).paddingBottom);
    const last = [...s.children].filter((c) => !c.classList.contains('swipe')
      && !c.classList.contains('dots')).pop();
    const bottom = last ? last.getBoundingClientRect().bottom - s.getBoundingClientRect().top : 0;
    return { slide: i + 1, bottom: Math.round(bottom), limit: s.clientHeight - pad + 60 };
  }).filter((r) => r.bottom > r.limit));

const dir = join(here, 'carousel');
await mkdir(dir, { recursive: true });

const files = [];
for (let i = 0; i < N; i++) {
  const path = join(dir, `slide-${String(i + 1).padStart(2, '0')}.png`);
  await page.screenshot({ path, clip: { x: i * W, y: 0, width: W, height: H } });
  files.push(path);
}
console.log(`captured ${files.length} slides at ${W}x${H} @${SCALE}x`);

// Assemble the PDF. A second page stacks the captures one per printed page so
// the output is exactly N pages at the slide's aspect ratio.
const imgs = await Promise.all(files.map(async (f) =>
  `data:image/png;base64,${(await readFile(f)).toString('base64')}`));

const doc = `<!doctype html><meta charset="utf-8"><style>
  @page{size:${W}px ${H}px;margin:0}
  *{margin:0;padding:0}
  img{display:block;width:${W}px;height:${H}px}
  img+img{page-break-before:always}
</style>${imgs.map((d) => `<img src="${d}">`).join('')}`;

const pdfPage = await browser.newPage();
await pdfPage.setContent(doc, { waitUntil: 'load' });
const out = join(here, 'dtff-launch-carousel.pdf');
await pdfPage.pdf({ path: out, width: `${W}px`, height: `${H}px`, printBackground: true, pageRanges: `1-${N}` });

await browser.close();
server.close();

const { size } = await stat(out);
console.log(`wrote ${out}  (${(size / 1024 / 1024).toFixed(2)} MB, ${N} pages)`);
if (overflow.length) {
  console.error('CONTENT OVERFLOWS ON:', overflow.map((o) => `slide ${o.slide} (+${o.bottom - o.limit}px)`).join(', '));
  process.exit(1);
}
console.log('no slide overflows its frame');
