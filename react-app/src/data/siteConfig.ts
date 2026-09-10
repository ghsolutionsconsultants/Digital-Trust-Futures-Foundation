export const SITE = 'https://digitaltrustfuturesfoundation.org';
export const ORG_LEGAL = 'Digital Trust Futures Foundation NPC';
export const ORG = 'Digital Trust Futures Foundation';
export const TAGLINE = 'Safe infrastructure. Trusted technology. Inclusive digital futures.';
export const EMAIL = 'info@digitaltrustfuturesfoundation.org';
export const YEAR = new Date().getFullYear().toString();

export const OG_IMAGE = `${SITE}/assets/img/og-image.png`;

export function fullTitle(title: string): string {
  return title.includes(ORG) ? title : `${title} — ${ORG}`;
}

export const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: ORG,
  legalName: ORG_LEGAL,
  alternateName: 'DTFF',
  url: `${SITE}/`,
  logo: `${SITE}/assets/img/logo-full.png`,
  slogan: TAGLINE,
  description:
    'An independent, non-profit public-benefit organisation strengthening the safety, security, inclusion and trustworthiness of digital public infrastructure, digital public goods, open-source technology and AI-enabled public services.',
  foundingDate: '2026',
  address: { '@type': 'PostalAddress', addressCountry: 'ZA' },
  areaServed: ['Africa', 'Global South'],
  knowsAbout: [
    'Digital public infrastructure',
    'Digital public goods',
    'Cybersecurity assurance',
    'AI governance',
    'Digital identity',
    'Payment security',
    'Open-source security',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'general enquiries',
    email: EMAIL,
    availableLanguage: ['en', 'fr'],
  },
};
