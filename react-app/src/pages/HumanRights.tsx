import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon } from '../components/ui/Icon';

const FIVE_LENSES = [
  {
    key: 'Security', colour: '', label: 'Protect the system',
    question: 'Can the system withstand attack, fraud, abuse and compromise?',
    contribution: 'Technical assurance, threat modelling, secure architecture, software trust and resilience.',
  },
  {
    key: 'Safety', colour: 'orange', label: 'Protect the person',
    question: 'Does operation of the system create foreseeable harm?',
    contribution: 'Citizen-harm analysis, safeguarding, fraud and exclusion controls, incident readiness.',
  },
  {
    key: 'Rights', colour: 'teal', label: 'Protect dignity and agency',
    question: 'Does the system protect dignity, privacy, equality, participation and due process?',
    contribution: 'Human-rights impact assessment, data-governance review, surveillance analysis and recourse testing.',
  },
  {
    key: 'Trust', colour: '', label: 'Sustain accountability',
    question: 'Is the system accountable, understandable and worthy of sustained public use?',
    contribution: 'Independent evidence, transparency, remedy, governance assurance and public-interest reporting.',
  },
  {
    key: 'Inclusion', colour: 'orange', label: 'Enable access for all',
    question: 'Can people meaningfully access and continue using the system without disproportionate burden?',
    contribution: 'Accessibility, local participation, vulnerable-user testing and remediation guidance.',
  },
];

const RIGHTS_DOMAINS = [
  ['Privacy and data protection', 'Necessity, proportionality, data minimisation, retention, sharing, security and user control.'],
  ['Non-discrimination', 'Whether design, eligibility rules or automation produce unjustified unequal outcomes.'],
  ['Identity and dignity', 'Biometric failure, identity mismatch, correction processes and risks created by persistent identifiers.'],
  ['Freedom of expression', 'Whether infrastructure enables unjustified censorship, content restriction, monitoring or retaliation.'],
  ['Freedom of association', 'Whether identity or data linkage can expose civil-society activity, networks, donors or participants.'],
  ['Accessibility and inclusion', 'Whether marginalised users can access, understand, use and challenge the system.'],
  ['Due process', 'Whether affected users receive notice, explanation, human review and fair procedures.'],
  ['Effective remedy', 'Whether harm can be reported, investigated, corrected, appealed and appropriately remedied.'],
  ['Surveillance risk', 'Whether technical capabilities enable disproportionate or function-creeping monitoring.'],
  ['AI rights risk', 'Profiling, automated exclusion, opacity, bias, synthetic identity and absence of meaningful human review.'],
  ['Children\'s rights', 'Best interests, safety, privacy, development, participation, age-appropriate information and protection.'],
];

const REMEDY_STEPS = [
  ['Notice', 'The person is informed that a decision affecting them has been made.'],
  ['Explanation', 'The basis for the decision is communicated in terms they can understand.'],
  ['Human review', 'A human — not only an algorithm — can review the decision.'],
  ['Appeal', 'A formal mechanism exists to contest the outcome.'],
  ['Correction', 'Errors can be fixed, including in underlying data.'],
  ['Appropriate remedy', 'Where harm has occurred, appropriate redress is available.'],
  ['Institutional learning', 'Patterns of error are captured and used to improve the system.'],
];

