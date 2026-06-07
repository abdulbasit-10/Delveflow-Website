import portfolioProjects from '../data/portfolioProjects.js'

const detailContent = {
  'app-development': {
    description:
      'Build powerful, feature-rich mobile applications for iOS and Android platforms. We create intuitive mobile experiences that engage users and drive business growth.',
    features: [
      'Native iOS and Android development',
      'Cross-platform mobile apps',
      'Mobile UI/UX Design',
      'App Store and Play Store deployment',
      'Push Notifications',
      'Offline functionality',
      'Location-based services',
      'In-app purchases and subscriptions',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST APIs', 'GraphQL'],
  },
  'web-development': {
    description:
      'Build modern, responsive, and high-performing websites and web applications that turn visitors into customers and support business operations.',
    features: [
      'Responsive web development',
      'React frontend engineering',
      'CMS and ecommerce platforms',
      'Dashboard and portal development',
      'Performance optimization',
      'SEO-ready architecture',
      'API integrations',
      'Secure deployment',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'CMS', 'REST APIs', 'Cloud Hosting'],
  },
  'ai-solutions': {
    description:
      'Create practical AI systems that automate work, improve decisions, and help teams extract more value from data, documents, and workflows.',
    features: [
      'AI assistants',
      'Document intelligence',
      'Workflow automation',
      'Predictive insights',
      'Natural language search',
      'Data classification',
      'Model integration',
      'Human-in-the-loop review',
    ],
    technologies: ['OpenAI', 'Python', 'Vector Search', 'LangChain', 'APIs', 'Automation Tools', 'Analytics'],
  },
  'ui-ux-designing': {
    description:
      'Design clean, accessible, and conversion-focused interfaces that make digital products easier to understand, use, and scale.',
    features: [
      'User research',
      'Wireframes and prototypes',
      'Mobile and web UI design',
      'Design systems',
      'User journey mapping',
      'Usability testing',
      'Responsive layouts',
      'Developer handoff',
    ],
    technologies: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping', 'User Testing', 'Accessibility', 'Tailwind CSS'],
  },
  'saas-development': {
    description:
      'Launch scalable SaaS platforms with secure user roles, subscription workflows, dashboards, integrations, and reliable product architecture.',
    features: [
      'SaaS product architecture',
      'Role-based dashboards',
      'Subscription workflows',
      'Admin panels',
      'Multi-tenant systems',
      'Billing integrations',
      'Analytics and reporting',
      'API integrations',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'REST APIs', 'Cloud Hosting', 'Docker'],
  },
  'cloud-devops': {
    description:
      'Deploy and operate products with stable cloud infrastructure, automated pipelines, monitoring, backups, and secure release processes.',
    features: [
      'Cloud architecture',
      'CI/CD pipelines',
      'Docker and containers',
      'Monitoring and alerts',
      'Backup strategy',
      'Server optimization',
      'Security hardening',
      'Release automation',
    ],
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Linux', 'Monitoring', 'CI/CD'],
  },
}

const benefits = [
  ['team', 'Expert Team', 'Work with experienced professionals who are experts in their field.'],
  ['check', 'Quality Assured', 'Rigorous testing and quality control ensure flawless deliverables.'],
  ['clock', 'On-Time Delivery', 'Clear milestones and disciplined delivery keep your project moving.'],
  ['shield', 'Ongoing Support', 'Continuous support and maintenance after project completion.'],
]

const icons = {
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5zm10-1a3 3 0 1 0 0-6m-2 13h5v-1c0-2-1.4-3.5-3.6-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v6l4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M12 3l7 3v5c0 4.6-2.8 8.7-7 10-4.2-1.3-7-5.4-7-10V6l7-3z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

const ServiceDetail = ({ service }) => {
  if (!service) {
    return (
      <section className="mx-auto w-[min(1160px,calc(100%-36px))] py-20">
        <p className="mb-4 text-xs font-black uppercase text-[#0d5790]">Service not found</p>
        <h1 className="mb-6 text-5xl font-black text-[#06172b]">This DF service page does not exist.</h1>
        <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#082443] to-[#0d5790] px-6 font-black text-white" href="#/services">Back to Services</a>
      </section>
    )
  }

  const detail = detailContent[service.slug] || {
    description: service.summary,
    features: service.capabilities,
    technologies: ['React', 'APIs', 'Cloud', 'Analytics'],
  }
  const relatedProjects = portfolioProjects.filter((project) => project.serviceSlug === service.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b] py-24 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,185,223,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(18,145,111,0.16),transparent_28%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,transparent_0%,transparent_45%,rgba(255,255,255,0.22)_46%,transparent_48%),radial-gradient(circle_at_20%_40%,white_1px,transparent_2px),radial-gradient(circle_at_70%_30%,white_1px,transparent_2px)] [background-size:260px_180px,90px_90px,120px_120px]" />
        <div className="relative mx-auto w-[min(980px,calc(100%-36px))]">
          <h1 className="mb-6 text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-none">{service.title}</h1>
          <p className="mx-auto max-w-4xl text-xl leading-9 text-[#c7e5f8]">{detail.description}</p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <h2 className="mb-10 text-center text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {detail.features.map((feature) => (
            <article className="group grid min-h-[100px] grid-cols-[42px_1fr] items-center gap-4 rounded-xl border-2 border-[#d7e5f2] bg-white p-6 shadow-[0_12px_28px_rgba(6,23,43,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_18px_42px_rgba(8,36,67,0.12)]" key={feature}>
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">{icons.check}</span>
              <p className="m-0 font-bold leading-6 text-[#27445f]">{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16 text-center">
        <div className="mx-auto w-[min(980px,calc(100%-36px))]">
          <h2 className="mb-8 text-[clamp(2rem,4vw,3.2rem)] font-black text-[#06172b]">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {detail.technologies.map((technology) => (
              <span className="rounded-md border-2 border-[#c8d3df] bg-white px-5 py-2 text-sm font-black text-[#697386]" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16">
        <div className="mx-auto w-[min(1080px,calc(100%-36px))]">
          <h2 className="mb-10 text-center text-[clamp(2rem,4vw,3.2rem)] font-black text-[#06172b]">Related Projects</h2>
          {relatedProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <article className="group flex flex-col overflow-hidden rounded-xl border-2 border-[#d7e5f2] bg-white p-5 shadow-[0_12px_28px_rgba(6,23,43,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_18px_42px_rgba(8,36,67,0.12)]" key={project.title}>
                  {project.preview && (
                    <img
                      className="mb-5 h-44 w-full rounded-lg object-cover object-center"
                      src={project.preview}
                      alt={`${project.title} interface preview`}
                    />
                  )}
                  <span className="text-xs font-black uppercase text-[#0d5790]">{project.category}</span>
                  <h3 className="my-3 text-xl font-black text-[#06172b]">{project.title}</h3>
                  <p className="line-clamp-3 leading-6 text-[#697386]">{project.description}</p>
                  <a
                    className="mt-auto pt-5 font-black text-[#082443] transition group-hover:text-[#FF9F00]"
                    href={project.url || '#/contact'}
                    target={project.url ? '_blank' : undefined}
                    rel={project.url ? 'noreferrer' : undefined}
                  >
                    View More
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-[#697386]">No Projects Yet</p>
          )}
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16">
        <div className="mx-auto w-[min(1080px,calc(100%-36px))]">
          <h2 className="mb-10 text-center text-[clamp(2rem,4vw,3.2rem)] font-black text-[#06172b]">Benefits You'll Get</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([icon, title, text]) => (
              <article className="group rounded-xl border-2 border-[#d7e5f2] bg-white px-6 py-8 text-center shadow-[0_12px_28px_rgba(6,23,43,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_18px_42px_rgba(8,36,67,0.12)]" key={title}>
                <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">{icons[icon]}</span>
                <h3 className="mb-3 font-black text-[#06172b]">{title}</h3>
                <p className="leading-6 text-[#697386]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06172b] px-5 py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(56,185,223,0.18),transparent_32%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(820px,100%)]">
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-black">Ready to Start Your Project?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-[#c7e5f8]">
            Let's discuss your requirements and create a powerful {service.title.toLowerCase()} solution for your business.
          </p>
          <a className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-7 font-black text-[#06172b]" href="#/contact">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
