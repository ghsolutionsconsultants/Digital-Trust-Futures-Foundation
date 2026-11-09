import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { Breadcrumb, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon, Icon } from '../components/ui/Icon';
import { SITE, ORG, ORG_LEGAL, EMAIL } from '../data/siteConfig';
import {
  AUTHOR, INSIGHT_BY_SLUG, PERSPECTIVE_LABEL, SERIES_ARTICLES,
  SERIES_LENGTH, SERIES_NAME, SERIES_SUB, isSeries,
  readingMinutes, type Block, type Insight,
} from '../data/insights';

/** Renders **bold** spans. Body text is data, never injected as HTML. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.k) {
    case 'lede':
      return <p className="lede pretty"><Rich text={b.text} /></p>;
    case 'p':
      return <p className="pretty"><Rich text={b.text} /></p>;
    case 'h3':
      return <h3><Rich text={b.text} /></h3>;
    case 'ul':
      return (
        <ul className="dot-list paper-list">
          {b.items.map((t, i) => <li key={i}><span><Rich text={t} /></span></li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol className="num-list">
          {b.items.map((t, i) => <li key={i}><span><Rich text={t} /></span></li>)}
        </ol>
      );
    case 'quote':
      return <blockquote className="quote paper-quote"><p><Rich text={b.text} /></p></blockquote>;
    case 'callout':
      return (
        <div className={`callout${b.tone === 'teal' ? ' callout--teal' : b.tone === 'navy' ? ' callout--navy' : ''}`}>
          <h3>{b.title}</h3>
          {b.paras.map((p, i) => <p key={i}><Rich text={p} /></p>)}
        </div>
      );
    case 'figure':
      return (
        <figure className="paper-figure">
          <a href={b.src} target="_blank" rel="noopener noreferrer" aria-label="Open the full-size figure">
            <img src={b.src} alt={b.alt} width={b.width} height={b.height} loading="lazy" decoding="async" />
          </a>
          <figcaption><Rich text={b.caption} /></figcaption>
        </figure>
      );
    case 'stats':
      return (
        <dl className="paper-stats">
          {b.items.map((i) => (
            <div key={i.value}>
              <dt>{i.value}</dt>
              <dd>{i.label}</dd>
            </div>
          ))}
        </dl>
      );
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            {b.caption && <caption>{b.caption}</caption>}
            <thead>
              <tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    j === 0
                      ? <th key={j} scope="row"><Rich text={cell} /></th>
                      : <td key={j}><Rich text={cell} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/**
 * Highlights the contents entry for whatever section the reader is in, and
 * drives the thin progress bar under the header. One observer, one scroll
 * listener — both torn down when the article unmounts.
 */
function useReadingState(ids: string[], scopeRef: React.RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(ids[0] ?? '');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        const first = ids.find((id) => seen.get(id));
        if (first) setActive(first);
      },
      // Only the band just below the header counts as "being read".
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const onScroll = () => {
      const el = scopeRef.current;
      if (!el) return;
      const start = el.offsetTop;
      const span = el.offsetHeight - window.innerHeight;
      if (span <= 0) { setProgress(1); return; }
      setProgress(Math.min(1, Math.max(0, (window.scrollY - start) / span)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, scopeRef]);

  return { active, progress };
}

function SeriesCard({ a, label }: { a: Insight; label: string }) {
  return (
    <Link className="series-card" to={`/research/${a.slug}`}>
      <span className="mono-label series-card__label">{label}</span>
      <span className="series-card__title">{a.title}</span>
      <span className="series-card__sub">{a.subtitle}</span>
    </Link>
  );
}

