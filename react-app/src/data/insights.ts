/**
 * Long-form insight papers, authored as structured data rather than markup.
 *
 * Keeping the text in typed blocks means the contents rail, the reading
 * estimate, the JSON-LD and the search-engine description are all derived from
 * the same source as the page body, so none of them can drift out of step.
 *
 * Inline emphasis is written as **bold** and rendered by <Rich> in
 * InsightArticle.tsx — the body is never injected as raw HTML.
 */

export type Block =
  | { k: 'p'; text: string }
  | { k: 'lede'; text: string }
  | { k: 'h3'; text: string }
  | { k: 'ul'; items: string[] }
  | { k: 'ol'; items: string[] }
  | { k: 'quote'; text: string }
  | { k: 'callout'; title: string; paras: string[]; tone?: 'orange' | 'teal' | 'navy' }
  | { k: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { k: 'figure'; src: string; width: number; height: number; caption: string; alt: string }
  | { k: 'stats'; items: { value: string; label: string }[] };

export interface Section {
  id: string;
  title: string;
  /** Kept out of the contents rail — used for the closing series bridge. */
  minor?: boolean;
  blocks: Block[];
}

export interface Insight {
  slug: string;
  /** Series articles are numbered and carry a bridge; perspectives are not. */
  kind?: 'series' | 'perspective';
  /** Series articles only. */
  number?: number;
  title: string;
  subtitle: string;
  /** Opens the page and doubles as the meta description. */
  standfirst: string;
  published: string;       // ISO, for <time> and JSON-LD
  publishedLabel: string;
  version: string;
  classification: string;
  tags: string[];
  /** Theme keys shared with the resource library filter bar. */
  filters: string[];
  pdf: string;
  sections: Section[];
}

export const SERIES_NAME = 'Digital Sovereignty in Practice';
export const SERIES_SUB =
  'A policy series on control, trust and resilience in the cloud era';
export const SERIES_LENGTH = 6;
export const PERSPECTIVE_LABEL = 'DTFF Perspective';

export const AUTHOR = {
  name: 'Godfrey Kutumela',
  role: 'Executive Lead and Digital Trust Practitioner',
  quals: 'CISSP (MSc Information Security), CCSP, CSSLP, TOGAF, ISO 27001 LA, MDP',
  bio:
    'Godfrey Kutumela is a globally recognised cybersecurity practitioner with over 26 years of experience shaping secure digital ecosystems across fintech, identity and public infrastructure environments. He operates at the intersection of Digital Public Infrastructure (DPI), Digital Public Goods (DPGs) and national-scale platforms, bringing deep expertise in securing systems where the impact of failure is measured at the population level rather than the enterprise level.',
  photo: '/assets/img/signature/godfrey-kutumela.png',
};

/* ── Article 1 ──────────────────────────────────────────────────────────── */

const PILLAR_ROWS: string[][] = [
  [
    '1. Architectural sovereignty',
    'Critical systems can be operated, maintained and modified by domestic technical capability without being permanently locked to a single foreign vendor.',
    'The country cannot fix, extend or replace its own identity or payment system without first calling a foreign supplier.',
  ],
  [
    '2. Data sovereignty',
    'Citizens’ data stays under the legal and technical authority of the state that collected it, enforced technically, not just promised in policy.',
    'Data sits in-country, but a foreign government can still compel access to it through that provider’s home-country law.',
  ],
  [
    '3. Operational sovereignty',
    'The country can keep critical systems running, including in degraded conditions, with a trained domestic workforce and tested manual fallback procedures.',
    'A foreign vendor’s outage, dispute or sanctions exposure becomes a national service outage.',
  ],
  [
    '4. Governance sovereignty',
    'Decisions about architecture, security standards and access policy are made by accountable domestic institutions, not effectively outsourced to a vendor or donor.',
    'Strategic technology decisions are made in a foreign vendor’s roadmap meeting, not in a national ministry.',
  ],
  [
    '5. Security sovereignty',
    'The state can independently assess the security of its own systems without relying on the cooperation of the parties that built them.',
    'The only people checking whether the system is secure are the ones who profit from claiming it is.',
  ],
];

const ARTICLE_1: Insight = {
  slug: 'digital-sovereignty-starts-with-control',
  number: 1,
  title: 'Real Digital Sovereignty Starts With Control',
  subtitle: 'Five pillars every country must understand',
  standfirst:
    'Countries digitising identity, payments, health, welfare and data exchange systems are making sovereignty decisions whether or not those decisions are named. This opening article clarifies what digital sovereignty actually means, and why local hosting, vendor restrictions or open-source adoption alone can create false confidence if mistaken for real control.',
  published: '2026-06-22',
  publishedLabel: '22 June 2026',
  version: 'Series version 1.0',
  classification: 'Public',
  tags: ['Digital sovereignty', 'DPI', 'Governance', 'Assurance'],
  filters: ['dpi', 'policy', 'identity', 'payments'],
  pdf: '/assets/papers/dtff-digital-sovereignty-01-real-sovereignty-starts-with-control.pdf',
  sections: [
    {
      id: 'demonstrated-control',
      title: 'Digital sovereignty is demonstrated control',
      blocks: [
        {
          k: 'lede',
          text:
            'Digital sovereignty is often used as a political or procurement phrase, but its practical meaning is much stricter: a country must be able to control, operate, assess, secure and adapt its own critical digital systems and the data that flows through them. It is not achieved by a single law, a data centre, a local vendor preference, or the use of open-source software alone.',
        },
        {
          k: 'p',
          text:
            'This opening article frames the series’ core argument. Sovereignty is a system of interlocking capabilities: architectural, data, operational, governance and security sovereignty. If one pillar is missing, the country may appear sovereign but lack the substance of control.',
        },
      ],
    },
    {
      id: 'key-points',
      title: 'Key points for policymakers and DPI leaders',
      blocks: [
        {
          k: 'p',
          text:
            'Digital sovereignty, at its simplest, is a country’s demonstrated ability to control the digital systems and data on which its people, institutions and economy increasingly depend. The word **demonstrated** matters. Sovereignty cannot be inferred from a press release, a procurement clause or a cloud region name; it must be visible in architecture, operations, governance, security assurance, and the country’s ability to continue functioning under stress.',
        },
        {
          k: 'ul',
          items: [
            'Digital sovereignty is demonstrated control, not a declaration or branding claim.',
            'A local data centre can support residency, but it does not automatically create legal or technical control.',
            'Open-source Digital Public Goods are a powerful starting point, but they solve only part of the sovereignty problem.',
            'Sovereignty should be treated as an operating discipline that has to be sustained, tested and funded over time.',
          ],
        },
        {
          k: 'p',
          text:
            'The real fear is not foreign technology itself. International technology can be useful, efficient and in many cases necessary. The risk is **dependency without recourse**: a position in which another company, government or ecosystem can shape, restrict, expose or disrupt a country’s critical systems, while the country lacks the practical means to prevent, detect or recover from such disruptions.',
        },
        {
          k: 'quote',
          text:
            'The sovereignty question for leaders is not, “Where is the server?” The stronger question is: “If the vendor, cloud provider, donor or integration partner became unavailable or legally constrained tomorrow, could we keep this system running, protect the data, and know quickly if something had gone wrong?”',
        },
      ],
    },
    {
      id: 'five-pillars',
      title: 'The five pillars of digital sovereignty',
      blocks: [
        {
          k: 'p',
          text:
            'Digital sovereignty is the cumulative product of five interlocking conditions. A country may be strong on one and weak on the rest, but it should not confuse that partial progress with full control. The table below sets out the practical pillar framing that underpins every subsequent article in the series.',
        },
        {
          k: 'table',
          head: ['Pillar', 'What it means in plain terms', 'Failure mode if missing'],
          rows: PILLAR_ROWS,
          caption: 'The five pillars, and what it looks like when each one is absent.',
        },
        {
          k: 'callout',
          tone: 'teal',
          title: 'The honest test of sovereignty',
          paras: [
            'A country’s digital infrastructure is genuinely sovereign when it can answer yes, without hesitation, to one question: “If every vendor we work with went dark tomorrow, could we keep this system running, keep citizens’ data safe, and know within 24 hours if something had gone wrong?”',
            'Most countries currently deploying Digital Public Infrastructure cannot yet answer yes.',
          ],
        },
        {
          k: 'p',
          text:
            'The five-pillar model is deliberately practical. It is intended to move digital sovereignty away from slogans, declarations and procurement language, and toward a clear test of whether a country has real control over the systems on which its citizens, economy and public services increasingly depend.',
        },
        { k: 'h3', text: '1. Architectural sovereignty' },
        {
          k: 'p',
          text:
            'This pillar asks whether the country can inspect, modify, integrate and operate the system without being permanently dependent on a single foreign vendor or external technical party. This does not mean rejecting foreign technology or external implementation support. It means ensuring that the core architecture, source code, standards, interfaces, documentation and operational knowledge are sufficiently open, transferable and understood by domestic or trusted regional teams. A country lacks architectural sovereignty when it cannot change its own identity, payment, data exchange or welfare system without waiting for a vendor roadmap, foreign approval, or specialist support that it cannot replace.',
        },
        { k: 'h3', text: '2. Data sovereignty' },
        {
          k: 'p',
          text:
            'This pillar asks whether citizens’ data remains under domestic legal and technical authority, not merely whether it is stored inside the country’s borders. This is the pillar most often confused with data localisation. Data sovereignty requires clarity over who controls the data, who can access it, who holds the encryption keys, what laws apply, and whether foreign legal or corporate structures can override national policy. A country may have local hosting and still lack data sovereignty if a foreign-parented provider, a foreign court, or an external operator can compel or facilitate access to sensitive citizen data without meaningful domestic control.',
        },
        { k: 'h3', text: '3. Operational sovereignty' },
        {
          k: 'p',
          text:
            'This pillar asks whether the system can continue to run when vendors, networks, funding conditions, geopolitical pressures or political relationships become adverse. This is the practical test of sovereignty’s continuity. It requires trained domestic teams, tested fallback procedures, incident-response capability, backup and recovery arrangements, service continuity planning, and the ability to operate under degraded conditions. A country that can launch a system but cannot keep it running without the constant presence of an external implementer has achieved deployment, not sovereignty.',
        },
        { k: 'h3', text: '4. Governance sovereignty' },
        {
          k: 'p',
          text:
            'This pillar asks who actually makes the critical decisions about architecture, data access, security standards, procurement, risk acceptance, incident disclosure and future system evolution. Formal ownership by a ministry or agency is not enough if the real decisions are shaped elsewhere, by donor conditions, vendor defaults, opaque technical committees or commercial platform limitations. Governance sovereignty means that accountable domestic institutions have the authority, competence, evidence and independence to make informed decisions in the national interest, and to challenge external parties when necessary.',
        },
        { k: 'h3', text: '5. Security sovereignty' },
        {
          k: 'p',
          text:
            'This pillar asks whether independent assurance exists beyond the parties that built, fund, host or operate the system. This pillar is essential because a country cannot simply rely on vendor claims, implementation reports or compliance checklists to know whether a critical national system is secure. Security sovereignty requires independent testing, code review, supply chain assurance, vulnerability management, monitoring, audit rights, incident readiness and maturity assessment. Without this pillar, the country may believe it controls the system, but it has no independent way to verify whether that control is technically real, resilient and defensible under attack.',
        },
      ],
    },
    {
      id: 'common-mistakes',
      title: 'The five common mistakes',
      blocks: [
        {
          k: 'p',
          text:
            'Digital sovereignty is often weakened not by a lack of ambition but by a series of recurring misunderstandings that lead governments to believe they have more control than they actually do. These mistakes matter because they can shape national procurement decisions, cloud strategies, DPI deployment choices and public communication.',
        },
        {
          k: 'p',
          text:
            'A country may announce sovereignty, build local hosting arrangements, adopt open-source tools or restrict foreign vendors, and still remain dependent at the legal, technical, operational or security level. The danger is that these measures can create the appearance of control while leaving the real levers of control elsewhere. For policymakers, the first step is therefore to separate useful sovereignty-enabling measures from the mistaken belief that any one of them is sovereignty by itself.',
        },
        { k: 'h3', text: 'Mistake 1: A local data centre means the data is sovereign' },
        {
          k: 'p',
          text:
            'Local hosting can be useful. It can reduce latency, satisfy residency rules, support local investment and make some operational controls easier. But it is not the same as sovereignty if the company operating the infrastructure remains subject to another jurisdiction’s law and if the encryption keys, administrative access or support channels remain outside domestic control.',
        },
        { k: 'h3', text: 'Mistake 2: Restricting foreign vendors creates sovereignty' },
        {
          k: 'p',
          text:
            'Vendor restriction addresses one layer of procurement. It does not automatically resolve foreign dependence in cloud infrastructure, network equipment, undersea cable capacity, managed services, developer tooling or software updates. A domestic prime contractor can still deliver a foreign-controlled digital stack.',
        },
        { k: 'h3', text: 'Mistake 3: Open source removes dependency' },
        {
          k: 'p',
          text:
            'Open-source Digital Public Goods reduce proprietary lock-in and are often the right starting point for sovereign DPI. But open-source code still runs on infrastructure, processes personal data, uses dependencies, receives updates and relies on development communities. Those layers require separate controls.',
        },
        { k: 'h3', text: 'Mistake 4: Sovereignty requires digital isolation' },
        {
          k: 'p',
          text:
            'Some governments respond to dependency risk by trying to wall themselves off from global technology. That can reduce access to innovation, increase costs and weaken security if the domestic alternative is under-resourced. The better objective is verified control, not isolation.',
        },
        { k: 'h3', text: 'Mistake 5: Sovereignty is a one-time achievement' },
        {
          k: 'p',
          text:
            'Sovereignty erodes when new vendors are added, integrations expand, AI components are introduced, keys are delegated, staff leave, or security assurance becomes stale. It therefore has to be maintained as a living discipline.',
        },
        {
          k: 'p',
          text:
            'The common thread across all five mistakes is that sovereignty is not created by a single location, vendor rule, software licence, policy statement or launch milestone. It is created by the continuous ability to govern, operate, secure, verify and adapt the systems that carry national data and public trust. Real digital sovereignty begins when a country can distinguish between symbolic control and control that remains true under legal pressure, technical failure, vendor dependency and active attack.',
        },
      ],
    },
    {
      id: 'series-bridge',
      title: 'Series bridge',
      minor: true,
      blocks: [
        {
          k: 'callout',
          title: 'What comes next in the series',
          paras: [
            'The next article turns from definition to consequence. It asks what a country risks when it mistakes the appearance of sovereignty for the reality of control, especially in population-scale identity, payment, welfare, health and data-exchange systems.',
          ],
        },
      ],
    },
  ],
};

/* ── Article 2 ──────────────────────────────────────────────────────────── */

const FALSE_COMFORT_ROWS: string[][] = [
  [
    '“The data is hosted locally.”',
    'Local hosting may satisfy residency but not sovereignty if legal access, key custody or administrative control is elsewhere — for example where a foreign government can compel a global cloud provider under its own law.',
    'Who can actually access the data, and who holds the keys?',
  ],
  [
    '“A domestic supplier was appointed.”',
    'A local contractor may still depend on foreign cloud infrastructure, tooling, updates, support or managed services.',
    'Is the stack domestically controllable, or only locally controllable?',
  ],
  [
    '“The platform is open source.”',
    'Open source reduces proprietary lock-in, but does not automatically solve hosting, data control, operations or supply chain risk.',
    'Can we operate, patch and assure the platform independently?',
  ],
  [
    '“The system has passed compliance.”',
    'Compliance may show policy alignment, but not resilience under attack, outage, subpoena or vendor failure.',
    'Has control been tested under realistic failure conditions?',
  ],
  [
    '“Citizens trust the programme.”',
    'Trust can collapse quickly after exclusion, fraud, surveillance concerns, data misuse or service disruption.',
    'What evidence shows that security, safety and accountability are working in practice?',
  ],
];

const DATA_CATEGORY_ROWS: string[][] = [
  [
    'National identity numbers and civil registration data',
    'They anchor access to public and private services.',
    'Exposure can enable fraud, impersonation, exclusion or long-term identity abuse.',
  ],
  [
    'Biometric identifiers',
    'Fingerprints, iris patterns and facial templates are permanent or difficult to replace.',
    'Once compromised, they cannot be meaningfully reissued like passwords or cards.',
  ],
  [
    'Payment and transaction data',
    'They reveal financial behaviour, relationships, locations and economic participation.',
    'Misuse can expose citizens to fraud, profiling, surveillance or financial exclusion.',
  ],
  [
    'Social protection and welfare records',
    'They contain information on vulnerability, poverty, eligibility, household and dependency.',
    'Exposure can stigmatise citizens, distort benefits or enable targeted abuse.',
  ],
  [
    'Health information',
    'It contains highly sensitive personal, family and clinical data.',
    'Breach or misuse can cause discrimination, loss of dignity, safety risks and irreversible damage to trust.',
  ],
  [
    'Consent and data-exchange records',
    'They determine which agencies or providers can access which data, for what purpose, and when.',
    'Weak controls can enable unauthorised sharing, replay, excessive access or misuse of purpose across systems.',
  ],
];

const ARTICLE_2: Insight = {
  slug: 'the-cost-of-illusory-sovereignty',
  number: 2,
  title: 'The Cost of Illusory Sovereignty',
  subtitle: 'Why false control creates national risk and loss of trust',
  standfirst:
    'False sovereignty is not just a policy weakness. In population-scale Digital Public Infrastructure, weak control can become an economic, privacy, service-delivery and trust crisis. This article explains what a country risks when it believes its digital foundations are under control before that control has been technically proven.',
  published: '2026-07-02',
  publishedLabel: '2 July 2026',
  version: 'Series version 1.0',
  classification: 'Public',
  tags: ['Digital sovereignty', 'DPI', 'Privacy', 'Open source', 'Trust'],
  filters: ['dpi', 'policy', 'opensource', 'citizen', 'identity'],
  pdf: '/assets/papers/dtff-digital-sovereignty-02-the-cost-of-illusory-sovereignty.pdf',
  sections: [
    {
      id: 'executive-summary',
      title: 'Executive summary',
      blocks: [
        {
          k: 'lede',
          text:
            'Digital sovereignty is sometimes treated as an abstract policy preference: a matter of national ambition, technology positioning, procurement strategy or cloud-hosting choice. For countries deploying Digital Public Infrastructure at scale, this framing is too weak. Digital sovereignty is better understood as a practical national risk-control requirement, because identity systems, payment rails, health platforms, social protection systems and data exchanges now sit close to both citizens and the operating capacity of the state.',
        },
        {
          k: 'p',
          text:
            'When control over these systems is weak, the consequences are not confined to an ICT department, a project team or a single ministry. They can affect national service continuity, citizens’ rights, economic participation, fiscal integrity, public trust and national resilience simultaneously. This is why a false sense of sovereignty is dangerous: **it creates confidence before control has been proven.**',
        },
        {
          k: 'ul',
          items: [
            'A country may believe its data is sovereign because it is hosted locally.',
            'It may believe its platforms are independent because a domestic contractor has been appointed.',
            'It may believe it has avoided dependency by selecting open-source Digital Public Goods.',
          ],
        },
        {
          k: 'p',
          text:
            'Each of these choices can support sovereignty, but none of them proves sovereignty on its own. The real test is whether the country can govern, operate, secure, verify and adapt its digital foundations under legal pressure, technical failure, vendor disruption, cyberattack or geopolitical stress.',
        },
        { k: 'h3', text: 'What leaders should test before claiming sovereignty' },
        {
          k: 'ol',
          items: [
            'Can the country keep the system running if the primary vendor, cloud provider or integration partner becomes unavailable?',
            'Can the country prove who holds the encryption keys, who can access sensitive data, and under which legal authority access can be compelled?',
            'Can domestic or trusted regional teams inspect, modify, recover and secure the system without waiting for a foreign supplier?',
            'Can the country independently verify the security of the system beyond vendor assurance, implementation reports or compliance claims?',
            'Can vulnerabilities in a shared Digital Public Goods component be tracked, patched and coordinated across deployments before they become systemic risks?',
          ],
        },
        {
          k: 'table',
          head: ['False comfort', 'Real exposure', 'Leadership question'],
          rows: FALSE_COMFORT_ROWS,
          caption:
            'Five statements that are often mistaken for sovereignty, and the question each one should prompt.',
        },
        {
          k: 'p',
          text:
            'The first article in this series argued that real digital sovereignty starts with control, regardless of where the data is hosted or whether the software is open source. This second article shows why the absence of that control is not merely theoretical; it can lead to crises in privacy, service delivery, the economy, trust and national resilience.',
        },
      ],
    },
    {
      id: 'material-national-risk',
      title: '1. Sovereignty failure is a material national risk',
      blocks: [
        {
          k: 'p',
          text:
            'The absence of meaningful digital sovereignty is not a narrow ICT concern. When a country digitises identity, payments, health, social protection and data exchange, the systems involved become part of the country’s public operating model. They determine how people prove who they are, how money moves, how benefits are delivered, how health information is accessed, and how agencies exchange data. A failure of control can therefore simultaneously affect service continuity, citizens’ rights, national security, fiscal integrity and economic participation.',
        },
        {
          k: 'p',
          text:
            'The central risk is false confidence, and it is especially dangerous because it often appears to be progress. A government may point to a local data centre, a domestic contractor, a cloud residency commitment, an open-source platform or a signed compliance report and assume that sovereignty has been achieved. In reality, each of these may represent only partial control: useful but incomplete.',
        },
        { k: 'h3', text: 'Three practical risk tests' },
        {
          k: 'p',
          text:
            'Every country should apply these before treating a national digital system as meaningfully sovereign.',
        },
        {
          k: 'ol',
          items: [
            '**Control under pressure.** Can the country keep the system running if a vendor, cloud provider, integration partner or external support team becomes unavailable, unwilling, legally restricted or commercially difficult?',
            '**Authority over sensitive data.** Can the country prove who holds the encryption keys, who can access personal and biometric data, what legal authority governs access, and whether any foreign jurisdiction can compel disclosure without effective domestic control?',
            '**Independent verification.** Can the country assess the security, resilience, supply chain and operational maturity of the system independently of the parties that built, host, fund or operate it?',
          ],
        },
        {
          k: 'p',
          text:
            'If those claims are not supported by operational capability, key custody, independent assurance and resilience planning, the country may discover the gap only after a breach, subpoena, outage or geopolitical shock. That is why a failure of sovereignty must be treated as a material national risk. It is not simply a technical weakness to be remediated later; it is a governance, security, privacy and continuity exposure that can quietly accumulate until the moment the country most needs the system to hold.',
        },
      ],
    },
    {
      id: 'strategic-control',
      title: '2. Strategic control and economic dependency',
      blocks: [
        {
          k: 'p',
          text:
            'Strategic control is weakened when the roadmap, pricing, support model, security posture and continuity of national systems are effectively determined by actors outside the country’s own institutions. The issue is not that all external vendors are unsafe, or that countries should reject international technology, cloud services, donor support or specialist implementation partners.',
        },
        {
          k: 'p',
          text:
            'In many cases, these actors bring essential capability, scale and innovation that would be difficult or costly to reproduce domestically. The real issue is **dependency without leverage**: a condition in which a critical national platform continues to function only because an external provider remains commercially willing, legally able, politically permitted and technically available to support it.',
        },
        {
          k: 'ol',
          items: [
            '**Roadmap dependency.** When the country cannot prioritise critical changes, security improvements, localisation needs or integration requirements because the underlying platform evolves according to an external vendor’s product roadmap.',
            '**Pricing dependency.** When the cost of running national systems is exposed to foreign currency pressure, licensing changes, consumption-based cloud pricing, or contractual renewal terms that the country has limited power to challenge.',
            '**Continuity dependency.** When an outage, sanctions exposure, legal dispute, support withdrawal, cyber incident or geopolitical shift affecting the provider becomes, in practice, a national service-delivery risk.',
          ],
        },
        {
          k: 'p',
          text:
            'For smaller and lower-income countries, the bargaining challenge is especially difficult. Market size influences negotiating power, and a small country may need world-class infrastructure but lack the scale to demand bespoke sovereignty controls, stronger audit rights, local operational guarantees, external key management, exit provisions or transparent incident reporting terms on its own.',
        },
        {
          k: 'callout',
          tone: 'teal',
          title: 'Why regional cooperation is a sovereignty instrument',
          paras: [
            'Regional arrangements, common procurement standards, shared cloud and security assurance requirements, pooled technical expertise and joint negotiation mechanisms are not merely ideals of cooperation; they are practical instruments of sovereignty. By acting together, smaller countries can convert fragmented demand into collective leverage and reduce the risk that each country negotiates alone from a position of structural weakness.',
          ],
        },
        {
          k: 'p',
          text:
            'Economic dependency also carries a longer-term strategic cost. When national systems depend heavily on externally controlled platforms without deliberate skills transfer, domestic operations, security capability and exit planning, the country may pay continuously for access without building durable internal competence. Over time, this can turn digital transformation into a recurring import bill rather than a foundation for local capability, public-sector resilience and the development of a regional digital industry.',
        },
        {
          k: 'p',
          text:
            'The goal is not technological self-isolation. The goal is to ensure that external capability strengthens national control instead of replacing it. A country can use global technology wisely and still insist that the final authority over continuity, data access, security assurance and system evolution remains in the accountable hands of domestic or trusted regional authorities.',
        },
      ],
    },
    {
      id: 'population-scale-harm',
      title: '3. Population-scale harm and PII exposure',
      blocks: [
        {
          k: 'p',
          text:
            'Digital Public Infrastructure differs from ordinary enterprise technology because the blast radius of failure can be the entire population. A commercial platform may affect a defined customer base, a business unit or a market segment. DPI affects citizens across identity, payments, health, welfare, mobility, education, taxation and public entitlements. When these systems fail, the consequences are not only data loss or service disruption; they can also affect a person’s ability to prove who they are, receive public support, access healthcare, move money, enrol in services or participate in the formal economy.',
        },
        {
          k: 'p',
          text:
            'This is why personal information within DPI must be understood as **national risk data**, not merely compliance data.',
        },
        {
          k: 'table',
          head: ['DPI data category', 'Why it is sensitive', 'Sovereignty risk if control fails'],
          rows: DATA_CATEGORY_ROWS,
          caption: 'Six categories of DPI data, and what is at stake when control over them fails.',
        },
        {
          k: 'p',
          text:
            'The risk is also cumulative. A breach in one system can expose another because DPI components are frequently integrated by design:',
        },
        {
          k: 'ul',
          items: [
            'A digital identity credential may authorise a welfare payment.',
            'A consent flow may release financial or health information.',
            'A data-exchange layer may connect multiple agencies through shared APIs.',
          ],
        },
        {
          k: 'p',
          text:
            'A vulnerability in one component can therefore move across the ecosystem, turning a single system weakness into a multi-platform exposure. This is especially important in countries that adopt interoperable Digital Public Goods and shared, reusable DPI components. Interoperability is valuable because it reduces duplication and improves service delivery, but it also means that weak authentication, poor API governance, exposed credentials, misconfigured access controls or unpatched software dependencies can have consequences beyond the first affected system.',
        },
        {
          k: 'p',
          text:
            'Population-scale harm is ultimately a trust and legitimacy issue. When citizens believe that digital systems expose them to identity theft, surveillance, fraud, exclusion or uncontrolled data sharing, they may avoid the very platforms designed to improve inclusion and public service delivery. The stronger sovereignty question is therefore not only whether the data exists, where it is hosted, or whether a privacy policy is in place; it is whether the country can prove that citizens’ most sensitive information remains protected, controlled and accountable across the full DPI ecosystem.',
        },
      ],
    },
    {
      id: 'trust-as-requirement',
      title: '4. Trust as a system user requirement',
      blocks: [
        {
          k: 'quote',
          text:
            'Communications campaigns, launch events or public messaging do not create trust. It is earned when security holds, citizens experience safety in practice, and the system behaves reliably when people need it most.',
        },
        {
          k: 'p',
          text:
            'A Digital Public Infrastructure system can be technically innovative, interoperable and well-funded, but still fail its public purpose if people associate it with exclusion, surveillance, fraud, unauthorised access, poor recourse or service interruption.',
        },
        {
          k: 'p',
          text:
            'This matters because adoption is the development case for DPI. Citizens do not adopt identity, payment, welfare, health or data-exchange systems only because they exist. They adopt them when they believe the system is safe, useful, fair and accountable. Trust therefore becomes a functional requirement, not a soft communications objective.',
        },
        { k: 'h3', text: 'Trust is weakened when citizens experience or perceive:' },
        {
          k: 'ul',
          items: [
            '**Exclusion:** when authentication failures, poor data quality or weak fallback processes prevent people from accessing services.',
            '**Surveillance risk:** when citizens believe their identity, payment, welfare or health data may be used beyond its intended purpose.',
            '**Fraud and loss of recourse:** when payment users fear unauthorised transactions, identity misuse or unclear accountability after harm.',
            '**Service interruption:** when outages, cyber incidents or vendor failures prevent access to essential public services.',
            '**Unclear accountability:** when citizens cannot understand who is responsible, how errors are corrected, or how misuse is investigated.',
          ],
        },
        {
          k: 'p',
          text:
            'If citizens do not trust a digital identity system, they may avoid enrolment or resist linking it to other services. If payment users fear fraud or lack confidence in dispute resolution, they may remain in cash. If vulnerable people are excluded from social support because of authentication, biometric, connectivity or data-quality failures, the programme’s legitimacy is undermined, even if the architecture appears sophisticated.',
        },
        {
          k: 'p',
          text:
            'Trust is therefore not an outcome that can be declared after deployment. It must be designed into security controls, privacy protections, user experience, fallback channels, grievance mechanisms and independent assurance from the beginning. In DPI, trust is the public evidence that sovereignty, security and safety are working together.',
        },
      ],
    },
    {
      id: 'shared-risk',
      title: '5. Shared DPG ecosystems create shared risk',
      blocks: [
        {
          k: 'p',
          text:
            'Open-source Digital Public Goods create enormous value by allowing countries to reuse proven components, accelerate implementation, reduce duplication, improve interoperability and avoid long-term proprietary lock-in. For many countries, especially those with limited budgets and urgent service-delivery needs, DPGs offer a practical path to building national-scale digital systems without having to start from scratch.',
        },
        {
          k: 'p',
          text:
            'But the same reuse model that makes Digital Public Goods powerful also creates systemic exposure. A vulnerability in a widely adopted component, dependency, API pattern, deployment script, configuration template or integration module may be present across many national deployments simultaneously. If countries lack mature software supply chain monitoring, patch governance, vulnerability disclosure processes, version tracking and independent security testing, a weakness discovered in one deployment can quietly remain active in another.',
        },
        {
          k: 'ol',
          items: [
            '**Common-code risk:** the same platform, library or dependency may be reused across multiple countries, creating a shared technical weakness if a vulnerability is discovered.',
            '**Common-configuration risk:** countries may copy similar reference architectures, deployment guides, API patterns or integration models, repeating the same misconfiguration at scale.',
            '**Common-response risk:** if patching, disclosure and version management are not coordinated, one country may fix a weakness while another remains exposed for months.',
          ],
        },
        {
          k: 'callout',
          tone: 'teal',
          title: 'This is not an argument against Digital Public Goods',
          paras: [
            'It is an argument for a more honest model of shared responsibility across the entire ecosystem. Countries adopting shared platforms should maintain software bills of materials, vulnerability disclosure processes, version tracking, independent code and architecture review, secure configuration baselines and regional coordination mechanisms.',
            'Funders and ecosystem stewards also have a role to play by supporting security maintenance, coordinated assurance, responsible disclosure channels and common minimum security expectations across deployments.',
          ],
        },
        {
          k: 'p',
          text:
            'The sovereignty lesson is clear: open source reduces one form of dependency, but it does not remove the need for disciplined security governance and effective DevSecOps assurance practice. A Digital Public Good becomes safer when every country using it contributes to the health of the shared ecosystem, not when each deployment treats security as a private national matter. In a connected DPI environment, one country’s unpatched weakness can become another country’s inherited exposure, and shared infrastructure demands shared vigilance.',
        },
      ],
    },
    {
      id: 'series-bridge',
      title: 'Series bridge',
      minor: true,
      blocks: [
        {
          k: 'callout',
          title: 'What comes next in the series',
          paras: [
            'The next article turns to the threat environment that makes these sovereignty risks urgent: cyberwar. It explains why Digital Public Infrastructure can no longer be treated as ordinary digital government infrastructure, but as critical national infrastructure operating in an active, contested and persistent threat environment in which identity, payment, health, welfare and data-exchange systems are strategic targets.',
          ],
        },
      ],
    },
  ],
};

/* ── Article 3 ──────────────────────────────────────────────────────────── */

/** Grouped by institution so a reader can jump to the kind of source they need. */
const REFERENCES: { heading: string; items: string[] }[] = [
  {
    heading: 'United Nations and UN agencies',
    items: [
      'UN Office for Digital and Emerging Technologies (ODET) — Universal DPI Safeguards Framework and DPI Safeguards Resource Hub, co-led with UNDP.',
      'UN Development Programme (UNDP) — Digital Public Infrastructure guidance and co-stewardship of the Digital Public Goods Alliance.',
      'UN General Assembly — Global Digital Compact (2024) and associated digital cooperation follow-up processes.',
      'International Telecommunication Union (ITU) — GovStack Initiative (with GIZ, Estonia and UNDP), reusable government Building Block specifications.',
      'UN Conference on Trade and Development (UNCTAD) — Digital Economy Report series, covering cross-border data flows and data sovereignty for developing economies.',
      'World Bank Group — Identification for Development (ID4D) Practitioner’s Guide and Principles on Identification for Sustainable Development.',
      'World Bank — “Resilient, Secure and Trusted: The Next Frontier for Digital Public Infrastructure” (2025).',
      'World Economic Forum — “Building Security into India’s Digital Public Infrastructure” (October 2025) and DPI security risk taxonomy.',
      'OECD — Going Digital project and DPI security and governance guidance, including modular and federated architecture recommendations.',
    ],
  },
  {
    heading: 'European Union, ENISA and European bodies',
    items: [
      'European Union — General Data Protection Regulation (GDPR), Regulation (EU) 2016/679, including Chapter V cross-border transfer rules and Article 48.',
      'European Union — Cloud and AI Development Act (CADA), proposed 3 June 2026 as part of the European Technological Sovereignty Package.',
      'European Union — EU AI Act, in force August 2024; classifies AI used in biometric identification, social benefits determination and essential-services access as high risk.',
      'European Union — Digital Services Act (DSA) and Digital Markets Act (DMA), platform governance and gatekeeper obligations.',
      'European Union — Network and Information Security Directive 2 (NIS2), critical-infrastructure cybersecurity obligations across Member States.',
      'European Union Agency for Cybersecurity (ENISA) — cybersecurity guidance, threat landscape reporting and technical input to the EU Cybersecurity Certification Scheme for Cloud Services (EUCS).',
      'Court of Justice of the European Union — Schrems II (Case C-311/18, 2020), invalidating the EU–US Privacy Shield.',
      'European Data Protection Board — Recommendations 01/2020 on supplementary measures for cross-border data transfers.',
      'European Commission — European Technological Sovereignty Package (3 June 2026), including the EU Open Source Strategy and Chips Act 2.0.',
      'European Commission, DG CONNECT — Cloud Sovereignty Framework and “Shaping Europe’s Digital Future” portal.',
    ],
  },
  {
    heading: 'United States: statutes, authorities and agencies',
    items: [
      'Clarifying Lawful Overseas Use of Data Act (CLOUD Act), 2018 — establishes provider “possession, custody, or control”, not data location, as the trigger for compelled disclosure.',
      'Foreign Intelligence Surveillance Act (FISA) Section 702 — authorises US agencies to direct US-based providers to disclose communications of non-US persons abroad.',
      'Executive Order 12333 (1981, as amended) — foundational authority for US signals intelligence collection outside the United States.',
      'USA PATRIOT Act Section 215 — authority for compelled production of “tangible things” relevant to foreign intelligence investigations.',
      'United States v. Microsoft Corp. (2018) — the Dublin email-disclosure dispute that the CLOUD Act rendered moot.',
      'US National Institute of Standards and Technology (NIST) — Digital Identity Guidelines (SP 800-63-4); Secure Software Development Framework (SP 800-218); Cybersecurity Framework; AI Risk Management Framework.',
      'US Cybersecurity and Infrastructure Security Agency (CISA) — advisories, Known Exploited Vulnerabilities catalogue and critical-infrastructure guidance.',
      'US National Trade Estimate Report on Foreign Trade Barriers, 2026 edition — trade-policy treatment of foreign data localisation and sovereign cloud measures.',
    ],
  },
  {
    heading: 'Other national and regional regimes',
    items: [
      'China — Cybersecurity Law (2017), Data Security Law (2021), Personal Information Protection Law (2021), and Article 7 of the National Intelligence Law (2017).',
      'Russian Federation — Federal Law No. 152-FZ “On Personal Data”, requiring localisation of citizens’ personal data on servers within Russia.',
      'India — Digital Personal Data Protection Act (2023) and the Data Empowerment and Protection Architecture / Account Aggregator consent framework.',
      'Brazil — Lei Geral de Proteção de Dados Pessoais (LGPD), with extraterritorial effect and an independent supervisory authority.',
      'Estonia — Data Embassy concept and bilateral treaty with Luxembourg, extending Estonian jurisdiction to offshore infrastructure.',
      'Canada — Foreign Extraterritorial Measures Act and the emerging Canadian Sovereign Cloud Initiative.',
      'African Union — Digital Transformation Strategy for Africa (2020–2030) and the AfCFTA e-commerce protocol.',
      'Association of Southeast Asian Nations — ASEAN Digital Masterplan 2025.',
    ],
  },
  {
    heading: 'Cloud and technology providers',
    items: [
      'Microsoft — Azure sovereign cloud documentation: EU Data Boundary, Managed HSM external key storage, confidential computing.',
      'Google Cloud — Cloud External Key Manager and Cloud Key Management Service documentation on customer-managed and customer-held keys.',
      'Amazon Web Services — Key Management Service, Nitro Enclaves for confidential computing, and the AWS Digital Sovereignty Pledge.',
      'Thales CipherTrust — guidance on Bring Your Own Key, Hold Your Own Key and external key management for cloud data sovereignty.',
      'Utimaco — Enterprise Secure Key Manager, general-purpose HSMs and double key encryption reference architectures.',
      'Open Source Security Foundation / Linux Foundation — OpenSSF Scorecard and Supply-chain Levels for Software Artifacts (SLSA).',
    ],
  },
  {
    heading: 'DPI and DPG frameworks and communities',
    items: [
      'Digital Public Goods Alliance — DPG Registry, DPG Standard and the 50-in-5 campaign.',
      'MOSIP Foundation / IIIT-Bangalore — security architecture documentation for digital identity digital public goods.',
      'Mojaloop Foundation — security model and architecture for interoperable instant payment infrastructure.',
      'Estonia X-Road / Nordic Institute for Interoperability Solutions — secure government data exchange reference architecture.',
      'Centre for Digital Public Infrastructure / IIIT-Bangalore — DPI architecture and governance guidance, including G2P Connect specifications.',
      'Co-Develop Fund and the Global DPI Summit — country DPI journey funding and convening.',
      'Bill &amp; Melinda Gates Foundation — Digital Public Infrastructure programme funding MOSIP, Mojaloop, DHIS2 and the Upanzi Network.',
      'Digital Impact Alliance — Principles for Digital Development.',
    ],
  },
  {
    heading: 'Threat intelligence, standards and technical references',
    items: [
      'CrowdStrike — 2026 Global Threat Report (Counter Adversary Operations).',
      'MITRE ATT&amp;CK Framework — knowledge base of adversary tactics, techniques and procedures for nation-state threat modelling.',
      'OWASP Foundation — OWASP API Security Top 10.',
      'Center for Internet Security — CIS Benchmarks for cloud infrastructure and operating system hardening.',
      'ISO/IEC — ISO/IEC 27001 (Information Security Management) and ISO/IEC 42001 (AI Management Systems).',
      'Center for Strategic and International Studies — Significant Cyber Incidents Tracker and “Approaches to Digital Public Infrastructure in the Global South”.',
      'IBM — Cost of a Data Breach Report (2024 edition, regional analysis).',
      'Thomas Murray — GCC Regional Risk Update series (2026).',
      'Dubai Electronic Security Center — Dubai Cyber Security Strategy, cited as a reference model for institutionalised cyber governance.',
    ],
  },
];

const ARTICLE_3: Insight = {
  slug: 'cyberwar-makes-sovereignty-non-negotiable',
  number: 3,
  title: 'Cyberwar Makes Sovereignty Non-Negotiable',
  subtitle: 'Digital Public Infrastructure in an active threat environment',
  standfirst:
    'Digital Public Infrastructure carries essential public services through a persistent digital threat environment. AI-enabled attacks, compromised software supply chains and cross-border dependencies make sovereignty a question of proven control and citizen protection. This article examines what that means for DPI design, funding and independent safeguards.',
  published: '2026-09-27',
  publishedLabel: 'September 2026',
  version: 'Series version 1.0',
  classification: 'Public',
  tags: ['Digital sovereignty', 'DPI', 'Cyberwar', 'AI governance', 'Critical infrastructure'],
  filters: ['dpi', 'policy', 'ai', 'opensource', 'citizen'],
  pdf: '/assets/papers/dtff-digital-sovereignty-03-cyberwar-makes-sovereignty-non-negotiable.pdf',
  sections: [
    {
      id: 'executive-summary',
      title: 'Executive summary',
      blocks: [
        {
          k: 'lede',
          text:
            'Cyberwar changes the digital sovereignty debate by removing the comfortable assumption that national digital systems operate in a mostly peaceful environment interrupted by occasional incidents. For identity, payments, health, welfare and data exchange platforms, threat activity is now continuous, adaptive, and often designed to remain invisible until it achieves strategic advantage.',
        },
        {
          k: 'p',
          text:
            'This article argues that sovereignty is non-negotiable because DPI is now part of the attack surface of the state. AI accelerates adversaries, critical infrastructure is a deliberate target, and the countries moving fastest into population-scale digital dependency are often the countries with the least dedicated security capacity.',
        },
        {
          k: 'p',
          text:
            'The Foundation approaches this as a public-interest protection problem: infrastructure must remain secure, people must remain safe, rights must remain enforceable, and failures must be independently visible. A country cannot rely on vendor assurances or the absence of outages as proof that its identity, payment and welfare systems will remain usable under deliberate pressure. Sovereignty needs evidence: **clear authority, rehearsed continuity, defensible data access and practical avenues for citizens to challenge harm.**',
        },
        { k: 'h3', text: 'Key points for policymakers and DPI leaders' },
        {
          k: 'ul',
          items: [
            'Operational stability is not proof of security: seek evidence of detection, containment and recovery.',
            'AI changes both sides of the risk: faster attacks and new failure paths inside AI-enabled DPI decisions.',
            'Treat identity, payments and data exchange as essential public services, with protected security budgets.',
            'Close the defence gap through domestic capability, regional cooperation and independent assurance.',
          ],
        },
      ],
    },
    {
      id: 'persistent-not-episodic',
      title: '1. Cyberwar is persistent, not episodic',
      blocks: [
        {
          k: 'p',
          text:
            'Conventional digital policy often assumes that systems operate normally until an incident occurs. Modern cyber conflict challenges that assumption. Adversaries may be present, mapping dependencies, testing credentials, probing APIs, poisoning supply chains, or waiting inside networks long before a public disruption is visible.',
        },
        {
          k: 'p',
          text:
            'This matters for sovereignty because a country may appear operationally stable while its strategic digital foundations are being quietly degraded. The absence of a visible outage does not prove that a system is secure, sovereign, or under effective national control.',
        },
        {
          k: 'p',
          text:
            'For a DPI operator, this changes the meaning of “normal operations”. A successful identity check or payment transaction says little about whether an attacker has gained privileged access, captured a service account, or mapped the dependencies they will target later. An adversary can use a quiet period to learn how payment settlement, identity verification, beneficiary enrolment and incident escalation actually work.',
        },
        {
          k: 'p',
          text:
            'A sovereignty assessment should therefore examine who can see and stop malicious activity, not just who owns or hosts the platform.',
        },
        {
          k: 'ul',
          items: [
            'Can the responsible institution inspect logs and software changes?',
            'Can it revoke a compromised supplier’s access?',
            'Can it direct containment without waiting for consent from a foreign provider?',
          ],
        },
        {
          k: 'p',
          text:
            'Control exists only when those powers can be exercised and tested. Resilience must be designed for imperfect conditions: degraded networks, unavailable vendors, compromised credentials, and uncertainty about an incident’s source. Emergency procedures, backups and manual citizen-service channels need owners, exercises and funding before an attack — not after one has interrupted access to money or essential entitlements.',
        },
        {
          k: 'ol',
          items: [
            '**Detect before disruption.** Monitor identity, API, administrative and supply-chain signals even while services appear healthy.',
            '**Own the response.** Define who can isolate a component, revoke access, and communicate with affected institutions.',
            '**Prove continuity.** Exercise essential transactions and citizen-facing fallback channels under realistic loss of service.',
            '**Treat quiet periods as exposure windows.** Use continuous testing and threat-informed review rather than waiting for a public incident.',
          ],
        },
        {
          k: 'callout',
          tone: 'teal',
          title: 'The governing principle',
          paras: [
            'The absence of visible failure cannot define security. Security is the system’s demonstrated ability to withstand and operate under active threat conditions — verified, not assumed from the fact that nothing has visibly gone wrong yet.',
          ],
        },
      ],
    },
    {
      id: 'ai-force-multiplier',
      title: '2. AI has become the attacker force multiplier',
      blocks: [
        {
          k: 'p',
          text:
            'AI compresses the time between reconnaissance, targeting, exploitation and adaptation. It helps attackers generate convincing social engineering, analyse exposed code, chain vulnerabilities, automate discovery, and use legitimate tools in ways that evade traditional malware-focused detection. As a result, the DPI defence model cannot rely on slow manual response cycles or perimeter thinking.',
        },
        {
          k: 'p',
          text:
            'AI also expands the DPI attack surface because AI is increasingly part of the DPI stack itself. Fraud detection, biometric liveness checks, social protection eligibility, transaction monitoring and automated risk scoring can all introduce model-level risks, including adversarial inputs, data poisoning, model inversion, biased outcomes and compromised model supply chains.',
        },
        {
          k: 'p',
          text:
            'The security challenge is not confined to malicious code written by AI. Attackers can impersonate support staff, exploit excessive API permissions, search disclosed configuration for useful pathways, and adjust their methods after each defensive action. A DPI programme that reviews access quarterly but changes integrations daily creates a widening gap between the pace of exposure and the pace of control.',
        },
        {
          k: 'p',
          text:
            'AI-enabled services also deserve their own threat model. A fraud score may delay a payment; a liveness tool may deny an identity match; an eligibility recommendation may turn into a de facto benefit decision. Manipulated inputs, unreviewed model updates or misleading automated outputs can therefore harm people **without bringing the platform down.** Security assessment must be paired with data minimisation, human review and meaningful recourse.',
        },
        {
          k: 'p',
          text:
            'For the Foundation’s security, safety and rights lens, the test is whether controls work when the model is wrong or an authorised user is deceived. Restrict what agents and applications can ask of registries; record why information was accessed; return only the evidence needed for the decision; and make disputed outcomes traceable to an accountable human institution.',
        },
        {
          k: 'ol',
          items: [
            '**Constrain access.** Give AI services and agents the narrowest data and action permissions needed.',
            '**Test model abuse.** Include adversarial inputs, poisoned data, compromised dependencies, and harmful decision outcomes.',
            '**Keep decisions contestable.** Log material AI influence and provide workable human review and correction.',
            '**Accelerate the defence.** Link timely telemetry, triage, patching and response to the pace of change.',
          ],
        },
      ],
    },
    {
      id: 'critical-national-infrastructure',
      title: '3. DPI is now critical national infrastructure',
      blocks: [
        {
          k: 'p',
          text:
            'Identity platforms, payment rails, health data systems, welfare delivery channels and government data exchanges are no longer convenience systems. They are systems through which citizens prove who they are, receive money, access services and interact with the state. That makes them attractive targets for criminal groups, geopolitical adversaries, and actors seeking to erode public confidence.',
        },
        {
          k: 'p',
          text:
            'The practical implication is that DPI security should be funded, governed and assured as critical national infrastructure. This includes independent penetration testing, secure software development controls, incident response exercises, recovery planning, privileged access monitoring, supply chain assurance, and clear accountability for risk-acceptance decisions.',
        },
        {
          k: 'p',
          text:
            'A single weakness may travel across public services because interoperable systems are connected by design. An identity assertion may unlock a welfare payment; a payment instruction may depend on a beneficiary registry; and a data exchange may pass sensitive information among agencies. This makes the practical security boundary larger than any ministry, system integrator or platform owner. Assurance must examine the transactions and their dependencies.',
        },
        {
          k: 'p',
          text:
            'Critical-infrastructure treatment also changes the funding question. Security cannot sit in a one-off implementation budget while the connected population and the number of integrations continue growing. Governments and funders need to provide for secure maintenance, software bill of materials visibility, vulnerability disclosure, exercises, replacement of ageing dependencies and independent testing throughout the service life.',
        },
        {
          k: 'p',
          text:
            'The objective is not to militarise ordinary service delivery or make inclusion secondary to security. It is to protect continuity and rights together: rapid containment without arbitrary exclusion, incident disclosure without unnecessary exposure of personal data, and recovery plans that keep essential services reachable through assisted or offline channels where possible.',
        },
        {
          k: 'ol',
          items: [
            '**Protect the whole service chain.** Map dependencies across identity, payments, registries, and data exchange.',
            '**Assure independently.** Test security beyond the claims of those who build, host or operate the system.',
            '**Fund the operating life.** Budget for monitoring, patching, red-team exercises, maintenance and recovery.',
            '**Protect the citizen.** Maintain privacy, access, appeal, and continuity during incident response.',
          ],
        },
      ],
    },
    {
      id: 'attrition-and-the-exposure-gap',
      title: '4. Attrition and the Global South exposure gap',
      blocks: [
        {
          k: 'p',
          text:
            'Cyberwar often works through attrition rather than dramatic confrontation. Each apparently minor incident gives attackers more knowledge of the environment, more insight into institutional behaviour, and more opportunity to identify the moment when exploitation will have maximum impact.',
        },
        {
          k: 'p',
          text:
            'The Global South faces a difficult asymmetry. Many countries are moving quickly to adopt and scale DPI because the development benefits are real. Yet the security institutions, specialist workforce, funding levels and national incident response capabilities required to protect those systems often lag behind the speed of deployment. This reverses the ideal sequence: **population-scale dependency grows faster than population-scale defence.**',
        },
        {
          k: 'p',
          text:
            'Closing this gap does not require every country to build a large national cyber command before digitising services. It does require honest risk recognition, regional cooperation, minimum security baselines, independent assurance, and a commitment to treat security as an operating function rather than a project close-out item.',
        },
        {
          k: 'p',
          text:
            'Attrition is particularly difficult to manage where a small national team oversees several essential platforms, multiple delivery partners, and an expanding number of local integrations. A seemingly minor credential leak, delayed security patch or recurring API misconfiguration can become one more piece of an adversary’s understanding of the national environment. Weaknesses accumulate even when no single event looks like a crisis.',
        },
        {
          k: 'p',
          text:
            'Capacity constraints should not be confused with lack of commitment. Countries may face legitimate pressure to extend benefits, payments and identity services quickly while specialist staff and maintenance resources remain scarce. The answer is to make shared security capacity part of the development model: agreed minimum controls, trained local teams, trusted regional support, coordinated vulnerability disclosure and reusable assurance methods across Digital Public Goods.',
        },
        {
          k: 'p',
          text:
            'The Foundation’s public-interest approach also asks who carries the cost when defences lag. Citizens dependent on a grant, a clinic, a payment wallet or a digital credential should not become the shock absorber for weak institutional planning. Funders and governments can reduce that risk by financing safeguards, civil-society feedback, recovery capability and accessible recourse as enduring services — not optional extras at programme close-out.',
        },
        {
          k: 'ol',
          items: [
            '**Start with a defensible baseline.** Name accountable operators, map dependencies and prioritise critical exposures.',
            '**Pool scarce capabilities.** Use regional expertise and shared DPG security services without surrendering national accountability.',
            '**Make funding continuous.** Protect security and recovery budgets beyond the initial deployment milestone.',
            '**Measure real-world harm.** Track exclusion, interruption, fraud and failures of remedy alongside technical incidents.',
          ],
        },
        {
          k: 'callout',
          title: 'What this means for a country running DPI',
          paras: [
            'A national identity, payment or data exchange platform does not operate in peacetime conditions merely because the country itself is at peace. It operates inside an active, contested digital threat environment from the day it goes live.',
            'Treating DPI security as a one-time deployment milestone rather than a continuous, funded, institutional discipline is the single most consequential strategic error a country can make in this domain.',
          ],
        },
      ],
    },
    {
      id: 'references',
      title: 'References and further reading',
      blocks: [
        {
          k: 'p',
          text:
            'This list is organised by institutional category to help readers navigate quickly to the type of source most relevant to their work. It reflects the regulatory and threat landscape as understood at the time of writing, and should be revisited periodically: several of the instruments listed remain subject to active negotiation and change.',
        },
        ...REFERENCES.flatMap((g): Block[] => [
          { k: 'h3', text: g.heading },
          { k: 'ul', items: g.items },
        ]),
      ],
    },
    {
      id: 'series-bridge',
      title: 'Series bridge',
      minor: true,
      blocks: [
        {
          k: 'callout',
          title: 'What comes next in the series',
          paras: [
            'The next article turns this threat analysis into an implementation question: how can security, rights and sovereignty be designed into Digital Public Infrastructure at the architecture stage rather than attached after launch? It moves from why control matters under pressure to the governance, trust, data, platform, operations and ecosystem decisions that make control verifiable.',
          ],
        },
      ],
    },
  ],
};

/* ── Article 4 ──────────────────────────────────────────────────────────── */

const LAYER_ROWS: string[][] = [
  ['Governance', 'Legal basis, accountability, oversight, procurement controls, incident authority, audit rights.', 'Determines who actually owns the decisions, not just who operates the system day-to-day.'],
  ['Trust', 'Identity, authentication, authorisation, consent, signing, key management.', 'The layer where data sovereignty is technically enforced or abandoned, depending on who holds the keys.'],
  ['Data protection', 'Minimisation, purpose limitation, retention controls, encryption, privacy impact assessment.', 'Reduces the value and legal exposure of a breach, and underpins protection of personal information.'],
  ['Platform security', 'Secure SDLC, API security, secrets management, logging, patching, vulnerability management.', 'Where supply chain risk inherited from digital public goods enters the system.'],
  ['Operations', 'Monitoring, SOC workflows, incident response, backup and recovery, continuity, and third-party risk.', 'Determines whether operational sovereignty is real, or only a policy aspiration.'],
  ['Ecosystem', 'Certification, onboarding controls, interoperability testing, fraud controls, provider offboarding.', 'The weakest participant in an interoperable network sets the practical security floor for everyone connected to it.'],
];

const ROADMAP_ROWS: string[][] = [
  ['Immediate (0–6 months)', 'Conduct an architecture review to identify foreign single-vendor dependencies. Establish a data residency policy with a technical, not merely legal, enforcement plan. Define minimum domestic operational capability requirements. Inventory any AI components already embedded in deployed systems.', 'Architectural, Data'],
  ['Short-term (6–18 months)', 'Build a domestic DPI operations team. Implement HSM-backed key management with domestic key custody. Establish tested offline operational procedures. Commission an independent security assessment.', 'Operational, Security'],
  ['Medium-term (18–36 months)', 'Achieve software bill of materials (SBOM) compliance for all deployed open-source components. Establish a national CERT/CSIRT with a DPI-specific mandate. Develop regional data sovereignty agreements with neighbouring states. Establish AI governance policy for DPI-embedded AI.', 'Security, Governance'],
  ['Long-term (36+ months)', 'Participate in regional shared infrastructure for resilience. Achieve a mature, independently verified DPI security maturity level. Establish domestic DPI security research capability. Contribute to international DPI security standards.', 'All five pillars'],
];

const REGIONAL_ROWS: string[][] = [
  ['1. Governance and decision rights', 'Shared services can create uncertainty over who has authority during incidents, disputes, upgrades or emergency interventions.', 'Establish formal regional governance, clearly defined national decision rights, escalation procedures, voting or approval mechanisms, audit rights, and transparent accountability for shared infrastructure.'],
  ['2. Data jurisdiction and cross-border access', 'Regional platforms may process, replicate or back up sensitive information across several jurisdictions with different legal and privacy requirements.', 'Define agreed data classifications, residency and transfer rules, permitted administrative access, cross-border disclosure procedures, logging requirements, and mechanisms for resolving conflicts between national laws.'],
  ['3. Cryptographic trust and key custody', 'Centralising trust anchors or cryptographic keys can create a powerful regional point of dependency or compromise.', 'Use distributed or pooled key-management models with strong separation of duties, HSM-backed protection, national participation in key governance, dual control, auditable ceremonies, and tested revocation and recovery procedures.'],
  ['4. Operational resilience and incident response', 'Smaller states may lack sufficient specialist capacity to monitor, investigate and recover from sophisticated attacks independently.', 'Establish shared SOC or CSIRT capabilities, common incident taxonomies, regional threat-intelligence exchange, coordinated exercises, minimum national response capability, and clear authority for cross-border incident coordination.'],
  ['5. Supplier and technology dependency', 'Regional procurement can reduce cost but can also concentrate dependence on a single technology provider or architecture.', 'Use open standards, modular architectures, common exit clauses, source and configuration portability, interoperable alternatives, independent security assurance, and procurement structures that preserve switching and substitution options.'],
];

/** Each layer: what it covers, where sovereignty is won or lost, what proves it. */
const LAYER_DETAIL: { name: string; covers: string; focus: string; evidence: string }[] = [
  {
    name: '01. Governance',
    covers: 'Defines the legal and institutional authority for the DPI: mandate, ownership, accountability, oversight, procurement, audit rights, incident authority, and the rules governing outsourcing or shared infrastructure.',
    focus: 'Decision rights must remain clear even when technology and operations are delegated. Contracts, laws and governance bodies should preserve the state’s ability to direct, inspect, challenge, replace and recover critical services.',
    evidence: 'Named accountable owners; enforceable audit and access rights; incident decision authority; supplier exit and transition clauses; documented oversight and independent assurance.',
  },
  {
    name: '02. Trust',
    covers: 'Controls the roots of digital trust: identity proofing, authentication, authorisation, consent, digital signing and cryptographic key management that determine who or what is trusted across the ecosystem.',
    focus: 'Control of keys, privileged identities and trust anchors determines whether technical sovereignty is real. Key generation, custody, rotation, recovery and revocation should not depend on an actor the country cannot independently govern.',
    evidence: 'HSM-backed key custody; dual control and separation of duties; controlled privileged access; auditable trust-anchor changes; tested emergency revocation and recovery.',
  },
  {
    name: '03. Data protection',
    covers: 'Governs how personal and sensitive data is collected, used, shared, retained, encrypted and deleted, including minimisation, purpose limitation, residency, cross-border transfers and privacy impact assessment.',
    focus: 'Sovereignty requires control over data throughout its lifecycle, not only where a database is hosted. Data flows, backups, replicas, support access and lawful cross-border disclosure pathways must be visible and governed.',
    evidence: 'Data inventory and flow maps; classification and retention rules; encryption with controlled keys; privacy impact assessments; deletion controls; monitored cross-border and administrative access.',
  },
  {
    name: '04. Platform security',
    covers: 'Protects the software, APIs, infrastructure and supply chain that make DPI function, including secure SDLC, secrets, logging, patching, vulnerability management and dependency assurance for digital public goods and open-source components.',
    focus: 'A country cannot claim meaningful control if it cannot verify what code is deployed, how it was built, what dependencies it contains, who can change it, and how vulnerabilities are found and remediated.',
    evidence: 'Controlled source and CI/CD access; SBOM and provenance; signed build artefacts; API and secrets controls; vulnerability and patch evidence; independent code and architecture assurance.',
  },
  {
    name: '05. Operations',
    covers: 'Turns design into sustained capability through monitoring, SOC workflows, incident response, backup and recovery, continuity, administrative procedures, skills and third-party operational risk management.',
    focus: 'Operational sovereignty is demonstrated when essential services can be monitored, defended, restored and safely operated even if a primary supplier, cloud service or external support team is unavailable.',
    evidence: 'Domestic operating capability; independent telemetry and logs; tested incident runbooks; offline and degraded-mode procedures; recovery exercises; privileged-access oversight; continuity and supplier-failure tests.',
  },
  {
    name: '06. Ecosystem',
    covers: 'Extends sovereignty beyond the core platform to every connected participant through onboarding, certification, interoperability testing, fraud controls, interface requirements, continuous assurance and provider offboarding.',
    focus: 'Interoperability distributes risk. The practical security floor is therefore set by the weakest connected participant or interface, making common minimum controls and enforceable participation rules essential.',
    evidence: 'Common security baseline; pre-production interoperability tests; certification and periodic reassessment; fraud monitoring; dependency mapping; suspension and offboarding processes; evidence-sharing obligations.',
  },
];

const ARTICLE_4: Insight = {
  slug: 'sovereignty-by-design',
  number: 4,
  title: 'Sovereignty by Design',
  subtitle: 'Building DPI architecture, roadmaps and regional resilience',
  standfirst:
    'Sovereignty cannot be bolted onto Digital Public Infrastructure after launch without cost, disruption and compromise. This article turns the policy debate into an architecture and implementation question, showing how countries can design sovereignty into DPI from the beginning and build it progressively through national and regional capability.',
  published: '2026-10-01',
  publishedLabel: '1 October 2026',
  version: 'Series version 1.0',
  classification: 'Public',
  tags: ['Digital sovereignty', 'DPI', 'Architecture', 'Governance', 'Regional cooperation'],
  filters: ['dpi', 'policy', 'identity', 'payments', 'opensource'],
  pdf: '/assets/papers/dtff-digital-sovereignty-04-sovereignty-by-design.pdf',
  sections: [
    {
      id: 'executive-summary',
      title: 'Executive summary',
      blocks: [
        {
          k: 'lede',
          text:
            'Digital Public Infrastructure is where digital sovereignty becomes a practical design problem. A national identity system, payment rail or data exchange layer is sovereign in practice only if its architecture, operations, governance, data controls and assurance model make control real before the system becomes nationally dependent. This article sets out a six-layer architecture for sovereignty-aware DPI, a realistic phased roadmap, and the role of regional cooperation in giving smaller and lower-capacity countries a credible route to meaningful control.',
        },
        { k: 'h3', text: 'Key points for policymakers and DPI leaders' },
        {
          k: 'ul',
          items: [
            'Security and sovereignty controls are cheaper and more effective when designed in before go-live.',
            'DPI sovereignty requires governance, trust, data protection, platform security, operations and ecosystem controls to work together.',
            'A credible roadmap is a 36-month-plus commitment, not a procurement milestone.',
            'Regional infrastructure, shared CSIRT capacity and pooled assurance can turn sovereignty from aspiration into capability.',
          ],
        },
        {
          k: 'p',
          text:
            'The central argument is that sovereignty is not a hosting decision or a contractual promise. It is the cumulative result of choices about key custody, administrative access, logging, code control, independent assurance and exit options. When countries leave those choices to vendors or defer them until after launch, they inherit dependencies that are **costly to unwind and hard to see.**',
        },
        {
          k: 'p',
          text:
            'Progress is therefore best measured in verified capability rather than declared intent. The roadmap in this article moves from immediate visibility of dependencies, through domestic operational control and independent assurance, to long-term regional resilience. For countries that cannot build every capability alone, regional cooperation offers a practical way to share cost and expertise while retaining national accountability for laws, data protection and security thresholds.',
        },
        { k: 'h3', text: 'Key takeaways' },
        {
          k: 'p',
          text:
            'For policymakers, this means writing sovereignty requirements into legal mandates, procurement terms and funding conditions before signing contracts. For DPI leaders, it means building the domestic skills, operating procedures and assurance relationships that turn those requirements into everyday practice. Neither group can deliver this alone, so sustained coordination among policy, technical and regional actors is essential.',
        },
        {
          k: 'ol',
          items: [
            'Treat sovereignty as an architectural requirement from day one, because every control deferred past go-live becomes harder, costlier and less complete to retrofit.',
            'Anchor control in the trust layer, since whoever holds the keys, administers the environment and sees the logs ultimately determines whether data sovereignty is real.',
            'Measure progress through independent assessment rather than policy statements, so that the gap between declared and actual sovereignty narrows instead of widening over time.',
          ],
        },
        {
          k: 'p',
          text:
            'Sovereignty by design is ultimately a discipline of sustained, verifiable choices rather than a single procurement or policy event. Countries that embed control early, build domestic and regional capability in deliberate phases, and test their assumptions independently will be far better placed to protect citizens and sustain trust in national systems.',
        },
      ],
    },
    {
      id: 'designed-in',
      title: '1. Sovereignty must be designed in at the architecture stage',
      blocks: [
        {
          k: 'p',
          text:
            'Sovereignty controls retrofitted after national systems go live are usually more expensive, more disruptive and less complete than controls embedded at design time. Once identity, payment, social protection or data exchange systems are widely integrated, later controls must work around existing dependencies, data flows, operational habits and vendor relationships.',
        },
      ],
    },
    {
      id: 'six-layer-architecture',
      title: '2. A six-layer sovereignty-aware DPI architecture',
      blocks: [
        {
          k: 'p',
          text:
            'A complete DPI sovereignty posture is not a single product. It is an architecture of mutually reinforcing controls. The six layers below show where sovereignty decisions are made, and where false confidence usually enters if one layer is treated as sufficient on its own.',
        },
        {
          k: 'table',
          head: ['Layer', 'What it covers', 'Sovereignty relevance'],
          rows: LAYER_ROWS,
          caption: 'The six layers, and what each one decides about control.',
        },
        {
          k: 'p',
          text:
            'Designing sovereignty in means asking hard questions early: who holds keys, who can administer the environment, who can see logs, who can change code, who verifies security, what happens if the primary vendor is unavailable, how cross-border access is controlled, and how citizens are protected when systems fail.',
        },
        {
          k: 'p',
          text:
            'The key design principle is **federation over unnecessary centralisation**. Monolithic DPI designs can concentrate risk and create single points of failure. Modular, federated and segmented architectures reduce lateral movement, limit blast radius, and allow individual components to fail or be replaced without collapsing the wider national system.',
        },
      ],
    },
    {
      id: 'six-layers-detail',
      title: '2.1 The six layers in detail',
      blocks: [
        {
          k: 'p',
          text:
            'The six layers operate as one sovereignty control system. Each layer answers a different question about who can decide, who can technically exercise control, and whether that control remains effective during normal operations, disruption, vendor failure or cross-border dependence.',
        },
        ...LAYER_DETAIL.flatMap((l): Block[] => [
          { k: 'h3', text: l.name },
          { k: 'p', text: l.covers },
          { k: 'p', text: `**Sovereignty focus.** ${l.focus}` },
          { k: 'p', text: `**Evidence of control.** ${l.evidence}` },
        ]),
        {
          k: 'callout',
          tone: 'teal',
          title: 'The design test',
          paras: [
            'For each layer, leaders should be able to identify the accountable authority, the technical control point, the evidence that proves control, and the recovery or exit path if a dependency fails. A gap in any one of these four elements can undermine the sovereignty of the whole DPI ecosystem.',
          ],
        },
        {
          k: 'p',
          text:
            'Effective sovereignty depends on these layers reinforcing one another, because strong control in one area cannot compensate for critical dependency or weakness in another.',
        },
        {
          k: 'p',
          text:
            'The objective is therefore not national self-sufficiency in every technology, but verifiable authority, meaningful technical control, operational resilience and credible alternatives when dependencies fail or become unacceptable. When these conditions are designed, tested and independently assured across all six layers, DPI becomes more resilient, accountable and capable of sustaining national control while still benefiting from regional cooperation and global technology ecosystems.',
        },
      ],
    },
    {
      id: 'phased-roadmap',
      title: '3. A phased sovereignty roadmap',
      blocks: [
        {
          k: 'p',
          text:
            'Digital sovereignty is built progressively, not delivered as a single technology programme or procurement outcome. Countries typically begin with a mixture of domestic capability, foreign technology, external expertise, legacy platforms and regional dependencies. The practical objective is therefore to understand those dependencies and deliberately increase the areas where national authorities can govern, operate, verify, recover and make independent decisions over time.',
        },
        {
          k: 'p',
          text:
            'The sequencing matters. Trying to localise every component immediately can increase cost and complexity without necessarily improving control, while delaying critical capabilities such as key custody, operational visibility, independent assurance and recovery can create dependencies that become difficult to reverse. No country achieves full sovereignty at go-live, so a credible plan should distinguish immediate visibility, short-term operational capability, medium-term assurance and long-term resilience.',
        },
        {
          k: 'table',
          head: ['Timeframe', 'Priority actions', 'Sovereignty dimension'],
          rows: ROADMAP_ROWS,
          caption: 'A phased roadmap, sequenced so that deferred controls do not become irreversible.',
        },
        {
          k: 'callout',
          title: 'No country achieves sovereignty at go-live',
          paras: [
            'The roadmap above is a 36-month-plus commitment requiring sustained political will, continuous investment in domestic capability, and the institutional honesty to commission independent assessments that may surface uncomfortable findings.',
            'Countries that treat sovereignty as a procurement outcome rather than an operational discipline will find the gap between declared and actual sovereignty widening over time, not closing.',
          ],
        },
        {
          k: 'p',
          text:
            'The roadmap should be treated as a capability-building journey rather than a fixed implementation schedule. Measure progress by demonstrable increases in control, resilience, domestic competence, independent assurance and credible exit options, with each phase reducing dependencies that could materially constrain national decision-making or the continuity of essential digital services.',
        },
      ],
    },
    {
      id: 'regional-architecture',
      title: '4. Regional and shared sovereignty architecture',
      blocks: [
        {
          k: 'p',
          text:
            'For many smaller and lower-capacity countries, the most realistic path to meaningful digital sovereignty is regional rather than purely national. Building every critical capability independently can be prohibitively expensive, difficult to staff and inefficient to sustain. Shared infrastructure, pooled cryptographic and assurance capability, common procurement standards, regional threat intelligence and shared Computer Security Incident Response Team capacity can give participating countries access to capabilities that would otherwise be out of reach.',
        },
        {
          k: 'p',
          text:
            'Regional sovereignty should therefore be understood as **shared capability without surrendered accountability**. National authorities should retain responsibility for laws, citizen rights, data protection requirements, security thresholds and critical decision-making, while selected technical and operational capabilities can be jointly delivered where this improves resilience, affordability and bargaining power. The objective is not to replace national sovereignty with regional control, but to strengthen national authority through trusted shared mechanisms, transparent governance, enforceable participation rules and independently verifiable safeguards.',
        },
        {
          k: 'p',
          text:
            'The design challenge is consequently not a binary choice between “national” and “foreign” infrastructure. A stronger model combines domestic authority, regional capability, open standards, interoperable architecture and carefully governed use of global technology, so that no single government, supplier, cloud provider or regional institution becomes an uncontested point of control. The central test is whether each country can understand its dependencies, influence the shared environment, independently verify its protections, and maintain continuity or exit if the arrangement no longer meets national requirements.',
        },
        {
          k: 'table',
          head: ['Key issue', 'Regional sovereignty consideration', 'Practical design requirement'],
          rows: REGIONAL_ROWS,
          caption: 'Five issues any regional arrangement has to settle explicitly.',
        },
        {
          k: 'p',
          text:
            'A mature regional model should be judged not by how much infrastructure is shared, but by whether sharing increases each participating country’s practical control and resilience. Regional arrangements should make countries less vulnerable to single-vendor dependence, skills shortages, fragmented security capability and unequal negotiating power, while preserving the ability of national authorities to enforce their own legal and policy requirements.',
        },
        {
          k: 'ol',
          items: [
            '**Share capability, not accountability.** Regional infrastructure can be jointly operated, but responsibility for citizen protection, national law and sovereign decision-making should remain clearly assigned.',
            '**Design for reversibility.** Every shared arrangement should include interoperability, portability, recovery, substitution and exit mechanisms so cooperation does not become irreversible dependency.',
            '**Verify regional trust continuously.** Common controls, independent assurance, joint exercises and transparent evidence should demonstrate that shared sovereignty arrangements remain effective as technology, suppliers, risks and political relationships change.',
          ],
        },
        {
          k: 'p',
          text:
            'Regional sovereignty works best when cooperation strengthens, rather than dilutes, national control. The goal is to create shared capability that expands resilience, technical depth and strategic choice while preserving clear accountability at country level. Done well, regional architecture turns sovereignty from an expensive aspiration into a practical, scalable and independently verifiable operating model.',
        },
      ],
    },
    {
      id: 'references',
      title: 'References and further reading',
      blocks: [
        {
          k: 'p',
          text:
            'This list is organised by institutional category to help readers navigate quickly to the type of source most relevant to their work. It reflects the regulatory and threat landscape as understood at the time of writing, and should be revisited periodically: several of the instruments listed remain subject to active negotiation and change.',
        },
        ...REFERENCES.flatMap((g): Block[] => [
          { k: 'h3', text: g.heading },
          { k: 'ul', items: g.items },
        ]),
      ],
    },
    {
      id: 'series-bridge',
      title: 'Series bridge',
      minor: true,
      blocks: [
        {
          k: 'callout',
          title: 'What comes next in the series',
          paras: [
            'The next article addresses the most common implementation trap in this area: assuming that data is sovereign because it is hosted locally. It connects data protection law, protection of personal information, and the risk of extraterritorial access.',
          ],
        },
      ],
    },
  ],
};

/* ── Perspective: cross-border digital identity ─────────────────────────── */

const PERSPECTIVE_1: Insight = {
  slug: 'making-digital-identity-work-across-borders',
  kind: 'perspective',
  title: 'Making Digital Identity Work Across Borders',
  subtitle: 'What has to be agreed before one country can rely on another’s credentials',
  standfirst:
    'Cross-border digital identity should make it easier for people to access services and demonstrate legitimate credentials without repeatedly surrendering personal information. Its success depends on whether an institution in one country can lawfully and confidently rely on evidence issued in another. Connecting databases is only part of the task. Governments must also agree what a credential proves, who may use it, who answers for mistakes, and how people recover when verification fails.',
  published: '2026-10-15',
  publishedLabel: 'October 2026',
  version: '',
  classification: 'Public',
  tags: ['Digital identity', 'Cross-border', 'Interoperability', 'Inclusion', 'Accountability'],
  filters: ['identity', 'dpi', 'policy', 'citizen', 'rights'],
  pdf: '/assets/papers/dtff-perspective-making-digital-identity-work-across-borders.pdf',
  sections: [
    {
      id: 'opportunity-for-africa',
      title: 'The opportunity for Africa',
      blocks: [
        {
          k: 'lede',
          text:
            'For Africa, this is an opportunity to improve access for migrants, traders and mobile workers while strengthening institutional accountability. The practical starting point is a limited set of useful services, supported by clear rules and independent assurance. A system should earn wider acceptance through evidence of security, inclusion and operational reliability.',
        },
      ],
    },
    {
      id: 'trust-travels',
      title: 'Trust must travel with the credential',
      blocks: [
        {
          k: 'p',
          text:
            'Interoperability has legal, regulatory, organisational, technical and operational dimensions. A working interface does not establish permission to share data or rely on a foreign identity. Compatible formats do not guarantee equivalent enrolment checks, authentication strength or institutional oversight. Participants need a common understanding of assurance, supported by evidence about how credentials are issued, protected, updated and revoked.',
        },
        {
          k: 'p',
          text:
            'Identification, authentication and authorisation must also remain distinct. Establishing identity does not establish permission to enter a country, practise a profession or receive a particular service. Likewise, a verified identity is only one part of financial due diligence. It does not automatically establish beneficial ownership, source of funds or other information a regulated institution must assess. Each service should specify the attributes it needs and the decisions that remain its responsibility.',
        },
      ],
    },
    {
      id: 'useful-services',
      title: 'Build around useful services',
      blocks: [
        {
          k: 'p',
          text:
            'Travel documents, health credentials, financial onboarding and professional qualifications illustrate different reasons to recognise identity across borders. Their requirements should not be forced into one model. A border authority needs different evidence from a remittance provider or an employer checking a qualification. More sensitive uses, including policing and personnel vetting, require particularly strong legal justification, accuracy controls, and due process.',
        },
        {
          k: 'p',
          text:
            'Passports, national identity systems, wallets and visas should evolve coherently while retaining distinct functions. A passport supports evidence of nationality and identity for travel; a visa records permission granted by the destination. A wallet can carry credentials issued by different authorities, but cannot make them legally interchangeable. The goal should be compatible trust mechanisms and clearly assigned authority, with separate permissions and data use for each service.',
        },
        {
          k: 'p',
          text:
            'A focused corridor between willing countries can test these arrangements before wider expansion. The pilot should address a genuine user problem, involve institutions authorised to act, and measure improvements against existing practice. Bilateral implementation can generate lessons for a broader trust framework, while legal recognition and liability arrangements must be settled before live reliance begins. Regional agreements can then extend proven arrangements rather than attempt to resolve every use case at once.',
        },
      ],
    },
    {
      id: 'chain-of-reliance',
      title: 'Secure the whole chain of reliance',
      blocks: [
        {
          k: 'p',
          text:
            'Cross-border verification inherits risks from issuers, intermediaries, devices and relying institutions. A compromised signing key, fraudulent enrolment or poorly controlled broker can undermine confidence beyond the original organisation. Participants therefore need a minimum security baseline, independent assessment, incident notification and the ability to suspend unsafe connections. Assurance must cover the complete service, including suppliers and operational dependencies.',
        },
        {
          k: 'p',
          text:
            'Federated verification and user-held credentials can reduce unnecessary centralisation, but neither guarantees privacy or resilience. A broker may accumulate revealing authentication metadata, while a wallet may be vulnerable through the user’s device or recovery process. Designs should minimise disclosed attributes, limit retention and avoid persistent identifiers that enable tracking across unrelated services. Any intermediary should be assessed for what it sees, stores, and can infer.',
        },
        {
          k: 'p',
          text:
            'Revocation and recovery deserve equal attention to initial verification. Participants must be able to respond when credentials are lost, compromised, or withdrawn, and to communicate relevant status changes reliably. Services also need tested procedures for outages, interrupted connectivity, and compromised issuers. **An apparently secure design that leaves legitimate users stranded during a disruption has not met its purpose.**',
        },
      ],
    },
    {
      id: 'inclusion-accountability',
      title: 'Make inclusion and accountability conditions of participation',
      blocks: [
        {
          k: 'p',
          text:
            'The people who could benefit most may lack current documents, smartphones, reliable connectivity or the ability to navigate complex appeals. Verification should therefore include proportionate alternatives and assisted channels appropriate to the service and applicable law. Essential rights and services should not depend on possessing a credential designed for border control. Providers should measure rejection, abandonment and recovery alongside speed, cost and fraud.',
        },
        {
          k: 'p',
          text:
            'Purpose limits must be enforceable. Information collected to help someone access a service should not quietly become a resource for unrelated surveillance. Proposed data sharing needs a lawful basis, defined recipients, necessary attributes and clear retention rules. Where consent is relied upon, it must be meaningful; it cannot substitute for safeguards or cure an otherwise unlawful use. People need understandable notice and accessible routes to correction and review.',
        },
        {
          k: 'p',
          text:
            'Liability must be agreed before institutions rely on one another’s assertions. The issuer, intermediary and receiving institution should know their duties when information is inaccurate or a control fails. Oversight should be able to inspect evidence, investigate complaints and require corrective action. A verified identity must never be treated as proof of wrongdoing, and any adverse vetting result requires an appropriate process for challenge.',
        },
      ],
    },
    {
      id: 'accountable-practice',
      title: 'Turn interoperability into accountable practice',
      blocks: [
        {
          k: 'p',
          text:
            'The first implementation decisions should concern purpose, partners and authority. Select a small number of services, map the legal and regulatory requirements, and agree which institution is authoritative for each attribute. Then define assurance equivalence, data-sharing limits, liability, security requirements and recovery arrangements. **Technical architecture should implement these decisions, rather than determine them by default.**',
        },
        {
          k: 'p',
          text:
            'Identity authorities, central banks, financial intelligence units, data-protection regulators, immigration bodies, justice institutions, service providers and civil society all have relevant responsibilities. Their involvement should follow the chosen use case, with named owners for unresolved questions. Pilot results should report benefits and failures honestly, including who remains excluded and whether corrective measures work. Expansion should depend on those results and continued compliance with participation requirements.',
        },
        {
          k: 'p',
          text:
            'The Digital Trust Futures Foundation can contribute through independent assurance, cross-sector dialogue and open evaluation methods. Its role should be to test security and trust claims, make evidence usable to decision-makers, and help institutions address identified gaps. Published conflict policies, transparent methods, and separation from commercial interests are essential to that role. Cross-border identity becomes valuable when people can use it safely, institutions can justify their reliance, and failures can be corrected without stripping people of access or dignity.',
        },
      ],
    },
    {
      id: 'references',
      title: 'Selected references',
      blocks: [
        {
          k: 'ul',
          items: [
            'FATF — Guidance on Digital Identity (2020).',
            'UNCITRAL — Model Law on the Use and Cross-border Recognition of Identity Management and Trust Services (2022).',
            'ICAO — Doc 9303, Machine Readable Travel Documents.',
            'World Health Organization — Global Digital Health Certification Network.',
          ],
        },
      ],
    },
  ],
};

/* ── Article 5 ── generated by _src/papers/article5.py --web; edit there ── */

const ARTICLE_5: Insight = {
  "slug": "the-localisation-trap",
  "number": 5,
  "title": "The Localisation Trap",
  "subtitle": "Why data protection law needs technical control",
  "standfirst": "Local hosting solves a residency problem, not automatically a sovereignty problem. This article separates where citizens’ data sits from who can technically make it intelligible, and sets out the key custody, logging and procurement controls that turn data protection law into control a country can actually enforce.",
  "published": "2026-11-06",
  "publishedLabel": "6 November 2026",
  "version": "Series version 1.0",
  "classification": "Public",
  "tags": [
    "Digital sovereignty",
    "Data protection",
    "Key custody",
    "Cloud",
    "Extraterritorial access"
  ],
  "filters": [
    "dpi",
    "policy",
    "identity",
    "payments",
    "citizen"
  ],
  "pdf": "/assets/papers/dtff-digital-sovereignty-05-the-localisation-trap.pdf",
  "sections": [
    {
      "id": "executive-summary",
      "title": "Executive summary",
      "blocks": [
        {
          "k": "callout",
          "tone": "navy",
          "title": "About this edition",
          "paras": [
            "This edition updates the June 2026 original for developments since: the lapse of FISA Section 702, the EU’s proposed Cloud and AI Development Act, the pending appeal on the EU–US Data Privacy Framework, and provider testimony to a French Senate inquiry.",
            "It is general analysis, not legal advice. Confirm legal and regulatory status with counsel before acting."
          ]
        },
        {
          "k": "lede",
          "text": "Digital sovereignty and data protection are often discussed as separate disciplines, one concerned with infrastructure and geopolitics, the other with privacy compliance. For citizens whose biometric, identity, health, welfare or payment data sits inside digital public infrastructure (DPI), they face the same practical question: **who can access this data, under what authority, and can the state actually prevent unauthorised or extraterritorial access?**"
        },
        {
          "k": "p",
          "text": "This article addresses the most common sovereignty misconception: that local hosting equals control. Data residency can be valuable, but it does not remove legal access through foreign corporate jurisdiction unless technical safeguards such as external key custody, confidential computing and verifiable access controls support it. In the cloud era, a country’s data protection law and the technical architecture of its systems must be designed together."
        },
        {
          "k": "stats",
          "items": [
            {
              "value": "2018",
              "label": "US CLOUD Act: reach follows possession, custody or control, not location"
            },
            {
              "value": "12 Jun 2026",
              "label": "FISA Section 702 lapsed; collection runs on court certifications to about March 2027"
            },
            {
              "value": "4 levels",
              "label": "Assurance tiers in the EU’s proposed Cloud and AI Development Act"
            },
            {
              "value": "31 May 2024",
              "label": "South Africa publishes its National Policy on Data and Cloud"
            }
          ]
        },
        {
          "k": "h3",
          "text": "Key points for policymakers and DPI leaders"
        },
        {
          "k": "ul",
          "items": [
            "PII protection is where sovereignty commitments are either made real or exposed as merely legal language.",
            "Purpose limitation, minimisation, cross-border transfer controls and breach notification all reinforce sovereignty, but they cannot neutralise foreign compulsion orders on their own.",
            "Local hosting solves a residency problem, not automatically a sovereignty problem.",
            "Countries should distinguish clearly between where data sits and who can technically make it intelligible."
          ]
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-1.png",
          "width": 1628,
          "height": 1078,
          "caption": "Figure 1. Residency and sovereignty are different questions: where the data sits, and who controls and can compel it.",
          "alt": "A two-by-two matrix. One axis is whether data is stored abroad or in-country; the other is whether it is controlled domestically or within foreign reach. Data stored in-country but within foreign reach is labelled the localisation trap."
        },
        {
          "k": "h3",
          "text": "What has changed since the June 2026 edition"
        },
        {
          "k": "p",
          "text": "Several developments since the first edition sharpen, rather than soften, its argument. They are summarised below; the sources are listed in the reference section and should be checked against primary texts before any official use."
        },
        {
          "k": "table",
          "head": [
            "Development",
            "What changed",
            "Why it matters here"
          ],
          "caption": "Table 1. Developments since June 2026.",
          "rows": [
            [
              "US FISA Section 702",
              "The statute lapsed on 12 June 2026, the first lapse since 2008. Collection continues under court certifications approved on 17 March 2026, which run to about March 2027. Reauthorisation was unresolved in late October 2026 [14][15].",
              "Legal exposure has not disappeared; it has become more uncertain. Technical control does not depend on how Congress votes."
            ],
            [
              "EU Cloud and AI Development Act (CADA)",
              "Proposed on 3 June 2026: a four-level cloud sovereignty framework linked to public-sector use, still in negotiation [16][17].",
              "Governments are turning sovereignty into procurement criteria with graduated assurance."
            ],
            [
              "EU–US Data Privacy Framework",
              "Upheld by the EU General Court on 3 September 2025; an appeal (C-703/25 P) is pending; in July 2026 the European Data Protection Board asked the Commission to assess whether its functioning is affected [18].",
              "Adequacy is a legal arrangement that can change; architectures that survive its loss are more resilient."
            ],
            [
              "Provider testimony",
              "In June 2025, Microsoft France told a French Senate inquiry under oath that it could not guarantee EU citizens’ data would never be transmitted to US authorities [19].",
              "Even a major provider cannot promise what its own jurisdiction may require."
            ]
          ]
        }
      ]
    },
    {
      "id": "pii-load-bearing",
      "title": "1. PII is the load-bearing concept",
      "blocks": [
        {
          "k": "p",
          "text": "The sovereignty debate can sound abstract when discussed in terms of cloud regions, procurement rules and national strategy. It becomes concrete when viewed through the citizen’s record. Biometric identifiers, national ID numbers, payment histories, health information, welfare eligibility data and consent tokens are personally identifiable information (PII). Sovereignty is therefore ultimately about whether the state can protect people’s data under real-world legal and technical pressure."
        },
        {
          "k": "p",
          "text": "The operational question is simple: who can access this record, under what authority, and can the country that collected it **prevent** unauthorised or extraterritorial access, rather than merely object after the fact?"
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-2.png",
          "width": 1628,
          "height": 1078,
          "caption": "Figure 2. Six paths to a citizen record: sovereignty concerns the paths the state can prevent, not only those it can lawfully authorise.",
          "alt": "A citizen record at the centre, with six paths leading to it: authorised service use, operator and support staff, cloud provider access, foreign legal compulsion, criminals and insiders, and cross-border processors."
        },
        {
          "k": "h3",
          "text": "Why DPI records are different"
        },
        {
          "k": "table",
          "head": [
            "Record type",
            "Why loss of control is serious",
            "Control emphasis"
          ],
          "caption": "Table 2. Record types and what is at stake.",
          "rows": [
            [
              "Biometric identifiers",
              "Fingerprints, iris and face templates cannot be reissued; compromise is permanent.",
              "Template protection, no raw export, strictly limited processors."
            ],
            [
              "National ID and civil registry data",
              "The root of identity for every other service; population-scale aggregation reveals who people are and where they live.",
              "Key custody by a domestic institution; tight administrative access."
            ],
            [
              "Payment and transaction histories",
              "Reveal behaviour, associations and finances; useful for targeting and coercion.",
              "Minimisation, pseudonymous identifiers, audit of every look-up."
            ],
            [
              "Health and welfare eligibility data",
              "Expose vulnerability and entitlement; misuse harms the most exposed people.",
              "Purpose limitation; separate stores; strong redress routes."
            ],
            [
              "Consent tokens and logs",
              "Show relationships between people and services; the audit trail is itself personal data.",
              "Integrity protection; independent logging."
            ]
          ]
        },
        {
          "k": "p",
          "text": "Three features make DPI different from ordinary enterprise data. **Scale:** one platform may hold the records of most of a population. **Permanence:** some identifiers cannot be changed after compromise. **Dependence:** citizens often cannot opt out of essential services, so failures of control are failures of the public trust that sustains adoption. These features turn data protection from a compliance task into a question of national resilience."
        }
      ]
    },
    {
      "id": "reinforce",
      "title": "2. Where data protection and sovereignty reinforce each other",
      "blocks": [
        {
          "k": "p",
          "text": "Data protection law already contains many legal building blocks for sovereignty: lawful basis, purpose limitation, minimisation, cross-border transfer controls, individual rights and breach notification. When these principles are technically enforced, they become sovereignty controls."
        },
        {
          "k": "table",
          "head": [
            "Data protection principle",
            "Sovereignty function it performs",
            "What makes it enforceable"
          ],
          "caption": "Table 3. Data protection principles and the sovereignty function each performs.",
          "rows": [
            [
              "Purpose limitation",
              "Constrains what a foreign processor, or a foreign government compelling that processor, can lawfully justify accessing data for, narrowing the practical target of extraterritorial requests.",
              "Purpose-bound access policies and denial logs."
            ],
            [
              "Data minimisation",
              "Reduces the volume and sensitivity of PII exposed in any one processing operation or breach, reducing the consequence of any sovereignty failure.",
              "Selective disclosure; pseudonymous tokens."
            ],
            [
              "Cross-border transfer restriction (for example GDPR Chapter V; POPIA section 72)",
              "The direct legal expression of data sovereignty: a formal mechanism for a state to control where its citizens’ data may lawfully travel.",
              "Egress controls; regional key boundaries."
            ],
            [
              "Data subject rights (access, erasure, objection)",
              "Gives citizens, not only the state, a recourse mechanism; failures are often first discovered through individual complaints.",
              "Searchable audit trails and retrieval tooling."
            ],
            [
              "Breach notification",
              "Forces visibility. A sovereignty failure that is never disclosed is, from a policy standpoint, indistinguishable from a success; mandatory notification makes it observable.",
              "Independent logging and tested incident processes."
            ],
            [
              "Security safeguards",
              "Requires technical measures proportionate to risk, which is where key custody and encryption become legal obligations.",
              "Encryption with externally held keys; enclaves."
            ],
            [
              "Accountability and assessment",
              "Places responsibility on a named controller and requires impact assessment before risky processing.",
              "A named institution accountable for key custody."
            ]
          ]
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-3.png",
          "width": 1628,
          "height": 1078,
          "caption": "Figure 3. From legal principle to technical control to evidence a country can ask for.",
          "alt": "Six rows, each running from a data protection principle to the technical control that enforces it to the evidence to ask for: purpose limitation, data minimisation, transfer restriction, security safeguards, subject rights and redress, and breach notification."
        },
        {
          "k": "h3",
          "text": "The legal landscape that supports this"
        },
        {
          "k": "ul",
          "items": [
            "**European Union.** GDPR Chapter V regulates transfers, and Article 48 provides that a third-country court or authority decision requiring transfer is recognisable only based on an international agreement.",
            "**South Africa.** POPIA section 72 restricts transfers of personal information to third parties in foreign countries unless the recipient is bound by adequate protection or another lawful basis applies. The National Policy on Data and Cloud (Cabinet approval 27 March 2024; published 31 May 2024) requires government data incorporating content on national security and sovereignty to be stored only in South African infrastructure, and imposes no further localisation requirement, leaving cross-border transfers to POPIA [20][21].",
            "**Elsewhere in Africa.** Reporting indicates that Nigeria’s national guidelines require sovereign data to be hosted locally and its central bank has introduced localisation requirements for payments; that Rwanda requires localisation of sensitive financial, payment and telecommunications data; and that Kenya restricts certain transfers [22]. Rules differ and change, and should be checked for each jurisdiction.",
            "**Global.** The pattern is varied: some states legislate localisation, others regulate transfers, and others use procurement tiers, as the EU’s proposed framework does."
          ]
        },
        {
          "k": "callout",
          "tone": "teal",
          "title": "The point to take from the law",
          "paras": [
            "These laws make a state’s intent explicit. They do not by themselves determine what a foreign-controlled provider can be compelled to do. That depends on technical control, which the next section examines."
          ]
        }
      ]
    },
    {
      "id": "law-not-enough",
      "title": "3. Where law alone is not enough",
      "blocks": [
        {
          "k": "p",
          "text": "The gap is that domestic data protection law cannot automatically override a foreign government’s lawful demand to a provider under that foreign government’s own law. A contract clause, policy promise or local residency commitment may help, but it cannot by itself neutralise a legal authority directed at the provider or its parent company. Conflicts between legal systems are resolved by diplomacy, litigation, and often compliance by the provider with the demand that carries the greatest immediate penalty."
        },
        {
          "k": "p",
          "text": "This is why technical enforcement matters. Encryption with externally held keys, confidential computing, strict access controls, independent logs and domestic or regional key custody change what can actually be disclosed, read or misused. **They turn a legal promise into an enforceable technical constraint.**"
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-4.png",
          "width": 1628,
          "height": 1078,
          "caption": "Figure 4. What a compelled disclosure can reach depends on who holds keys and administrative access, not on where the data sits.",
          "alt": "A decision flow. A foreign authority issues a lawful order directed at the provider or its parent. If the provider holds keys or administrative access, it can produce readable data. If not, only ciphertext or enclave-protected data is available, with keys held by a domestic institution."
        },
        {
          "k": "h3",
          "text": "What law can do, and what technology adds"
        },
        {
          "k": "table",
          "head": [
            "Question",
            "What law and contract can do",
            "What technical control adds"
          ],
          "caption": "Table 4. Complementary roles of legal and technical controls.",
          "rows": [
            [
              "Can the provider be told to hand over data?",
              "Set notification, challenge and cooperation duties in the contract; assert domestic jurisdiction.",
              "Ensure that what the provider holds is unreadable without a key it does not control."
            ],
            [
              "Will the state learn about an access?",
              "Mandate breach notification and audit rights.",
              "Independent, tamper-evident logging that the provider cannot silently edit."
            ],
            [
              "Can staff of the provider reach the data?",
              "Prohibit support access except under agreed procedure.",
              "Approval workflows, just-in-time access, customer lockbox, geographic and personnel restrictions."
            ],
            [
              "Can the state leave?",
              "Require portability and exit assistance.",
              "Customer-held keys and tested export, so exit does not depend on the provider’s goodwill."
            ]
          ]
        },
        {
          "k": "h3",
          "text": "The evidence of fragility"
        },
        {
          "k": "ul",
          "items": [
            "**Provider testimony.** Microsoft France’s June 2025 statement under oath shows that even when data is stored in the EU, a provider subject to US law cannot promise to exclude US access [19].",
            "**Adequacy is conditional.** The EU–US Data Privacy Framework rests largely on a US executive order, faces a pending appeal, and has seen its oversight board lose its quorum; the EDPB asked the Commission in July 2026 to assess whether its functioning is affected [18].",
            "**Legal change cuts both ways.** The lapse of FISA Section 702 does not end US collection under existing certifications, and Executive Order 12333 is unaffected; a future reauthorisation may add or remove safeguards [14][15]."
          ]
        },
        {
          "k": "callout",
          "title": "A caution",
          "paras": [
            "External keys and enclaves are not a magic shield. A key manager inside the same jurisdiction as the compelled provider does not help; keys held outside it add latency, availability dependence and the risk that losing a key means losing the data. These trade-offs are part of the design, which is why the honest statement of what is protected must be precise."
          ]
        }
      ]
    },
    {
      "id": "localisation-fallacy",
      "title": "4. The localisation fallacy",
      "blocks": [
        {
          "k": "p",
          "text": "The localisation fallacy is the belief that if a global provider hosts data inside the country, the data is automatically beyond foreign reach. Local hosting may solve latency, residency and some policy requirements. It does not necessarily solve control, as the operating company or its parent may remain subject to extraterritorial legal authority."
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-5.png",
          "width": 1628,
          "height": 1254,
          "caption": "Figure 5. Legal instruments that can create reach, and whether in-country hosting prevents them (status as at October 2026; sources in the reference list).",
          "alt": "A table of five instruments — the US CLOUD Act, FISA Section 702, Executive Order 12333, China's National Intelligence Law Article 7, and Russia's Federal Law 152-FZ — showing what triggers each one's reach and whether in-country hosting prevents it. For the three US instruments, it does not."
        },
        {
          "k": "h3",
          "text": "The mechanisms"
        },
        {
          "k": "ul",
          "items": [
            "**US CLOUD Act (2018).** Amends the Stored Communications Act so that compelled disclosure turns on the provider’s possession, custody or control of data, not on its location. It also provides for executive agreements between the United States and qualifying foreign governments [12].",
            "**FISA Section 702.** Authorises US intelligence agencies to direct providers to disclose communications of non-US persons reasonably believed to be abroad. The statute lapsed on 12 June 2026. Because collection runs on certifications approved in March 2026, it can continue to about March 2027, and Congress has not yet reauthorised the law [14][15].",
            "**Executive Order 12333.** Underpins US signals intelligence outside the United States and needs no statute or court approval; it was untouched by the 702 lapse.",
            "**Other jurisdictions.** China’s National Intelligence Law (Article 7) obliges organisations to support state intelligence work, and Russia’s Federal Law 152-FZ requires localisation of citizens’ personal data on Russian servers. Their structures differ, but each can create sovereignty tensions."
          ]
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-6.png",
          "width": 1628,
          "height": 924,
          "caption": "Figure 6. Selected milestones in the law of cross-border access, 2018 to 2026.",
          "alt": "A timeline: 2018 US CLOUD Act; 2020 Schrems II strikes down the Privacy Shield; 2023 EU-US Data Privacy Framework adopted; 2024 South Africa's Policy on Data and Cloud and the US RISAA; 2025 Microsoft France tells the Senate it cannot guarantee exclusion, and the General Court upholds the framework; June 2026 the EU proposes CADA and Section 702 lapses; July 2026 the EDPB asks the Commission to reassess the framework."
        },
        {
          "k": "h3",
          "text": "Residency versus sovereignty"
        },
        {
          "k": "p",
          "text": "The point is not that every foreign provider is unsafe or unusable. Leaders must distinguish between data residency and data sovereignty. **Residency is where the data sits. Sovereignty is who can make the data intelligible**, who can compel access, who holds the keys, who controls administrators, and who can independently verify what happened. Location still matters for latency, physical security, resilience and the reach of domestic law enforcement, so the aim is to add control to residency, not to dismiss it."
        },
        {
          "k": "p",
          "text": "The EU’s proposed four-level cloud sovereignty framework illustrates where policy is heading: its lower level concerns EU-based data processing, while higher levels add conditions on third-country control, ownership, supply chain transparency, personnel clearance and independent audit [16][17]. Africa’s governments are experimenting along similar lines, for example through South Africa’s policy on sovereign cloud capacity and in-country storage of national-security-related government data [20]."
        }
      ]
    },
    {
      "id": "honest-formulation",
      "title": "5. The honest formulation for government leaders",
      "blocks": [
        {
          "k": "callout",
          "tone": "teal",
          "title": "The honest formulation a country should use",
          "paras": [
            "“Our data is hosted in-country” is a true and meaningful statement about residency. “Our data is sovereign” claims legal and technical control that residency alone does not establish.",
            "A government that uses these two statements interchangeably in public communication is, often unknowingly, giving its citizens false assurance about a real and specific legal exposure."
          ]
        },
        {
          "k": "p",
          "text": "A government can still use foreign or regional cloud infrastructure responsibly. But it should require externally controlled keys, confidential computing where appropriate, independently auditable access logs, contractual challenge processes, support-access restrictions, incident transparency, and a clear domestic or regional institution accountable for key custody and access policy."
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-7.png",
          "width": 1628,
          "height": 1188,
          "caption": "Figure 7. A seven-layer sovereignty control stack: location is the first layer, not the last.",
          "alt": "Seven stacked layers, each paired with the question it answers: 1 location, where does the data sit; 2 law and contract, which jurisdiction governs; 3 key custody, who holds the keys; 4 confidential computing, is data protected while processed; 5 administrator and support access, who can touch the system; 6 independent logging and verification, who can verify what happened; 7 accountable institution, who is answerable for key custody and access policy."
        },
        {
          "k": "h3",
          "text": "Choosing a key custody model"
        },
        {
          "k": "table",
          "head": [
            "Option",
            "Who holds the keys",
            "What it protects",
            "Limits"
          ],
          "caption": "Table 5. Key custody options and their limits.",
          "rows": [
            [
              "Provider-managed keys",
              "The provider.",
              "Theft of storage media; ordinary external breach.",
              "The provider, and anyone who can compel it, can decrypt."
            ],
            [
              "Customer-managed keys in the provider’s key service",
              "Customer controls policy; key material stays on provider infrastructure.",
              "Separation of duties; ability to revoke.",
              "Provider infrastructure still hosts the keys; compelled access remains plausible."
            ],
            [
              "External key manager (customer-run hardware security module)",
              "A customer or domestic institution, outside the provider.",
              "Provider cannot decrypt without live key requests the customer can refuse or revoke.",
              "Added latency and availability dependence; plaintext exposed during processing unless enclaves are used."
            ],
            [
              "Double key encryption",
              "Two keys; one held only by the customer.",
              "Provider cannot read protected content.",
              "Limits provider services such as search and analytics."
            ],
            [
              "Confidential computing with attestation",
              "Data decrypted only inside attested hardware enclaves.",
              "Protects data in use from host administrators.",
              "Trust in hardware vendors; operational complexity; not every service supported."
            ]
          ]
        },
        {
          "k": "p",
          "text": "Cloud vendors and independent key-management specialists offer variants of each of these models, and the reference list at the end of this article names several. Buyers should test any model against the compelled-disclosure scenario above rather than rely on a marketing label."
        },
        {
          "k": "h3",
          "text": "What to say, and what to avoid"
        },
        {
          "k": "table",
          "head": [
            "Statement",
            "Accuracy",
            "A more accurate formulation"
          ],
          "caption": "Table 6. Public statements and their accuracy.",
          "rows": [
            [
              "“Our data is hosted in-country.”",
              "True if verified",
              "A residency statement; say what is hosted, where, and under which operator."
            ],
            [
              "“Our data is sovereign.”",
              "Unproven",
              "Only after key custody, access control and an accountable institution are evidenced."
            ],
            [
              "“Foreign companies cannot access our data.”",
              "Risky",
              "Depends on key custody, support access and the provider’s parent jurisdiction."
            ],
            [
              "“Local law protects citizens’ data.”",
              "Partly true",
              "Local law governs processing in the country but cannot alone override a foreign order to a foreign provider."
            ],
            [
              "“Citizen records are encrypted with keys held by [named institution]; the provider cannot read them; access is logged and independently audited.”",
              "Precise",
              "The form of words to aim for, once it is true."
            ]
          ]
        }
      ]
    },
    {
      "id": "decision-path",
      "title": "6. From principle to procurement: a decision path",
      "blocks": [
        {
          "k": "p",
          "text": "Principles become useful only when they change what a government buys and how it tests it. The decision path below is a practical way to match the protection to the data. It is an illustrative framework developed for this edition, not a legal standard, and should be adapted to local law."
        },
        {
          "k": "figure",
          "src": "/assets/papers/figures/localisation-trap/figure-8.png",
          "width": 1628,
          "height": 1232,
          "caption": "Figure 8. A four-tier decision path from data classification to architecture.",
          "alt": "A decision flow. Classify the data and the harm if control is lost. If it contains no PII or national-security content, it is tier 1: any region, standard security. Otherwise it is tier 2 personal data, tier 3 sensitive PII such as biometrics, ID, health and payments, or tier 4 national-security or systemic content. For every tier above 1, name the domestic or regional institution accountable for key custody and access policy, and test it."
        },
        {
          "k": "table",
          "head": [
            "Tier",
            "Examples",
            "Minimum architecture",
            "Evidence to demand"
          ],
          "caption": "Table 7. Minimum architecture and evidence by tier.",
          "rows": [
            [
              "1 — Public or low risk",
              "Open data, public content.",
              "Any region; standard security.",
              "Standard assurance reports."
            ],
            [
              "2 — Personal data",
              "Contact details, service usage.",
              "Residency where required; lawful transfer mechanism; minimisation.",
              "Data flow map; transfer assessment."
            ],
            [
              "3 — Sensitive PII",
              "Biometrics, ID numbers, health, payments, welfare, consent.",
              "Provider cannot read data: external keys, tested custody, audited access, enclaves where appropriate.",
              "Key custody records, attestation, independent access logs."
            ],
            [
              "4 — National-security or systemic",
              "Registry master keys, authentication roots, strategic datasets.",
              "Domestic operator; domestic keys; enclaves; vetted staff; independent audit.",
              "Independent audit and exercise results."
            ]
          ]
        },
        {
          "k": "h3",
          "text": "Procurement requirements"
        },
        {
          "k": "ol",
          "items": [
            "**Key custody.** Keys held by a named domestic or regional institution, outside the provider’s control.",
            "**Confidential computing** where data in use must be protected, with attestation.",
            "**Independent logs.** Access logs the provider cannot alter, available to the state.",
            "**Challenge and notification.** A contractual duty to notify and challenge compelled requests to the extent the law permits.",
            "**Support-access limits.** Approval, time limits and geographic restrictions for provider staff.",
            "**Incident transparency.** Time-bound notification of any access outside agreed procedure.",
            "**Accountable institution.** A named body answerable for key custody and access policy.",
            "**Exit and portability.** Tested export and a plan to leave without the provider’s cooperation."
          ]
        },
        {
          "k": "h3",
          "text": "Test it before relying on it"
        },
        {
          "k": "p",
          "text": "Run a compelled-disclosure exercise before go-live. Assume a lawful order is served on the provider’s parent company. Record what the provider could produce in readable form, how long the state would take to learn of it, and whether the keys and logs behaved as designed. Repeat after significant changes. **The result, not the contract, is the evidence of sovereignty.**"
        }
      ]
    },
    {
      "id": "references",
      "title": "References and further reading",
      "blocks": [
        {
          "k": "p",
          "text": "This list is organised by institutional category and reflects the regulatory and threat landscape as understood in October 2026, with the original June 2026 list retained and developments since then added. Several instruments — in particular the EU Cloud and AI Development Act, the EU–US Data Privacy Framework and US surveillance statutes — remain subject to change. Numbers in square brackets in the text refer to the numbered items below. Check secondary sources against primary texts."
        },
        {
          "k": "h3",
          "text": "Numbered references cited in the text"
        },
        {
          "k": "table",
          "head": [
            "Ref",
            "Source",
            "Used for"
          ],
          "caption": "Table 8. Sources for the figures and developments cited.",
          "rows": [
            [
              "[12]",
              "US Clarifying Lawful Overseas Use of Data Act (CLOUD Act), 2018, amending 18 U.S.C. 2701 et seq.",
              "Provider possession, custody or control; executive agreements."
            ],
            [
              "[14]",
              "Brennan Center for Justice, Section 702 of FISA: 2026 Resource Page (updated 27 October 2026); Congressional Research Service reports on Section 702 and the 2024 RISAA.",
              "Lapse and reauthorisation status."
            ],
            [
              "[15]",
              "Press and analysis on the 12 June 2026 lapse and the March 2026 FISC certifications (for example The Hill, Washington Times, Fulcrum); to be checked against primary texts.",
              "Continued collection to about March 2027."
            ],
            [
              "[16]",
              "European Commission, Tech Sovereignty Package and proposed Cloud and AI Development Act (3 June 2026), with law-firm and think-tank analyses (Jones Day; Belfer Center; Bloomsbury Intelligence and Security Institute).",
              "Four assurance levels; legislative status."
            ],
            [
              "[17]",
              "TechPolicy.Press and Global Policy Watch analyses of the package.",
              "Open-source preference; tiers; market openness."
            ],
            [
              "[18]",
              "Court of Justice of the EU: Latombe v Commission (T-553/23, 3 September 2025) and appeal C-703/25 P; European Data Protection Board request to the Commission (31 July 2026), as reported.",
              "Status of the EU–US Data Privacy Framework."
            ],
            [
              "[19]",
              "French Senate inquiry, testimony of Microsoft France (10 June 2025), as reported in secondary coverage.",
              "Provider cannot guarantee exclusion of US authorities."
            ],
            [
              "[20]",
              "Republic of South Africa, National Policy on Data and Cloud (published 31 May 2024); law-firm summaries (Bowmans).",
              "Government data localisation; sovereign cloud."
            ],
            [
              "[21]",
              "Protection of Personal Information Act 4 of 2013, section 72.",
              "Cross-border transfer conditions."
            ],
            [
              "[22]",
              "TechCabal (24 August 2026) and other regional reporting on Nigeria, Kenya, South Africa and Rwanda localisation.",
              "Regional localisation rules; verify locally."
            ]
          ]
        },
        {
          "k": "h3",
          "text": "United Nations and UN agencies"
        },
        {
          "k": "ul",
          "items": [
            "UN Office for Digital and Emerging Technologies (ODET): Universal DPI Safeguards Framework and DPI Safeguards Resource Hub, co-led with UNDP.",
            "UN Development Programme: Digital Public Infrastructure guidance and co-stewardship of the Digital Public Goods Alliance.",
            "UN General Assembly: Global Digital Compact (2024) and follow-up processes.",
            "International Telecommunication Union: GovStack Initiative (with GIZ, Estonia and UNDP), reusable government Building Block specifications.",
            "UNCTAD: Digital Economy Report series on cross-border data flows and data sovereignty.",
            "World Bank Group: Identification for Development (ID4D) Practitioner’s Guide and Principles on Identification; “Resilient, Secure and Trusted: The Next Frontier for Digital Public Infrastructure” (2025).",
            "World Economic Forum: “Building Security into India’s Digital Public Infrastructure” (October 2025) and DPI security risk taxonomy.",
            "OECD: Going Digital project and DPI security and governance guidance."
          ]
        },
        {
          "k": "h3",
          "text": "European Union and European bodies"
        },
        {
          "k": "ul",
          "items": [
            "GDPR, Regulation (EU) 2016/679, including Chapter V and Article 48.",
            "Cloud and AI Development Act (proposed 3 June 2026) as part of the European Technological Sovereignty Package, including the EU Open Source Strategy and Chips Act 2.0.",
            "EU AI Act (in force from August 2024): high-risk classification of biometric identification, social benefit determination and access to essential services.",
            "Digital Services Act and Digital Markets Act; NIS2 Directive.",
            "ENISA: cybersecurity guidance and input to the EU Cybersecurity Certification Scheme for Cloud Services.",
            "CJEU: Schrems II (Case C-311/18, 2020); EDPB Recommendations 01/2020 on supplementary measures.",
            "European Commission DG CONNECT: Cloud Sovereignty Framework."
          ]
        },
        {
          "k": "h3",
          "text": "United States"
        },
        {
          "k": "ul",
          "items": [
            "CLOUD Act (2018); FISA Section 702; Executive Order 12333; USA PATRIOT Act Section 215; United States v. Microsoft Corp. (2018).",
            "NIST: Digital Identity Guidelines (SP 800-63-4); Secure Software Development Framework (SP 800-218); Cybersecurity Framework; AI Risk Management Framework.",
            "CISA: advisories and the Known Exploited Vulnerabilities catalog.",
            "US National Trade Estimate Report (2026) on foreign data localisation and sovereign cloud measures."
          ]
        },
        {
          "k": "h3",
          "text": "Other national and regional regimes"
        },
        {
          "k": "ul",
          "items": [
            "China: Cybersecurity Law (2017), Data Security Law (2021), Personal Information Protection Law (2021) and Article 7 of the National Intelligence Law (2017).",
            "Russian Federation: Federal Law 152-FZ on Personal Data.",
            "India: Digital Personal Data Protection Act (2023) and the DEPA and Account Aggregator consent framework.",
            "Brazil: LGPD and the ANPD.",
            "Estonia: the Data Embassy concept and bilateral arrangement with Luxembourg.",
            "Canada: Foreign Extraterritorial Measures Act and the Canadian Sovereign Cloud Initiative.",
            "African Union: Digital Transformation Strategy for Africa 2020–2030; AfCFTA digital trade provisions.",
            "ASEAN: Digital Masterplan 2025."
          ]
        },
        {
          "k": "h3",
          "text": "Cloud and key-management providers"
        },
        {
          "k": "ul",
          "items": [
            "Microsoft: Azure Sovereign Cloud, EU Data Boundary, Managed HSM external key options and confidential computing.",
            "Google Cloud: Cloud External Key Manager and Cloud KMS.",
            "Amazon Web Services: KMS, Nitro Enclaves and the Digital Sovereignty Pledge.",
            "Thales and Utimaco: guidance on BYOK, HYOK, external key management and double key encryption.",
            "OpenSSF and the Linux Foundation: Scorecard and SLSA."
          ]
        },
        {
          "k": "h3",
          "text": "DPI and DPG frameworks and communities"
        },
        {
          "k": "ul",
          "items": [
            "Digital Public Goods Alliance: DPG Registry and DPG Standard.",
            "MOSIP, Mojaloop, Estonia X-Road (NIIS), Centre for Digital Public Infrastructure, Co-Develop Fund, Digital Impact Alliance Principles for Digital Development, and the Gates Foundation DPI programme, including the Upanzi Network."
          ]
        },
        {
          "k": "h3",
          "text": "Threat intelligence and standards"
        },
        {
          "k": "ul",
          "items": [
            "CrowdStrike 2026 Global Threat Report; MITRE ATT&CK; OWASP API Security Top 10; CIS Benchmarks; ISO/IEC 27001 and 42001; CSIS Significant Cyber Incidents tracker; IBM Cost of a Data Breach Report."
          ]
        },
        {
          "k": "h3",
          "text": "Verification notes"
        },
        {
          "k": "ul",
          "items": [
            "Legislative status in the United States and the European Union was changing as this edition was prepared. Confirm current status before citing.",
            "Some facts come from secondary reporting. This article is classified as Public; official use should rely on primary legal texts and counsel."
          ]
        }
      ]
    },
    {
      "id": "series-bridge",
      "title": "Series bridge",
      "minor": true,
      "blocks": [
        {
          "k": "callout",
          "title": "What comes next in the series",
          "paras": [
            "The next and final article in the series addresses the open-source and digital public goods dimension: why open source is a strong start for sovereignty, why it is not the whole answer, and which technical controls make sovereignty true in practice. It builds on the control stack introduced here by asking how code that anyone can inspect can be run, updated and verified under national control."
          ]
        }
      ]
    }
  ]
};

/* ── Registry ───────────────────────────────────────────────────────────── */

export const INSIGHTS: Insight[] = [ARTICLE_1, ARTICLE_2, ARTICLE_3, ARTICLE_4, ARTICLE_5, PERSPECTIVE_1];

export const isSeries = (a: Insight) => a.kind !== 'perspective';

/** The numbered series, in order — drives the rail and prev/next navigation. */
export const SERIES_ARTICLES: Insight[] = INSIGHTS.filter(isSeries);

export const INSIGHT_BY_SLUG: Record<string, Insight> = Object.fromEntries(
  INSIGHTS.map((a) => [a.slug, a]),
);

/** Words in the rendered body, at 220 wpm — the pace of considered reading. */
export function readingMinutes(a: Insight): number {
  let words = 0;
  const count = (s: string) => { words += s.trim().split(/\s+/).length; };

  for (const section of a.sections) {
    count(section.title);
    for (const b of section.blocks) {
      switch (b.k) {
        case 'p': case 'lede': case 'h3': case 'quote': count(b.text); break;
        case 'ul': case 'ol': b.items.forEach(count); break;
        case 'callout': count(b.title); b.paras.forEach(count); break;
        case 'table': b.head.forEach(count); b.rows.flat().forEach(count); break;
        case 'figure': count(b.caption); break;
        case 'stats': b.items.forEach((i) => { count(i.value); count(i.label); }); break;
      }
    }
  }
  return Math.max(1, Math.round(words / 220));
}
