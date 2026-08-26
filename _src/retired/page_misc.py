# -*- coding: utf-8 -*-
from shell import ARROW, icon, cta_band, page_hero, breadcrumb

TOPICS = [
    ("chart", "Partnerships and funding",
     "Funders, development partners, government MOUs and programme partnerships."),
    ("shield-check", "DPI assessments and safeguards",
     "Governments and DPI programme teams seeking assessments or safeguards support."),
    ("branch", "Open source",
     "Digital public goods and open-source maintainers seeking security or sustainability support."),
    ("book", "Research",
     "Peer review, replication requests, university collaboration and fellowship enquiries."),
    ("buoy", "Civil-society support",
     "Nonprofits and community organisations needing practical cyber support."),
    ("cap", "People and careers",
     "Fellowships, graduate programme and roles as they open."),
    ("megaphone", "Media",
     "Journalists and researchers. We do not comment on unpublished assessments or on named partners without consent."),
    ("lock", "Security disclosure",
     "Vulnerability reports about this website or a project the Foundation supports \u2014 please read the disclosure policy first."),
]

EMAIL = "info@digitaltrustfuturesfoundation.org"



def contact():
    crumbs = breadcrumb([("Home", "index.html"), ("Contact", None)], "")
    cards = "".join(
        f"""<article class="contact-card">
      <div class="icon-badge icon-badge--{'orange' if i % 3 == 1 else ('teal' if i % 3 == 2 else '')}">{icon(ic)}</div>
      <h3 class="card-title">{name}</h3>
      <p>{desc}</p>
    </article>"""
        for i, (ic, name, desc) in enumerate(TOPICS))

    hero = page_hero(
        eyebrow="Contact",
        title="One address, and a person on the other end",
        lede="Every enquiry reaches the Foundation at a single inbox. Tell us in the subject line what it is about "
             "and it goes to whoever can actually help \u2014 rather than sitting in a queue nobody owns.",
        crumbs_html=crumbs,
        meta_html=f'<div class="page-hero-meta">'
                  f'<span class="pill pill--light">{EMAIL}</span></div>')

    body = f"""{hero}

<section class="section">
  <div class="container">
    <div class="contact-strip" data-reveal>
      <div>
        <p class="eyebrow">Get in touch</p>
        <h2 class="balance" style="font-size:var(--step-3)">Write to us about anything below</h2>
        <p class="text-muted mt-4">Naming the topic in your subject line is the fastest route to the right person.
          If you are not sure which it is, send it anyway &mdash; we would rather redirect an enquiry than miss a
          system that needs looking at.</p>
      </div>
      <div class="cluster">
        <a class="btn btn--accent btn--lg" href="mailto:{EMAIL}">{EMAIL}{ARROW}</a>
        <a class="btn btn--ghost btn--lg" href="get-involved.html">Use the enquiry form{ARROW}</a>
      </div>
    </div>

    <h2 class="visually-hidden">What to contact us about</h2>
    <div class="grid grid-4 mt-8" data-reveal-stagger>{cards}</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="split split--even" style="align-items:start">
      <div class="flow" data-reveal>
        <p class="eyebrow">Organisation details</p>
        <h2 class="balance">Registered information</h2>
        <dl class="deflist mt-6">
          <div><dt>Legal name</dt><dd><strong>Digital Trust Futures Foundation NPC</strong></dd></div>
          <div><dt>Public name</dt><dd>Digital Trust Futures Foundation (DTFF)</dd></div>
          <div><dt>Legal form</dt><dd>Non-profit company (NPC) registered in South Africa. NPO and public-benefit
            organisation (PBO) status to be pursued subject to specialist legal and tax advice.</dd></div>
          <div><dt>Jurisdiction</dt><dd>South Africa</dd></div>
          <div><dt>Registration number</dt><dd>To be published once registration is confirmed.</dd></div>
          <div><dt>Registered address</dt><dd>To be published once confirmed.</dd></div>
          <div><dt>Data protection</dt><dd>Mark enquiries about personal data
            <strong>Privacy</strong> in the subject line.</dd></div>
        </dl>
        <p class="note mt-6"><strong>Why some fields are blank.</strong> The Foundation publishes registration and
          address detail only once it is confirmed and legally reviewed. An organisation asking others to be
          transparent should not fill gaps with placeholders.</p>
      </div>

      <div class="flow" data-reveal>
        <div class="security-callout">
          <div class="icon-badge icon-badge--orange">{icon("lock")}</div>
          <h3>Reporting a security issue</h3>
          <p class="mt-3">If you have found a vulnerability in this website or in a project the Foundation supports,
            please use the disclosure route rather than the general contact form. Reports are acknowledged and handled
            under a coordinated disclosure process.</p>
          <div class="cluster mt-6">
            <a class="btn btn--accent" href="security.html">Disclosure policy{ARROW}</a>
            <a class="btn btn--ghost" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org{ARROW}</a>
          </div>
        </div>

        <div class="callout mt-6"><h3>Media enquiries</h3>
          <p>Journalists and researchers are welcome. Mark your message <strong>Media</strong> in the subject line.
            We do not comment on unpublished assessments, on named partners without their consent, or on specific
            vulnerabilities before coordinated disclosure is complete.</p></div>

        <div class="callout callout--teal mt-6"><h3>Safeguarding concerns</h3>
          <p>Concerns about the conduct of Foundation staff, fellows or partners should be marked
            <strong>Safeguarding &mdash; for the attention of the Safeguarding and Ethics Officer</strong> in the
            subject line. If you need a channel that is not read by the wider team, say so in the first line and a
            private route will be arranged before you share any detail. See the
            <a href="legal/safeguarding.html">safeguarding policy</a>.</p></div>
      </div>
    </div>
  </div>
</section>

{cta_band("", title="Tell us what you are trying to protect.", text="Governments, maintainers, funders and civil-society organisations all start the same way: with a system and a concern.", primary=("Use the enquiry form", "get-involved.html"), secondary=("Support our work", "support-our-work.html"))}
"""
    return body


