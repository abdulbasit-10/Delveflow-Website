import fitnessWebsitePreview from '../assets/fitness-website-preview.png'
import gymManagementPreview from '../assets/gym-management-preview.png'
import profitPalPreview from '../assets/profit-pal-preview.jpeg'
import studyStudioPreview from '../assets/study-studio-preview.png'
import textileStorePreview from '../assets/textile-store-preview.png'

const portfolioProjects = [
  {
    category: 'SaaS Development',
    serviceSlug: 'saas-development',
    title: 'Profit Pal',
    description:
      'A smart E-Commerce Profit Calculator that helps online sellers track costs, calculate margins, and understand their real profit without spreadsheets or guesswork.',
    url: 'https://profit-pal-nine.vercel.app/auth',
    preview: profitPalPreview,
  },
  {
    category: 'Web Development',
    serviceSlug: 'web-development',
    title: 'CrossBody Fitness',
    description:
      'A bold, responsive fitness website showcasing gym classes, professional trainers, membership pricing, and workout content through an energetic visual experience.',
    url: 'https://fitness-website-javascript.vercel.app/',
    preview: fitnessWebsitePreview,
  },
  {
    category: 'AI Solutions',
    serviceSlug: 'ai-solutions',
    title: 'Study Studio',
    description:
      'An AI-powered study platform offering subject templates, customizable tutoring, documentation, and always-available learning support for students.',
    url: 'https://studystudio.jerrizz.com/',
    preview: studyStudioPreview,
  },
  {
    category: 'Web Development',
    serviceSlug: 'web-development',
    title: 'Kashaf Textile Hub',
    description:
      'A responsive textile platform combining digital printing, customized design services, creative education, courses, and enrollment into one accessible web experience.',
    url: 'https://e-commerce-textile-website.vercel.app/',
    preview: textileStorePreview,
  },
  {
    category: 'SaaS Development',
    serviceSlug: 'saas-development',
    title: 'Gym Management System',
    description:
      'A secure gym operations platform for managing members, attendance, memberships, payments, plans, and daily administrative workflows from one centralized dashboard.',
    url: 'https://gym-management-system-qog2.vercel.app/login',
    preview: gymManagementPreview,
  },
]

export default portfolioProjects
