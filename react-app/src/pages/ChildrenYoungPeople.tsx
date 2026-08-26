import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';

const WORKSTREAMS = [
  { icon: 'shield-check' as const, colour: '', title: 'Child Rights Impact Assessment for DPI', desc: 'Assess rights and harm implications where digital public systems process or affect children — the D-CRIA methodology.' },
  { icon: 'key' as const, colour: 'orange', title: 'Child-Safe Digital Identity and Credentials', desc: 'Assess biometric, credential, age assurance, identity mismatch and recovery risks affecting children in national identity systems.' },
  { icon: 'lock' as const, colour: 'teal', title: 'Children\'s Data and Privacy', desc: 'Strengthen minimisation, sharing, retention, consent, security and purpose limitation for data on children across DPI and public services.' },
  { icon: 'cpu' as const, colour: '', title: 'AI and Automated Decisions Affecting Children', desc: 'Assess profiling, eligibility decisions, bias, opacity and human review where AI affects children\'s access to services, benefits or education.' },
  { icon: 'alert' as const, colour: 'orange', title: 'Online Exploitation and AI-Enabled Harm', desc: 'Address synthetic media, impersonation, grooming, fraud and other technology-facilitated harms affecting children and young people.' },
  { icon: 'book' as const, colour: 'teal', title: 'Child-Safe Education Technology', desc: 'Evaluate privacy, security, surveillance and algorithmic risks in the education platforms and learning management systems schools use.' },
  { icon: 'megaphone' as const, colour: '', title: 'Digital Safety and Literacy', desc: 'Develop age-appropriate digital trust, safety and rights materials for children, caregivers, educators and community organisations.' },
  { icon: 'scale' as const, colour: 'orange', title: 'Child-Friendly Recourse and Reporting', desc: 'Design understandable, accessible channels for children and caregivers to report harm and challenge automated decisions affecting them.' },
  { icon: 'users' as const, colour: 'teal', title: 'Participation of Children and Young People', desc: 'Create safe, age-appropriate mechanisms for youth input into research and programme design — so digital futures are shaped with, not just for, young people.' },
];

const DCRIA_AREAS = [
  'Whether children\'s data needs to be collected at all and whether collection is proportionate.',
  'Biometric use, persistent identifiers, identity theft and correction of identity errors.',
  'Age-appropriate information, informed assent and parental/caregiver consent where relevant.',
  'Algorithmic profiling, advertising, commercial exploitation and automated decision-making.',
  'Cybersecurity of education, health, social protection and identity records.',
  'Accessibility, disability inclusion, digital literacy and language barriers.',
  'Freedom of expression, access to information and child participation.',
  'Complaint, appeal and remedy mechanisms that children can understand and use.',
  'Unintended surveillance and data sharing across education, health, social protection, law enforcement or other agencies.',
];

const DIVISION_LINKS = [
  { div: 'DPI Trust Lab', link: '/divisions/dpi-trust-lab', desc: 'Child identity, social protection, education and health systems — D-CRIA assessment and child-safe digital identity review.' },
  { div: 'Open Digital Commons', link: '/divisions/open-digital-commons', desc: 'Privacy, children\'s data protection and safeguarding risk in open-source systems processing children\'s information.' },
  { div: 'Policy & Evidence Centre', link: '/divisions/policy-evidence-centre', desc: 'Child-rights impact research, evidence on digital harm to children, and child data protection policy.' },
  { div: 'Skills Academy', link: '/divisions/skills-academy', desc: 'Digital literacy for young people, educators, caregivers and public officials — including the Children and Young People Digital Trust Fellowship.' },
  { div: 'Cyber & Safety Centre', link: '/divisions/cyber-safety-centre', desc: 'Child online safety, cyber protection for children\'s organisations and child-friendly harm reporting.' },
];

