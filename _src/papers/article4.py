# -*- coding: utf-8 -*-
"""Article 4 of 6 — Sovereignty by Design.

Transcribed from `Digital Sovereignty Series Article 4 Sovereignty by Design in
DPI - Expanded Six Layers - 1 Oct 2026.docx`, rebranded from Nucleus Systems to
the Foundation and corrected for four editing artifacts carried in the source:

  * a stray "777" spliced into the executive summary;
  * the sentence "No country achieves full sovereignty at go-live..." appearing
    twice in section 3;
  * "The roadmap below preserves the practical sequence from the full paper",
    a leftover reference to a document this article does not ship with;
  * "(Section 5)" / "(Section 6)" cross-references in the layer table, pointing
    at sections that do not exist here.
"""
from reportlab.platypus import Paragraph, Spacer, NextPageTemplate, PageBreak
from reportlab.lib.units import mm
from dtff_paper import (S, build, data_table, callout, bullets, TEAL)
from common import cover, back_matter, toc
from refs import REFERENCES, ref_block

TITLE = "Sovereignty by Design"
SUBTITLE = "Building DPI architecture, roadmaps and regional resilience"
RUNNING = "Digital Sovereignty Series · Article 4 of 6 · Sovereignty by Design"

CONTENTS = [
    ("Executive summary", "3"),
    ("1. Sovereignty must be designed in at the architecture stage", "4"),
    ("2. A six-layer sovereignty-aware DPI architecture", "4"),
    ("2.1 The six layers in detail", "5"),
    ("3. A phased sovereignty roadmap", "7"),
    ("4. Regional and shared sovereignty architecture", "8"),
    ("Series bridge", "9"),
    ("About the author", "10"),
    ("About Digital Trust Futures Foundation", "10"),
    ("References and further reading", "11"),
]

KEY_POINTS = [
    "Security and sovereignty controls are cheaper and more effective when designed in before go-live.",
    "DPI sovereignty requires governance, trust, data protection, platform security, operations and ecosystem controls to work together.",
    "A credible roadmap is a 36-month-plus commitment, not a procurement milestone.",
    "Regional infrastructure, shared CSIRT capacity and pooled assurance can turn sovereignty from aspiration into capability.",
]

TAKEAWAYS = [
    "Treat sovereignty as an architectural requirement from day one, because every control deferred past go-live becomes harder, costlier and less complete to retrofit.",
    "Anchor control in the trust layer, since whoever holds the keys, administers the environment and sees the logs ultimately determines whether data sovereignty is real.",
    "Measure progress through independent assessment rather than policy statements, so that the gap between declared and actual sovereignty narrows instead of widening over time.",
]

LAYERS = [
    ["Governance",
     "Legal basis, accountability, oversight, procurement controls, incident authority, audit rights.",
     "Determines who actually owns the decisions, not just who operates the system day-to-day."],
    ["Trust",
     "Identity, authentication, authorisation, consent, signing, key management.",
     "The layer where data sovereignty is technically enforced or abandoned, depending on who holds the keys."],
    ["Data protection",
     "Minimisation, purpose limitation, retention controls, encryption, privacy impact assessment.",
     "Reduces the value and legal exposure of a breach, and underpins protection of personal information."],
    ["Platform security",
     "Secure SDLC, API security, secrets management, logging, patching, vulnerability management.",
     "Where supply chain risk inherited from digital public goods enters the system."],
    ["Operations",
     "Monitoring, SOC workflows, incident response, backup and recovery, continuity, and third-party risk.",
     "Determines whether operational sovereignty is real, or only a policy aspiration."],
    ["Ecosystem",
     "Certification, onboarding controls, interoperability testing, fraud controls, provider offboarding.",
     "The weakest participant in an interoperable network sets the practical security floor for everyone connected to it."],
]

