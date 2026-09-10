import { Link, useParams, Navigate } from 'react-router-dom';
import { SeoHead } from '../../components/ui/SeoHead';
import { PageHero, CtaBand } from '../../components/ui/PageHero';
import { ArrowIcon } from '../../components/ui/Icon';
import { DIVISIONS, DIVISION_ORDER } from '../../data/divisions';

const DIV_DESC: Record<string, string> = {
  'dpi-trust-lab': 'Safeguards research and assurance for identity, payments, data exchange, social protection, health, education and public-service delivery infrastructure.',
  'open-digital-commons': 'Creating, hosting, securing and sustaining open-source digital public goods, including secure SDLC, SBOM, supply-chain assurance and coordinated vulnerability disclosure.',
  'policy-evidence-centre': 'Independent research translating technical risk into evidence for policy, regulation, investment and public-interest technology decisions.',
  'skills-academy': 'Practical digital trust capacity building for governments, universities, civil society, open-source communities and local technology teams.',
  'cyber-safety-centre': 'Practical cyber support for nonprofits, community institutions and social-impact technology providers that cannot afford commercial services.',
};

export default function DivisionPage() {
  const { slug } = useParams<{ slug: string }>();
  const d = slug ? DIVISIONS[slug] : null;

  if (!d) return <Navigate to="/404" replace />;

  const prevIdx = DIVISION_ORDER.indexOf(slug!) - 1;
  const nextIdx = DIVISION_ORDER.indexOf(slug!) + 1;
  const prev = prevIdx >= 0 ? DIVISIONS[DIVISION_ORDER[prevIdx]] : null;
  const next = nextIdx < DIVISION_ORDER.length ? DIVISIONS[DIVISION_ORDER[nextIdx]] : null;

  return (
    <>
      <SeoHead
        title={d.name}
        description={DIV_DESC[d.slug]}
        jsonldExtra={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://digitaltrustfuturesfoundation.org/index.html' },
            { '@type': 'ListItem', position: 2, name: 'What we do', item: 'https://digitaltrustfuturesfoundation.org/what-we-do.html' },
            { '@type': 'ListItem', position: 3, name: d.short },
          ],
        }}
      />

      <PageHero
        eyebrow={`Division ${d.num} · ${d.phase}`}
        title={d.name}
        lede={d.strap}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'What we do', href: '/what-we-do' }, { label: d.short }]}
        extra={
          <nav className="section-nav" data-section-nav="" aria-label="On this page">
            <a href="#purpose">Purpose</a><a href="#focus">Focus areas</a>
            <a href="#programmes">Programmes</a><a href="#outputs">Outputs</a>
          </nav>
        }
      />

      <section className="section" id="purpose">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'center' }}>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Division purpose</p>
              <h2 className="balance">What this division does</h2>
              <p className="text-muted">{d.purpose}</p>
              <div className="callout mt-6">
                <h3>Primary audience</h3>
                <p>{d.audience}</p>
              </div>
              <p className="note mt-6"><strong>Boundary.</strong> {d.boundary}</p>
            </div>
            <figure className="media-frame" data-reveal="">
              <img src={`/assets/img/photos/${d.photo[0]}`} alt={d.photo[1]} width={1200} height={750} loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="focus">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">{d.focusTitle}</p>
            <h2 className="balance">What the division works on</h2>
          </div>
          <div className="grid grid-2" data-reveal-stagger="">
            {d.focus.map((f) => (
              <article key={f.title} className="card card--hover">
                <h3 className="card-title">{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="programmes">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Division programmes</p>
            <h2 className="balance">How the work is structured</h2>
          </div>
          <div className="grid grid-2" data-reveal-stagger="">
            {d.programmes.map((p) => (
              <article key={p.name} className="card card--hover">
                <h3 className="card-title">{p.name}</h3>
                <p>{p.desc}</p>
                <p className="mt-4"><span className="status status--planned">Opening for applications</span></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {d.extraRows.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-head" data-reveal="">
              <p className="eyebrow">{d.extraTitle}</p>
              <h2 className="balance">Scope in detail</h2>
            </div>
            <div className="table-wrap" data-reveal="">
              <table>
                <caption>{d.extraTitle}</caption>
                <thead><tr><th scope="col">Area</th><th scope="col">Detail</th></tr></thead>
                <tbody>{d.extraRows.map((r) => <tr key={r.label}><td><strong>{r.label}</strong></td><td>{r.desc}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="section" id="outputs">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">Open outputs</p>
              <h2 className="balance">What the division will publish</h2>
            </div>
            <div data-reveal="">
              <ul className="check-list">
                {d.outputs.map((o) => <li key={o}>{o}</li>)}
              </ul>
              <div className="cluster mt-6">
                <Link className="btn btn--accent" to="/get-involved#partner">Partner with this division<ArrowIcon /></Link>
                <Link className="btn btn--ghost" to="/research">Research library<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Division navigation */}
      <section className="section section--alt">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '1px',
            borderTop: '1px solid var(--border)',
            paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            {/* Left — previous */}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {prev && (
                <Link
                  to={`/divisions/${prev.slug}`}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', textDecoration: 'none', color: 'inherit' }}
                >
                  <span className="mono-label" style={{ opacity: 0.6 }}>← Previous division</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-1)', color: 'var(--heading)', fontWeight: 500, lineHeight: 1.3 }}>{prev.name}</span>
                </Link>
              )}
            </div>

            {/* Centre — all divisions */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingInline: 'clamp(1.5rem, 3vw, 3rem)', borderInline: '1px solid var(--border)' }}>
              <Link
                to="/what-we-do"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', color: 'inherit' }}
              >
                <span className="mono-label" style={{ opacity: 0.6 }}>All divisions</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-1)', color: 'var(--heading)', fontWeight: 500, lineHeight: 1.3 }}>What we do</span>
              </Link>
            </div>

            {/* Right — next */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {next && (
                <Link
                  to={`/divisions/${next.slug}`}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem', textDecoration: 'none', color: 'inherit' }}
                >
                  <span className="mono-label" style={{ opacity: 0.6 }}>Next division →</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-1)', color: 'var(--heading)', fontWeight: 500, lineHeight: 1.3, textAlign: 'right' }}>{next.name}</span>
                </Link>
              )}
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
