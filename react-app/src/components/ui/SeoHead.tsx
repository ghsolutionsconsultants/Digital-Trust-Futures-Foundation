import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE, ORG, OG_IMAGE, fullTitle, ORG_JSONLD } from '../../data/siteConfig';

interface SeoHeadProps {
  title: string;
  description: string;
  /** Optional override. Normally omitted: the canonical is taken from the live
   *  route, so it can never disagree with the URL actually being served. */
  canonical?: string;
  jsonldExtra?: object;
}

/** Routes are extensionless. Callers may still pass legacy ".html" values, so
 *  normalise them rather than advertising a URL that only exists as a redirect. */
function toPath(value: string): string {
  const v = value.replace(/^\/+/, '');
  if (v === '' || v === 'index.html' || v === 'index') return '/';
  return '/' + v.replace(/\.html$/, '');
}

export function SeoHead({ title, description, canonical, jsonldExtra }: SeoHeadProps) {
  const { pathname } = useLocation();
  const ft = fullTitle(title);
  const path = canonical ? toPath(canonical) : pathname;
  const canonicalUrl = SITE + (path === '/' ? '/' : path);

  return (
    <Helmet>
      <title>{ft}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={ORG} />
      <meta property="og:title" content={ft} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ft} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(ORG_JSONLD)}</script>
      {jsonldExtra && (
        <script type="application/ld+json">{JSON.stringify(jsonldExtra)}</script>
      )}
    </Helmet>
  );
}