export default function HumanRights() {
  return (
    <>
      <SeoHead
        title="Human Rights & Digital Trust"
        description="How DTFF applies rights-respecting assurance to digital public infrastructure — covering 11 human-rights domains, the 5-lens operating framework, and effective remedy as a distinctive theme."
        canonical="human-rights.html"
      />

      <PageHero
        eyebrow="Human Rights & Digital Trust"
        title="Rights-respecting digital trust — what it means and how we test it"
        lede="Cybersecurity tells us whether a system can be compromised. Human-rights assurance asks what happens to people even when the system is functioning exactly as designed. DTFF does both."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Human Rights & Digital Trust' }]}
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#proposition">Core proposition</a>
            <a href="#lenses">Five lenses</a>
            <a href="#domains">Assurance domains</a>
            <a href="#remedy">Effective remedy</a>
            <a href="#tools">Tools</a>
          </nav>
        }
      />

      {/* ── Core proposition ── */}
      <section className="section" id="proposition">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Core proposition</p>
              <h2 className="balance">The distinctive DTFF position: security plus rights</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="lede">Digital Trust Futures Foundation protects people and their rights as digital systems become critical infrastructure — bringing independent cybersecurity, human-rights assurance, child safety, civil-society resilience and open public-interest tools to DPI, DPGs and AI-enabled public services across Africa and the Global South.</p>
              <div className="callout callout--flag" style={{ borderLeftColor: 'var(--teal-500)' }}>
                <h3>The differentiator</h3>
                <p className="mt-3">Commercial cybersecurity can test whether a DPI system is technically vulnerable. DTFF additionally asks whether a system that is functioning exactly as designed can still cause unlawful surveillance, discriminatory exclusion, opaque automated decisions, loss of agency, unsafe data sharing or harm to children and vulnerable communities.</p>
              </div>
              <p className="text-muted mt-4">The recommended evolution for digital trust work is: <strong>Security → Safety → Rights → Trust → Inclusion.</strong> These are not competing objectives — they are a dependency chain. A system cannot be genuinely trustworthy if it fails on rights, and it cannot achieve sustained inclusion if it is not trusted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Five lenses ── */}
      <section className="section band-dark" id="lenses">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow eyebrow--teal">Operating framework</p>
            <h2 className="balance">Five lenses — one protection mission</h2>
            <p style={{ maxWidth: '64ch' }}>Each lens addresses a distinct question that DPI assessments must answer. None replaces the others — a technically secure system can still violate rights; a rights-compliant system can still be insecure.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Five-lens operating framework</caption>
              <thead>
                <tr>
                  <th scope="col">Lens</th>
                  <th scope="col">Core question</th>
                  <th scope="col">DTFF contribution</th>
                </tr>
              </thead>
              <tbody>
                {FIVE_LENSES.map((l) => (
                  <tr key={l.key}>
                    <td>
                      <strong className={l.colour ? `text-${l.colour}` : ''}>{l.key}</strong>
                      <br />
                      <span className="text-muted" style={{ fontSize: '0.85em' }}>{l.label}</span>
                    </td>
                    <td>{l.question}</td>
                    <td>{l.contribution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Human rights assurance domains ── */}
      <section className="section" id="domains">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Assurance domains</p>
            <h2 className="balance">Eleven human-rights domains tested in every DPI assessment</h2>
            <p style={{ maxWidth: '66ch' }}>Human rights should not be added only as website language. DTFF operationalises them through an assurance methodology applied to DPI, DPGs, open-source public-interest technology and AI-enabled public services.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Human rights assurance domains</caption>
              <thead>
                <tr><th scope="col">Assurance domain</th><th scope="col">What DTFF examines</th></tr>
              </thead>
              <tbody>
                {RIGHTS_DOMAINS.map(([domain, desc]) => (
                  <tr key={domain}><td><strong>{domain}</strong></td><td>{desc}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Effective remedy ── */}
      <section className="section section--alt" id="remedy">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Effective remedy</p>
              <h2 className="balance">A distinctive DTFF theme: what happens after harm</h2>
              <p className="lede mt-4">Many digital programmes emphasise prevention without asking what happens after harm. DTFF distinguishes itself by assessing whether users can recover when systems fail or make incorrect decisions.</p>
              <div className="callout mt-6" style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                "If the technology gets it wrong, can the person recover?"
              </div>
            </div>
            <div data-reveal="">
              <p className="mono-label mb-4">The standard DTFF remedy pathway</p>
              <ol className="remedy-steps">
                {REMEDY_STEPS.map(([step, desc], i) => (
                  <li key={step} className="remedy-step">
                    <span className="remedy-index">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{step}</strong>
                      <p className="text-muted" style={{ fontSize: '0.9em', margin: '0.25rem 0 0' }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="callout callout--teal mt-6">
                <h3>Applied to real cases</h3>
                <ul className="dot-list dot-list--teal mt-3">
                  <li>A child incorrectly matched biometrically in a national identity system — can the error be corrected and the exclusion repaired?</li>
                  <li>A welfare beneficiary denied a payment by an automated decision — is there a human review mechanism they can access?</li>
                  <li>An activist whose identity data was shared across government agencies without consent — is there a pathway to accountability?</li>
                  <li>A migrant unable to satisfy digital identity requirements — is there an accessible alternative or exception process?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section" id="tools">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Open tools</p>
            <h2 className="balance">Rights assurance tools released as public goods</h2>
            <p style={{ maxWidth: '64ch' }}>DTFF translates the rights framework into reusable, open tools — so that human rights and child protection are visible methods, not just language.</p>
          </div>
          <div className="grid grid-2 mt-7" data-reveal-stagger="">
            <article className="card">
              <h3 className="card-title">DPI Human Rights Impact Assessment Toolkit</h3>
              <p>Assess rights risks across identity, payments, data exchange, public services and AI — covering all eleven assurance domains.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Child Rights Impact Assessment for DPI (D-CRIA)</h3>
              <p>Apply child-rights and safeguarding requirements to digital public systems. A system that is safe enough for an adult is not automatically safe enough for a child.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Citizen Grievance and Effective Remedy Assessment</h3>
              <p>Evaluate whether users can obtain explanation, human review, correction and remedy across the full Notice → Remedy → Institutional learning pathway.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
            <article className="card">
              <h3 className="card-title">Digital Public Services Accessibility & Non-Discrimination Checklist</h3>
              <p>Assess whether marginalised users — including children, people with disabilities, migrants and low-income users — experience disproportionate barriers or exclusion.</p>
              <span className="status status--planned mt-4">Planned</span>
            </article>
          </div>
          <div className="mt-7" data-reveal="">
            <Link className="btn btn--primary" to="/research">Full tools library<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Rights-respecting digital trust requires technical depth and a rights perspective working together."
        text="The Foundation welcomes partnership and funding enquiries from governments, DPI programme teams, human-rights funders and development partners."
        primary={['Partner with us', '/get-involved#partner']}
        secondary={['Civil society & defenders', '/civil-society']}
      />
    </>
  );
}
