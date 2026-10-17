# -*- coding: utf-8 -*-
"""DTFF perspective — Making Digital Identity Work Across Borders.

Transcribed from `Cross Border Digital Identity Article - 15 Oct 2026.docx`.
This is a standalone perspective piece, not part of the Digital Sovereignty
series: it carries no article number, no contents page and no series bridge.

Two corrections to the source, both verbatim otherwise:
  * "Digital Trust Future Foundation" -> "Digital Trust Futures Foundation";
  * section headings lose their trailing full stops, to match articles 1-4.
"""
from reportlab.platypus import Paragraph, Spacer, NextPageTemplate, PageBreak
from reportlab.lib.units import mm
from dtff_paper import S, build, bullets
from common import perspective_cover, back_matter

TITLE = "Making Digital Identity Work Across Borders"
SUBTITLE = "What has to be agreed before one country can rely on another’s credentials"
RUNNING = "DTFF Perspective · Making Digital Identity Work Across Borders"

SECTIONS = [
    ("Trust must travel with the credential", [
        "Interoperability has legal, regulatory, organisational, technical and operational dimensions. A "
        "working interface does not establish permission to share data or rely on a foreign identity. "
        "Compatible formats do not guarantee equivalent enrolment checks, authentication strength or "
        "institutional oversight. Participants need a common understanding of assurance, supported by "
        "evidence about how credentials are issued, protected, updated and revoked.",

        "Identification, authentication and authorisation must also remain distinct. Establishing identity "
        "does not establish permission to enter a country, practise a profession or receive a particular "
        "service. Likewise, a verified identity is only one part of financial due diligence. It does not "
        "automatically establish beneficial ownership, source of funds or other information a regulated "
        "institution must assess. Each service should specify the attributes it needs and the decisions that "
        "remain its responsibility.",
    ]),
    ("Build around useful services", [
        "Travel documents, health credentials, financial onboarding and professional qualifications "
        "illustrate different reasons to recognise identity across borders. Their requirements should not be "
        "forced into one model. A border authority needs different evidence from a remittance provider or an "
        "employer checking a qualification. More sensitive uses, including policing and personnel vetting, "
        "require particularly strong legal justification, accuracy controls, and due process.",

        "Passports, national identity systems, wallets and visas should evolve coherently while retaining "
        "distinct functions. A passport supports evidence of nationality and identity for travel; a visa "
        "records permission granted by the destination. A wallet can carry credentials issued by different "
        "authorities, but cannot make them legally interchangeable. The goal should be compatible trust "
        "mechanisms and clearly assigned authority, with separate permissions and data use for each service.",

        "A focused corridor between willing countries can test these arrangements before wider expansion. "
        "The pilot should address a genuine user problem, involve institutions authorised to act, and "
        "measure improvements against existing practice. Bilateral implementation can generate lessons for a "
        "broader trust framework, while legal recognition and liability arrangements must be settled before "
        "live reliance begins. Regional agreements can then extend proven arrangements rather than attempt "
        "to resolve every use case at once.",
    ]),
    ("Secure the whole chain of reliance", [
        "Cross-border verification inherits risks from issuers, intermediaries, devices and relying "
        "institutions. A compromised signing key, fraudulent enrolment or poorly controlled broker can "
        "undermine confidence beyond the original organisation. Participants therefore need a minimum "
        "security baseline, independent assessment, incident notification and the ability to suspend unsafe "
        "connections. Assurance must cover the complete service, including suppliers and operational "
        "dependencies.",

        "Federated verification and user-held credentials can reduce unnecessary centralisation, but neither "
        "guarantees privacy or resilience. A broker may accumulate revealing authentication metadata, while "
        "a wallet may be vulnerable through the user’s device or recovery process. Designs should "
        "minimise disclosed attributes, limit retention and avoid persistent identifiers that enable "
        "tracking across unrelated services. Any intermediary should be assessed for what it sees, stores, "
        "and can infer.",

        "Revocation and recovery deserve equal attention to initial verification. Participants must be able "
        "to respond when credentials are lost, compromised, or withdrawn, and to communicate relevant status "
        "changes reliably. Services also need tested procedures for outages, interrupted connectivity, and "
        "compromised issuers. <b>An apparently secure design that leaves legitimate users stranded during a "
        "disruption has not met its purpose.</b>",
    ]),
    ("Make inclusion and accountability conditions of participation", [
        "The people who could benefit most may lack current documents, smartphones, reliable connectivity or "
        "the ability to navigate complex appeals. Verification should therefore include proportionate "
        "alternatives and assisted channels appropriate to the service and applicable law. Essential rights "
        "and services should not depend on possessing a credential designed for border control. Providers "
        "should measure rejection, abandonment and recovery alongside speed, cost and fraud.",

        "Purpose limits must be enforceable. Information collected to help someone access a service should "
        "not quietly become a resource for unrelated surveillance. Proposed data sharing needs a lawful "
        "basis, defined recipients, necessary attributes and clear retention rules. Where consent is relied "
        "upon, it must be meaningful; it cannot substitute for safeguards or cure an otherwise unlawful use. "
        "People need understandable notice and accessible routes to correction and review.",

        "Liability must be agreed before institutions rely on one another’s assertions. The issuer, "
        "intermediary and receiving institution should know their duties when information is inaccurate or a "
        "control fails. Oversight should be able to inspect evidence, investigate complaints and require "
        "corrective action. A verified identity must never be treated as proof of wrongdoing, and any "
        "adverse vetting result requires an appropriate process for challenge.",
    ]),
    ("Turn interoperability into accountable practice", [
        "The first implementation decisions should concern purpose, partners and authority. Select a small "
        "number of services, map the legal and regulatory requirements, and agree which institution is "
        "authoritative for each attribute. Then define assurance equivalence, data-sharing limits, "
        "liability, security requirements and recovery arrangements. <b>Technical architecture should "
        "implement these decisions, rather than determine them by default.</b>",

        "Identity authorities, central banks, financial intelligence units, data-protection regulators, "
        "immigration bodies, justice institutions, service providers and civil society all have relevant "
        "responsibilities. Their involvement should follow the chosen use case, with named owners for "
        "unresolved questions. Pilot results should report benefits and failures honestly, including who "
        "remains excluded and whether corrective measures work. Expansion should depend on those results and "
        "continued compliance with participation requirements.",

        "The Digital Trust Futures Foundation can contribute through independent assurance, cross-sector "
        "dialogue and open evaluation methods. Its role should be to test security and trust claims, make "
        "evidence usable to decision-makers, and help institutions address identified gaps. Published "
        "conflict policies, transparent methods, and separation from commercial interests are essential to "
        "that role. Cross-border identity becomes valuable when people can use it safely, institutions can "
        "justify their reliance, and failures can be corrected without stripping people of access or "
        "dignity.",
    ]),
]

