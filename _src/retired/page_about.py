# -*- coding: utf-8 -*-
from shell import ARROW, icon, cta_band, page_hero, breadcrumb

# ── About ────────────────────────────────────────────────────────────────────

VALUES = [
    ("scale", "Independence", "Research and assessments free from commercial or political influence."),
    ("branch", "Openness", "Tools, research and frameworks released as public goods wherever possible."),
    ("users", "Inclusion", "Explicit attention to the safety of vulnerable and underserved communities."),
    ("activity", "Rigour", "Evidence-based, technically credible methodologies."),
    ("globe", "Partnership", "Building local capacity rather than creating dependency."),
    ("shield-check", "Accountability", "Citizen-centred protection, with responsibility that can be traced and tested."),
]

MANDATE = [
    "Research risks affecting digital public infrastructure and digital public goods.",
    "Help governments and public-interest organisations design and operate safe DPI.",
    "Develop and maintain open-source digital trust tools.",
    "Support open-source projects with cybersecurity, governance and sustainability.",
    "Strengthen digital identity, payment, credential and data-exchange safeguards.",
    "Advance responsible and secure use of AI in public infrastructure.",
    "Build local technical and governance capacity across Africa and the Global South.",
    "Publish open frameworks, research, guidance and implementation resources.",
]

TOC_INPUTS = [
    ("Inputs", ["Technical expertise", "Grant and donor funding", "Open-source tooling",
                "Partnerships with governments and DPGs"]),
    ("Activities", ["Safeguards research and assessments", "Open-source hosting and security support",
                    "Policy research", "Training and fellowships"]),
    ("Outputs", ["Trust assessments and roadmaps", "Secured and sustained DPGs",
                 "Open toolkits and frameworks", "Trained practitioners"]),
    ("Outcomes", ["Safer, more inclusive DPI", "Resilient, secure DPGs",
                  "Accountable AI in public services", "Stronger local capacity"]),
]

CHANGE_ROWS = [
    ("Digital trust expertise",
     "Convert technical assurance, cyber risk and AI governance knowledge into public-good tools.",
     "Governments and civil society can act without waiting for expensive bespoke consulting."),
    ("Citizen-centred evidence",
     "Document how fraud, identity abuse, privacy risk and exclusion affect people in real settings.",
     "Funders and policymakers see harm patterns that ordinary technical assessments miss."),
    ("Independent position",
     "Operate outside vendor, implementer and platform incentives.",
     "More credible assurance and stronger public trust."),
    ("Partnership network",
     "Connect regulators, civil society, researchers, DPG maintainers and security practitioners.",
     "Faster learning, coordinated response and reduced duplication."),
]

COMPARATIVE = [
    ("Multilateral and standards bodies", "Global legitimacy, policy convening",
     "Limited hands-on technical assessment and implementation support"),
    ("Commercial assurance firms", "Deep technical capability",
     "Commercial pricing model misaligned with public-good economics"),
    ("DPG and open-source foundations", "Community trust, code stewardship",
     "Limited dedicated security, DPI-safeguards or AI-governance specialisation"),
    ("Digital Trust Futures Foundation", "Independent governance, technical depth and DPG proximity",
     "New entrant &mdash; must build track record and trust"),
]

STAKEHOLDERS = [
    ("Governments and DPI programme teams",
     "Independent assurance, safeguards methods, capacity building and public-interest evidence.",
     "Access to systems, artefacts and programme context under agreed terms."),
    ("Funders and development partners",
     "A focused way to invest in the protection layer, with reusable outputs and honest reporting.",
     "Multi-year, flexible funding that protects independence."),
    ("Civil-society organisations",
     "Toolkits, training, cyber readiness and citizen-harm visibility.",
     "Community reach, lived experience and feedback loops."),
    ("DPG and open-source maintainers",
     "Security baseline support, vulnerability-disclosure guidance and sustainability evidence.",
     "Technical collaboration and responsible transparency."),
    ("Researchers and universities",
     "Field-informed research questions and data-informed policy problems.",
     "Peer review, fellows, methods and evaluation support."),
]


