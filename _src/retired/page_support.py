# -*- coding: utf-8 -*-
from shell import ARROW, icon, cta_band, page_hero, breadcrumb

# ── Support our work (funder case) ───────────────────────────────────────────
ALLOC = [
    ("Citizen Digital Safety and DPI Trust Programme", 45, 40, 85),
    ("DPI Security Assurance and Resilience Lab", 65, 55, 120),
    ("Global South Digital Trust Coordination Network", 35, 35, 70),
    ("Monitoring, evaluation, learning and grant administration", 15, 10, 25),
]

BUYS = [
    ("Citizen safety toolkit and training package",
     "Reusable community protection materials that can scale through partners."),
    ("DPI assurance framework and checklists",
     "A practical public-good baseline for safer identity, payment and data-exchange systems."),
    ("Limited-scope assurance pilots",
     "Evidence on real implementation gaps without waiting for a full-scale audit programme."),
    ("Digital trust network and roundtables",
     "A coordination platform to convert lessons into shared practice."),
    ("Knowledge hub and policy briefs",
     "Public outputs that funders, governments and civil society can reuse."),
    ("MEL and learning reports",
     "Accountability evidence showing what changed and what remains underfunded."),
]

REASONS = [
    ("Protects citizens before harm becomes normalised",
     "Digital users receive practical safety support before scams, exclusion and data misuse undermine trust."),
    ("Makes invisible risks visible",
     "Funders and policymakers receive evidence on risks that standard delivery reports often miss."),
    ("Builds public-interest assurance capacity",
     "DPI and DPG ecosystems gain a non-commercial layer of technical and governance review."),
    ("Creates reusable public goods",
     "Toolkits, frameworks and playbooks can benefit many countries and communities beyond one project."),
    ("Strengthens Global South leadership",
     "Digital trust methods are shaped around the realities of countries adopting DPI fastest."),
]

CHALLENGE = [
    ("DPI adoption is accelerating faster than independent safeguards capacity.",
     "Early investment is cheaper, safer and more trusted than crisis-driven remediation after harm has occurred."),
    ("Citizen risks are often unseen until adoption has already scaled.",
     "Funders can make citizen protection visible through evidence, toolkits, reporting and public-interest assurance."),
    ("Commercial assurance is often too expensive or misaligned with public-good DPI economics.",
     "A nonprofit assurance model can produce reusable tools and learning beyond a single client engagement."),
    ("Cyber, fraud, privacy, AI and exclusion risks are treated in silos.",
     "The Foundation links them into one citizen-centred digital trust agenda."),
]

REVENUE = [
    ("Grant and donor funding",
     "Multi-year grants from philanthropic foundations, bilateral and multilateral donors and development finance institutions.",
     "Core programme funding, research, flagship initiative"),
    ("Government contracts and MOUs",
     "Fee-for-service or grant-funded DPI trust assessments and advisory support delivered to government counterparts.",
     "DPI Trust Lab country engagements"),
    ("DPG and open-source project grants",
     "Dedicated security, sustainability and hosting grants tied to named digital public goods.",
     "Open Digital Commons division"),
    ("Training and certification fees",
     "Fees from government, corporate or individual participants in Academy programmes, set on a sliding or subsidised scale.",
     "Skills and Implementation Academy"),
    ("In-kind and secondment support",
     "Donated staff time, technical tooling and mentorship, principally from Nucleus Systems and technology partners.",
     "Cross-divisional technical capacity"),
    ("Corporate and CSR partnerships",
     "Sponsorship of specific programmes, fellowships or open-source security funds.",
     "Fellowships, Maintainer Security Fund"),
    ("Membership or affiliate contributions",
     "An optional future model in which government or DPG partners contribute to sustain shared safeguards tools.",
     "Long-term sustainability of open tools"),
]

