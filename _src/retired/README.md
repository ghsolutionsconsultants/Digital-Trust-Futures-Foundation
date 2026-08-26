# Retired — the original static site generator

These modules produced the hand-built static site that preceded the React
application. They are kept for reference and for the content they carry, which
was migrated into `react-app/src/pages/` and `react-app/src/data/`.

They are no longer part of any build. `python3 _src/build.py` would now write
plain HTML into `website/`, which the Vite build overwrites.

Still live in `_src/`:

- `signature.py` — generates the email signature into
  `react-app/public/signature/`, which Vite copies into the built site.
- `tests/verify.html` — accessibility, contrast and layout harness, updated for
  the React routes.
