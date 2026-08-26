# -*- coding: utf-8 -*-
"""Email signature generator for the Digital Trust Futures Foundation.

Run:  python3 _src/signature.py
Out:  react-app/public/signature/<slug>.html  install page (preview, copy, plain text)
      react-app/public/signature/<slug>.txt   plain-text signature

Output lands in the Vite public directory so it is copied into the built site
rather than surviving by accident alongside it.

Email clients are not browsers. This output is deliberately old-fashioned:
nested tables, inline styles only, web-safe fonts, absolute image URLs, and no
flexbox, grid, gradients, web fonts or external stylesheets — all of which
Outlook for Windows silently drops.
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.abspath(os.path.join(HERE, "..", "react-app", "public", "signature"))

# ── The only line to change if the domain moves ──────────────────────────────
BASE = "https://digitaltrustfuturesfoundation.org"

ORG = "Digital Trust Futures Foundation"
ORG_LEGAL = "Digital Trust Futures Foundation NPC"
TAGLINE = "Safe infrastructure. Trusted technology. Inclusive digital futures."
SECURITY_EMAIL = "info@digitaltrustfuturesfoundation.org"

# Brand palette, sampled from the wordmark
NAVY = "#133A63"
ORANGE = "#BC5012"
TEAL = "#247E83"
INK = "#37434F"
MUTED = "#5A6672"
FAINT = "#8A929B"
RULE = "#DFD9D0"

SERIF = "Georgia, 'Times New Roman', Times, serif"
SANS = "Arial, 'Helvetica Neue', Helvetica, sans-serif"

PEOPLE = [
    dict(
        slug="godfrey-kutumela",
        name="Godfrey Kutumela",
        title="Executive Lead and Digital Trust Practitioner",
        email="godfrey.kutumela@digitaltrustfuturesfoundation.org",
        phone_display="+27 83 680 3427",
        phone_tel="+27836803427",
        photo="godfrey-kutumela.png",
    ),
]


def _data_uri(filename):
    """Inline an image as base64 so it renders with no hosting at all."""
    import base64
    path = os.path.join(HERE, "..", "react-app", "public", "assets", "img", "signature", filename)
    with open(path, "rb") as fh:
        return "data:image/png;base64," + base64.b64encode(fh.read()).decode()


def signature_html(p, embed=False):
    """The signature block itself — this is what gets pasted into the client.

    embed=True inlines the images as base64. Use it for the install page: the
    photo then renders before the site is published, and because mail clients
    re-host or attach images from pasted content, the photo travels with the
    signature instead of depending on a live URL.
    """
    web_label = BASE.replace("https://", "")
    photo_src = _data_uri(p["photo"]) if embed else f"{BASE}/assets/img/signature/{p['photo']}"
    logo_src = _data_uri("dtff-logo.png") if embed else f"{BASE}/assets/img/signature/dtff-logo.png"
    return f"""<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;max-width:600px;font-family:{SANS};">
  <tr>
    <td style="padding:0 18px 0 0;vertical-align:top;" width="100">
      <img src="{photo_src}" width="100" height="100" alt="{p['name']}" style="display:block;width:100px;height:100px;border:0;outline:none;text-decoration:none;">
    </td>
    <td style="vertical-align:top;padding:0;">

      <div style="font-family:{SERIF};font-size:21px;line-height:26px;color:{NAVY};letter-spacing:-0.2px;mso-line-height-rule:exactly;">
        {p['name']}
      </div>

      <div style="font-family:{SANS};font-size:13px;line-height:18px;color:{ORANGE};font-weight:bold;padding-top:3px;mso-line-height-rule:exactly;">
        {p['title']}
      </div>

      <div style="font-family:{SANS};font-size:12px;line-height:17px;color:{NAVY};letter-spacing:1.1px;text-transform:uppercase;padding-top:5px;mso-line-height-rule:exactly;">
        {ORG}
      </div>

      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;padding-top:0;">
        <tr><td style="padding:11px 0 9px 0;">
          <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
            <tr><td width="34" height="2" style="background-color:{ORANGE};font-size:0;line-height:0;">&nbsp;</td></tr>
          </table>
        </td></tr>
      </table>

      <div style="font-family:{SANS};font-size:13px;line-height:21px;color:{INK};mso-line-height-rule:exactly;">
        <a href="mailto:{p['email']}" style="color:{INK};text-decoration:none;">{p['email']}</a><br>
        <a href="tel:{p['phone_tel']}" style="color:{INK};text-decoration:none;">{p['phone_display']}</a><br>
        <a href="{BASE}" style="color:{NAVY};text-decoration:none;font-weight:bold;">{web_label}</a>
      </div>

    </td>
  </tr>

  <tr><td colspan="2" style="padding:18px 0 0 0;font-size:0;line-height:0;">
    <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse:collapse;width:100%;">
      <tr>
        <td width="45%" height="3" style="background-color:{NAVY};font-size:0;line-height:0;">&nbsp;</td>
        <td width="30%" height="3" style="background-color:{ORANGE};font-size:0;line-height:0;">&nbsp;</td>
        <td width="25%" height="3" style="background-color:{TEAL};font-size:0;line-height:0;">&nbsp;</td>
      </tr>
    </table>
  </td></tr>

  <tr><td colspan="2" style="padding:16px 0 0 0;">
    <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;">
      <tr>
        <td style="padding:0 16px 0 0;vertical-align:middle;" width="150">
          <a href="{BASE}" style="text-decoration:none;border:0;">
            <img src="{logo_src}" width="150" height="72" alt="{ORG}" style="display:block;width:150px;height:72px;border:0;outline:none;text-decoration:none;">
          </a>
        </td>
        <td style="vertical-align:middle;padding:0;">
          <div style="font-family:{SERIF};font-size:14px;line-height:20px;color:{NAVY};font-style:italic;mso-line-height-rule:exactly;">
            {TAGLINE}
          </div>
          <div style="font-family:{SANS};font-size:11px;line-height:16px;color:{TEAL};letter-spacing:0.8px;text-transform:uppercase;padding-top:6px;mso-line-height-rule:exactly;">
            Independent &nbsp;&middot;&nbsp; Non-profit &nbsp;&middot;&nbsp; Public interest
          </div>
        </td>
      </tr>
    </table>
  </td></tr>

  <tr><td colspan="2" style="padding:15px 0 0 0;">
    <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-collapse:collapse;width:100%;">
      <tr><td height="1" style="background-color:{RULE};font-size:0;line-height:0;">&nbsp;</td></tr>
    </table>
  </td></tr>

  <tr><td colspan="2" style="padding:12px 0 0 0;">
    <div style="font-family:{SANS};font-size:11px;line-height:16px;color:{MUTED};mso-line-height-rule:exactly;">
      <strong style="color:{INK};">{ORG_LEGAL}</strong> &nbsp;&middot;&nbsp; Registered as a non-profit company in South Africa
    </div>
    <div style="font-family:{SANS};font-size:10px;line-height:15px;color:{FAINT};padding-top:7px;mso-line-height-rule:exactly;">
      This message and any attachments are confidential and intended only for the addressee. If you have received it in
      error, please notify the sender and delete it. Personal information is processed in line with the Protection of
      Personal Information Act (POPIA); see our privacy policy at
      <a href="{BASE}/legal/privacy" style="color:{FAINT};text-decoration:underline;">{web_label}/legal/privacy</a>.
      Views expressed are those of the sender and do not constitute a certification, assurance opinion or endorsement by
      the Foundation.
    </div>
    <div style="font-family:{SANS};font-size:10px;line-height:15px;color:{FAINT};padding-top:6px;mso-line-height-rule:exactly;">
      Reporting a security issue? Please use
      <a href="mailto:{SECURITY_EMAIL}" style="color:{TEAL};text-decoration:none;font-weight:bold;">{SECURITY_EMAIL}</a>
      rather than replying here &mdash; see our
      <a href="{BASE}/security" style="color:{FAINT};text-decoration:underline;">disclosure policy</a>.
    </div>
  </td></tr>