FUNDER_CATEGORIES = [
    ("Global philanthropic foundations",
     "Foundations with existing portfolios in digital public infrastructure, digital identity, responsible technology, open source, internet health, digital rights and inclusive digital systems."),
    ("Multilateral and development finance institutions",
     "Institutions running DPI lending, technical assistance, digital public goods and standards programmes at multilateral or regional level."),
    ("Bilateral development agencies",
     "Bilateral donors with active digital development and DPI programming across Africa and the wider Global South."),
    ("Digital public goods and infrastructure alliances",
     "DPG registries, DPI financing facilities and regional digital infrastructure and identity communities and convenings."),
    ("Corporate and technology-sector partners",
     "Cloud, cybersecurity and technology companies with public-interest or open-source funding programmes, including open-source security funds and cloud-credit programmes."),
]

PRINCIPLES = [
    "No single funder to exceed a defined share of core, unrestricted income, to protect independence.",
    "Clear separation between restricted programme funding and core organisational costs.",
    "Preference for multi-year, flexible funding over single-year restricted grants.",
    "Transparent, published donor and funding policies, including conflict-of-interest safeguards for any Nucleus Systems-linked funding.",
    "Fee-for-service and training income reinvested to subsidise free public-interest tools and support for under-resourced DPGs and civil society.",
]


