# Paper toolchain

Builds the Digital Sovereignty series PDFs in the Foundation's house style:
A4, 22mm margins, a navy spine with orange and teal bands down the cover's left
edge, a mono running head on body pages, and a footer carrying classification,
organisation and page number.

## Build

```bash
python3 _src/papers/fonts.py          # once, or after changing the web fonts
python3 _src/papers/article4.py out.pdf
```

Each article script builds twice: the first pass establishes pagination, the
contents page numbers are read back from it, and the second pass writes the
final file. Contents entries can therefore never drift from the body.

## Files

| File | Purpose |
| --- | --- |
| `fonts.py` | Cuts static TTF instances from the site's variable woff2 fonts |
| `dtff_paper.py` | Brand constants, paragraph styles, flowables, page template |
| `common.py` | Cover, author note, Foundation note, contents table |
| `refs.py` | The shared reference list, generated from `insights.ts` |
| `article4.py` | Article 4 |

## Why `fonts.py` exists

ReportLab cannot use variable fonts, so each weight is cut as a static TTF. Two
traps are handled there and documented in the file: Newsreader's `opsz` axis
breaks fontTools' name-table rewriting, and two instances cut from one variable
font keep the same PostScript name — which makes ReportLab silently collapse
them into a single face. An earlier build shipped with no bold anywhere in it
for exactly that reason, so `fonts.py` asserts the names are distinct before it
finishes.

## Keeping the PDF and the web article in step

An article's text lives twice: here for the PDF, and in
`react-app/src/data/insights.ts` for the web page. `refs.py` is generated from
`insights.ts` so the citation list cannot diverge; the body text is not, so a
correction has to be made in both places.

## Scripts for articles 1–3

Not in this directory. They were written in a session scratchpad and lost when
it was cleared — only the built PDFs were committed. Their full text survives in
`insights.ts`, so a build script can be reconstructed from there if one of those
PDFs ever needs to change.