</table>"""


def signature_text(p):
    web_label = BASE.replace("https://", "")
    return f"""{p['name']}
{p['title']}
{ORG}

{p['email']}
{p['phone_display']}
{web_label}

{TAGLINE}
Independent | Non-profit | Public interest

{ORG_LEGAL} - Registered as a non-profit company in South Africa

This message and any attachments are confidential and intended only for the
addressee. If you have received it in error, please notify the sender and
delete it. Personal information is processed in line with the Protection of
Personal Information Act (POPIA); see {web_label}/legal/privacy. Views
expressed are those of the sender and do not constitute a certification,
assurance opinion or endorsement by the Foundation.

Reporting a security issue? Please use {SECURITY_EMAIL} rather than replying
here - see {web_label}/security
"""


def install_page(p, sig):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Email signature — {p['name']} — {ORG}</title>
<link rel="stylesheet" href="install.css">
</head>
<body>
<div class="wrap">
  <p class="eyebrow">Email signature</p>
  <h1>{p['name']}</h1>
  <p class="lede">{p['title']}, {ORG}. Install this once per mail client &mdash; signatures do not sync between them.</p>

  <div class="stage" id="sig">{sig}</div>
  <p class="hint">
    <button class="btn" id="copy" type="button">Copy signature</button>
    <span class="ok" id="done" hidden>Copied &mdash; now paste it into your mail client</span>
  </p>

  <h2>Gmail</h2>
  <ol>
    <li>Click <strong>Copy signature</strong> above.</li>
    <li>In Gmail, open <strong>Settings</strong> (gear) &rarr; <strong>See all settings</strong> &rarr; <strong>General</strong>.</li>
    <li>Scroll to <strong>Signature</strong>, click <strong>Create new</strong>, and name it <code>DTFF</code>.</li>
    <li>Click into the signature box and paste with <code>Cmd/Ctrl + V</code>.</li>
    <li>Under <strong>Signature defaults</strong>, set it for new emails and replies.</li>
    <li><strong>Save changes</strong> at the bottom of the page.</li>
  </ol>

  <h2>Outlook (web and new Outlook for Windows / Mac)</h2>
  <ol>
    <li>Click <strong>Copy signature</strong> above.</li>
    <li><strong>Settings</strong> &rarr; <strong>Mail</strong> &rarr; <strong>Compose and reply</strong>.</li>
    <li>Create a signature, paste into the editor, and save.</li>
    <li>Select it as the default for new messages and replies.</li>
  </ol>

  <h2>Apple Mail</h2>
  <ol>
    <li>Click <strong>Copy signature</strong> above.</li>
    <li><strong>Mail</strong> &rarr; <strong>Settings</strong> &rarr; <strong>Signatures</strong>.</li>
    <li>Select the account, click <strong>+</strong>, then paste into the right-hand pane.</li>
    <li>Untick <strong>Always match my default message font</strong>, or Apple Mail will strip the styling.</li>
  </ol>

  <h2>Plain-text version</h2>
  <p class="lede">For clients set to plain text, and as the fallback some recipients will see.</p>
  <pre id="plain">{signature_text(p).strip()}</pre>

  <hr>
  <div class="note">
    <strong>The photo travels with the signature.</strong> The images above are embedded directly in this page, so they
    render whether or not the website is live. When you paste into Gmail it re-uploads them to Google&rsquo;s servers;
    Outlook and Apple Mail attach them to the message. Either way the photo reaches your recipients without depending on
    <code>{BASE}</code> being up.<br><br>
    Some recipients block images by default and will see text only &mdash; which is why every detail above is written as
    real text rather than baked into a picture.
  </div>
</div>

<script src="install.js" defer></script>
</body>
</html>
"""