def support():
    crumbs = breadcrumb([("Home", "index.html"), ("Support our work", None)], "")
    total = sum(a[3] for a in ALLOC)

    alloc_items = "".join(
        f"""<div class="alloc-item">
      <div class="alloc-head">
        <span class="alloc-name">{name}</span>
        <span class="alloc-val">USD {tot},000</span>
      </div>
      <div class="alloc-track"><div class="alloc-fill" style="--w:{tot / total * 100:.1f}%"></div></div>
    </div>"""
        for name, y1, y2, tot in ALLOC)

    alloc_rows = "".join(
        f"""<tr><td><strong>{name}</strong></td><td class="t-num">USD {y1},000</td>
        <td class="t-num">USD {y2},000</td><td class="t-num">USD {tot},000</td></tr>"""
        for name, y1, y2, tot in ALLOC)

    buys = "".join(f"<tr><td><strong>{a}</strong></td><td>{b}</td></tr>" for a, b in BUYS)
    reasons = "".join(
        f"""<article class="card card--hover"><div class="card-topbar"></div>
      <h3 class="card-title">{a}</h3><p>{b}</p></article>""" for a, b in REASONS)
    challenge = "".join(f"<tr><td>{a}</td><td><strong>{b}</strong></td></tr>" for a, b in CHALLENGE)
    revenue = "".join(f"<tr><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>" for a, b, c in REVENUE)
    cats = "".join(
        f"""<article class="card"><h3 class="card-title">{a}</h3><p>{b}</p></article>"""
        for a, b in FUNDER_CATEGORIES)
    principles = "".join(f"<li>{p}</li>" for p in PRINCIPLES)

    hero = page_hero(
        eyebrow="For funders and development partners",
        title="A focused USD 300,000 two-year launch portfolio",
        lede="Investing in the Foundation is an investment in the missing protection layer between fast-moving digital "
             "public infrastructure and the citizens who depend on it. The launch package can be supported by one "
             "anchor funder or blended across several.",
        crumbs_html=crumbs,
        meta_html='<div class="page-hero-meta">'
                  '<span class="pill pill--light">USD 300,000 over 24 months</span>'
                  '<span class="pill pill--light">3 launch programmes</span>'
                  '<span class="pill pill--light">Anchor or blended funding</span></div>',
        extra="""<nav class="section-nav" data-section-nav aria-label="On this page">
      <a href="#case">The case</a><a href="#portfolio">Portfolio</a><a href="#buys">What it buys</a>
      <a href="#model">Funding model</a><a href="#partners">Partner categories</a>
    </nav>""")

    body = f"""{hero}

<section class="section" id="case">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Executive investment message</p>
        <h2 class="balance">Why this Foundation, and why now</h2>
      </div>
      <div class="flow prose" data-reveal>
        <p class="lede">The Global South is moving rapidly from digital pilots to population-scale digital systems,
          while the practical safeguards required to protect citizens remain fragmented, underfunded and often invisible
          to the people most affected by failure.</p>
        <p>When these systems are unsafe or untrusted, harm is not limited to a breach report. It appears as stolen
          wages, inaccessible grants, failed appeals, manipulated consent, biometric exclusion, mobile-wallet fraud,
          social engineering, data misuse and quiet withdrawal back into cash and informal systems.</p>
        <p>The Foundation is relevant to funders who want to support cybersecurity as a public good, digital inclusion
          that remains safe after adoption, and DPI ecosystems resilient enough to serve people under real-world threat
          conditions.</p>
      </div>
    </div>

    <div class="table-wrap mt-8" data-reveal>
      <table>
        <caption>The challenge, and why funders should act</caption>
        <thead><tr><th scope="col">The challenge</th><th scope="col">Why funders should act</th></tr></thead>
        <tbody>{challenge}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section section--alt" id="portfolio">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">The launch portfolio</p>
      <h2 class="balance">Where the money goes</h2>
      <p>A lean two-year portfolio designed to demonstrate public-interest value, build credible assets, create early
        evidence and position the Foundation for follow-on funding.</p>
    </div>

    <div class="portfolio" data-reveal>
      <div class="alloc">
        {alloc_items}
        <div class="alloc-total">
          <span class="alloc-name">24-month total</span>
          <span class="alloc-val">USD {total},000</span>
        </div>
      </div>
      <div class="investment-logic">
        <span class="mono-label">Investment logic</span>
        <p>USD 300,000 over two years will not solve all DPI risk. It will create the missing public-interest launch
          layer: tools, assurance methods, early pilots, trusted convening, citizen safety materials and evidence that
          makes follow-on investment more precise.</p>
      </div>
    </div>

    <div class="table-wrap mt-8" data-reveal>
      <table>
        <caption>Two-year investment areas</caption>
        <thead><tr><th scope="col">Investment area</th><th scope="col">Year 1</th><th scope="col">Year 2</th><th scope="col">24-month total</th></tr></thead>
        <tbody>{alloc_rows}</tbody>
        <tfoot><tr><td>Total</td><td class="t-num">USD 160,000</td><td class="t-num">USD 140,000</td><td class="t-num">USD 300,000</td></tr></tfoot>
      </table>
    </div>
  </div>
</section>

<section class="section" id="buys">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">What the investment buys</p>
      <h2 class="balance">Assets created, and their value to funders</h2>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Assets and funder value</caption>
        <thead><tr><th scope="col">Asset created</th><th scope="col">Funder value</th></tr></thead>
        <tbody>{buys}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section band-dark band-dark--grid">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <p class="eyebrow eyebrow--center eyebrow--teal">Closing investment case</p>
      <h2 class="balance">Five reasons to invest</h2>
      <p>Funders have supported digital transformation, financial inclusion, digital identity, open-source
        infrastructure and public-sector modernisation for years. The next stage requires a complementary investment:
        the protection layer that makes those investments safe and trusted in practice.</p>
    </div>
    <div class="grid grid-3 reasons-grid" data-reveal-stagger>{reasons}</div>
    <blockquote class="quote quote--light mt-8" data-reveal style="max-width:70ch;margin-inline:auto">
      The future of DPI will not be judged only by how quickly systems are deployed. It will be judged by whether
      citizens can trust those systems with their identity, money, data, rights and public services.
      <cite>Closing investment case</cite>
    </blockquote>
  </div>
</section>

<section class="section" id="model">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Funding model</p>
      <h2 class="balance">Diversified by design, to protect independence</h2>
      <p>The Foundation pursues a multi-year, diversified funding model that reduces reliance on any single revenue
        source &mdash; because assurance that depends on one funder is not assurance.</p>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Revenue streams</caption>
        <thead><tr><th scope="col">Revenue stream</th><th scope="col">Description</th><th scope="col">Illustrative use</th></tr></thead>
        <tbody>{revenue}</tbody>
      </table>
    </div>
    <div class="split split--even mt-8" style="align-items:start">
      <div class="callout" data-reveal><h3>Funding principles</h3><ul class="dot-list mt-4">{principles}</ul></div>
      <div class="callout callout--teal" data-reveal><h3>Indicative three-year mix</h3>
        <ul class="dot-list dot-list--teal mt-4">
          <li><strong>Founding or anchor grant</strong> &mdash; establishes the Board, core team and Phase 1 divisions in Year 1; renewal or successor grant thereafter.</li>
          <li><strong>Donor and DFI grants</strong> &mdash; one to two programme-specific grants in Year 1, diversifying to three to five across divisions in Years 2 and 3.</li>
          <li><strong>Government contracts</strong> &mdash; pilot country engagements first, then recurring national assessments.</li>
          <li><strong>Training and fees</strong> &mdash; a pilot cohort first, then recurring Academy revenue.</li>
        </ul>
        <p class="mt-4"><small>Indicative only, to be refined during fundraising strategy development.</small></p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt" id="partners">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Prospective partner categories</p>
      <h2 class="balance">Where we are looking for anchor support</h2>
      <p>The categories below describe the types of funder active in DPI, digital public goods, open-source and
        digital-rights funding. They form a prospecting map for the Foundation&rsquo;s fundraising strategy.</p>
    </div>
    <div class="grid grid-3" data-reveal-stagger>{cats}</div>
    <p class="note mt-7" data-reveal><strong>Illustrative, not confirmed.</strong> No funder is named on this site as a
      partner, supporter or donor unless that relationship has been agreed and the partner has approved the reference.
      Categories are published so that prospective funders can see where the Foundation believes it fits, not to imply
      relationships that do not yet exist.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <figure class="media-frame" data-reveal>
        <img src="assets/img/photos/solar-aerial.jpg" alt="Aerial view of rows of solar panels in an arid landscape." width="1600" height="1000" loading="lazy" decoding="async">
        <figcaption>Infrastructure investment succeeds when the protection layer is funded alongside it, not after it.</figcaption>
      </figure>
      <div class="flow" data-reveal>
        <p class="eyebrow">Start a conversation</p>
        <h2 class="balance">What we will send you</h2>
        <p class="text-muted">Prospective funders and government partners can request the full documentation set: the
          comprehensive organisation profile, the positioning and strategy document, programme charters, the draft
          governance policy framework and the monitoring, evaluation and learning framework.</p>
        <div class="cluster mt-6">
          <a class="btn btn--accent btn--lg" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org{ARROW}</a>
          <a class="btn btn--ghost btn--lg" href="contact.html">Contact page{ARROW}</a>
        </div>
      </div>
    </div>
  </div>
</section>

{cta_band("", title="Fund the protection layer before it is needed, not after.", text="Early investment is cheaper, safer and more trusted than crisis-driven remediation once harm has already occurred.", primary=("Talk to partnerships", "contact.html"), secondary=("Read the programmes", "programmes.html"))}
"""
    return body


