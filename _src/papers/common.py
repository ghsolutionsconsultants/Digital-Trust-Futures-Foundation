# -*- coding: utf-8 -*-
"""Front matter, author note and Foundation note shared by every paper."""
from reportlab.platypus import Paragraph, Spacer, Image, Table, TableStyle
from reportlab.lib.units import mm

from dtff_paper import (S, LOGO, brand_bar, callout, bullets, Spring, ORG,
                        ORG_LEGAL, TAGLINE, EMAIL, WEB, PHONE, RULE)

SERIES_NAME = "Digital Sovereignty in Practice"
SERIES_SUB = "A policy series on control, trust and resilience in the cloud era"


def cover(width, *, article_no, title, subtitle, why_title, why_body, dateline):
    """Cover page: logo, series kicker, title, the 'why now' panel, byline."""
    logo = Image(LOGO, width=52 * mm, height=52 * mm * (466 / 969))
    logo.hAlign = "LEFT"
    return [
        Spacer(1, 4 * mm), logo, Spacer(1, 12 * mm),
        Paragraph(SERIES_NAME.upper(), S["cover_kicker"]),
        Paragraph(title, S["cover_title"]),
        Paragraph(subtitle, S["cover_sub"]),
        brand_bar(width), Spacer(1, 9 * mm),
        Paragraph(f"Digital Sovereignty Series &nbsp;|&nbsp; Article {article_no} of 6",
                  S["eyebrow_teal"]),
        Spacer(1, 3 * mm),
        callout(why_title, why_body, width),
        Spring(reserve=34),
        Paragraph(f"Prepared by Godfrey Kutumela, {ORG}", S["byline"]),
        Paragraph(dateline, S["meta"]),
    ]


AUTHOR_BULLETS = [
    "Trusted advisor to governments, foundations and ecosystem builders delivering secure-by-design DPI across Africa, Latin America and global markets.",
    "Core contributor to large-scale platforms including Mowali (mobile money interoperability infrastructure), Mojaloop (interoperable faster payments), MOSIP (digital identity) and Tazama (fraud systems).",
    "Designs and embeds independent, risk-based security practices across payment systems, identity frameworks and cross-border financial infrastructure.",
    "Works across policy, architecture and implementation layers, translating global standards into deployable security controls.",
    "Contributor to the Digital Public Goods Alliance (DPGA) Privacy Expert Group, shaping global privacy and security indicators.",
    "Active in open-source security, DevSecOps integration and supply chain assurance for reusable digital platforms.",
    "Delivered independent security reviews, penetration testing and architecture governance across critical DPI implementations.",
]

FOUNDATION_PARAS = [
    f"{ORG} is an independent, non-profit public-benefit organisation strengthening the "
    "safety, security, rights, inclusion and trustworthiness of digital public infrastructure (DPI), "
    "digital public goods (DPGs), open-source technology and AI-enabled public services. Its work is "
    "grounded in the recognition that DPI has become critical national infrastructure operating in a "
    "persistent threat environment, requiring independent, ecosystem-level assurance that goes beyond "
    "traditional approaches.",

    "The Foundation operates outside vendor, implementer and platform incentives. It combines "
    "evidence-based cybersecurity, safety and AI-governance assurance with human-rights and child-protection "
    "expertise, and releases its tools, research and frameworks as reusable public goods rather than "
    "proprietary products — so that the value of a single engagement extends to every government, maintainer "
    "and community facing the same risk.",

    f"{ORG_LEGAL} is registered as a non-profit company in South Africa and works across Africa and "
    "the wider Global South, with emphasis on countries and communities adopting DPI under capacity and "
    "assurance constraints.",
]


def back_matter(width):
    """About the author, about the Foundation, and the contact strip."""
    out = [
        Paragraph("About the author", S["h1"]),
        Paragraph("Godfrey Kutumela (He/Him)", S["h3"]),
        Paragraph("CISSP (MSc Information Security), CCSP, CSSLP, TOGAF, ISO 27001 LA, MDP", S["meta"]),
        Paragraph(f"Executive Lead and Digital Trust Practitioner, {ORG}", S["meta"]),
        Spacer(1, 5),
        Paragraph(
            "Godfrey Kutumela is a globally recognised cybersecurity practitioner with over 26 years of "
            "experience shaping secure digital ecosystems across fintech, identity and public infrastructure "
            "environments. He operates at the intersection of Digital Public Infrastructure (DPI), Digital "
            "Public Goods (DPGs) and national-scale platforms, bringing deep expertise in securing systems "
            "where the impact of failure is measured at the population level rather than the enterprise level.",
            S["body"]),
        bullets(AUTHOR_BULLETS),
        Paragraph(
            "His leadership philosophy in the DPI ecosystem is clear: security forms the foundation upon "
            "which safety and trust are built. Safety is what citizens experience in practice, and trust is "
            "the legitimacy that sustains adoption; once lost, it is difficult to restore.",
            S["body"]),

        Paragraph(f"About {ORG}", S["h1"]),
    ]
    for p in FOUNDATION_PARAS:
        out.append(Paragraph(p, S["body"]))

    out += [
        Spacer(1, 6 * mm),
        brand_bar(width),
        Spacer(1, 5 * mm),
        Paragraph(f"<b>{ORG}</b> &nbsp;|&nbsp; {TAGLINE}", S["contact"]),
        Paragraph(f"{EMAIL} &nbsp;|&nbsp; {WEB} &nbsp;|&nbsp; {PHONE}", S["contact"]),
        Spacer(1, 3 * mm),
        Paragraph(
            "Published as a public good. This paper may be shared and quoted with attribution to "
            f"{ORG_LEGAL}. It is provided for general information and does not constitute a "
            "certification, assurance opinion or endorsement of any system, product or jurisdiction.",
            S["contact"]),
    ]
    return out


def toc(width, entries):
    """Simple dot-leader contents table."""
    rows = [[Paragraph(label, S["toc"]),
             Paragraph(f'<font color="#8A929B">{page}</font>', S["toc"])]
            for label, page in entries]
    t = Table(rows, colWidths=[width * 0.9, width * 0.1])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, -1), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, RULE),
    ]))
    return t