INSTALL_CSS = """  [hidden]{{display:none!important}}
  body{{margin:0;background:#F7F5F1;color:#131C26;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
    font-size:15px;line-height:1.6;-webkit-font-smoothing:antialiased}}
  .wrap{{max-width:820px;margin:0 auto;padding:40px 24px 80px}}
  h1{{font-family:Georgia,serif;font-weight:400;font-size:30px;line-height:1.2;
    letter-spacing:-.5px;color:{NAVY};margin:0 0 6px}}
  h2{{font-family:Georgia,serif;font-weight:400;font-size:20px;color:{NAVY};
    margin:38px 0 10px}}
  .eyebrow{{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;
    letter-spacing:.16em;text-transform:uppercase;color:{ORANGE};margin:0 0 10px}}
  .lede{{color:#37434F;margin:0 0 8px;max-width:62ch}}
  .stage{{background:#fff;border:1px solid #DFD9D0;border-radius:12px;
    padding:32px;margin:22px 0 8px;overflow-x:auto}}
  .hint{{font-size:13px;color:#5A6672;margin:0 0 26px}}
  ol{{padding-left:20px;max-width:66ch}} li{{margin-bottom:9px}}
  code{{background:#EFEBE4;padding:.12em .4em;border-radius:4px;font-size:.9em}}
  pre{{background:#fff;border:1px solid #DFD9D0;border-radius:10px;padding:18px;
    overflow-x:auto;font-size:12.5px;line-height:1.55;white-space:pre-wrap}}
  .note{{background:#FBE7DA;border-left:3px solid {ORANGE};border-radius:6px;
    padding:14px 18px;font-size:13.5px;color:#37434F;max-width:70ch}}
  .btn{{display:inline-block;background:{NAVY};color:#fff;text-decoration:none;
    padding:11px 20px;border-radius:999px;font-size:14px;font-weight:600;border:0;
    cursor:pointer;font-family:inherit}}
  .btn:hover{{background:#1B4B7D}}
  .ok{{display:inline-block;margin-left:12px;color:{TEAL};font-size:13px;font-weight:600}}
  hr{{border:0;border-top:1px solid #DFD9D0;margin:34px 0}}
"""

