import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';

const BOARD = [
  ['Independent Board Chair', 'Chairs the Board, safeguards independence and holds the Executive Director to account.'],
  ['Digital public infrastructure expert', 'Brings national DPI design, delivery and programme experience.'],
  ['Open-source governance expert', 'Brings project stewardship, licensing and community governance experience.'],
  ['Financial inclusion or payment expert', 'Brings payment systems, inclusion and consumer-protection experience.'],
  ['Human Rights, Child Protection and Digital Rights Expert', 'Brings human-rights law, children\'s rights, data protection, surveillance risk and rights-based scrutiny — ensuring rights accountability at Board level.'],
  ['University or research representative', 'Brings methodological rigour and peer-review discipline.'],
  ['African civil-society representative', 'Brings community reach, lived experience and accountability to affected people. A permanent competency requirement.'],
  ['Cybersecurity or technology expert', 'Brings adversarial, resilience and assurance depth.'],
  ['One Nucleus Systems nominee', 'A single seat — the Board is explicitly not controlled by Nucleus Systems.'],
];

const EXEC = [
  ['Executive Director', 'Overall leadership, strategy and accountability to the Board.'],
  ['Director of Programmes', 'Delivery of the programme divisions and their charters.'],
  ['Director of Research', 'Research quality, sign-off on publications and case studies.'],
  ['Director of Technology and Open Source', 'Open-source projects, repositories, security and technical standards.'],
  ['Director of Partnerships and Funding', 'Funder relationships, government counterparts and overall site strategy.'],
  ['Finance and Operations Manager', 'Financial controls, grant administration and operations.'],
  ['Monitoring, Evaluation and Learning Lead', 'The MEL framework and reporting against the theory of change.'],
  ['Head of Human Rights, Safeguarding and Ethics', 'Human rights, child protection, safeguarding, ethics review and handling of citizen-harm evidence. Reports to the Executive Director with a direct escalation path to the Board for material concerns.'],
];

const NUCLEUS_MAY = ['Founding technical expertise', 'Seconded specialists', 'Access to selected methodologies', 'Mentorship and technical review', 'Training support', 'Donated professional time', 'Shared research participation', 'Specialist implementation services under transparent contracts'];
const FOUNDATION_CONTROLS = ['Its Board', 'Grant applications and donor funds', 'Public-interest project selection', 'Research priorities', 'Open-source repositories', 'Recruitment and procurement', 'Partner selection', 'Publication decisions'];
const AGREEMENTS = ['Founding support agreement', 'Shared-services agreement', 'Intellectual-property licence agreement', 'Conflict-of-interest policy', 'Related-party transaction policy', 'Procurement policy', 'Data-protection agreement', 'Brand and trademark agreement', 'Staff-secondment agreement', 'Research independence policy'];

const MEL = [
  ['Citizen protection', 'Users reached; community trainers equipped; reported improvements in scam awareness, reporting knowledge and safe digital payment practices.'],
  ['Infrastructure assurance', 'Assurance tools produced; systems or components reviewed; risk themes identified; remediation guidance issued.'],
  ['Human-rights assurance', 'Number of assessments using rights domains; remediation actions adopted; evidence of improved due-process or privacy controls.'],
  ['Child protection', 'Child-rights assessments completed; safeguarding controls adopted; child-friendly materials produced; youth participation mechanisms used safely.'],
  ['Civil-society protection', 'Organisations supported; referrals completed; threat models used; anonymised harm patterns incorporated into policy or assurance work.'],
  ['Effective remedy', 'Systems assessed for recourse; complaint pathways improved; correction or appeal processes documented.'],
  ['Ecosystem coordination', 'Number and diversity of network participants; roundtables held; playbooks published; cross-sector referrals initiated.'],
  ['Public-good outputs', 'Toolkits, frameworks, checklists, briefs and training materials published for reuse — including rights and child-rights tools.'],
  ['Policy influence', 'Evidence taken into funder, government, DPI, cyber or civil-society planning processes.'],
  ['Organisational maturity', 'Board functioning, grant reporting, safeguarding, financial controls, partner due diligence and partnership agreements in place.'],
];

