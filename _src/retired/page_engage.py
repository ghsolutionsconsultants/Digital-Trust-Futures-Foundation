# -*- coding: utf-8 -*-
from shell import ARROW, icon, cta_band, page_hero, breadcrumb

# ── Open source ──────────────────────────────────────────────────────────────
OS_SERVICES = [
    ("branch", "Project creation",
     "Incubating DPI safeguards utilities, security assessment tools, credential and payment-assurance components, and open-source AI governance tools."),
    ("layers", "Hosting and governance",
     "A neutral legal home, project charters, technical steering committees and transparent decision-making for projects that need institutional shelter."),
    ("shield-check", "Security and software trust",
     "Secure SDLC, SBOM and VEX generation, code signing, build provenance, repository hardening and coordinated vulnerability disclosure."),
    ("refresh", "Sustainability",
     "Grant administration, maintainer support, community building, and long-term maintenance and succession planning."),
    ("users", "Support services",
     "Security assessments, maintainer training, DevSecOps implementation and architecture or release-readiness reviews."),
]

OS_CATEGORIES = [
    ("Digital identity platforms", "Open-source modular identity systems used across multiple national deployments."),
    ("Data-exchange and interoperability layers", "Components connecting government systems and services."),
    ("Social protection and beneficiary management", "Platforms determining who receives support, and when."),
    ("Health information and immunisation registries", "Systems holding some of the most sensitive population data."),
    ("Instant and interoperable payment platforms", "Rails supporting financial inclusion at national scale."),
    ("Civic registration, consent and credentialing tools", "Components that mediate consent and prove entitlement."),
]

OS_CRITERIA = [
    "The project is open source under an OSI-approved licence.",
    "The project is in use, or credibly heading toward use, in public-interest or government service delivery.",
    "The maintainers want security support and are able to act on findings.",
    "Support can be delivered without displacing an existing funded provider.",
    "Findings can be handled under coordinated disclosure, and lessons published in some anonymised form.",
]