INSTALL_JS = """document.getElementById('copy').addEventListener('click', function () {{
  var node = document.getElementById('sig');
  var range = document.createRange();
  range.selectNodeContents(node);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  try {{
    document.execCommand('copy');
    var ok = document.getElementById('done');
    ok.hidden = false;
    setTimeout(function () {{ ok.hidden = true; }}, 4000);
  }} catch (e) {{
    alert('Copy failed — select the signature above and press Cmd/Ctrl + C.');
  }}
  sel.removeAllRanges();
}});
"""


def main():
    os.makedirs(OUT, exist_ok=True)
    # External assets: the site's Content-Security-Policy blocks inline
    # <style> and <script>, so this page follows the same rule as every other.
    with open(os.path.join(OUT, "install.css"), "w", encoding="utf-8") as fh:
        fh.write(INSTALL_CSS.replace("{{", "{").replace("}}", "}"))
    with open(os.path.join(OUT, "install.js"), "w", encoding="utf-8") as fh:
        fh.write(INSTALL_JS.replace("{{", "{").replace("}}", "}"))
    for p in PEOPLE:
        sig_hosted = signature_html(p, embed=False)
        sig_embedded = signature_html(p, embed=True)
        # The install page uses embedded images so the photo always renders.
        with open(os.path.join(OUT, f"{p['slug']}.html"), "w", encoding="utf-8") as fh:
            fh.write(install_page(p, sig_embedded))
        with open(os.path.join(OUT, f"{p['slug']}-block-embedded.html"), "w", encoding="utf-8") as fh:
            fh.write(sig_embedded + "\n")
        sig = sig_hosted
        with open(os.path.join(OUT, f"{p['slug']}.txt"), "w", encoding="utf-8") as fh:
            fh.write(signature_text(p))
        with open(os.path.join(OUT, f"{p['slug']}-block.html"), "w", encoding="utf-8") as fh:
            fh.write(sig + "\n")
        print(f"  signature/{p['slug']}.html                 install page (images embedded)")
        print(f"  signature/{p['slug']}-block-embedded.html  markup, images embedded")
        print(f"  signature/{p['slug']}-block.html           markup, images hosted")
        print(f"  signature/{p['slug']}.txt                  plain text")
    print(f"\nImages must be reachable at {BASE}/assets/img/signature/")


if __name__ == "__main__":
    main()