const DUE_DILIGENCE = [
  ['Human rights', 'No material practice inconsistent with DTFF\'s public-benefit and rights-respecting mandate.'],
  ['Safeguarding', 'Appropriate safeguarding policies and escalation channels for affected groups.'],
  ['Privacy and data minimisation', 'Necessity, proportionality, security and purpose limitation.'],
  ['Responsible AI', 'Transparency, human review, non-discrimination and recourse where automated decisions affect people.'],
  ['Research ethics', 'Consent, minimisation, safe participation and protection of vulnerable participants.'],
  ['Responsible disclosure', 'Commitment to coordinated vulnerability handling and non-retaliation.'],
  ['Child protection', 'Specific controls where programmes collect, process or influence children\'s data or services.'],
  ['Complaints and remedy', 'Accessible mechanisms for raising concerns and correcting harm.'],
];

const ADVISORY_PANEL = [
  'Human rights law', 'Children\'s rights', 'Civil society', 'Online safety',
  'Disability', 'Gender', 'Migration and refugee issues', 'Child safeguarding',
  'Digital rights', 'Privacy',
];

const RISKS = [
  ['New foundation credibility', 'Funders may perceive limited operating history.', 'Transparent governance, founding expertise, strong advisory relationships and early public-good outputs.'],
  ['Access to live DPI contexts', 'Assurance work may be delayed if governments or implementers are cautious.', 'Start with non-sensitive artefacts, open-source components, maturity tools and voluntary partner pilots.'],
  ['Handling security findings', 'Public disclosure could create risk if not managed responsibly.', 'Responsible disclosure protocols, confidentiality agreements and safe publication rules.'],
  ['Citizen harm data', 'Privacy or safeguarding risk if reports are mishandled.', 'Minimisation, anonymisation, consent, secure storage and referral protocols.'],
  ['Funding continuity', 'Two-year launch funding may not sustain all programmes after grant end.', 'Diverse funding pipeline, credible published evidence and conversion of tools into partnership-supported programmes.'],
  ['Perceived conflict with commercial actors', 'Independence could be questioned.', 'Conflict-of-interest policies, public governance disclosures and clear separation from commercial delivery.'],
  ['Scope creep', 'Demand may exceed launch capacity.', 'Prioritise high-value public-good outputs and use programme charters to control commitments.'],
];

const OPERATING = [
  ['Governance', 'Independent Board oversight, conflict-of-interest controls, safeguarding and ethics expectations, and transparent decision-making.'],
  ['Programme management', 'Each launch programme has a charter, delivery plan, roles, outputs, timeline, risk register and reporting rhythm.'],
  ['Quality assurance', 'Technical outputs reviewed by subject-matter experts and, where appropriate, peer reviewers or advisory contributors.'],
  ['Human rights and safeguarding', 'Rights-based assessment, child protection standard, mandatory partner due diligence and direct escalation path from the Head of Human Rights, Safeguarding and Ethics to the Board for material concerns.'],
  ['Partnerships', 'Written agreements with governments, civil society, DPG projects, researchers and funders — including minimum human-rights, safeguarding, research ethics and anti-retaliation clauses.'],
  ['Open public goods', 'Tools and frameworks released openly wherever safe and appropriate, with sensitive security details handled responsibly.'],
];

