import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon } from '../components/ui/Icon';

const LAUNCH = [
  {
    id: 'citizen-safety', num: '1', tone: '1',
    name: 'Citizen Digital Safety and DPI Trust Programme',
    contribution: 'Community safety toolkits, awareness, user protection learning and harm reporting.',
    why: 'Protects people who are expected to adopt digital services but are rarely given the tools to use them safely.',
    photo: 'payment-hands.jpg', alt: 'A contactless payment being made with a phone at a card terminal.',
    intro: 'This programme translates digital trust into practical protection for citizens and communities. It focuses on people most exposed to harm because they depend on public services, mobile payments, social grants, informal work, remittances or government platforms, but often lack the literacy, recourse channels or institutional power to challenge digital harm when it occurs.',
    rows: [['Citizen safety toolkits', 'Plain-language materials on scams, social engineering, safe payments, identity protection, consent, privacy, grievance channels and fraud reporting.'], ['Community awareness', 'Workshops and mobile-friendly content for youth, social grant beneficiaries, informal traders, migrants, rural users and micro-enterprises.'], ['Training of trainers', 'Reusable materials for NGOs, community groups, consumer bodies and local digital inclusion partners.'], ['Citizen harm learning', 'A lightweight reporting and analysis mechanism to identify recurring patterns of DPI-related fraud, exclusion and data misuse.'], ['Accessibility and language', 'Materials designed for low-literacy, multilingual and mobile-first environments.']],
    funder: 'Many digital inclusion projects measure access, registration or transaction volumes. This programme helps funders measure a more important question: whether people can use digital systems safely, understand their risks, report harm and remain confident in services after things go wrong.',
    result: 'Vulnerable users become better able to identify scams, protect their identity, use payment channels safely, report harm and demand accountable digital services.',
  },
  {
    id: 'assurance-lab', num: '2', tone: '2',
    name: 'DPI Security Assurance and Resilience Lab',
    contribution: 'Independent public-interest assessment of identity, payment, data exchange, DPG, API, cloud and AI risks.',
    why: 'Protects the systems citizens depend on before weaknesses reach population scale.',
    photo: 'server-racks.jpg', alt: 'Illuminated server hardware in a rack.',
    intro: "This programme provides the Foundation's technical assurance capability. It supports governments, funders, DPG maintainers and civil-society partners with independent, public-interest assessment of the risks that often remain hidden inside DPI design, integration and operations.",
    rows: [['Digital identity', 'Authentication, onboarding, consent, data minimisation, biometrics, exclusion risk, recovery processes and account takeover patterns.'], ['Payment rails and instant payments', 'Fraud controls, mule account risks, participant controls, API security, dispute handling, liability allocation and operational resilience.'], ['Data exchange and consent', 'Purpose binding, token handling, audit trails, data sharing rules, consent revocation and privacy-preserving patterns.'], ['Digital public goods', 'Secure development, SBOM readiness, dependency risk, vulnerability disclosure, patching obligations and shared exposure.'], ['AI-enabled public services', 'Synthetic identity, adversarial inputs, bias, model governance, explainability, appeals and AI incident response.']],
    funder: 'The Lab will not replace national cybersecurity functions or commercial audits. It provides a practical, nonprofit assurance layer focused on citizen-facing public infrastructure and reusable open tools — producing evidence that travels beyond the system that generated it.',
    result: 'Funders and governments receive clearer evidence on whether systems are secure in practice, not only aligned to principles or delivered on schedule.',
  },
  {
    id: 'coordination-network', num: '3', tone: '3',
    name: 'Global South Digital Trust Coordination and Cyber Resilience Network',
    contribution: 'Roundtables, shared playbooks, knowledge hub, cross-border learning and civil-society readiness.',
    why: 'Protects the ecosystem by making risks visible across mandates and borders.',
    photo: 'auditorium.jpg', alt: 'An empty conference auditorium set for a convening.',
    intro: 'This programme addresses a major operating reality: DPI risks cross institutional and national boundaries. A payment scam may involve a mobile operator, bank, wallet provider, merchant platform, identity service, social media channel, financial intelligence unit, data protection authority and law enforcement agency.',
    rows: [['Convening', 'Bring together civil society, cybersecurity practitioners, researchers, regulators, funders, DPG maintainers and DPI implementers.'], ['Shared playbooks', 'Practical guidance for scam escalation, DPI incident response, public communication, vulnerability disclosure and user recourse.'], ['Knowledge hub', 'Reusable templates, checklists, briefs and training content that partners can adapt.'], ['Civil-society readiness', 'Support for smaller organisations with basic cyber hygiene, data protection and incident awareness.'], ['Global South voice', 'A grounded evidence base on the digital trust needs of Africa and other emerging DPI contexts.']],
    funder: 'Funding one organisation can create broader ecosystem value when its outputs are open, reusable and intentionally designed for replication.',
    result: 'A stronger Global South digital trust community able to detect recurring risks earlier, share lessons faster and support safer DPI adoption across countries.',
  },
];

