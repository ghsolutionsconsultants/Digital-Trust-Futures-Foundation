# -*- coding: utf-8 -*-
from shell import ARROW, icon, cta_band, page_hero, breadcrumb

LAUNCH = [
    dict(id="citizen-safety", num="1", tone="1",
         name="Citizen Digital Safety and DPI Trust Programme",
         contribution="Community safety toolkits, awareness, user protection learning and harm reporting.",
         why="Protects people who are expected to adopt digital services but are rarely given the tools to use them safely.",
         photo=("payment-hands.jpg", "A contactless payment being made with a phone at a card terminal."),
         intro="This programme translates digital trust into practical protection for citizens and communities. It "
               "focuses on people most exposed to harm because they depend on public services, mobile payments, social "
               "grants, informal work, remittances or government platforms, but often lack the literacy, recourse "
               "channels or institutional power to challenge digital harm when it occurs.",
         rows=[("Citizen safety toolkits",
                "Plain-language materials on scams, social engineering, safe payments, identity protection, consent, privacy, grievance channels and fraud reporting."),
               ("Community awareness",
                "Workshops and mobile-friendly content for youth, social grant beneficiaries, informal traders, migrants, rural users and micro-enterprises."),
               ("Training of trainers",
                "Reusable materials for NGOs, community groups, consumer bodies and local digital inclusion partners."),
               ("Citizen harm learning",
                "A lightweight reporting and analysis mechanism to identify recurring patterns of DPI-related fraud, exclusion and data misuse."),
               ("Accessibility and language",
                "Materials designed for low-literacy, multilingual and mobile-first environments.")],
         funder="Many digital inclusion projects measure access, registration or transaction volumes. This programme "
                "helps funders measure a more important question: whether people can use digital systems safely, "
                "understand their risks, report harm and remain confident in services after things go wrong. That "
                "moves inclusion from access alone to protected participation.",
         result="Vulnerable users become better able to identify scams, protect their identity, use payment channels "
                "safely, report harm and demand accountable digital services."),
    dict(id="assurance-lab", num="2", tone="2",
         name="DPI Security Assurance and Resilience Lab",
         contribution="Independent public-interest assessment of identity, payment, data exchange, DPG, API, cloud and AI risks.",
         why="Protects the systems citizens depend on before weaknesses reach population scale.",
         photo=("server-racks.jpg", "Illuminated server hardware in a rack."),
         intro="This programme provides the Foundation&rsquo;s technical assurance capability. It supports governments, "
               "funders, DPG maintainers and civil-society partners with independent, public-interest assessment of the "
               "risks that often remain hidden inside DPI design, integration and operations.",
         rows=[("Digital identity",
                "Authentication, onboarding, consent, data minimisation, biometrics, exclusion risk, recovery processes and account takeover patterns."),
               ("Payment rails and instant payments",
                "Fraud controls, mule account risks, participant controls, API security, dispute handling, liability allocation and operational resilience."),
               ("Data exchange and consent",
                "Purpose binding, token handling, audit trails, data sharing rules, consent revocation and privacy-preserving patterns."),
               ("Digital public goods",
                "Secure development, SBOM readiness, dependency risk, vulnerability disclosure, patching obligations and shared exposure."),
               ("AI-enabled public services",
                "Synthetic identity, adversarial inputs, bias, model governance, explainability, appeals and AI incident response.")],
         funder="The Lab will not replace national cybersecurity functions or commercial audits. It provides a "
                "practical, nonprofit assurance layer focused on citizen-facing public infrastructure and reusable open "
                "tools &mdash; producing evidence that travels beyond the system that generated it.",
         result="Funders and governments receive clearer evidence on whether systems are secure in practice, not only "
                "aligned to principles or delivered on schedule."),
    dict(id="coordination-network", num="3", tone="3",
         name="Global South Digital Trust Coordination and Cyber Resilience Network",
         contribution="Roundtables, shared playbooks, knowledge hub, cross-border learning and civil-society readiness.",
         why="Protects the ecosystem by making risks visible across mandates and borders.",
         photo=("auditorium.jpg", "An empty conference auditorium set for a convening."),
         intro="This programme addresses a major operating reality: DPI risks cross institutional and national "
               "boundaries. A payment scam may involve a mobile operator, bank, wallet provider, merchant platform, "
               "identity service, social media channel, financial intelligence unit, data protection authority and law "
               "enforcement agency. Without a coordination layer, citizens are passed between institutions while the "
               "risk continues to scale.",
         rows=[("Convening",
                "Bring together civil society, cybersecurity practitioners, researchers, regulators, funders, DPG maintainers and DPI implementers."),
               ("Shared playbooks",
                "Practical guidance for scam escalation, DPI incident response, public communication, vulnerability disclosure and user recourse."),
               ("Knowledge hub",
                "Reusable templates, checklists, briefs and training content that partners can adapt."),
               ("Civil-society readiness",
                "Support for smaller organisations with basic cyber hygiene, data protection and incident awareness."),
               ("Global South voice",
                "A grounded evidence base on the digital trust needs of Africa and other emerging DPI contexts.")],
         funder="Funding one organisation can create broader ecosystem value when its outputs are open, reusable and "
                "intentionally designed for replication. This programme helps funders avoid isolated pilot effects by "
                "turning programme learning into shared public goods and practical guidance for multiple countries, "
                "sectors and civil-society partners.",
         result="A stronger Global South digital trust community able to detect recurring risks earlier, share lessons "
                "faster and support safer DPI adoption across countries."),
]