def open_source():
    crumbs = breadcrumb([("Home", "index.html"), ("Open source", None)], "")
    services = "".join(
        f"""<article class="card card--hover">
      <div class="icon-badge icon-badge--{'orange' if i % 3 == 1 else ('teal' if i % 3 == 2 else '')}">{icon(ic)}</div>
      <h3 class="card-title">{name}</h3><p>{desc}</p></article>"""
        for i, (ic, name, desc) in enumerate(OS_SERVICES))

    cats = "".join(f"<tr><td><strong>{a}</strong></td><td>{b}</td></tr>" for a, b in OS_CATEGORIES)
    criteria = "".join(f"<li>{c}</li>" for c in OS_CRITERIA)

    hero = page_hero(
        eyebrow="Open source",
        title="Securing the components that many governments quietly depend on",
        lede="Digital public goods are frequently maintained by small teams without dedicated security or "
             "sustainability capacity. When one shared component is weak, that weakness can become many sovereign "
             "weaknesses. The Foundation exists in part to close that distance.",
        crumbs_html=crumbs,
        extra="""<nav class="section-nav" data-section-nav aria-label="On this page">
      <a href="#services">What we provide</a><a href="#projects">Projects</a>
      <a href="#advisories">Security advisories</a><a href="#contributing">Contributing</a>
    </nav>""")

    body = f"""{hero}

<section class="section" id="services">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">What we provide</p>
      <h2 class="balance">Five ways the Foundation supports open source</h2>
      <p>The Open Digital Commons and Software Trust Division links to external code repositories rather than
        duplicating code hosting. Where a project needs a neutral legal home, the Foundation can provide one.</p>
    </div>
    <div class="grid grid-3" data-reveal-stagger>{services}</div>
  </div>
</section>

<section class="section section--alt" id="projects">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Project directory</p>
      <h2 class="balance">Hosted and supported projects</h2>
      <p>Phase 1 prioritises two to four projects. The directory below will list each supported project with its
        repository link, licence, maintainer contact and support status as engagements are confirmed.</p>
    </div>

    <div class="empty-directory" data-reveal>
      <div class="icon-badge icon-badge--orange">{icon("branch")}</div>
      <h3>No projects listed yet</h3>
      <p class="text-muted mt-3" style="max-width:58ch">Project selection is made in consultation with the Digital
        Public Goods Alliance registry and through direct outreach to maintainer communities. Each supported project
        will be published here with its repository, licence and support scope once the engagement and its disclosure
        terms are agreed.</p>
      <div class="cluster mt-6">
        <a class="btn btn--accent" href="get-involved.html#support">Propose a project{ARROW}</a>
        <a class="btn btn--ghost" href="divisions/open-digital-commons.html">Division detail{ARROW}</a>
      </div>
    </div>

    <div class="split split--even mt-8" style="align-items:start">
      <div data-reveal>
        <h3>Categories we prioritise</h3>
        <div class="table-wrap mt-5">
          <table>
            <caption>Digital public good categories</caption>
            <thead><tr><th scope="col">Category</th><th scope="col">Why it matters</th></tr></thead>
            <tbody>{cats}</tbody>
          </table>
        </div>
      </div>
      <div data-reveal>
        <h3>Selection criteria</h3>
        <ul class="check-list mt-5">{criteria}</ul>
        <div class="note mt-6"><strong>A note on capacity.</strong> The Foundation would rather support three projects
          properly than list thirty. Where we cannot help directly, we will say so and try to point you somewhere
          that can.</div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="advisories">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Security advisories</p>
        <h2 class="balance">Disclosure that protects users first</h2>
        <p class="lede mt-4">Advisories relating to projects the Foundation supports are published here after
          coordinated disclosure with maintainers and, where a national deployment is affected, with the relevant
          operators.</p>
        <div class="mt-6"><a class="btn btn--ghost" href="security.html">Vulnerability disclosure policy{ARROW}</a></div>
      </div>
      <div class="flow" data-reveal>
        <div class="empty-state">No advisories have been published. This page will list every advisory issued, including
          those that turn out to be low severity.</div>
        <div class="grid grid-2 mt-6">
          <div class="callout"><h3>How we handle findings</h3>
            <ul class="dot-list mt-4">
              <li>Report received and acknowledged.</li>
              <li>Triage and severity assessment with the maintainer.</li>
              <li>Coordinated remediation window agreed.</li>
              <li>Advisory published with credit to the reporter, unless anonymity is requested.</li>
            </ul>
          </div>
          <div class="callout callout--teal"><h3>When we withhold detail</h3>
            <p>Where technical detail could assist adversaries or expose citizens to harm, publication may be delayed
              or redacted. That decision is recorded, explained, and reviewed &mdash; it is never a way to make a
              problem disappear.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section band-dark" id="contributing">
  <div class="container">
    <div class="split">
      <div data-reveal>
        <p class="eyebrow eyebrow--teal">Contributing</p>
        <h2 class="balance">How to work with us on open source</h2>
        <p class="pretty">Whether you maintain a digital public good, want to contribute to a Foundation-hosted project,
          or think a component your country depends on needs review &mdash; there is a route in.</p>
        <div class="mt-7 cluster">
          <a class="btn btn--light" href="get-involved.html#support">Request support{ARROW}</a>
          <a class="btn btn--outline-light" href="mailto:info@digitaltrustfuturesfoundation.org">Email the division{ARROW}</a>
        </div>
      </div>
      <div data-reveal>
        <ul class="check-list">
          <li><strong>Maintainers:</strong> request a security baseline review, SBOM support or a disclosure process.</li>
          <li><strong>Contributors:</strong> each hosted project publishes its own contribution guide, code of conduct and review process in its repository.</li>
          <li><strong>Governments:</strong> tell us which open-source components your national systems depend on, so shared exposure can be assessed once rather than repeatedly.</li>
          <li><strong>Funders:</strong> the Open-Source Maintainer Security Fund exists precisely because maintenance is chronically underfunded.</li>
          <li><strong>Researchers:</strong> replication requests and methodological challenge are welcome.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{cta_band("", title="One shared weakness should not become many sovereign weaknesses.", text="If your national infrastructure depends on an open-source component that nobody is funded to secure, we would like to hear about it.", primary=("Request support", "get-involved.html#support"), secondary=("Support our work", "support-our-work.html"))}
"""
    return body


