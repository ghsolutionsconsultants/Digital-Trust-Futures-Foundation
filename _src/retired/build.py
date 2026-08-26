# -*- coding: utf-8 -*-
"""Static site generator for the Digital Trust Futures Foundation website.

Run:  python3 _src/build.py
Out:  website/*.html  (pure static HTML — no runtime dependencies)
"""
import os
import sys
import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
OUT = os.path.abspath(os.path.join(HERE, "..", "website"))

from shell import page, SITE, ORG, ORG_LEGAL, TAGLINE, breadcrumb_jsonld  # noqa: E402
import page_home, page_about, page_divisions, page_programmes, page_engage  # noqa: E402
import page_support, page_misc  # noqa: E402

D = page_divisions.DIVISIONS
ORDER = page_divisions.ORDER

PAGES = []


def add(path, **kw):
    PAGES.append((path, kw))


# ── Root pages ───────────────────────────────────────────────────────────────
add("index.html",
    title=f"{ORG} — {TAGLINE}",
    desc="An independent, non-profit public-benefit organisation strengthening the safety, security, inclusion and "
         "trustworthiness of digital public infrastructure, digital public goods, open-source technology and "
         "AI-enabled public services across Africa and the Global South.",
    body=page_home.render(), active="", canonical="index.html")

add("about.html",
    title="About the Foundation",
    desc="Who we are: an independent public-benefit foundation for digital public infrastructure safeguards, digital "
         "public goods security, AI governance and citizen digital safety in Africa and the Global South.",
    body=page_about.about(), active="about", canonical="about.html")

add("governance.html",
    title="Governance and accountability",
    desc="The Foundation's independent Board, executive office, operating model, relationship with Nucleus Systems, "
         "intellectual property model, transparency commitments and launch risk register.",
    body=page_about.governance(), active="about", canonical="governance.html")

add("what-we-do.html",
    title="What we do",
    desc="Five programme divisions covering DPI security assurance, open-source and software trust, policy and "
         "evidence, skills and implementation, and public-interest cyber support for civil society.",
    body=page_divisions.what_we_do(), active="what-we-do", canonical="what-we-do.html")

add("programmes.html",
    title="Programmes",
    desc="Three connected launch programmes — citizen digital safety, DPI security assurance and the Global South "
         "digital trust coordination network — plus the flagship safeguards initiative, fellowships and 24-month "
         "roadmap.",
    body=page_programmes.programmes(), active="programmes", canonical="programmes.html")

add("research.html",
    title="Research and resources",
    desc="Open publications, policy briefs, toolkits and frameworks for DPI safeguards, digital public goods security, "
         "AI governance and citizen digital safety — released as reusable public goods under open licences.",
    body=page_programmes.research(), active="research", canonical="research.html")

add("open-source.html",
    title="Open source",
    desc="How the Foundation creates, hosts, secures and sustains open-source digital public goods, including security "
         "advisories, contribution routes and project selection criteria.",
    body=page_engage.open_source(), active="research", canonical="open-source.html")

add("get-involved.html",
    title="Get involved",
    desc="Routes in for governments and DPI programme teams, digital public goods maintainers, funders, civil-society "
         "organisations, researchers and fellows.",
    body=page_engage.get_involved(), active="get-involved", canonical="get-involved.html")

add("support-our-work.html",
    title="Support our work",
    desc="A focused USD 300,000 two-year launch portfolio: the investment case, allocation, assets created, funding "
         "model and prospective partner categories.",
    body=page_support.support(), active="get-involved", canonical="support-our-work.html")

add("news.html",
    title="News and events",
    desc="Announcements, publications, convenings and security advisories from the Digital Trust Futures Foundation.",
    body=page_support.news(), active="news", canonical="news.html")

add("contact.html",
    title="Contact",
    desc="Routed contact addresses for each Foundation division, registered organisation details, media enquiries, "
         "safeguarding concerns and the security disclosure route.",
    body=page_misc.contact(), active="", canonical="contact.html")

add("security.html",
    title="Security disclosure policy",
    desc="How to report a vulnerability to the Digital Trust Futures Foundation: scope, safe harbour, response targets "
         "and coordinated disclosure practice.",
    body=page_misc.security(), active="", canonical="security.html")

add("credits.html",
    title="Credits and colophon",
    desc="Typefaces, photography credits, licensing of the Foundation's own material, and how this website is built.",
    body=page_misc.credits(), active="", canonical="credits.html")

add("thank-you.html",
    title="Thank you",
    desc="Your message has reached the Digital Trust Futures Foundation.",
    body=page_misc.thank_you(), active="", canonical="thank-you.html")

add("404.html",
    title="Page not found",
    desc="The page you requested could not be found.",
    body=page_misc.not_found(), active="", canonical="404.html")

# ── Division pages ───────────────────────────────────────────────────────────
DIV_DESC = {
    "dpi-trust-lab": "Safeguards research and assurance for identity, payments, data exchange, social protection, "
                     "health, education and public-service delivery infrastructure.",
    "open-digital-commons": "Creating, hosting, securing and sustaining open-source digital public goods, including "
                            "secure SDLC, SBOM, supply-chain assurance and coordinated vulnerability disclosure.",
    "policy-evidence-centre": "Independent research translating technical risk into evidence for policy, regulation, "
                              "investment and public-interest technology decisions.",
    "skills-academy": "Practical digital trust capacity building for governments, universities, civil society, "
                      "open-source communities and local technology teams.",
    "cyber-safety-centre": "Practical cyber support for nonprofits, community institutions and social-impact "
                           "technology providers that cannot afford commercial services.",
}