LAYER_DETAIL = [
    ("01. Governance",
     "Defines the legal and institutional authority for the DPI: mandate, ownership, accountability, "
     "oversight, procurement, audit rights, incident authority, and the rules governing outsourcing or "
     "shared infrastructure.",
     "Decision rights must remain clear even when technology and operations are delegated. Contracts, laws "
     "and governance bodies should preserve the state’s ability to direct, inspect, challenge, replace "
     "and recover critical services.",
     "Named accountable owners; enforceable audit and access rights; incident decision authority; supplier "
     "exit and transition clauses; documented oversight and independent assurance."),
    ("02. Trust",
     "Controls the roots of digital trust: identity proofing, authentication, authorisation, consent, "
     "digital signing and cryptographic key management that determine who or what is trusted across the "
     "ecosystem.",
     "Control of keys, privileged identities and trust anchors determines whether technical sovereignty is "
     "real. Key generation, custody, rotation, recovery and revocation should not depend on an actor the "
     "country cannot independently govern.",
     "HSM-backed key custody; dual control and separation of duties; controlled privileged access; auditable "
     "trust-anchor changes; tested emergency revocation and recovery."),
    ("03. Data protection",
     "Governs how personal and sensitive data is collected, used, shared, retained, encrypted and deleted, "
     "including minimisation, purpose limitation, residency, cross-border transfers and privacy impact "
     "assessment.",
     "Sovereignty requires control over data throughout its lifecycle, not only where a database is hosted. "
     "Data flows, backups, replicas, support access and lawful cross-border disclosure pathways must be "
     "visible and governed.",
     "Data inventory and flow maps; classification and retention rules; encryption with controlled keys; "
     "privacy impact assessments; deletion controls; monitored cross-border and administrative access."),
    ("04. Platform security",
     "Protects the software, APIs, infrastructure and supply chain that make DPI function, including secure "
     "SDLC, secrets, logging, patching, vulnerability management and dependency assurance for digital public "
     "goods and open-source components.",
     "A country cannot claim meaningful control if it cannot verify what code is deployed, how it was built, "
     "what dependencies it contains, who can change it, and how vulnerabilities are found and remediated.",
     "Controlled source and CI/CD access; SBOM and provenance; signed build artefacts; API and secrets "
     "controls; vulnerability and patch evidence; independent code and architecture assurance."),
    ("05. Operations",
     "Turns design into sustained capability through monitoring, SOC workflows, incident response, backup "
     "and recovery, continuity, administrative procedures, skills and third-party operational risk "
     "management.",
     "Operational sovereignty is demonstrated when essential services can be monitored, defended, restored "
     "and safely operated even if a primary supplier, cloud service or external support team is unavailable.",
     "Domestic operating capability; independent telemetry and logs; tested incident runbooks; offline and "
     "degraded-mode procedures; recovery exercises; privileged-access oversight; continuity and "
     "supplier-failure tests."),
    ("06. Ecosystem",
     "Extends sovereignty beyond the core platform to every connected participant through onboarding, "
     "certification, interoperability testing, fraud controls, interface requirements, continuous assurance "
     "and provider offboarding.",
     "Interoperability distributes risk. The practical security floor is therefore set by the weakest "
     "connected participant or interface, making common minimum controls and enforceable participation "
     "rules essential.",
     "Common security baseline; pre-production interoperability tests; certification and periodic "
     "reassessment; fraud monitoring; dependency mapping; suspension and offboarding processes; "
     "evidence-sharing obligations."),
]

ROADMAP = [
    ["Immediate\n(0–6 months)",
     "Conduct an architecture review to identify foreign single-vendor dependencies. Establish a data "
     "residency policy with a technical, not merely legal, enforcement plan. Define minimum domestic "
     "operational capability requirements. Inventory any AI components already embedded in deployed systems.",
     "Architectural, Data"],
    ["Short-term\n(6–18 months)",
     "Build a domestic DPI operations team. Implement HSM-backed key management with domestic key custody. "
     "Establish tested offline operational procedures. Commission an independent security assessment.",
     "Operational, Security"],
    ["Medium-term\n(18–36 months)",
     "Achieve software bill of materials (SBOM) compliance for all deployed open-source components. "
     "Establish a national CERT/CSIRT with a DPI-specific mandate. Develop regional data sovereignty "
     "agreements with neighbouring states. Establish AI governance policy for DPI-embedded AI.",
     "Security, Governance"],
    ["Long-term\n(36+ months)",
     "Participate in regional shared infrastructure for resilience. Achieve a mature, independently verified "
     "DPI security maturity level. Establish domestic DPI security research capability. Contribute to "
     "international DPI security standards.",
     "All five pillars"],
]

