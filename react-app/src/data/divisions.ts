export interface FocusArea {
  title: string;
  desc: string;
}

export interface Programme {
  name: string;
  desc: string;
}

export interface ExtraRow {
  label: string;
  desc: string;
}

export interface Division {
  num: string;
  slug: string;
  icon: string;
  accent: string;
  name: string;
  short: string;
  phase: string;
  photo: [string, string];
  strap: string;
  purpose: string;
  audience: string;
  contactEmail: string;
  focusTitle: string;
  focus: FocusArea[];
  programmes: Programme[];
  extraTitle: string;
  extraRows: ExtraRow[];
  outputs: string[];
  boundary: string;
}

export const DIVISIONS: Record<string, Division> = {
  'dpi-trust-lab': {
    num: '01', slug: 'dpi-trust-lab', icon: 'shield-check', accent: 'navy',
    name: 'DPI Security, Safety and Trust Lab',
    short: 'DPI Trust Lab',
    phase: 'Phase 1 — first 12 months',
    photo: ['datacentre-corridor.jpg', 'A corridor of server racks inside a data centre.'],
    strap: 'Safeguards research and assurance for the systems that hold identity, money and entitlement — with human rights, child safety and effective remedy built into every assessment.',
    purpose: 'To research, design, test and support safeguards for digital public infrastructure — especially identity, payments, data exchange, social protection, health, education and public-service delivery systems. The Lab draws on established experience in critical infrastructure, payment security and DPI cybersecurity advisory, adapting an evidence-based maturity and assurance approach to national DPI environments that carry public-trust obligations. Every assessment applies a rights lens: cybersecurity tells us whether a system can be compromised; human-rights assurance asks what happens to people even when the system is functioning exactly as designed.',
    audience: 'Governments and DPI programme teams',
    contactEmail: 'info@digitaltrustfuturesfoundation.org',
    focusTitle: 'Focus areas',
    focus: [
      { title: 'DPI cybersecurity and resilience', desc: 'Architecture, identity and access management, API and platform security, cloud assurance, threat modelling, vulnerability management, incident response and business continuity.' },
      { title: 'DPI safety and human safeguards', desc: 'Exclusion and discrimination risk, redress mechanisms, consent and user agency, accessibility, and child, gender and disability-related protections.' },
      { title: 'Human-rights impact assessment', desc: 'Privacy, non-discrimination, identity dignity, freedom of expression and association, accessibility, due process, effective remedy, surveillance risk, AI rights risk and children\'s rights — tested alongside technical security in every DPI assessment.' },
      { title: 'Effective remedy and recourse', desc: 'Whether people can obtain notice, explanation, human review, appeal, correction and appropriate remedy when digital systems make errors affecting them. If the technology gets it wrong, can the person recover?' },
      { title: 'Digital identity and verifiable credentials', desc: 'Identity system security, biometric safeguards, digital wallets, zero-knowledge proofs, credential revocation and trust frameworks.' },
      { title: 'Inclusive payment security', desc: 'Interoperable payment assurance, open-API security, fraud prevention, dispute mechanisms and cross-border safeguards.' },
      { title: 'AI governance for DPI', desc: 'Automated decision accountability, algorithmic impact assessment, bias and fairness, human oversight and AI incident response.' },
      { title: 'DPI assurance research', desc: 'Safeguards maturity models, country trust-readiness assessments and comparative research across African and Global South countries.' },
    ],
    programmes: [
      { name: 'DPI Trust Readiness Assessment', desc: 'A structured, evidence-based review of whether a national DPI deployment is ready to carry population-scale trust — including security, safety, rights and effective remedy.' },
      { name: 'National DPI Safeguards Accelerator', desc: 'Hands-on support to close prioritised safeguards gaps with local teams rather than for them.' },
      { name: 'Digital Identity and Credential Safety Programme', desc: 'Identity, biometric and credential safeguards, from enrolment through revocation and recovery, including child identity and biometric risk.' },
      { name: 'Inclusive Payment Integrity Initiative', desc: 'Fraud, mule-flow, dispute-handling and liability-allocation safeguards for instant and interoperable payments.' },
      { name: 'AI Governance for Public Infrastructure Programme', desc: 'Oversight, appeal and incident-response practice for AI embedded in public services, with specific attention to automated decisions affecting children and vulnerable communities.' },
      { name: 'DPI Incident Readiness and Resilience Programme', desc: 'Preparation for the incident that has not happened yet: playbooks, exercises and cross-institution escalation.' },
      { name: 'African DPI Trust Observatory', desc: 'Comparative, published evidence on DPI trust conditions across the region, including rights, safeguarding and civil-society harm patterns.' },
    ],
    extraTitle: 'What the Lab examines',
    extraRows: [
      { label: 'Digital identity', desc: 'Authentication, onboarding, consent, data minimisation, biometrics, exclusion risk, recovery processes and account-takeover patterns.' },
      { label: 'Payment rails and instant payments', desc: 'Fraud controls, mule-account risks, participant controls, API security, dispute handling, liability allocation and operational resilience.' },
      { label: 'Data exchange and consent', desc: 'Purpose binding, token handling, audit trails, data-sharing rules, consent revocation and privacy-preserving patterns.' },
      { label: 'Human-rights and child-rights domains', desc: 'Privacy, non-discrimination, dignity, expression, association, accessibility, due process, effective remedy, surveillance risk, AI rights risk and children\'s best interests.' },
      { label: 'AI-enabled public services', desc: 'Synthetic identity, adversarial inputs, bias, model governance, explainability, appeals and AI incident response.' },
    ],
    outputs: [
      'DPI Security Assurance Framework and maturity model',
      'DPI Human Rights Impact Assessment Toolkit',
      'Child Rights Impact Assessment for DPI (D-CRIA)',
      'Citizen Grievance and Effective Remedy Assessment',
      'Digital Public Services Accessibility & Non-Discrimination Checklist',
      'Child-Safe Digital Identity Checklist',
      'DPI/DPG supply chain security checklist',
      'Responsible vulnerability disclosure guidance for public-interest systems',
      'AI and fraud risk module for citizen-facing DPI',
      'Short technical briefs that translate risk into decision-ready funder and policy language',
    ],
    boundary: 'The Lab does not replace national cybersecurity functions or commercial audits. It provides a practical, nonprofit assurance layer focused on citizen-facing public infrastructure, rights-respecting digital trust and reusable open tools.',
  },

  'open-digital-commons': {
    num: '02', slug: 'open-digital-commons', icon: 'code', accent: 'teal',
    name: 'Open Digital Commons and Software Trust',
    short: 'Open Digital Commons',
    phase: 'Phase 1 — first 12 months',
    photo: ['code-screen.jpg', 'A screen displaying open-source code.'],
    strap: 'Creating, hosting, securing and sustaining digital public goods used in public-interest service delivery — with privacy, safeguarding and children\'s data protection built into every review.',
    purpose: 'To support the open-source digital public goods that underpin identity, payments, data exchange, health, education and social protection systems — with a focus on the security, software trust and long-term sustainability of components that carry national-scale dependency but are frequently maintained without dedicated assurance or funding. Every project review includes privacy, safeguarding, children\'s data and rights risks alongside technical security.',
    audience: 'DPG and open-source maintainers',
    contactEmail: 'info@digitaltrustfuturesfoundation.org',
    focusTitle: 'What the division provides',
    focus: [
      { title: 'Project creation and incubation', desc: 'Creating new open-source DPI safeguards utilities where gaps exist and no existing project can fill them.' },
      { title: 'Hosting and governance', desc: 'A neutral legal home, project charters, technical steering and transparent decision-making for projects that need institutional shelter.' },
      { title: 'Security and software trust', desc: 'Secure SDLC, SBOM and VEX generation, code signing, build provenance, repository hardening and coordinated vulnerability disclosure.' },
      { title: 'Privacy, safeguarding and children\'s data', desc: 'Privacy-by-design, data minimisation, children\'s data protection, consent mechanisms and safeguarding risk reviews for open-source DPGs processing sensitive population data.' },
      { title: 'Sustainability support', desc: 'Grant administration, maintainer support, community building, and long-term maintenance and succession planning.' },
      { title: 'Assurance services', desc: 'Security assessments, maintainer training, DevSecOps implementation and architecture or release-readiness reviews.' },
    ],
    programmes: [
      { name: 'DPG Security Baseline Programme', desc: 'Structured security baseline reviews for digital public goods in active national deployment, including privacy, children\'s data and rights risks.' },
      { name: 'Open-Source Maintainer Security Fund', desc: 'Direct financial and technical support for maintainers of high-dependency DPGs without dedicated security resources.' },
      { name: 'SBOM and Supply-Chain Transparency Initiative', desc: 'Software bill of materials generation, vulnerability exchange publishing and supply-chain documentation for DPGs.' },
      { name: 'DPG Governance and Sustainability Programme', desc: 'Project governance, succession planning and long-term sustainability support for open-source DPGs.' },
    ],
    extraTitle: 'Categories we prioritise',
    extraRows: [
      { label: 'Digital identity platforms', desc: 'Open-source modular identity systems used across multiple national deployments.' },
      { label: 'Data-exchange and interoperability layers', desc: 'Components connecting government systems and services.' },
      { label: 'Social protection and beneficiary management', desc: 'Platforms determining who receives support, and when — often processing data on children and vulnerable households.' },
      { label: 'Health information and immunisation registries', desc: 'Systems holding some of the most sensitive population data, including children\'s health records.' },
      { label: 'Instant and interoperable payment platforms', desc: 'Rails supporting financial inclusion at national scale.' },
    ],
    outputs: [
      'Open-Source Project Security Baseline',
      'DPG Software Trust Scorecard',
      'SBOM and VEX publication for supported projects',
      'Coordinated vulnerability disclosure advisories',
      'Maintainer training curriculum',
    ],
    boundary: 'The division links to external code repositories rather than duplicating code hosting. Where a project needs a neutral legal home, the Foundation can provide one — but the project remains community-governed.',
  },

  'policy-evidence-centre': {
    num: '03', slug: 'policy-evidence-centre', icon: 'book', accent: 'orange',
    name: 'Digital Trust Policy and Evidence Centre',
    short: 'Policy & Evidence Centre',
    phase: 'Phase 1 — first 12 months',
    photo: ['card-catalogue.jpg', 'Rows of institutional archive drawers in a library.'],
    strap: 'Independent research translating technical risk into evidence for policy, regulation and public-interest technology decisions — including human rights, civil society and children\'s digital rights.',
    purpose: 'To produce and publish independent research that converts technical digital trust risk into evidence that funders, policymakers, regulators, DPI programme teams and civil society can act on — with particular emphasis on Africa and the Global South, where the evidence base is thinnest and the deployment pace is fastest. The Centre produces rights-based evidence alongside technical analysis, and treats children\'s rights and civil-society impacts as core research dimensions.',
    audience: 'Policymakers, funders and researchers',
    contactEmail: 'info@digitaltrustfuturesfoundation.org',
    focusTitle: 'Research focus areas',
    focus: [
      { title: 'DPI and DPG risk landscape', desc: 'Comparative, longitudinal evidence on safety, security and inclusion conditions across national digital infrastructure deployments.' },
      { title: 'Human rights and child-rights evidence', desc: 'Rights-based analysis of DPI and AI impact on privacy, non-discrimination, expression, association, due process and effective remedy — with dedicated child-rights dimensions.' },
      { title: 'AI governance in public services', desc: 'How AI is being used in citizen-facing DPI, and what accountability, oversight and appeal mechanisms exist or are missing — including for children and vulnerable communities.' },
      { title: 'Digital identity and credential safety', desc: 'Privacy, exclusion, surveillance and systemic risk in national identity and credentialing systems, including biometric risks for children.' },
      { title: 'Civil society digital harm evidence', desc: 'Documented harm patterns from the Civil Society Digital Harm Evidence Network — identity exclusion, payment fraud, surveillance, unsafe AI decisions and gaps in grievance and recourse.' },
      { title: 'Open-source sustainability', desc: 'How DPGs are funded, maintained, governed and secured — and where dependency risk concentrates.' },
      { title: 'Policy and regulatory evidence', desc: 'Evidence synthesis for DPI regulation, data protection, AI governance, children\'s digital rights and open-source policy.' },
    ],
    programmes: [
      { name: 'Annual DPI Trust Report', desc: 'Flagship annual publication on DPI trust conditions across Africa and the Global South, including rights, safeguarding and civil-society dimensions.' },
      { name: 'Country Trust Readiness Studies', desc: 'Deep-dive research on specific national DPI contexts, published with partner consent.' },
      { name: 'Policy Brief Series', desc: 'Short, decision-ready briefs on specific DPI, DPG, AI governance, child-rights and human-rights issues.' },
      { name: 'Evidence Synthesis Reviews', desc: 'Systematic reviews of existing research to identify gaps, consensus and contested findings.' },
    ],
    extraTitle: 'What counts as evidence',
    extraRows: [
      { label: 'Technical assessments', desc: 'Security, safety and assurance findings from the Lab, anonymised and aggregated for publication.' },
      { label: 'Civil-society harm patterns', desc: 'Anonymised harm patterns from the Civil Society Digital Harm Evidence Network, collected under strict consent and minimisation protocols.' },
      { label: 'Community and citizen data', desc: 'Harm patterns from citizen safety work, collected under strict consent and minimisation protocols.' },
      { label: 'Comparative country analysis', desc: 'Cross-country comparison of DPI design, safeguards, rights conditions and outcome evidence.' },
      { label: 'Systematic literature review', desc: 'Synthesis of existing research, with gaps and contested findings identified explicitly.' },
    ],
    outputs: [
      'Annual DPI Trust Report',
      'Country trust-readiness case studies',
      'Policy briefs on DPI, DPG, AI governance, human rights and children\'s digital rights',
      'Peer-reviewed research papers',
      'Child Data Protection and Minimisation Guide',
      'Open data sets on DPI risk and safeguards',
    ],
    boundary: 'The Centre produces independent research. It does not provide legal, financial, investment or regulatory advice. Research outputs are submitted for peer review where appropriate and published with their methodology and limitations stated.',
  },

  'skills-academy': {
    num: '04', slug: 'skills-academy', icon: 'cap', accent: 'navy',
    name: 'Digital Trust Skills and Implementation Academy',
    short: 'Skills Academy',
    phase: 'Phase 2 — months 7–24',
    photo: ['classroom-backs.jpg', 'A training room seen from the back, participants facing a facilitator.'],
    strap: 'Practical digital trust capacity building for governments, universities, civil society and local technology teams — including rights-respecting cybersecurity, child safety and responsible AI.',
    purpose: 'To build a regional bench of practitioners with the skills to design, assess and maintain safe, secure and inclusive digital infrastructure — prioritising Africa and the Global South, and using a training-of-trainers approach wherever possible to extend reach beyond what the Foundation can deliver directly. Training integrates rights-respecting cybersecurity, child safety, civil-society resilience and responsible AI as core competencies.',
    audience: 'Government officials, university partners, civil society practitioners',
    contactEmail: 'info@digitaltrustfuturesfoundation.org',
    focusTitle: 'Training focus areas',
    focus: [
      { title: 'Government and DPI teams', desc: 'Practical training for teams designing, procuring, operating and overseeing digital public infrastructure — including human-rights assurance, child safety and effective remedy.' },
      { title: 'University and research integration', desc: 'Curriculum modules, case studies and research partnerships for universities with DPI, cybersecurity and digital rights programmes.' },
      { title: 'Civil society capacity', desc: 'Digital safety, cyber hygiene, evidence-based advocacy, child protection and rights-respecting technology training for nonprofit and community organisations.' },
      { title: 'Youth digital literacy and safety', desc: 'Age-appropriate digital trust, safety and rights materials for young people, educators, caregivers and community organisations working with children.' },
      { title: 'Open-source community', desc: 'Secure development, disclosure, privacy-by-design and maintenance training for DPG and open-source maintainer communities.' },
    ],
    programmes: [
      { name: 'Digital Trust Research Fellowship', desc: 'Independent research on DPI risk, AI governance, credentials, human rights and open-source sustainability.' },
      { name: 'African Open-Source Fellows Programme', desc: 'Building regional maintainers with genuine security depth, attached to DPGs carrying national dependency.' },
      { name: 'Women in Digital Trust Fellowship', desc: 'A dedicated pathway addressing under-representation in DPI assurance, open-source security and digital trust policy.' },
      { name: 'African Digital Trust Graduate Programme', desc: 'Structured early-career entry into DPI assurance and open-source security for recent graduates.' },
      { name: 'Children and Young People Digital Trust Fellowship', desc: 'Fellowship pathway for youth and practitioners working on children\'s digital rights, safety and participation — with safeguarded youth input into research priorities.' },
    ],
    extraTitle: 'Training principles',
    extraRows: [
      { label: 'Hands-on and contextual', desc: 'Training uses real systems, real constraints and regional case studies rather than generic frameworks.' },
      { label: 'Rights-integrated', desc: 'Human rights, child safety and civil-society resilience are embedded across all training — not added as optional modules.' },
      { label: 'Train-the-trainer design', desc: 'Materials are built to be handed to local facilitators, with facilitator guides and adaptation notes.' },
      { label: 'Open and reusable', desc: 'All training content released under CC BY 4.0 unless specific partner arrangements require otherwise.' },
      { label: 'Language and accessibility', desc: 'Key materials produced or translated for low-literacy, multilingual and mobile-first environments, including child-friendly versions.' },
    ],
    outputs: [
      'Open curriculum modules for DPI assurance, digital safety, human rights and child protection',
      'Training-of-trainers facilitator packs',
      'Fellowship cohorts producing published research and open-source contributions',
      'University partnership course integrations',
      'Child-friendly digital trust and safety materials',
      'Certified practitioners per cohort',
    ],
    boundary: 'The Academy supplements, rather than competes with, existing university and professional development offerings. It operates in partnership with local institutions and prioritises course integration over standalone certification.',
  },

  'cyber-safety-centre': {
    num: '05', slug: 'cyber-safety-centre', icon: 'buoy', accent: 'teal',
    name: 'Public-Interest Cyber and Digital Safety Centre',
    short: 'Cyber & Safety Centre',
    phase: 'Phase 2 — months 7–24',
    photo: ['network-cables.jpg', 'Rows of network cables plugged into a server panel.'],
    strap: 'Practical cyber support for civil society, human rights defenders, journalists, children\'s organisations and social-impact technology providers that cannot afford commercial services.',
    purpose: 'To provide affordable, right-sized cybersecurity and digital safety support for civil-society organisations, community institutions and social-impact technology providers — with specialist services for human rights defenders, journalists and civic-space organisations facing elevated digital risk, and dedicated support for organisations working with and for children. Civil society is not merely a beneficiary: it is also an evidence partner and accountability participant in DTFF\'s wider work.',
    audience: 'Civil-society organisations, human rights defenders and nonprofits',
    contactEmail: 'info@digitaltrustfuturesfoundation.org',
    focusTitle: 'What the Centre provides',
    focus: [
      { title: 'Cyber helpdesk', desc: 'Triage support for cyber incidents, phishing, ransomware and account compromise affecting civil-society organisations.' },
      { title: 'High-risk community support', desc: 'Specialist support for human rights defenders, journalists, public-interest investigators and civic-space organisations facing surveillance, identity-linked tracking, account compromise, payment monitoring, harassment, censorship and retaliation.' },
      { title: 'Digital safety clinic', desc: 'Practical support for organisations working with vulnerable populations, handling sensitive data or operating in high-risk contexts — including children\'s organisations.' },
      { title: 'Cyber maturity support', desc: 'Right-sized maturity assessments and improvement roadmaps that do not assume enterprise budgets or staffing.' },
      { title: 'Community safety toolkits', desc: 'Plain-language training and awareness materials for frontline community organisations and their beneficiaries, including child-friendly versions.' },
      { title: 'Civil Society Digital Harm Evidence Network', desc: 'A structured evidence-sharing network where local civil-society partners surface anonymised harm patterns — identity exclusion, payment fraud, surveillance, unsafe AI decisions and gaps in grievance — that feed the Observatory and assurance methodology.' },
    ],
    programmes: [
      { name: 'Civil Society Cyber Helpdesk', desc: 'First-response support for cyber incidents and digital safety emergencies affecting nonprofits, human rights defenders and community institutions.' },
      { name: 'High-Risk Organisation Digital Safety Programme', desc: 'Dedicated support for human rights defenders, journalists, public-interest investigators and civic-space organisations — including surveillance risk assessment, secure communications, identity and SIM-related exposure, and payment-trail protection.' },
      { name: 'Nonprofit Cyber Maturity Programme', desc: 'Structured maturity assessment and improvement support tailored to civil-society organisations.' },
      { name: 'Community Digital Safety Programme', desc: 'Practical digital safety training and resources for community organisations and their service users.' },
    ],
    extraTitle: 'Who this is for',
    extraRows: [
      { label: 'Nonprofits and NGOs', desc: 'Organisations handling beneficiary data, financial inclusion platforms, advocacy databases and sensitive field data.' },
      { label: 'Human rights defenders and journalists', desc: 'Organisations and individuals whose work exposes them to surveillance, identity-linked tracking, account compromise, payment monitoring, harassment, censorship and retaliation — requiring a higher standard of digital protection.' },
      { label: 'Children\'s organisations', desc: 'Organisations working with or for children that handle sensitive data and operate in contexts requiring heightened safeguarding controls and child-safe digital practices.' },
      { label: 'Community institutions', desc: 'Faith communities, cooperatives, local health services and informal education providers with digital exposure.' },
      { label: 'Social-impact tech providers', desc: 'Small technology teams building social-impact products without dedicated security capacity.' },
      { label: 'Civil-society media', desc: 'Independent media, investigative journalism outlets and human rights documentation organisations.' },
    ],
    outputs: [
      'Nonprofit cyber maturity self-assessment tool',
      'Incident response guide for civil-society organisations',
      'Community digital safety toolkit',
      'Civil Society DPI Threat-Modelling Guide',
      'Human Rights Defender Digital Infrastructure Threat Model',
      'Child-Friendly Digital Harm Reporting Framework',
      'Cyber helpdesk case-handling and escalation playbook',
      'Annual civil society cyber risk brief',
    ],
    boundary: 'The Centre provides affordable support, not commercial managed security services. It does not perform adversarial penetration testing of third-party systems without explicit written consent. Organisations with capacity to access commercial services are encouraged to do so.',
  },
};

export const DIVISION_ORDER = [
  'dpi-trust-lab',
  'open-digital-commons',
  'policy-evidence-centre',
  'skills-academy',
  'cyber-safety-centre',
];
