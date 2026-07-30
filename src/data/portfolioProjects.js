export const projectCategories = [
  'UI/UX Design',
  'Web Development',
  'App Development',
  'AI Solutions',
  'SaaS Development',
  'Cloud and DevOps',
]

const makeCards = (tab, category, titlePrefix) =>
  Array.from({ length: 4 }, (_, i) => ({
    title: `${titlePrefix} ${i + 1}`,
    category,
    tab,
    image: null,
    link: '#',
    description:
      'A sleek, real-time trading platform built for speed and intelligence. Traders get live market data, smart analytics, and seamless execution empowering smarter decisions and higher profits.',
  }))

export const portfolioProjects = [
  ...makeCards('UI/UX Design', 'Fintech', 'UI/UX Project'),
  ...makeCards('Web Development', 'Ecommerce', 'Web Project'),
  ...makeCards('App Development', 'Mobile', 'App Project'),
  ...makeCards('AI Solutions', 'AI', 'AI Project'),
  ...makeCards('SaaS Development', 'SaaS', 'SaaS Project'),
  ...makeCards('Cloud and DevOps', 'Cloud', 'Cloud Project'),
]