# ── News ─────────────────────────────────────────────────────────────────────
NEWS_TYPES = [
    ("megaphone", "Announcements", "Governance milestones, funding confirmations, partnership agreements and programme launches."),
    ("file", "Publications", "New research papers, policy briefs, toolkits, frameworks and the annual DPI trust report."),
    ("calendar", "Events and convenings", "Roundtables hosted by the coordination network, and sector convenings the Foundation participates in."),
    ("alert", "Security advisories", "Coordinated disclosures relating to projects the Foundation supports."),
]

CONVENINGS = [
    ("Digital identity community convenings", "Where identity authorities, vendors and civil society meet, and where DPI trust readiness findings are most useful."),
    ("Regional digital transformation forums", "Continental and regional bodies coordinating digital infrastructure and interoperability agendas."),
    ("Digital public goods community events", "Registry, standards and maintainer community gatherings for digital public goods."),
    ("Mobile and payment ecosystem convenings", "Where instant payment integrity, fraud and inclusion questions are worked through in practice."),
]


def news():
    crumbs = breadcrumb([("Home", "index.html"), ("News", None)], "")
    types = "".join(
        f"""<article class="card card--hover">
      <div class="icon-badge icon-badge--{'orange' if i % 3 == 1 else ('teal' if i % 3 == 2 else '')}">{icon(ic)}</div>
      <h3 class="card-title">{t}</h3><p>{d}</p></article>"""
        for i, (ic, t, d) in enumerate(NEWS_TYPES))
    conv = "".join(f"<tr><td><strong>{a}</strong></td><td>{b}</td></tr>" for a, b in CONVENINGS)

    hero = page_hero(
        eyebrow="News and events",
        title="Announcements, publications and convenings",
        lede="The Foundation publishes in a factual, evidence-based register. Announcements are made when something has "
             "actually happened &mdash; a policy adopted, a partnership signed, a resource published, an advisory "
             "coordinated.",
        crumbs_html=crumbs)

    body = f"""{hero}

<section class="section">
  <div class="container">
    <h2 class="visually-hidden">Latest announcements</h2>
    <div class="empty-directory" data-reveal>
      <div class="icon-badge icon-badge--teal">{icon("megaphone")}</div>
      <h3>No announcements published yet</h3>
      <p class="text-muted mt-3" style="max-width:60ch">The Foundation is at launch stage. This page will carry
        announcements, publications, event notices and advisories from the first reporting period onward, in reverse
        chronological order.</p>
      <div class="cluster mt-6">
        <a class="btn btn--accent" href="#newsletter">Get notified{ARROW}</a>
        <a class="btn btn--ghost" href="programmes.html#roadmap">See the roadmap{ARROW}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">What will appear here</p>
      <h2 class="balance">Four kinds of update</h2>
    </div>
    <div class="grid grid-4" data-reveal-stagger>{types}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Convenings</p>
        <h2 class="balance">Where the Foundation expects to engage</h2>
        <p class="lede mt-4">Relationships in this sector are built through existing convenings rather than cold
          outreach. The categories below describe where the Foundation intends to participate as programmes
          establish.</p>
      </div>
      <div data-reveal>
        <div class="table-wrap">
          <table>
            <caption>Convening categories</caption>
            <thead><tr><th scope="col">Category</th><th scope="col">Why it matters to the Foundation</th></tr></thead>
            <tbody>{conv}</tbody>
          </table>
        </div>
        <p class="note mt-6"><strong>Participation is not implied endorsement.</strong> Named events, partners and
          speaking engagements appear here only once confirmed.</p>
      </div>
    </div>
  </div>
</section>

<section class="section band-dark" id="newsletter">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <div data-reveal>
        <p class="eyebrow eyebrow--teal">Stay informed</p>
        <h2 class="balance">Occasional updates, no tracking</h2>
        <p class="pretty">A short update when the Foundation publishes something worth your time: a new toolkit, a
          research brief, a fellowship opening or a coordination roundtable.</p>
        <ul class="check-list mt-6">
          <li>Sent only when there is something substantive to report.</li>
          <li>Consent recorded, unsubscribe in every message.</li>
          <li>Your address is never shared, sold or used for anything else.</li>
        </ul>
      </div>
      <div data-reveal>
        <form class="form card newsletter-card" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="65b5c951-5ecf-4ac9-8dfc-0b467534e77e">
          <input type="hidden" name="subject" value="Newsletter signup">
          <input type="hidden" name="from_name" value="Digital Trust Futures Foundation website">
          <input type="hidden" name="redirect" value="https://digitaltrustfuturesfoundation.org/thank-you.html?t=newsletter">
          <input type="checkbox" name="botcheck" class="visually-hidden" style="display:none" tabindex="-1" autocomplete="off" aria-hidden="true">
          <div class="field">
            <label for="nl-email">Email address</label>
            <input type="email" id="nl-email" name="email" autocomplete="email" required placeholder="you@organisation.org">
            <p class="hint">We will add you to the list and confirm by email. Unsubscribe from any message.</p>
          </div>
          <label class="checkbox">
            <input type="checkbox" name="consent" value="yes" required>
            <span>I consent to receiving occasional updates from the Digital Trust Futures Foundation and understand I
              can unsubscribe at any time. See the <a href="legal/privacy.html">privacy policy</a>.</span>
          </label>
          <button class="btn btn--accent" type="submit">Subscribe{ARROW}</button>
        </form>
      </div>
    </div>
  </div>
</section>

{cta_band("", title="Nothing to announce is better than something invented.", text="When the Foundation has published, assessed, convened or coordinated something, it will appear here with dates and detail.", primary=("Read the programmes", "programmes.html"), secondary=("Support our work", "support-our-work.html"))}
"""
    return body
