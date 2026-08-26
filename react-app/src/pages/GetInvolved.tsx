import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';

const PATHWAYS = [
  { id: 'partner', icon: 'globe' as const, title: 'Governments and DPI programme teams', desc: 'National identity authorities, central banks and payment regulators, ministries of ICT and digital transformation, data-protection and AI regulators, national cybersecurity agencies, and service-delivery ministries.', offers: ['DPI trust readiness assessment', 'Human-rights impact assessment', 'Safeguards accelerator support', 'AI governance review', 'Incident readiness and resilience support'], label: 'Government / DPI programme' },
  { id: 'support', icon: 'branch' as const, title: 'Digital public goods and open-source maintainers', desc: 'Maintainers of identity platforms, data-exchange layers, social protection systems, health registries, payment platforms and consent tooling.', offers: ['Security baseline review', 'Privacy and children\'s data review', 'SBOM and supply-chain support', 'Vulnerability disclosure process', 'Sustainability and governance advisory'], label: 'Digital public good / open source' },
  { id: 'funders', icon: 'chart' as const, title: 'Funders and development partners', desc: 'Philanthropic foundations, multilateral and bilateral donors, development finance institutions and DPI financing facilities — including those focused on rights, civic space, children and responsible technology.', offers: ['Two-year launch investment package', 'Programme-specific funding', 'Fellowship and fund sponsorship', 'Co-designed measurement and reporting'], label: 'Funding / partnership' },
  { id: 'helpdesk', icon: 'buoy' as const, title: 'Civil-society organisations', desc: 'Nonprofits, community institutions and social-impact technology providers that cannot afford commercial cybersecurity services.', offers: ['Cyber helpdesk', 'Digital safety clinic', 'Cyber maturity support', 'Community safety toolkits and training'], label: 'Civil society support request' },
  { id: 'hrd', icon: 'shield-check' as const, title: 'Human Rights Defenders, Journalists & Civic-Space Organisations', desc: 'Organisations and individuals whose work can expose them to surveillance, identity-linked tracking, account compromise, payment monitoring, harassment, censorship and retaliation — requiring a higher standard of digital protection.', offers: ['Surveillance risk assessment', 'Secure communications guidance', 'Account and device protection', 'Threat modelling', 'Incident referral', 'Organisational cyber resilience'], label: 'Human rights defender / journalist' },
  { id: 'children', icon: 'users' as const, title: 'Children, Young People and the Organisations that Protect Them', desc: 'Children\'s organisations, education institutions, child-focused nonprofits and DPG maintainers handling data on children — ensuring digital systems affecting children protect their best interests, safety, privacy and access to remedy.', offers: ['D-CRIA assessment support', 'Child-safe digital identity review', 'Children\'s data protection guidance', 'Digital safety literacy materials', 'Child-rights policy evidence'], label: 'Children / child-protection organisation' },
  { id: 'careers', icon: 'cap' as const, title: 'Researchers, fellows and practitioners', desc: 'Researchers, university partners, early-career practitioners and specialists who want to work on digital trust in the Global South.', offers: ['Research fellowships', 'Open-source fellowships', 'Graduate programme', 'Roles as they open'], label: 'Careers / fellowships' },
];

const ICON_COLOURS = ['', 'orange', 'teal', '', 'teal', 'orange', ''];

const NEXT_STEPS = [
  ['01', 'Acknowledgement', 'We confirm receipt and tell you who is picking the enquiry up.'],
  ['02', 'Scoping conversation', 'A short call to understand the system, the constraint and what would actually help.'],
  ['03', 'Written scope', 'A defined scope, deliverables, timeline, disclosure terms and any partner obligations.'],
  ['04', 'Agreement', 'A written agreement covering roles, confidentiality, publication and safeguarding.'],
  ['05', 'Delivery and publication', 'Work delivered, findings shared with you first, anonymised lessons published where agreed.'],
];

