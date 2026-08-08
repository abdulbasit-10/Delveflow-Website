import WebImg1 from '../assets/Handmade.jpeg'
import WebImg2 from "../assets/Enzon.jpeg"
import SaasImg1 from '../assets/Paypal.jpeg'
import GYM from '../assets/Gym.png'
import Network from '../assets/Network.jpeg'
import Study from '../assets/Study.png'

export const projectCategories = [
  'Web Development',
  'App Development',
  'AI Solutions',
  'UIUX Designing',
  'SaaS Development',
  // 'Cloud and DevOps',
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

// export const portfolioProjects = [
//   // ...makeCards('UI/UX Design', 'Fintech', 'UI/UX Project'),
//   ...makeCards('Web Development', 'Ecommerce', 'Web Project'),
//   ...makeCards('App Development', 'Mobile', 'App Project'),
//   // ...makeCards('AI Solutions', 'AI', 'AI Project'),
//   ...makeCards('SaaS Development', 'SaaS', 'SaaS Project'),
//   // ...makeCards('Cloud and DevOps', 'Cloud', 'Cloud Project'),
// ]


export const portfolioProjects = [
  // ===== UI/UX Design =====
  // {
  //   title: 'Fintech Dashboard Redesign',
  //   category: 'Fintech',
  //   tab: 'UI/UX Design',
  //   image: UiuxImg1,
  //   link: '/portfolio/fintech-dashboard',
  //   description: 'Complete UI/UX overhaul for a trading platform, improving user engagement by 40%.',
  // },
  // {
  //   title: 'Healthcare App UI',
  //   category: 'Healthcare',
  //   tab: 'UI/UX Design',
  //   image: UiuxImg2,
  //   link: '/portfolio/healthcare-ui',
  //   description: 'Clean, accessible interface design for a patient management system.',
  // },

  // ===== Web Development =====
  {
    title: 'Trendy Treasures By Aleena',
    category: 'Ecommerce',
    tab: 'Web Development',
    image: WebImg1,
    // link: '/portfolio/ecommerce-platform',
    description: 'Trendy Treasures by Aleena is a modern e-commerce website for affordable, handmade, and custom-made jewelry. It offers an elegant shopping experience where customers can explore collections, discover new drops, and order personalized pieces.',
  },
  {
    title: 'Ezon Emporium',
    category: 'Ecommerce',
    tab: 'Web Development',
    image: WebImg2,
    link: '/portfolio/corporate-website',
    description: 'Ezon Emporium is a modern e-commerce platform offering a smooth shopping experience with organized products, detailed information, competitive pricing, and easy navigation. It helps businesses showcase products, reach customers, and drive online sales.',
  },

  // ===== App Development =====
  {
    title: 'CK Network App',
    category: 'Mobile',
    tab: 'App Development',
    image: Network,
    imageFit: 'contain',
    link: '/portfolio/gym-app',
    description: 'CkNetwork is a trading companion app that provides real-time buy/sell signals, smart notifications, and key trading levels such as entry, stop-loss, and take-profit. It also offers structured lessons on chart analysis, risk management, and trading psychology to help users build practical trading knowledge and make smarter decisions.',
  },

  // ===== AI Solutions =====
    {
    title: 'Study Studio',
    category: 'Web',
    tab: 'AI Solutions',
    image: Study,
    link: '/portfolio/gym-app',
    description: 'Developed the frontend for StudyStudio, an AI-powered study platform that enables personalized AI tutors, course management, and real-time homework assistance. Built responsive interfaces, dashboards, and subscription flows integrated with backend APIs, focusing on performance, scalability, and a smooth user experience.',
  },

  // ===== SaaS Development =====
  {
    title: 'Profit Pal',
    category: 'SaaS',
    tab: 'SaaS Development',
    image: SaasImg1,
    link: '/portfolio/profit-pal',
    description: 'ProfitPal is a SaaS tool that helps e-commerce sellers calculate true product profits, compare marketplace performance, and make smarter pricing decisions. It provides profit margins, cost breakdowns, break-even prices, and “What If” scenarios to maximize profitability.',
  },
    {
    title: 'Gym Management System',
    category: 'SaaS',
    tab: 'SaaS Development',
    image: GYM,
    link: '/portfolio/profit-pal',
    description: 'Developed a full-stack gym management system to efficiently manage members, subscriptions, attendance, and payments. The system centralizes daily gym operations through a user-friendly interface, improving workflow, organization, and overall management efficiency.',
  },
  // ===== Cloud and DevOps =====
  // (agar abhi koi project nahi hai to yeh khali chhod do)
]