def about():
    crumbs = breadcrumb([("Home", "index.html"), ("About", None)], "")
    values = "".join(
        f"""<article class="card card--hover">
      <div class="icon-badge icon-badge--{'orange' if i % 3 == 1 else ('teal' if i % 3 == 2 else '')}">{icon(ic)}</div>
      <h3 class="card-title">{name}</h3><p>{desc}</p></article>"""
        for i, (ic, name, desc) in enumerate(VALUES))

    mandate = "".join(f"<li>{m}</li>" for m in MANDATE)

    toc_cols = "".join(
        f"""<div class="toc-col">
      <span class="mono-label">{head}</span>
      <ul class="dot-list mt-4">{''.join(f'<li>{i}</li>' for i in items)}</ul>
    </div>""" for head, items in TOC_INPUTS)

    change = "".join(
        f"<tr><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>"
        for a, b, c in CHANGE_ROWS)

    comparative = "".join(
        f"<tr><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>"
        for a, b, c in COMPARATIVE)

    stake = "".join(
        f"<tr><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>"
        for a, b, c in STAKEHOLDERS)

    hero = page_hero(
        eyebrow="About the Foundation",
        title="An independent public-benefit foundation for digital trust",
        lede="Digital Trust Futures Foundation strengthens the safety, security, inclusion and trustworthiness of "
             "digital public infrastructure, digital public goods, open-source technology and AI-enabled public "
             "services &mdash; with a particular focus on Africa and the wider Global South.",
        crumbs_html=crumbs,
        meta_html='<div class="page-hero-meta">'
                  '<span class="pill pill--light">Non-profit company (NPC)</span>'
                  '<span class="pill pill--light">South Africa</span>'
                  '<span class="pill pill--light">Public-interest mandate</span>'
                  '<span class="pill pill--light">Established 2026</span></div>')

    body = f"""{hero}

<section class="section">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Who we are</p>
        <h2 class="balance">Redirecting digital trust capability toward the public interest</h2>
      </div>
      <div class="flow prose" data-reveal>
        <p class="lede">Digital Trust Futures Foundation is an independent, non-profit public-benefit organisation
          established to strengthen the safety, security, inclusion and trustworthiness of digital public infrastructure
          (DPI), digital public goods (DPGs), open-source technology and AI-enabled public services.</p>
        <p>The Foundation builds on digital trust expertise developed by Nucleus Systems across cybersecurity, software
          trust and AI governance, redirecting that capability toward public-interest research, open technology and
          practical implementation support for governments, civil society, universities and technology communities.</p>
        <p>As digital public infrastructure becomes the backbone of identity, payments, health, education and social
          protection systems worldwide, the safety, security and inclusiveness of that infrastructure has become a
          matter of fundamental public interest. The Foundation exists to ensure that the rapid expansion of DPI, DPGs
          and AI-enabled public services does not outpace the safeguards needed to protect the people who depend on
          them.</p>

        <dl class="deflist mt-7">
          <div><dt>Legal name</dt><dd><strong>Digital Trust Futures Foundation NPC</strong></dd></div>
          <div><dt>Public name</dt><dd>Digital Trust Futures Foundation</dd></div>
          <div><dt>Short form</dt><dd>DTFF</dd></div>
          <div><dt>Jurisdiction</dt><dd>South Africa &mdash; established as a non-profit company (NPC), with subsequent
            application for NPO and public-benefit organisation (PBO) status, subject to specialist legal and tax
            advice.</dd></div>
          <div><dt>Geographic focus</dt><dd>Africa and the wider Global South, with emphasis on countries and
            communities adopting DPI under capacity and assurance constraints.</dd></div>
          <div><dt>Operating model</dt><dd>Independent public-interest research, assurance, tools, training, evidence
            generation and ecosystem coordination.</dd></div>
        </dl>
      </div>
    </div>
  </div>
</section>

<section class="section band-dark">
  <div class="container">
    <div class="split">
      <div data-reveal>
        <p class="eyebrow">The problem we address</p>
        <h2 class="balance">Deployment has outpaced independent safeguards capacity</h2>
      </div>
      <div class="flow" data-reveal>
        <p class="pretty">Governments across the Global South are rapidly deploying digital public infrastructure
          &mdash; national identity systems, instant payment rails, data-exchange layers and AI-enabled service delivery
          &mdash; often on accelerated timelines and with limited independent safeguards capacity.</p>
        <p class="pretty">At the same time, the open-source digital public goods that increasingly underpin this
          infrastructure are frequently maintained by small, under-resourced teams without dedicated security or
          sustainability support.</p>
        <p class="pretty">This creates compounding risk. Safety and inclusion gaps in DPI can exclude or harm the very
          populations these systems are meant to serve, while security and sustainability gaps in DPGs create systemic
          fragility across the many governments and organisations that depend on them. Commercial assurance services
          exist, but are frequently unaffordable or misaligned with the public-interest, open and non-commercial nature
          of DPI and DPG ecosystems.</p>
        <div class="callout callout--flag mt-6" style="background:rgba(240,133,68,.12);border-color:transparent;border-left-color:var(--orange-500)">
          <h3 style="color:#fff">Where the Foundation sits</h3>
          <p style="color:#C6D6E4">Deliberately at the intersection of three groups that rarely meet effectively:
            public-interest governance, deep cybersecurity assurance and community-level citizen protection.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <p class="eyebrow eyebrow--center">Vision and mission</p>
      <h2 class="balance">What we are working toward</h2>
    </div>
    <div class="grid grid-2" data-reveal-stagger>
      <article class="statement-card statement-card--vision">
        <span class="mono-label">Vision</span>
        <p>A world in which digital infrastructure, open-source technology and AI-enabled public services are safe,
          inclusive, resilient and worthy of public trust.</p>
      </article>
      <article class="statement-card statement-card--mission">
        <span class="mono-label">Mission</span>
        <p>To strengthen public-interest digital ecosystems through independent research, open-source development,
          technical safeguards, capacity building and practical support for governments, civil society, public
          institutions and technology communities.</p>
      </article>
    </div>

    <div class="section-head mt-8" data-reveal>
      <p class="eyebrow">Values</p>
      <h2 class="balance">Seven commitments that govern how we work</h2>
    </div>
    <div class="grid grid-3" data-reveal-stagger>{values}</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Core mandate</p>
        <h2 class="balance">Eight things the Foundation is set up to do</h2>
        <p class="lede mt-4">The mandate is deliberately narrow enough to deliver and broad enough to address both sides
          of the same infrastructure &mdash; the systems governments run, and the open-source components they run on.</p>
      </div>
      <div data-reveal>
        <ul class="check-list numbered-check">{mandate}</ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Theory of change</p>
      <h2 class="balance">From technical expertise to citizen protection</h2>
      <p>Public-interest digital infrastructure must be secure enough to resist harm, safe enough to protect people when
        things go wrong, and trusted enough to be used sustainably.</p>
    </div>

    <div class="toc-grid" data-reveal-stagger>{toc_cols}</div>

    <h3 class="mt-8 mb-4" data-reveal>How the Foundation changes outcomes</h3>
    <div class="table-wrap mt-4" data-reveal>
      <table>
        <caption>Input, action and result</caption>
        <thead><tr><th scope="col">Input</th><th scope="col">Foundation action</th><th scope="col">Result</th></tr></thead>
        <tbody>{change}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Comparative positioning</p>
      <h2 class="balance">Why a new organisation was needed</h2>
      <p>The global DPI and DPG movement has grown faster than the independent, public-interest safeguards capacity
        needed to keep it safe, secure and inclusive.</p>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Actor types, strengths and gaps</caption>
        <thead><tr><th scope="col">Actor type</th><th scope="col">Typical strength</th><th scope="col">Typical gap</th></tr></thead>
        <tbody>{comparative}</tbody>
      </table>
    </div>
    <div class="grid grid-2 mt-7" data-reveal-stagger>
      <div class="callout"><h3>Differentiators</h3>
        <ul class="dot-list mt-4">
          <li>Non-commercial, public-benefit mandate with governance independent of any single funder or vendor.</li>
          <li>Technical depth inherited from an established digital trust practice, rather than built from a standing start.</li>
          <li>Dual focus on DPI (government-facing) and DPGs (community-facing), addressing both sides of the same infrastructure.</li>
          <li>Outputs released as reusable open goods, extending reach beyond any single engagement.</li>
          <li>Explicit regional grounding in Africa and the Global South, where DPI investment is accelerating fastest.</li>
        </ul>
      </div>
      <div class="callout callout--teal"><h3>What we are not</h3>
        <ul class="dot-list dot-list--teal mt-4">
          <li>Not a replacement for national cybersecurity functions or statutory regulators.</li>
          <li>Not a commercial audit firm &mdash; and not a disguised channel for any commercial provider.</li>
          <li>Not a code-hosting platform competing with existing repositories; we link to them and secure what runs on them.</li>
          <li>Not a source of personalised legal, financial or investment advice.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Stakeholder ecosystem</p>
      <h2 class="balance">What the Foundation offers, and what it needs in return</h2>
      <p>Every relationship is two-directional. Assurance without access produces nothing; access without independence
        produces nothing anyone should trust.</p>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Stakeholder value exchange</caption>
        <thead><tr><th scope="col">Stakeholder</th><th scope="col">Value the Foundation offers</th><th scope="col">Value the Foundation needs</th></tr></thead>
        <tbody>{stake}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <figure class="media-frame" data-reveal>
        <img src="assets/img/photos/market-stall.jpg" alt="A roadside produce stall in an African street market." width="1400" height="875" loading="lazy" decoding="async">
        <figcaption>Protection has to reach informal traders, grant recipients and first-time digital users &mdash; not only institutions.</figcaption>
      </figure>
      <div class="flow" data-reveal>
        <p class="eyebrow">Regional grounding</p>
        <h2 class="balance">Methods shaped around the countries adopting DPI fastest</h2>
        <p class="text-muted">Digital trust methods designed for well-resourced regulatory environments transfer poorly
          to contexts where systems are being deployed at speed, with constrained assurance capacity and citizens who
          are often first-time digital users on shared or low-end devices.</p>
        <p class="text-muted">The Foundation works where that gap is widest: Africa and the wider Global South, with
          materials designed for low-literacy, multilingual and mobile-first environments, and with a stated preference
          for building local capacity over creating dependency.</p>
        <div class="mt-6"><a class="btn btn--ghost" href="what-we-do.html">See the programme divisions{ARROW}</a></div>
      </div>
    </div>
  </div>
</section>

{cta_band("", title="Independent assurance is only useful if it is funded to stay independent.", text="The Foundation welcomes partnership, funding and programme enquiries from governments, digital public goods initiatives, donors and social investment partners.")}
"""
    return body


