# -*- coding: utf-8 -*-
from shell import ARROW, icon, cta_band

BODY = """
<!-- ── Hero ──────────────────────────────────────────────────────────────── -->
<section class="hero">
  <canvas class="hero-canvas" data-hero-canvas aria-hidden="true"></canvas>
  <div class="hero-photo" aria-hidden="true"></div>
  <div class="hero-grain" aria-hidden="true"></div>
  <div class="container">
    <div class="hero-inner">
      <p class="eyebrow">Independent &middot; Non-profit &middot; Public interest</p>
      <h1>Digital public infrastructure is only as good as the <span class="mark">protection</span> around it.</h1>
      <p class="hero-lede">Digital Trust Futures Foundation is an independent, non-profit public-benefit organisation
        strengthening the safety, security, inclusion and trustworthiness of digital public infrastructure,
        digital public goods, open-source technology and AI-enabled public services &mdash; with a focus on
        Africa and the wider Global South.</p>
      <div class="hero-actions">
        <a class="btn btn--accent btn--lg" href="get-involved.html#partner">Partner with us__ARROW__</a>
        <a class="btn btn--outline-light btn--lg" href="what-we-do.html">Explore our work__ARROW__</a>
      </div>
    </div>

    <div class="hero-triad">
      <div class="triad-item">
        <p class="triad-key"><span class="pill-dot"></span>Security</p>
        <p>Protects the system. Infrastructure withstands intentional harm, fraud, insider abuse and adversarial pressure.</p>
      </div>
      <div class="triad-item">
        <p class="triad-key"><span class="pill-dot"></span>Safety</p>
        <p>Protects the citizen. People are shielded from exclusion, service failure, data misuse and opaque decisions.</p>
      </div>
      <div class="triad-item">
        <p class="triad-key"><span class="pill-dot"></span>Trust</p>
        <p>Sustains adoption. Digital services become meaningful, sustained access rather than a fragile registration count.</p>
      </div>
    </div>
  </div>
  <div class="hero-scroll" aria-hidden="true"><span></span></div>
</section>

<!-- ── Positioning ───────────────────────────────────────────────────────── -->
<section class="section section--tight" id="positioning">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Positioning</p>
        <h2 class="balance">The missing protection layer between digital public infrastructure and the people who depend on it</h2>
      </div>
      <div class="flow" data-reveal>
        <p class="lede pretty">Identity systems, payment rails, data-exchange platforms and social protection systems have
          become the rails through which citizens prove who they are, receive money, access benefits, consent to data
          sharing and participate in the digital economy. The safeguards required to protect them have not kept pace.</p>
        <p class="text-muted">The Foundation is the independent, non-commercial digital trust partner for governments,
          digital public goods and civil society &mdash; bringing evidence-based cybersecurity, safety and AI-governance
          assurance to public-interest digital infrastructure, and releasing its tools, research and frameworks as
          reusable public goods.</p>
      </div>
    </div>

    <div class="grid grid-4 stat-row" data-reveal-stagger>
      <div class="stat"><span class="stat-rule"></span><span class="stat-figure">5</span><span class="stat-label">Programme divisions across DPI assurance, open source, policy, skills and civil-society cyber support</span></div>
      <div class="stat"><span class="stat-rule"></span><span class="stat-figure">3</span><span class="stat-label">Connected launch programmes: protect the citizen, validate the infrastructure, strengthen the ecosystem</span></div>
      <div class="stat"><span class="stat-rule"></span><span class="stat-figure">24</span><span class="stat-label">Month milestone path from governance set-up to a published synthesis report</span></div>
      <div class="stat"><span class="stat-rule"></span><span class="stat-figure">100%</span><span class="stat-label">Of launch toolkits, frameworks and briefs released as open public goods</span></div>
    </div>
  </div>
</section>

<!-- ── The unseen challenge (photo band) ─────────────────────────────────── -->
<section class="photo-band" id="challenge">
  <img class="photo-band-img" src="assets/img/photos/city-aerial-port.jpg" alt="Aerial view of a coastal African city, where digital public infrastructure now underpins identity, payments and public services." width="1800" height="1125" loading="lazy" decoding="async">
  <div class="photo-band-scrim" aria-hidden="true"></div>
  <div class="container photo-band-content">
    <div data-reveal>
      <p class="eyebrow eyebrow--teal">The unseen challenge</p>
      <h2 class="balance">Unsafe adoption can look like progress until citizens are harmed.</h2>
      <p class="pretty" style="max-width:60ch">The visible story of DPI is positive: faster payments, easier onboarding,
        better service delivery, improved reach. The invisible story is harder. Many citizens are asked to trust systems
        they cannot inspect, challenge or opt out of &mdash; and may not know who holds their data, which institution is
        responsible for a failed transaction, or whether an automated decision can be appealed.</p>
      <blockquote class="quote quote--light mt-7">
        The risk is not that citizens reject digital services. The deeper risk is that they adopt them without adequate
        protection, experience harm, lose trust, and then withdraw into less visible and less supervised channels.
        <cite>Organisational Profile, August 2026</cite>
      </blockquote>
    </div>
  </div>
</section>

<!-- ── Citizen at the centre ─────────────────────────────────────────────── -->
<section class="section section--alt" id="risk-map">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <p class="eyebrow eyebrow--center">Risk map</p>
      <h2 class="balance">The citizen sits at the centre of every DPI failure mode</h2>
      <p>Digital adoption can look successful while risk stays unknown, unowned or unmitigated. These are the harms
        that reach people first.</p>
    </div>

    <div class="orbit" data-reveal-stagger>
      <div class="orbit-node">Identity abuse &amp; account takeover</div>
      <div class="orbit-node">Opaque consent &amp; data misuse</div>
      <div class="orbit-node">Service exclusion &amp; failed recourse</div>
      <div class="orbit-node">Instant payment fraud &amp; mule flows</div>
      <div class="orbit-core">
        <p class="core-title">Citizen</p>
        <p class="core-sub">at the centre</p>
      </div>
      <div class="orbit-node">AI-enabled scams &amp; synthetic identity</div>
      <div class="orbit-node">Weak incident coordination</div>
      <div class="orbit-node">Low user literacy &amp; social engineering</div>
      <div class="orbit-node">Supplier, API &amp; cloud weaknesses</div>
    </div>

    <p class="orbit-caption" data-reveal><strong>The fundable gap:</strong> independent public-interest assurance,
      citizen safety and ecosystem coordination &mdash; established before population scale, not after harm.</p>
  </div>
</section>

<!-- ── Five protection gaps ──────────────────────────────────────────────── -->
<section class="section" id="gaps">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">The problem funders can help solve</p>
      <h2 class="balance">Five protection gaps now define DPI adoption risk</h2>
      <p>Core technical systems are moving faster than the citizen protection, independent assurance and institutional
        coordination layers around them. This is not a failure of intent &mdash; it is a gap that requires dedicated
        public-interest funding.</p>
    </div>

    <div class="gaps" data-reveal>
      __GAPS__
    </div>
  </div>
</section>

<!-- ── Dependency chain ──────────────────────────────────────────────────── -->
<section class="section band-dark band-dark--grid" id="chain">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <p class="eyebrow eyebrow--center eyebrow--teal">Theory of change</p>
      <h2 class="balance">Security, safety and trust are not parallel slogans</h2>
      <p>They form a dependency chain. A system cannot be safe if it is easily compromised, and it cannot be trusted if
        users experience harm without recourse.</p>
    </div>

    <div class="chain" data-reveal>
      <div class="chain-step">
        <div class="chain-num">1</div>
        <h3>Security</h3>
        <p>Systems withstand intentional harm, fraud, insider abuse and adversarial pressure.</p>
      </div>
      <div class="chain-step">
        <div class="chain-num">2</div>
        <h3>Safety</h3>
        <p>People are protected from exclusion, service failure, data misuse and opaque decisions.</p>
      </div>
      <div class="chain-step">
        <div class="chain-num">3</div>
        <h3>Trust</h3>
        <p>Citizens believe the service is reliable, fair, accountable and worth using.</p>
      </div>
      <div class="chain-step">
        <div class="chain-num">4</div>
        <h3>Inclusion</h3>
        <p>Digital services become meaningful, sustained access rather than a fragile registration count.</p>
      </div>
    </div>

    <p class="chain-note" data-reveal>The Foundation exists because the weakest link in this chain is now often invisible
      until citizens are harmed.</p>
  </div>
</section>

<!-- ── Three launch programmes ───────────────────────────────────────────── -->
<section class="section" id="launch-programmes">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Launch architecture</p>
      <h2 class="balance">Three launch programmes, one protection mission</h2>
      <p>Protect the citizen, validate the infrastructure, strengthen the ecosystem. Citizen-facing work reveals harm
        patterns, assurance work tests infrastructure and governance controls, and the coordination network turns
        lessons into shared practice.</p>
    </div>

    <div class="grid grid-3" data-reveal-stagger>
      <article class="prog-card prog-card--1">
        <img class="prog-media" src="assets/img/photos/payment-hands.jpg" alt="A contactless payment being made with a phone at a card terminal." width="1200" height="750" loading="lazy" decoding="async">
        <div class="prog-index">1</div>
        <h3>Citizen Digital Safety and DPI Trust</h3>
        <p>Community safety toolkits, awareness, training of trainers, user-protection learning and a lightweight harm
          reporting mechanism &mdash; designed for low-literacy, multilingual and mobile-first environments.</p>
        <div class="prog-foot"><a class="link-arrow" href="programmes.html#citizen-safety">Programme detail__ARROW__</a></div>
      </article>
      <article class="prog-card prog-card--2">
        <img class="prog-media" src="assets/img/photos/datacentre-corridor.jpg" alt="A corridor of server racks in a data centre." width="1200" height="750" loading="lazy" decoding="async">
        <div class="prog-index">2</div>
        <h3>DPI Security Assurance and Resilience Lab</h3>
        <p>Independent public-interest assessment of identity, payment, data-exchange, digital public good, API, cloud
          and AI risks &mdash; testing the systems citizens depend on before weaknesses reach population scale.</p>
        <div class="prog-foot"><a class="link-arrow" href="programmes.html#assurance-lab">Programme detail__ARROW__</a></div>
      </article>
      <article class="prog-card prog-card--3">
        <img class="prog-media" src="assets/img/photos/auditorium.jpg" alt="An empty conference auditorium set for a convening." width="1200" height="750" loading="lazy" decoding="async">
        <div class="prog-index">3</div>
        <h3>Global South Digital Trust Coordination Network</h3>
        <p>Roundtables, shared playbooks, a knowledge hub, civil-society readiness support and cross-border learning
          &mdash; so a single incident does not fall between institutional mandates.</p>
        <div class="prog-foot"><a class="link-arrow" href="programmes.html#coordination-network">Programme detail__ARROW__</a></div>
      </article>
    </div>

    <div class="outcome-strip" data-reveal>
      <span class="mono-label">Outcome</span>
      <p>Digital public infrastructure that protects citizens, prevents harm, and sustains trusted inclusion.</p>
    </div>
  </div>
</section>

<!-- ── Five divisions ────────────────────────────────────────────────────── -->
<section class="section section--alt" id="divisions">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">What we do</p>
      <h2 class="balance">Five programme divisions, one public-interest mandate</h2>
      <p>Each division has a distinct purpose and audience, but a shared commitment to public-interest digital trust.
        Phase 1 establishes the first three; Phase 2 adds the Academy and the Cyber and Digital Safety Centre.</p>
    </div>

    <div class="grid grid-3" data-reveal-stagger>
      __DIVISIONS__
    </div>
  </div>
</section>

<!-- ── Flagship initiative ───────────────────────────────────────────────── -->
<section class="section" id="flagship">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <figure class="media-frame" data-reveal>
        <img src="assets/img/photos/fibre-optic.jpg" alt="Bundled fibre-optic patch cables in a network distribution frame." width="1600" height="1000" loading="lazy" decoding="async">
        <figcaption>Assurance work concentrates where shared infrastructure creates shared exposure.</figcaption>
      </figure>
      <div class="flow" data-reveal>
        <p class="eyebrow">Flagship initiative</p>
        <h2 class="balance">The DPI and Open Source Safeguards Initiative</h2>
        <p class="text-muted">Combining the Foundation&rsquo;s two lead divisions: safeguards assessments of live African
          DPI deployments alongside security support for public-interest open-source projects &mdash; with every method
          and finding converted into an open, reusable tool.</p>
        <div class="grid grid-2 mt-6">
          <div class="mini-card">
            <span class="mono-label">Workstream 1</span>
            <h3>DPI security, safety and trust</h3>
            <p>Two active African DPI deployments assessed, improvement roadmaps developed, local teams trained and
              anonymised lessons published.</p>
          </div>
          <div class="mini-card">
            <span class="mono-label">Workstream 2</span>
            <h3>Open-source project support</h3>
            <p>Three digital public goods reviewed for secure SDLC and supply-chain risk, with SBOMs produced and
              vulnerability-disclosure processes established.</p>
          </div>
        </div>
        <div class="mt-6"><a class="btn btn--ghost" href="programmes.html#flagship">Read the initiative in full__ARROW__</a></div>
      </div>
    </div>
  </div>
</section>

<!-- ── Open public goods ─────────────────────────────────────────────────── -->
<section class="section band-dark" id="open-goods">
  <div class="container">
    <div class="split">
      <div data-reveal>
        <p class="eyebrow eyebrow--teal">Workstream 3 &middot; Open tools</p>
        <h2 class="balance">Everything we learn becomes something anyone can use</h2>
        <p class="pretty">Outputs are released as reusable public goods rather than proprietary products, so the value of
          a single engagement extends to every country, community and maintainer facing the same risk.</p>
        <div class="mt-7"><a class="btn btn--light" href="research.html#toolkits">Browse the toolkit programme__ARROW__</a></div>
      </div>
      <div data-reveal>
        <ul class="check-list tool-list">
          <li>DPI Trust Assessment Toolkit</li>
          <li>Open-Source Project Security Baseline</li>
          <li>DPG Software Trust Scorecard</li>
          <li>DPI AI Governance Checklist</li>
          <li>Digital Identity and Credential Threat Model</li>
          <li>Inclusive Payment Security Guide</li>
          <li>DPI/DPG supply chain security checklist</li>
          <li>Responsible vulnerability disclosure guidance for public-interest systems</li>
        </ul>
        <p class="note mt-6">Publication status is shown against every resource. Nothing is listed as available until it
          has been published &mdash; the library reflects the programme, not a promise.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Independence ──────────────────────────────────────────────────────── -->
<section class="section" id="independence">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <div class="flow" data-reveal>
        <p class="eyebrow">Independence</p>
        <h2 class="balance">Credible assurance depends on who the assessor answers to</h2>
        <p class="text-muted">The Foundation operates outside vendor, implementer and platform incentives. It builds on
          digital trust expertise developed by Nucleus Systems &mdash; but that relationship is explicit, written down and
          bounded, and the Foundation is not a commercial channel for anyone.</p>
        <ul class="check-list mt-6">
          <li>An independent, multi-stakeholder Board, not controlled by any single founder, funder or vendor.</li>
          <li>Foundation control of grant applications, project selection, research priorities and publication decisions.</li>
          <li>Published conflict-of-interest, related-party and research-independence policies.</li>
          <li>No single funder to exceed a defined share of core, unrestricted income.</li>
        </ul>
        <div class="mt-7"><a class="btn btn--ghost" href="governance.html">How the Foundation is governed__ARROW__</a></div>
      </div>
      <figure class="media-frame" data-reveal>
        <img src="assets/img/photos/council-chamber.jpg" alt="An empty institutional council chamber with microphones at each seat." width="1600" height="1000" loading="lazy" decoding="async">
        <figcaption>Governance designed for scrutiny: transparent decisions, written agreements, published policies.</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- ── Who we serve ──────────────────────────────────────────────────────── -->
<section class="section section--alt" id="audiences">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Who we serve</p>
      <h2 class="balance">Different audiences, one shared dependency</h2>
      <p>The Foundation serves governments as DPI implementers, digital public goods as infrastructure providers, and the
        communities that ultimately depend on both.</p>
    </div>
    <div class="grid grid-3" data-reveal-stagger>
      __AUDIENCES__
    </div>
  </div>
</section>
__CTA__
"""

