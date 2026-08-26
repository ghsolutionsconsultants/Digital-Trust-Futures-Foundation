# -*- coding: utf-8 -*-
from shell import ARROW, icon, cta_band, page_hero, breadcrumb

# ── Division data ────────────────────────────────────────────────────────────
DIVISIONS = {
    "dpi-trust-lab": dict(
        num="01", slug="dpi-trust-lab", icon="shield-check", accent="navy",
        name="DPI Security, Safety and Trust Lab",
        short="DPI Trust Lab",
        phase="Phase 1 — first 12 months",
        photo=("datacentre-corridor.jpg", "A corridor of server racks inside a data centre."),
        strap="Safeguards research and assurance for the systems that hold identity, money and entitlement.",
        purpose="To research, design, test and support safeguards for digital public infrastructure &mdash; especially "
                "identity, payments, data exchange, social protection, health, education and public-service delivery "
                "systems. The Lab draws on established experience in critical infrastructure, payment security and DPI "
                "cybersecurity advisory, adapting an evidence-based maturity and assurance approach to national DPI "
                "environments that carry public-trust obligations.",
        audience="Governments and DPI programme teams",
        contact_email="info@digitaltrustfuturesfoundation.org",
        focus_title="Focus areas",
        focus=[
            ("DPI cybersecurity and resilience",
             "Architecture, identity and access management, API and platform security, cloud assurance, threat modelling, vulnerability management, incident response and business continuity."),
            ("DPI safety and human safeguards",
             "Exclusion and discrimination risk, redress mechanisms, consent and user agency, accessibility, and child, gender and disability-related protections."),
            ("Digital identity and verifiable credentials",
             "Identity system security, biometric safeguards, digital wallets, zero-knowledge proofs, credential revocation and trust frameworks."),
            ("Inclusive payment security",
             "Interoperable payment assurance, open-API security, fraud prevention, dispute mechanisms and cross-border safeguards."),
            ("AI governance for DPI",
             "Automated decision accountability, algorithmic impact assessment, bias and fairness, human oversight and AI incident response."),
            ("DPI assurance research",
             "Safeguards maturity models, country trust-readiness assessments and comparative research across African and Global South countries."),
        ],
        programmes=[
            ("DPI Trust Readiness Assessment", "A structured, evidence-based review of whether a national DPI deployment is ready to carry population-scale trust."),
            ("National DPI Safeguards Accelerator", "Hands-on support to close prioritised safeguards gaps with local teams rather than for them."),
            ("Digital Identity and Credential Safety Programme", "Identity, biometric and credential safeguards, from enrolment through revocation and recovery."),
            ("Inclusive Payment Integrity Initiative", "Fraud, mule-flow, dispute-handling and liability-allocation safeguards for instant and interoperable payments."),
            ("AI Governance for Public Infrastructure Programme", "Oversight, appeal and incident-response practice for AI embedded in public services."),
            ("DPI Incident Readiness and Resilience Programme", "Preparation for the incident that has not happened yet: playbooks, exercises and cross-institution escalation."),
            ("African DPI Trust Observatory", "Comparative, published evidence on DPI trust conditions across the region."),
        ],
        extra_title="What the Lab examines",
        extra_rows=[
            ("Digital identity", "Authentication, onboarding, consent, data minimisation, biometrics, exclusion risk, recovery processes and account-takeover patterns."),
            ("Payment rails and instant payments", "Fraud controls, mule-account risks, participant controls, API security, dispute handling, liability allocation and operational resilience."),
            ("Data exchange and consent", "Purpose binding, token handling, audit trails, data-sharing rules, consent revocation and privacy-preserving patterns."),
            ("Digital public goods", "Secure development, SBOM readiness, dependency risk, vulnerability disclosure, patching obligations and shared exposure."),
            ("AI-enabled public services", "Synthetic identity, adversarial inputs, bias, model governance, explainability, appeals and AI incident response."),
        ],
        outputs=[
            "DPI Security Assurance Framework and maturity model",
            "DPI/DPG supply chain security checklist",
            "Responsible vulnerability disclosure guidance for public-interest systems",
            "AI and fraud risk module for citizen-facing DPI",
            "Short technical briefs that translate risk into decision-ready funder and policy language",
        ],
        boundary="The Lab does not replace national cybersecurity functions or commercial audits. It provides a "
                 "practical, nonprofit assurance layer focused on citizen-facing public infrastructure and reusable "
                 "open tools.",
    ),
    "open-digital-commons": dict(
        num="02", slug="open-digital-commons", icon="branch", accent="orange",
        name="Open Digital Commons and Software Trust Division",
        short="Open Digital Commons",
        phase="Phase 1 — first 12 months",
        photo=("code-screen.jpg", "Source code displayed on a dark screen."),
        strap="A neutral home, a security baseline and a sustainability plan for digital public goods.",
        purpose="To create, host, manage, secure and sustain open-source projects that contribute to digital trust, "
                "inclusion and public-interest infrastructure. The division builds on established software-trust "
                "capability including secure SDLC, DevSecOps, SAST, SCA, SBOM, infrastructure-as-code, container "
                "security and software supply-chain assurance.",
        audience="Digital public goods and open-source maintainers",
        contact_email="info@digitaltrustfuturesfoundation.org",
        focus_title="Core responsibilities",
        focus=[
            ("Project creation",
             "Incubating DPI safeguards utilities, security assessment tools, credential and payment-assurance components, and open-source AI governance tools."),
            ("Hosting and governance",
             "Providing a neutral legal home, project charters, technical steering committees and transparent decision-making."),
            ("Security and software trust",
             "Secure SDLC, SBOM and VEX generation, code signing, build provenance, repository hardening and coordinated vulnerability disclosure."),
            ("Sustainability",
             "Grant administration, maintainer support, community building, and long-term maintenance and succession planning."),
            ("Support services",
             "Security assessments for digital public goods, maintainer training, DevSecOps implementation and architecture or release-readiness reviews."),
        ],
        programmes=[
            ("Digital Trust Open Source Incubator", "Bringing new public-interest safeguards tools from concept to a governed, maintained project."),
            ("DPG Security and Sustainability Programme", "Security review and sustainability planning for digital public goods already in national use."),
            ("Open-Source Maintainer Security Fund", "Direct support for the under-resourced maintainers that national systems quietly depend on."),
            ("Open Software Trust Assurance Programme", "Supply-chain assurance: provenance, signing, SBOM and dependency risk as standing practice."),
            ("Open-Source Vulnerability Response Service", "Coordinated disclosure and remediation support when a shared component is affected."),
            ("African Open-Source Fellows Programme", "Building a regional bench of maintainers with security depth."),
        ],
        extra_title="What digital public goods receive",
        extra_rows=[
            ("Secure SDLC and supply-chain review", "Including SBOM production and vulnerability-disclosure support."),
            ("Security assessment and remediation", "At no or subsidised cost, sized to what a small maintainer team can actually act on."),
            ("Governance and sustainability advisory", "Charters, steering, succession planning and maintainer support."),
            ("Funding pathways", "Access to the Open-Source Maintainer Security Fund and the African Open-Source Fellows Programme."),
            ("A neutral home", "Non-commercial hosting and governance where a project needs institutional shelter."),
        ],
        outputs=[
            "Open-Source Project Security Baseline",
            "DPG Software Trust Scorecard",
            "SBOM and VEX production guidance for public-interest projects",
            "Repository hardening and release-security reference configuration",
            "Coordinated vulnerability disclosure playbook for maintainers",
        ],
        boundary="The division links to external code repositories rather than duplicating code hosting. Where a "
                 "project needs a neutral legal home, the Foundation can provide one &mdash; but stewardship never "
                 "means silent ownership.",
    ),
    "policy-evidence-centre": dict(
        num="03", slug="policy-evidence-centre", icon="book", accent="teal",
        name="Digital Trust Policy and Evidence Centre",
        short="Policy and Evidence Centre",
        phase="Phase 1 — first 12 months",
        photo=("card-catalogue.jpg", "A wooden library card catalogue with labelled drawers."),
        strap="Translating technical risk into evidence that policy, regulation and investment can act on.",
        purpose="To undertake independent research and translate technical risk into evidence that can inform policy, "
                "regulation, investment and public-interest technology decisions &mdash; grounded in the realities of "
                "the countries adopting digital public infrastructure fastest.",
        audience="Regulators, policymakers, researchers and funders",
        contact_email="info@digitaltrustfuturesfoundation.org",
        focus_title="Research focus areas",
        focus=[
            ("DPI governance and safeguards", "How safeguards obligations are defined, allocated and enforced across the institutions that operate national infrastructure."),
            ("Digital identity and privacy policy", "Identity assurance, data minimisation, surveillance risk and the limits of consent at population scale."),
            ("AI governance", "Accountability, appeal and oversight where automated decisions affect entitlement and access."),
            ("Cybersecurity policy", "Incident reporting, disclosure regimes and resilience obligations for public infrastructure."),
            ("Open-source policy", "Procurement, sustainability and public-sector dependence on volunteer-maintained components."),
            ("Digital sovereignty, payment integrity and digital inclusion", "Where national control, financial integrity and inclusion objectives reinforce or contradict one another."),
        ],
        programmes=[
            ("Research papers and policy briefs", "Peer-reviewed and practitioner-facing outputs across the focus areas above."),
            ("Regulatory submissions", "Formal responses to consultations on identity, payments, AI, data protection and cybersecurity."),
            ("Country case studies", "Published with partner consent, anonymised where publication would create risk."),
            ("Standards contributions", "Participation in the technical standards processes that shape DPI safeguards."),
            ("Annual DPI trust index", "A comparative, published measure of DPI trust conditions across participating countries."),
            ("Digital Trust Research Fellowship", "Fellows working on DPI and surveillance risk, AI in public-benefit systems, verifiable credentials and privacy, open-source sustainability, software supply-chain risk and post-quantum readiness."),
        ],
        extra_title="Fellowship research themes",
        extra_rows=[
            ("DPI and surveillance risk", "Where infrastructure built for service delivery creates capability for monitoring."),
            ("AI use in public-benefit systems", "Eligibility, fraud detection and prioritisation decisions made or assisted by models."),
            ("Verifiable credentials and privacy", "Selective disclosure, revocation and the practical limits of privacy-preserving proofs."),
            ("Open-source sustainability", "The economics of maintaining components that many governments depend on."),
            ("Software supply-chain risk in public infrastructure", "Provenance, dependency depth and shared exposure across national deployments."),
            ("Post-quantum readiness", "Migration planning for identity and payment cryptography with long protection horizons."),
        ],
        outputs=[
            "Annual DPI trust report and trust index",
            "Policy briefs translating technical findings for non-technical decision-makers",
            "Regulatory and standards submissions",
            "Country and DPG case studies published with consent",
            "Open data sets supporting independent replication",
        ],
        boundary="Research independence is a written policy, not a posture: the Foundation controls its research "
                 "priorities and publication decisions, and findings are published whether or not they are convenient "
                 "for a funder or partner.",
    ),
    "skills-academy": dict(
        num="04", slug="skills-academy", icon="cap", accent="brass",
        name="Digital Trust Skills and Implementation Academy",
        short="Skills and Implementation Academy",
        phase="Phase 2 — months 12 to 24",
        photo=("classroom-backs.jpg", "A training room seen from the back, participants facing a facilitator."),
        strap="Capability that stays in the country after the engagement ends.",
        purpose="To transfer practical digital trust skills to governments, universities, civil-society organisations, "
                "open-source communities and local technology teams &mdash; aligned with a principle of open standards "
                "and knowledge transfer that moves partner teams toward long-term independence rather than dependency.",
        audience="Government officials, maintainers, students, regulators and civic-tech developers",
        contact_email="info@digitaltrustfuturesfoundation.org",
        focus_title="Target beneficiaries",
        focus=[
            ("Government officials and DPI programme teams", "The people who specify, procure and operate national infrastructure."),
            ("Open-source maintainers", "Small teams carrying disproportionate national dependency."),
            ("University students and early-career practitioners", "The next regional bench of digital trust specialists."),
            ("Civil-society organisations", "Organisations supporting communities most exposed to digital harm."),
            ("Fintech and civic-tech developers", "Teams building on national identity and payment rails."),
            ("Regulators", "Supervisors who need technical fluency to ask the right questions."),
        ],
        programmes=[
            ("DPI Security Practitioner Programme", "Applied safeguards practice for the teams operating national systems."),
            ("Open-Source Security Maintainer Academy", "Secure SDLC, disclosure handling and release security for maintainers."),
            ("Women in Digital Trust Fellowship", "A dedicated pathway addressing under-representation in digital trust roles."),
            ("African Digital Trust Graduate Programme", "Structured early-career entry into DPI assurance and open-source security."),
            ("Government Digital Safeguards Leadership Programme", "Safeguards literacy and decision-making for senior officials."),
        ],
        extra_title="How training is designed",
        extra_rows=[
            ("Practitioner-first", "Built around the decisions participants actually make, not around a certification syllabus."),
            ("Reusable by partners", "Training-of-trainers materials so partners can run cohorts without the Foundation present."),
            ("Sliding-scale fees", "Fees set on a subsidised or sliding scale, with income reinvested into free public-interest support."),
            ("Multilingual and mobile-first", "Materials designed for low-literacy, multilingual and mobile-first environments."),
            ("Open licensing", "Course materials developed under grants are released as open educational resources."),
        ],
        outputs=[
            "Open training curricula and facilitator guides",
            "Training-of-trainers packages for partner organisations",
            "Practitioner assessment rubrics",
            "Fellowship cohorts and alumni network",
        ],
        boundary="Capacity building is measured by what partners can do without us afterwards. Course materials "
                 "developed under grant funding are released openly so that cohorts can continue beyond the "
                 "Foundation&rsquo;s direct involvement.",
    ),
    "cyber-safety-centre": dict(
        num="05", slug="cyber-safety-centre", icon="buoy", accent="navy",
        name="Public-Interest Cyber and Digital Safety Centre",
        short="Cyber and Digital Safety Centre",
        phase="Phase 2 — months 12 to 24",
        photo=("tablet-hands.jpg", "Hands holding a tablet showing a connectivity map."),
        strap="Cyber support for the organisations that protect people but cannot afford to protect themselves.",
        purpose="To provide practical cyber support to nonprofits, civil-society organisations, community institutions "
                "and social-impact technology providers that cannot afford commercial cybersecurity services &mdash; "
                "including those working with high-risk communities.",
        audience="Civil society, community institutions and social-impact technology providers",
        contact_email="info@digitaltrustfuturesfoundation.org",
        focus_title="What the Centre provides",
        focus=[
            ("Cyber Helpdesk for Civil Society", "A practical first line of support for organisations without in-house security capability."),
            ("Digital Safety Clinic", "Structured sessions addressing account security, device hygiene, data handling and harassment response."),
            ("Nonprofit Cyber Maturity Programme", "A right-sized maturity path that does not assume enterprise budgets or staffing."),
            ("High-Risk Community Technology Support", "Additional support where the threat model includes targeted surveillance or intimidation."),
            ("Public-Interest Incident Response Network", "A referral network so that an organisation in an incident is not alone at 2am."),
        ],
        programmes=[
            ("Citizen safety toolkits", "Plain-language materials on scams, social engineering, safe payments, identity protection, consent, privacy, grievance channels and fraud reporting."),
            ("Community awareness", "Workshops and mobile-friendly content for youth, social grant beneficiaries, informal traders, migrants, rural users and micro-enterprises."),
            ("Training of trainers", "Reusable materials for NGOs, community groups, consumer bodies and local digital inclusion partners."),
            ("Citizen harm learning", "A lightweight reporting and analysis mechanism identifying recurring patterns of DPI-related fraud, exclusion and data misuse."),
            ("Accessibility and language", "Materials designed for low-literacy, multilingual and mobile-first environments."),
        ],
        extra_title="How citizen-harm evidence is handled",
        extra_rows=[
            ("Minimisation", "Only what is needed to identify a pattern is collected, and no more."),
            ("Anonymisation", "Reports are anonymised before analysis and never published in identifiable form."),
            ("Consent", "People are told what a report will be used for before it is accepted."),
            ("Secure storage", "Evidence is stored under access controls proportionate to its sensitivity."),
            ("Referral protocols", "Where someone needs help rather than analysis, they are referred &mdash; not filed."),
        ],
        outputs=[
            "Citizen digital safety toolkit and training package",
            "Scam escalation and user-recourse playbooks",
            "Nonprofit cyber maturity self-assessment",
            "Community awareness materials for mobile-first audiences",
        ],
        boundary="The Centre supports organisations that cannot buy commercial services. It does not compete with "
                 "commercial providers for work those providers are already funded to do.",
    ),
}

