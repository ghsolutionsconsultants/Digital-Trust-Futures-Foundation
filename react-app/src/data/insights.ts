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
  | { k: 'table'; head: string[]; rows: string[][]; caption?: string };

export interface Section {
  id: string;
  title: string;
  /** Kept out of the contents rail — used for the closing series bridge. */
  minor?: boolean;
  blocks: Block[];
}

export interface Insight {
  slug: string;
  number: number;
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

/* ── Registry ───────────────────────────────────────────────────────────── */

export const INSIGHTS: Insight[] = [ARTICLE_1, ARTICLE_2, ARTICLE_3];

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
      }
    }
  }
  return Math.max(1, Math.round(words / 220));
}