# ── Governance ───────────────────────────────────────────────────────────────

BOARD = [
    ("Independent Board Chair", "Chairs the Board, safeguards independence and holds the Executive Director to account."),
    ("Digital public infrastructure expert", "Brings national DPI design, delivery and programme experience."),
    ("Open-source governance expert", "Brings project stewardship, licensing and community governance experience."),
    ("Financial inclusion or payment expert", "Brings payment systems, inclusion and consumer-protection experience."),
    ("Privacy or digital-rights expert", "Brings data protection, surveillance risk and rights-based scrutiny."),
    ("University or research representative", "Brings methodological rigour and peer-review discipline."),
    ("African civil-society representative", "Brings community reach, lived experience and accountability to affected people."),
    ("Cybersecurity or technology expert", "Brings adversarial, resilience and assurance depth."),
    ("One Nucleus Systems nominee", "A single seat &mdash; the Board is explicitly not controlled by Nucleus Systems."),
]

EXEC = [
    ("Executive Director", "Overall leadership, strategy and accountability to the Board."),
    ("Director of Programmes", "Delivery of the programme divisions and their charters."),
    ("Director of Research", "Research quality, sign-off on publications and case studies."),
    ("Director of Technology and Open Source", "Open-source projects, repositories, security and technical standards."),
    ("Director of Partnerships and Funding", "Funder relationships, government counterparts and overall site strategy."),
    ("Finance and Operations Manager", "Financial controls, grant administration and operations."),
    ("Monitoring, Evaluation and Learning Lead", "The MEL framework and reporting against the theory of change."),
    ("Safeguarding and Ethics Officer", "Safeguarding, ethics review and handling of citizen-harm evidence."),
]

