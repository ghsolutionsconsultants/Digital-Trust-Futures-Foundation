import { SeoHead } from '../components/ui/SeoHead';
import { PageHero, CtaBand } from '../components/ui/PageHero';
import { ArrowIcon } from '../components/ui/Icon';

export default function Security() {
  return (
    <>
      <SeoHead
        title="Security disclosure policy"
        description="How to report a vulnerability to the Digital Trust Futures Foundation, what we will do with it, the safe harbour statement, and how our own website is built."
        canonical="security.html"
      />

      <PageHero
        eyebrow="Vulnerability disclosure"
        title="Security disclosure policy"
        lede="A digital trust organisation should model the practice it asks of others. This policy sets out how to report a vulnerability to the Foundation, what we will do with it, and what we ask of you in return."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Security' }]}
        metaHtml={
          <div className="page-hero-meta">
            <span className="pill pill--light">Reports acknowledged within 3 working days</span>
            <span className="pill pill--light">Coordinated disclosure</span>
            <span className="pill pill--light">Credit on request</span>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal="">
              <p className="eyebrow">How to report</p>
              <h2 className="balance">Send it to one address</h2>
              <div className="mt-6">
                <a className="btn btn--accent btn--lg" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org<ArrowIcon /></a>
              </div>
              <p className="note mt-6"><strong>Machine-readable.</strong> This policy is also referenced from <code>/.well-known/security.txt</code>.</p>
            </div>
            <div className="prose" data-reveal="">
              <h2>What to include</h2>
              <ul>
                <li>The affected asset: a URL, endpoint, repository or project name.</li>
                <li>A description of the issue and its likely impact.</li>
                <li>Steps to reproduce, with any proof-of-concept kept to the minimum needed to demonstrate the issue.</li>
                <li>Whether you would like to be credited in any resulting advisory, and under what name.</li>
              </ul>
              <h2>What we will do</h2>
              <ul>
                <li><strong>Acknowledge</strong> your report within three working days.</li>
                <li><strong>Triage</strong> and give you an initial assessment, normally within ten working days.</li>
                <li><strong>Coordinate</strong> remediation with the maintainer or operator, and agree a disclosure window with you.</li>
                <li><strong>Publish</strong> an advisory once remediation is available, including low-severity findings.</li>
                <li><strong>Credit</strong> you by name or handle if you would like that, or keep you anonymous if you would not.</li>
              </ul>
              <h2>What we ask of you</h2>
              <ul>
                <li>Give us reasonable time to remediate before public disclosure.</li>
                <li>Do not access, modify or exfiltrate data that does not belong to you, and stop as soon as you have established that access is possible.</li>
                <li>Do not degrade service for others: no denial-of-service, spam, social engineering of staff, or physical attacks.</li>
                <li>Do not use automated scanning that generates significant load without contacting us first.</li>
                <li>If you encounter personal data, stop, do not retain it, and tell us what you saw.</li>
              </ul>
              <h2>Safe harbour</h2>
              <p>Where research is conducted in good faith and in accordance with this policy, the Foundation will not pursue or support legal action against you, and will treat your activity as authorised.</p>
              <h2>Scope</h2>
              <ul>
                <li><strong>In scope:</strong> this website and its infrastructure; repositories and releases published by the Foundation; and projects the Foundation formally supports, where the maintainer has agreed to route reports through us.</li>
                <li><strong>Out of scope:</strong> third-party services the Foundation merely links to; findings requiring physical access to a device or premises; social engineering of staff, fellows or partners; and reports consisting only of automated-scanner output without demonstrated impact.</li>
              </ul>
              <h2>Reports about systems we assess</h2>
              <p>If your report concerns a government system or a digital public good that the Foundation has assessed, tell us and we will route it to the responsible operator or maintainer under coordinated disclosure.</p>
              <h2>No bounty programme</h2>
              <p>The Foundation is a non-profit organisation and does not currently operate a paid bug bounty. We offer acknowledgement, credit and a straight answer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Our own posture</p>
            <h2 className="balance">How this website is built</h2>
            <p>As a digital trust organisation, our own site should meet the standard we ask of others.</p>
          </div>
          <div className="grid grid-3" data-reveal-stagger="">
            <article className="card"><h3 className="card-title">No third-party requests while you browse</h3>
              <p>Fonts, scripts, styles and images are served from this origin. The single exception is deliberate and user-initiated: submitting a form posts it to Web3Forms, our form-delivery processor.</p>
            </article>
            <article className="card"><h3 className="card-title">No tracking, no cookies by default</h3>
              <p>The site sets no cookies for analytics, advertising or profiling. The only stored value is your light or dark theme preference, kept in your own browser.</p>
            </article>
            <article className="card"><h3 className="card-title">Built with React and Vite</h3>
              <p>A client-side rendered React application with no server-side form processing, no database and no user accounts — which removes whole classes of risk rather than mitigating them.</p>
            </article>
            <article className="card"><h3 className="card-title">Accessible by requirement</h3>
              <p>Built to WCAG 2.1 AA: keyboard operable, screen-reader labelled, contrast-checked, and fully functional with motion reduced.</p>
            </article>
            <article className="card"><h3 className="card-title">Transport security</h3>
              <p>HTTPS everywhere with a strong TLS configuration, HSTS, and a content security policy restricting sources to this origin.</p>
            </article>
            <article className="card"><h3 className="card-title">Dependency scanning</h3>
              <p>The site's own codebase is subject to dependency and vulnerability scanning consistent with the Foundation's secure development guidance.</p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Found something? Tell us before you tell the internet."
        text="Coordinated disclosure protects the people using the system while it is being fixed."
        primary={['Report a vulnerability', 'mailto:info@digitaltrustfuturesfoundation.org']}
        secondary={['Contact the Foundation', '/contact']}
      />
    </>
  );
}
