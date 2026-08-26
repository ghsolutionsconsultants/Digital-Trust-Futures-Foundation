import { SeoHead } from '../../components/ui/SeoHead';
import { PageHero } from '../../components/ui/PageHero';

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  eyebrow: string;
  lede: string;
  sections: LegalSection[];
  slug: string;
}

const LEGAL_NOTE = (
  <div className="legal-banner" role="note">
    <strong>Draft pending legal review.</strong> This policy is published in draft so that the Foundation's intended
    practice is visible from launch. It will be finalised by qualified legal counsel before the Foundation processes
    personal data at scale, and the effective date below will be updated when it is.
  </div>
);

export function LegalPage({ title, eyebrow, lede, sections, slug }: LegalPageProps) {
  return (
    <>
      <SeoHead
        title={title}
        description={lede}
        canonical={`legal/${slug}.html`}
      />

      <PageHero
        eyebrow={eyebrow}
        title={title}
        lede={lede}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Legal' }, { label: title }]}
      />

      <section className="section">
        <div className="container container--narrow">
          {LEGAL_NOTE}
          <div className="prose mt-7" data-reveal="">
            <p className="mono-label">Version 0.1 · Published August 2026 · Next review on legal sign-off</p>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}
            <h2>Questions about this policy</h2>
            <p>Write to <a href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a>. If you are not satisfied with our response, you may complain to the relevant supervisory authority — in South Africa, the Information Regulator.</p>
          </div>
        </div>
      </section>
    </>
  );
}

// Privacy Policy
export function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      eyebrow="Legal"
      lede="The Foundation collects as little personal data as it can, keeps it for as short a time as it can, and never sells or shares it for marketing."
      slug="privacy"
      sections={[
        { heading: 'Who we are', body: '<p>Digital Trust Futures Foundation NPC, a non-profit company registered in South Africa, is the responsible party for personal information processed through this website and in the course of its programmes.</p>' },
        { heading: 'What data we collect', body: '<p>Through the website: names, email addresses, job titles, organisations and countries submitted through contact and enquiry forms. Newsletter subscriptions require an email address and explicit consent only. The site stores one value in your browser: your light or dark theme preference (not a cookie — a localStorage value). No analytics, tracking or advertising data is collected.</p><p>Through programme work: the Foundation may collect personal data from programme participants, research subjects and beneficiaries under separate, programme-specific consent and data-sharing arrangements that comply with applicable law.</p>' },
        { heading: 'Why we process it', body: '<p>Form submissions: to respond to enquiries and route them to the relevant team member. Newsletter: to send occasional updates to people who have subscribed. Programme work: under the specific legal basis documented in each programme charter.</p>' },
        { heading: 'Who processes it on our behalf', body: '<p>Web3Forms processes form submissions and delivers them to our email address. It acts as a processor under our instruction and does not use submissions for any other purpose. No other third party processes data collected through this website.</p>' },
        { heading: 'How long we keep it', body: '<p>Enquiry submissions: retained for as long as necessary to manage the relevant relationship, and then deleted. Newsletter addresses: until you unsubscribe, at which point they are deleted within 30 days. Theme preference: stored locally in your browser and deleted when you clear your browser data.</p>' },
        { heading: 'Your rights', body: '<p>Under applicable data protection law, you may have the right to access, correct, delete, restrict or port your personal data, and to object to certain processing. To exercise these rights, write to info@digitaltrustfuturesfoundation.org.</p>' },
        { heading: 'Security', body: '<p>The Foundation uses HTTPS for all data in transit and appropriate technical and organisational measures to protect data at rest. Form data is transmitted directly to Web3Forms over HTTPS and is not stored on this website.</p>' },
        { heading: 'Changes to this policy', body: '<p>Material changes will be noted in the version number and publication date above. The current version is always at this URL.</p>' },
      ]}
    />
  );
}

