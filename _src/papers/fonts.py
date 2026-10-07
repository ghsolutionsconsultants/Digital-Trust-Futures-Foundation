# -*- coding: utf-8 -*-
"""Build the static font instances the papers embed.

The site ships Newsreader and Inter as variable woff2. ReportLab cannot use
either, so each weight is cut from the variable font as a static TTF.

Two details matter and are easy to get wrong:

  * `updateFontNames=True` fails on Newsreader, which carries an `opsz` axis
    with no matching STAT axis value. Instancing is done with it off and the
    name table rewritten here instead.
  * Every instance must end up with a *distinct* PostScript name. Cutting two
    weights from one variable font leaves both called "Newsreader", and
    ReportLab then silently collapses them into one face — which is how an
    earlier build shipped with no bold anywhere in it.

Run directly to (re)build ./fonts:

    python3 _src/papers/fonts.py
"""
import os
import sys

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, "..", ".."))
WEB_FONTS = os.path.join(REPO, "react-app", "public", "assets", "fonts")
OUT = os.path.join(HERE, "fonts")

# (source woff2, axis settings, family, style, output basename)
CUTS = [
    ("newsreader-300_700-normal-latin.woff2", {"wght": 400, "opsz": 18},
     "DTFFDisplay", "Regular", "DTFFDisplay-Regular"),
    ("newsreader-300_700-normal-latin.woff2", {"wght": 600, "opsz": 18},
     "DTFFDisplay", "SemiBold", "DTFFDisplay-SemiBold"),
    ("inter-300_700-normal-latin.woff2", {"wght": 400},
     "DTFFBody", "Regular", "DTFFBody-Regular"),
    ("inter-300_700-normal-latin.woff2", {"wght": 600},
     "DTFFBody", "SemiBold", "DTFFBody-SemiBold"),
    ("inter-300_700-normal-latin.woff2", {"wght": 700},
     "DTFFBody", "Bold", "DTFFBody-Bold"),
]

# IBM Plex Mono is already static; it only needs the woff2 wrapper removed.
STATIC = [
    ("ibm-plex-mono-400-normal-latin.woff2", "IBMPlexMono-Regular"),
    ("ibm-plex-mono-500-normal-latin.woff2", "IBMPlexMono-Medium"),
]

# nameID: 1 family, 2 style, 3 unique, 4 full, 6 PostScript, 16/17 typographic
def rename(font, family, style):
    full = f"{family} {style}"
    ps = f"{family}-{style}".replace(" ", "")
    values = {1: family, 2: style, 3: f"{ps}; DTFF", 4: full, 6: ps, 16: family, 17: style}
    for rec in font["name"].names:
        if rec.nameID in values:
            rec.string = values[rec.nameID].encode("utf-16-be") if rec.platformID == 3 \
                else values[rec.nameID].encode("latin-1")


def build():
    if not os.path.isdir(WEB_FONTS):
        sys.exit(f"source fonts not found at {WEB_FONTS}")
    os.makedirs(OUT, exist_ok=True)
    made = []

    for src, axes, family, style, base in CUTS:
        path = os.path.join(WEB_FONTS, src)
        if not os.path.exists(path):
            sys.exit(f"missing {path}")
        font = TTFont(path)
        font.flavor = None                      # drop the woff2 wrapper
        # updateFontNames would raise on Newsreader's opsz axis; rename() below
        # does the same job without consulting STAT.
        instantiateVariableFont(font, axes, inplace=True, updateFontNames=False)
        rename(font, family, style)
        out = os.path.join(OUT, base + ".ttf")
        font.save(out)
        made.append(base)

    for src, base in STATIC:
        path = os.path.join(WEB_FONTS, src)
        if not os.path.exists(path):
            sys.exit(f"missing {path}")
        font = TTFont(path)
        font.flavor = None
        out = os.path.join(OUT, base + ".ttf")
        font.save(out)
        made.append(base)

    # Distinct PostScript names are the whole point; prove it rather than hope.
    names = {}
    for base in made:
        f = TTFont(os.path.join(OUT, base + ".ttf"))
        ps = next(r.toUnicode() for r in f["name"].names if r.nameID == 6)
        names.setdefault(ps, []).append(base)
    clashes = {k: v for k, v in names.items() if len(v) > 1}
    if clashes:
        sys.exit(f"PostScript names collide, ReportLab would merge these faces: {clashes}")

    print(f"built {len(made)} fonts in {OUT}")
    for base in made:
        print(f"  {base}")


if __name__ == "__main__":
    build()
