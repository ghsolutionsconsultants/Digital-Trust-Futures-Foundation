import { Link } from 'react-router-dom';
import { SeoHead } from '../components/ui/SeoHead';
import { ArrowIcon } from '../components/ui/Icon';

export default function NotFound() {
  return (
    <>
      <SeoHead
        title="Page not found"
        description="The page you requested could not be found."
        canonical="404.html"
      />

      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="not-found-card" data-reveal="">
            <p className="eyebrow">404 — Not found</p>
            <h1 className="balance">This page does not exist.</h1>
            <p className="lede mt-4">The address you requested is not on this site. It may have moved, or the link may be outdated.</p>
            <div className="cluster mt-8">
              <Link className="btn btn--primary btn--lg" to="/">Return home<ArrowIcon /></Link>
              <Link className="btn btn--ghost" to="/what-we-do">What we do<ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