GAPS = [
    ("01", "Independent assurance gap",
     "Systems may be assessed by implementers, operators or vendors rather than conflict-free public-interest reviewers.",
     "Citizens carry the risk of design, configuration or governance weaknesses they cannot see."),
    ("02", "Citizen safety gap",
     "Awareness, recourse, consent and fraud support often arrive after adoption rather than before it.",
     "Scams, account takeover and payment fraud undermine confidence in digital channels."),
    ("03", "Ecosystem coordination gap",
     "Identity, payments, telecoms, data protection, cyber, financial intelligence units and consumer bodies often respond separately.",
     "A single incident can fall between mandates, delaying help and accountability."),
    ("04", "Digital public good reuse gap",
     "Open-source components scale across countries faster than coordinated vulnerability disclosure and supply-chain assurance.",
     "One shared weakness can become many sovereign weaknesses."),
    ("05", "AI governance gap",
     "AI enters fraud detection, identity verification and service delivery before strong oversight and appeal processes exist.",
     "People may be misclassified, excluded, profiled or manipulated without meaningful recourse."),
]

DIVISIONS = [
    ("01", "DPI Security, Safety and Trust Lab",
     "Research, design, testing and support for safeguards across identity, payments, data exchange, social protection, health, education and public-service delivery.",
     "divisions/dpi-trust-lab.html", "shield-check"),
    ("02", "Open Digital Commons and Software Trust",
     "Creating, hosting, securing and sustaining open-source projects that contribute to digital trust, inclusion and public-interest infrastructure.",
     "divisions/open-digital-commons.html", "branch"),
    ("03", "Digital Trust Policy and Evidence Centre",
     "Independent research that translates technical risk into evidence for policy, regulation, investment and public-interest technology decisions.",
     "divisions/policy-evidence-centre.html", "book"),
    ("04", "Digital Trust Skills and Implementation Academy",
     "Practical digital trust skills transferred to governments, universities, civil society, open-source communities and local technology teams.",
     "divisions/skills-academy.html", "cap"),
    ("05", "Public-Interest Cyber and Digital Safety Centre",
     "Practical cyber support for nonprofits, community institutions and social-impact technology providers that cannot afford commercial services.",
     "divisions/cyber-safety-centre.html", "buoy"),
]

