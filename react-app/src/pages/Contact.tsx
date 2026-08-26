import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon } from '../components/ui/Icon';

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact"
        description="Contact the Digital Trust Futures Foundation with enquiries about programmes, partnerships, funding, careers and general information."
        canonical="contact.html"
      />

      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="For all enquiries about programmes, partnerships, funding, research, open source, careers and general information."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'start' }}>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Write to us</p>
              <h2 className="balance">One address for all enquiries</h2>
              <p className="text-muted">All enquiries go to the same address. We route them to the right person — government partners and DPG maintainers to the programme team, funders to partnerships, researchers to the evidence centre, and careers enquiries to the executive office.</p>
              <p className="mt-5"><a className="btn btn--accent btn--lg" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org<ArrowIcon /></a></p>

              <div className="mt-8 flow">
                <h3>Common enquiries</h3>
                <ul className="check-list mt-4">
                  <li><strong>Government partners and DPI teams</strong> — use the <Link to="/get-involved#partner">Get involved</Link> form which routes to the programme team.</li>
                  <li><strong>Funders and development partners</strong> — see the <Link to="/support-our-work">investment package</Link> first, then write directly.</li>
                  <li><strong>DPG and open-source maintainers</strong> — use the <Link to="/get-involved#support">support request form</Link>.</li>
                  <li><strong>Civil-society organisations</strong> — see the <Link to="/get-involved#helpdesk">helpdesk pathway</Link>.</li>
                  <li><strong>Researchers and fellows</strong> — see <Link to="/get-involved#careers">Careers and fellowships</Link>.</li>
                  <li><strong>Security disclosures</strong> — please follow the <Link to="/security">vulnerability disclosure policy</Link>.</li>
                  <li><strong>Media enquiries</strong> — write directly to the address above with "Media" in the subject line.</li>
                </ul>
              </div>
            </div>

            <div data-reveal="">
              <h3>Send an enquiry</h3>
              <p className="text-muted mt-3">The enquiry form on the <Link to="/get-involved">Get involved page</Link> routes your message to the right team based on what you select. It is the fastest way to reach the correct person.</p>
              <div className="mt-5">
                <Link className="btn btn--primary" to="/get-involved#enquiry">Go to the enquiry form<ArrowIcon /></Link>
              </div>

              <div className="callout mt-7">
                <h3>Response times</h3>
                <ul className="dot-list mt-4">
                  <li>General enquiries: within five working days.</li>
                  <li>Funding and partnership requests: within ten working days.</li>
                  <li>Security disclosures: within three working days (see <Link to="/security">disclosure policy</Link>).</li>
                  <li>Civil society and DPG helpdesk: within five working days.</li>
                </ul>
              </div>

              <div className="note mt-6"><strong>No marketing, no unsolicited follow-up.</strong> Writing to the Foundation does not add you to a mailing list. If you want to receive updates, sign up via the <Link to="/news#newsletter">newsletter form</Link>.</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what you are trying to protect."
        text="Governments, maintainers, funders and civil-society organisations all start the same way: with a system and a concern."
        primary={['Use the enquiry form', '/get-involved']}
        secondary={['Support our work', '/support-our-work']}
      />
    </>
  );
}
