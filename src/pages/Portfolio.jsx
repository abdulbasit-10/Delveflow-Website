// ============================================================
// PORTFOLIO / PROJECTS PAGE
// ============================================================
// File: src/pages/Portfolio.jsx

import { useLocation, useNavigate } from 'react-router-dom'
import ServiceHero from '../Components/ServiceHero'
import ServiceProjects from '../Components/ServiceProjects'
import ProjectFilterTabs from '../Components/ProjectFilterTabs'
import OurImpact from '../Components/OurImpact'
import { projectCategories, portfolioProjects } from '../data/portfolioProjects'
import { CtaSection } from './Home'

// Convert "App Development" → "AppDevelopment"
const toSlug = (name) => name.replace(/\s+/g, '')

// Convert "AppDevelopment" → "App Development"
const fromSlug = (slug) =>
  projectCategories.find((cat) => toSlug(cat) === slug) || projectCategories[0]

const Portfolio = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // '/projects/AppDevelopment' → ['', 'projects', 'AppDevelopment']
  const pathParts = location.pathname.split('/')
  const category = pathParts[2]

  const activeTab = category ? fromSlug(category) : projectCategories[0]

  const handleTabChange = (tab) => {
    navigate(`/projects/${toSlug(tab)}`)
  }

  const filteredProjects = portfolioProjects.filter(
    (project) => project.tab === activeTab
  )

  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        badge="Our Portfolio"
        title="Solutions Built for"
        gradientTitle="Real Business Challenges."
        description="Every project reflects our commitment to solving real-world problems through thoughtful design, modern technology, and measurable business outcomes."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />

      {/* Featured Projects Header */}
      <section className="relative bg-white pt-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            Featured Projects
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2.1rem)] font-black leading-snug text-[#0a0a0a] font-medium">
            <span className="text-[#093b7a]">Delve</span> into Innovation.{' '}
            <span className="text-[#093b7a]">F</span>
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              low
            </span>
            <br />
            with Real Results.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-[#717272]">
            We craft powerful digital solutions that solve real problems and
            deliver measurable success. Here are some of our latest standout
            projects.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white pb-4 pt-6">
        <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
          <ProjectFilterTabs
            categories={projectCategories}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
        </div>
      </section>

      {/* Projects Section */}
      <ServiceProjects showHeader={false} projects={filteredProjects} activeTab={activeTab} />

      {/* Our Impact Section */}
      <OurImpact />
      <CtaSection />
    </>
  )
}

export default Portfolio