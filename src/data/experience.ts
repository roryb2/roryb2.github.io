// Experience shown on the About page.

export interface Role {
  title: string;
  org?: string; // described generically; never the employer's name
  orgUrl?: string;
  location?: string;
  start?: string; // e.g. 'Oct 2023'; omit to show only the end date
  end?: string; // omit for current role
  summary: string;
  highlights: string[];
}

export interface Education {
  qualification: string;
  institution: string;
  start?: string;
  end?: string;
  note?: string;
}

export const roles: Role[] = [
  {
    title: 'Senior Manager, Data & Analytics Engineering',
    org: 'a data and compliance consultancy',
    start: 'Oct 2023',
    summary:
      'Every role here was at this firm, which serves financial institutions in the Caribbean. I own the data pipeline and advise client leadership directly.',
    highlights: [
      'Lead compliance review cycles across multiple Caribbean jurisdictions, using automated data-quality rules.',
      'Turn open-ended risk questions into clear answers for client executives.',
      'Mentor junior analysts through structured certification programs.',
      'Write the proposals, RFP responses and executive decks that explain the work.',
    ],
  },
  {
    title: 'Manager, Data & Analytics Engineering',
    start: 'Jul 2022',
    end: 'Oct 2023',
    summary: 'Ran reporting, client support and data delivery.',
    highlights: [
      'Built live utilization dashboards, fed by an automated daily pipeline into Salesforce.',
      'Built a formal client support framework.',
      'Standardized data delivery SLAs and built automated data-quality checks.',
    ],
  },
  {
    title: 'Senior Lead Analytics Engineer',
    start: 'Jan 2021',
    end: 'Jun 2022',
    summary: 'Built the tools and training that let the team scale.',
    highlights: [
      'Built a reusable Python analytics library on pandas, NumPy and Jupyter.',
      'Created a curriculum that trains junior analysts to deliver core services.',
      'Shipped production pipelines for regulatory changes across multiple Caribbean jurisdictions.',
    ],
  },
  {
    title: 'Analytics Consultant, Data Strategy',
    end: 'Dec 2020',
    summary: 'Risk modelling and data strategy.',
    highlights: [
      'Built customer risk-scoring models for financial institutions.',
      'Added anomaly detection that helps client teams prioritize their workload.',
    ],
  },
];

export const education: Education[] = [
  {
    qualification: 'M.S., Computer Science',
    institution: 'University of Illinois at Urbana-Champaign',
    end: '2020',
    note: 'Coursework in statistical modelling and machine learning.',
  },
  {
    qualification: 'B.S., Computer Science',
    institution: 'Illinois Institute of Technology',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['SQL', 'Python', 'pandas', 'NumPy', 'SQLAlchemy', 'Jupyter', 'R'] },
  {
    group: 'Data modelling & governance',
    items: ['dbt', 'Dimensional modelling', 'KPI design', 'Data quality & governance', 'ETL/ELT pipelines'],
  },
  { group: 'BI & visualization', items: ['Power BI', 'Tableau', 'Self-service dashboards', 'Salesforce CRM'] },
  {
    group: 'Statistics & machine learning',
    items: ['Regression', 'Clustering', 'Forecasting', 'Segmentation', 'Anomaly detection'],
  },
  { group: 'Platforms & tools', items: ['AWS', 'GCP', 'BigQuery', 'Claude', 'ChatGPT', 'Copilot'] },
];

export const goals = [
  'Problems where data has to change a decision, not decorate a slide.',
  'Teams that want trustworthy numbers and will act on them.',
  'Contract projects only, from Kingston, Jamaica.',
];
