import { SeoHead } from '../components/ui/SeoHead';
import { PageHero } from '../components/ui/PageHero';

const PHOTO_CREDITS = [
  ['city-aerial-port.jpg', 'Alex Levis'], ['fibre-optic.jpg', 'Brett Sayles'],
  ['datacentre-corridor.jpg', 'Brett Sayles'], ['server-racks.jpg', 'panumas nikhomkhai'],
  ['code-screen.jpg', 'Markus Spiske'], ['card-catalogue.jpg', 'cottonbro studio'],
  ['archive-drawers.jpg', 'Element5 Digital'], ['classroom-backs.jpg', 'cottonbro studio'],
  ['tablet-hands.jpg', 'Dan Nelson'], ['payment-hands.jpg', 'Kaboompics'],
  ['auditorium.jpg', 'Skills Media'], ['council-chamber.jpg', 'Werner Pfennig'],
  ['telecom-tower.jpg', 'Edouard Matte'], ['fingerprint-cards.jpg', 'Towfiqu barbhuiya'],
  ['network-cables.jpg', 'Brett Sayles'], ['market-stall.jpg', 'marie frank'],
  ['fibre-streaks.jpg', 'Julien Tromeur'], ['solar-aerial.jpg', 'Charl Durand'],
  ['light-streaks.jpg', 'Aedrian Salazar'], ['street-market.jpg', 'David Iloba'],
];

export default function Credits() {
  return (
    <>
      <SeoHead
        title="Credits and colophon"
        description="Attribution for the photography, typefaces and tooling used to build this website, and a note on the licences that apply to the Foundation's own material."
        canonical="credits.html"
      />

      <PageHero
        eyebrow="Credits and colophon"
        title="What this site is made of"
        lede="Attribution for the photography, typefaces and tooling used to build this website, and a note on the licences that apply to the Foundation's own material."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Credits' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split split--sticky">
            <div data-reveal=""><p className="eyebrow">Typography</p><h2 className="balance">Typefaces</h2></div>
            <div className="prose" data-reveal="">
              <p>All typefaces are self-hosted from this origin. No requests are made to third-party font services, so visiting this site does not disclose your address to anyone but us.</p>
              <ul>
                <li><strong>Newsreader</strong> — display and headings. SIL Open Font License 1.1.</li>
                <li><strong>Inter</strong> — body and interface text. SIL Open Font License 1.1.</li>
                <li><strong>IBM Plex Mono</strong> — labels, data and technical detail. SIL Open Font License 1.1.</li>
              </ul>
              <p>Latin and Latin Extended subsets are served, which covers English, French and Portuguese — the languages prioritised for the Foundation's multilingual roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">Photography</p>
            <h2 className="balance">Image credits</h2>
            <p>Photography is licensed under the Pexels License, which permits free use without attribution. We credit photographers anyway.</p>
          </div>
          <div className="table-wrap" data-reveal="">
            <table><caption>Photography used on this site</caption>
              <thead><tr><th scope="col">File</th><th scope="col">Photographer</th><th scope="col">Source</th></tr></thead>
              <tbody>{PHOTO_CREDITS.map(([f, who]) => <tr key={f}><td><code>{f}</code></td><td>{who}</td><td>Pexels</td></tr>)}</tbody>
            </table>
          </div>
          <p className="note mt-6" data-reveal=""><strong>A note on imagery.</strong> The Foundation's guidance favours real programme, field and team photography over generic stock. Until programme photography exists, stock imagery is used with two rules: no identifiable faces, and nothing that misrepresents a person, place or organisation as a partner or beneficiary of the Foundation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split--even" style={{ alignItems: 'start' }}>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Licensing</p>
              <h2 className="balance">The Foundation's own material</h2>
              <div className="callout mt-6"><h3>Text, research and toolkits</h3><p>Creative Commons Attribution 4.0 International (CC BY 4.0) unless a specific resource states otherwise.</p></div>
              <div className="callout callout--teal mt-4"><h3>Software</h3><p>Grant-funded software is released under a recognised OSI-approved licence, stated in each repository.</p></div>
              <div className="callout callout--navy mt-4"><h3>Brand assets</h3><p>The Digital Trust Futures Foundation name, logo and wordmark are not covered by the open licences above. Please ask before using them.</p></div>
            </div>
            <div className="flow" data-reveal="">
              <p className="eyebrow">Build</p>
              <h2 className="balance">How the site is built</h2>
              <div className="prose">
                <p>Built with React, TypeScript and Vite. A client-side application with no server-side processing, no database and no user accounts.</p>
                <ul>
                  <li>Type-safe TypeScript throughout.</li>
                  <li>Respects <code>prefers-reduced-motion</code> and <code>prefers-color-scheme</code>.</li>
                  <li>No tracking, no third-party embeds and no cookie banner — because there is nothing to consent to beyond a theme preference stored in your own browser.</li>
                  <li>All assets self-hosted; no CDN, font service or analytics provider contacted on page load.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