MILESTONES = [
    ("Months 1–3", "Set up governance, programme charters, monitoring and evaluation tools, partner mapping and design of the first public-good outputs."),
    ("Months 4–6", "Launch the first citizen toolkit, hold the initial network convening and publish the DPI assurance framework v1.0."),
    ("Months 7–12", "Pilot community safety work, complete early limited-scope assurance reviews and publish the first learning brief."),
    ("Months 13–18", "Expand partner delivery, update toolkits, run additional roundtables and refine assurance methods."),
    ("Months 19–24", "Publish the synthesis report, mature the knowledge hub, secure follow-on partnerships and present the case for scale."),
]

FELLOWSHIPS = [
    ("Digital Trust Research Fellowship",
     "Policy and Evidence Centre",
     "Independent research on DPI and surveillance risk, AI use in public-benefit systems, verifiable credentials and privacy, open-source sustainability, software supply-chain risk in public infrastructure, and post-quantum readiness."),
    ("African Open-Source Fellows Programme",
     "Open Digital Commons",
     "Building a regional bench of maintainers with genuine security depth, attached to digital public goods already carrying national dependency."),
    ("Women in Digital Trust Fellowship",
     "Skills and Implementation Academy",
     "A dedicated pathway addressing under-representation in DPI assurance, open-source security and digital trust policy roles."),
    ("African Digital Trust Graduate Programme",
     "Skills and Implementation Academy",
     "Structured early-career entry into DPI assurance and open-source security for recent graduates across the region."),
]