ORDER = ["dpi-trust-lab", "open-digital-commons", "policy-evidence-centre",
         "skills-academy", "cyber-safety-centre"]


# ── What we do (hub) ─────────────────────────────────────────────────────────
def what_we_do():
    crumbs = breadcrumb([("Home", "index.html"), ("What we do", None)], "")

    cards = "".join(
        f"""<a class="div-card" href="divisions/{d['slug']}.html">
        <span class="dc-index">{d['num']} &middot; {d['phase'].split(' —')[0]}</span>
        <div class="icon-badge">{icon(d['icon'])}</div>
        <h3>{d['name']}</h3>
        <p>{d['strap']}</p>
        <span class="dc-more">Division detail {icon("arrow")}</span>
      </a>"""
        for d in (DIVISIONS[k] for k in ORDER))

    hero = page_hero(
        eyebrow="What we do",
        title="Five programme divisions, three launch programmes",
        lede="Each division has a distinct purpose and audience but a shared commitment to public-interest digital "
             "trust. At launch, the Foundation&rsquo;s work is delivered through three connected programmes designed "
             "to protect the citizen, validate the infrastructure and strengthen the ecosystem.",
        crumbs_html=crumbs)

    body = f"""{hero}

<section class="section">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Programme divisions</p>
      <h2 class="balance">The Foundation&rsquo;s standing capability</h2>
      <p>Phase 1 establishes the DPI Trust Lab, the Open Digital Commons and Software Trust Division and the Policy and
        Evidence Centre. Phase 2 adds the Skills and Implementation Academy and the Public-Interest Cyber and Digital
        Safety Centre.</p>
    </div>
    <div class="grid grid-3" data-reveal-stagger>{cards}</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Launch architecture</p>
      <h2 class="balance">How divisions become deliverable programmes</h2>
      <p>The five divisions describe standing capability. The three launch programmes describe what that capability
        does first &mdash; and they are deliberately mutually reinforcing.</p>
    </div>

    <div class="chain" data-reveal>
      <div class="chain-step">
        <div class="chain-num">1</div>
        <h3>Reveal</h3>
        <p>Citizen-facing work surfaces the harm patterns that technical assessments alone do not see.</p>
      </div>
      <div class="chain-step">
        <div class="chain-num">2</div>
        <h3>Test</h3>
        <p>Assurance work tests the infrastructure and governance controls behind those patterns.</p>
      </div>
      <div class="chain-step">
        <div class="chain-num">3</div>
        <h3>Share</h3>
        <p>The coordination network turns findings into shared practice across institutions and borders.</p>
      </div>
      <div class="chain-step">
        <div class="chain-num">4</div>
        <h3>Reuse</h3>
        <p>Every method becomes an open tool, so the next country does not start from zero.</p>
      </div>
    </div>

    <div class="mt-8 cluster cluster--lg" data-reveal>
      <a class="btn btn--primary" href="programmes.html">See the three launch programmes{ARROW}</a>
      <a class="btn btn--ghost" href="research.html#toolkits">Browse the open toolkits{ARROW}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <div class="flow" data-reveal>
        <p class="eyebrow">Phasing</p>
        <h2 class="balance">Sequenced so that each phase earns the next</h2>
        <p class="text-muted">Phase 1 concentrates on the two lead divisions and the evidence function &mdash; the work
          that produces the assurance methods, secured projects and published findings on which everything else
          depends. Phase 2 extends that capability outward into training and direct civil-society support.</p>
        <div class="phase-grid mt-6">
          <div class="phase-card">
            <span class="mono-label">Phase 1 &middot; first 12 months</span>
            <ul class="dot-list mt-4">
              <li>DPI Trust Lab: safeguards, identity, inclusive payments, AI governance and country trust-readiness assessments.</li>
              <li>Open Digital Commons: two to four hosted open-source projects, DPG security support, SBOM and supply-chain assurance.</li>
              <li>Policy and Evidence Centre: two research papers, one fellowship programme, one annual DPI trust report, university partnerships.</li>
            </ul>
          </div>
          <div class="phase-card phase-card--2">
            <span class="mono-label">Phase 2 &middot; months 12 to 24</span>
            <ul class="dot-list dot-list--teal mt-4">
              <li>Digital Trust Skills and Implementation Academy.</li>
              <li>Public-Interest Cyber and Digital Safety Centre.</li>
              <li>Expanded training, partner-delivered cohorts and direct support to civil society.</li>
            </ul>
          </div>
        </div>
      </div>
      <figure class="media-frame" data-reveal>
        <img src="assets/img/photos/network-cables.jpg" alt="Densely patched network cables in a communications cabinet." width="1400" height="875" loading="lazy" decoding="async">
        <figcaption>Shared infrastructure means shared exposure &mdash; and shared benefit when it is secured properly.</figcaption>
      </figure>
    </div>
  </div>
</section>

{cta_band("", title="Tell us which system keeps you awake.", text="Government DPI teams, digital public goods maintainers and funders can start a conversation with the relevant division directly.", primary=("Route an enquiry", "get-involved.html"), secondary=("Contact the Foundation", "contact.html"))}
"""
    return body