NUCLEUS_MAY = [
    "Founding technical expertise", "Seconded specialists", "Access to selected methodologies",
    "Mentorship and technical review", "Training support", "Donated professional time",
    "Shared research participation", "Specialist implementation services under transparent contracts",
]
FOUNDATION_CONTROLS = [
    "Its Board", "Grant applications and donor funds", "Public-interest project selection",
    "Research priorities", "Open-source repositories", "Recruitment and procurement",
    "Partner selection", "Publication decisions",
]

AGREEMENTS = [
    "Founding support agreement", "Shared-services agreement", "Intellectual-property licence agreement",
    "Conflict-of-interest policy", "Related-party transaction policy", "Procurement policy",
    "Data-protection agreement", "Brand and trademark agreement", "Staff-secondment agreement",
    "Research independence policy",
]

MEL_ROWS = [
    ("Citizen protection",
     "Users reached; community trainers equipped; reported improvements in scam awareness, reporting knowledge and safe digital payment practices."),
    ("Infrastructure assurance",
     "Assurance tools produced; systems or components reviewed; risk themes identified; remediation guidance issued."),
    ("Ecosystem coordination",
     "Number and diversity of network participants; roundtables held; playbooks published; cross-sector referrals initiated."),
    ("Public-good outputs",
     "Toolkits, frameworks, checklists, briefs and training materials published for reuse."),
    ("Policy influence",
     "Evidence taken into funder, government, DPI, cyber or civil-society planning processes."),
    ("Organisational maturity",
     "Board functioning, grant reporting, safeguarding, financial controls and partnership agreements in place."),
]

