import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';

const ALLOC = [
  { name: 'Citizen Digital Safety and DPI Trust Programme', y1: 45, y2: 40, tot: 85 },
  { name: 'DPI Security Assurance and Resilience Lab', y1: 65, y2: 55, tot: 120 },
  { name: 'Global South Digital Trust Coordination Network', y1: 35, y2: 35, tot: 70 },
  { name: 'Monitoring, evaluation, learning and grant administration', y1: 15, y2: 10, tot: 25 },
];
const TOTAL = ALLOC.reduce((s, a) => s + a.tot, 0);

const BUYS = [
  ['Citizen safety toolkit and training package', 'Reusable community protection materials that can scale through partners.'],
  ['DPI assurance framework and checklists', 'A practical public-good baseline for safer identity, payment and data-exchange systems.'],
  ['Limited-scope assurance pilots', 'Evidence on real implementation gaps without waiting for a full-scale audit programme.'],
  ['Digital trust network and roundtables', 'A coordination platform to convert lessons into shared practice.'],
  ['Knowledge hub and policy briefs', 'Public outputs that funders, governments and civil society can reuse.'],
  ['MEL and learning reports', 'Accountability evidence showing what changed and what remains underfunded.'],
];

const REASONS = [
  ['Protects citizens before harm becomes normalised', 'Digital users receive practical safety support before scams, exclusion and data misuse undermine trust.'],
  ['Makes invisible risks visible', 'Funders and policymakers receive evidence on risks that standard delivery reports often miss.'],
  ['Builds public-interest assurance capacity', 'DPI and DPG ecosystems gain a non-commercial layer of technical and governance review.'],
  ['Creates reusable public goods', 'Toolkits, frameworks and playbooks can benefit many countries and communities beyond one project.'],
  ['Strengthens Global South leadership', 'Digital trust methods are shaped around the realities of countries adopting DPI fastest.'],
];

const CHALLENGE = [
  ['DPI adoption is accelerating faster than independent safeguards capacity.', 'Early investment is cheaper, safer and more trusted than crisis-driven remediation after harm has occurred.'],
  ['Citizen risks are often unseen until adoption has already scaled.', 'Funders can make citizen protection visible through evidence, toolkits, reporting and public-interest assurance.'],
  ['Commercial assurance is often too expensive or misaligned with public-good DPI economics.', 'A nonprofit assurance model can produce reusable tools and learning beyond a single client engagement.'],
  ['Cyber, fraud, privacy, AI and exclusion risks are treated in silos.', 'The Foundation links them into one citizen-centred digital trust agenda.'],
];

const REVENUE = [
  ['Grant and donor funding', 'Multi-year grants from philanthropic foundations, bilateral and multilateral donors and development finance institutions.', 'Core programme funding, research, flagship initiative'],
  ['Government contracts and MOUs', 'Fee-for-service or grant-funded DPI trust assessments and advisory support delivered to government counterparts.', 'DPI Trust Lab country engagements'],
  ['DPG and open-source project grants', 'Dedicated security, sustainability and hosting grants tied to named digital public goods.', 'Open Digital Commons division'],
  ['Training and certification fees', 'Fees from government, corporate or individual participants in Academy programmes, set on a sliding or subsidised scale.', 'Skills and Implementation Academy'],
  ['In-kind and secondment support', 'Donated staff time, technical tooling and mentorship, principally from Nucleus Systems and technology partners.', 'Cross-divisional technical capacity'],
  ['Corporate and CSR partnerships', 'Sponsorship of specific programmes, fellowships or open-source security funds.', 'Fellowships, Maintainer Security Fund'],
  ['Membership or affiliate contributions', 'An optional future model in which government or DPG partners contribute to sustain shared safeguards tools.', 'Long-term sustainability of open tools'],
];

const FUNDER_CATEGORIES = [
  ['Global philanthropic foundations', 'Foundations with existing portfolios in digital public infrastructure, digital identity, responsible technology, open source, internet health, digital rights and inclusive digital systems.'],
  ['Multilateral and development finance institutions', 'Institutions running DPI lending, technical assistance, digital public goods and standards programmes at multilateral or regional level.'],
  ['Bilateral development agencies', 'Bilateral donors with active digital development and DPI programming across Africa and the wider Global South.'],
  ['Digital public goods and infrastructure alliances', 'DPG registries, DPI financing facilities and regional digital infrastructure and identity communities and convenings.'],
  ['Corporate and technology-sector partners', 'Cloud, cybersecurity and technology companies with public-interest or open-source funding programmes, including open-source security funds and cloud-credit programmes.'],
];