# ── Get involved ─────────────────────────────────────────────────────────────
PATHWAYS = [
    ("partner", "globe", "Governments and DPI programme teams",
     "National identity authorities, central banks and payment regulators, ministries of ICT and digital transformation, data-protection and AI regulators, national cybersecurity agencies, and service-delivery ministries.",
     ["DPI trust readiness assessment", "Safeguards accelerator support", "AI governance review",
      "Incident readiness and resilience support"],
     "info@digitaltrustfuturesfoundation.org", "Government / DPI programme"),
    ("support", "branch", "Digital public goods and open-source maintainers",
     "Maintainers of identity platforms, data-exchange layers, social protection systems, health registries, payment platforms and consent tooling.",
     ["Security baseline review", "SBOM and supply-chain support", "Vulnerability disclosure process",
      "Sustainability and governance advisory"],
     "info@digitaltrustfuturesfoundation.org", "Digital public good / open source"),
    ("funders", "chart", "Funders and development partners",
     "Philanthropic foundations, multilateral and bilateral donors, development finance institutions and DPI financing facilities.",
     ["Two-year launch investment package", "Programme-specific funding", "Fellowship and fund sponsorship",
      "Co-designed measurement and reporting"],
     "info@digitaltrustfuturesfoundation.org", "Funding / partnership"),
    ("helpdesk", "buoy", "Civil-society organisations",
     "Nonprofits, community institutions and social-impact technology providers that cannot afford commercial cybersecurity services.",
     ["Cyber helpdesk", "Digital safety clinic", "Cyber maturity support",
      "Community safety toolkits and training"],
     "info@digitaltrustfuturesfoundation.org", "Civil society support request"),
    ("careers", "cap", "Researchers, fellows and practitioners",
     "Researchers, university partners, early-career practitioners and specialists who want to work on digital trust in the Global South.",
     ["Research fellowships", "Open-source fellowships", "Graduate programme", "Roles as they open"],
     "info@digitaltrustfuturesfoundation.org", "Careers / fellowships"),
]

NEXT_STEPS = [
    ("01", "Acknowledgement", "We confirm receipt and tell you who is picking the enquiry up."),
    ("02", "Scoping conversation", "A short call to understand the system, the constraint and what would actually help."),
    ("03", "Written scope", "A defined scope, deliverables, timeline, disclosure terms and any partner obligations."),
    ("04", "Agreement", "A written agreement covering roles, confidentiality, publication and safeguarding."),
    ("05", "Delivery and publication", "Work delivered, findings shared with you first, anonymised lessons published where agreed."),
]