RISKS = [
    ("New foundation credibility", "Funders may perceive limited operating history.",
     "Transparent governance, founding expertise, strong advisory relationships and early public-good outputs."),
    ("Access to live DPI contexts", "Assurance work may be delayed if governments or implementers are cautious.",
     "Start with non-sensitive artefacts, open-source components, maturity tools and voluntary partner pilots."),
    ("Handling security findings", "Public disclosure could create risk if not managed responsibly.",
     "Responsible disclosure protocols, confidentiality agreements and safe publication rules."),
    ("Citizen harm data", "Privacy or safeguarding risk if reports are mishandled.",
     "Minimisation, anonymisation, consent, secure storage and referral protocols."),
    ("Funding continuity", "Two-year launch funding may not sustain all programmes after grant end.",
     "Diverse funding pipeline, credible published evidence and conversion of tools into partnership-supported programmes."),
    ("Perceived conflict with commercial actors", "Independence could be questioned.",
     "Conflict-of-interest policies, public governance disclosures and clear separation from commercial delivery."),
    ("Scope creep", "Demand may exceed launch capacity.",
     "Prioritise high-value public-good outputs and use programme charters to control commitments."),
]

OPERATING = [
    ("Governance", "Independent Board oversight, conflict-of-interest controls, safeguarding and ethics expectations, and transparent decision-making."),
    ("Programme management", "Each launch programme has a charter, delivery plan, roles, outputs, timeline, risk register and reporting rhythm."),
    ("Quality assurance", "Technical outputs reviewed by subject-matter experts and, where appropriate, peer reviewers or advisory contributors."),
    ("Safeguarding and ethics", "Citizen-harm evidence handled carefully, with privacy, consent, minimisation and referral protocols."),
    ("Partnerships", "Written agreements with governments, civil society, DPG projects, researchers and funders to clarify roles and expectations."),
    ("Open public goods", "Tools and frameworks released openly wherever safe and appropriate, with sensitive security details handled responsibly."),
]