# ── Security / vulnerability disclosure ──────────────────────────────────────
def security():
    crumbs = breadcrumb([("Home", "index.html"), ("Security", None)], "")

    hero = page_hero(
        eyebrow="Vulnerability disclosure",
        title="Security disclosure policy",
        lede="A digital trust organisation should model the practice it asks of others. This policy sets out how to "
             "report a vulnerability to the Foundation, what we will do with it, and what we ask of you in return.",
        crumbs_html=crumbs,
        meta_html='<div class="page-hero-meta">'
                  '<span class="pill pill--light">Reports acknowledged within 3 working days</span>'
                  '<span class="pill pill--light">Coordinated disclosure</span>'
                  '<span class="pill pill--light">Credit on request</span></div>')

    body = f"""{hero}

<section class="section">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">How to report</p>
        <h2 class="balance">Send it to one address</h2>
        <div class="mt-6">
          <a class="btn btn--accent btn--lg" href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org{ARROW}</a>
        </div>
        <p class="note mt-6"><strong>Machine-readable.</strong> This policy is also referenced from
          <code>/.well-known/security.txt</code>.</p>
      </div>

      <div class="prose" data-reveal>
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
          <li><strong>Coordinate</strong> remediation with the maintainer or operator, and agree a disclosure window
            with you.</li>
          <li><strong>Publish</strong> an advisory once remediation is available, including low-severity findings.</li>
          <li><strong>Credit</strong> you by name or handle if you would like that, or keep you anonymous if you would
            not.</li>
        </ul>

        <h2>What we ask of you</h2>
        <ul>
          <li>Give us reasonable time to remediate before public disclosure.</li>
          <li>Do not access, modify or exfiltrate data that does not belong to you, and stop as soon as you have
            established that access is possible.</li>
          <li>Do not degrade service for others: no denial-of-service, spam, social engineering of staff, or physical
            attacks.</li>
          <li>Do not use automated scanning that generates significant load without contacting us first.</li>
          <li>If you encounter personal data, stop, do not retain it, and tell us what you saw.</li>
        </ul>

        <h2>Safe harbour</h2>
        <p>Where research is conducted in good faith and in accordance with this policy, the Foundation will not pursue
          or support legal action against you, and will treat your activity as authorised. If a third party brings
          action against you for research conducted within this policy, we will make that authorisation clear.</p>

        <h2>Scope</h2>
        <ul>
          <li><strong>In scope:</strong> this website and its infrastructure; repositories and releases published by the
            Foundation; and projects the Foundation formally supports, where the maintainer has agreed to route reports
            through us.</li>
          <li><strong>Out of scope:</strong> third-party services the Foundation merely links to; findings requiring
            physical access to a device or premises; social engineering of staff, fellows or partners; and reports
            consisting only of automated-scanner output without demonstrated impact.</li>
        </ul>

        <h2>Reports about systems we assess</h2>
        <p>If your report concerns a government system or a digital public good that the Foundation has assessed, tell
          us and we will route it to the responsible operator or maintainer under coordinated disclosure. The Foundation
          does not publish findings about a third-party system without following that process.</p>

        <h2>No bounty programme</h2>
        <p>The Foundation is a non-profit organisation and does not currently operate a paid bug bounty. We offer
          acknowledgement, credit and a straight answer.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Our own posture</p>
      <h2 class="balance">How this website is built</h2>
      <p>As a digital trust organisation, our own site should meet the standard we ask of others.</p>
    </div>
    <div class="grid grid-3" data-reveal-stagger>
      <article class="card"><h3 class="card-title">No third-party requests while you browse</h3>
        <p>Fonts, scripts, styles and images are served from this origin. Reading the site contacts no content delivery
          network, font service, analytics provider or social platform. The single exception is deliberate and
          user-initiated: submitting a form posts it to Web3Forms, our form-delivery processor.</p></article>
      <article class="card"><h3 class="card-title">No tracking, no cookies by default</h3>
        <p>The site sets no cookies for analytics, advertising or profiling. The only stored value is your light or dark
          theme preference, kept in your own browser.</p></article>
      <article class="card"><h3 class="card-title">Static by design</h3>
        <p>Pages are static HTML. There is no server-side form processing, no database and no user accounts &mdash;
          which removes whole classes of risk rather than mitigating them.</p></article>
      <article class="card"><h3 class="card-title">Accessible by requirement</h3>
        <p>Built to WCAG 2.1 AA: keyboard operable, screen-reader labelled, contrast-checked, and fully functional with
          motion reduced or JavaScript disabled.</p></article>
      <article class="card"><h3 class="card-title">Transport security</h3>
        <p>HTTPS everywhere with a strong TLS configuration, HSTS, and a content security policy restricting sources to
          this origin.</p></article>
      <article class="card"><h3 class="card-title">Dependency scanning</h3>
        <p>The site&rsquo;s own codebase is subject to dependency and vulnerability scanning consistent with the
          Foundation&rsquo;s secure development guidance.</p></article>
    </div>
  </div>
</section>

{cta_band("", title="Found something? Tell us before you tell the internet.", text="Coordinated disclosure protects the people using the system while it is being fixed.", primary=("Report a vulnerability", "mailto:info@digitaltrustfuturesfoundation.org"), secondary=("Contact the Foundation", "contact.html"))}
"""
    return body