export default function Governance() {
  return (
    <>
      <SeoHead
        title="Governance and accountability"
        description="The Foundation's independent Board, executive office, operating model, relationship with Nucleus Systems, intellectual property model, transparency commitments and launch risk register."
        canonical="governance.html"
      />

      <PageHero
        eyebrow="Governance and accountability"
        title="Independence that can be inspected, not just asserted"
        lede="The Foundation is led by an independent Board of Directors supported by a full executive office. Its relationship with Nucleus Systems is explicit, bounded and governed by written agreements — and the Foundation retains full control of its governance, funding, research priorities and publications."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Governance' }]}
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#board">Board</a><a href="#advisory">Advisory panel</a><a href="#executive">Executive office</a><a href="#operating">Operating model</a>
            <a href="#nucleus">Nucleus Systems</a><a href="#ip">Intellectual property</a>
            <a href="#due-diligence">Due diligence</a><a href="#transparency">Transparency</a><a href="#risk">Risk management</a>
          </nav>
        }
      />

      <section className="section" id="board">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Board of Directors</p>
            <h2 className="balance">An independent, multi-stakeholder Board</h2>
            <p>The Board is independent and is not controlled by Nucleus Systems leadership. Composition is defined by role so that the required expertise is on record before individual appointments are confirmed.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Recommended Board representation</caption>
              <thead><tr><th scope="col">Seat</th><th scope="col">Contribution</th></tr></thead>
              <tbody>{BOARD.map(([r, d]) => <tr key={r}><td><strong>{r}</strong></td><td>{d}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="note mt-6" data-reveal=""><strong>Appointments in progress.</strong> Named directors will be published on this page as each appointment is confirmed. Until then, the Board is described by role rather than by individual, so that composition and independence can be assessed on the record.</p>
        </div>
      </section>

      <section className="section section--alt" id="advisory">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Advisory governance</p>
              <h2 className="balance">Human Rights, Child Safety and Safeguarding Advisory Panel</h2>
              <p className="lede mt-4">A specialist advisory panel that provides expert review without over-expanding the governing Board. The panel reviews especially sensitive programmes, methodologies and high-risk publication decisions.</p>
            </div>
            <div data-reveal="">
              <p className="text-muted">Panel competencies span:</p>
              <ul className="agreement-list mt-4">
                {ADVISORY_PANEL.map((i) => <li key={i}><span className="pill pill--outline">{i}</span></li>)}
              </ul>
              <div className="callout mt-6">
                <h3>Role of the panel</h3>
                <ul className="dot-list mt-3">
                  <li>Review especially sensitive programmes and methodologies.</li>
                  <li>Advise on high-risk publication decisions involving human rights, child safety or civil-society data.</li>
                  <li>Provide specialist scrutiny without requiring Board seats for every competency area.</li>
                  <li>Report to the Board through the Head of Human Rights, Safeguarding and Ethics.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="executive">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Executive office</p>
            <h2 className="balance">Delivery leadership and where responsibility sits</h2>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Executive office structure</caption>
              <thead><tr><th scope="col">Role</th><th scope="col">Responsibility</th></tr></thead>
              <tbody>{EXEC.map(([r, d]) => <tr key={r}><td><strong>{r}</strong></td><td>{d}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="operating">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Operating model</p>
              <h2 className="balance">Nonprofit governance with delivery discipline</h2>
              <p className="lede mt-4">Work is managed through programme charters, defined deliverables, evidence-based methodologies, partner agreements, quality review and monitoring, evaluation and learning.</p>
            </div>
            <div data-reveal="">
              <dl className="deflist">
                {OPERATING.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-dark" id="nucleus">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow eyebrow--teal">Relationship with Nucleus Systems</p>
            <h2 className="balance">The Foundation is not a disguised commercial channel</h2>
            <p>Nucleus Systems provides founding technical expertise and mentorship. The relationship is explicit, transparent and governed by written agreements — and the boundary runs through control, not goodwill.</p>
          </div>
          <div className="split split--even" data-reveal-stagger="">
            <div className="boundary-card">
              <span className="mono-label">Nucleus Systems may provide</span>
              <ul className="dot-list mt-5">{NUCLEUS_MAY.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="boundary-card boundary-card--accent">
              <span className="mono-label">The Foundation independently controls</span>
              <ul className="check-list mt-5">{FOUNDATION_CONTROLS.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
          <div className="mt-8" data-reveal="">
            <h3 style={{ color: '#fff' }}>Required agreements</h3>
            <p className="mt-4" style={{ maxWidth: '60ch' }}>Each of the following is a condition of the relationship, not an optional formality. Together they define what may be shared, what must stay separate, and how conflicts are handled.</p>
            <ul className="agreement-list mt-6">
              {AGREEMENTS.map((i) => <li key={i}><span className="pill pill--outline">{i}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="ip">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Intellectual property model</p>
            <h2 className="balance">Who owns what, and what stays open</h2>
          </div>
          <div className="grid grid-3" data-reveal-stagger="">
            <article className="card card--navy"><div className="card-topbar" />
              <h3 className="card-title">Nucleus Systems retains</h3>
              <p>Existing proprietary frameworks, commercial code and assessment tools, existing trademarks, and confidential client information.</p>
            </article>
            <article className="card card--teal"><div className="card-topbar" />
              <h3 className="card-title">The Foundation owns or stewards</h3>
              <p>Grant-funded open-source software, public research, open safeguards tools, public policy resources, training materials developed under grants, open reference architectures, open data sets and hosted project repositories.</p>
            </article>
            <article className="card card--orange"><div className="card-topbar" />
              <h3 className="card-title">Shared or adapted materials</h3>
              <p>Selected Nucleus Systems frameworks may be used under a documented licence covering non-commercial and research use, public-interest implementation rights, attribution requirements, restrictions on commercial resale, and rules for derivative open-source outputs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="due-diligence">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Partner due diligence</p>
            <h2 className="balance">Minimum standards for every government, technology provider, research institution and implementing partner</h2>
            <p>Rights and child protection are part of DTFF's partner due diligence — not optional additions. Every partner is reviewed against these standards before collaboration begins.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Partner due diligence minimum expectations</caption>
              <thead><tr><th scope="col">Due diligence area</th><th scope="col">Minimum expectation</th></tr></thead>
              <tbody>{DUE_DILIGENCE.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="transparency">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Transparency and reporting</p>
            <h2 className="balance">What we will measure, and what we will publish</h2>
            <p>Success is not measured by documents produced or workshops held. The Foundation uses a monitoring, evaluation and learning model that connects activities to changes in knowledge, institutional practice, risk visibility and citizen protection.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Outcome areas and indicative indicators</caption>
              <thead><tr><th scope="col">Outcome area</th><th scope="col">Indicative indicators</th></tr></thead>
              <tbody>{MEL.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="grid grid-2 mt-7" data-reveal-stagger="">
            <div className="callout"><h3>Funding transparency</h3>
              <ul className="dot-list mt-4">
                <li>No single funder to exceed a defined share of core, unrestricted income.</li>
                <li>Clear separation between restricted programme funding and core organisational costs.</li>
                <li>Preference for multi-year, flexible funding over single-year restricted grants.</li>
                <li>Published donor and funding policies, including conflict-of-interest safeguards for any Nucleus Systems-linked funding.</li>
                <li>Fee-for-service and training income reinvested to subsidise free public-interest tools and support.</li>
              </ul>
            </div>
            <div className="callout callout--teal"><h3>Responsible openness</h3>
              <p>The Foundation promotes openness where it strengthens public learning, and discretion where technical detail could assist adversaries or expose citizens to harm.</p>
              <ul className="dot-list dot-list--teal mt-4">
                <li>Anonymised country and DPG findings published wherever partners consent.</li>
                <li>Coordinated vulnerability disclosure before any technical publication.</li>
                <li>Citizen-harm evidence minimised, anonymised and stored under consent and referral protocols.</li>
                <li>Annual reporting against the indicators above once the first reporting period closes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="risk">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Risk and dependencies</p>
            <h2 className="balance">Managing our own risk with the seriousness we expect of others</h2>
            <p>A credible public-interest digital trust organisation must manage its own risks with the same discipline it expects from the ecosystems it serves.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>Launch risk register</caption>
              <thead><tr><th scope="col">Risk or dependency</th><th scope="col">Potential impact</th><th scope="col">Mitigation</th></tr></thead>
              <tbody>{RISKS.map(([a, b, c]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ask us the hard governance questions before you fund us."
        text="Governance documentation, draft policies and the founding agreement framework are available to prospective funders and government partners on request."
        primary={['Contact the Foundation', '/contact']}
        secondary={['See the investment case', '/support-our-work']}
      />
    </>
  );
}