def programmes():
    crumbs = breadcrumb([("Home", "index.html"), ("Programmes", None)], "")

    sections = []
    for p in LAUNCH:
        rows = "".join(f"<tr><td><strong>{a}</strong></td><td>{b}</td></tr>" for a, b in p["rows"])
        photo, alt = p["photo"]
        alt_bg = " section--alt" if p["num"] == "2" else ""
        sections.append(f"""
<section class="section{alt_bg}" id="{p['id']}">
  <div class="container">
    <div class="programme-header prog-card--{p['tone']}" data-reveal>
      <div class="prog-index">{p['num']}</div>
      <div>
        <p class="eyebrow">Launch programme {p['num']}</p>
        <h2 class="balance">{p['name']}</h2>
        <p class="lede mt-4 pretty">{p['contribution']}</p>
      </div>
    </div>

    <div class="split split--even mt-8" style="align-items:start">
      <div class="flow" data-reveal>
        <p class="pretty">{p['intro']}</p>
        <div class="callout mt-6"><h3>Why it matters</h3><p>{p['why']}</p></div>
        <h3 class="mt-7">Why this matters to funders</h3>
        <p class="text-muted mt-4 pretty">{p['funder']}</p>
        <div class="expected mt-6">
          <span class="mono-label">Expected result</span>
          <p>{p['result']}</p>
        </div>
      </div>
      <div class="flow" data-reveal>
        <figure class="media-frame">
          <img src="assets/img/photos/{photo}" alt="{alt}" width="1200" height="750" loading="lazy" decoding="async">
        </figure>
        <div class="table-wrap mt-6">
          <table>
            <caption>Focus areas and planned outputs</caption>
            <thead><tr><th scope="col">Focus area</th><th scope="col">Planned outputs</th></tr></thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>""")

    milestones = "".join(
        f"""<div class="tl-item"><p class="tl-period">{period}</p><p>{text}</p></div>"""
        for period, text in MILESTONES)

    fellowships = "".join(
        f"""<article class="card card--hover">
      <span class="mono-label">{div}</span>
      <h3 class="card-title mt-3">{name}</h3>
      <p>{desc}</p>
      <p class="mt-4"><span class="status status--planned">Opening for applications</span></p>
    </article>"""
        for name, div, desc in FELLOWSHIPS)

    hero = page_hero(
        eyebrow="Programmes",
        title="Three launch programmes, one protection mission",
        lede="Protect the citizen, validate the infrastructure, strengthen the ecosystem. The programmes are "
             "intentionally mutually reinforcing: citizen-facing work reveals harm patterns, assurance work tests "
             "infrastructure and governance controls, and the coordination network turns lessons into shared practice.",
        crumbs_html=crumbs,
        extra="""<nav class="section-nav" data-section-nav aria-label="On this page">
      <a href="#citizen-safety">Citizen safety</a><a href="#assurance-lab">Assurance Lab</a>
      <a href="#coordination-network">Coordination network</a><a href="#flagship">Flagship initiative</a>
      <a href="#fellowships">Fellowships</a><a href="#roadmap">Roadmap</a>
    </nav>""")

    body = f"""{hero}
{''.join(sections)}

<section class="section band-dark band-dark--grid" id="flagship">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow eyebrow--teal">Flagship initiative</p>
      <h2 class="balance">Digital Trust DPI and Open Source Safeguards Initiative</h2>
      <p>Combining the Foundation&rsquo;s two lead divisions in a single initiative, so that findings from live national
        infrastructure and from the open-source components underneath it inform one another.</p>
    </div>

    <div class="grid grid-3" data-reveal-stagger>
      <article class="workstream">
        <span class="mono-label">Workstream 1</span>
        <h3>DPI security, safety and trust</h3>
        <ul class="dot-list mt-4">
          <li>Select two active African DPI deployments and conduct safeguards and cyber-risk assessments.</li>
          <li>Develop improvement roadmaps and train local teams.</li>
          <li>Publish anonymised lessons and open implementation guidance.</li>
        </ul>
      </article>
      <article class="workstream">
        <span class="mono-label">Workstream 2</span>
        <h3>Open-source project support</h3>
        <ul class="dot-list mt-4">
          <li>Select three DPG or public-interest open-source projects for secure SDLC and supply-chain review.</li>
          <li>Produce SBOMs and establish vulnerability-disclosure processes.</li>
          <li>Improve repository and release security and support long-term project governance.</li>
        </ul>
      </article>
      <article class="workstream">
        <span class="mono-label">Workstream 3</span>
        <h3>Open tools</h3>
        <ul class="dot-list mt-4">
          <li>DPI Trust Assessment Toolkit</li>
          <li>Open-Source Project Security Baseline</li>
          <li>DPG Software Trust Scorecard</li>
          <li>DPI AI Governance Checklist</li>
          <li>Digital Identity and Credential Threat Model</li>
          <li>Inclusive Payment Security Guide</li>
        </ul>
      </article>
    </div>

    <div class="mt-8 cluster" data-reveal>
      <a class="btn btn--light" href="research.html#toolkits">Toolkit status{ARROW}</a>
      <a class="btn btn--outline-light" href="support-our-work.html">Fund the initiative{ARROW}</a>
    </div>
  </div>
</section>

<section class="section" id="fellowships">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Fellowships</p>
      <h2 class="balance">Building the regional bench</h2>
      <p>Fellowships are how the Foundation converts a two-year programme into a decade of regional capability. Each
        is attached to a division and to real delivery work rather than to study alone.</p>
    </div>
    <div class="grid grid-2" data-reveal-stagger>{fellowships}</div>
    <p class="note mt-7" data-reveal><strong>Not yet open.</strong> Application windows, eligibility and stipend detail
      will be published on this page and announced through the newsletter as each fellowship opens. Register your
      interest through <a href="get-involved.html#careers">Get involved</a>.</p>
  </div>
</section>

<section class="section section--alt" id="roadmap">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Roadmap</p>
        <h2 class="balance">The 24-month milestone path</h2>
        <p class="lede mt-4">Early measurement is realistic, but disciplined enough to help funders decide where to
          scale.</p>
        <div class="mt-6"><a class="btn btn--ghost" href="support-our-work.html">See the investment package{ARROW}</a></div>
      </div>
      <div class="timeline" data-reveal>{milestones}</div>
    </div>
  </div>
</section>

{cta_band("", title="Two years is enough to prove the protection layer works.", text="The launch portfolio is designed to create tools, assurance methods, early pilots, trusted convening and evidence that makes follow-on investment more precise.", primary=("Support our work", "support-our-work.html"), secondary=("Partner with us", "get-involved.html#partner"))}
"""
    return body