# ── Credits ──────────────────────────────────────────────────────────────────
PHOTO_CREDITS = [
    ("city-aerial-port.jpg", "Alex Levis"), ("fibre-optic.jpg", "Brett Sayles"),
    ("datacentre-corridor.jpg", "Brett Sayles"), ("server-racks.jpg", "panumas nikhomkhai"),
    ("code-screen.jpg", "Markus Spiske"), ("card-catalogue.jpg", "cottonbro studio"),
    ("archive-drawers.jpg", "Element5 Digital"), ("classroom-backs.jpg", "cottonbro studio"),
    ("tablet-hands.jpg", "Dan Nelson"), ("payment-hands.jpg", "Kaboompics"),
    ("auditorium.jpg", "Skills Media"), ("council-chamber.jpg", "Werner Pfennig"),
    ("telecom-tower.jpg", "Edouard Matte"), ("fingerprint-cards.jpg", "Towfiqu barbhuiya"),
    ("network-cables.jpg", "Brett Sayles"), ("market-stall.jpg", "marie frank"),
    ("fibre-streaks.jpg", "Julien Tromeur"), ("solar-aerial.jpg", "Charl Durand"),
    ("light-streaks.jpg", "Aedrian Salazar"), ("street-market.jpg", "David Iloba"),
]