const PRINCIPLES = [
  'No single funder to exceed a defined share of core, unrestricted income, to protect independence.',
  'Clear separation between restricted programme funding and core organisational costs.',
  'Preference for multi-year, flexible funding over single-year restricted grants.',
  'Transparent, published donor and funding policies, including conflict-of-interest safeguards for any Nucleus Systems-linked funding.',
  'Fee-for-service and training income reinvested to subsidise free public-interest tools and support for under-resourced DPGs and civil society.',
];

export default function SupportOurWork() {
  return (
    <>
      <SeoHead
        title="Support our work"
        description="The Foundation's two-year USD 300,000 launch portfolio: where the money goes, what it buys, the funding model and the investment case for independent digital trust assurance in the Global South."
      />

      <PageHero
        eyebrow="For funders and development partners"
        title="A focused USD 300,000 two-year launch portfolio"
        lede="Investing in the Foundation is an investment in the missing protection layer between fast-moving digital public infrastructure and the citizens who depend on it. The launch package can be supported by one anchor funder or blended across several."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Support our work' }]}
        metaHtml={
          <div className="page-hero-meta">
            <span className="pill pill--light">USD 300,000 over 24 months</span>
            <span className="pill pill--light">3 launch programmes</span>
            <span className="pill pill--light">Anchor or blended funding</span>
          </div>
        }
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#case">The case</a><a href="#portfolio">Portfolio</a><a href="#buys">What it buys</a>
            <a href="#model">Funding model</a><a href="#partners">Partner categories</a>
          </nav>
        }
      />

      <section className="section" id="case">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Executive investment message</p>
              <h2 className="balance">Why this Foundation, and why now</h2>
            </div>
            <div className="flow prose" data-reveal="">
              <p className="lede">The Global South is moving rapidly from digital pilots to population-scale digital systems, while the practical safeguards required to protect citizens remain fragmented, underfunded and often invisible to the people most affected by failure.</p>
              <p>When these systems are unsafe or untrusted, harm is not limited to a breach report. It appears as stolen wages, inaccessible grants, failed appeals, manipulated consent, biometric exclusion, mobile-wallet fraud, social engineering, data misuse and quiet withdrawal back into cash and informal systems.</p>
              <p>The Foundation is relevant to funders who want to support cybersecurity as a public good, digital inclusion that remains safe after adoption, and DPI ecosystems resilient enough to serve people under real-world threat conditions.</p>
            </div>
          </div>
          <div className="table-wrap mt-8" data-reveal="">
            <table>
              <caption>The challenge, and why funders should act</caption>
              <thead><tr><th scope="col">The challenge</th><th scope="col">Why funders should act</th></tr></thead>
              <tbody>{CHALLENGE.map(([a, b]) => <tr key={a}><td>{a}</td><td><strong>{b}</strong></td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="portfolio">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">The launch portfolio</p>
            <h2 className="balance">Where the money goes</h2>
            <p>A lean two-year portfolio designed to demonstrate public-interest value, build credible assets, create early evidence and position the Foundation for follow-on funding.</p>
          </div>
          <div className="portfolio" data-reveal="">
            <div className="alloc">
              {ALLOC.map((a) => (
                <div key={a.name} className="alloc-item">
                  <div className="alloc-head">
                    <span className="alloc-name">{a.name}</span>
                    <span className="alloc-val">USD {a.tot},000</span>
                  </div>
                  <div className="alloc-track">
                    <div className="alloc-fill" style={{ '--w': `${(a.tot / TOTAL) * 100}%` } as React.CSSProperties} />
                  </div>
                </div>
              ))}
              <div className="alloc-total">
                <span className="alloc-name">24-month total</span>
                <span className="alloc-val">USD {TOTAL},000</span>
              </div>
            </div>
            <div className="investment-logic">
              <span className="mono-label">Investment logic</span>
              <p>USD 300,000 over two years will not solve all DPI risk. It will create the missing public-interest launch layer: tools, assurance methods, early pilots, trusted convening, citizen safety materials and evidence that makes follow-on investment more precise.</p>
            </div>
          </div>
          <div className="table-wrap mt-8" data-reveal="">
            <table>
              <caption>Two-year investment areas</caption>
              <thead><tr><th scope="col">Investment area</th><th scope="col">Year 1</th><th scope="col">Year 2</th><th scope="col">24-month total</th></tr></thead>
              <tbody>{ALLOC.map((a) => <tr key={a.name}><td><strong>{a.name}</strong></td><td className="t-num">USD {a.y1},000</td><td className="t-num">USD {a.y2},000</td><td className="t-num">USD {a.tot},000</td></tr>)}</tbody>
              <tfoot><tr><td>Total</td><td className="t-num">USD 160,000</td><td className="t-num">USD 140,000</td><td className="t-num">USD 300,000</td></tr></tfoot>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="buys">
        <div className="container">
          <div className="section-head" data-reveal=""><p className="eyebrow">What the investment buys</p><h2 className="balance">Assets created, and their value to funders</h2></div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Assets and funder value</caption>
              <thead><tr><th scope="col">Asset created</th><th scope="col">Funder value</th></tr></thead>
              <tbody>{BUYS.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section band-dark band-dark--grid">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow eyebrow--center eyebrow--teal">Closing investment case</p>
            <h2 className="balance">Five reasons to invest</h2>
          </div>
          <div className="grid grid-3 reasons-grid" data-reveal-stagger="">
            {REASONS.map(([a, b]) => (
              <article key={a} className="card card--hover"><div className="card-topbar" />
                <h3 className="card-title">{a}</h3><p>{b}</p>
              </article>
            ))}
          </div>
          <blockquote className="quote quote--light mt-8" data-reveal="" style={{ maxWidth: '70ch', marginInline: 'auto' }}>
            The future of DPI will not be judged only by how quickly systems are deployed. It will be judged by whether citizens can trust those systems with their identity, money, data, rights and public services.
            <cite>Closing investment case</cite>
          </blockquote>
        </div>
      </section>

      <section className="section" id="model">
        <div className="container">
          <div className="section-head" data-reveal=""><p className="eyebrow">Funding model</p><h2 className="balance">Diversified by design, to protect independence</h2></div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Revenue streams</caption>
              <thead><tr><th scope="col">Revenue stream</th><th scope="col">Description</th><th scope="col">Illustrative use</th></tr></thead>
              <tbody>{REVENUE.map(([a, b, c]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="split split--even mt-8" style={{ alignItems: 'start' }}>
            <div className="callout" data-reveal=""><h3>Funding principles</h3><ul className="dot-list mt-4">{PRINCIPLES.map((p) => <li key={p}>{p}</li>)}</ul></div>
            <div className="callout callout--teal" data-reveal=""><h3>Indicative three-year mix</h3>
              <ul className="dot-list dot-list--teal mt-4" style={{ paddingLeft: 0 }}>
                <li><strong>Founding or anchor grant</strong><br /><span style={{ color: 'var(--text-2)' }}>Establishes the Board, core team and Phase 1 divisions in Year 1; renewal or successor grant thereafter.</span></li>
                <li><strong>Donor and DFI grants</strong><br /><span style={{ color: 'var(--text-2)' }}>One to two programme-specific grants in Year 1, diversifying to three to five across divisions in Years 2 and 3.</span></li>
                <li><strong>Government contracts</strong><br /><span style={{ color: 'var(--text-2)' }}>Pilot country engagements first, then recurring national assessments.</span></li>
                <li><strong>Training and fees</strong><br /><span style={{ color: 'var(--text-2)' }}>A pilot cohort first, then recurring Academy revenue.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="partners">
        <div className="container">
          <div className="section-head" data-reveal=""><p className="eyebrow">Prospective partner categories</p><h2 className="balance">Where we are looking for anchor support</h2></div>
          <div className="grid grid-3" data-reveal-stagger="">
            {FUNDER_CATEGORIES.map(([a, b]) => <article key={a} className="card"><h3 className="card-title">{a}</h3><p>{b}</p></article>)}
          </div>
          <p className="note mt-7" data-reveal=""><strong>Illustrative, not confirmed.</strong> No funder is named on this site as a partner, supporter or donor unless that relationship has been agreed and the partner has approved the reference.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <figure className="media-frame" data-reveal="">
              <img src="/assets/img/photos/solar-aerial.jpg" alt="Aerial view of rows of solar panels in an arid landscape." width={1600} height={1000} loading="lazy" decoding="async" />
              <figcaption>Infrastructure investment succeeds when the protection layer is funded alongside it, not after it.</figcaption>
            </figure>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Start a conversation</p>
              <h2 className="balance">What we will send you</h2>
              <p className="text-muted">Prospective funders and government partners can request the full documentation set: the comprehensive organisation profile, the positioning and strategy document, programme charters, the draft governance policy framework and the monitoring, evaluation and learning framework.</p>
              <div className="cluster mt-6">
                <a className="btn btn--accent btn--lg" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Fund the protection layer before it is needed, not after."
        text="Early investment is cheaper, safer and more trusted than crisis-driven remediation once harm has already occurred."
        primary={['Talk to partnerships', '/contact']}
        secondary={['Read the programmes', '/programmes']}
      />
    </>
  );
}