# ── Division detail pages ────────────────────────────────────────────────────
def division(key):
    d = DIVISIONS[key]
    base = "../"
    crumbs = breadcrumb([("Home", "index.html"), ("What we do", "what-we-do.html"), (d["short"], None)], base)

    focus = "".join(
        f"""<article class="card card--hover">
      <h3 class="card-title">{name}</h3><p>{desc}</p></article>"""
        for name, desc in d["focus"])

    programmes = "".join(
        f"""<div class="prog-row">
      <span class="prog-row-num">{i:02d}</span>
      <div><h3>{name}</h3><p>{desc}</p></div>
    </div>"""
        for i, (name, desc) in enumerate(d["programmes"], start=1))

    extra = "".join(
        f"<tr><td><strong>{a}</strong></td><td>{b}</td></tr>" for a, b in d["extra_rows"])

    outputs = "".join(f"<li>{o}</li>" for o in d["outputs"])

    others = "".join(
        f"""<a class="div-card" href="{k}.html">
        <span class="dc-index">{DIVISIONS[k]['num']}</span>
        <div class="icon-badge">{icon(DIVISIONS[k]['icon'])}</div>
        <h3>{DIVISIONS[k]['name']}</h3>
        <p>{DIVISIONS[k]['strap']}</p>
        <span class="dc-more">Division detail {icon("arrow")}</span>
      </a>"""
        for k in ORDER if k != key)

    photo, alt = d["photo"]

    hero = page_hero(
        eyebrow=f"Division {d['num']} &middot; {d['phase']}",
        title=d["name"],
        lede=d["strap"],
        crumbs_html=crumbs,
        meta_html=f'<div class="page-hero-meta">'
                  f'<span class="pill pill--light">Primary audience: {d["audience"]}</span>'
                  f'<span class="pill pill--light">{d["phase"]}</span></div>')

    body = f"""{hero}

<section class="section">
  <div class="container">
    <div class="split split--even" style="align-items:center">
      <div class="flow" data-reveal>
        <p class="eyebrow">Purpose</p>
        <h2 class="balance">Why this division exists</h2>
        <p class="lede pretty">{d['purpose']}</p>
        <div class="callout mt-6"><h3>Scope boundary</h3><p>{d['boundary']}</p></div>
      </div>
      <figure class="media-frame" data-reveal>
        <img src="{base}assets/img/photos/{photo}" alt="{alt}" width="1400" height="875" loading="lazy" decoding="async">
      </figure>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">{d['focus_title']}</p>
      <h2 class="balance">Where the work concentrates</h2>
    </div>
    <div class="grid grid-3" data-reveal-stagger>{focus}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Programmes</p>
        <h2 class="balance">What this division delivers</h2>
        <p class="lede mt-4">Programmes are established progressively as funding and partner access allow. Status for
          each is published on the programmes page and in the resource library.</p>
        <div class="mt-6"><a class="btn btn--ghost" href="{base}programmes.html">See programme status{ARROW}</a></div>
      </div>
      <div class="prog-rows" data-reveal>{programmes}</div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">{d['extra_title']}</p>
      <h2 class="balance">The detail behind the headline</h2>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>{d['extra_title']}</caption>
        <thead><tr><th scope="col">Area</th><th scope="col">Detail</th></tr></thead>
        <tbody>{extra}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section band-dark">
  <div class="container">
    <div class="split">
      <div data-reveal>
        <p class="eyebrow eyebrow--teal">Public-good outputs</p>
        <h2 class="balance">What this division releases openly</h2>
        <p class="pretty">Outputs are published as reusable public goods under open licences, with sensitive security
          detail handled responsibly through coordinated disclosure.</p>
        <div class="mt-7 cluster">
          <a class="btn btn--light" href="{base}research.html">Resource library{ARROW}</a>
          <a class="btn btn--outline-light" href="{base}open-source.html">Open source{ARROW}</a>
        </div>
      </div>
      <div data-reveal><ul class="check-list">{outputs}</ul></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="contact-strip" data-reveal>
      <div>
        <p class="eyebrow">Direct enquiry path</p>
        <h2 class="balance" style="font-size:var(--step-3)">Talk to the {d['short']}</h2>
        <p class="text-muted mt-4">Write to us and mark the subject line
          <strong>{d['short']}</strong>, so it reaches this division rather than sitting in a general queue.</p>
      </div>
      <div class="cluster">
        <a class="btn btn--accent" href="mailto:{d['contact_email']}">{d['contact_email']}{ARROW}</a>
        <a class="btn btn--ghost" href="{base}get-involved.html">Use the enquiry form{ARROW}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Other divisions</p>
      <h2 class="balance">Related capability</h2>
    </div>
    <div class="grid grid-3" data-reveal-stagger>{others}</div>
  </div>
</section>

{cta_band(base, title="Bring us a real system, not a hypothetical one.", text="The Foundation works best with partners willing to look at live deployments, share what they find, and publish anonymised lessons for others.")}
"""
    return body