def credits():
    crumbs = breadcrumb([("Home", "index.html"), ("Credits", None)], "")
    rows = "".join(
        f"<tr><td><code>{f}</code></td><td>{who}</td><td>Pexels</td></tr>" for f, who in PHOTO_CREDITS)

    hero = page_hero(
        eyebrow="Credits and colophon",
        title="What this site is made of",
        lede="Attribution for the photography, typefaces and tooling used to build this website, and a note on the "
             "licences that apply to the Foundation&rsquo;s own material.",
        crumbs_html=crumbs)

    body = f"""{hero}

<section class="section">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">Typography</p>
        <h2 class="balance">Typefaces</h2>
      </div>
      <div class="prose" data-reveal>
        <p>All typefaces are self-hosted from this origin. No requests are made to third-party font services, so
          visiting this site does not disclose your address to anyone but us.</p>
        <ul>
          <li><strong>Newsreader</strong> — display and headings. SIL Open Font License 1.1.</li>
          <li><strong>Inter</strong> — body and interface text. SIL Open Font License 1.1.</li>
          <li><strong>IBM Plex Mono</strong> — labels, data and technical detail. SIL Open Font License 1.1.</li>
        </ul>
        <p>Latin and Latin Extended subsets are served, which covers English, French and Portuguese &mdash; the
          languages prioritised for the Foundation&rsquo;s multilingual roadmap.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Photography</p>
      <h2 class="balance">Image credits</h2>
      <p>Photography is licensed under the Pexels License, which permits free use without attribution. We credit
        photographers anyway.</p>
    </div>
    <div class="table-wrap" data-reveal>
      <table>
        <caption>Photography used on this site</caption>
        <thead><tr><th scope="col">File</th><th scope="col">Photographer</th><th scope="col">Source</th></tr></thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
    <p class="note mt-6" data-reveal><strong>A note on imagery.</strong> The Foundation&rsquo;s guidance favours real
      programme, field and team photography over generic stock. Until programme photography exists, stock imagery is
      used with two rules: no identifiable faces, and nothing that misrepresents a person, place or organisation as a
      partner or beneficiary of the Foundation. Diagrams and icons are original.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--even" style="align-items:start">
      <div class="flow" data-reveal>
        <p class="eyebrow">Licensing</p>
        <h2 class="balance">The Foundation&rsquo;s own material</h2>
        <div class="callout mt-6"><h3>Text, research and toolkits</h3>
          <p>Creative Commons Attribution 4.0 International (CC BY 4.0) unless a specific resource states
            otherwise.</p></div>
        <div class="callout callout--teal mt-4"><h3>Software</h3>
          <p>Grant-funded software is released under a recognised OSI-approved licence, stated in each
            repository.</p></div>
        <div class="callout callout--navy mt-4"><h3>Brand assets</h3>
          <p>The Digital Trust Futures Foundation name, logo and wordmark are not covered by the open licences above.
            Please ask before using them.</p></div>
      </div>
      <div class="flow" data-reveal>
        <p class="eyebrow">Build</p>
        <h2 class="balance">How the site is built</h2>
        <div class="prose">
          <p>Static HTML, CSS and vanilla JavaScript, with no build-time framework and no runtime dependencies. There is
            no tracking, no third-party embed and no cookie banner &mdash; because there is nothing to consent to beyond
            a theme preference stored in your own browser.</p>
          <ul>
            <li>Total JavaScript: a single file, no libraries.</li>
            <li>Fully functional with JavaScript disabled.</li>
            <li>Respects <code>prefers-reduced-motion</code> and <code>prefers-color-scheme</code>.</li>
            <li>Print stylesheet included, so any page can be filed as a document.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
"""
    return body


# ── Legal pages ──────────────────────────────────────────────────────────────
LEGAL_NOTICE = """<div class="legal-banner" role="note">
  <strong>Draft pending legal review.</strong> This policy is published in draft so that the Foundation&rsquo;s intended
  practice is visible from launch. It will be finalised by qualified legal counsel before the Foundation processes
  personal data at scale, and the effective date below will be updated when it is.
</div>"""


def _legal(title, eyebrow, lede, sections, slug):
    base = "../"
    crumbs = breadcrumb([("Home", "index.html"), ("Legal", None), (title, None)], base)
    content = "".join(f"<h2>{h}</h2>{b}" for h, b in sections)
    hero = page_hero(eyebrow=eyebrow, title=title, lede=lede, crumbs_html=crumbs)
    return f"""{hero}
<section class="section">
  <div class="container container--narrow">
    {LEGAL_NOTICE}
    <div class="prose mt-7" data-reveal>
      <p class="mono-label">Version 0.1 &middot; Published {"August 2026"} &middot; Next review on legal sign-off</p>
      {content}
      <h2>Questions about this policy</h2>
      <p>Write to <a href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a>, or to
        <a href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a> for anything else. If you are
        not satisfied with our response, you may complain to the relevant supervisory authority &mdash; in South Africa,
        the Information Regulator.</p>
    </div>
  </div>
</section>
"""


