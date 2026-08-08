// Single source of truth for every piece of content on the site.
// Kept in sync with Priyansha_Sharma_CV.pdf (public/) - update both together.
//
// `metrics` order matters twice: the hero ticker renders the first four, and the
// 3D scene lays the whole array out on a ring.

export const profile = {
  name: 'Priyansha Sharma',
  initials: 'PS',
  role: 'Operations Team Lead',
  discipline: 'Customer Operations',
  location: 'Delhi, India',
  email: 'priyansha.s.official@gmail.com',
  resume: '/Priyansha_Sharma_CV.pdf',

  headline:
    'Operations lead turning escalations, vendor ecosystems, and SLA pressure into governed, predictable delivery.',

  summary:
    'Operations Team Lead with 2+ years at Cache Labs (Chronicle International Publishers), promoted from Operations Associate to Team Lead and leading a 4-member team for over a year. Owns quality, SLA/TAT governance, exception handling, and escalation resolution across high-volume publishing operations. Currently pursuing an MBA.',

  focusAreas: [
    'Exception handling and QA',
    'Quality and compliance governance',
    'SLA / TAT adherence',
    'Process governance and audit',
    'Escalation management (primary POC)',
    'Workflow optimization',
    'Documentation and SOPs',
    'Team leadership and mentoring',
    'Cross-functional and vendor coordination',
    'KPI and performance monitoring',
    'Stakeholder reporting',
    'Invoice / payment coordination',
    'Product lifecycle support',
    'Requirements analysis',
    'Platform administration',
  ],

  competencies: [
    'ClickUp',
    'Advanced Excel (VLOOKUP, dashboards)',
    'Power BI',
    'ServiceNow familiarity',
    'MS Office',
    'Business documentation',
    'User story refinement',
  ],

  metrics: [
    {
      value: '100%',
      label: 'SLA/TAT adherence',
      detail: 'Sustained across content, publishing, and delivery workflows.',
    },
    {
      value: '75%',
      label: 'Efficiency gain',
      detail: 'Operational efficiency raised through structured task management.',
    },
    {
      value: '45+',
      label: 'Escalations / month',
      detail: 'Single point of contact between client teams and vendor partners.',
    },
    {
      value: '4',
      label: 'Team members led',
      detail: 'Led and trained a 4-member operations team for over a year.',
    },
    {
      value: '30%',
      label: 'Delivery lift',
      detail: 'Improved team timelines through structured workflows.',
    },
    {
      value: '10+',
      label: 'Partner relationships',
      detail: 'Managed vendors and external partners as single POC.',
    },
    {
      value: '3',
      label: 'Promotions',
      detail: 'Advanced from Jr. Associate to Team Lead in 2 years.',
    },
  ],

  experience: [
    {
      company: 'Cache Labs (Chronicle International Publishers)',
      role: 'Team Lead, Operations',
      period: 'March 2026 - Present',
      bullets: [
        'Act as the primary escalation point for client and vendor issues, driving critical-issue resolution and sustaining 100% SLA/TAT adherence across content, publishing, and delivery workflows.',
        'Lead end-to-end operations for the CIP and Smart Immigrant client accounts, translating business needs into actionable tasks across intake, quality, turnaround, and delivery.',
        'Manage team execution in ClickUp through task delegation, tracking, and performance oversight, improving delivery timelines by 30%.',
        'Build and maintain Advanced Excel dashboards and trackers covering client onboarding, publication status, vendor SLAs, and escalations, feeding structured weekly stakeholder reporting.',
        'Enforce process standards and run team training to raise quality and consistency, improving operational efficiency by 75%.',
        'Manage 10+ vendors and resolve 20+ escalations monthly, coordinating internal teams and external partners on issue resolution, communication, and invoice/payment processes.',
        'Collaborate with the CEO and Founder on scaling strategy, product roadmaps, and platform expansion.',
      ],
    },
    {
      company: 'Cache Labs',
      role: 'Sr. Operations Associate',
      period: 'April 2025 - February 2026',
      bullets: [
        'Led a 4-member team and served as the single point of contact for escalations between client-facing teams and external vendors and journal partners, resolving 45+ escalations per month.',
        'Owned end-to-end vendor relationships, maintaining trackers and delivering structured weekly status updates to stakeholders at 100% SLA/TAT adherence.',
        'Designed operational dashboards and standardized documentation to improve visibility and turnaround across concurrent client deliveries.',
        'Identified user pain points and recommended platform improvements from operational data.',
      ],
    },
    {
      company: 'Cache Labs',
      role: 'Operations Associate',
      period: 'September 2024 - March 2025',
      bullets: [
        'Managed daily operational workflows for in-house journal development with high accuracy and on-time turnaround.',
        'Maintained structured documentation, progress reports, and process workflows supporting cross-functional execution and delivery.',
        'Supported requirement gathering and testing for in-house digital products including a journals platform.',
      ],
    },
    {
      company: 'Cache Labs',
      role: 'Jr. Operations Associate',
      period: 'April 2024 - August 2024',
      bullets: [
        'Delivered end-to-end execution across paper, book, and journal publishing, ensuring high-quality, on-time outcomes.',
        'Resolved complex client issues cross-functionally using decision-support tools to improve client satisfaction.',
      ],
    },
    {
      company: 'Helping India Feeding India',
      role: 'Marketing Intern',
      period: 'May 2023 - August 2023',
      bullets: [
        'Created 20+ success stories across social media to strengthen brand storytelling and stakeholder outreach.',
        'Executed 5+ awareness campaigns with supporting content for social impact initiatives.',
      ],
    },
  ],

  education: [
    'MBA, Manipal Academy of Higher Education - expected 2027',
    'B.Sc. Microbiology, Dr. Shyama Prasad Mukherjee University, Ranchi - 79.83%, 2023',
    'Class XII, CBSE, Surendranath Centenary School, Ranchi - 80%, 2020',
    'Class X, ICSE, St. Francis School, Ranchi - 86%, 2018',
  ],

  certifications: [
    'Supply Chain Operations, Rutgers via Coursera',
    'Operations Management: Organization and Analysis, Illinois via Coursera',
    'Careers in Tourism - Event Operations Job Simulation, Forage, 2023',
  ],

  publication:
    'Published research review: Circulating Tumor Cells: An Approach for Early Detection of Cancer, IJRAR.',
}
