import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';

const THREE_ROLES = [
  {
    icon: 'users' as const,
    colour: '',
    title: 'Civil society as beneficiary',
    desc: 'Cyber helpdesk and referral support for high-risk organisations. Threat modelling, account and device protection, secure communication and incident readiness. Guidance on identity-linked exposure, SIM registration, payment monitoring, digital grants and public-service portals. Organisational cyber resilience and safe documentation of digital harm.',
    items: ['Cyber helpdesk and incident referral', 'Threat modelling and risk assessment', 'Account and device protection', 'Secure communications guidance', 'Identity and SIM exposure assessment', 'Payment and funding-trail protection', 'Organisational cyber resilience', 'Secure documentation of digital harms'],
  },
  {
    icon: 'activity' as const,
    colour: 'orange',
    title: 'Civil society as evidence partner',
    desc: 'DTFF\'s Civil Society Digital Harm Evidence Network allows local partners to surface anonymised risk patterns that feed the Digital Security Observatory and assurance methodology — without creating an unsafe central database of identifiable victims.',
    items: ['Identity exclusion and mismatch patterns', 'Payment fraud and financial abuse affecting vulnerable groups', 'Surveillance, harassment and civic-space restrictions linked to digital infrastructure', 'Unsafe AI or automated public-service decisions', 'Gaps in grievance, appeal and recourse'],
  },
  {
    icon: 'scale' as const,
    colour: 'teal',
    title: 'Civil society as accountability participant',
    desc: 'Civil-society organisations participate in DPI assessment consultations, threat modelling, country research, policy dialogue, toolkit testing, methodology review and advisory governance. This reduces the risk of DPI accountability being defined only by funders, implementers and governments.',
    items: ['DPI assessment consultations', 'Threat modelling and country research', 'Policy dialogue and evidence review', 'Toolkit testing and methodology input', 'Advisory governance participation'],
  },
];

const HIGH_RISK_GROUPS = [
  { title: 'Human Rights Defenders', desc: 'Those documenting abuses, advocating for accountability or supporting victims — whose work can expose them to surveillance, account compromise and retaliation.' },
  { title: 'Journalists and Investigators', desc: 'Independent media and public-interest investigators — particularly those covering corruption, conflict or sensitive political topics in high-risk environments.' },
  { title: 'Civic-Space Organisations', desc: 'Organisations whose databases, donor lists, location data or communications can expose their networks if compromised.' },
  { title: 'Women\'s Rights Organisations', desc: 'Organisations working on gender-based violence, reproductive rights or political participation, whose data holds particular sensitivity.' },
  { title: 'Community and Advocacy Organisations', desc: 'Local groups representing marginalised communities whose digital presence may attract hostile attention from state or non-state actors.' },
];

