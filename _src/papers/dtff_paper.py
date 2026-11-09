# -*- coding: utf-8 -*-
"""The Foundation's paper template: brand constants, styles and flowables.

Geometry matches the published articles exactly: A4, 22mm side margins, a 7mm
navy spine down the cover's left edge carrying an orange and a teal band, a mono
running head on body pages and a footer carrying classification, organisation
and page number.

Run `python3 _src/papers/fonts.py` once before building any paper.
"""
import os

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, PageTemplate, Paragraph,
                                Spacer, Table, TableStyle, Image, ListFlowable,
                                ListItem, PageBreak, Flowable, KeepTogether)

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.environ.get("DTFF_REPO", os.path.abspath(os.path.join(HERE, "..", "..")))
FONT_DIR = os.path.join(HERE, "fonts")
LOGO = os.path.join(REPO, "react-app", "public", "assets", "img", "logo-full.png")

ORG = "Digital Trust Futures Foundation"
ORG_LEGAL = "Digital Trust Futures Foundation NPC"
TAGLINE = "Safe infrastructure. Trusted technology. Inclusive digital futures."
EMAIL = "info@digitaltrustfuturesfoundation.org"
WEB = "digitaltrustfuturesfoundation.org"
PHONE = "+27 83 680 3427"

# Sampled from the Foundation wordmark; identical to the site's tokens.
NAVY = colors.HexColor("#133A63")
NAVY_DEEP = colors.HexColor("#0A1F36")
ORANGE = colors.HexColor("#BC5012")
TEAL = colors.HexColor("#247E83")
BRASS = colors.HexColor("#8A6A3B")
PAPER = colors.HexColor("#F7F5F1")
PAPER_2 = colors.HexColor("#F2F0EC")
RULE = colors.HexColor("#DFD9D0")
INK = colors.HexColor("#131C26")
INK_2 = colors.HexColor("#37434F")
MUTED = colors.HexColor("#5A6672")
FAINT = colors.HexColor("#8A929B")

PAGE_W, PAGE_H = A4
MARGIN = 22 * mm
SPINE_W = 7 * mm


def register_fonts():
    faces = [
        ("Display", "DTFFDisplay-Regular.ttf"),
        ("Display-Bold", "DTFFDisplay-SemiBold.ttf"),
        ("Body", "DTFFBody-Regular.ttf"),
        ("Body-Semi", "DTFFBody-SemiBold.ttf"),
        ("Body-Bold", "DTFFBody-Bold.ttf"),
        ("Mono", "IBMPlexMono-Regular.ttf"),
        ("Mono-Medium", "IBMPlexMono-Medium.ttf"),
    ]
    missing = [f for _, f in faces if not os.path.exists(os.path.join(FONT_DIR, f))]
    if missing:
        raise SystemExit(
            f"missing font instances: {missing}\nRun: python3 {os.path.join(HERE, 'fonts.py')}")
    for name, filename in faces:
        pdfmetrics.registerFont(TTFont(name, os.path.join(FONT_DIR, filename)))
    pdfmetrics.registerFontFamily("Body", normal="Body", bold="Body-Bold",
                                  italic="Body", boldItalic="Body-Bold")


register_fonts()

S = {}
S["eyebrow"] = ParagraphStyle("eyebrow", fontName="Mono-Medium", fontSize=7.8,
                              leading=12, textColor=ORANGE, spaceAfter=3)
S["eyebrow_teal"] = ParagraphStyle("eyebrow_teal", parent=S["eyebrow"], textColor=TEAL)
S["cover_kicker"] = ParagraphStyle("cover_kicker", fontName="Mono-Medium", fontSize=8.2,
                                   leading=13, textColor=ORANGE, spaceAfter=10)
S["cover_title"] = ParagraphStyle("cover_title", fontName="Display-Bold", fontSize=25,
                                  leading=30, textColor=NAVY_DEEP, spaceAfter=9)
S["cover_sub"] = ParagraphStyle("cover_sub", fontName="Display", fontSize=13.5,
                                leading=19, textColor=INK_2, spaceAfter=14)
S["h1"] = ParagraphStyle("h1", fontName="Display-Bold", fontSize=17, leading=22,
                         textColor=NAVY_DEEP, spaceBefore=16, spaceAfter=8)
