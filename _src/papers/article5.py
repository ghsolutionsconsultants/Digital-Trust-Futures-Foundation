# -*- coding: utf-8 -*-
"""Article 5 of 6 — The Localisation Trap.

Transcribed from `DTFF Digital Sovereignty Series Article_5 Localisation Trap -
6 Nov 2026.docx`, which was already DTFF-authored. Figures 1–8 are the source's
own diagrams, stored once in react-app/public/assets/papers/figures/ and drawn
from there by both the PDF and the web article.

The content is written once, below, in the same block schema as
react-app/src/data/insights.ts. The PDF is rendered from it, and

    python3 article5.py --web

prints the TypeScript for the web article, so the two formats cannot drift.
Inline emphasis is **bold**.

Departures from the source, all deliberate:
  * Sections follow the series convention: an unnumbered executive summary,
    then 1-6. The source numbered the summary as section 1. No text refers to a
    section by number, so nothing else changes.
  * The author's title follows the series ("Executive Lead and Digital Trust
    Practitioner"); the source says "Executive Director". Flagged for review.
  * The numbered references keep the source's numbering, which starts at [12]
    and skips [13] — the in-text citations depend on it.
"""
import json
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
FIG_WEB = "/assets/papers/figures/localisation-trap"
FIG_DIR = os.path.join(ROOT, "react-app", "public", FIG_WEB.lstrip("/"))

SLUG = "the-localisation-trap"
TITLE = "The Localisation Trap"
SUBTITLE = "Why data protection law needs technical control"
STANDFIRST = (
    "Local hosting solves a residency problem, not automatically a sovereignty problem. This article "
    "separates where citizens’ data sits from who can technically make it intelligible, and sets out the "
    "key custody, logging and procurement controls that turn data protection law into control a country "
    "can actually enforce."
)
EDITION_NOTE = [
    "This edition updates the June 2026 original for developments since: the lapse of FISA Section 702, "
    "the EU’s proposed Cloud and AI Development Act, the pending appeal on the EU–US Data Privacy "
    "Framework, and provider testimony to a French Senate inquiry.",
    "It is general analysis, not legal advice. Confirm legal and regulatory status with counsel before "
    "acting.",
]


def fig(n, caption, alt):
    return {"k": "figure", "n": n, "caption": f"Figure {n}. {caption}", "alt": alt}


