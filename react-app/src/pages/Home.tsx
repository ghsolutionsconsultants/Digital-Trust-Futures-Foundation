import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { HeroCanvas } from '../components/ui/HeroCanvas';
import { CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';
import { DIVISION_ORDER, DIVISIONS } from '../data/divisions';

const ICON_COLOURS = ['', 'orange', 'teal', '', 'orange'];

export default function Home() {
  return (
    <>
      <SeoHead
        title="Digital Trust Futures Foundation — Protecting people, their rights and the digital systems they depend on."
        description="An independent, non-profit public-benefit organisation protecting people, their rights and the institutions that serve them as digital public infrastructure, open-source technology and AI-enabled public services scale across Africa and the Global South."
        canonical="index.html"
      />

      {/* ── Hero ── */}
      <section className="hero">
        <HeroCanvas />
        <div className="hero-photo" aria-hidden={true} />
        <div className="hero-grain" aria-hidden={true} />
        <div className="container">
          <div className="hero-inner">
            <p className="eyebrow">Independent · Non-profit · Rights-respecting · Public interest</p>
            <h1>Digital public infrastructure is only as good as the <span className="mark">protection</span> around it.</h1>
            <p className="hero-lede">
              Digital Trust Futures Foundation is an independent, non-profit public-benefit organisation
              protecting people, their rights and the institutions that serve them as digital public
              infrastructure, open-source technology and AI-enabled public services scale across
              Africa and the Global South.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--accent btn--lg" to="/get-involved#partner">Partner with us<ArrowIcon /></Link>
              <Link className="btn btn--outline-light btn--lg" to="/what-we-do">Explore our work<ArrowIcon /></Link>
            </div>
          </div>
          <div className="hero-triad hero-triad--4">
            <div className="triad-item">
              <p className="triad-key"><span className="pill-dot" />Security</p>
              <p>Protect the system. Infrastructure withstands attack, fraud and abuse.</p>
            </div>
            <div className="triad-item">
              <p className="triad-key"><span className="pill-dot pill-dot--orange" />Safety</p>
              <p>Protect the person. People are protected from digital harm, exploitation and exclusion.</p>
            </div>
            <div className="triad-item triad-item--rights">
              <p className="triad-key"><span className="pill-dot pill-dot--teal" />Rights</p>
              <p>Protect dignity and agency. Privacy, equality, participation, due process and remedy are built into digital transformation.</p>
            </div>
            <div className="triad-item">
              <p className="triad-key"><span className="pill-dot" />Trust</p>
              <p>Sustain inclusion. People can use digital services with confidence because safeguards are visible and accountability exists.</p>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden={true}><span /></div>
      </section>

      {/* ── Positioning ── */}
      <section className="section section--tight" id="positioning">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Positioning</p>
              <h2 className="balance">The missing protection layer between digital public infrastructure and the people who depend on it</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="lede pretty">Identity systems, payment rails, data-exchange platforms and social protection systems have
                become the rails through which citizens prove who they are, receive money, access benefits, consent to data
                sharing and participate in the digital economy. The safeguards — security, safety, rights and effective remedy — have not kept pace.</p>
              <p className="text-muted">The Foundation is the independent, non-commercial digital trust partner for governments,
                digital public goods and civil society — bringing cybersecurity, safety, human-rights and trust assurance to
                public-interest digital infrastructure, and releasing its tools, research and frameworks as reusable public goods.</p>
              <p className="text-muted">Cybersecurity tells us whether a system can be compromised. Human-rights assurance asks what happens to people even when the system is functioning exactly as designed. DTFF does both.</p>
              <div className="mt-6 cluster">
                <Link className="btn btn--primary" to="/human-rights">Human rights & digital trust<ArrowIcon /></Link>
                <Link className="btn btn--ghost" to="/about">About the Foundation<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divisions ── */}
      <section className="section band-dark band-dark--grid">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow eyebrow--center eyebrow--teal">Programme divisions</p>
            <h2 className="balance">Five areas of work, one protection mission</h2>
            <p style={{ maxWidth: '64ch', margin: '0 auto' }}>
              From infrastructure assurance to citizen safety, each division addresses a distinct layer of the
              digital trust problem — and together they cover the full stack from national DPI through to the
              open-source components underneath it, with human rights, civil society and children's rights as
              cross-cutting lenses throughout.
            </p>
          </div>
          <div className="grid grid-3 mt-8" data-reveal-stagger="">
            {DIVISION_ORDER.map((key, i) => {
              const d = DIVISIONS[key];
              return (
                <article key={key} className="division-card">
                  <div className={`icon-badge${ICON_COLOURS[i] ? ` icon-badge--${ICON_COLOURS[i]}` : ''}`}>
                    <Icon name={d.icon as any} />
                  </div>
                  <span className="mono-label mt-4">{d.num}</span>
                  <h3 className="card-title mt-2">{d.name}</h3>
                  <p>{d.strap}</p>
                  <Link className="link-arrow mt-4" to={`/divisions/${d.slug}`}>{d.short}<ArrowIcon /></Link>
                </article>
              );
            })}
          </div>
          <div className="mt-8 cluster" data-reveal="">
            <Link className="btn btn--light" to="/what-we-do">All divisions<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ── Why now ── */}
      <section className="section">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Why now</p>
              <h2 className="balance">DPI adoption is accelerating faster than the safeguards capacity around it</h2>
            </div>
            <div className="flow" data-reveal="">
              <p className="text-muted">More than 50 countries are deploying or scaling digital public infrastructure — identity stacks,
                instant payment rails, data-exchange platforms, social protection registries — often on donor-supported
                timelines and without the independent assurance capacity required to confirm they are safe to carry
                population-scale trust.</p>
              <p className="text-muted">The open-source components underneath those systems are frequently maintained by small,
                under-resourced teams without dedicated security funding. A single weak dependency shared by many national
                systems can create compounding, cross-border risk.</p>
              <p className="text-muted">And even where systems are technically secure, they can still cause harm — through discriminatory exclusion, opaque automated decisions, loss of dignity or agency, failure of effective remedy, and particular risks to children and vulnerable communities.</p>
              <div className="mt-6 cluster">
                <Link className="btn btn--primary" to="/about">About the Foundation<ArrowIcon /></Link>
                <Link className="btn btn--ghost" to="/programmes">See the programmes<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="stat-grid" data-reveal-stagger="">
            <div className="stat-item">
              <span className="stat-num">50+</span>
              <span className="stat-label">Countries deploying or scaling DPI</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">$billions</span>
              <span className="stat-label">Annual donor investment in digital infrastructure</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Dozens</span>
              <span className="stat-label">DPGs with no dedicated security funding</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">0</span>
              <span className="stat-label">Independent, nonprofit DPI trust organisations in the Global South</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured programmes ── */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Launch programmes</p>
            <h2 className="balance">Three mutually reinforcing programmes</h2>
          </div>
          <div className="grid grid-3 mt-7" data-reveal-stagger="">
            <article className="prog-card prog-card--1">
              <span className="prog-index">1</span>
              <h3>Citizen Digital Safety and DPI Trust Programme</h3>
              <p>Community safety toolkits, awareness, user protection learning and citizen harm reporting.</p>
              <Link className="link-arrow mt-4" to="/programmes#citizen-safety">Programme detail<ArrowIcon /></Link>
            </article>
            <article className="prog-card prog-card--2">
              <span className="prog-index">2</span>
              <h3>DPI Security Assurance and Resilience Lab</h3>
              <p>Independent public-interest assessment of identity, payment, data exchange, DPG and AI risks — including human-rights and child-rights dimensions.</p>
              <Link className="link-arrow mt-4" to="/programmes#assurance-lab">Programme detail<ArrowIcon /></Link>
            </article>
            <article className="prog-card prog-card--3">
              <span className="prog-index">3</span>
              <h3>Global South Digital Trust Coordination and Cyber Resilience Network</h3>
              <p>Roundtables, shared playbooks, knowledge hub, cross-border learning and civil-society readiness.</p>
              <Link className="link-arrow mt-4" to="/programmes#coordination-network">Programme detail<ArrowIcon /></Link>
            </article>
          </div>
          <div className="mt-8" data-reveal="">
            <Link className="btn btn--ghost" to="/programmes">Full programme detail<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ── Civil Society & HRDs spotlight ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Civil society & human rights defenders</p>
              <h2 className="balance">Civil society is a beneficiary, evidence partner and accountability participant — not a footnote</h2>
              <p className="text-muted">Human rights defenders, journalists, civic-space organisations and nonprofits whose work can expose them to surveillance, identity-linked tracking, account compromise and retaliation require a higher standard of digital protection.</p>
              <p className="text-muted">DTFF's Civil Society Digital Harm Evidence Network surfaces the anonymised harm patterns that technical assessments miss — and feeds those patterns back into the Observatory and assurance methodology.</p>
              <div className="mt-6 cluster">
                <Link className="btn btn--primary" to="/civil-society">Civil society & defenders<ArrowIcon /></Link>
                <Link className="btn btn--ghost" to="/divisions/cyber-safety-centre">Cyber & Safety Centre<ArrowIcon /></Link>
              </div>
            </div>
            <div className="flow" data-reveal="">
              <div className="callout">
                <h3>Three formal civil-society roles</h3>
                <ul className="dot-list mt-4">
                  <li><strong>Beneficiary</strong> — Cyber helpdesk, threat modelling, secure communications, incident referral and organisational resilience.</li>
                  <li><strong>Evidence partner</strong> — Local partners surface anonymised harm patterns that commercial assessments miss.</li>
                  <li><strong>Accountability participant</strong> — Civil society shapes DPI consultations, toolkit testing and methodology review.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Children & Young People spotlight ── */}
      <section className="section">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <div className="flow" data-reveal="">
              <div className="callout callout--teal">
                <h3>The D-CRIA principle</h3>
                <p className="mt-3" style={{ fontStyle: 'italic', fontSize: '1.1em' }}>"A system that is safe enough for an adult is not automatically safe enough for a child."</p>
                <ul className="dot-list dot-list--teal mt-4">
                  <li>Child Rights Impact Assessment for DPI</li>
                  <li>Child-Safe Digital Identity and Credentials</li>
                  <li>AI and Automated Decisions Affecting Children</li>
                  <li>Child-Friendly Recourse and Reporting</li>
                  <li>Youth participation — not just protection</li>
                </ul>
              </div>
            </div>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Children & young people</p>
              <h2 className="balance">Children interact with every dimension of digital public infrastructure — and deserve explicit protection in each</h2>
              <p className="text-muted">Children and young people are a cross-cutting protected constituency across all five DTFF programme divisions — from child identity and social protection systems through to education technology, online safety and youth participation in policy.</p>
              <p className="text-muted">DTFF's Children and Young People Digital Trust & Safety Initiative ensures that DPI, AI-enabled public services and digital technologies affecting children protect their best interests, safety, privacy, dignity and access to remedy.</p>
              <div className="mt-6 cluster">
                <Link className="btn btn--primary" to="/children-young-people">Children & young people<ArrowIcon /></Link>
                <Link className="btn btn--ghost" to="/programmes">See all programmes<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open source ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <figure className="media-frame" data-reveal="">
              <img src="/assets/img/photos/fibre-optic.jpg" alt="Close-up of fibre-optic cables carrying data." width={1200} height={750} loading="lazy" decoding="async" />
            </figure>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Open source</p>
              <h2 className="balance">Securing the shared infrastructure that many governments quietly depend on</h2>
              <p className="text-muted">The Foundation supports digital public goods — the open-source components underneath national
                identity, payment, health and data systems — with security baseline reviews, SBOM support, coordinated
                vulnerability disclosure and long-term sustainability planning. Every review includes privacy, children's data and rights risks alongside technical security.</p>
              <div className="mt-6">
                <Link className="btn btn--ghost" to="/open-source">Open-source work<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Protect people and their rights. Validate the infrastructure. Strengthen civil society. Build a trusted digital ecosystem."
        text="The Foundation welcomes partnership, funding and programme enquiries from governments, digital public goods initiatives, donors and social investment partners."
      />
    </>
  );
}
