// The personal side of the site: who you are, how you work and what you're doing now.
// Shown on the home and About pages.

export const intro = [
  "Kingston, Jamaica. Over a decade in data. I've built pipelines, models and data teams for financial institutions across the Caribbean.",
  'I care about results, not reports.',
];

export interface Value {
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    title: 'Start with the decision',
    body: 'What will you do differently with the answer? I start there.',
  },
  {
    title: 'Build in trust',
    body: 'Tests and checks at every layer. Nobody acts on numbers they doubt.',
  },
  {
    title: 'Make it self-serve',
    body: "You shouldn't need me to get an answer. I build so you don't.",
  },
  {
    title: 'Leave the team stronger',
    body: 'I train people as I go. The skills stay after the project ends.',
  },
];

// Update this every month or two.
export const now = {
  updated: '2026-10-31',
  items: [
    { label: 'Working', text: 'Leading data and analytics at a consultancy.' },
    { label: 'Building', text: 'dbt and BigQuery side projects.' },
    { label: 'Open to', text: 'New contract projects.' },
  ],
};

// The three kinds of work on the Work page, in the order they appear on the home page.
export const pillars = [
  {
    category: 'analytics-engineering',
    title: 'Analytics engineering',
    body: 'Pipelines and data models you can trust, from source to dashboard.',
  },
  {
    category: 'data-science',
    title: 'Data science',
    body: 'Risk scores and anomaly detection that show teams where to look first.',
  },
  {
    category: 'bi',
    title: 'BI & reporting',
    body: 'Live KPIs that replace stale spreadsheets.',
  },
] as const;