# ── Research and resources ───────────────────────────────────────────────────
RESOURCES = [
    # (title, type, division tag, description, status)
    ("DPI Security Assurance Framework and maturity model", "Framework", "dpi ai identity payments",
     "The Foundation's core assurance method: a maturity model and structured review approach for citizen-facing digital public infrastructure.",
     "development", "Assurance Lab"),
    ("DPI Trust Assessment Toolkit", "Toolkit", "dpi identity payments",
     "A practical toolkit for conducting a DPI trust readiness assessment, including scoping, evidence requests, interview guides and scoring.",
     "development", "DPI Trust Lab"),
    ("Open-Source Project Security Baseline", "Baseline", "opensource",
     "A minimum security baseline for public-interest open-source projects: repository hardening, release integrity, dependency handling and disclosure readiness.",
     "development", "Open Digital Commons"),
    ("DPI/DPG supply chain security checklist", "Checklist", "opensource dpi",
     "A checklist covering provenance, SBOM readiness, dependency depth, patching obligations and shared exposure across national deployments.",
     "development", "Assurance Lab"),
    ("Citizen digital safety toolkit", "Toolkit", "citizen",
     "Plain-language materials on scams, social engineering, safe payments, identity protection, consent, privacy, grievance channels and fraud reporting.",
     "development", "Citizen Safety Programme"),
    ("Responsible vulnerability disclosure guidance for public-interest systems", "Guidance", "opensource dpi",
     "How to receive, triage, coordinate and publish vulnerability information when the affected system serves citizens who cannot switch providers.",
     "development", "Assurance Lab"),
    ("DPG Software Trust Scorecard", "Scorecard", "opensource",
     "A comparable, published measure of software trust practice for digital public goods carrying national dependency.",
     "planned", "Open Digital Commons"),
    ("DPI AI Governance Checklist", "Checklist", "ai dpi",
     "Accountability, oversight, bias, explainability and appeal checks for AI used in identity verification, fraud detection and service delivery.",
     "planned", "DPI Trust Lab"),
    ("Digital Identity and Credential Threat Model", "Threat model", "identity",
     "A reference threat model for identity systems and verifiable credentials, covering enrolment, authentication, revocation and recovery.",
     "planned", "DPI Trust Lab"),
    ("Inclusive Payment Security Guide", "Guide", "payments",
     "Fraud, mule flows, dispute handling, liability allocation and inclusion safeguards for instant and interoperable payment systems.",
     "planned", "DPI Trust Lab"),
    ("AI and fraud risk module for citizen-facing DPI", "Module", "ai payments",
     "An assessment module addressing synthetic identity, adversarial inputs, model governance and AI incident response in citizen-facing services.",
     "planned", "Assurance Lab"),
    ("Scam escalation and user recourse playbook", "Playbook", "citizen",
     "Cross-institution guidance for escalating scams and resolving user recourse where responsibility is split across operators, banks and regulators.",
     "planned", "Coordination Network"),
    ("Annual DPI Trust Report", "Report", "policy dpi",
     "The Foundation's flagship annual publication on DPI trust conditions, drawing on assessments, network evidence and comparative research.",
     "planned", "Policy and Evidence Centre"),
    ("Nonprofit cyber maturity self-assessment", "Self-assessment", "citizen",
     "A right-sized maturity path for civil-society organisations that does not assume enterprise budgets or staffing.",
     "planned", "Cyber and Digital Safety Centre"),
]

