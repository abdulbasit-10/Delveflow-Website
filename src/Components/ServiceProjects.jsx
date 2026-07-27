// ============================================================
// SERVICE PROJECTS COMPONENT
// ============================================================
// File: src/Components/ServiceProjects.jsx

import React from 'react'

const defaultProjects = [
  {
    title: 'Trading App',
    category: 'Fintech',
    image: null,
    link: '#',
    description:
      'A sleek, real-time trading platform built for speed and intelligence. Traders get live market data, smart analytics, and seamless execution empowering smarter decisions and higher profits.',
  },
  {
    title: 'Trading App',
    category: 'Fintech',
    image: null,
    link: '#',
    description:
      'A sleek, real-time trading platform built for speed and intelligence. Traders get live market data, smart analytics, and seamless execution empowering smarter decisions and higher profits.',
  },
  {
    title: 'Trading App',
    category: 'Fintech',
    image: null,
    link: '#',
    description:
      'A sleek, real-time trading platform built for speed and intelligence. Traders get live market data, smart analytics, and seamless execution empowering smarter decisions and higher profits.',
  },
  {
    title: 'Trading App',
    category: 'Fintech',
    image: null,
    link: '#',
    description:
      'A sleek, real-time trading platform built for speed and intelligence. Traders get live market data, smart analytics, and seamless execution empowering smarter decisions and higher profits.',
  },
]

const ProjectCard = ({ project }) => (
  <div className="overflow-hidden rounded-xl border border-[#e3e7ee] bg-white shadow-[0_10px_25px_rgba(6,23,43,0.05)]">
    <div className="relative h-40 w-full">
      <div
        className="h-full w-full"
        style={{
          backgroundColor: '#e9e9e9',
          backgroundImage:
            'linear-gradient(45deg, #dcdcdc 25%, transparent 25%), linear-gradient(-45deg, #dcdcdc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #dcdcdc 75%), linear-gradient(-45deg, transparent 75%, #dcdcdc 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <span className="absolute -bottom-3 left-4 rounded-full bg-[#0b3765] px-3 py-1 text-[11px] font-semibold text-white">
        {project.category}
      </span>
    </div>

    <div className="px-5 pb-5 pt-6">
      <h3 className="text-[16px] font-bold text-[#06172b]">{project.title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-[#575757]">
        {project.description}
      </p>
      {/* ✅ Fixed - Added <a> tag */}
      <a
        href={project.link}
        className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0b3765] transition hover:text-[#062142]"
      >
        View Case Study
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  </div>
)

const ServiceProjects = ({
  badge = 'Featured Projects',
  boldPrefix = 'Delve',
  title = 'into Innovation.',
  gradientWord = 'Flow',
  subtitleEnd = 'with Real Results.',
  description = 'We craft powerful digital solutions that solve real problems and deliver measurable success. Here are some of our latest standout projects.',
  projects = defaultProjects,
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,197,92,0.14),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(56,107,223,0.10),transparent_40%)]" />

      <div className="relative mx-auto w-[min(1000px,calc(100%-36px))]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            {badge}
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2.1rem)] font-black leading-snug text-[#0a0a0a]">
            <span className="text-[#093b7a]">{boldPrefix}</span>{' '}
            {title}{' '}
            <span className="text-[#093b7a]">{gradientWord[0]}</span>
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              {gradientWord.slice(1)}
            </span>
            <br />
            {subtitleEnd}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-[#717272]">
            {description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceProjects