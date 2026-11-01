// Site-wide settings.

export const site = {
  name: 'Rory Barrett',
  initials: 'RB',
  role: 'Data & analytics leader',
  tagline: 'Data should change decisions. I make sure it does.',
  description:
    'Rory Barrett is a data and analytics leader in Kingston, Jamaica. Over a decade building pipelines, models and dashboards.',
  currently: 'Leading data and analytics at a consultancy',
  location: 'Kingston, Jamaica',
  // Public contact email. Leave empty to hide it.
  email: '',
  // Formspree form ID (the part after /f/). Leave empty to hide the contact form.
  formspreeId: '',
  // Path to a CV in public/ (e.g. '/cv.pdf'). Leave empty to hide the download button.
  cvPath: '',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rorycbarrett' },
    { label: 'GitHub', href: 'https://github.com/roryb2' },
  ],
};

// Lab is left out of the navigation automatically while it has no entries.
export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Lab', href: '/lab' },
  { label: 'Contact', href: '/contact' },
];