def get_involved():
    crumbs = breadcrumb([("Home", "index.html"), ("Get involved", None)], "")

    pathways = "".join(
        f"""<article class="pathway" id="{pid}">
      <div class="icon-badge">{icon(ic)}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul class="dot-list">{''.join(f'<li>{o}</li>' for o in offers)}</ul>
      <div class="pathway-foot"><a class="link-arrow" href="#enquiry">Start an enquiry{ARROW}</a></div>
    </article>"""
        for pid, ic, title, desc, offers, email, label in PATHWAYS)

    options = "".join(
        f'<option value="Enquiry &mdash; {label}" data-email="{email}">{label}</option>'
        for *_, email, label in PATHWAYS)

    steps = "".join(
        f"""<div class="step"><span class="step-num">{n}</span>
      <div><h3>{t}</h3><p>{d}</p></div></div>"""
        for n, t, d in NEXT_STEPS)

    hero = page_hero(
        eyebrow="Get involved",
        title="Five routes in, one address to send them to",
        lede="A central bank asking about payment fraud and a maintainer asking about SBOMs need different people on "
             "the other end of the message. Tell us which of these you are and the enquiry reaches them &mdash; the "
             "form below writes the subject line for you.",
        crumbs_html=crumbs)

    body = f"""{hero}

<section class="section">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Pathways</p>
      <h2 class="balance">Find your route</h2>
    </div>
    <div class="grid grid-3" data-reveal-stagger>{pathways}</div>
  </div>
</section>

<section class="section section--alt" id="enquiry">
  <div class="container">
    <div class="split split--even" style="align-items:start">
      <div class="flow" data-reveal>
        <p class="eyebrow">Enquiry</p>
        <h2 class="balance">Send us the specifics</h2>
        <p class="text-muted">The more concrete the system, constraint or question, the faster we can tell you whether
          we are the right organisation &mdash; and if we are not, who might be.</p>

        <div class="note mt-6"><strong>How this form works.</strong> Submissions are delivered to the Foundation by
          Web3Forms, a form-delivery service acting as our processor. It passes your message to
          <strong>info@digitaltrustfuturesfoundation.org</strong> and does not use it for anything else. No account is
          created and no cookie is set. What you send, and how long we keep it, is set out in the
          <a href="legal/privacy.html">privacy policy</a>. If you would rather not use a third party at all, email us
          directly at the address below.</div>

        <div class="mt-6">
          <p class="mono-label">Prefer to write directly?</p>
          <p class="mt-3"><a class="link-arrow" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org{ARROW}</a></p>
        </div>
      </div>

      <form class="form card" action="https://api.web3forms.com/submit" method="POST" data-route-form data-reveal>
        <input type="hidden" name="access_key" value="65b5c951-5ecf-4ac9-8dfc-0b467534e77e">
        <input type="hidden" name="from_name" value="Digital Trust Futures Foundation website">
        <input type="hidden" name="redirect" value="https://digitaltrustfuturesfoundation.org/thank-you.html">
        <!-- Honeypot: hidden from people, filled in by bots. -->
        <input type="checkbox" name="botcheck" class="visually-hidden" style="display:none" tabindex="-1" autocomplete="off" aria-hidden="true">

        <div class="field">
          <label for="subject">What is this about?<span class="req" aria-hidden="true">*</span></label>
          <select id="subject" name="subject" data-route-select required>{options}</select>
          <p class="hint" data-route-target></p>
        </div>
        <div class="form-grid form-grid--2">
          <div class="field">
            <label for="name">Your name<span class="req" aria-hidden="true">*</span></label>
            <input type="text" id="name" name="name" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="email">Email<span class="req" aria-hidden="true">*</span></label>
            <input type="email" id="email" name="email" autocomplete="email" required>
          </div>
        </div>
        <div class="form-grid form-grid--2">
          <div class="field">
            <label for="organisation">Organisation</label>
            <input type="text" id="organisation" name="organisation" autocomplete="organization">
          </div>
          <div class="field">
            <label for="country">Country</label>
            <input type="text" id="country" name="country" autocomplete="country-name">
          </div>
        </div>
        <div class="field">
          <label for="role">Role</label>
          <input type="text" id="role" name="role" autocomplete="organization-title">
        </div>
        <div class="field">
          <label for="message">What would you like help with?<span class="req" aria-hidden="true">*</span></label>
          <textarea id="message" name="message" required placeholder="The system, the constraint, and what a good outcome would look like."></textarea>
        </div>
        <label class="checkbox">
          <input type="checkbox" name="consent" value="yes" required>
          <span>I consent to the Foundation processing these details in order to respond, as set out in the
            <a href="legal/privacy.html">privacy policy</a>. Please do not include security-sensitive detail here
            &mdash; use the <a href="security.html">vulnerability disclosure route</a> instead.</span>
        </label>
        <button class="btn btn--accent btn--lg" type="submit">Send enquiry{ARROW}</button>
        <p class="form-note" data-form-status hidden role="status"></p>
      </form>
    </div>
  </div>
</section>

<section class="section" id="careers-detail">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">What happens next</p>
        <h2 class="balance">From first message to published lesson</h2>
        <p class="lede mt-4">The Foundation works through written scopes and agreements. That is slower than a handshake
          and considerably more useful when findings turn out to be uncomfortable.</p>
      </div>
      <div class="steps" data-reveal>{steps}</div>
    </div>
  </div>
</section>

<section class="section section--alt" id="careers">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <figure class="media-frame" data-reveal>
        <img src="assets/img/photos/classroom-backs.jpg" alt="A training room seen from the back, participants facing a facilitator." width="1200" height="750" loading="lazy" decoding="async">
      </figure>
      <div class="flow" data-reveal>
        <p class="eyebrow">Careers and fellowships</p>
        <h2 class="balance">Work on the protection layer</h2>
        <p class="text-muted">The Foundation is at launch stage. Roles and fellowship cohorts will be published here and
          announced as funding is confirmed. Speculative approaches from people with DPI assurance, open-source
          security, AI governance, MEL or safeguarding experience in the region are welcome.</p>
        <ul class="check-list mt-6">
          <li>Digital Trust Research Fellowship &mdash; Policy and Evidence Centre</li>
          <li>African Open-Source Fellows Programme &mdash; Open Digital Commons</li>
          <li>Women in Digital Trust Fellowship &mdash; Skills and Implementation Academy</li>
          <li>African Digital Trust Graduate Programme &mdash; Skills and Implementation Academy</li>
        </ul>
        <div class="mt-7 cluster">
          <a class="btn btn--primary" href="mailto:info@digitaltrustfuturesfoundation.org">Register your interest{ARROW}</a>
          <a class="btn btn--ghost" href="programmes.html#fellowships">Fellowship detail{ARROW}</a>
        </div>
      </div>
    </div>
  </div>
</section>

{cta_band("", title="If you are not sure which route is yours, start anywhere.", text="One address, and we would rather redirect an enquiry than miss a system that needs looking at.", primary=("Contact the Foundation", "contact.html"), secondary=("Support our work", "support-our-work.html"))}
"""
    return body
