import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';

const NEWS_TYPES = [
  { icon: 'megaphone' as const, name: 'Announcements', desc: 'Governance milestones, funding confirmations, partnership agreements and programme launches.' },
  { icon: 'file' as const, name: 'Publications', desc: 'New research papers, policy briefs, toolkits, frameworks and the annual DPI trust report.' },
  { icon: 'calendar' as const, name: 'Events and convenings', desc: 'Roundtables hosted by the coordination network, and sector convenings the Foundation participates in.' },
  { icon: 'alert' as const, name: 'Security advisories', desc: 'Coordinated disclosures relating to projects the Foundation supports.' },
];

const CONVENINGS = [
  ['Digital identity community convenings', 'Where identity authorities, vendors and civil society meet, and where DPI trust readiness findings are most useful.'],
  ['Regional digital transformation forums', 'Continental and regional bodies coordinating digital infrastructure and interoperability agendas.'],
  ['Digital public goods community events', 'Registry, standards and maintainer community gatherings for digital public goods.'],
  ['Mobile and payment ecosystem convenings', 'Where instant payment integrity, fraud and inclusion questions are worked through in practice.'],
];

const ICON_COLOURS = ['', 'orange', 'teal', ''];

export default function News() {
  return (
    <>
      <SeoHead
        title="News and events"
        description="Announcements, publications, events and security advisories from the Digital Trust Futures Foundation. Nothing is listed until it has actually happened."
        canonical="news.html"
      />

      <PageHero
        eyebrow="News and events"
        title="Announcements, publications and convenings"
        lede="The Foundation publishes in a factual, evidence-based register. Announcements are made when something has actually happened — a policy adopted, a partnership signed, a resource published, an advisory coordinated."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'News and events' }]}
      />

      <section className="section">
        <div className="container">
          <h2 className="visually-hidden">Latest announcements</h2>
          <div className="empty-directory" data-reveal="">
            <div className="icon-badge icon-badge--teal"><Icon name="megaphone" /></div>
            <h3>No announcements published yet</h3>
            <p className="text-muted mt-3" style={{ maxWidth: '60ch' }}>The Foundation is at launch stage. This page will carry announcements, publications, event notices and advisories from the first reporting period onward, in reverse chronological order.</p>
            <div className="cluster mt-6">
              <a className="btn btn--accent" href="#newsletter">Get notified<ArrowIcon /></a>
              <Link className="btn btn--ghost" to="/programmes#roadmap">See the roadmap<ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head" data-reveal=""><p className="eyebrow">What will appear here</p><h2 className="balance">Four kinds of update</h2></div>
          <div className="grid grid-4" data-reveal-stagger="">
            {NEWS_TYPES.map((n, i) => (
              <article key={n.name} className="card card--hover">
                <div className={`icon-badge${ICON_COLOURS[i] ? ` icon-badge--${ICON_COLOURS[i]}` : ''}`}><Icon name={n.icon} /></div>
                <h3 className="card-title">{n.name}</h3><p>{n.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Convenings</p>
              <h2 className="balance">Where the Foundation expects to engage</h2>
              <p className="lede mt-4">Relationships in this sector are built through existing convenings rather than cold outreach. The categories below describe where the Foundation intends to participate as programmes establish.</p>
            </div>
            <div data-reveal="">
              <div className="table-wrap">
                <table><caption>Convening categories</caption>
                  <thead><tr><th scope="col">Category</th><th scope="col">Why it matters to the Foundation</th></tr></thead>
                  <tbody>{CONVENINGS.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
                </table>
              </div>
              <p className="note mt-6"><strong>Participation is not implied endorsement.</strong> Named events, partners and speaking engagements appear here only once confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-dark" id="newsletter">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <div data-reveal="">
              <p className="eyebrow eyebrow--teal">Stay informed</p>
              <h2 className="balance">Occasional updates, no tracking</h2>
              <p className="pretty">A short update when the Foundation publishes something worth your time: a new toolkit, a research brief, a fellowship opening or a coordination roundtable.</p>
              <ul className="check-list mt-6">
                <li>Sent only when there is something substantive to report.</li>
                <li>Consent recorded, unsubscribe in every message.</li>
                <li>Your address is never shared, sold or used for anything else.</li>
              </ul>
            </div>
            <div data-reveal="">
              <form className="form card newsletter-card" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="65b5c951-5ecf-4ac9-8dfc-0b467534e77e" />
                <input type="hidden" name="subject" value="Newsletter signup" />
                <input type="hidden" name="from_name" value="Digital Trust Futures Foundation website" />
                <input type="hidden" name="redirect" value="https://digitaltrustfuturesfoundation.org/thank-you.html?t=newsletter" />
                <input type="checkbox" name="botcheck" className="visually-hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden={true} />
                <div className="field">
                  <label htmlFor="nl-email">Email address</label>
                  <input type="email" id="nl-email" name="email" autoComplete="email" required placeholder="you@organisation.org" />
                  <p className="hint">We will add you to the list and confirm by email. Unsubscribe from any message.</p>
                </div>
                <label className="checkbox">
                  <input type="checkbox" name="consent" value="yes" required />
                  <span>I consent to receiving occasional updates from the Digital Trust Futures Foundation and understand I can unsubscribe at any time. See the <Link to="/legal/privacy">privacy policy</Link>.</span>
                </label>
                <button className="btn btn--accent" type="submit">Subscribe<ArrowIcon /></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Nothing to announce is better than something invented."
        text="When the Foundation has published, assessed, convened or coordinated something, it will appear here with dates and detail."
        primary={['Read the programmes', '/programmes']}
        secondary={['Support our work', '/support-our-work']}
      />
    </>
  );
}
