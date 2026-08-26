import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';

const VALUES = [
  { icon: 'scale' as const, name: 'Independence', desc: 'Research and assessments free from commercial or political influence.' },
  { icon: 'branch' as const, name: 'Openness', desc: 'Tools, research and frameworks released as public goods wherever possible.' },
  { icon: 'users' as const, name: 'Inclusion and Best Interests', desc: 'We prioritise people most likely to bear digital harm — including children and young people, women, people with disabilities, migrants, displaced communities, low-income users and people with limited digital literacy — and seek their meaningful participation in decisions affecting them.' },
  { icon: 'activity' as const, name: 'Rigour', desc: 'Evidence-based, technically credible methodologies.' },
  { icon: 'globe' as const, name: 'Partnership', desc: 'Building local capacity rather than creating dependency.' },
  { icon: 'shield-check' as const, name: 'Accountability', desc: 'Citizen-centred protection, with responsibility that can be traced and tested.' },
  { icon: 'scale' as const, name: 'Rights and Dignity', desc: 'Digital systems should expand rather than diminish human agency, dignity and fundamental rights. DTFF gives particular attention to privacy, non-discrimination, freedom of expression and association, equitable access, due process, meaningful consent and effective remedy.' },
];

const ICON_COLOURS = ['', 'orange', 'teal', '', 'orange', 'teal', ''];

const MANDATE = [
  'Research risks affecting digital public infrastructure, digital public goods and the people who depend on them.',
  'Help governments and public-interest organisations design and operate safe, rights-respecting DPI.',
  'Develop and maintain open-source digital trust tools, including human-rights and child-rights assurance tools.',
  'Support open-source projects with cybersecurity, governance, privacy, child-data protection and sustainability.',
  'Strengthen digital identity, payment, credential and data-exchange safeguards — with effective remedy built in.',
  'Advance responsible and secure use of AI in public infrastructure, with explicit protection for children and vulnerable communities.',
  'Build local technical and governance capacity across Africa and the Global South.',
  'Publish open frameworks, research, guidance and implementation resources — including on human rights, civil society and children\'s digital rights.',
];

const TOC = [
  { head: 'Inputs', items: ['Technical expertise', 'Grant and donor funding', 'Open-source tooling', 'Partnerships with governments and DPGs', 'Civil-society evidence networks'] },
  { head: 'Activities', items: ['Safeguards research and assessments', 'Human-rights and child-rights impact assessment', 'Open-source hosting and security support', 'Policy research', 'Training and fellowships'] },
  { head: 'Outputs', items: ['Trust assessments and roadmaps', 'Human rights and child rights assurance tools', 'Secured and sustained DPGs', 'Open toolkits and frameworks', 'Trained practitioners'] },
  { head: 'Outcomes', items: ['Safer and more secure DPI', 'Rights-respecting and inclusive digital public services', 'Children and vulnerable communities better protected from digital harm', 'Resilient, secure DPGs', 'Accountable AI with meaningful human review and recourse', 'Stronger civil-society and local institutional capacity'] },
];

const CHANGE = [
  ['Digital trust expertise', 'Convert technical assurance, cyber risk and AI governance knowledge into public-good tools.', 'Governments and civil society can act without waiting for expensive bespoke consulting.'],
  ['Rights-based perspective', 'Apply human-rights, child-safety and civil-society lenses to every DPI assessment.', 'Systems that protect dignity and agency — not only security compliance.'],
  ['Citizen-centred evidence', 'Document how fraud, identity abuse, privacy risk, exclusion and rights violations affect people in real settings.', 'Funders and policymakers see harm patterns that ordinary technical assessments miss.'],
  ['Independent position', 'Operate outside vendor, implementer and platform incentives.', 'More credible assurance and stronger public trust.'],
  ['Partnership network', 'Connect regulators, civil society, researchers, DPG maintainers and security practitioners.', 'Faster learning, coordinated response and reduced duplication.'],
];

