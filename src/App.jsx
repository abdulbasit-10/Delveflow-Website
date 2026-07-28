import { useEffect, useMemo, useState } from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './pages/Home.jsx'
// import Services from './pages/Services.jsx'
// import ServiceDetail from './pages/ServiceDetail.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import HowWeWork from './pages/HowWeWork.jsx'
import Career from './pages/Career.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'
import ServiceUIUX from './pages/ServiceUIUX.jsx'
import ServiceWeb from './pages/ServiceWeb.jsx'
import ServiceApp from './pages/ServiceApp.jsx'
import ServiceSaaS from './pages/ServiceSaaS.jsx'



const services = [
  {
    slug: 'app-development',
    title: 'App Development',
    short: 'Native and cross-platform apps built for smooth user journeys.',
    summary:
      'We design, build, and launch reliable mobile products for startups, service teams, and growing businesses.',
    capabilities: ['iOS and Android apps', 'Cross-platform builds', 'App store launch', 'Product analytics'],
    result: 'Fast, polished mobile experiences that are easy to maintain and ready to scale.',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Modern websites, dashboards, portals, and commerce platforms.',
    summary:
      'From marketing websites to complex web apps, DF creates responsive interfaces backed by clean architecture.',
    capabilities: ['React frontends', 'Business portals', 'CMS and ecommerce', 'Performance optimization'],
    result: 'A professional web presence that works beautifully on desktop, tablet, and mobile.',
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    short: 'Practical AI systems that automate work and unlock better decisions.',
    summary:
      'We turn business workflows into intelligent assistants, search tools, forecasting systems, and automation pipelines.',
    capabilities: ['AI assistants', 'Document intelligence', 'Workflow automation', 'Predictive insights'],
    result: 'Smarter operations with human-friendly AI that fits your real process.',
  },
  {
    slug: 'ui-ux-designing',
    title: 'UI/UX Designing',
    short: 'User-centered interfaces designed for clarity, speed, and conversion.',
    summary:
      'DF designs clean user experiences, wireframes, prototypes, design systems, and responsive interfaces that make products easier to use.',
    capabilities: ['User research', 'Wireframes and prototypes', 'Design systems', 'Responsive UI design'],
    result: 'Polished digital experiences that feel intuitive, consistent, and ready for development.',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    short: 'Scalable SaaS platforms for teams, subscriptions, and workflows.',
    summary:
      'DF builds SaaS products with role-based dashboards, subscriptions, integrations, reporting, and scalable backend architecture.',
    capabilities: ['SaaS platforms', 'Role-based dashboards', 'Subscription workflows', 'API integrations'],
    result: 'A reliable SaaS product that can launch quickly and grow with your customers.',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud and DevOps',
    short: 'Secure cloud infrastructure, deployment pipelines, and monitoring.',
    summary:
      'We help teams ship confidently with cloud setup, CI/CD, containerization, backups, and reliability engineering.',
    capabilities: ['Cloud architecture', 'CI/CD pipelines', 'Docker and containers', 'Monitoring and backups'],
    result: 'Stable infrastructure that keeps products online and releases predictable.',
  },
]

// ✅ UPDATE THE pages OBJECT - Map service slugs to components
const pages = {
  home: Home,
  about: About,
  howwework: HowWeWork,
  projects: Portfolio,
  portfolio: Portfolio,
  career: Career,
  contact: Contact,
  privacy: PrivacyPolicy,
  terms: TermsOfService,
  cookies: CookiePolicy,
}

// ✅ ADD SERVICE PAGE MAPPING
const servicePages = {
  'ui-ux-design': ServiceUIUX,
  'web-development': ServiceWeb,  
  'app-development': ServiceApp,
  'saas-development': ServiceSaaS,
  // 'ai-solutions': ServiceAI,         // Add when created
  // 'cloud-devops': ServiceCloud,      // Add when created
}

function readRoute() {
  const route = window.location.hash.replace('#/', '') || 'home'
  const [page, slug] = route.split('/')
  return { page, slug }
}

const App = () => {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(readRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // ✅ Determine which component to render
  const getPageComponent = () => {
  if (route.page === 'services' && route.slug) {
    return servicePages[route.slug] || null
  }
  return pages[route.page] || Home
}

  const Page = getPageComponent()
  const currentService = services.find((service) => service.slug === route.slug)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_12%,rgba(56,185,223,0.13),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f2f8ff_45%,#ffffff_100%)] text-[#0a1b2f]">
      <Header currentPage={route.page} services={services} />
      <main>
        {Page ? (
          <Page services={services} />
        ) : (
          // Fallback if service page not found
          <div className="py-20 text-center">
            <h1 className="text-4xl font-black text-[#06172b]">Service not found</h1>
            <p className="mt-4 text-[#5b6f84]">The service page you're looking for doesn't exist.</p>
            <a href="#/" className="mt-6 inline-block text-[#0b3765] font-bold hover:underline">
              Go Home
            </a>
          </div>
        )}
      </main>
      <Footer services={services} />
    </div>
  )
}

export default App