for key in ORDER:
    d = D[key]
    crumbs = [("Home", "index.html"), ("What we do", "what-we-do.html"),
              (d["short"], f"divisions/{key}.html")]
    add(f"divisions/{key}.html",
        title=d["name"],
        desc=DIV_DESC[key],
        body=page_divisions.division(key),
        active="what-we-do", depth=1, canonical=f"divisions/{key}.html",
        jsonld_extra=breadcrumb_jsonld(crumbs))

# ── Legal pages ──────────────────────────────────────────────────────────────
add("legal/privacy.html", title="Privacy policy",
    desc="How the Digital Trust Futures Foundation handles personal information: minimal collection, no tracking, no "
         "third-party requests, and your rights under POPIA and the GDPR.",
    body=page_misc.privacy(), active="", depth=1, canonical="legal/privacy.html")

add("legal/cookies.html", title="Cookie policy",
    desc="This site sets no analytics, advertising or profiling cookies. The only stored value is your theme "
         "preference, kept in your own browser.",
    body=page_misc.cookies(), active="", depth=1, canonical="legal/cookies.html")

add("legal/terms.html", title="Terms of use",
    desc="Terms on which this website and the Foundation's published materials are made available, including open "
         "licensing, brand use and acceptable use.",
    body=page_misc.terms(), active="", depth=1, canonical="legal/terms.html")

add("legal/safeguarding.html", title="Safeguarding policy",
    desc="Commitments governing work with people experiencing digital harm: consent, minimisation, anonymity, referral "
         "over extraction, and how to raise a concern.",
    body=page_misc.safeguarding(), active="", depth=1, canonical="legal/safeguarding.html")


# ── Static support files ─────────────────────────────────────────────────────
def support_files():
    today = datetime.date.today().isoformat()
    expiry = (datetime.date.today() + datetime.timedelta(days=365)).isoformat()

    urls = []
    priority = {"index.html": "1.0", "what-we-do.html": "0.9", "support-our-work.html": "0.9",
                "programmes.html": "0.9", "about.html": "0.8", "research.html": "0.8"}
    for path, _ in PAGES:
        if path in ("404.html", "thank-you.html"):
            continue
        loc = f"{SITE}/{path}"
        urls.append(f"  <url>\n    <loc>{loc}</loc>\n    <lastmod>{today}</lastmod>\n"
                    f"    <changefreq>monthly</changefreq>\n"
                    f"    <priority>{priority.get(path, '0.6')}</priority>\n  </url>")

    write("sitemap.xml",
          '<?xml version="1.0" encoding="UTF-8"?>\n'
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
          + "\n".join(urls) + "\n</urlset>\n")

    write("robots.txt",
          "# Digital Trust Futures Foundation\n"
          "User-agent: *\n"
          "Allow: /\n"
          "Disallow: /404.html\n\n"
          f"Sitemap: {SITE}/sitemap.xml\n")

    write(".well-known/security.txt",
          f"# Digital Trust Futures Foundation — security contact\n"
          f"Contact: mailto:info@digitaltrustfuturesfoundation.org\n"
          f"Contact: {SITE}/security.html\n"
          f"Policy: {SITE}/security.html\n"
          f"Expires: {expiry}T00:00:00.000Z\n"
          f"Preferred-Languages: en, fr\n"
          f"Canonical: {SITE}/.well-known/security.txt\n")

    # GitHub Pages reads the custom domain from this file in the published root.
    write("CNAME", SITE.replace("https://", "") + "\n")

    write("site.webmanifest", """{
  "name": "Digital Trust Futures Foundation",
  "short_name": "DTFF",
  "description": "Safe infrastructure. Trusted technology. Inclusive digital futures.",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#F7F5F1",
  "theme_color": "#133A63",
  "icons": [
    { "src": "/assets/img/favicon-180.png", "sizes": "180x180", "type": "image/png" },
    { "src": "/assets/img/favicon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" }
  ]
}
""")

    # Security headers for common static hosts (Netlify / Cloudflare Pages style)
    write("_headers", """/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self' 'sha256-JYmTW2tRUZZpSWTSZi9EWttbAatxP8E/empbZQZ+qjA='; script-src-attr 'none'; style-src 'self'; style-src-attr 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self' https://api.web3forms.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  X-Frame-Options: DENY

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
  Access-Control-Allow-Origin: *

/assets/img/*
  Cache-Control: public, max-age=31536000, immutable

/assets/css/*
  Cache-Control: public, max-age=604800

/assets/js/*
  Cache-Control: public, max-age=604800
""")

    write("_redirects", "/index /index.html 301\n/home /index.html 301\n/donate /support-our-work.html 301\n"
                        "/funders /support-our-work.html 301\n/divisions /what-we-do.html 301\n"
                        "/.well-known/security.txt /.well-known/security.txt 200\n/* /404.html 404\n")


def write(rel, content):
    dest = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with open(dest, "w", encoding="utf-8") as fh:
        fh.write(content)
    return dest


def main():
    os.makedirs(OUT, exist_ok=True)
    total = 0
    for path, kw in PAGES:
        html = page(**kw)
        write(path, html)
        total += len(html)
        print(f"  {path:<38} {len(html):>7,} bytes")
    support_files()
    print(f"\n{len(PAGES)} pages · {total:,} bytes of HTML → {OUT}")


if __name__ == "__main__":
    main()