def privacy():
    return _legal(
        "Privacy policy", "Legal",
        "The Foundation collects as little personal data as it can, keeps it for as short a time as it can, and never "
        "sells or shares it for marketing.",
        [
            ("Who we are", "<p>Digital Trust Futures Foundation NPC, a non-profit company registered in South Africa, "
                           "is the responsible party for personal information processed through this website and in the "
                           "course of its programmes.</p>"),
            ("What this website collects",
             "<p><strong>Nothing automatically beyond standard server logs.</strong> This site sets no analytics, "
             "advertising or profiling cookies and embeds no third-party scripts. Fonts and images are served from "
             "this origin, so simply reading the site contacts no one but us. The only external request is one you "
             "trigger yourself: submitting a form.</p>"
             "<ul><li><strong>Server logs</strong> — your IP address, request time, requested page, referrer and user "
             "agent, retained by our hosting provider for security and troubleshooting, then deleted on a short "
             "rolling schedule.</li>"
             "<li><strong>Theme preference</strong> — whether you chose the light or dark theme, stored in your own "
             "browser. It never reaches us.</li></ul>"),
            ("What you choose to send us",
             "<p>When you submit an enquiry form we process what you send: your name, email address, organisation, "
             "country, role, the topic you selected and the content of your message. We use it to respond to you and "
             "to keep a record of the engagement. The same applies to anything you email us directly.</p>"
             "<p><strong>How form submissions reach us.</strong> Forms post to "
             "<a href='https://web3forms.com'>Web3Forms</a>, a form-delivery service acting as our processor. It "
             "receives your submission, forwards it to info@digitaltrustfuturesfoundation.org, and does not use it "
             "for any other purpose. No account is created for you and no cookie is set on this site. If you would "
             "rather not involve a third party, email us directly instead &mdash; the address is on every page.</p>"),
            ("Newsletter", "<p>If you ask for updates, we process your email address on the basis of your consent. "
                           "Every message includes an unsubscribe link, and withdrawing consent is as easy as giving "
                           "it.</p>"),
            ("Citizen harm reports",
             "<p>Where the Foundation operates a harm-reporting mechanism, reports are minimised, anonymised before "
             "analysis, stored under access controls proportionate to sensitivity, and handled under consent and "
             "referral protocols. Reports are never published in identifiable form. Where someone needs help rather "
             "than analysis, they are referred rather than filed.</p>"),
            ("Legal bases",
             "<p>We rely on your consent (newsletter, optional research participation), the legitimate interests of the "
             "Foundation and its correspondents (responding to enquiries, securing our systems), and legal obligation "
             "where applicable. Processing is intended to comply with the Protection of Personal Information Act "
             "(POPIA) in South Africa and, where relevant, the General Data Protection Regulation (GDPR).</p>"),
            ("Who we share with",
             "<p>We do not sell personal information and we do not share it for marketing. We use a small number of "
             "processors, each handling data only on our instructions:</p>"
             "<ul><li><strong>GitHub Pages</strong> &mdash; website hosting and server logs.</li>"
             "<li><strong>Hostinger</strong> &mdash; email for the info@ mailbox.</li>"
             "<li><strong>Web3Forms</strong> &mdash; delivery of form submissions to that mailbox.</li></ul>"
             "<p>A newsletter platform will be added to this list when one is selected, before it is used. Where a "
             "processor is located outside South Africa, the transfer is made under appropriate safeguards.</p>"),
            ("Retention",
             "<p>Enquiry correspondence is kept for as long as the relationship requires and then archived or deleted. "
             "Newsletter data is kept until you unsubscribe. Server logs are kept on a short rolling schedule.</p>"),
            ("Your rights",
             "<p>You may request access to your personal information, correction or deletion, object to processing, "
             "request portability where applicable, and withdraw consent at any time. Write to "
             "<a href='mailto:info@digitaltrustfuturesfoundation.org'>info@digitaltrustfuturesfoundation.org</a> and we will respond "
             "within the period required by applicable law.</p>"),
            ("Security",
             "<p>We apply the practices we recommend to others: minimal collection, least-privilege access, encryption "
             "in transit, dependency scanning, and a published vulnerability-disclosure route. See our "
             "<a href='../security.html'>security policy</a>.</p>"),
            ("Children",
             "<p>This website is not directed at children. Where programme work involves children or young people, it "
             "is conducted under the Foundation&rsquo;s <a href='safeguarding.html'>safeguarding policy</a> with "
             "appropriate consent.</p>"),
            ("International transfers",
             "<p>Where a processor is located outside South Africa, transfers are made under appropriate safeguards. "
             "Processor locations will be listed here once finalised.</p>"),
        ], "privacy")


