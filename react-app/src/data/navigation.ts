export interface NavChild {
  label: string;
  href: string;
  desc: string;
}

export interface NavItem {
  label: string;
  href: string;
  key: string;
  children: NavChild[] | null;
}

export const NAV: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    key: 'about',
    children: [
      { label: 'Who we are', href: '/about', desc: 'Mandate, vision, mission and values' },
      { label: 'Human Rights & Digital Trust', href: '/human-rights', desc: 'Rights-respecting assurance — what it means and how we test it' },
      { label: 'Governance & board', href: '/governance', desc: 'Independent oversight and executive office' },
      { label: 'Relationship with Nucleus Systems', href: '/governance#nucleus', desc: 'How independence is protected' },
      { label: 'Transparency & reporting', href: '/governance#transparency', desc: 'Policies, MEL and accountability' },
    ],
  },
  {
    label: 'What we do',
    href: '/what-we-do',
    key: 'what-we-do',
    children: [
      { label: 'Overview', href: '/what-we-do', desc: 'Five programme divisions' },
      { label: 'DPI Security, Safety and Trust Lab', href: '/divisions/dpi-trust-lab', desc: 'Safeguards for identity, payments and data exchange' },
      { label: 'Open Digital Commons and Software Trust', href: '/divisions/open-digital-commons', desc: 'Hosting, securing and sustaining digital public goods' },
      { label: 'Digital Trust Policy and Evidence Centre', href: '/divisions/policy-evidence-centre', desc: 'Independent research and policy evidence' },
      { label: 'Digital Trust Skills and Implementation Academy', href: '/divisions/skills-academy', desc: 'Practical capacity building' },
      { label: 'Public-Interest Cyber and Digital Safety Centre', href: '/divisions/cyber-safety-centre', desc: 'Cyber support for civil society' },
      { label: 'Children & Young People', href: '/children-young-people', desc: 'Cross-foundation digital trust initiative for children' },
    ],
  },
  {
    label: 'Programmes',
    href: '/programmes',
    key: 'programmes',
    children: [
      { label: 'Launch programmes', href: '/programmes', desc: 'The three connected launch programmes' },
      { label: 'Flagship initiative', href: '/programmes#flagship', desc: 'DPI and Open Source Safeguards Initiative' },
      { label: 'Fellowships', href: '/programmes#fellowships', desc: 'Research and open-source fellowships' },
      { label: 'Milestones & roadmap', href: '/programmes#roadmap', desc: 'The 24-month delivery path' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    key: 'research',
    children: [
      { label: 'Publications & policy briefs', href: '/research', desc: 'Evidence, briefs and country studies' },
      { label: 'Toolkits & frameworks', href: '/research#toolkits', desc: 'Open, reusable assurance tools' },
      { label: 'Open source', href: '/open-source', desc: 'Hosted projects and security advisories' },
    ],
  },
  {
    label: 'Get involved',
    href: '/get-involved',
    key: 'get-involved',
    children: [
      { label: 'Partner with us', href: '/get-involved#partner', desc: 'Governments, funders and DPG maintainers' },
      { label: 'Support our work', href: '/support-our-work', desc: 'The two-year launch investment package' },
      { label: 'Apply for support', href: '/get-involved#support', desc: 'Civil society and DPG helpdesk' },
      { label: 'Civil Society & Human Rights Defenders', href: '/civil-society', desc: 'High-risk support, threat modelling and the evidence network' },
      { label: 'Careers & fellowships', href: '/get-involved#careers', desc: 'Join the Foundation' },
    ],
  },
  {
    label: 'News',
    href: '/news',
    key: 'news',
    children: null,
  },
];

export const FOOTER_COLS = [
  {
    heading: 'Foundation',
    links: [
      { label: 'Who we are', href: '/about' },
      { label: 'Human Rights & Digital Trust', href: '/human-rights' },
      { label: 'Governance & board', href: '/governance' },
      { label: 'Nucleus Systems relationship', href: '/governance#nucleus' },
      { label: 'Transparency & reporting', href: '/governance#transparency' },
      { label: 'News & events', href: '/news' },
    ],
  },
  {
    heading: 'What we do',
    links: [
      { label: 'DPI Trust Lab', href: '/divisions/dpi-trust-lab' },
      { label: 'Open Digital Commons', href: '/divisions/open-digital-commons' },
      { label: 'Policy & Evidence Centre', href: '/divisions/policy-evidence-centre' },
      { label: 'Skills Academy', href: '/divisions/skills-academy' },
      { label: 'Cyber & Digital Safety Centre', href: '/divisions/cyber-safety-centre' },
      { label: 'Children & Young People', href: '/children-young-people' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Publications & briefs', href: '/research' },
      { label: 'Toolkits & frameworks', href: '/research#toolkits' },
      { label: 'Open-source projects', href: '/open-source' },
      { label: 'Security advisories', href: '/open-source#advisories' },
      { label: 'Vulnerability disclosure', href: '/security' },
    ],
  },
  {
    heading: 'Engage',
    links: [
      { label: 'Partner with us', href: '/get-involved#partner' },
      { label: 'Support our work', href: '/support-our-work' },
      { label: 'Civil Society & Defenders', href: '/civil-society' },
      { label: 'Apply for support', href: '/get-involved#support' },
      { label: 'Careers & fellowships', href: '/get-involved#careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
