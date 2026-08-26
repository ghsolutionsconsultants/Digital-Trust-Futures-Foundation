import { Helmet } from 'react-helmet-async';
import { SITE, ORG, OG_IMAGE, fullTitle, ORG_JSONLD } from '../../data/siteConfig';

interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
  jsonldExtra?: object;
}

export function SeoHead({ title, description, canonical, jsonldExtra }: SeoHeadProps) {
  const ft = fullTitle(title);
  const canonicalUrl = `${SITE}/${canonical}`;

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
