import { Link, useSearchParams } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { ArrowIcon } from '../components/ui/Icon';

export default function ThankYou() {
  const [params] = useSearchParams();
  const isNewsletter = params.get('t') === 'newsletter';

  return (
    <>
      <SeoHead
        title="Thank you"
        description="Your submission has been received."
        canonical="thank-you.html"
      />

      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="thank-you-card" data-reveal="">
            <p className="eyebrow">{isNewsletter ? 'Newsletter' : 'Enquiry'} received</p>
            <h1 className="balance">{isNewsletter ? 'You are on the list.' : 'We have received your message.'}</h1>
            <p className="lede mt-4">
              {isNewsletter
                ? 'We will send you a confirmation shortly. You will hear from us only when there is something substantive to report — no filler, no marketing.'
                : 'We aim to respond within five working days. If your enquiry is time-sensitive or relates to a security matter, please also write directly to info@digitaltrustfuturesfoundation.org.'}
            </p>
            <div className="cluster mt-8">
              <Link className="btn btn--primary btn--lg" to="/">Return home<ArrowIcon /></Link>
              <Link className="btn btn--ghost" to="/programmes">Read the programmes<ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