AUDIENCES = [
    ("globe", "Governments and DPI programme teams",
     "National identity authorities, central banks and payment regulators, ministries of ICT and digital transformation, data-protection and AI regulators, national cybersecurity agencies, and social protection, health and education ministries.",
     "get-involved.html#partner", "Request an assessment"),
    ("branch", "Digital public goods and open-source maintainers",
     "Identity platforms, data-exchange layers, social protection and beneficiary-management systems, health and immunisation registries, instant payment platforms, and civic-registration and consent tools.",
     "get-involved.html#support", "Apply for support"),
    ("chart", "Funders and development partners",
     "Philanthropic foundations, multilateral and bilateral donors, development finance institutions and DPI financing facilities investing in safe, inclusive digital infrastructure.",
     "support-our-work.html", "See the investment case"),
    ("users", "Civil society and community organisations",
     "Human-rights, consumer, community and digital-inclusion organisations that need practical cyber support, safety materials and a route to report digital harm.",
     "get-involved.html#support", "Reach the helpdesk"),
    ("book", "Researchers and universities",
     "Research institutions and fellows collaborating on digital trust research, peer review, methods and evaluation across Africa and the Global South.",
     "get-involved.html#careers", "Fellowship pathways"),
    ("cpu", "Fintech and civic-tech developers",
     "Teams building on national rails who need clear security baselines, threat models and inclusive-design guidance for payments, identity and consent.",
     "research.html#toolkits", "Use the toolkits"),
]