export default function ChildrenYoungPeople() {
  return (
    <>
      <SeoHead
        title="Children & Young People"
        description="DTFF's cross-foundation Children and Young People Digital Trust & Safety Initiative — 9 workstreams, the D-CRIA assessment method, and participation not just protection for children's digital futures."
        canonical="children-young-people.html"
      />

      <PageHero
        eyebrow="Children & Young People"
        title="Children and Young People Digital Trust & Safety"
        lede="Ensuring that digital identity, public services, AI and open technology affecting children protect their best interests, safety, privacy, dignity, participation and access to remedy."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'What we do', href: '/what-we-do' }, { label: 'Children & Young People' }]}
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#initiative">The initiative</a>
            <a href="#workstreams">Workstreams</a>
            <a href="#dcria">D-CRIA</a>
            <a href="#participation">Participation</a>
            <a href="#across-divisions">Across divisions</a>
            <a href="#tools">Tools</a>
          </nav>
        }
      />

      {/* ── Core proposition ── */}
      <section className="section" id="initiative">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">The core principle</p>
              <h2 className="balance">A cross-foundation protected constituency — not a standalone division</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="lede">Children interact with all five DTFF programme divisions. A national identity system may enrol children biometrically. A social protection platform may determine whether a household with children receives benefits. An education app may profile children's behaviour. An AI decision may affect a child's access to healthcare.</p>
              <div className="callout" style={{ borderLeftColor: 'var(--teal-500)' }}>
                <p className="mt-0" style={{ fontSize: '1.25em', fontWeight: 600, fontStyle: 'italic' }}>"A system that is safe enough for an adult is not automatically safe enough for a child."</p>
              </div>
              <p className="text-muted mt-4">Children and young people are a formal cross-cutting protected constituency across all five DTFF programme divisions. The strongest model is a Foundation-wide commitment — not a separate standalone division — with the Children and Young People Digital Trust & Safety Initiative as the named coordination mechanism.</p>
              <p className="text-muted">Children are not passive beneficiaries. Subject to strong safeguarding controls, DTFF creates age-appropriate participation mechanisms — because digital futures should be shaped with, not just for, young people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workstreams ── */}
      <section className="section band-dark" id="workstreams">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow eyebrow--teal">Initiative workstreams</p>
            <h2 className="balance">Nine workstreams — covering the full digital footprint of childhood</h2>
          </div>
          <div className="grid grid-3 mt-8" data-reveal-stagger="">
            {WORKSTREAMS.map((w) => (
              <article key={w.title} className="card card--hover">
                <div className={`icon-badge${w.colour ? ` icon-badge--${w.colour}` : ''}`}><Icon name={w.icon} /></div>
                <h3 className="card-title">{w.title}</h3>
                <p>{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── D-CRIA ── */}
      <section className="section" id="dcria">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">D-CRIA</p>
              <h2 className="balance">Child Rights Impact Assessment for DPI</h2>
              <p className="lede mt-4">An open assessment method examining whether digital public systems affecting children are necessary, proportionate, secure and rights-respecting — developed in alignment with UNICEF's CRIA framework and the UN Committee on the Rights of the Child's General Comment No. 25.</p>
              <div className="callout callout--teal mt-6">
                <h3>The D-CRIA principle</h3>
                <p className="mt-2">Designed for the reality of DPI deployment in the Global South — practical, open and built to be used by government teams and civil-society organisations without specialist legal resources.</p>
              </div>
            </div>
            <div data-reveal="">
              <p className="mono-label mb-4">D-CRIA assessment areas</p>
              <ul className="check-list numbered-check">
                {DCRIA_AREAS.map((area) => <li key={area}>{area}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Participation ── */}
      <section className="section section--alt" id="participation">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Participation — not just protection</p>
              <h2 className="balance">Children and young people have agency in decisions about their digital futures</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="lede">DTFF avoids treating children only as passive vulnerable beneficiaries. Subject to strong safeguarding controls, the Foundation creates age-appropriate participation mechanisms — because digital trust is not something done to children, but something built with them.</p>
              <dl className="deflist">
                <div>
                  <dt>Youth Digital Trust Advisory Group</dt>
                  <dd>A safeguarded advisory mechanism where young people provide input on digital trust issues that affect them — with clear age-appropriate information, supported facilitation and strict privacy protections.</dd>
                </div>
                <div>
                  <dt>Youth consultation on public-service design</dt>
                  <dd>Structured, age-appropriate consultation where young people who use digital public services can describe their experience and identify what doesn't work or feels unsafe.</dd>
                </div>
                <div>
                  <dt>Testing of safety materials</dt>
                  <dd>Child-friendly materials are tested with age-appropriate groups before publication to confirm they are understandable, useful and genuinely accessible.</dd>
                </div>
                <div>
                  <dt>Children and Young People Digital Trust Fellowship</dt>
                  <dd>Fellowship pathways for youth and practitioners working on children's digital rights, safety and participation — linking practical experience to research and policy.</dd>
                </div>
              </dl>
              <div className="callout mt-6" style={{ borderLeftColor: 'var(--teal-500)' }}>
                <p style={{ fontStyle: 'italic' }}>"Nothing about children's digital futures without appropriate opportunities for children and young people to be heard."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Across divisions ── */}
      <section className="section" id="across-divisions">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Cross-foundation approach</p>
            <h2 className="balance">Children's rights applied across all five programme divisions</h2>
            <p style={{ maxWidth: '64ch' }}>Children interact with every dimension of digital public infrastructure. The initiative coordinates across all five divisions to ensure no system that affects children goes unassessed.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Children's rights integration across DTFF divisions</caption>
              <thead>
                <tr><th scope="col">DTFF Division</th><th scope="col">How children's rights are integrated</th></tr>
              </thead>
              <tbody>
                {DIVISION_LINKS.map(({ div, link, desc }) => (
                  <tr key={div}>
                    <td><Link to={link} className="link-arrow">{div}<ArrowIcon /></Link></td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section section--alt" id="tools">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Open tools</p>
            <h2 className="balance">Children's digital rights tools released as public goods</h2>
          </div>
          <div className="grid grid-2 mt-7" data-reveal-stagger="">
            <article className="card">
              <h3 className="card-title">Child Rights Impact Assessment for DPI (D-CRIA)</h3>
              <p>An open assessment method for digital public systems affecting children — covering data, biometrics, consent, profiling, accessibility and complaint mechanisms.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Child-Safe Digital Identity Checklist</h3>
              <p>Assess biometric, credential, data-sharing and recovery risks affecting children — including age-appropriate information, identity mismatch and correction processes.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">AI Systems Affecting Children Assurance Checklist</h3>
              <p>Test profiling, eligibility decision bias, opacity, human-review controls and recourse for AI systems whose outputs affect children.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Child-Friendly Digital Harm Reporting Framework</h3>
              <p>Accessible, safe and privacy-aware pathways for children and caregivers to report digital harm and challenge automated decisions.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Child Data Protection and Minimisation Guide</h3>
              <p>Support necessity, retention, sharing and secure handling of children's data across DPI, education, health and social protection systems.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Digital Safety and Literacy Materials</h3>
              <p>Age-appropriate digital trust and safety content for children, caregivers and educators — available in formats designed for low-literacy and multilingual contexts.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
          </div>
          <div className="mt-7" data-reveal="">
            <Link className="btn btn--primary" to="/research?filter=children">All children & young people tools<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Children's digital trust requires the same rigour as infrastructure security — applied through a child-rights lens."
        text="The Foundation welcomes partnerships, funding and programme enquiries from governments, DPI programme teams, children's rights funders and organisations working with or for children."
        primary={['Partner with us', '/get-involved#children']}
        secondary={['Human rights & digital trust', '/human-rights']}
      />
    </>
  );
}