def cookies():
    return _legal(
        "Cookie policy", "Legal",
        "This site does not use cookies for analytics, advertising or profiling. There is no cookie banner because "
        "there is nothing to consent to.",
        [
            ("The short version",
             "<p>We set no cookies. The only value this site stores in your browser is your light or dark theme "
             "preference, kept in <code>localStorage</code> under the key <code>dtff-theme</code>. It is never "
             "transmitted to us or to anyone else, and clearing your browser storage removes it.</p>"),
            ("Why there is no banner",
             "<p>Consent banners exist because sites place tracking technologies before a visitor has agreed. This site "
             "places none. A banner would ask you to consent to something that is not happening, which is worse than "
             "useless &mdash; it trains people to click through consent requests without reading them.</p>"),
            ("What we deliberately avoid",
             "<ul><li>No analytics platforms, first- or third-party.</li>"
             "<li>No advertising, retargeting or conversion pixels.</li>"
             "<li>No social media embeds, share widgets or comment systems.</li>"
             "<li>No third-party fonts, content delivery networks or hosted scripts.</li>"
             "<li>No third-party code runs on this site at all. Submitting a form posts it to our form-delivery "
             "processor, which is an action you take rather than something that happens while you read.</li>"
             "<li>No session recording, heatmaps or A/B testing tools.</li></ul>"),
            ("If this changes",
             "<p>If the Foundation later adopts privacy-respecting analytics or a newsletter platform that sets "
             "cookies, this page will be updated before that change goes live, and any non-essential technology will "
             "be placed only with prior consent through a compliant mechanism.</p>"),
            ("Storage used by this site",
             "<div class='table-wrap not-prose'><table><thead><tr><th scope='col'>Name</th><th scope='col'>Type</th>"
             "<th scope='col'>Purpose</th><th scope='col'>Duration</th></tr></thead><tbody>"
             "<tr><td><code>dtff-theme</code></td><td>localStorage</td><td>Remembers your light or dark theme choice</td>"
             "<td>Until you clear browser storage</td></tr></tbody></table></div>"),
        ], "cookies")


def terms():
    return _legal(
        "Terms of use", "Legal",
        "The terms on which this website and the Foundation&rsquo;s published materials are made available.",
        [
            ("Acceptance",
             "<p>By using this website you accept these terms. If you do not accept them, please do not use the "
             "site.</p>"),
            ("About the Foundation",
             "<p>This site is operated by Digital Trust Futures Foundation NPC, a non-profit company registered in "
             "South Africa.</p>"),
            ("Nature of the content",
             "<p>Material on this site is published for general information and public-interest purposes. It is not "
             "legal, financial, investment, regulatory or engineering advice, and it does not constitute an assurance, "
             "certification or endorsement of any system, product, organisation or jurisdiction. Assessments carried "
             "out by the Foundation are governed by their own written scope and agreement.</p>"),
            ("Use of our open materials",
             "<p>Publications, toolkits and frameworks are released under Creative Commons Attribution 4.0 "
             "International unless the resource states otherwise: you may share and adapt them, including commercially, "
             "with appropriate credit and an indication of changes. Software is released under the licence stated in "
             "its repository.</p>"),
            ("Brand and trademarks",
             "<p>The Digital Trust Futures Foundation name, logo and wordmark are not covered by those open licences. "
             "You may not use them to imply endorsement, partnership or certification. Please ask first.</p>"),
            ("Acceptable use",
             "<ul><li>Do not attempt to gain unauthorised access to this site or its infrastructure, except as "
             "expressly permitted by our <a href='../security.html'>vulnerability disclosure policy</a>.</li>"
             "<li>Do not use the site to distribute malware, or to harvest personal data.</li>"
             "<li>Do not misrepresent the Foundation&rsquo;s findings, or present draft or planned material as "
             "published.</li></ul>"),
            ("Third-party links",
             "<p>This site links to external repositories, registries and organisations. We are not responsible for "
             "their content, availability or privacy practices, and a link is not an endorsement.</p>"),
            ("Availability and changes",
             "<p>We aim to keep the site available and accurate but make no guarantee of either. Content may be "
             "updated, superseded or withdrawn. Where a resource is superseded, the replacement will be linked from "
             "the original record.</p>"),
            ("Liability",
             "<p>To the fullest extent permitted by law, the Foundation is not liable for any loss arising from "
             "reliance on material published on this site. Nothing in these terms excludes liability that cannot "
             "lawfully be excluded.</p>"),
            ("Governing law",
             "<p>These terms are governed by the laws of South Africa, and the courts of South Africa have "
             "jurisdiction.</p>"),
        ], "terms")