SECTIONS = [
    {"id": "executive-summary", "title": "Executive summary", "blocks": [
        {"k": "lede", "text":
            "Digital sovereignty and data protection are often discussed as separate disciplines, one "
            "concerned with infrastructure and geopolitics, the other with privacy compliance. For citizens "
            "whose biometric, identity, health, welfare or payment data sits inside digital public "
            "infrastructure (DPI), they face the same practical question: **who can access this data, under "
            "what authority, and can the state actually prevent unauthorised or extraterritorial access?**"},
        {"k": "p", "text":
            "This article addresses the most common sovereignty misconception: that local hosting equals "
            "control. Data residency can be valuable, but it does not remove legal access through foreign "
            "corporate jurisdiction unless technical safeguards such as external key custody, confidential "
            "computing and verifiable access controls support it. In the cloud era, a country’s data "
            "protection law and the technical architecture of its systems must be designed together."},
        {"k": "stats", "items": [
            {"value": "2018", "label": "US CLOUD Act: reach follows possession, custody or control, not location"},
            {"value": "12 Jun 2026", "label": "FISA Section 702 lapsed; collection runs on court certifications to about March 2027"},
            {"value": "4 levels", "label": "Assurance tiers in the EU’s proposed Cloud and AI Development Act"},
            {"value": "31 May 2024", "label": "South Africa publishes its National Policy on Data and Cloud"},
        ]},
        {"k": "h3", "text": "Key points for policymakers and DPI leaders"},
        {"k": "ul", "items": [
            "PII protection is where sovereignty commitments are either made real or exposed as merely legal language.",
            "Purpose limitation, minimisation, cross-border transfer controls and breach notification all reinforce sovereignty, but they cannot neutralise foreign compulsion orders on their own.",
            "Local hosting solves a residency problem, not automatically a sovereignty problem.",
            "Countries should distinguish clearly between where data sits and who can technically make it intelligible.",
        ]},
        fig(1, "Residency and sovereignty are different questions: where the data sits, and who controls and can compel it.",
            "A two-by-two matrix. One axis is whether data is stored abroad or in-country; the other is whether it is controlled domestically or within foreign reach. Data stored in-country but within foreign reach is labelled the localisation trap."),
        {"k": "h3", "text": "What has changed since the June 2026 edition"},
        {"k": "p", "text":
            "Several developments since the first edition sharpen, rather than soften, its argument. They are "
            "summarised below; the sources are listed in the reference section and should be checked against "
            "primary texts before any official use."},
        {"k": "table", "head": ["Development", "What changed", "Why it matters here"],
         "ratios": [0.2, 0.45, 0.35],
         "caption": "Table 1. Developments since June 2026.",
         "rows": [
            ["US FISA Section 702",
             "The statute lapsed on 12 June 2026, the first lapse since 2008. Collection continues under court certifications approved on 17 March 2026, which run to about March 2027. Reauthorisation was unresolved in late October 2026 [14][15].",
             "Legal exposure has not disappeared; it has become more uncertain. Technical control does not depend on how Congress votes."],
            ["EU Cloud and AI Development Act (CADA)",
             "Proposed on 3 June 2026: a four-level cloud sovereignty framework linked to public-sector use, still in negotiation [16][17].",
             "Governments are turning sovereignty into procurement criteria with graduated assurance."],
            ["EU–US Data Privacy Framework",
             "Upheld by the EU General Court on 3 September 2025; an appeal (C-703/25 P) is pending; in July 2026 the European Data Protection Board asked the Commission to assess whether its functioning is affected [18].",
             "Adequacy is a legal arrangement that can change; architectures that survive its loss are more resilient."],
            ["Provider testimony",
             "In June 2025, Microsoft France told a French Senate inquiry under oath that it could not guarantee EU citizens’ data would never be transmitted to US authorities [19].",
             "Even a major provider cannot promise what its own jurisdiction may require."],
         ]},
    ]},

    {"id": "pii-load-bearing", "title": "1. PII is the load-bearing concept", "blocks": [
        {"k": "p", "text":
            "The sovereignty debate can sound abstract when discussed in terms of cloud regions, procurement "
            "rules and national strategy. It becomes concrete when viewed through the citizen’s record. "
            "Biometric identifiers, national ID numbers, payment histories, health information, welfare "
            "eligibility data and consent tokens are personally identifiable information (PII). Sovereignty is "
            "therefore ultimately about whether the state can protect people’s data under real-world legal "
            "and technical pressure."},
        {"k": "p", "text":
            "The operational question is simple: who can access this record, under what authority, and can "
            "the country that collected it **prevent** unauthorised or extraterritorial access, rather than "
            "merely object after the fact?"},
        fig(2, "Six paths to a citizen record: sovereignty concerns the paths the state can prevent, not only those it can lawfully authorise.",
            "A citizen record at the centre, with six paths leading to it: authorised service use, operator and support staff, cloud provider access, foreign legal compulsion, criminals and insiders, and cross-border processors."),
        {"k": "h3", "text": "Why DPI records are different"},
        {"k": "table", "head": ["Record type", "Why loss of control is serious", "Control emphasis"],
         "ratios": [0.22, 0.42, 0.36],
         "caption": "Table 2. Record types and what is at stake.",
         "rows": [
            ["Biometric identifiers", "Fingerprints, iris and face templates cannot be reissued; compromise is permanent.", "Template protection, no raw export, strictly limited processors."],
            ["National ID and civil registry data", "The root of identity for every other service; population-scale aggregation reveals who people are and where they live.", "Key custody by a domestic institution; tight administrative access."],
            ["Payment and transaction histories", "Reveal behaviour, associations and finances; useful for targeting and coercion.", "Minimisation, pseudonymous identifiers, audit of every look-up."],
            ["Health and welfare eligibility data", "Expose vulnerability and entitlement; misuse harms the most exposed people.", "Purpose limitation; separate stores; strong redress routes."],
            ["Consent tokens and logs", "Show relationships between people and services; the audit trail is itself personal data.", "Integrity protection; independent logging."],
         ]},
        {"k": "p", "text":
            "Three features make DPI different from ordinary enterprise data. **Scale:** one platform may hold "
            "the records of most of a population. **Permanence:** some identifiers cannot be changed after "
            "compromise. **Dependence:** citizens often cannot opt out of essential services, so failures of "
            "control are failures of the public trust that sustains adoption. These features turn data "
            "protection from a compliance task into a question of national resilience."},
    ]},

    {"id": "reinforce", "title": "2. Where data protection and sovereignty reinforce each other", "blocks": [
        {"k": "p", "text":
            "Data protection law already contains many legal building blocks for sovereignty: lawful basis, "
            "purpose limitation, minimisation, cross-border transfer controls, individual rights and breach "
            "notification. When these principles are technically enforced, they become sovereignty controls."},
        {"k": "table", "head": ["Data protection principle", "Sovereignty function it performs", "What makes it enforceable"],
         "ratios": [0.22, 0.5, 0.28],
         "caption": "Table 3. Data protection principles and the sovereignty function each performs.",
         "rows": [
            ["Purpose limitation", "Constrains what a foreign processor, or a foreign government compelling that processor, can lawfully justify accessing data for, narrowing the practical target of extraterritorial requests.", "Purpose-bound access policies and denial logs."],
            ["Data minimisation", "Reduces the volume and sensitivity of PII exposed in any one processing operation or breach, reducing the consequence of any sovereignty failure.", "Selective disclosure; pseudonymous tokens."],
            ["Cross-border transfer restriction (for example GDPR Chapter V; POPIA section 72)", "The direct legal expression of data sovereignty: a formal mechanism for a state to control where its citizens’ data may lawfully travel.", "Egress controls; regional key boundaries."],
            ["Data subject rights (access, erasure, objection)", "Gives citizens, not only the state, a recourse mechanism; failures are often first discovered through individual complaints.", "Searchable audit trails and retrieval tooling."],
            ["Breach notification", "Forces visibility. A sovereignty failure that is never disclosed is, from a policy standpoint, indistinguishable from a success; mandatory notification makes it observable.", "Independent logging and tested incident processes."],
            ["Security safeguards", "Requires technical measures proportionate to risk, which is where key custody and encryption become legal obligations.", "Encryption with externally held keys; enclaves."],
            ["Accountability and assessment", "Places responsibility on a named controller and requires impact assessment before risky processing.", "A named institution accountable for key custody."],
         ]},
        fig(3, "From legal principle to technical control to evidence a country can ask for.",
            "Six rows, each running from a data protection principle to the technical control that enforces it to the evidence to ask for: purpose limitation, data minimisation, transfer restriction, security safeguards, subject rights and redress, and breach notification."),
        {"k": "h3", "text": "The legal landscape that supports this"},
        {"k": "ul", "items": [
            "**European Union.** GDPR Chapter V regulates transfers, and Article 48 provides that a third-country court or authority decision requiring transfer is recognisable only based on an international agreement.",
            "**South Africa.** POPIA section 72 restricts transfers of personal information to third parties in foreign countries unless the recipient is bound by adequate protection or another lawful basis applies. The National Policy on Data and Cloud (Cabinet approval 27 March 2024; published 31 May 2024) requires government data incorporating content on national security and sovereignty to be stored only in South African infrastructure, and imposes no further localisation requirement, leaving cross-border transfers to POPIA [20][21].",
            "**Elsewhere in Africa.** Reporting indicates that Nigeria’s national guidelines require sovereign data to be hosted locally and its central bank has introduced localisation requirements for payments; that Rwanda requires localisation of sensitive financial, payment and telecommunications data; and that Kenya restricts certain transfers [22]. Rules differ and change, and should be checked for each jurisdiction.",
            "**Global.** The pattern is varied: some states legislate localisation, others regulate transfers, and others use procurement tiers, as the EU’s proposed framework does.",
        ]},
        {"k": "callout", "tone": "teal", "title": "The point to take from the law", "paras": [
            "These laws make a state’s intent explicit. They do not by themselves determine what a "
            "foreign-controlled provider can be compelled to do. That depends on technical control, which the "
            "next section examines."]},
    ]},

    {"id": "law-not-enough", "title": "3. Where law alone is not enough", "blocks": [
        {"k": "p", "text":
            "The gap is that domestic data protection law cannot automatically override a foreign "
            "government’s lawful demand to a provider under that foreign government’s own law. A "
            "contract clause, policy promise or local residency commitment may help, but it cannot by itself "
            "neutralise a legal authority directed at the provider or its parent company. Conflicts between "
            "legal systems are resolved by diplomacy, litigation, and often compliance by the provider with the "
            "demand that carries the greatest immediate penalty."},
        {"k": "p", "text":
            "This is why technical enforcement matters. Encryption with externally held keys, confidential "
            "computing, strict access controls, independent logs and domestic or regional key custody change "
            "what can actually be disclosed, read or misused. **They turn a legal promise into an enforceable "
            "technical constraint.**"},
        fig(4, "What a compelled disclosure can reach depends on who holds keys and administrative access, not on where the data sits.",
            "A decision flow. A foreign authority issues a lawful order directed at the provider or its parent. If the provider holds keys or administrative access, it can produce readable data. If not, only ciphertext or enclave-protected data is available, with keys held by a domestic institution."),
        {"k": "h3", "text": "What law can do, and what technology adds"},
        {"k": "table", "head": ["Question", "What law and contract can do", "What technical control adds"],
         "ratios": [0.26, 0.34, 0.4],
         "caption": "Table 4. Complementary roles of legal and technical controls.",
         "rows": [
            ["Can the provider be told to hand over data?", "Set notification, challenge and cooperation duties in the contract; assert domestic jurisdiction.", "Ensure that what the provider holds is unreadable without a key it does not control."],
            ["Will the state learn about an access?", "Mandate breach notification and audit rights.", "Independent, tamper-evident logging that the provider cannot silently edit."],
            ["Can staff of the provider reach the data?", "Prohibit support access except under agreed procedure.", "Approval workflows, just-in-time access, customer lockbox, geographic and personnel restrictions."],
            ["Can the state leave?", "Require portability and exit assistance.", "Customer-held keys and tested export, so exit does not depend on the provider’s goodwill."],
         ]},
        {"k": "h3", "text": "The evidence of fragility"},
        {"k": "ul", "items": [
            "**Provider testimony.** Microsoft France’s June 2025 statement under oath shows that even when data is stored in the EU, a provider subject to US law cannot promise to exclude US access [19].",
            "**Adequacy is conditional.** The EU–US Data Privacy Framework rests largely on a US executive order, faces a pending appeal, and has seen its oversight board lose its quorum; the EDPB asked the Commission in July 2026 to assess whether its functioning is affected [18].",
            "**Legal change cuts both ways.** The lapse of FISA Section 702 does not end US collection under existing certifications, and Executive Order 12333 is unaffected; a future reauthorisation may add or remove safeguards [14][15].",
        ]},
        {"k": "callout", "title": "A caution", "paras": [
            "External keys and enclaves are not a magic shield. A key manager inside the same jurisdiction as "
            "the compelled provider does not help; keys held outside it add latency, availability dependence "
            "and the risk that losing a key means losing the data. These trade-offs are part of the design, "
            "which is why the honest statement of what is protected must be precise."]},
    ]},

    {"id": "localisation-fallacy", "title": "4. The localisation fallacy", "blocks": [
        {"k": "p", "text":
            "The localisation fallacy is the belief that if a global provider hosts data inside the country, "
            "the data is automatically beyond foreign reach. Local hosting may solve latency, residency and "
            "some policy requirements. It does not necessarily solve control, as the operating company or its "
            "parent may remain subject to extraterritorial legal authority."},
        fig(5, "Legal instruments that can create reach, and whether in-country hosting prevents them (status as at October 2026; sources in the reference list).",
            "A table of five instruments — the US CLOUD Act, FISA Section 702, Executive Order 12333, China's National Intelligence Law Article 7, and Russia's Federal Law 152-FZ — showing what triggers each one's reach and whether in-country hosting prevents it. For the three US instruments, it does not."),
        {"k": "h3", "text": "The mechanisms"},
        {"k": "ul", "items": [
            "**US CLOUD Act (2018).** Amends the Stored Communications Act so that compelled disclosure turns on the provider’s possession, custody or control of data, not on its location. It also provides for executive agreements between the United States and qualifying foreign governments [12].",
            "**FISA Section 702.** Authorises US intelligence agencies to direct providers to disclose communications of non-US persons reasonably believed to be abroad. The statute lapsed on 12 June 2026. Because collection runs on certifications approved in March 2026, it can continue to about March 2027, and Congress has not yet reauthorised the law [14][15].",
            "**Executive Order 12333.** Underpins US signals intelligence outside the United States and needs no statute or court approval; it was untouched by the 702 lapse.",
            "**Other jurisdictions.** China’s National Intelligence Law (Article 7) obliges organisations to support state intelligence work, and Russia’s Federal Law 152-FZ requires localisation of citizens’ personal data on Russian servers. Their structures differ, but each can create sovereignty tensions.",
        ]},
        fig(6, "Selected milestones in the law of cross-border access, 2018 to 2026.",
            "A timeline: 2018 US CLOUD Act; 2020 Schrems II strikes down the Privacy Shield; 2023 EU-US Data Privacy Framework adopted; 2024 South Africa's Policy on Data and Cloud and the US RISAA; 2025 Microsoft France tells the Senate it cannot guarantee exclusion, and the General Court upholds the framework; June 2026 the EU proposes CADA and Section 702 lapses; July 2026 the EDPB asks the Commission to reassess the framework."),
        {"k": "h3", "text": "Residency versus sovereignty"},
        {"k": "p", "text":
            "The point is not that every foreign provider is unsafe or unusable. Leaders must distinguish "
            "between data residency and data sovereignty. **Residency is where the data sits. Sovereignty is "
            "who can make the data intelligible**, who can compel access, who holds the keys, who controls "
            "administrators, and who can independently verify what happened. Location still matters for "
            "latency, physical security, resilience and the reach of domestic law enforcement, so the aim is to "
            "add control to residency, not to dismiss it."},
        {"k": "p", "text":
            "The EU’s proposed four-level cloud sovereignty framework illustrates where policy is heading: "
            "its lower level concerns EU-based data processing, while higher levels add conditions on "
            "third-country control, ownership, supply chain transparency, personnel clearance and independent "
            "audit [16][17]. Africa’s governments are experimenting along similar lines, for example "
            "through South Africa’s policy on sovereign cloud capacity and in-country storage of "
            "national-security-related government data [20]."},
    ]},

    {"id": "honest-formulation", "title": "5. The honest formulation for government leaders", "blocks": [
        {"k": "callout", "tone": "teal", "title": "The honest formulation a country should use", "paras": [
            "“Our data is hosted in-country” is a true and meaningful statement about residency. "
            "“Our data is sovereign” claims legal and technical control that residency alone does not "
            "establish.",
            "A government that uses these two statements interchangeably in public communication is, often "
            "unknowingly, giving its citizens false assurance about a real and specific legal exposure."]},
        {"k": "p", "text":
            "A government can still use foreign or regional cloud infrastructure responsibly. But it should "
            "require externally controlled keys, confidential computing where appropriate, independently "
            "auditable access logs, contractual challenge processes, support-access restrictions, incident "
            "transparency, and a clear domestic or regional institution accountable for key custody and "
            "access policy."},
        fig(7, "A seven-layer sovereignty control stack: location is the first layer, not the last.",
            "Seven stacked layers, each paired with the question it answers: 1 location, where does the data sit; 2 law and contract, which jurisdiction governs; 3 key custody, who holds the keys; 4 confidential computing, is data protected while processed; 5 administrator and support access, who can touch the system; 6 independent logging and verification, who can verify what happened; 7 accountable institution, who is answerable for key custody and access policy."),
        {"k": "h3", "text": "Choosing a key custody model"},
        {"k": "table", "head": ["Option", "Who holds the keys", "What it protects", "Limits"],
         "ratios": [0.2, 0.25, 0.27, 0.28],
         "caption": "Table 5. Key custody options and their limits.",
         "rows": [
            ["Provider-managed keys", "The provider.", "Theft of storage media; ordinary external breach.", "The provider, and anyone who can compel it, can decrypt."],
            ["Customer-managed keys in the provider’s key service", "Customer controls policy; key material stays on provider infrastructure.", "Separation of duties; ability to revoke.", "Provider infrastructure still hosts the keys; compelled access remains plausible."],
            ["External key manager (customer-run hardware security module)", "A customer or domestic institution, outside the provider.", "Provider cannot decrypt without live key requests the customer can refuse or revoke.", "Added latency and availability dependence; plaintext exposed during processing unless enclaves are used."],
            ["Double key encryption", "Two keys; one held only by the customer.", "Provider cannot read protected content.", "Limits provider services such as search and analytics."],
            ["Confidential computing with attestation", "Data decrypted only inside attested hardware enclaves.", "Protects data in use from host administrators.", "Trust in hardware vendors; operational complexity; not every service supported."],
         ]},
        {"k": "p", "text":
            "Cloud vendors and independent key-management specialists offer variants of each of these models, "
            "and the reference list at the end of this article names several. Buyers should test any model "
            "against the compelled-disclosure scenario above rather than rely on a marketing label."},
        {"k": "h3", "text": "What to say, and what to avoid"},
        {"k": "table", "head": ["Statement", "Accuracy", "A more accurate formulation"],
         "ratios": [0.36, 0.14, 0.5],
         "caption": "Table 6. Public statements and their accuracy.",
         "rows": [
            ["“Our data is hosted in-country.”", "True if verified", "A residency statement; say what is hosted, where, and under which operator."],
            ["“Our data is sovereign.”", "Unproven", "Only after key custody, access control and an accountable institution are evidenced."],
            ["“Foreign companies cannot access our data.”", "Risky", "Depends on key custody, support access and the provider’s parent jurisdiction."],
            ["“Local law protects citizens’ data.”", "Partly true", "Local law governs processing in the country but cannot alone override a foreign order to a foreign provider."],
            ["“Citizen records are encrypted with keys held by [named institution]; the provider cannot read them; access is logged and independently audited.”", "Precise", "The form of words to aim for, once it is true."],
         ]},
    ]},

    {"id": "decision-path", "title": "6. From principle to procurement: a decision path", "blocks": [
        {"k": "p", "text":
            "Principles become useful only when they change what a government buys and how it tests it. The "
            "decision path below is a practical way to match the protection to the data. It is an illustrative "
            "framework developed for this edition, not a legal standard, and should be adapted to local law."},
        fig(8, "A four-tier decision path from data classification to architecture.",
            "A decision flow. Classify the data and the harm if control is lost. If it contains no PII or national-security content, it is tier 1: any region, standard security. Otherwise it is tier 2 personal data, tier 3 sensitive PII such as biometrics, ID, health and payments, or tier 4 national-security or systemic content. For every tier above 1, name the domestic or regional institution accountable for key custody and access policy, and test it."),
        {"k": "table", "head": ["Tier", "Examples", "Minimum architecture", "Evidence to demand"],
         "ratios": [0.2, 0.24, 0.32, 0.24],
         "caption": "Table 7. Minimum architecture and evidence by tier.",
         "rows": [
            ["1 — Public or low risk", "Open data, public content.", "Any region; standard security.", "Standard assurance reports."],
            ["2 — Personal data", "Contact details, service usage.", "Residency where required; lawful transfer mechanism; minimisation.", "Data flow map; transfer assessment."],
            ["3 — Sensitive PII", "Biometrics, ID numbers, health, payments, welfare, consent.", "Provider cannot read data: external keys, tested custody, audited access, enclaves where appropriate.", "Key custody records, attestation, independent access logs."],
            ["4 — National-security or systemic", "Registry master keys, authentication roots, strategic datasets.", "Domestic operator; domestic keys; enclaves; vetted staff; independent audit.", "Independent audit and exercise results."],
         ]},
        {"k": "h3", "text": "Procurement requirements"},
        {"k": "ol", "items": [
            "**Key custody.** Keys held by a named domestic or regional institution, outside the provider’s control.",
            "**Confidential computing** where data in use must be protected, with attestation.",
            "**Independent logs.** Access logs the provider cannot alter, available to the state.",
            "**Challenge and notification.** A contractual duty to notify and challenge compelled requests to the extent the law permits.",
            "**Support-access limits.** Approval, time limits and geographic restrictions for provider staff.",
            "**Incident transparency.** Time-bound notification of any access outside agreed procedure.",
            "**Accountable institution.** A named body answerable for key custody and access policy.",
            "**Exit and portability.** Tested export and a plan to leave without the provider’s cooperation.",
        ]},
        {"k": "h3", "text": "Test it before relying on it"},
        {"k": "p", "text":
            "Run a compelled-disclosure exercise before go-live. Assume a lawful order is served on the "
            "provider’s parent company. Record what the provider could produce in readable form, how long "
            "the state would take to learn of it, and whether the keys and logs behaved as designed. Repeat "
            "after significant changes. **The result, not the contract, is the evidence of sovereignty.**"},
    ]},

    {"id": "references", "title": "References and further reading", "blocks": [
        {"k": "p", "text":
            "This list is organised by institutional category and reflects the regulatory and threat landscape "
            "as understood in October 2026, with the original June 2026 list retained and developments since "
            "then added. Several instruments — in particular the EU Cloud and AI Development Act, the "
            "EU–US Data Privacy Framework and US surveillance statutes — remain subject to change. "
            "Numbers in square brackets in the text refer to the numbered items below. Check secondary sources "
            "against primary texts."},
        {"k": "h3", "text": "Numbered references cited in the text"},
        {"k": "table", "head": ["Ref", "Source", "Used for"],
         "ratios": [0.08, 0.6, 0.32],
         "caption": "Table 8. Sources for the figures and developments cited.",
         "rows": [
            ["[12]", "US Clarifying Lawful Overseas Use of Data Act (CLOUD Act), 2018, amending 18 U.S.C. 2701 et seq.", "Provider possession, custody or control; executive agreements."],
            ["[14]", "Brennan Center for Justice, Section 702 of FISA: 2026 Resource Page (updated 27 October 2026); Congressional Research Service reports on Section 702 and the 2024 RISAA.", "Lapse and reauthorisation status."],
            ["[15]", "Press and analysis on the 12 June 2026 lapse and the March 2026 FISC certifications (for example The Hill, Washington Times, Fulcrum); to be checked against primary texts.", "Continued collection to about March 2027."],
            ["[16]", "European Commission, Tech Sovereignty Package and proposed Cloud and AI Development Act (3 June 2026), with law-firm and think-tank analyses (Jones Day; Belfer Center; Bloomsbury Intelligence and Security Institute).", "Four assurance levels; legislative status."],
            ["[17]", "TechPolicy.Press and Global Policy Watch analyses of the package.", "Open-source preference; tiers; market openness."],
            ["[18]", "Court of Justice of the EU: Latombe v Commission (T-553/23, 3 September 2025) and appeal C-703/25 P; European Data Protection Board request to the Commission (31 July 2026), as reported.", "Status of the EU–US Data Privacy Framework."],
            ["[19]", "French Senate inquiry, testimony of Microsoft France (10 June 2025), as reported in secondary coverage.", "Provider cannot guarantee exclusion of US authorities."],
            ["[20]", "Republic of South Africa, National Policy on Data and Cloud (published 31 May 2024); law-firm summaries (Bowmans).", "Government data localisation; sovereign cloud."],
            ["[21]", "Protection of Personal Information Act 4 of 2013, section 72.", "Cross-border transfer conditions."],
            ["[22]", "TechCabal (24 August 2026) and other regional reporting on Nigeria, Kenya, South Africa and Rwanda localisation.", "Regional localisation rules; verify locally."],
         ]},
        {"k": "h3", "text": "United Nations and UN agencies"},
        {"k": "ul", "items": [
            "UN Office for Digital and Emerging Technologies (ODET): Universal DPI Safeguards Framework and DPI Safeguards Resource Hub, co-led with UNDP.",
            "UN Development Programme: Digital Public Infrastructure guidance and co-stewardship of the Digital Public Goods Alliance.",
            "UN General Assembly: Global Digital Compact (2024) and follow-up processes.",
            "International Telecommunication Union: GovStack Initiative (with GIZ, Estonia and UNDP), reusable government Building Block specifications.",
            "UNCTAD: Digital Economy Report series on cross-border data flows and data sovereignty.",
            "World Bank Group: Identification for Development (ID4D) Practitioner’s Guide and Principles on Identification; “Resilient, Secure and Trusted: The Next Frontier for Digital Public Infrastructure” (2025).",
            "World Economic Forum: “Building Security into India’s Digital Public Infrastructure” (October 2025) and DPI security risk taxonomy.",
            "OECD: Going Digital project and DPI security and governance guidance.",
        ]},
        {"k": "h3", "text": "European Union and European bodies"},
        {"k": "ul", "items": [
            "GDPR, Regulation (EU) 2016/679, including Chapter V and Article 48.",
            "Cloud and AI Development Act (proposed 3 June 2026) as part of the European Technological Sovereignty Package, including the EU Open Source Strategy and Chips Act 2.0.",
            "EU AI Act (in force from August 2024): high-risk classification of biometric identification, social benefit determination and access to essential services.",
            "Digital Services Act and Digital Markets Act; NIS2 Directive.",
            "ENISA: cybersecurity guidance and input to the EU Cybersecurity Certification Scheme for Cloud Services.",
            "CJEU: Schrems II (Case C-311/18, 2020); EDPB Recommendations 01/2020 on supplementary measures.",
            "European Commission DG CONNECT: Cloud Sovereignty Framework.",
        ]},
        {"k": "h3", "text": "United States"},
        {"k": "ul", "items": [
            "CLOUD Act (2018); FISA Section 702; Executive Order 12333; USA PATRIOT Act Section 215; United States v. Microsoft Corp. (2018).",
            "NIST: Digital Identity Guidelines (SP 800-63-4); Secure Software Development Framework (SP 800-218); Cybersecurity Framework; AI Risk Management Framework.",
            "CISA: advisories and the Known Exploited Vulnerabilities catalog.",
            "US National Trade Estimate Report (2026) on foreign data localisation and sovereign cloud measures.",
        ]},
        {"k": "h3", "text": "Other national and regional regimes"},
        {"k": "ul", "items": [
            "China: Cybersecurity Law (2017), Data Security Law (2021), Personal Information Protection Law (2021) and Article 7 of the National Intelligence Law (2017).",
            "Russian Federation: Federal Law 152-FZ on Personal Data.",
            "India: Digital Personal Data Protection Act (2023) and the DEPA and Account Aggregator consent framework.",
            "Brazil: LGPD and the ANPD.",
            "Estonia: the Data Embassy concept and bilateral arrangement with Luxembourg.",
            "Canada: Foreign Extraterritorial Measures Act and the Canadian Sovereign Cloud Initiative.",
            "African Union: Digital Transformation Strategy for Africa 2020–2030; AfCFTA digital trade provisions.",
            "ASEAN: Digital Masterplan 2025.",
        ]},
        {"k": "h3", "text": "Cloud and key-management providers"},
        {"k": "ul", "items": [
            "Microsoft: Azure Sovereign Cloud, EU Data Boundary, Managed HSM external key options and confidential computing.",
            "Google Cloud: Cloud External Key Manager and Cloud KMS.",
            "Amazon Web Services: KMS, Nitro Enclaves and the Digital Sovereignty Pledge.",
            "Thales and Utimaco: guidance on BYOK, HYOK, external key management and double key encryption.",
            "OpenSSF and the Linux Foundation: Scorecard and SLSA.",
        ]},
        {"k": "h3", "text": "DPI and DPG frameworks and communities"},
        {"k": "ul", "items": [
            "Digital Public Goods Alliance: DPG Registry and DPG Standard.",
            "MOSIP, Mojaloop, Estonia X-Road (NIIS), Centre for Digital Public Infrastructure, Co-Develop Fund, Digital Impact Alliance Principles for Digital Development, and the Gates Foundation DPI programme, including the Upanzi Network.",
        ]},
        {"k": "h3", "text": "Threat intelligence and standards"},
        {"k": "ul", "items": [
            "CrowdStrike 2026 Global Threat Report; MITRE ATT&CK; OWASP API Security Top 10; CIS Benchmarks; ISO/IEC 27001 and 42001; CSIS Significant Cyber Incidents tracker; IBM Cost of a Data Breach Report.",
        ]},
        {"k": "h3", "text": "Verification notes"},
        {"k": "ul", "items": [
            "Legislative status in the United States and the European Union was changing as this edition was prepared. Confirm current status before citing.",
            "Some facts come from secondary reporting. This article is classified as Public; official use should rely on primary legal texts and counsel.",
        ]},
    ]},

    {"id": "series-bridge", "title": "Series bridge", "minor": True, "blocks": [
        {"k": "callout", "title": "What comes next in the series", "paras": [
            "The next and final article in the series addresses the open-source and digital public goods "
            "dimension: why open source is a strong start for sovereignty, why it is not the whole answer, and "
            "which technical controls make sovereignty true in practice. It builds on the control stack "
            "introduced here by asking how code that anyone can inspect can be run, updated and verified under "
            "national control."]},
    ]},
]

META = {
    "slug": SLUG, "number": 5, "title": TITLE, "subtitle": SUBTITLE, "standfirst": STANDFIRST,
    "published": "2026-11-06", "publishedLabel": "6 November 2026",
    "version": "Series version 1.0", "classification": "Public",
    "tags": ["Digital sovereignty", "Data protection", "Key custody", "Cloud", "Extraterritorial access"],
    "filters": ["dpi", "policy", "identity", "payments", "citizen"],
    "pdf": "/assets/papers/dtff-digital-sovereignty-05-the-localisation-trap.pdf",
}


# ── Web export ────────────────────────────────────────────────────────────

def web_typescript():
    """The article as a TypeScript constant for insights.ts."""
    def clean(block):
        b = {k: v for k, v in block.items() if k != "ratios"}
        if b["k"] == "figure":
            # Intrinsic size lets the browser reserve the figure's space before
            # it loads; without it every figure arrives at zero height and
            # shoves the rest of the article down as it lands.
            from PIL import Image as PILImage
            w, h = PILImage.open(os.path.join(FIG_DIR, f"figure-{block['n']}.png")).size
            b = {"k": "figure", "src": f"{FIG_WEB}/figure-{block['n']}.png",
                 "width": w, "height": h,
                 "caption": block["caption"], "alt": block["alt"]}
        if b["k"] == "table":
            b["caption"] = b["caption"]
        return b
    article = dict(META)
    article["sections"] = [
        {k: v for k, v in {
            "id": s["id"], "title": s["title"], "minor": s.get("minor"),
            "blocks": [{"k": "callout", "tone": "navy", "title": "About this edition", "paras": EDITION_NOTE}]
                      * (s["id"] == "executive-summary")
                      + [clean(b) for b in s["blocks"]],
        }.items() if v is not None}
        for s in SECTIONS]
    body = json.dumps(article, ensure_ascii=False, indent=2)
    return ("/* ── Article 5 ── generated by _src/papers/article5.py --web; edit there ── */\n\n"
            f"const ARTICLE_5: Insight = {body};\n")