S["h2"] = ParagraphStyle("h2", fontName="Display-Bold", fontSize=13.5, leading=18,
                         textColor=NAVY, spaceBefore=12, spaceAfter=6)
S["h3"] = ParagraphStyle("h3", fontName="Body-Semi", fontSize=10.5, leading=15,
                         textColor=NAVY, spaceBefore=10, spaceAfter=4)
S["body"] = ParagraphStyle("body", fontName="Body", fontSize=9.6, leading=15.2,
                           textColor=INK_2, spaceAfter=9)
S["body_tight"] = ParagraphStyle("body_tight", parent=S["body"], spaceAfter=4)
S["lede"] = ParagraphStyle("lede", fontName="Body", fontSize=10.6, leading=16.6,
                           textColor=INK, spaceAfter=10)
S["bullet"] = ParagraphStyle("bullet", parent=S["body"], spaceAfter=5, leading=14.6)
S["quote"] = ParagraphStyle("quote", fontName="Display", fontSize=12, leading=18,
                            textColor=NAVY_DEEP, spaceAfter=0)
S["callout_h"] = ParagraphStyle("callout_h", fontName="Body-Semi", fontSize=9.6,
                                leading=14, textColor=NAVY_DEEP, spaceAfter=3)
S["callout"] = ParagraphStyle("callout", fontName="Body", fontSize=9.3, leading=14.4,
                              textColor=INK_2, spaceAfter=4)
S["th"] = ParagraphStyle("th", fontName="Body-Semi", fontSize=8.3, leading=12,
                         textColor=NAVY_DEEP)
S["td"] = ParagraphStyle("td", fontName="Body", fontSize=8.3, leading=12.4, textColor=INK_2)
S["td_b"] = ParagraphStyle("td_b", fontName="Body-Semi", fontSize=8.3, leading=12.4,
                           textColor=NAVY_DEEP)
S["meta"] = ParagraphStyle("meta", fontName="Body", fontSize=9, leading=14,
                           textColor=MUTED, spaceAfter=3)
S["byline"] = ParagraphStyle("byline", fontName="Body-Semi", fontSize=10, leading=15,
                             textColor=NAVY_DEEP, spaceAfter=2)
S["contact"] = ParagraphStyle("contact", fontName="Body", fontSize=8.6, leading=13,
                              textColor=MUTED, spaceAfter=3)
S["caption"] = ParagraphStyle("caption", fontName="Body", fontSize=8.2, leading=12,
                              textColor=MUTED, spaceBefore=5, spaceAfter=12)
S["stat_v"] = ParagraphStyle("stat_v", fontName="Display-Bold", fontSize=15, leading=18,
                             textColor=NAVY_DEEP, spaceAfter=3)
S["stat_l"] = ParagraphStyle("stat_l", fontName="Body", fontSize=7.9, leading=11.2,
                             textColor=INK_2)
S["toc"] = ParagraphStyle("toc", fontName="Body", fontSize=9.4, leading=17,
                          textColor=INK_2)


class Spring(Flowable):
    """Absorbs the frame's remaining height, less `reserve` for what follows.

    Used to sit the cover byline on the baseline of the frame however tall the
    panel above it turns out to be.
    """

    def __init__(self, reserve=0):
        Flowable.__init__(self)
        self.reserve = reserve

    def wrap(self, availWidth, availHeight):
        self.width = availWidth
        self.height = max(0, availHeight - self.reserve)
        return self.width, self.height

    def draw(self):
        pass


def brand_bar(width, thickness=3):
    """Navy / orange / teal bar — the same device used across the website."""
    t = Table([[""] * 3], colWidths=[width * 0.42, width * 0.26, width * 0.32],
              rowHeights=[thickness])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, 0), NAVY),
        ("BACKGROUND", (1, 0), (1, 0), ORANGE),
        ("BACKGROUND", (2, 0), (2, 0), TEAL),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t