def safeguarding():
    return _legal(
        "Safeguarding policy", "Legal",
        "The Foundation works with people who may be experiencing digital harm, financial loss or exclusion. That "
        "creates obligations that go beyond data protection.",
        [
            ("Purpose and scope",
             "<p>This policy applies to Foundation staff, Board members, fellows, contractors, secondees, volunteers "
             "and partners delivering work on the Foundation&rsquo;s behalf. It covers programme work, research, "
             "training, convening and any handling of citizen-harm evidence.</p>"),
            ("Our commitments",
             "<ul><li>Do no harm: no activity should leave a participant more exposed than before we arrived.</li>"
             "<li>Informed consent: people are told what participation involves, what will be recorded, and how it "
             "will be used, before they agree.</li>"
             "<li>Minimisation: we collect only what is needed to identify a pattern or complete a piece of work.</li>"
             "<li>Anonymity by default: individuals are not identifiable in published outputs.</li>"
             "<li>Referral over extraction: where someone needs help rather than analysis, they are referred to support "
             "&mdash; not treated as a data point.</li>"
             "<li>No coercion: participation is voluntary and may be withdrawn without consequence to any service.</li></ul>"),
            ("Working with people at heightened risk",
             "<p>Some participants face elevated risk because of who they are or what they do &mdash; including "
             "journalists, human-rights defenders, migrants, survivors of abuse, and people in communities under "
             "surveillance. Work involving these groups requires an additional risk assessment, a named responsible "
             "person, and agreed protocols for secure communication and data handling.</p>"),
            ("Children and young people",
             "<p>Programme work involving children or young people requires appropriate consent from a parent or "
             "guardian where applicable, adherence to local law, and materials appropriate to age and literacy. "
             "Personal data relating to children is subject to heightened protection.</p>"),
            ("Handling citizen-harm evidence",
             "<ul><li>Reports are anonymised before analysis.</li>"
             "<li>Storage uses access controls proportionate to sensitivity.</li>"
             "<li>Retention is limited to what the analysis requires.</li>"
             "<li>Publication is at pattern level, never at individual level.</li>"
             "<li>Where a report indicates immediate risk to a person, referral takes priority over research.</li></ul>"),
            ("Security findings and responsible openness",
             "<p>The Foundation promotes openness where it strengthens public learning, and discretion where technical "
             "detail could assist adversaries or expose citizens to harm. Decisions to withhold, delay or redact are "
             "recorded and explained rather than made silently.</p>"),
            ("Conduct expectations",
             "<p>Everyone acting for the Foundation is expected to treat participants, partners and colleagues with "
             "respect, to declare conflicts of interest, and to refrain from any conduct that exploits a position of "
             "trust. Breaches may result in removal from a programme, termination of an agreement, and where "
             "appropriate referral to authorities.</p>"),
            ("Raising a concern",
             "<p>Concerns can be raised confidentially with the Safeguarding and Ethics Officer at "
             "<a href='mailto:info@digitaltrustfuturesfoundation.org'>info@digitaltrustfuturesfoundation.org</a>. Concerns "
             "may be raised anonymously. Reports are acknowledged, assessed and acted on, and the Foundation does not "
             "retaliate against anyone who raises a concern in good faith.</p>"),
            ("Governance of this policy",
             "<p>The Safeguarding and Ethics Officer owns this policy and reports to the Executive Director and the "
             "Board. It is reviewed annually and after any incident.</p>"),
        ], "safeguarding")