# ── PDF ───────────────────────────────────────────────────────────────────

def pdf_story(width):
    from reportlab.platypus import Paragraph, Spacer, NextPageTemplate, PageBreak
    from reportlab.lib.units import mm
    from dtff_paper import (S, data_table, callout, bullets, figure, stats_strip, TEAL, NAVY)
    from common import cover, back_matter, toc

    def rich(t):
        t = re.sub(r"&(?![a-zA-Z#][a-zA-Z0-9]*;)", "&amp;", t)
        return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)

    tones = {"teal": TEAL, "navy": NAVY}

    def render(b):
        k = b["k"]
        if k == "lede":
            return [Paragraph(rich(b["text"]), S["lede"])]
        if k == "p":
            return [Paragraph(rich(b["text"]), S["body"])]
        if k == "h3":
            return [Paragraph(rich(b["text"]), S["h2"])]
        if k == "ul":
            return [bullets([rich(i) for i in b["items"]])]
        if k == "ol":
            return [bullets([rich(i) for i in b["items"]], numbered=True)]
        if k == "callout":
            kw = {"accent": tones[b["tone"]]} if b.get("tone") in tones else {}
            return [callout(rich(b["title"]), [rich(p) for p in b["paras"]], width, **kw),
                    Spacer(1, 4 * mm)]
        if k == "table":
            return [Spacer(1, 1 * mm),
                    data_table([rich(h) for h in b["head"]],
                               [[rich(c) for c in r] for r in b["rows"]],
                               width, col_ratios=b.get("ratios")),
                    Paragraph(rich(b["caption"]), S["caption"])]
        if k == "figure":
            return [Spacer(1, 1 * mm),
                    figure(os.path.join(FIG_DIR, f"figure-{b['n']}.png"), rich(b["caption"]),
                           width, max_h=118 * mm)]
        if k == "stats":
            return [Spacer(1, 1 * mm),
                    stats_strip([(rich(i["value"]), rich(i["label"])) for i in b["items"]], width),
                    Spacer(1, 5 * mm)]
        raise ValueError(f"unknown block {k}")

    contents = [(s["title"], "0") for s in SECTIONS if not s.get("minor")]
    contents.insert(-1, ("Series bridge", "0"))
    contents.insert(-1, ("About the author", "0"))
    contents.insert(-1, (f"About Digital Trust Futures Foundation", "0"))
    global CONTENTS
    CONTENTS = globals().get("CONTENTS") or contents

    s = cover(
        width, article_no=5, title=TITLE, subtitle=SUBTITLE,
        why_title="Why this matters now",
        why_body=[STANDFIRST],
        dateline="6 November 2026 &nbsp;|&nbsp; Series version 1.0 &nbsp;|&nbsp; Classification: Public",
    )
    s += [NextPageTemplate("Body"), PageBreak()]
    s += [Paragraph("Contents", S["h1"]), Spacer(1, 2 * mm), toc(width, CONTENTS),
          Spacer(1, 8 * mm),
          callout("About this edition", EDITION_NOTE, width, accent=NAVY),
          PageBreak()]

    refs = None
    for sec in SECTIONS:
        if sec["id"] == "references":
            refs = sec
            continue
        if sec.get("minor"):
            for b in sec["blocks"]:
                s += render(dict(b, title="Series bridge") if b["k"] == "callout" else b)
            continue
        s.append(Paragraph(sec["title"], S["h1"]))
        for b in sec["blocks"]:
            s += render(b)

    s += [Spacer(1, 6 * mm)]
    s += back_matter(width)
    s.append(Paragraph(refs["title"], S["h1"]))
    for b in refs["blocks"]:
        s += render(b)
    return s