export default function CivilSociety() {
  return (
    <>
      <SeoHead
        title="Civil Society & Human Rights Defenders"
        description="How DTFF supports civil society organisations, human rights defenders, journalists and civic-space organisations — as beneficiaries, evidence partners and accountability participants in rights-respecting digital trust."
        canonical="civil-society.html"
      />

      <PageHero
        eyebrow="Civil Society & Human Rights Defenders"
        title="Civil society is not a footnote — it is a core constituency, evidence partner and accountability participant"
        lede="Civil-society organisations, human rights defenders, journalists and civic-space organisations require a higher standard of digital protection — and a voice in shaping the digital infrastructure that affects them."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Get Involved', href: '/get-involved' }, { label: 'Civil Society & Human Rights Defenders' }]}
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#roles">Three roles</a>
            <a href="#high-risk">High-risk groups</a>
            <a href="#evidence-network">Evidence network</a>
            <a href="#tools">Tools</a>
            <a href="#support">Apply for support</a>
          </nav>
        }
      />

      {/* ── Intro ── */}
      <section className="section">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Why civil society matters to digital trust</p>
              <h2 className="balance">Civil society sees what infrastructure assessments miss</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="lede">Digital public infrastructure — identity systems, payment rails, data-exchange platforms — shapes the conditions in which civil society operates. A poorly designed identity system can expose the networks of human rights defenders. A payment platform with weak controls can be used to cut off funding to advocacy organisations. An opaque AI system can discriminate against the communities civil society serves.</p>
              <p className="text-muted">DTFF formalises three distinct roles for civil society — not because civil society is a peripheral beneficiary of DPI work, but because civil society evidence and participation is essential to producing assurance that reflects the real-world impact of digital infrastructure on people and rights.</p>
              <div className="callout mt-6">
                <p style={{ fontStyle: 'italic' }}>"The recommended evolution for digital trust work is: Security → Safety → Rights → Trust → Inclusion. Civil society sits at every stage of that chain."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three roles ── */}
      <section className="section section--alt" id="roles">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Three formal roles</p>
            <h2 className="balance">Beneficiary, evidence partner and accountability participant</h2>
          </div>
          <div className="grid grid-3 mt-7" data-reveal-stagger="">
            {THREE_ROLES.map((r) => (
              <article key={r.title} className="card card--hover">
                <div className={`icon-badge${r.colour ? ` icon-badge--${r.colour}` : ''}`}><Icon name={r.icon} /></div>
                <h3 className="card-title">{r.title}</h3>
                <p>{r.desc}</p>
                <ul className="dot-list mt-4">
                  {r.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── High-risk groups ── */}
      <section className="section band-dark" id="high-risk">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow eyebrow--teal">Explicit protected groups</p>
              <h2 className="balance">Who DTFF explicitly identifies as high-risk users of digital infrastructure</h2>
              <p className="lede mt-4">DTFF's safeguarding policy already recognises heightened-risk participants. These groups are now visible in the public operating model — because naming them is the first step to designing protection that reaches them.</p>
            </div>
            <div data-reveal="">
              <dl className="deflist">
                {HIGH_RISK_GROUPS.map(({ title, desc }) => (
                  <div key={title}><dt>{title}</dt><dd>{desc}</dd></div>
                ))}
              </dl>
              <div className="callout mt-6">
                <h3 style={{ color: '#fff' }}>Threat vectors we address</h3>
                <ul className="dot-list mt-3">
                  <li>Surveillance and identity-linked tracking via national DPI</li>
                  <li>Payment monitoring and financial access restriction</li>
                  <li>Account compromise and credential theft</li>
                  <li>SIM registration and mobile identity exposure</li>
                  <li>Harassment, censorship and retaliation through platform and infrastructure control</li>
                  <li>Data sharing across government agencies exposing civil-society networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evidence network ── */}
      <section className="section" id="evidence-network">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Evidence network</p>
              <h2 className="balance">Civil Society Digital Harm Evidence Network</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="lede">Local civil-society partners surface anonymised risk patterns that feed the Digital Security Observatory and assurance methodology — without creating an unsafe central database of identifiable victims.</p>
              <p className="text-muted">The network collects anonymised harm patterns across five categories:</p>
              <ul className="check-list mt-4">
                <li>Identity exclusion and mismatch patterns</li>
                <li>Payment fraud and financial abuse affecting vulnerable groups</li>
                <li>Surveillance, harassment and civic-space restrictions linked to digital infrastructure</li>
                <li>Unsafe AI or automated public-service decisions</li>
                <li>Gaps in grievance, appeal and recourse mechanisms</li>
              </ul>
              <div className="callout callout--teal mt-6">
                <h3>Privacy and data protection principles</h3>
                <ul className="dot-list dot-list--teal mt-3">
                  <li>Anonymisation before any pattern is shared with DTFF or published.</li>
                  <li>Informed consent from those sharing harm reports.</li>
                  <li>Data minimisation — only patterns needed for analysis are retained.</li>
                  <li>Secure storage and strict access controls.</li>
                  <li>No creation of a searchable central database of identifiable victims.</li>
                  <li>Partner organisations receive training on safe documentation practices.</li>
                </ul>
              </div>
              <div className="mt-6 cluster">
                <Link className="btn btn--primary" to="/get-involved#helpdesk">Join the evidence network<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section section--alt" id="tools">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Open tools</p>
            <h2 className="balance">Civil society and human rights defender tools released as public goods</h2>
          </div>
          <div className="grid grid-2 mt-7" data-reveal-stagger="">
            <article className="card">
              <h3 className="card-title">Civil Society DPI Threat-Modelling Guide</h3>
              <p>Help civil-society organisations understand infrastructure-level risks they cannot directly control — identity-linked exposure, payment monitoring and surveillance risk.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Human Rights Defender Digital Infrastructure Threat Model</h3>
              <p>Address identity-linked tracking, surveillance, payment exposure, account compromise and retaliation risks facing human rights defenders and journalists.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Nonprofit Cyber Maturity Self-Assessment</h3>
              <p>A right-sized maturity path for civil-society organisations that does not assume enterprise budgets or staffing.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Community Digital Safety Toolkit</h3>
              <p>Plain-language digital safety materials for frontline community organisations and their beneficiaries.</p>
              <span className="status status--development mt-4">In development</span>
            </article>
          </div>
          <div className="mt-7" data-reveal="">
            <Link className="btn btn--ghost" to="/research?filter=civil-society">All civil society tools<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ── Apply for support ── */}
      <section className="section band-dark" id="support">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow eyebrow--teal">Apply for support</p>
            <h2 className="balance">Civil society, human rights defenders and civic-space organisations can apply for direct support</h2>
            <p style={{ maxWidth: '64ch' }}>The Cyber and Digital Safety Centre provides affordable, right-sized support. Tell us about your situation and we will tell you whether and how we can help — and if we are not the right organisation, we will try to connect you with someone who is.</p>
          </div>
          <div className="mt-7 cluster" data-reveal="">
            <Link className="btn btn--accent btn--lg" to="/get-involved#hrd">Apply for support<ArrowIcon /></Link>
            <Link className="btn btn--outline-light" to="/divisions/cyber-safety-centre">Cyber & Safety Centre<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Civil society resilience and digital trust are the same goal."
        text="The Foundation welcomes programme enquiries, partnership proposals and funding discussions focused on civil society, human rights defenders and civic-space resilience."
        primary={['Partner with us', '/get-involved#partner']}
        secondary={['Human rights & digital trust', '/human-rights']}
      />
    </>
  );
}