const MILESTONES = [
  ['Months 1–3', 'Set up governance, programme charters, monitoring and evaluation tools, partner mapping and design of the first public-good outputs.'],
  ['Months 4–6', 'Launch the first citizen toolkit, hold the initial network convening and publish the DPI assurance framework v1.0.'],
  ['Months 7–12', 'Pilot community safety work, complete early limited-scope assurance reviews and publish the first learning brief.'],
  ['Months 13–18', 'Expand partner delivery, update toolkits, run additional roundtables and refine assurance methods.'],
  ['Months 19–24', 'Publish the synthesis report, mature the knowledge hub, secure follow-on partnerships and present the case for scale.'],
];

const FELLOWSHIPS = [
  { name: 'Digital Trust Research Fellowship', div: 'Policy and Evidence Centre', desc: 'Independent research on DPI and surveillance risk, AI use in public-benefit systems, verifiable credentials and privacy, open-source sustainability, software supply-chain risk in public infrastructure, and post-quantum readiness.' },
  { name: 'African Open-Source Fellows Programme', div: 'Open Digital Commons', desc: 'Building a regional bench of maintainers with genuine security depth, attached to digital public goods already carrying national dependency.' },
  { name: 'Women in Digital Trust Fellowship', div: 'Skills and Implementation Academy', desc: 'A dedicated pathway addressing under-representation in DPI assurance, open-source security and digital trust policy roles.' },
  { name: 'African Digital Trust Graduate Programme', div: 'Skills and Implementation Academy', desc: 'Structured early-career entry into DPI assurance and open-source security for recent graduates across the region.' },
];

