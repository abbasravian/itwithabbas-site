// One place to edit your site details.
export const SITE = {
  name: 'IT with Abbas',
  owner: 'Ghulam Abbas',
  tagline: 'Practical IT, security and career help from someone who has run it at scale.',
  description:
    'Practical IT help, security awareness and career guidance from Ghulam Abbas, an IT infrastructure and operations leader with 15+ years of experience and a CCIE Data Center certification.',
  // Set this up with Cloudflare Email Routing (free), forwarding to your personal inbox.
  email: 'hello@itwithabbas.com',
  linkedin: 'https://www.linkedin.com/in/abbasravian',
  location: 'Riyadh, Saudi Arabia',
};

export const CATEGORIES = {
  'fix-it': {
    label: 'Fix It',
    blurb: 'Troubleshooting and everyday IT help, explained step by step.',
  },
  'stay-safe': {
    label: 'Stay Safe',
    blurb: 'Security basics for people and small teams, without the jargon.',
  },
  'grow-your-career': {
    label: 'Grow Your Career',
    blurb: 'Certifications, skills and lessons from 15+ years in IT.',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