FILTERS = [("all", "All resources"), ("dpi", "DPI safeguards"), ("identity", "Digital identity"),
           ("payments", "Payments"), ("opensource", "Open source"), ("ai", "AI governance"),
           ("citizen", "Citizen safety"), ("policy", "Policy &amp; evidence")]

STATUS_LABEL = {"development": "In development", "planned": "Planned", "live": "Published"}


def research():
    crumbs = breadcrumb([("Home", "index.html"), ("Research and resources", None)], "")

    chips = "".join(
        f'<button class="chip" type="button" data-filter="{k}" aria-pressed="{"true" if k == "all" else "false"}">{label}</button>'
        for k, label in FILTERS)

    items = "".join(
        f"""<article class="res-item" data-tags="{tags}">
      <div class="res-meta">{rtype}<br>{div}</div>
      <div>
        <h3 class="res-title">{title}</h3>
        <p class="res-desc">{desc}</p>
      </div>
      <div class="res-status"><span class="status status--{status}">{STATUS_LABEL[status]}</span></div>
    </article>"""
        for title, rtype, tags, desc, status, div in RESOURCES)

    hero = page_hero(
        eyebrow="Research and resources",
        title="Open evidence, open methods, open tools",
        lede="Every framework, checklist, toolkit and brief the Foundation produces is released as a reusable public "
             "good under an open licence. This library shows the full programme and the honest status of each item "
             "&mdash; nothing is listed as published until it is.",
        crumbs_html=crumbs,
        extra="""<nav class="section-nav" data-section-nav aria-label="On this page">
      <a href="#library">Resource library</a><a href="#toolkits">Toolkit programme</a>
      <a href="#licensing">Licensing</a><a href="#citing">Citing our work</a>
    </nav>""")

    body = f"""{hero}

<section class="section" id="library">
  <div class="container">
    <div class="section-head section-head--wide" data-reveal>
      <p class="eyebrow">Library</p>
      <h2 class="balance">Publications, briefs, toolkits and frameworks</h2>
      <p style="max-width:66ch">Filter by theme. Each record shows its type, the division that owns it, and whether it
        is published, in development or planned.</p>
    </div>

    <div data-filter-scope>
      <div class="filter-bar" role="group" aria-label="Filter resources by theme">
        {chips}
        <span class="filter-count" data-filter-count aria-live="polite"></span>
      </div>
      <div class="res-list">{items}</div>
      <p class="empty-state is-hidden" data-filter-empty>No resources match this filter yet.</p>
    </div>

    <div class="note mt-7" data-reveal><strong>On honesty in resource libraries.</strong> A digital trust organisation
      that overstates its own outputs has already failed its first test. Status labels on this page are maintained
      against actual publication, and download links appear only once a resource is genuinely available.</div>
  </div>
</section>

<section class="section section--alt" id="toolkits">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <div class="flow" data-reveal>
        <p class="eyebrow">Toolkit programme</p>
        <h2 class="balance">Methods designed to be handed over</h2>
        <p class="text-muted">A toolkit is only a public good if a government team, a maintainer or a community
          organisation can pick it up and use it without the Foundation in the room. Each toolkit is therefore built
          with its own scoping guidance, evidence templates, facilitator notes and worked examples.</p>
        <ul class="check-list mt-6">
          <li>Written for the decision being made, not for the discipline it comes from.</li>
          <li>Sized so that a small team can complete a first pass without external support.</li>
          <li>Accompanied by training-of-trainers material where community delivery is intended.</li>
          <li>Versioned publicly, with changes and rationale recorded.</li>
          <li>Released under an open licence with clear attribution requirements.</li>
        </ul>
      </div>
      <figure class="media-frame" data-reveal>
        <img src="assets/img/photos/archive-drawers.jpg" alt="Rows of institutional archive drawers." width="1200" height="750" loading="lazy" decoding="async">
        <figcaption>Evidence is only useful when it is findable, citable and reusable by the next team.</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section" id="licensing">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Open licensing</p>
        <h2 class="balance">What you may do with our work</h2>
        <p class="lede mt-4">The Foundation&rsquo;s intellectual property model is built around release, not
          retention.</p>
      </div>
      <div class="flow" data-reveal>
        <div class="grid grid-2">
          <div class="callout"><h3>Publications, toolkits and frameworks</h3>
            <p>Released under <strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong> unless a
              specific resource states otherwise. You may share and adapt the material, including commercially, provided
              you give appropriate credit and indicate any changes.</p></div>
          <div class="callout callout--teal"><h3>Software and code</h3>
            <p>Grant-funded software is released under a recognised OSI-approved open-source licence, stated in each
              repository. Licence choice is made per project with its maintainers and recorded in the project
              charter.</p></div>
          <div class="callout callout--navy"><h3>Data sets</h3>
            <p>Open data sets are published with a stated licence and a documented methodology so that findings can be
              independently replicated.</p></div>
          <div class="callout"><h3>Security-sensitive detail</h3>
            <p>Where technical detail could assist adversaries or expose citizens to harm, publication follows
              coordinated disclosure and may be withheld, delayed or redacted. That decision is recorded and
              explained.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt" id="citing">
  <div class="container">
    <div class="split split--even">
      <div class="flow" data-reveal>
        <p class="eyebrow">Citing our work</p>
        <h2 class="balance">How to reference a Foundation resource</h2>
        <p class="text-muted">Every published resource carries a stable title, version and publication date. Where a
          resource has been superseded, the superseding version is linked from the original record.</p>
        <div class="cite-block mt-6">
          <span class="mono-label">Suggested citation format</span>
          <p><code>Digital Trust Futures Foundation ({{year}}). {{Title}}, version {{n}}. Digital Trust Futures Foundation NPC. Available at digitaltrustfuturesfoundation.org</code></p>
        </div>
      </div>
      <div class="flow" data-reveal>
        <p class="eyebrow">Research enquiries</p>
        <h2 class="balance">Peer review, replication and collaboration</h2>
        <p class="text-muted">The Policy and Evidence Centre welcomes peer reviewers, replication requests, university
          collaborations and fellowship enquiries.</p>
        <div class="cluster mt-6">
          <a class="btn btn--primary" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org{ARROW}</a>
          <a class="btn btn--ghost" href="divisions/policy-evidence-centre.html">Policy and Evidence Centre{ARROW}</a>
        </div>
      </div>
    </div>
  </div>
</section>

{cta_band("", title="Fund the tool once, and every country can use it.", text="Open public goods extend the reach of a single engagement to every government, maintainer and community facing the same risk.", primary=("Support our work", "support-our-work.html"), secondary=("Partner with us", "get-involved.html#partner"))}
"""
    return body