export default function GetInvolved() {
  return (
    <>
      <SeoHead
        title="Get involved"
        description="Five routes in — for governments, DPG maintainers, funders, civil-society organisations and researchers. One enquiry form routes to the right team."
        canonical="get-involved.html"
      />

      <PageHero
        eyebrow="Get involved"
        title="Five routes in, one address to send them to"
        lede="A central bank asking about payment fraud and a maintainer asking about SBOMs need different people on the other end of the message. Tell us which of these you are and the enquiry reaches them — the form below writes the subject line for you."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Get involved' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Pathways</p>
            <h2 className="balance">Find your route</h2>
          </div>
          <div className="grid grid-3" data-reveal-stagger="">
            {PATHWAYS.map((p, i) => (
              <article key={p.id} className="pathway" id={p.id}>
                <div className={`icon-badge${ICON_COLOURS[i] ? ` icon-badge--${ICON_COLOURS[i]}` : ''}`}><Icon name={p.icon} /></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="dot-list">{p.offers.map((o) => <li key={o}>{o}</li>)}</ul>
                <div className="pathway-foot"><a className="link-arrow" href="#enquiry">Start an enquiry<ArrowIcon /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="enquiry">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'start' }}>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Enquiry</p>
              <h2 className="balance">Send us the specifics</h2>
              <p className="text-muted">The more concrete the system, constraint or question, the faster we can tell you whether we are the right organisation — and if we are not, who might be.</p>
              <div className="note mt-6"><strong>How this form works.</strong> Submissions are delivered to the Foundation by Web3Forms, a form-delivery service acting as our processor. It passes your message to <strong>info@digitaltrustfuturesfoundation.org</strong> and does not use it for anything else. No account is created and no cookie is set.</div>
              <div className="mt-6">
                <p className="mono-label">Prefer to write directly?</p>
                <p className="mt-3"><a className="link-arrow" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org<ArrowIcon /></a></p>
              </div>
            </div>

            <form className="form card" action="https://api.web3forms.com/submit" method="POST" data-reveal="">
              <input type="hidden" name="access_key" value="65b5c951-5ecf-4ac9-8dfc-0b467534e77e" />
              <input type="hidden" name="from_name" value="Digital Trust Futures Foundation website" />
              <input type="hidden" name="redirect" value="https://digitaltrustfuturesfoundation.org/thank-you.html" />
              <input type="checkbox" name="botcheck" className="visually-hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden={true} />

              <div className="field">
                <label htmlFor="subject">What is this about?<span className="req" aria-hidden={true}>*</span></label>
                <select id="subject" name="subject" required>
                  {PATHWAYS.map((p) => (
                    <option key={p.id} value={`Enquiry — ${p.label}`}>{p.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-grid form-grid--2">
                <div className="field">
                  <label htmlFor="name">Your name<span className="req" aria-hidden={true}>*</span></label>
                  <input type="text" id="name" name="name" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email<span className="req" aria-hidden={true}>*</span></label>
                  <input type="email" id="email" name="email" autoComplete="email" required />
                </div>
              </div>
              <div className="form-grid form-grid--2">
                <div className="field">
                  <label htmlFor="organisation">Organisation</label>
                  <input type="text" id="organisation" name="organisation" autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" name="country" autoComplete="country-name" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" autoComplete="organization-title" />
              </div>
              <div className="field">
                <label htmlFor="message">What would you like help with?<span className="req" aria-hidden={true}>*</span></label>
                <textarea id="message" name="message" required placeholder="The system, the constraint, and what a good outcome would look like." />
              </div>
              <label className="checkbox">
                <input type="checkbox" name="consent" value="yes" required />
                <span>I consent to the Foundation processing these details in order to respond, as set out in the <Link to="/legal/privacy">privacy policy</Link>. Please do not include security-sensitive detail here — use the <Link to="/security">vulnerability disclosure route</Link> instead.</span>
              </label>
              <button className="btn btn--accent btn--lg" type="submit">Send enquiry<ArrowIcon /></button>
            </form>
          </div>
        </div>
      </section>

      <section className="section" id="careers-detail">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">What happens next</p>
              <h2 className="balance">From first message to published lesson</h2>
              <p className="lede mt-4">The Foundation works through written scopes and agreements. That is slower than a handshake and considerably more useful when findings turn out to be uncomfortable.</p>
            </div>
            <div className="steps" data-reveal="">
              {NEXT_STEPS.map(([n, t, d]) => (
                <div key={n} className="step">
                  <span className="step-num">{n}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="careers">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <figure className="media-frame" data-reveal="">
              <img src="/assets/img/photos/classroom-backs.jpg" alt="A training room seen from the back, participants facing a facilitator." width={1200} height={750} loading="lazy" decoding="async" />
            </figure>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Careers and fellowships</p>
              <h2 className="balance">Work on the protection layer</h2>
              <p className="text-muted">The Foundation is at launch stage. Roles and fellowship cohorts will be published here and announced as funding is confirmed.</p>
              <ul className="check-list mt-6">
                <li>Digital Trust Research Fellowship — Policy and Evidence Centre</li>
                <li>African Open-Source Fellows Programme — Open Digital Commons</li>
                <li>Women in Digital Trust Fellowship — Skills and Implementation Academy</li>
                <li>African Digital Trust Graduate Programme — Skills and Implementation Academy</li>
              </ul>
              <div className="mt-7 cluster">
                <a className="btn btn--primary" href="mailto:info@digitaltrustfuturesfoundation.org">Register your interest<ArrowIcon /></a>
                <Link className="btn btn--ghost" to="/programmes#fellowships">Fellowship detail<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="If you are not sure which route is yours, start anywhere."
        text="One address, and we would rather redirect an enquiry than miss a system that needs looking at."
        primary={['Contact the Foundation', '/contact']}
        secondary={['Support our work', '/support-our-work']}
      />
    </>
  );
}