export default function Programmes() {
  return (
    <>
      <SeoHead
        title="Programmes"
        description="Three connected launch programmes — citizen digital safety, DPI security assurance and the Global South digital trust coordination network — plus the flagship safeguards initiative, fellowships and 24-month roadmap."
        canonical="programmes.html"
      />

      <PageHero
        eyebrow="Programmes"
        title="Three launch programmes, one protection mission"
        lede="Protect the citizen, validate the infrastructure, strengthen the ecosystem. The programmes are intentionally mutually reinforcing: citizen-facing work reveals harm patterns, assurance work tests infrastructure and governance controls, and the coordination network turns lessons into shared practice."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Programmes' }]}
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#citizen-safety">Citizen safety</a><a href="#assurance-lab">Assurance Lab</a>
            <a href="#coordination-network">Coordination network</a><a href="#flagship">Flagship initiative</a>
            <a href="#fellowships">Fellowships</a><a href="#roadmap">Roadmap</a>
          </nav>
        }
      />

      {LAUNCH.map((p, i) => (
        <section key={p.id} className={`section${i === 1 ? ' section--alt' : ''}`} id={p.id}>
          <div className="container">
            <div className={`programme-header prog-card--${p.tone}`} data-reveal="">
              <div className="prog-index">{p.num}</div>
              <div>
                <p className="eyebrow">Launch programme {p.num}</p>
                <h2 className="balance">{p.name}</h2>
                <p className="lede mt-4 pretty">{p.contribution}</p>
              </div>
            </div>
            <div className="split split--even mt-8" style={{ alignItems: 'start' }}>
              <div className="flow" data-reveal="">
                <p className="pretty">{p.intro}</p>
                <div className="callout mt-6"><h3>Why it matters</h3><p>{p.why}</p></div>
                <h3 className="mt-7">Why this matters to funders</h3>
                <p className="text-muted mt-4 pretty">{p.funder}</p>
                <div className="expected mt-6">
                  <span className="mono-label">Expected result</span>
                  <p>{p.result}</p>
                </div>
              </div>
              <div className="flow" data-reveal="">
                <figure className="media-frame">
                  <img src={`/assets/img/photos/${p.photo}`} alt={p.alt} width={1200} height={750} loading="lazy" decoding="async" />
                </figure>
                <div className="table-wrap mt-6">
                  <table>
                    <caption>Focus areas and planned outputs</caption>
                    <thead><tr><th scope="col">Focus area</th><th scope="col">Planned outputs</th></tr></thead>
                    <tbody>{p.rows.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section band-dark band-dark--grid" id="flagship">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow eyebrow--teal">Flagship initiative</p>
            <h2 className="balance">Digital Trust DPI and Open Source Safeguards Initiative</h2>
            <p>Combining the Foundation's two lead divisions in a single initiative, so that findings from live national infrastructure and from the open-source components underneath it inform one another.</p>
          </div>
          <div className="grid grid-3" data-reveal-stagger="">
            <article className="workstream">
              <span className="mono-label">Workstream 1</span>
              <h3>DPI security, safety and trust</h3>
              <ul className="dot-list mt-4">
                <li>Select two active African DPI deployments and conduct safeguards and cyber-risk assessments.</li>
                <li>Develop improvement roadmaps and train local teams.</li>
                <li>Publish anonymised lessons and open implementation guidance.</li>
              </ul>
            </article>
            <article className="workstream">
              <span className="mono-label">Workstream 2</span>
              <h3>Open-source project support</h3>
              <ul className="dot-list mt-4">
                <li>Select three DPG or public-interest open-source projects for secure SDLC and supply-chain review.</li>
                <li>Produce SBOMs and establish vulnerability-disclosure processes.</li>
                <li>Improve repository and release security and support long-term project governance.</li>
              </ul>
            </article>
            <article className="workstream">
              <span className="mono-label">Workstream 3</span>
              <h3>Open tools</h3>
              <ul className="dot-list mt-4">
                <li>DPI Trust Assessment Toolkit</li>
                <li>Open-Source Project Security Baseline</li>
                <li>DPG Software Trust Scorecard</li>
                <li>DPI AI Governance Checklist</li>
                <li>Digital Identity and Credential Threat Model</li>
                <li>Inclusive Payment Security Guide</li>
              </ul>
            </article>
          </div>
          <div className="mt-8 cluster" data-reveal="">
            <Link className="btn btn--light" to="/research#toolkits">Toolkit status<ArrowIcon /></Link>
            <Link className="btn btn--outline-light" to="/support-our-work">Fund the initiative<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="fellowships">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Fellowships</p>
            <h2 className="balance">Building the regional bench</h2>
            <p>Fellowships are how the Foundation converts a two-year programme into a decade of regional capability. Each is attached to a division and to real delivery work rather than to study alone.</p>
          </div>
          <div className="grid grid-2" data-reveal-stagger="">
            {FELLOWSHIPS.map((f) => (
              <article key={f.name} className="card card--hover">
                <span className="mono-label">{f.div}</span>
                <h3 className="card-title mt-3">{f.name}</h3>
                <p>{f.desc}</p>
                <p className="mt-4"><span className="status status--planned">Opening for applications</span></p>
              </article>
            ))}
          </div>
          <p className="note mt-7" data-reveal=""><strong>Not yet open.</strong> Application windows, eligibility and stipend detail will be published on this page and announced through the newsletter as each fellowship opens. Register your interest through <Link to="/get-involved#careers">Get involved</Link>.</p>
        </div>
      </section>

      <section className="section section--alt" id="roadmap">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Roadmap</p>
              <h2 className="balance">The 24-month milestone path</h2>
              <p className="lede mt-4">Early measurement is realistic, but disciplined enough to help funders decide where to scale.</p>
              <div className="mt-6"><Link className="btn btn--ghost" to="/support-our-work">See the investment package<ArrowIcon /></Link></div>
            </div>
            <div className="timeline" data-reveal="">
              {MILESTONES.map(([period, text]) => (
                <div key={period} className="tl-item">
                  <p className="tl-period">{period}</p>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Two years is enough to prove the protection layer works."
        text="The launch portfolio is designed to create tools, assurance methods, early pilots, trusted convening and evidence that makes follow-on investment more precise."
        primary={['Support our work', '/support-our-work']}
        secondary={['Partner with us', '/get-involved#partner']}
      />
    </>
  );
}
