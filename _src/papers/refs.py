# -*- coding: utf-8 -*-
"""The series reference list, shared by every paper that carries one.

Transcribed once and used by both the PDFs and the web articles, so a
correction to a citation lands everywhere rather than in whichever copy
happened to be edited. The web side keeps its own copy in
react-app/src/data/insights.ts; this file is generated from it.
"""

REFERENCES = [
    ("United Nations and UN agencies", [
        "UN Office for Digital and Emerging Technologies (ODET) — Universal DPI Safeguards Framework and DPI Safeguards Resource Hub, co-led with UNDP.",
        "UN Development Programme (UNDP) — Digital Public Infrastructure guidance and co-stewardship of the Digital Public Goods Alliance.",
        "UN General Assembly — Global Digital Compact (2024) and associated digital cooperation follow-up processes.",
        "International Telecommunication Union (ITU) — GovStack Initiative (with GIZ, Estonia and UNDP), reusable government Building Block specifications.",
        "UN Conference on Trade and Development (UNCTAD) — Digital Economy Report series, covering cross-border data flows and data sovereignty for developing economies.",
        "World Bank Group — Identification for Development (ID4D) Practitioner’s Guide and Principles on Identification for Sustainable Development.",
        "World Bank — “Resilient, Secure and Trusted: The Next Frontier for Digital Public Infrastructure” (2025).",
        "World Economic Forum — “Building Security into India’s Digital Public Infrastructure” (October 2025) and DPI security risk taxonomy.",
        "OECD — Going Digital project and DPI security and governance guidance, including modular and federated architecture recommendations.",
    ]),
    ("European Union, ENISA and European bodies", [
        "European Union — General Data Protection Regulation (GDPR), Regulation (EU) 2016/679, including Chapter V cross-border transfer rules and Article 48.",
        "European Union — Cloud and AI Development Act (CADA), proposed 3 June 2026 as part of the European Technological Sovereignty Package.",
        "European Union — EU AI Act, in force August 2024; classifies AI used in biometric identification, social benefits determination and essential-services access as high risk.",
        "European Union — Digital Services Act (DSA) and Digital Markets Act (DMA), platform governance and gatekeeper obligations.",
        "European Union — Network and Information Security Directive 2 (NIS2), critical-infrastructure cybersecurity obligations across Member States.",
        "European Union Agency for Cybersecurity (ENISA) — cybersecurity guidance, threat landscape reporting and technical input to the EU Cybersecurity Certification Scheme for Cloud Services (EUCS).",
        "Court of Justice of the European Union — Schrems II (Case C-311/18, 2020), invalidating the EU–US Privacy Shield.",
        "European Data Protection Board — Recommendations 01/2020 on supplementary measures for cross-border data transfers.",
        "European Commission — European Technological Sovereignty Package (3 June 2026), including the EU Open Source Strategy and Chips Act 2.0.",
        "European Commission, DG CONNECT — Cloud Sovereignty Framework and “Shaping Europe’s Digital Future” portal.",
    ]),
    ("United States: statutes, authorities and agencies", [
        "Clarifying Lawful Overseas Use of Data Act (CLOUD Act), 2018 — establishes provider “possession, custody, or control”, not data location, as the trigger for compelled disclosure.",
        "Foreign Intelligence Surveillance Act (FISA) Section 702 — authorises US agencies to direct US-based providers to disclose communications of non-US persons abroad.",
        "Executive Order 12333 (1981, as amended) — foundational authority for US signals intelligence collection outside the United States.",
        "USA PATRIOT Act Section 215 — authority for compelled production of “tangible things” relevant to foreign intelligence investigations.",
        "United States v. Microsoft Corp. (2018) — the Dublin email-disclosure dispute that the CLOUD Act rendered moot.",
        "US National Institute of Standards and Technology (NIST) — Digital Identity Guidelines (SP 800-63-4); Secure Software Development Framework (SP 800-218); Cybersecurity Framework; AI Risk Management Framework.",
        "US Cybersecurity and Infrastructure Security Agency (CISA) — advisories, Known Exploited Vulnerabilities catalogue and critical-infrastructure guidance.",
        "US National Trade Estimate Report on Foreign Trade Barriers, 2026 edition — trade-policy treatment of foreign data localisation and sovereign cloud measures.",
    ]),
    ("Other national and regional regimes", [
        "China — Cybersecurity Law (2017), Data Security Law (2021), Personal Information Protection Law (2021), and Article 7 of the National Intelligence Law (2017).",
        "Russian Federation — Federal Law No. 152-FZ “On Personal Data”, requiring localisation of citizens’ personal data on servers within Russia.",
        "India — Digital Personal Data Protection Act (2023) and the Data Empowerment and Protection Architecture / Account Aggregator consent framework.",
        "Brazil — Lei Geral de Proteção de Dados Pessoais (LGPD), with extraterritorial effect and an independent supervisory authority.",
        "Estonia — Data Embassy concept and bilateral treaty with Luxembourg, extending Estonian jurisdiction to offshore infrastructure.",
        "Canada — Foreign Extraterritorial Measures Act and the emerging Canadian Sovereign Cloud Initiative.",
        "African Union — Digital Transformation Strategy for Africa (2020–2030) and the AfCFTA e-commerce protocol.",
        "Association of Southeast Asian Nations — ASEAN Digital Masterplan 2025.",
    ]),
    ("Cloud and technology providers", [
        "Microsoft — Azure sovereign cloud documentation: EU Data Boundary, Managed HSM external key storage, confidential computing.",
        "Google Cloud — Cloud External Key Manager and Cloud Key Management Service documentation on customer-managed and customer-held keys.",
        "Amazon Web Services — Key Management Service, Nitro Enclaves for confidential computing, and the AWS Digital Sovereignty Pledge.",
        "Thales CipherTrust — guidance on Bring Your Own Key, Hold Your Own Key and external key management for cloud data sovereignty.",
        "Utimaco — Enterprise Secure Key Manager, general-purpose HSMs and double key encryption reference architectures.",
        "Open Source Security Foundation / Linux Foundation — OpenSSF Scorecard and Supply-chain Levels for Software Artifacts (SLSA).",
    ]),
    ("DPI and DPG frameworks and communities", [
        "Digital Public Goods Alliance — DPG Registry, DPG Standard and the 50-in-5 campaign.",
        "MOSIP Foundation / IIIT-Bangalore — security architecture documentation for digital identity digital public goods.",
        "Mojaloop Foundation — security model and architecture for interoperable instant payment infrastructure.",
        "Estonia X-Road / Nordic Institute for Interoperability Solutions — secure government data exchange reference architecture.",
        "Centre for Digital Public Infrastructure / IIIT-Bangalore — DPI architecture and governance guidance, including G2P Connect specifications.",
        "Co-Develop Fund and the Global DPI Summit — country DPI journey funding and convening.",
        "Bill &amp; Melinda Gates Foundation — Digital Public Infrastructure programme funding MOSIP, Mojaloop, DHIS2 and the Upanzi Network.",
        "Digital Impact Alliance — Principles for Digital Development.",
    ]),
    ("Threat intelligence, standards and technical references", [
        "CrowdStrike — 2026 Global Threat Report (Counter Adversary Operations).",
        "MITRE ATT&amp;CK Framework — knowledge base of adversary tactics, techniques and procedures for nation-state threat modelling.",
        "OWASP Foundation — OWASP API Security Top 10.",
        "Center for Internet Security — CIS Benchmarks for cloud infrastructure and operating system hardening.",
        "ISO/IEC — ISO/IEC 27001 (Information Security Management) and ISO/IEC 42001 (AI Management Systems).",
        "Center for Strategic and International Studies — Significant Cyber Incidents Tracker and “Approaches to Digital Public Infrastructure in the Global South”.",
        "IBM — Cost of a Data Breach Report (2024 edition, regional analysis).",
        "Thomas Murray — GCC Regional Risk Update series (2026).",
        "Dubai Electronic Security Center — Dubai Cyber Security Strategy, cited as a reference model for institutionalised cyber governance.",
    ]),
]


def ref_block(S, bullets, groups=REFERENCES):
    """Flowables for the reference section: a note, then a heading per group."""
    from reportlab.platypus import Paragraph
    out = [
        Paragraph("References and further reading", S["h1"]),
        Paragraph(
            "This list is organised by institutional category to help readers navigate quickly to the "
            "type of source most relevant to their work. It reflects the regulatory and threat landscape "
            "as understood at the time of writing, and should be revisited periodically: several of the "
            "instruments listed remain subject to active negotiation and change.", S["body"]),
    ]
    for heading, items in groups:
        out.append(Paragraph(heading, S["h3"]))
        out.append(bullets(items))
    return out