def resolve_contents(path):
    """Read the built file back and set the contents page numbers from it."""
    import pdfplumber
    global CONTENTS
    found = {}
    with pdfplumber.open(path) as pdf:
        for n, page in enumerate(pdf.pages, 1):
            if n <= 2:
                continue
            text = page.extract_text() or ""
            for label, _ in CONTENTS:
                if label not in found and label in text:
                    found[label] = str(n)
    missing = [l for l, _ in CONTENTS if l not in found]
    if missing:
        raise SystemExit(f"contents entries not found in the body: {missing}")
    CONTENTS = [(label, found[label]) for label, _ in CONTENTS]


if __name__ == "__main__":
    if sys.argv[1:] == ["--web"]:
        sys.stdout.write(web_typescript())
        sys.exit(0)
    from dtff_paper import build
    out = sys.argv[1]
    meta = {
        "title": f"{TITLE} — {SUBTITLE}",
        "author": "Godfrey Kutumela, Digital Trust Futures Foundation",
        "subject": "Digital Sovereignty Series | Article 5 of 6",
        "running_head": "Digital Sovereignty Series · Article 5 of 6 · The Localisation Trap",
        "classification": "Public  |  November 2026",
    }
    build(out, meta, pdf_story)
    resolve_contents(out)
    build(out, meta, pdf_story)
    print("wrote", out)