const COMPARATIVE = [
  ['Multilateral and standards bodies', 'Global legitimacy, policy convening', 'Limited hands-on technical assessment and implementation support'],
  ['Commercial assurance firms', 'Deep technical capability', 'Commercial pricing model misaligned with public-good economics; no rights or child-safety assurance dimension'],
  ['DPG and open-source foundations', 'Community trust, code stewardship', 'Limited dedicated security, DPI-safeguards, human-rights or AI-governance specialisation'],
  ['Digital Trust Futures Foundation', 'Independent governance, technical depth, rights assurance and DPG proximity', 'New entrant — must build track record and trust'],
];

const STAKEHOLDERS = [
  ['Governments and DPI programme teams', 'Independent assurance, safeguards methods, human-rights and child-rights assessment, capacity building and public-interest evidence.', 'Access to systems, artefacts and programme context under agreed terms.'],
  ['Funders and development partners', 'A focused way to invest in the protection layer, with reusable outputs and honest reporting — aligned to rights, civic space, children and responsible technology.', 'Multi-year, flexible funding that protects independence.'],
  ['Civil-society organisations and human rights defenders', 'Toolkits, training, cyber readiness, digital harm evidence, threat modelling and citizen-harm visibility.', 'Community reach, lived experience and feedback loops.'],
  ['DPG and open-source maintainers', 'Security baseline support, privacy and children\'s data review, vulnerability-disclosure guidance and sustainability evidence.', 'Technical collaboration and responsible transparency.'],
  ['Researchers and universities', 'Field-informed research questions and data-informed policy problems — including rights, child protection and civil-society dimensions.', 'Peer review, fellows, methods and evaluation support.'],
];