REGIONAL = [
    ["1. Governance and decision rights",
     "Shared services can create uncertainty over who has authority during incidents, disputes, upgrades or "
     "emergency interventions.",
     "Establish formal regional governance, clearly defined national decision rights, escalation procedures, "
     "voting or approval mechanisms, audit rights, and transparent accountability for shared infrastructure."],
    ["2. Data jurisdiction and cross-border access",
     "Regional platforms may process, replicate or back up sensitive information across several "
     "jurisdictions with different legal and privacy requirements.",
     "Define agreed data classifications, residency and transfer rules, permitted administrative access, "
     "cross-border disclosure procedures, logging requirements, and mechanisms for resolving conflicts "
     "between national laws."],
    ["3. Cryptographic trust and key custody",
     "Centralising trust anchors or cryptographic keys can create a powerful regional point of dependency or "
     "compromise.",
     "Use distributed or pooled key-management models with strong separation of duties, HSM-backed "
     "protection, national participation in key governance, dual control, auditable ceremonies, and tested "
     "revocation and recovery procedures."],
    ["4. Operational resilience and incident response",
     "Smaller states may lack sufficient specialist capacity to monitor, investigate and recover from "
     "sophisticated attacks independently.",
     "Establish shared SOC or CSIRT capabilities, common incident taxonomies, regional threat-intelligence "
     "exchange, coordinated exercises, minimum national response capability, and clear authority for "
     "cross-border incident coordination."],
    ["5. Supplier and technology dependency",
     "Regional procurement can reduce cost but can also concentrate dependence on a single technology "
     "provider or architecture.",
     "Use open standards, modular architectures, common exit clauses, source and configuration portability, "
     "interoperable alternatives, independent security assurance, and procurement structures that preserve "
     "switching and substitution options."],
]

REGIONAL_PRINCIPLES = [
    "<b>Share capability, not accountability.</b> Regional infrastructure can be jointly operated, but "
    "responsibility for citizen protection, national law and sovereign decision-making should remain clearly "
    "assigned.",
    "<b>Design for reversibility.</b> Every shared arrangement should include interoperability, portability, "
    "recovery, substitution and exit mechanisms so cooperation does not become irreversible dependency.",
    "<b>Verify regional trust continuously.</b> Common controls, independent assurance, joint exercises and "
    "transparent evidence should demonstrate that shared sovereignty arrangements remain effective as "
    "technology, suppliers, risks and political relationships change.",
]