def callout(title, body_paras, width, accent=ORANGE, bg=PAPER_2):
    """Tinted panel with an accent rule down the left edge.

    One paragraph per row so the panel can split across a page break, with the
    heading bound to the first paragraph so it can never be stranded alone at
    the foot of a page. A single-row version is atomic and orphans onto a page
    of its own whenever it does not fit in the space remaining.
    """
    body = [Paragraph(b, S["callout"]) for b in body_paras]
    if title:
        head = [Paragraph(title, S["callout_h"])]
        rows = [[head + body[:1]]] + [[b] for b in body[1:]]
    else:
        rows = [[b] for b in body]

    t = Table(rows, colWidths=[width], repeatRows=0)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("LINEBEFORE", (0, 0), (0, -1), 2.4, accent),
        ("LEFTPADDING", (0, 0), (-1, -1), 11), ("RIGHTPADDING", (0, 0), (-1, -1), 11),
        ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("TOPPADDING", (0, 0), (-1, 0), 9),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 9),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def pull_quote(text, width, attrib=None):
    """Display-face quotation with an orange rule down the left edge."""
    rows = [[Paragraph(text, S["quote"])]]
    if attrib:
        rows.append([Paragraph(attrib, S["meta"])])
    t = Table(rows, colWidths=[width])
    t.setStyle(TableStyle([
        ("LINEBEFORE", (0, 0), (0, -1), 2.4, ORANGE),
        ("LEFTPADDING", (0, 0), (-1, -1), 14), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def data_table(header, rows, width, col_ratios=None):
    """Header band, hairline rules, first column emphasised."""
    n = len(header)
    ratios = col_ratios or [1.0 / n] * n
    widths = [width * r for r in ratios]

    data = [[Paragraph(h, S["th"]) for h in header]]
    for row in rows:
        data.append([Paragraph(c, S["td_b"] if i == 0 else S["td"])
                     for i, c in enumerate(row)])

    t = Table(data, colWidths=widths, repeatRows=1)
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), PAPER_2),
        ("LINEBELOW", (0, 0), (-1, 0), 0.8, NAVY_DEEP),
        ("LINEBELOW", (0, 1), (-1, -2), 0.3, RULE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]
    t.setStyle(TableStyle(style))
    return t


def bullets(items, marker_colour=ORANGE, numbered=False):
    """A bulleted or numbered list.

    `value` is deliberately not set on the items: for a bullet list ReportLab
    would take the integer as bullet text and fail when measuring it.
    """
    flow = [ListItem(Paragraph(t, S["bullet"]), leftIndent=14) for t in items]
    kwargs = dict(leftIndent=15, bulletDedent=13, spaceAfter=8,
                  bulletColor=marker_colour)
    if numbered:
        kwargs.update(bulletType="1", start=1, bulletFontName="Body-Semi",
                      bulletFontSize=8.6, bulletOffsetY=0)
    else:
        kwargs.update(bulletType="bullet", start="•", bulletFontName="Body",
                      bulletFontSize=7.5, bulletOffsetY=-1.6)
    return ListFlowable(flow, **kwargs)


class Paper(BaseDocTemplate):
    """Cover page plus body pages, with running head and footer."""

    def __init__(self, path, meta, **kw):
        self.meta = meta
        BaseDocTemplate.__init__(self, path, pagesize=A4,
                                 leftMargin=MARGIN, rightMargin=MARGIN,
                                 topMargin=MARGIN, bottomMargin=MARGIN,
                                 title=meta.get("title", ""),
                                 author=meta.get("author", ""),
                                 subject=meta.get("subject", ""),
                                 creator=ORG, **kw)

        frame_w = PAGE_W - 2 * MARGIN
        cover_frame = Frame(MARGIN, MARGIN, frame_w, PAGE_H - 2 * MARGIN,
                            id="cover", leftPadding=0, rightPadding=0,
                            topPadding=0, bottomPadding=0)
        body_frame = Frame(MARGIN, MARGIN + 6 * mm, frame_w,
                           PAGE_H - 2 * MARGIN - 14 * mm,
                           id="body", leftPadding=0, rightPadding=0,
                           topPadding=0, bottomPadding=0)

        self.addPageTemplates([
            PageTemplate(id="Cover", frames=[cover_frame], onPage=self.cover_page),
            PageTemplate(id="Body", frames=[body_frame], onPage=self.body_page),
        ])

    def cover_page(self, canvas, doc):
        canvas.saveState()
        canvas.setFillColor(NAVY_DEEP)
        canvas.rect(0, 0, SPINE_W, PAGE_H, stroke=0, fill=1)
        # Two accent bands set into the spine, each 16% of the page height.
        band = PAGE_H * 0.16
        canvas.setFillColor(ORANGE)
        canvas.rect(0, PAGE_H * 0.62, SPINE_W, band, stroke=0, fill=1)
        canvas.setFillColor(TEAL)
        canvas.rect(0, PAGE_H * 0.62 - band, SPINE_W, band, stroke=0, fill=1)
        self._footer(canvas)
        canvas.restoreState()

    def body_page(self, canvas, doc):
        canvas.saveState()
        canvas.setFont("Mono", 7)
        canvas.setFillColor(FAINT)
        canvas.drawString(MARGIN, PAGE_H - 48, self.meta.get("running_head", ""))
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.4)
        canvas.line(MARGIN, PAGE_H - 53.9, PAGE_W - MARGIN, PAGE_H - 53.9)
        self._footer(canvas)
        canvas.restoreState()

    def _footer(self, canvas):
        y = 36.8
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.4)
        canvas.line(MARGIN, y + 14.2, PAGE_W - MARGIN, y + 14.2)
        canvas.setFont("Mono", 7)
        canvas.setFillColor(FAINT)
        canvas.drawString(MARGIN, y, self.meta.get("classification", "Public"))
        canvas.drawCentredString(PAGE_W / 2, y, ORG)
        canvas.drawRightString(PAGE_W - MARGIN, y, f"Page {canvas.getPageNumber()}")