export default function About() {
  return (
    <>
      <SeoHead
        title="About the Foundation"
        description="Who we are: an independent public-benefit foundation providing rights-respecting digital trust assurance, cybersecurity, safety, human rights and child protection for digital public infrastructure, digital public goods and AI-enabled public services in Africa and the Global South."
        canonical="about.html"
      />

      <PageHero
        eyebrow="About the Foundation"
        title="An independent public-benefit foundation for rights-respecting digital trust"
        lede="Digital Trust Futures Foundation protects people and their rights as digital systems become critical infrastructure — bringing independent cybersecurity, human-rights assurance, child safety, civil-society resilience and open public-interest tools to DPI, DPGs and AI-enabled public services across Africa and the Global South."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        metaHtml={
          <div className="page-hero-meta">
            <span className="pill pill--light">Non-profit company (NPC)</span>
            <span className="pill pill--light">South Africa</span>
            <span className="pill pill--light">Public-interest mandate</span>
            <span className="pill pill--light">Established 2026</span>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Who we are</p>
              <h2 className="balance">Redirecting digital trust capability toward the public interest — and toward the people who most need protection</h2>
            </div>
            <div className="flow prose" data-reveal="">
              <p className="lede">Digital Trust Futures Foundation is an independent, non-profit public-benefit organisation established to strengthen the safety, security, inclusion and trustworthiness of digital public infrastructure (DPI), digital public goods (DPGs), open-source technology and AI-enabled public services — with human rights, civil society and children's rights as explicit cross-cutting operating lenses.</p>
              <p>The Foundation builds on digital trust expertise developed by Nucleus Systems across cybersecurity, software trust and AI governance, redirecting that capability toward public-interest research, open technology and practical implementation support for governments, civil society, universities and technology communities.</p>
              <p>As digital public infrastructure becomes the backbone of identity, payments, health, education and social protection systems worldwide, the safety, security and inclusiveness of that infrastructure has become a matter of fundamental public interest — and of fundamental rights.</p>
              <dl className="deflist mt-7">
                <div><dt>Legal name</dt><dd><strong>Digital Trust Futures Foundation NPC</strong></dd></div>
                <div><dt>Public name</dt><dd>Digital Trust Futures Foundation</dd></div>
                <div><dt>Short form</dt><dd>DTFF</dd></div>
                <div><dt>Jurisdiction</dt><dd>South Africa — established as a non-profit company (NPC), with subsequent application for NPO and public-benefit organisation (PBO) status, subject to specialist legal and tax advice.</dd></div>
                <div><dt>Geographic focus</dt><dd>Africa and the wider Global South, with emphasis on countries and communities adopting DPI under capacity and assurance constraints.</dd></div>
                <div><dt>Operating model</dt><dd>Independent public-interest research, assurance, tools, training, evidence generation and ecosystem coordination — with human rights, civil society and children's rights as cross-cutting operating principles.</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-dark">
        <div className="container">
          <div className="split">
            <div data-reveal="">
              <p className="eyebrow">The problem we address</p>
              <h2 className="balance">Deployment has outpaced independent safeguards capacity — and rights have not been built in</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="pretty">Governments across the Global South are rapidly deploying digital public infrastructure — national identity systems, instant payment rails, data-exchange layers and AI-enabled service delivery — often on accelerated timelines and with limited independent safeguards capacity.</p>
              <p className="pretty">At the same time, the open-source digital public goods that increasingly underpin this infrastructure are frequently maintained by small, under-resourced teams without dedicated security or sustainability support.</p>
              <p className="pretty">This creates compounding risk. Safety and inclusion gaps in DPI can exclude or harm the very populations these systems are meant to serve. And even where systems are technically secure, they can still violate rights — through discriminatory exclusion, opaque automated decisions, loss of agency, surveillance of civil society, inadequate protection for children and failure of effective remedy.</p>
              <div className="callout callout--flag mt-6" style={{ background: 'rgba(240,133,68,.12)', borderColor: 'transparent', borderLeftColor: 'var(--orange-500)' }}>
                <h3 style={{ color: '#fff' }}>Where the Foundation sits</h3>
                <p style={{ color: '#C6D6E4' }}>Deliberately at the intersection of four questions that rarely get asked together: Can the system be compromised? Does it cause foreseeable harm? Does it respect rights? And if it gets it wrong, can the person recover?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow eyebrow--center">Vision and mission</p>
            <h2 className="balance">What we are working toward</h2>
          </div>
          <div className="grid grid-2" data-reveal-stagger="">
            <article className="statement-card statement-card--vision">
              <span className="mono-label">Vision</span>
              <p>A digital future in which technology protects people and their rights — and public digital infrastructure is safe, inclusive, resilient and worthy of trust.</p>
            </article>
            <article className="statement-card statement-card--mission">
              <span className="mono-label">Mission</span>
              <p>To protect people and their rights as digital public systems scale, by providing independent cybersecurity, safety and human-rights assurance; open tools and research; and practical capacity for governments, civil society and public-interest technology communities across Africa and the Global South.</p>
            </article>
          </div>
          <div className="section-head mt-8" data-reveal="">
            <p className="eyebrow">Values</p>
            <h2 className="balance">Seven commitments that govern how we work</h2>
          </div>
          <div className="grid grid-3" data-reveal-stagger="">
            {VALUES.map((v, i) => (
              <article key={v.name} className="card card--hover">
                <div className={`icon-badge${ICON_COLOURS[i] ? ` icon-badge--${ICON_COLOURS[i]}` : ''}`}><Icon name={v.icon} /></div>
                <h3 className="card-title">{v.name}</h3><p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Core mandate</p>
              <h2 className="balance">Eight things the Foundation is set up to do</h2>
              <p className="lede mt-4">The mandate is deliberately narrow enough to deliver and broad enough to address both sides of the same infrastructure — the systems governments run, and the open-source components they run on — with rights, civil society and children as explicit priorities throughout.</p>
            </div>
            <div data-reveal="">
              <ul className="check-list numbered-check">
                {MANDATE.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Theory of change</p>
            <h2 className="balance">From technical expertise to citizen protection and rights-respecting digital infrastructure</h2>
            <p>Public-interest digital infrastructure must be secure enough to resist harm, safe enough to protect people when things go wrong, rights-respecting enough to preserve dignity and agency, and trusted enough to be used sustainably.</p>
          </div>
          <div className="toc-grid" data-reveal-stagger="">
            {TOC.map(({ head, items }) => (
              <div key={head} className="toc-col">
                <span className="mono-label">{head}</span>
                <ul className="dot-list mt-4">{items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="callout callout--teal mt-8" data-reveal="">
            <h3>Ultimate outcome</h3>
            <p className="mt-3">Digital transformation that expands access and opportunity without requiring people to surrender safety, dignity, agency or fundamental rights.</p>
          </div>
          <h3 className="mt-8 mb-4" data-reveal="">How the Foundation changes outcomes</h3>
          <div className="table-wrap mt-4" data-reveal="">
            <table>
              <caption>Input, action and result</caption>
              <thead><tr><th scope="col">Input</th><th scope="col">Foundation action</th><th scope="col">Result</th></tr></thead>
              <tbody>{CHANGE.map(([a, b, c]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Comparative positioning</p>
            <h2 className="balance">Why a new organisation was needed</h2>
            <p>The global DPI and DPG movement has grown faster than the independent, public-interest safeguards capacity needed to keep it safe, secure, rights-respecting and inclusive.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Actor types, strengths and gaps</caption>
              <thead><tr><th scope="col">Actor type</th><th scope="col">Typical strength</th><th scope="col">Typical gap</th></tr></thead>
              <tbody>{COMPARATIVE.map(([a, b, c]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="grid grid-2 mt-7" data-reveal-stagger="">
            <div className="callout"><h3>Differentiators</h3>
              <ul className="dot-list mt-4">
                <li>Non-commercial, public-benefit mandate with governance independent of any single funder or vendor.</li>
                <li>Technical depth inherited from an established digital trust practice, rather than built from a standing start.</li>
                <li>Dual focus on DPI (government-facing) and DPGs (community-facing), addressing both sides of the same infrastructure.</li>
                <li>Human rights, civil society and children as explicit cross-cutting operating lenses — not add-ons.</li>
                <li>Outputs released as reusable open goods, extending reach beyond any single engagement.</li>
                <li>Explicit regional grounding in Africa and the Global South, where DPI investment is accelerating fastest.</li>
              </ul>
            </div>
            <div className="callout callout--teal"><h3>What we are not</h3>
              <ul className="dot-list dot-list--teal mt-4">
                <li>Not a replacement for national cybersecurity functions or statutory regulators.</li>
                <li>Not a commercial audit firm — and not a disguised channel for any commercial provider.</li>
                <li>Not a generic human-rights NGO or child-protection charity — our distinctive position is DPI cybersecurity, safety, trust and independent assurance, with rights and children as explicit lenses.</li>
                <li>Not a code-hosting platform competing with existing repositories; we link to them and secure what runs on them.</li>
                <li>Not a source of personalised legal, financial or investment advice.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Stakeholder ecosystem</p>
            <h2 className="balance">What the Foundation offers, and what it needs in return</h2>
            <p>Every relationship is two-directional. Assurance without access produces nothing; access without independence produces nothing anyone should trust.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Stakeholder value exchange</caption>
              <thead><tr><th scope="col">Stakeholder</th><th scope="col">Value the Foundation offers</th><th scope="col">Value the Foundation needs</th></tr></thead>
              <tbody>{STAKEHOLDERS.map(([a, b, c]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <figure className="media-frame" data-reveal="">
              <img src="/assets/img/photos/market-stall.jpg" alt="A roadside produce stall in an African street market." width={1400} height={875} loading="lazy" decoding="async" />
              <figcaption>Protection has to reach informal traders, grant recipients and first-time digital users — not only institutions.</figcaption>
            </figure>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Regional grounding</p>
              <h2 className="balance">Methods shaped around the countries adopting DPI fastest</h2>
              <p className="text-muted">Digital trust methods designed for well-resourced regulatory environments transfer poorly to contexts where systems are being deployed at speed, with constrained assurance capacity and citizens who are often first-time digital users on shared or low-end devices.</p>
              <p className="text-muted">The Foundation works where that gap is widest: Africa and the wider Global South, with materials designed for low-literacy, multilingual and mobile-first environments, and with a stated preference for building local capacity over creating dependency.</p>
              <div className="mt-6 cluster">
                <Link className="btn btn--ghost" to="/what-we-do">See the programme divisions<ArrowIcon /></Link>
                <Link className="btn btn--outline" to="/human-rights">Human rights & digital trust<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Independent assurance is only useful if it is funded to stay independent."
        text="The Foundation welcomes partnership, funding and programme enquiries from governments, digital public goods initiatives, donors and social investment partners."
      />
    </>
  );
}