def story(width):
    s = cover(
        width,
        article_no=4,
        title=TITLE,
        subtitle=SUBTITLE,
        why_title="Why this matters now",
        why_body=[
            "Sovereignty cannot be bolted onto Digital Public Infrastructure after launch without cost, "
            "disruption and compromise. This article turns the policy debate into an architecture and "
            "implementation question, showing how countries can design sovereignty into DPI from the "
            "beginning and build it progressively through national and regional capability."
        ],
        dateline="1 October 2026 &nbsp;|&nbsp; Series version 1.0 &nbsp;|&nbsp; Classification: Public",
    )
    s += [NextPageTemplate("Body"), PageBreak()]

    s += [Paragraph("Contents", S["h1"]), Spacer(1, 2 * mm), toc(width, CONTENTS), PageBreak()]

    s += [
        Paragraph("Executive summary", S["h1"]),
        Paragraph(
            "Digital Public Infrastructure is where digital sovereignty becomes a practical design problem. A "
            "national identity system, payment rail or data exchange layer is sovereign in practice only if "
            "its architecture, operations, governance, data controls and assurance model make control real "
            "before the system becomes nationally dependent. This article sets out a six-layer architecture "
            "for sovereignty-aware DPI, a realistic phased roadmap, and the role of regional cooperation in "
            "giving smaller and lower-capacity countries a credible route to meaningful control.", S["lede"]),
        Paragraph("Key points for policymakers and DPI leaders", S["h2"]),
        bullets(KEY_POINTS),
        Paragraph(
            "The central argument is that sovereignty is not a hosting decision or a contractual promise. It "
            "is the cumulative result of choices about key custody, administrative access, logging, code "
            "control, independent assurance and exit options. When countries leave those choices to vendors "
            "or defer them until after launch, they inherit dependencies that are costly to unwind and hard "
            "to see.", S["body"]),
        Paragraph(
            "Progress is therefore best measured in verified capability rather than declared intent. The "
            "roadmap in this article moves from immediate visibility of dependencies, through domestic "
            "operational control and independent assurance, to long-term regional resilience. For countries "
            "that cannot build every capability alone, regional cooperation offers a practical way to share "
            "cost and expertise while retaining national accountability for laws, data protection and "
            "security thresholds.", S["body"]),
        Paragraph("Key takeaways", S["h2"]),
        Paragraph(
            "For policymakers, this means writing sovereignty requirements into legal mandates, procurement "
            "terms and funding conditions before signing contracts. For DPI leaders, it means building the "
            "domestic skills, operating procedures and assurance relationships that turn those requirements "
            "into everyday practice. Neither group can deliver this alone, so sustained coordination among "
            "policy, technical and regional actors is essential.", S["body"]),
        bullets(TAKEAWAYS, numbered=True),
        Paragraph(
            "Sovereignty by design is ultimately a discipline of sustained, verifiable choices rather than a "
            "single procurement or policy event. Countries that embed control early, build domestic and "
            "regional capability in deliberate phases, and test their assumptions independently will be far "
            "better placed to protect citizens and sustain trust in national systems. The sections that "
            "follow set out how that discipline translates into architecture, sequencing and regional "
            "cooperation.", S["body"]),

        Paragraph("1. Sovereignty must be designed in at the architecture stage", S["h1"]),
        Paragraph(
            "Sovereignty controls retrofitted after national systems go live are usually more expensive, more "
            "disruptive and less complete than controls embedded at design time. Once identity, payment, "
            "social protection or data exchange systems are widely integrated, later controls must work "
            "around existing dependencies, data flows, operational habits and vendor relationships.",
            S["body"]),

        Paragraph("2. A six-layer sovereignty-aware DPI architecture", S["h1"]),
        Paragraph(
            "A complete DPI sovereignty posture is not a single product. It is an architecture of mutually "
            "reinforcing controls. The six layers below show where sovereignty decisions are made, and where "
            "false confidence usually enters if one layer is treated as sufficient on its own.", S["body"]),
        Spacer(1, 2 * mm),
        data_table(["Layer", "What it covers", "Sovereignty relevance"],
                   LAYERS, width, col_ratios=[0.19, 0.42, 0.39]),
        Spacer(1, 4 * mm),
        Paragraph(
            "Designing sovereignty in means asking hard questions early: who holds keys, who can administer "
            "the environment, who can see logs, who can change code, who verifies security, what happens if "
            "the primary vendor is unavailable, how cross-border access is controlled, and how citizens are "
            "protected when systems fail.", S["body"]),
        Paragraph(
            "The key design principle is <b>federation over unnecessary centralisation</b>. Monolithic DPI "
            "designs can concentrate risk and create single points of failure. Modular, federated and "
            "segmented architectures reduce lateral movement, limit blast radius, and allow individual "
            "components to fail or be replaced without collapsing the wider national system.", S["body"]),

        Paragraph("2.1 The six layers in detail", S["h1"]),
        Paragraph(
            "The six layers operate as one sovereignty control system. Each layer answers a different "
            "question about who can decide, who can technically exercise control, and whether that control "
            "remains effective during normal operations, disruption, vendor failure or cross-border "
            "dependence.", S["body"]),
    ]

    for name, covers, focus, evidence in LAYER_DETAIL:
        s.append(Paragraph(name, S["h3"]))
        s.append(Paragraph(covers, S["body_tight"]))
        s.append(Paragraph(f"<b>Sovereignty focus.</b> {focus}", S["body_tight"]))
        s.append(Paragraph(f"<b>Evidence of control.</b> {evidence}", S["body"]))

    s += [
        callout("The design test", [
            "For each layer, leaders should be able to identify the accountable authority, the technical "
            "control point, the evidence that proves control, and the recovery or exit path if a dependency "
            "fails. A gap in any one of these four elements can undermine the sovereignty of the whole DPI "
            "ecosystem.",
        ], width, accent=TEAL),
        Paragraph(
            "Effective sovereignty depends on these layers reinforcing one another, because strong control in "
            "one area cannot compensate for critical dependency or weakness in another.", S["body"]),
        Paragraph(
            "The objective is therefore not national self-sufficiency in every technology, but verifiable "
            "authority, meaningful technical control, operational resilience and credible alternatives when "
            "dependencies fail or become unacceptable. When these conditions are designed, tested and "
            "independently assured across all six layers, DPI becomes more resilient, accountable and "
            "capable of sustaining national control while still benefiting from regional cooperation and "
            "global technology ecosystems.", S["body"]),

        Paragraph("3. A phased sovereignty roadmap", S["h1"]),
        Paragraph(
            "Digital sovereignty is built progressively, not delivered as a single technology programme or "
            "procurement outcome. Countries typically begin with a mixture of domestic capability, foreign "
            "technology, external expertise, legacy platforms and regional dependencies. The practical "
            "objective is therefore to understand those dependencies and deliberately increase the areas "
            "where national authorities can govern, operate, verify, recover and make independent decisions "
            "over time.", S["body"]),
        Paragraph(
            "The sequencing matters. Trying to localise every component immediately can increase cost and "
            "complexity without necessarily improving control, while delaying critical capabilities such as "
            "key custody, operational visibility, independent assurance and recovery can create dependencies "
            "that become difficult to reverse. No country achieves full sovereignty at go-live, so a credible "
            "plan should distinguish immediate visibility, short-term operational capability, medium-term "
            "assurance and long-term resilience.", S["body"]),
        Spacer(1, 2 * mm),
        data_table(["Timeframe", "Priority actions", "Sovereignty dimension"],
                   ROADMAP, width, col_ratios=[0.17, 0.62, 0.21]),
        Spacer(1, 4 * mm),
        callout("No country achieves sovereignty at go-live", [
            "The roadmap above is a 36-month-plus commitment requiring sustained political will, continuous "
            "investment in domestic capability, and the institutional honesty to commission independent "
            "assessments that may surface uncomfortable findings.",
            "Countries that treat sovereignty as a procurement outcome rather than an operational discipline "
            "will find the gap between declared and actual sovereignty widening over time, not closing.",
        ], width),
        Paragraph(
            "The roadmap should be treated as a capability-building journey rather than a fixed "
            "implementation schedule. Measure progress by demonstrable increases in control, resilience, "
            "domestic competence, independent assurance and credible exit options, with each phase reducing "
            "dependencies that could materially constrain national decision-making or the continuity of "
            "essential digital services.", S["body"]),

        Paragraph("4. Regional and shared sovereignty architecture", S["h1"]),
        Paragraph(
            "For many smaller and lower-capacity countries, the most realistic path to meaningful digital "
            "sovereignty is regional rather than purely national. Building every critical capability "
            "independently can be prohibitively expensive, difficult to staff and inefficient to sustain. "
            "Shared infrastructure, pooled cryptographic and assurance capability, common procurement "
            "standards, regional threat intelligence and shared Computer Security Incident Response Team "
            "capacity can give participating countries access to capabilities that would otherwise be out of "
            "reach.", S["body"]),
        Paragraph(
            "Regional sovereignty should therefore be understood as <b>shared capability without surrendered "
            "accountability</b>. National authorities should retain responsibility for laws, citizen rights, "
            "data protection requirements, security thresholds and critical decision-making, while selected "
            "technical and operational capabilities can be jointly delivered where this improves resilience, "
            "affordability and bargaining power. The objective is not to replace national sovereignty with "
            "regional control, but to strengthen national authority through trusted shared mechanisms, "
            "transparent governance, enforceable participation rules and independently verifiable "
            "safeguards.", S["body"]),
        Paragraph(
            "The design challenge is consequently not a binary choice between “national” and "
            "“foreign” infrastructure. A stronger model combines domestic authority, regional "
            "capability, open standards, interoperable architecture and carefully governed use of global "
            "technology, so that no single government, supplier, cloud provider or regional institution "
            "becomes an uncontested point of control. The central test is whether each country can understand "
            "its dependencies, influence the shared environment, independently verify its protections, and "
            "maintain continuity or exit if the arrangement no longer meets national requirements.",
            S["body"]),
        Spacer(1, 2 * mm),
        data_table(["Key issue", "Regional sovereignty consideration", "Practical design requirement"],
                   REGIONAL, width, col_ratios=[0.22, 0.37, 0.41]),
        Spacer(1, 4 * mm),
        Paragraph(
            "A mature regional model should be judged not by how much infrastructure is shared, but by "
            "whether sharing increases each participating country’s practical control and resilience. "
            "Regional arrangements should make countries less vulnerable to single-vendor dependence, skills "
            "shortages, fragmented security capability and unequal negotiating power, while preserving the "
            "ability of national authorities to enforce their own legal and policy requirements.", S["body"]),
        bullets(REGIONAL_PRINCIPLES, numbered=True),
        Paragraph(
            "Regional sovereignty works best when cooperation strengthens, rather than dilutes, national "
            "control. The goal is to create shared capability that expands resilience, technical depth and "
            "strategic choice while preserving clear accountability at country level. Done well, regional "
            "architecture turns sovereignty from an expensive aspiration into a practical, scalable and "
            "independently verifiable operating model.", S["body"]),

        callout("Series bridge", [
            "The next article addresses the most common implementation trap in this area: assuming that data "
            "is sovereign because it is hosted locally. It connects data protection law, protection of "
            "personal information, and the risk of extraterritorial access.",
        ], width),
        Spacer(1, 9 * mm),
    ]

    s += back_matter(width)
    s += ref_block(S, bullets, REFERENCES)
    return s


def resolve_contents(path):
    """Set the contents page numbers from the built file. Cover and contents
    pages are skipped: the contents page lists every label and would otherwise
    match them all."""
    import pdfplumber
    global CONTENTS
    found = {}
    with pdfplumber.open(path) as pdf:
        for n, page in enumerate(pdf.pages, 1):
            if n <= 2:
                continue
            text = page.extract_text() or ""
            for label, _ in CONTENTS:
                if label not in found and label in text:
                    found[label] = str(n)
    missing = [l for l, _ in CONTENTS if l not in found]
    if missing:
        raise SystemExit(f"contents entries not found in the body: {missing}")
    CONTENTS = [(label, found[label]) for label, _ in CONTENTS]
    return CONTENTS


if __name__ == "__main__":
    import sys
    out = sys.argv[1]
    meta = {
        "title": f"{TITLE} — {SUBTITLE}",
        "author": "Godfrey Kutumela, Digital Trust Futures Foundation",
        "subject": "Digital Sovereignty Series | Article 4 of 6",
        "running_head": RUNNING,
        "classification": "Public  |  October 2026",
    }
    build(out, meta, story)
    resolve_contents(out)
    build(out, meta, story)
    print("wrote", out)