def render():
    gaps = "".join(
        f"""<div class="gap-row">
        <div class="gap-num">{num}</div>
        <h3 class="gap-title">{title}</h3>
        <div class="gap-cell"><span class="gap-key">What remains unseen</span>{unseen}</div>
        <div class="gap-cell gap-cell--consequence"><span class="gap-key">Citizen consequence</span>{cons}</div>
      </div>"""
        for num, title, unseen, cons in GAPS
    )

    divisions = "".join(
        f"""<a class="div-card" href="{href}">
        <span class="dc-index">{num}</span>
        <div class="icon-badge">{icon(ic)}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span class="dc-more">Division detail {icon("arrow")}</span>
      </a>"""
        for num, title, desc, href, ic in DIVISIONS
    )

    audiences = "".join(
        f"""<article class="card card--hover">
        <div class="icon-badge icon-badge--{'orange' if i % 3 == 1 else ('teal' if i % 3 == 2 else '')}">{icon(ic)}</div>
        <h3 class="card-title">{title}</h3>
        <p>{desc}</p>
        <p class="mt-4"><a class="link-arrow" href="{href}">{cta}{ARROW}</a></p>
      </article>"""
        for i, (ic, title, desc, href, cta) in enumerate(AUDIENCES)
    )

    body = (BODY
            .replace("__GAPS__", gaps)
            .replace("__DIVISIONS__", divisions)
            .replace("__AUDIENCES__", audiences)
            .replace("__ARROW__", ARROW)
            .replace("__CTA__", cta_band(
                "",
                title="Fund the protection layer, not only the platform.",
                text="Partnership, funding and programme enquiries are welcome from governments, digital public goods "
                     "initiatives, donors and social investment partners.")))
    return body