def governance():
    crumbs = breadcrumb([("Home", "index.html"), ("About", "about.html"), ("Governance", None)], "")

    board = "".join(f"<tr><td><strong>{r}</strong></td><td>{d}</td></tr>" for r, d in BOARD)
    execo = "".join(f"<tr><td><strong>{r}</strong></td><td>{d}</td></tr>" for r, d in EXEC)
    may = "".join(f"<li>{i}</li>" for i in NUCLEUS_MAY)
    controls = "".join(f"<li>{i}</li>" for i in FOUNDATION_CONTROLS)
    agreements = "".join(f'<li><span class="pill pill--outline">{i}</span></li>' for i in AGREEMENTS)
    mel = "".join(f"<tr><td><strong>{a}</strong></td><td>{b}</td></tr>" for a, b in MEL_ROWS)
    risks = "".join(f"<tr><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>" for a, b, c in RISKS)
    operating = "".join(
        f"""<div><dt>{a}</dt><dd>{b}</dd></div>""" for a, b in OPERATING)

    hero = page_hero(
        eyebrow="Governance and accountability",
        title="Independence that can be inspected, not just asserted",
        lede="The Foundation is led by an independent Board of Directors supported by a full executive office. Its "
             "relationship with Nucleus Systems is explicit, bounded and governed by written agreements &mdash; and the "
             "Foundation retains full control of its governance, funding, research priorities and publications.",
        crumbs_html=crumbs,
        extra="""<nav class="section-nav" data-section-nav aria-label="On this page">
      <a href="#board">Board</a><a href="#executive">Executive office</a><a href="#operating">Operating model</a>
      <a href="#nucleus">Nucleus Systems</a><a href="#ip">Intellectual property</a>
      <a href="#transparency">Transparency</a><a href="#risk">Risk management</a>
    </nav>""")

    body = f"""{hero}

<section class="section" id="board">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Board of Directors</p>
      <h2 class="balance">An independent, multi-stakeholder Board</h2>
      <p>The Board is independent and is not controlled by Nucleus Systems leadership. Composition is defined by role
        so that the required expertise is on record before individual appointments are confirmed.</p>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Recommended Board representation</caption>
        <thead><tr><th scope="col">Seat</th><th scope="col">Contribution</th></tr></thead>
        <tbody>{board}</tbody>
      </table>
    </div>
    <p class="note mt-6" data-reveal><strong>Appointments in progress.</strong> Named directors will be published on this
      page as each appointment is confirmed. Until then, the Board is described by role rather than by individual, so
      that composition and independence can be assessed on the record.</p>
  </div>
</section>

<section class="section section--alt" id="executive">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Executive office</p>
      <h2 class="balance">Delivery leadership and where responsibility sits</h2>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Executive office structure</caption>
        <thead><tr><th scope="col">Role</th><th scope="col">Responsibility</th></tr></thead>
        <tbody>{execo}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section" id="operating">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Operating model</p>
        <h2 class="balance">Nonprofit governance with delivery discipline</h2>
        <p class="lede mt-4">Work is managed through programme charters, defined deliverables, evidence-based
          methodologies, partner agreements, quality review and monitoring, evaluation and learning.</p>
      </div>
      <div data-reveal>
        <dl class="deflist">{operating}</dl>
      </div>
    </div>
  </div>
</section>

<section class="section band-dark" id="nucleus">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow eyebrow--teal">Relationship with Nucleus Systems</p>
      <h2 class="balance">The Foundation is not a disguised commercial channel</h2>
      <p>Nucleus Systems provides founding technical expertise and mentorship. The relationship is explicit,
        transparent and governed by written agreements &mdash; and the boundary runs through control, not goodwill.</p>
    </div>

    <div class="split split--even" data-reveal-stagger>
      <div class="boundary-card">
        <span class="mono-label">Nucleus Systems may provide</span>
        <ul class="dot-list mt-5">{may}</ul>
      </div>
      <div class="boundary-card boundary-card--accent">
        <span class="mono-label">The Foundation independently controls</span>
        <ul class="check-list mt-5">{controls}</ul>
      </div>
    </div>

    <div class="mt-8" data-reveal>
      <h3 style="color:#fff">Required agreements</h3>
      <p class="mt-4" style="max-width:60ch">Each of the following is a condition of the relationship, not an optional
        formality. Together they define what may be shared, what must stay separate, and how conflicts are handled.</p>
      <ul class="agreement-list mt-6">{agreements}</ul>
    </div>
  </div>
</section>

<section class="section" id="ip">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Intellectual property model</p>
      <h2 class="balance">Who owns what, and what stays open</h2>
    </div>
    <div class="grid grid-3" data-reveal-stagger>
      <article class="card card--navy"><div class="card-topbar"></div>
        <h3 class="card-title">Nucleus Systems retains</h3>
        <p>Existing proprietary frameworks, commercial code and assessment tools, existing trademarks, and confidential
          client information.</p>
      </article>
      <article class="card card--teal"><div class="card-topbar"></div>
        <h3 class="card-title">The Foundation owns or stewards</h3>
        <p>Grant-funded open-source software, public research, open safeguards tools, public policy resources, training
          materials developed under grants, open reference architectures, open data sets and hosted project
          repositories.</p>
      </article>
      <article class="card card--orange"><div class="card-topbar"></div>
        <h3 class="card-title">Shared or adapted materials</h3>
        <p>Selected Nucleus Systems frameworks may be used under a documented licence covering non-commercial and
          research use, public-interest implementation rights, attribution requirements, restrictions on commercial
          resale, and rules for derivative open-source outputs.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section--alt" id="transparency">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Transparency and reporting</p>
      <h2 class="balance">What we will measure, and what we will publish</h2>
      <p>Success is not measured by documents produced or workshops held. The Foundation uses a monitoring, evaluation
        and learning model that connects activities to changes in knowledge, institutional practice, risk visibility
        and citizen protection.</p>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Outcome areas and indicative indicators</caption>
        <thead><tr><th scope="col">Outcome area</th><th scope="col">Indicative indicators</th></tr></thead>
        <tbody>{mel}</tbody>
      </table>
    </div>

    <div class="grid grid-2 mt-7" data-reveal-stagger>
      <div class="callout"><h3>Funding transparency</h3>
        <ul class="dot-list mt-4">
          <li>No single funder to exceed a defined share of core, unrestricted income.</li>
          <li>Clear separation between restricted programme funding and core organisational costs.</li>
          <li>Preference for multi-year, flexible funding over single-year restricted grants.</li>
          <li>Published donor and funding policies, including conflict-of-interest safeguards for any Nucleus
            Systems-linked funding.</li>
          <li>Fee-for-service and training income reinvested to subsidise free public-interest tools and support.</li>
        </ul>
      </div>
      <div class="callout callout--teal"><h3>Responsible openness</h3>
        <p>The Foundation promotes openness where it strengthens public learning, and discretion where technical detail
          could assist adversaries or expose citizens to harm.</p>
        <ul class="dot-list dot-list--teal mt-4">
          <li>Anonymised country and DPG findings published wherever partners consent.</li>
          <li>Coordinated vulnerability disclosure before any technical publication.</li>
          <li>Citizen-harm evidence minimised, anonymised and stored under consent and referral protocols.</li>
          <li>Annual reporting against the indicators above once the first reporting period closes.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" id="risk">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Risk and dependencies</p>
      <h2 class="balance">Managing our own risk with the seriousness we expect of others</h2>
      <p>A credible public-interest digital trust organisation must manage its own risks with the same discipline it
        expects from the ecosystems it serves. These risks are manageable if addressed early and transparently.</p>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Launch risk register</caption>
        <thead><tr><th scope="col">Risk or dependency</th><th scope="col">Potential impact</th><th scope="col">Mitigation</th></tr></thead>
        <tbody>{risks}</tbody>
      </table>
    </div>
  </div>
</section>

{cta_band("", title="Ask us the hard governance questions before you fund us.", text="Governance documentation, draft policies and the founding agreement framework are available to prospective funders and government partners on request.", primary=("Contact the Foundation", "contact.html"), secondary=("See the investment case", "support-our-work.html"))}
"""
    return body