export default function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? INSIGHT_BY_SLUG[slug] : undefined;

  const bodyRef = useRef<HTMLDivElement>(null);
  const navSections = article ? article.sections.filter((s) => !s.minor) : [];
  const idsRef = useRef<string[]>([]);
  const ids = navSections.map((s) => s.id);
  // Keep the same array identity while the section list is unchanged, so the
  // observer is not rebuilt on every render.
  if (idsRef.current.join() !== ids.join()) idsRef.current = ids;
  const { active, progress } = useReadingState(idsRef.current, bodyRef);

  if (!article) return <Navigate to="/404" replace />;

  const series = isSeries(article);
  const idx = SERIES_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prev = series && idx > 0 ? SERIES_ARTICLES[idx - 1] : null;
  const next = series && idx >= 0 && idx < SERIES_ARTICLES.length - 1
    ? SERIES_ARTICLES[idx + 1] : null;
  const minutes = readingMinutes(article);
  const url = `${SITE}/research/${article.slug}`;

  return (
    <>
      <SeoHead
        title={`${article.title} — ${article.subtitle}`}
        description={article.standfirst}
        jsonldExtra={{
          '@context': 'https://schema.org',
          '@type': 'ScholarlyArticle',
          headline: article.title,
          alternativeHeadline: article.subtitle,
          abstract: article.standfirst,
          url,
          datePublished: article.published,
          inLanguage: 'en',
          isAccessibleForFree: true,
          license: 'https://creativecommons.org/licenses/by/4.0/',
          keywords: article.tags.join(', '),
          author: { '@type': 'Person', name: AUTHOR.name, jobTitle: AUTHOR.role, affiliation: { '@type': 'NGO', name: ORG } },
          publisher: { '@type': 'NGO', name: ORG, legalName: ORG_LEGAL, url: `${SITE}/` },
          ...(series
            ? {
                isPartOf: { '@type': 'PublicationIssue', name: SERIES_NAME, description: SERIES_SUB },
                position: article.number,
              }
            : {}),
        }}
      />

      <div className="read-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <section className="page-hero page-hero--paper">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Research', href: '/research' },
              { label: series ? `Article ${article.number}` : 'Perspective' },
            ]}
          />
          <p className="eyebrow eyebrow--teal">
            {series
              ? `${SERIES_NAME} · Article ${article.number} of ${SERIES_LENGTH}`
              : PERSPECTIVE_LABEL}
          </p>
          <h1 className="balance">{article.title}</h1>
          <p className="lede pretty">{article.subtitle}</p>

          <div className="paper-meta">
            <span><strong>{AUTHOR.name}</strong>, {AUTHOR.role}</span>
            <span><time dateTime={article.published}>{article.publishedLabel}</time></span>
            <span>{minutes} min read</span>
            {article.version && <span>{article.version}</span>}
            <span>Classification: {article.classification}</span>
          </div>

          <div className="cluster paper-actions">
            <a className="btn btn--accent" href="#article-body">
              Start reading<ArrowIcon />
            </a>
            <a className="btn btn--outline-light" href={article.pdf} download>
              <Icon name="download" /> Download the PDF
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="article-body">
        <div className="container">
          <div className="paper-layout">
            <aside className="paper-rail" aria-label="Contents">
              <p className="mono-label paper-rail__head">Contents</p>
              <nav className="paper-toc">
                {navSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    aria-current={active === s.id ? 'true' : undefined}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="paper-rail__foot">
                <p className="mono-label">{series ? 'In this series' : 'Related series'}</p>
                <ol className="paper-series">
                  {SERIES_ARTICLES.map((a) => (
                    <li key={a.slug} aria-current={a.slug === article.slug ? 'true' : undefined}>
                      {a.slug === article.slug
                        ? <span>{a.number}. {a.title}</span>
                        : <Link to={`/research/${a.slug}`}>{a.number}. {a.title}</Link>}
                    </li>
                  ))}
                  {Array.from({ length: SERIES_LENGTH - SERIES_ARTICLES.length }, (_, i) => (
                    <li key={`todo-${i}`} className="is-upcoming">
                      <span>{SERIES_ARTICLES.length + i + 1}. Forthcoming</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="paper-body prose" ref={bodyRef}>
              <p className="standfirst pretty">{article.standfirst}</p>

              {article.sections.map((s) => (
                <section key={s.id} id={s.id} className="paper-section" data-reveal="">
                  <h2 className={s.minor ? 'visually-hidden' : 'balance'}>{s.title}</h2>
                  {s.blocks.map((b, i) => <BlockView key={i} b={b} />)}
                </section>
              ))}

              <div className="tag-row">
                {article.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              <div className="paper-download">
                <div>
                  <p className="mono-label">Take it with you</p>
                  <p>
                    The full paper, typeset for print and offline reading —
                    {' '}{article.classification.toLowerCase()} release, {article.version.toLowerCase()}.
                  </p>
                </div>
                <a className="btn btn--primary" href={article.pdf} download>
                  <Icon name="download" /> Download the PDF
                </a>
              </div>

              <div className="cite-block">
                <span className="mono-label">Suggested citation</span>
                <p>
                  <code>
                    Kutumela, G. ({article.published.slice(0, 4)}). {article.title}: {article.subtitle}.{' '}
                    {series
                      ? `${SERIES_NAME}, article ${article.number} of ${SERIES_LENGTH}. `
                      : `${PERSPECTIVE_LABEL}. `}
                    {ORG_LEGAL}. Available at {url}
                  </code>
                </p>
              </div>

              <p className="note">
                <strong>Published as a public good.</strong> This paper is released under{' '}
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
                  CC BY 4.0
                </a>{' '}
                and may be shared and quoted with attribution to {ORG_LEGAL}. It is provided for general
                information and does not constitute a certification, assurance opinion or endorsement of any
                system, product or jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="author-card" data-reveal="">
            <img
              className="author-card__photo"
              src={AUTHOR.photo}
              alt=""
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
            />
            <div className="flow">
              <p className="eyebrow">About the author</p>
              <h2 className="balance">{AUTHOR.name}</h2>
              <p className="mono-label">{AUTHOR.role}, {ORG}</p>
              <p className="text-muted">{AUTHOR.quals}</p>
              <p className="pretty">{AUTHOR.bio}</p>
              <div className="cluster">
                <a className="btn btn--ghost" href={`mailto:${EMAIL}`}>Contact the Foundation</a>
                <Link className="btn btn--ghost" to="/about">About the Foundation<ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`series-nav${series ? '' : ' series-nav--single'}`} data-reveal="">
            <div>{prev && <SeriesCard a={prev} label="← Previous in series" />}</div>
            <div className="series-nav__centre">
              <Link className="series-card series-card--centre" to="/research#insights">
                <span className="mono-label series-card__label">All insights</span>
                <span className="series-card__title">Research library</span>
              </Link>
            </div>
            <div className="series-nav__end">{next && <SeriesCard a={next} label="Next in series →" />}</div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Independent assurance only works if it stays independent."
        text="The Foundation publishes its research as a public good. Partnership and funding keep it that way."
        primary={['Partner with us', '/get-involved#partner']}
        secondary={['Support our work', '/support-our-work']}
      />
    </>
  );
}