class Figure(Flowable):
    """A bordered full-width image with its caption, drawn as one unit.

    An atomic figure that misses the space left on a page jumps whole to the
    next one and strands a half-empty page behind it. This one shrinks to fit
    the space available, down to `min_scale` of its natural size; only below
    that does it defer to the next page.
    """
    PAD = 4

    def __init__(self, path, caption, width, max_h=None, min_scale=0.62):
        Flowable.__init__(self)
        from reportlab.lib.utils import ImageReader
        self.path = path
        self.frame_w = width
        iw, ih = ImageReader(path).getSize()
        self.ratio = ih / iw
        nat_h = (width - 2 * self.PAD) * self.ratio
        self.nat_img_h = min(nat_h, max_h) if max_h else nat_h
        self.min_scale = min_scale
        self.cap = Paragraph(caption, S["caption"])
        self.img_h = self.nat_img_h

    def _cap_h(self, w):
        _, h = self.cap.wrap(w, 1000)
        return h + S["caption"].spaceBefore + S["caption"].spaceAfter

    def wrap(self, availW, availH):
        cap_h = self._cap_h(self.frame_w)
        room = availH - cap_h - 2 * self.PAD
        if self.nat_img_h <= room:
            self.img_h = self.nat_img_h
        elif room >= self.nat_img_h * self.min_scale:
            self.img_h = room
        else:
            self.img_h = self.nat_img_h        # too tight: let the frame move it on
        self.width = self.frame_w
        self.height = self.img_h + 2 * self.PAD + cap_h
        return self.width, self.height

    def draw(self):
        c = self.canv
        cap_h = self._cap_h(self.frame_w)
        box_h = self.img_h + 2 * self.PAD
        c.saveState()
        c.setStrokeColor(RULE)
        c.setLineWidth(0.4)
        c.rect(0, cap_h, self.frame_w, box_h, stroke=1, fill=0)
        img_w = self.img_h / self.ratio
        c.drawImage(self.path, (self.frame_w - img_w) / 2, cap_h + self.PAD,
                    width=img_w, height=self.img_h, mask="auto")
        c.restoreState()
        self.cap.wrap(self.frame_w, cap_h)
        self.cap.drawOn(c, 0, S["caption"].spaceAfter)


def figure(path, caption, width, max_h=None):
    return Figure(path, caption, width, max_h=max_h)


def stats_strip(items, width):
    """A row of key figures: a short display-face value over a one-line label."""
    n = len(items)
    cells = [[Paragraph(v, S["stat_v"]), Paragraph(l, S["stat_l"])] for v, l in items]
    t = Table([cells], colWidths=[width / n] * n)
    style = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEABOVE", (0, 0), (-1, 0), 2, ORANGE),
        ("BACKGROUND", (0, 0), (-1, -1), PAPER_2),
        ("LEFTPADDING", (0, 0), (-1, -1), 9), ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]
    for i in range(1, n):
        style.append(("LINEBEFORE", (i, 0), (i, 0), 0.4, RULE))
    t.setStyle(TableStyle(style))
    return t


def build(path, meta, story_fn):
    doc = Paper(path, meta)
    width = PAGE_W - 2 * MARGIN
    doc.build(story_fn(width))