# ── 404 ──────────────────────────────────────────────────────────────────────
def not_found():
    return f"""<section class="page-hero" style="padding-block:clamp(4rem,3rem + 6vw,8rem)">
  <div class="container">
    <p class="eyebrow">Error 404</p>
    <h1 class="balance">That page is not here</h1>
    <p class="lede pretty">The link may be out of date, or the resource may not have been published yet. The Foundation
      lists resources only once they genuinely exist, so a link from an older document may point at something still in
      development.</p>
    <div class="cluster cluster--lg mt-7">
      <a class="btn btn--accent btn--lg" href="/index.html">Go to the home page{ARROW}</a>
      <a class="btn btn--outline-light btn--lg" href="/research.html">Resource library{ARROW}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Common destinations</p>
      <h2 class="balance">You may be looking for</h2>
    </div>
    <div class="grid grid-3" data-reveal-stagger>
      <a class="div-card" href="/what-we-do.html"><h3>What we do</h3><p>The five programme divisions and the three launch programmes.</p><span class="dc-more">Open {icon("arrow")}</span></a>
      <a class="div-card" href="/support-our-work.html"><h3>Support our work</h3><p>The two-year launch investment package for funders.</p><span class="dc-more">Open {icon("arrow")}</span></a>
      <a class="div-card" href="/research.html"><h3>Research and resources</h3><p>Publications, briefs, toolkits and frameworks with honest status.</p><span class="dc-more">Open {icon("arrow")}</span></a>
      <a class="div-card" href="/open-source.html"><h3>Open source</h3><p>Supported projects, advisories and contribution routes.</p><span class="dc-more">Open {icon("arrow")}</span></a>
      <a class="div-card" href="/security.html"><h3>Security disclosure</h3><p>How to report a vulnerability to the Foundation.</p><span class="dc-more">Open {icon("arrow")}</span></a>
      <a class="div-card" href="/contact.html"><h3>Contact</h3><p>Routed contact addresses for every division.</p><span class="dc-more">Open {icon("arrow")}</span></a>
    </div>
  </div>
</section>
"""


# ── Thank you (form redirect target) ─────────────────────────────────────────
def thank_you():
    return f"""<section class="page-hero" style="padding-block:clamp(3.5rem,2.5rem + 5vw,6.5rem)">
  <div class="container">
    <p class="eyebrow">Message received</p>
    <h1 class="balance">Thank you &mdash; that has reached us</h1>
    <p class="lede pretty">Your message has been delivered to
      <strong>info@digitaltrustfuturesfoundation.org</strong>. We read everything that arrives and will come back to
      you, normally within a few working days.</p>
    <div class="cluster cluster--lg mt-7">
      <a class="btn btn--accent btn--lg" href="index.html">Back to the home page{ARROW}</a>
      <a class="btn btn--outline-light btn--lg" href="what-we-do.html">Explore our work{ARROW}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--sticky">
      <div data-reveal>
        <p class="eyebrow">What happens next</p>
        <h2 class="balance">From first message to published lesson</h2>
        <p class="lede mt-4">The Foundation works through written scopes and agreements. That is slower than a
          handshake and considerably more useful when findings turn out to be uncomfortable.</p>
      </div>
      <div class="steps" data-reveal>
        <div class="step"><span class="step-num">01</span>
          <div><h3>Acknowledgement</h3><p>We confirm receipt and tell you who is picking the enquiry up.</p></div></div>
        <div class="step"><span class="step-num">02</span>
          <div><h3>Scoping conversation</h3><p>A short call to understand the system, the constraint and what would actually help.</p></div></div>
        <div class="step"><span class="step-num">03</span>
          <div><h3>Written scope</h3><p>A defined scope, deliverables, timeline, disclosure terms and any partner obligations.</p></div></div>
        <div class="step"><span class="step-num">04</span>
          <div><h3>Agreement</h3><p>A written agreement covering roles, confidentiality, publication and safeguarding.</p></div></div>
        <div class="step"><span class="step-num">05</span>
          <div><h3>Delivery and publication</h3><p>Work delivered, findings shared with you first, anonymised lessons published where agreed.</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="grid grid-2" data-reveal-stagger>
      <div class="callout"><h3>Did you mean to report a vulnerability?</h3>
        <p>Security findings should go through the coordinated disclosure route rather than the general enquiry form,
          so they are handled correctly from the first message.
          <a href="security.html">Read the disclosure policy</a>.</p></div>
      <div class="callout callout--teal"><h3>Nothing arrived?</h3>
        <p>If you have not heard from us within five working days, write directly to
          <a href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a> &mdash;
          delivery failures are rare but not impossible, and we would rather hear twice than not at all.</p></div>
    </div>
  </div>
</section>
"""