// Cookies Policy
export function Cookies() {
  return (
    <LegalPage
      title="Cookies and local storage"
      eyebrow="Legal"
      lede="This website does not set cookies. It stores one value — your theme preference — in your browser's local storage."
      slug="cookies"
      sections={[
        { heading: 'No cookies', body: '<p>This website does not set or read any cookies — not for analytics, advertising, session management or any other purpose. You will not see a cookie banner because there are no cookies to consent to.</p>' },
        { heading: 'Local storage', body: '<p>The only browser-stored value is your light or dark theme preference, held in <code>localStorage</code> under the key <code>dtff-theme</code>. This value never leaves your device. It is not transmitted to the server. It is not shared with anyone. To delete it, clear your browser\'s local storage or site data.</p>' },
        { heading: 'Web3Forms', body: '<p>When you submit a form, the data is sent to Web3Forms. Web3Forms does not set cookies on this website. Any cookies set by their service are subject to their own privacy documentation.</p>' },
        { heading: 'Changes', body: '<p>If the Foundation ever introduces cookies, this policy will be updated and a consent mechanism will be added before any cookies are set.</p>' },
      ]}
    />
  );
}

// Terms of Use
export function Terms() {
  return (
    <LegalPage
      title="Terms of use"
      eyebrow="Legal"
      lede="Conditions for using this website and the materials published on it."
      slug="terms"
      sections={[
        { heading: 'Use of this site', body: '<p>This website is operated by Digital Trust Futures Foundation NPC for information and public-interest purposes. By using it you agree to these terms.</p>' },
        { heading: 'Intellectual property', body: '<p>Content, research and toolkits published by the Foundation are released under Creative Commons Attribution 4.0 International (CC BY 4.0) unless a specific page or resource states otherwise. You may share and adapt the material, including commercially, provided you give appropriate credit and indicate any changes made.</p><p>The Digital Trust Futures Foundation name, logo and wordmark are not covered by the open licence. Please ask before using them.</p><p>Software released by the Foundation is published under the licence stated in the relevant repository.</p>' },
        { heading: 'Third-party content', body: '<p>Where the Foundation links to external sites, publications or resources, it does not endorse or take responsibility for those materials. External links are provided for information only.</p>' },
        { heading: 'Accuracy and availability', body: '<p>The Foundation takes care to ensure accuracy but does not guarantee that information is complete, current or free of error. Content may be updated without notice. The site may be unavailable during maintenance.</p>' },
        { heading: 'Forms and submissions', body: '<p>Form submissions are subject to the privacy policy. Submitting a form does not create a legal relationship or contractual obligation. The Foundation will respond to enquiries in good faith but is under no obligation to accept any particular engagement.</p>' },
        { heading: 'Limitation of liability', body: '<p>The Foundation accepts no liability for loss or damage arising from use of this site or reliance on its content, to the extent permitted by applicable law.</p>' },
        { heading: 'Governing law', body: '<p>These terms are governed by the laws of South Africa. Disputes are subject to the jurisdiction of the South African courts.</p>' },
      ]}
    />
  );
}

// Safeguarding Policy
export function Safeguarding() {
  return (
    <LegalPage
      title="Safeguarding policy"
      eyebrow="Legal"
      lede="The Foundation's commitment to protecting children, vulnerable adults and programme participants from harm."
      slug="safeguarding"
      sections={[
        { heading: 'Purpose', body: '<p>Digital Trust Futures Foundation is committed to safeguarding the welfare of children, vulnerable adults and anyone who participates in or is affected by its programmes. This policy sets out the Foundation\'s commitment and the minimum standards that apply to all staff, fellows, contractors and partners.</p>' },
        { heading: 'Scope', body: '<p>This policy applies to all Foundation staff, secondees, fellows, volunteers, contractors, consultants and partner organisations delivering Foundation activities. It covers direct contact with participants and the handling of data about vulnerable individuals.</p>' },
        { heading: 'Core commitments', body: '<ul><li>The Foundation takes a zero-tolerance approach to abuse, exploitation and harm.</li><li>Safeguarding concerns are reported, not managed informally.</li><li>Citizen-harm evidence and case data are handled with minimisation, anonymisation, consent and referral protocols.</li><li>A named Safeguarding and Ethics Officer is responsible for receiving and escalating concerns.</li></ul>' },
        { heading: 'Reporting a concern', body: '<p>Safeguarding concerns relating to Foundation activities should be reported to the Safeguarding and Ethics Officer at <a href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a>. Concerns about individuals at immediate risk should be reported to the relevant local authorities immediately.</p>' },
        { heading: 'Review', body: '<p>This policy will be reviewed annually and updated whenever significant programme changes occur. The version number and date above reflect the current draft.</p>' },
      ]}
    />
  );
}
