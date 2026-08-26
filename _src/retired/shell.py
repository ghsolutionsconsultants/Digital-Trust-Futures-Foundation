# -*- coding: utf-8 -*-
"""Shared page shell for the Digital Trust Futures Foundation website.

Everything that repeats across pages lives here: <head>, header/navigation,
footer, and a handful of small markup helpers. Pages supply only their body.
"""

SITE = "https://digitaltrustfuturesfoundation.org"
ORG_LEGAL = "Digital Trust Futures Foundation NPC"
ORG = "Digital Trust Futures Foundation"
TAGLINE = "Safe infrastructure. Trusted technology. Inclusive digital futures."
YEAR = "2026"

# ── Icons (feather-style, 24×24 stroke) ──────────────────────────────────────
_ICONS = {
    "arrow": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    "code": '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    "cap": '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    "buoy": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M14.9 9.1l4.2-4.2M4.9 19.1l4.2-4.2"/>',
    "lock": '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    "globe": '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z"/>',
    "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
    "file": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    "alert": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    "mail": '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    "pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    "external": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3"/>',
    "branch": '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    "chart": '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    "search": '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    "scale": '<path d="M12 3v18M5 7h14M7 7l-4 7h8L7 7zm10 0l-4 7h8l-4-7zM8 21h8"/>',
    "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
    "cpu": '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
    "refresh": '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    "megaphone": '<path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M14 8a4 4 0 0 1 0 8M17 5a8 8 0 0 1 0 14"/>',
    "calendar": '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    "check": '<polyline points="20 6 9 17 4 12"/>',
    "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',
}


def icon(name, cls="", size=None):
    body = _ICONS.get(name, _ICONS["arrow"])
    sz = f' width="{size}" height="{size}"' if size else ""
    c = f' class="{cls}"' if cls else ""
    return (f'<svg{c}{sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            f'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" '
            f'aria-hidden="true" focusable="false">{body}</svg>')


ARROW = icon("arrow", "arrow")
CARET = ('<svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
         'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
         '<polyline points="6 9 12 15 18 9"/></svg>')


def btn(label, href, variant="primary", arrow=True, cls="", attrs=""):
    a = ARROW if arrow else ""
    classes = f"btn btn--{variant}" + (f" {cls}" if cls else "")
    extra = f" {attrs}" if attrs else ""
    return f'<a class="{classes}" href="{href}"{extra}>{label}{a}</a>'


def link_arrow(label, href, attrs=""):
    extra = f" {attrs}" if attrs else ""
    return f'<a class="link-arrow" href="{href}"{extra}>{label}{ARROW}</a>'


# ── Navigation model ─────────────────────────────────────────────────────────
NAV = [
    ("About", "about.html", [
        ("Who we are", "about.html", "Mandate, vision, mission and values"),
        ("Governance &amp; board", "governance.html", "Independent oversight and executive office"),
        ("Relationship with Nucleus Systems", "governance.html#nucleus", "How independence is protected"),
        ("Transparency &amp; reporting", "governance.html#transparency", "Policies, MEL and accountability"),
    ]),
    ("What we do", "what-we-do.html", [
        ("Overview", "what-we-do.html", "Five programme divisions"),
        ("DPI Security, Safety and Trust Lab", "divisions/dpi-trust-lab.html", "Safeguards for identity, payments and data exchange"),
        ("Open Digital Commons and Software Trust", "divisions/open-digital-commons.html", "Hosting, securing and sustaining digital public goods"),
        ("Digital Trust Policy and Evidence Centre", "divisions/policy-evidence-centre.html", "Independent research and policy evidence"),
        ("Digital Trust Skills and Implementation Academy", "divisions/skills-academy.html", "Practical capacity building"),
        ("Public-Interest Cyber and Digital Safety Centre", "divisions/cyber-safety-centre.html", "Cyber support for civil society"),
    ]),
    ("Programmes", "programmes.html", [
        ("Launch programmes", "programmes.html", "The three connected launch programmes"),
        ("Flagship initiative", "programmes.html#flagship", "DPI and Open Source Safeguards Initiative"),
        ("Fellowships", "programmes.html#fellowships", "Research and open-source fellowships"),
        ("Milestones &amp; roadmap", "programmes.html#roadmap", "The 24-month delivery path"),
    ]),
    ("Research", "research.html", [
        ("Publications &amp; policy briefs", "research.html", "Evidence, briefs and country studies"),
        ("Toolkits &amp; frameworks", "research.html#toolkits", "Open, reusable assurance tools"),
        ("Open source", "open-source.html", "Hosted projects and security advisories"),
    ]),
    ("Get involved", "get-involved.html", [
        ("Partner with us", "get-involved.html#partner", "Governments, funders and DPG maintainers"),
        ("Support our work", "support-our-work.html", "The two-year launch investment package"),
        ("Apply for support", "get-involved.html#support", "Civil society and DPG helpdesk"),
        ("Careers &amp; fellowships", "get-involved.html#careers", "Join the Foundation"),
    ]),
    ("News", "news.html", None),
]


