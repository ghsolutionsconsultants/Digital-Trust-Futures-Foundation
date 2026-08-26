# Digital Trust Futures Foundation — website

React application for **Digital Trust Futures Foundation NPC**, built with Vite and TypeScript.

**Protecting people, their rights and the digital systems they depend on.**

---

## What's here

```
react-app/          ← the application source (Vite + TypeScript + React 19)
  ├── public/       ← static assets copied verbatim into the build
  └── src/          ← components, pages, data and hooks
website/            ← build output. Deployed by GitHub Actions; do not edit by hand.
_src/               ← signature generator and the verification harness
_src/retired/       ← the previous static generator, kept for reference only
```

Routing is client-side via `react-router-dom`, with `react-helmet-async` for per-route
metadata. The original vanilla CSS design system is carried over unchanged.

### Routes (25)

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About the Foundation |
| `/human-rights` | Human Rights & Digital Trust |
| `/governance` | Governance & Board |
| `/what-we-do` | What We Do — five divisions |
| `/divisions/:slug` | Individual division pages (×5) |
| `/programmes` | Launch programmes |
| `/research` | Research & resources library |
| `/open-source` | Open-source projects |
| `/civil-society` | Civil Society & Human Rights Defenders |
| `/children-young-people` | Children & Young People |
| `/get-involved` | Get involved |
| `/support-our-work` | Support our work |
| `/news` | News |
| `/contact` | Contact |
| `/security` | Vulnerability disclosure |
| `/credits` | Credits |
| `/thank-you` | Form confirmation |
| `/legal/privacy` · `/legal/cookies` · `/legal/terms` · `/legal/safeguarding` | Legal |

Old `.html` URLs from the previous static site redirect to their modern equivalents
(`LegacyHtmlRedirect` in `src/App.tsx`). This matters: the email signature already in
circulation links to `/security.html` and `/legal/privacy.html`.

---

## Development

Requires Node.js ≥ 18.

```bash
cd react-app && npm install && npm run dev
```

Then open <http://localhost:5173>.

## Building

```bash
cd react-app && npm run build
```

Runs `tsc`, then Vite, then `scripts/postbuild.mjs`, which:

- writes **`404.html` as a copy of `index.html`** — GitHub Pages serves it for any path it
  has no file for, which is what makes `/about` and the other routes resolve. Without it
  every route except `/` is a hard 404.
- generates **`sitemap.xml`** from the route list, so it cannot drift from the router.

Output goes to `../website/`. `emptyOutDir` is on, so every build is reproducible —
everything the deployed site needs (assets, fonts, `CNAME`, `_headers`, `robots.txt`,
`.well-known/security.txt`, the signature pages) lives in `react-app/public/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages at **digitaltrustfuturesfoundation.org**. The workflow fails the build if
`404.html` is not a copy of `index.html`, if `CNAME` is wrong, or if stale HTML appears in
the output.

**Before go-live**

1. Send a live test through both forms and confirm `info@digitaltrustfuturesfoundation.org`
   receives them. Forms post to Web3Forms; the redirect to `/thank-you` may require a paid
   plan, in which case submitters see the Web3Forms success page instead.
2. Have legal counsel review the four policies in `src/pages/legal/` — they are published in
   draft and say so on the page.
3. Confirm the registration number and registered address on the Contact page.
4. Review the safeguarding policy against the August 2026 governance update (Head of Human
   Rights, Safeguarding and Ethics; the Advisory Panel).
5. **Security headers.** GitHub Pages does not read `_headers`, so the CSP, HSTS and related
   headers are not currently served. Putting Cloudflare in front, or moving to Cloudflare
   Pages or Netlify, applies them.

---

## Email signatures

```bash
python3 _src/signature.py
```

Writes into `react-app/public/signature/`, so the output is part of the build rather than
something that survives alongside it. Adding a colleague is one entry in `PEOPLE`; a domain
change is the single `BASE` constant.

The install page embeds the photo and logo as base64, so it renders before the site is live.
Pasting the rendered signature is the intended path: Gmail re-uploads the images to its own
servers, Outlook and Apple Mail attach them to the message.

---

## Design system

Colours are sampled from the Foundation wordmark, defined in
`react-app/public/assets/css/main.css`:

| Token | Value | Use |
| --- | --- | --- |
| Navy | `#133A63` | Headings, primary UI, dark bands |
| Orange | `#BC5012` | Accent, calls to action, rules |
| Teal | `#247E83` | Secondary accent |
| Brass | `#B08D57` | Tertiary rules (text uses the darker `#8A6A3B`) |
| Paper | `#F7F5F1` | Page background |

Type is self-hosted: **Newsreader** (display), **Inter** (body), **IBM Plex Mono** (labels
and data). Nothing is requested from Google Fonts, so visiting the site does not disclose a
reader's IP address to a third party.

**Light is the default for everyone**, regardless of operating-system setting. Dark is
opt-in through the header toggle and persisted in `localStorage` under `dtff-theme`. There is
deliberately no `prefers-color-scheme` rule.

---

## Verification

`_src/tests/verify.html` — copy into `website/`, serve, and open it. Checks horizontal
overflow at five widths, WCAG AA contrast, and document structure across all 26 routes.

Client-side routing needs a server that falls back to `404.html`, as GitHub Pages does. A
plain static server will 404 on every route except `/`:

```bash
python3 -m http.server --directory website 8000
```

Last run: no horizontal overflow across 130 page-width combinations; WCAG AA contrast clean;
one `h1` per route, no skipped heading levels, all images captioned, all inputs labelled.

**Known trade-off.** Rendering is client-side, so the served HTML is an empty shell until
JavaScript runs. Crawlers that do not execute JavaScript see no content, and the site does
not work with JavaScript disabled — a change from the previous static build. Prerendering
at build time would restore both without changing the authoring model.

---

© 2026 Digital Trust Futures Foundation NPC. Site content and Foundation resources are
intended for release under CC BY 4.0; the name, logo and wordmark are not.
