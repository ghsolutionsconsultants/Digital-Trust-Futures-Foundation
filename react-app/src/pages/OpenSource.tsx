import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';

const OS_SERVICES = [
  { icon: 'branch' as const, name: 'Project creation', desc: 'Incubating DPI safeguards utilities, security assessment tools, credential and payment-assurance components, and open-source AI governance tools.' },
  { icon: 'layers' as const, name: 'Hosting and governance', desc: 'A neutral legal home, project charters, technical steering committees and transparent decision-making for projects that need institutional shelter.' },
  { icon: 'shield-check' as const, name: 'Security and software trust', desc: 'Secure SDLC, SBOM and VEX generation, code signing, build provenance, repository hardening and coordinated vulnerability disclosure.' },
  { icon: 'refresh' as const, name: 'Sustainability', desc: 'Grant administration, maintainer support, community building, and long-term maintenance and succession planning.' },
  { icon: 'users' as const, name: 'Support services', desc: 'Security assessments, maintainer training, DevSecOps implementation and architecture or release-readiness reviews.' },
];

const OS_CATS = [
  ['Digital identity platforms', 'Open-source modular identity systems used across multiple national deployments.'],
  ['Data-exchange and interoperability layers', 'Components connecting government systems and services.'],
  ['Social protection and beneficiary management', 'Platforms determining who receives support, and when.'],
  ['Health information and immunisation registries', 'Systems holding some of the most sensitive population data.'],
  ['Instant and interoperable payment platforms', 'Rails supporting financial inclusion at national scale.'],
  ['Civic registration, consent and credentialing tools', 'Components that mediate consent and prove entitlement.'],
];

const OS_CRITERIA = [
  'The project is open source under an OSI-approved licence.',
  'The project is in use, or credibly heading toward use, in public-interest or government service delivery.',
  'The maintainers want security support and are able to act on findings.',
  'Support can be delivered without displacing an existing funded provider.',
  'Findings can be handled under coordinated disclosure, and lessons published in some anonymised form.',
];

const ICON_COLOURS = ['', 'orange', 'teal', '', 'orange'];

export default function OpenSource() {
  return (
    <>
      <SeoHead
        title="Open source"
        description="The Foundation creates, hosts, secures and sustains open-source digital public goods. Find out about project support services, security advisories and how to contribute or propose a project."
        canonical="open-source.html"
      />

      <PageHero
        eyebrow="Open source"
        title="Securing the components that many governments quietly depend on"
        lede="Digital public goods are frequently maintained by small teams without dedicated security or sustainability capacity. When one shared component is weak, that weakness can become many sovereign weaknesses. The Foundation exists in part to close that distance."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Open source' }]}
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#services">What we provide</a><a href="#projects">Projects</a>
            <a href="#advisories">Security advisories</a><a href="#contributing">Contributing</a>
          </nav>
        }
      />

      <section className="section" id="services">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">What we provide</p>
            <h2 className="balance">Five ways the Foundation supports open source</h2>
            <p>The Open Digital Commons and Software Trust Division links to external code repositories rather than duplicating code hosting. Where a project needs a neutral legal home, the Foundation can provide one.</p>
          </div>
          <div className="grid grid-3" data-reveal-stagger="">
            {OS_SERVICES.map((s, i) => (
              <article key={s.name} className="card card--hover">
                <div className={`icon-badge${ICON_COLOURS[i] ? ` icon-badge--${ICON_COLOURS[i]}` : ''}`}><Icon name={s.icon} /></div>
                <h3 className="card-title">{s.name}</h3><p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="projects">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Project directory</p>
            <h2 className="balance">Hosted and supported projects</h2>
            <p>Phase 1 prioritises two to four projects. The directory below will list each supported project with its repository link, licence, maintainer contact and support status as engagements are confirmed.</p>
          </div>
          <div className="empty-directory" data-reveal="">
            <div className="icon-badge icon-badge--orange"><Icon name="branch" /></div>
            <h3>No projects listed yet</h3>
            <p className="text-muted mt-3" style={{ maxWidth: '58ch' }}>Project selection is made in consultation with the Digital Public Goods Alliance registry and through direct outreach to maintainer communities. Each supported project will be published here with its repository, licence and support scope once the engagement and its disclosure terms are agreed.</p>
            <div className="cluster mt-6">
              <Link className="btn btn--accent" to="/get-involved#support">Propose a project<ArrowIcon /></Link>
              <Link className="btn btn--ghost" to="/divisions/open-digital-commons">Division detail<ArrowIcon /></Link>
            </div>
          </div>
          <div className="split split--even mt-8" style={{ alignItems: 'start' }}>
            <div data-reveal="">
              <h3>Categories we prioritise</h3>
              <div className="table-wrap mt-5">
                <table><caption>Digital public good categories</caption>
                  <thead><tr><th scope="col">Category</th><th scope="col">Why it matters</th></tr></thead>
                  <tbody>{OS_CATS.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
                </table>
              </div>
            </div>
            <div data-reveal="">
              <h3>Selection criteria</h3>
              <ul className="check-list mt-5">{OS_CRITERIA.map((c) => <li key={c}>{c}</li>)}</ul>
              <div className="note mt-6"><strong>A note on capacity.</strong> The Foundation would rather support three projects properly than list thirty. Where we cannot help directly, we will say so and try to point you somewhere that can.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="advisories">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Security advisories</p>
              <h2 className="balance">Disclosure that protects users first</h2>
              <p className="lede mt-4">Advisories relating to projects the Foundation supports are published here after coordinated disclosure with maintainers and, where a national deployment is affected, with the relevant operators.</p>
              <div className="mt-6"><Link className="btn btn--ghost" to="/security">Vulnerability disclosure policy<ArrowIcon /></Link></div>
            </div>
            <div className="flow" data-reveal="">
              <div className="empty-state">No advisories have been published. This page will list every advisory issued, including those that turn out to be low severity.</div>
              <div className="grid grid-2 mt-6">
                <div className="callout"><h3>How we handle findings</h3>
                  <ul className="dot-list mt-4">
                    <li>Report received and acknowledged.</li>
                    <li>Triage and severity assessment with the maintainer.</li>
                    <li>Coordinated remediation window agreed.</li>
                    <li>Advisory published with credit to the reporter, unless anonymity is requested.</li>
                  </ul>
                </div>
                <div className="callout callout--teal"><h3>When we withhold detail</h3>
                  <p>Where technical detail could assist adversaries or expose citizens to harm, publication may be delayed or redacted. That decision is recorded, explained, and reviewed — it is never a way to make a problem disappear.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-dark" id="contributing">
        <div className="container">
          <div className="split">
            <div data-reveal="">
              <p className="eyebrow eyebrow--teal">Contributing</p>
              <h2 className="balance">How to work with us on open source</h2>
              <p className="pretty">Whether you maintain a digital public good, want to contribute to a Foundation-hosted project, or think a component your country depends on needs review — there is a route in.</p>
              <div className="mt-7 cluster">
                <Link className="btn btn--light" to="/get-involved#support">Request support<ArrowIcon /></Link>
                <a className="btn btn--outline-light" href="mailto:info@digitaltrustfuturesfoundation.org">Email the division<ArrowIcon /></a>
              </div>
            </div>
            <div data-reveal="">
              <ul className="check-list">
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

      <CtaBand
        title="One shared weakness should not become many sovereign weaknesses."
        text="If your national infrastructure depends on an open-source component that nobody is funded to secure, we would like to hear about it."
        primary={['Request support', '/get-involved#support']}
        secondary={['Support our work', '/support-our-work']}
      />
    </>
  );
}