SELECTED_REFERENCES = [
    "FATF — Guidance on Digital Identity (2020).",
    "UNCITRAL — Model Law on the Use and Cross-border Recognition of Identity Management and Trust "
    "Services (2022).",
    "ICAO — Doc 9303, Machine Readable Travel Documents.",
    "World Health Organization — Global Digital Health Certification Network.",
]


def story(width):
    s = perspective_cover(
        width,
        title=TITLE,
        subtitle=SUBTITLE,
        why_title="Why this matters now",
        why_body=[
            "Cross-border digital identity should make it easier for people to access services and "
            "demonstrate legitimate credentials without repeatedly surrendering personal information. Its "
            "success depends on whether an institution in one country can lawfully and confidently rely on "
            "evidence issued in another. Connecting databases is only part of the task. Governments must "
            "also agree what a credential proves, who may use it, who answers for mistakes, and how people "
            "recover when verification fails."
        ],
        dateline="October 2026 &nbsp;|&nbsp; Classification: Public",
    )
    s += [NextPageTemplate("Body"), PageBreak()]

    s += [
        Paragraph(
            "For Africa, this is an opportunity to improve access for migrants, traders and mobile workers "
            "while strengthening institutional accountability. The practical starting point is a limited set "
            "of useful services, supported by clear rules and independent assurance. A system should earn "
            "wider acceptance through evidence of security, inclusion and operational reliability.",
            S["lede"]),
    ]

    for heading, paras in SECTIONS:
        s.append(Paragraph(heading, S["h1"]))
        for p in paras:
            s.append(Paragraph(p, S["body"]))

    s += [
        Paragraph("Selected references", S["h1"]),
        bullets(SELECTED_REFERENCES),
        Spacer(1, 9 * mm),
    ]
    s += back_matter(width)
    return s


if __name__ == "__main__":
    import sys
    out = sys.argv[1]
    build(out, {
        "title": f"{TITLE} — {SUBTITLE}",
        "author": "Godfrey Kutumela, Digital Trust Futures Foundation",
        "subject": "DTFF Perspective",
        "running_head": RUNNING,
        "classification": "Public  |  October 2026",
    }, story)
    print("wrote", out)