def _head(title, desc, base, canonical, extra_head="", jsonld=""):
    full_title = title if ORG in title else f"{title} — {ORG}"
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{full_title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{SITE}/{canonical}">
<meta name="theme-color" content="#F7F5F1">
<meta name="color-scheme" content="light dark">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{ORG}">
<meta property="og:title" content="{full_title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{SITE}/{canonical}">
<meta property="og:image" content="{SITE}/assets/img/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{full_title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{SITE}/assets/img/og-image.png">
<link rel="icon" href="{base}assets/img/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="{base}assets/img/favicon-512.png" sizes="512x512" type="image/png">
<link rel="apple-touch-icon" href="{base}assets/img/apple-touch-icon.png">
<link rel="manifest" href="{base}site.webmanifest">
<link rel="preload" href="{base}assets/fonts/newsreader-300_700-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{base}assets/fonts/inter-300_700-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{base}assets/css/main.css">
<script>(function(){{try{{var t=localStorage.getItem('dtff-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}}catch(e){{}}}})();</script>
{jsonld}{extra_head}</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>
"""


def _org_jsonld(base):
    return f"""<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "{ORG}",
  "legalName": "{ORG_LEGAL}",
  "alternateName": "DTFF",
  "url": "{SITE}/",
  "logo": "{SITE}/assets/img/logo-full.png",
  "slogan": "{TAGLINE}",
  "description": "An independent, non-profit public-benefit organisation strengthening the safety, security, inclusion and trustworthiness of digital public infrastructure, digital public goods, open-source technology and AI-enabled public services.",
  "foundingDate": "2026",
  "address": {{"@type": "PostalAddress", "addressCountry": "ZA"}},
  "areaServed": ["Africa", "Global South"],
  "knowsAbout": ["Digital public infrastructure", "Digital public goods", "Cybersecurity assurance", "AI governance", "Digital identity", "Payment security", "Open-source security"],
  "contactPoint": {{
    "@type": "ContactPoint",
    "contactType": "general enquiries",
    "email": "info@digitaltrustfuturesfoundation.org",
    "availableLanguage": ["en", "fr"]
  }}
}}
</script>
"""


def _header(active, base):
    items = []
    for label, href, children in NAV:
        key = label.lower().replace(" ", "-")
        cur = ' aria-current="page"' if active == key else ""
        if children:
            panel = "".join(
                f'<a href="{base}{c[1]}">{c[0]}<span>{c[2]}</span></a>' for c in children
            )
            items.append(
                f'<li class="nav-item" data-nav-item>'
                f'<a class="nav-link" href="{base}{href}"{cur} aria-expanded="false" data-nav-trigger>'
                f'{label}{CARET}</a>'
                f'<div class="nav-panel" data-nav-panel>{panel}</div></li>'
            )
        else:
            items.append(f'<li class="nav-item"><a class="nav-link" href="{base}{href}"{cur}>{label}</a></li>')

    mobile = []
    for label, href, children in NAV:
        if children:
            sub = "".join(f'<a href="{base}{c[1]}">{c[0]}</a>' for c in children)
            mobile.append(
                f'<details><summary>{label}{CARET}</summary>'
                f'<div class="mobile-panel">{sub}</div></details>'
            )
        else:
            mobile.append(f'<a class="mobile-top" href="{base}{href}">{label}</a>')

    return f"""<header class="site-header" id="site-header">
  <div class="container header-inner">
    <a class="brand" href="{base}index.html" aria-label="{ORG} — home">
      <img class="brand-logo-light" src="{base}assets/img/logo-full.png" alt="{ORG}" width="988" height="466" fetchpriority="high">
      <img class="brand-logo-dark" src="{base}assets/img/logo-full-inverse.png" alt="{ORG}" width="988" height="466">
    </a>
    <nav class="nav" aria-label="Primary">
      <ul style="display:flex;align-items:center;gap:.15rem;list-style:none">{''.join(items)}</ul>
    </nav>
    <div class="header-actions">
      <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch to dark theme" title="Switch theme">
        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
      <a class="btn btn--primary btn--sm header-cta" href="{base}get-involved.html#partner">Partner with us{ARROW}</a>
      <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav">
        <span class="menu-bars" aria-hidden="true"><span></span><span></span><span></span></span>Menu
      </button>
    </div>
  </div>
  <div class="progress-rail" aria-hidden="true"><div class="progress-bar" data-progress></div></div>
</header>
<div class="mobile-nav" id="mobile-nav" data-mobile-nav>
  <div class="container">
    {''.join(mobile)}
    <a class="btn btn--accent" href="{base}get-involved.html#partner">Partner with us{ARROW}</a>
    <a class="btn btn--ghost" href="{base}support-our-work.html" style="width:100%;justify-content:center;margin-top:.75rem">Support our work{ARROW}</a>
  </div>
</div>
"""


def _footer(base):
    return f"""<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div>
        <img class="footer-logo" src="{base}assets/img/logo-full-inverse.png" alt="{ORG}" width="988" height="466" loading="lazy">
        <p class="footer-blurb">An independent, non-profit public-benefit organisation strengthening the safety, security, inclusion and trustworthiness of digital public infrastructure, digital public goods, open-source technology and AI-enabled public services.</p>
        <div class="footer-contact">
          <div>All enquiries · <a href="mailto:info@digitaltrustfuturesfoundation.org">info@digitaltrustfuturesfoundation.org</a></div>
          <div>Security disclosures follow the <a href="{base}security.html">disclosure policy</a>.</div>
        </div>
        <p class="mono-label" style="margin-top:1.5rem">{ORG_LEGAL} · South Africa</p>
      </div>
      <nav class="footer-nav" aria-label="Footer">
        <div class="footer-col">
          <h2>Foundation</h2>
          <ul>
            <li><a href="{base}about.html">Who we are</a></li>
            <li><a href="{base}governance.html">Governance &amp; board</a></li>
            <li><a href="{base}governance.html#nucleus">Nucleus Systems relationship</a></li>
            <li><a href="{base}governance.html#transparency">Transparency &amp; reporting</a></li>
            <li><a href="{base}news.html">News &amp; events</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h2>What we do</h2>
          <ul>
            <li><a href="{base}divisions/dpi-trust-lab.html">DPI Trust Lab</a></li>
            <li><a href="{base}divisions/open-digital-commons.html">Open Digital Commons</a></li>
            <li><a href="{base}divisions/policy-evidence-centre.html">Policy &amp; Evidence Centre</a></li>
            <li><a href="{base}divisions/skills-academy.html">Skills Academy</a></li>
            <li><a href="{base}divisions/cyber-safety-centre.html">Cyber &amp; Digital Safety Centre</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h2>Resources</h2>
          <ul>
            <li><a href="{base}research.html">Publications &amp; briefs</a></li>
            <li><a href="{base}research.html#toolkits">Toolkits &amp; frameworks</a></li>
            <li><a href="{base}open-source.html">Open-source projects</a></li>
            <li><a href="{base}open-source.html#advisories">Security advisories</a></li>
            <li><a href="{base}security.html">Vulnerability disclosure</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h2>Engage</h2>
          <ul>
            <li><a href="{base}get-involved.html#partner">Partner with us</a></li>
            <li><a href="{base}support-our-work.html">Support our work</a></li>
            <li><a href="{base}get-involved.html#support">Apply for support</a></li>
            <li><a href="{base}get-involved.html#careers">Careers &amp; fellowships</a></li>
            <li><a href="{base}contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="footer-bottom">
      <p class="footer-legal">© {YEAR} {ORG_LEGAL}. Registered as a non-profit company in South Africa; NPO and public-benefit organisation status to be pursued subject to specialist legal and tax advice.</p>
      <nav aria-label="Legal">
        <a href="{base}legal/privacy.html">Privacy</a>
        <a href="{base}legal/cookies.html">Cookies</a>
        <a href="{base}legal/terms.html">Terms of use</a>
        <a href="{base}legal/safeguarding.html">Safeguarding</a>
        <a href="{base}security.html">Security</a>
        <a href="{base}credits.html">Credits</a>
      </nav>
      <span class="licence-badge">{icon("check", "", 13)} Open resources CC BY 4.0</span>
    </div>
  </div>
</footer>
<script src="{base}assets/js/main.js" defer></script>
</body>
</html>
"""


def page(*, title, desc, body, active="", depth=0, canonical="", extra_head="",
         jsonld_extra="", scripts=""):
    base = "../" * depth
    canonical = canonical or "index.html"
    jsonld = _org_jsonld(base) + jsonld_extra
    return (
        _head(title, desc, base, canonical, extra_head, jsonld)
        + _header(active, base)
        + '<main id="main">\n' + body + "\n</main>\n"
        + scripts
        + _footer(base)
    )


def breadcrumb(items, base):
    """items: list of (label, href|None) — last item has href None."""
    lis = []
    for label, href in items:
        if href:
            lis.append(f'<li><a href="{base}{href}">{label}</a></li>')
        else:
            lis.append(f'<li aria-current="page">{label}</li>')
    return f'<ol class="breadcrumb">{"".join(lis)}</ol>'


def breadcrumb_jsonld(items, base_url=SITE):
    els = []
    for i, (label, href) in enumerate(items, start=1):
        item = f'"item": "{base_url}/{href}"' if href else ""
        sep = ", " if item else ""
        els.append(f'{{"@type": "ListItem", "position": {i}, "name": "{label}"{sep}{item}}}')
    return ('<script type="application/ld+json">{"@context":"https://schema.org",'
            '"@type":"BreadcrumbList","itemListElement":[' + ",".join(els) + "]}</script>\n")


def page_hero(*, eyebrow, title, lede, crumbs_html="", meta_html="", extra=""):
    return f"""<section class="page-hero">
  <div class="container">
    {crumbs_html}
    <p class="eyebrow">{eyebrow}</p>
    <h1 class="balance">{title}</h1>
    <p class="lede pretty">{lede}</p>
    {meta_html}{extra}
  </div>
</section>
"""


def cta_band(base, *, title, text, primary=("Partner with us", "get-involved.html#partner"),
             secondary=("Support our work", "support-our-work.html")):
    return f"""<section class="section">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div class="cta-grid">
        <div>
          <p class="eyebrow eyebrow--teal">Work with the Foundation</p>
          <h2 class="balance">{title}</h2>
          <p class="pretty">{text}</p>
        </div>
        <div class="cluster">
          <a class="btn btn--accent btn--lg" href="{base}{primary[1]}">{primary[0]}{ARROW}</a>
          <a class="btn btn--outline-light btn--lg" href="{base}{secondary[1]}">{secondary[0]}{ARROW}</a>
        </div>
      </div>
    </div>
  </div>
</section>
"""
