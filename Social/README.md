# Social assets

Two launch assets for LinkedIn, both generated rather than hand-drawn so they
stay in step with the brand: each is set in the site's own Newsreader, Inter and
IBM Plex Mono, uses the site's colour tokens, and pulls the inverse logo
straight from `react-app/public`.

| File | What it is | Where it goes |
| --- | --- | --- |
| `dtff-launch-carousel.pdf` | 8 slides, 1080×1350 | LinkedIn **document post** (swipeable) |
| `dtff-launch-infographic.png` | Single card, 1080×1350 @2x | LinkedIn **image post**, or anywhere else |

## The carousel

`carousel.html` is one continuous 8640×1350 canvas. Each slide is a 1080px
window into it, so the gradient, the ring system and the hairline track run
*through* the slide cuts instead of restarting — swiping reads as moving across
one object rather than flipping eight cards.

Slide content lives in the `SLIDES` array at the top of the `<script>`. Layout
is shared, so re-wording a slide never disturbs the others.

```bash
npm run social --prefix react-app
```

That regenerates both assets. The carousel step writes `carousel/slide-01.png` … `slide-08.png` and assembles
`dtff-launch-carousel.pdf`. If a slide's content grows past its frame the
renderer says which slide and by how much, and exits non-zero, rather than
silently cropping.

If you add or remove a slide, update `const N` in
`react-app/scripts/social-carousel.mjs` — it refuses to run when the count
disagrees with the page.

## The single card

Same command regenerates it (`scripts/social-card.mjs`). Same guard: it reports the content's bottom edge against the usable height and
fails if anything would be cut. It measures in-flow children only — the
decorative glows bleed past the card on purpose.

## Where the code lives

The HTML for both assets is here; the renderers are in `react-app/scripts/`
alongside `check.mjs` and `postbuild.mjs`, because that is where `puppeteer-core`
resolves from.

## Requirements

`react-app/node_modules` (run `npm install --prefix react-app` once) and Chrome.
Set `CHROME_PATH` if Chrome is not at the macOS default location.
