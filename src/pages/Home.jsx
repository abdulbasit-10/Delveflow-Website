// ===== IMPORTS =====
import React from 'react'

// ===== REASONS DATA =====
const reasons = [
  ['shield', 'Expert Team', 'Skilled professionals with years of industry experience'],
  ['bolt', 'Fast Delivery', 'Efficient processes ensure timely project completion'],
  ['users', 'Quality Assured', 'Rigorous testing and quality control standards'],
  ['trend', '24/7 Support', 'Dedicated support team always ready to help'],
]

// ===== HERO STATS (for the hero section) =====
const heroStats = [
  { value: '15', suffix: '+', suffixColor: '#38B9DF', label: 'High-Impact Projects' },
  { value: '2', suffix: '+', suffixColor: '#38B9DF', label: 'Years of Experience' },
  { value: '20', suffix: '+', suffixColor: '#38B9DF', label: 'Satisfied Clients worldwide' },
  { value: '100', suffix: '%', suffixColor: '#828282', label: 'Client Satisfaction Rate' },
]

// ===== TRACK STATS (for the track record panel) =====
const trackStats = [
  ['check', '15+', 'Projects Delivered', 'Successfully completed'],
  ['clock', '2+', 'Years Experience', 'In the industry'],
  ['globe', '20+', 'Global Clients', 'Across 20 countries'],
  ['badge', '100%', 'Client Satisfaction', 'And growing'],
]

// ===== ICONS =====
const icons = {
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M12 3l7 3v5c0 4.6-2.8 8.7-7 10-4.2-1.3-7-5.4-7-10V6l7-3z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M13 2L4 14h8l-1 8 9-13h-8l1-7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5zm10-1a3 3 0 1 0 0-6m-2 13h5v-1c0-2-1.4-3.5-3.6-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M4 17l6-6 4 4 7-8m0 0v6m0-6h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v6l4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M12 3l2.3 2 3-.1 1 2.8 2.4 1.8-1 2.9 1 2.9-2.4 1.8-1 2.8-3-.1-2.3 2-2.3-2-3 .1-1-2.8-2.4-1.8 1-2.9-1-2.9 2.4-1.8 1-2.8 3 .1L12 3z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 12l2.5 2.5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
}

// ===== SERVICE DATA =====
const servicesData = [
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Turn your idea into a high-performing mobile app that users love and businesses rely on.',
    features: [
      'Native iOS & Android App Development',
      'Cross-platform Apps (Flutter & React Native)',
      'Seamless App Store Launch & Optimization',
      'User Analytics & Retention Strategies'
    ],
    cta: 'Get Your App Built'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Build fast, modern, and conversion-focused websites and web applications that impress visitors and deliver results.',
    features: [
      'Custom Website Design & Development',
      'High-Performance Web Applications',
      'Ecommerce & CMS Solutions',
      'React.js & Modern Frontend Development',
      'SEO-Friendly & Lightning Fast Websites'
    ],
    cta: 'Launch Your Website Today'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Intelligent Automation',
    description: 'Unlock the power of AI to automate repetitive tasks, gain smarter insights, and stay ahead of competitors.',
    features: [
      'Custom AI Assistants & Chatbots',
      'Intelligent Document Processing',
      'End-to-End Workflow Automation',
      'Predictive Analytics & Business Intelligence'
    ],
    cta: 'Transform Your Workflow with AI'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Create stunning, intuitive, and user-centric designs that boost engagement, reduce bounce rates, and increase conversions.',
    features: [
      'In-Depth User Research & Testing',
      'Webflow & Prototyping',
      'User Testing & Usability Testing',
      'Scalable Design Systems',
      'Responsive & Mobile-First Interactions'
    ],
    cta: 'Design Experiences That Convert'
  },
  {
    id: 'saas',
    title: 'SaaS Product Development',
    description: 'Build scalable, secure, and feature-rich SaaS platforms ready to grow with your business.',
    features: [
      'End-to-End SaaS Development',
      'Rate-based Dashboards & Admin Panels',
      'Subscription Billing & Management',
      'Secure, Scalable Cloud Architecture',
      'Powerful API Integrations'
    ],
    cta: 'Build & Scale Your SaaS Faster'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions & DevOps',
    description: 'Deploy with confidence using modern infrastructure that ensures speed, security, and reliability.',
    features: [
      'Cloud Architecture & Migration (AWS, Azure, GCP)',
      'CI/CD Pipelines & Automated Deployment',
      'Docker, Kubernetes & Containerization',
      'Monitoring, Backups & Disaster Recovery'
    ],
    cta: 'Scale Confidently with Expert DevOps'
  }
]

// ===== SERVICE ICONS =====
const serviceIcons = {
  'mobile-app': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10.5 18h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M10 5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  'web-dev': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8M12 18v3M7 9l-2 2 2 2M17 9l2 2-2 2M14 8l-4 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  'ai-solutions': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <rect x="5" y="5" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 9h6v6H9zM2 9h3M2 15h3M19 9h3M19 15h3M9 2v3M15 2v3M9 19v3M15 19v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 15l2-6 2 6M10.8 13h2.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  ),
  'ui-ux': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8h8M8 12h5M8 16h3M17 13l-2 5 5-2-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  'saas': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 9h3v3H7zM14 9h3v3h-3zM7 15h10M8 21h8M12 18v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  'cloud': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M6 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c.3-2.8 2.7-5 5.5-5 2.6 0 4.8 1.7 5.5 4.2C18.2 7.8 20 9.7 20 12c0 2.2-1.8 4-4 4H6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ===== HOME COMPONENT =====
const Home = ({ services }) => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* soft color tints */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(56,107,223,0.12),transparent_45%),radial-gradient(circle_at_85%_55%,rgba(255,197,92,0.16),transparent_45%)]" />
        {/* dotted grid, bottom-left corner */}
        <div
          className="pointer-events-none absolute -left-4 -bottom-4 h-36 w-36 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(#b9c6d6 1.4px, transparent 1.4px)',
            backgroundSize: '14px 14px',
          }}
        />

        <div className="relative mx-auto w-[min(1180px,calc(100%-36px))] py-20 text-center">
          {/* heading styling */}
          <h1 className="mx-auto max-w-3xl font-serif text-[clamp(2.1rem,4.4vw,2.9rem)] font-medium leading-[1.15] text-[#171717] tracking-wide">
            <span className="text-[#0d3b66]">D</span>
            <span className="text-[#647c5d]">e</span>
            <span className="text-[#96a263]">l</span>
            <span className="text-[#d8ba43]">v</span>
            <span className="text-[#e2ca26]">e</span> into Problems.{' '}
            <span className="text-[#0d3b66]">F</span>
            <span className="text-[#647c5d]">l</span>
            <span className="text-[#96a263]">o</span>
            <span className="text-[#d8ba43]">w</span> with Powerful Digital Solutions.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] font-semibold leading-7 text-[#0b3765]">
            Your business faces real challenges. We deliver custom websites, AI
            automation, web development, and scalable digital solutions that
            drive growth and efficiency.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#333333]">
            At Delve Flow, we don't just build software. We listen deeply,
            research thoroughly, and engineer tailored solutions that perfectly
            fit your business needs. Whether you need a high-converting
            website, smart automation, or full digital transformation, our
            expert team turns complex problems into seamless results.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#001530] py-1.5 pl-6 pr-1.5 text-[15px] font-bold text-white transition hover:bg-[#062142]"
            >
              Get Started
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#FFE459]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#001530"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7e5f2] bg-white px-7 text-[15px] font-bold text-[#0a1b2f] transition hover:border-[#0b3765]"
            >
              Explore Our Services
            </a>
          </div>

          {/* HERO STATS - Using heroStats */}
          <div className="mx-auto mt-14 grid max-w-20xl grid-cols-2 gap-y-6 rounded-2xl bg-[#EEF1F4] px-6 py-8 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-[#c9dbe6]">
            {heroStats.map((stat) => (
              <div key={stat.label} className="px-4 text-center sm:px-6">
                <p className="text-[13px] font-semibold text-[#3f4c58]">
                  {stat.label}
                </p>
                <p className="mt-2 font-serif text-4xl font-black text-[#001530]">
                  {stat.value}
                  <span style={{ color: stat.suffixColor }}>{stat.suffix}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION - Card Grid Layout */}
      {/* OUR SERVICES SECTION - Card Grid Layout */}
<section className="py-20 bg-white">
  <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
    {/* Section Header */}
      <div className="mb-16 text-center">
  <p className="text-sm font-bold uppercase tracking-wider text-[#0d5790] mb-3">
    Our Services
  </p>
  <h2 className="mx-auto max-w-4xl font-serif text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.2] text-[#171717] tracking-wide">
    Custom Digital Solutions That Drive
    <br />
    <span className="text-[#0d3b66]">R</span>
    <span className="text-[#647c5d]">e</span>
    <span className="text-[#96a263]">a</span>
    <span className="text-[#d8ba43]">l</span>{' '}
    <span className="text-[#0d3b66]">B</span>
    <span className="text-[#647c5d]">u</span>
    <span className="text-[#96a263]">s</span>
    <span className="text-[#d8ba43]">i</span>
    <span className="text-[#e2ca26]">n</span>
    <span className="text-[#0d3b66]">e</span>
    <span className="text-[#647c5d]">s</span>{' '}
    <span className="text-[#0d3b66]">G</span>
    <span className="text-[#647c5d]">r</span>
    <span className="text-[#96a263]">o</span>
    <span className="text-[#d8ba43]">w</span>
    <span className="text-[#e2ca26]">t</span>
    <span className="text-[#0d3b66]">h</span>
  </h2>
  <p className="mx-auto max-w-3xl text-lg text-[#5c6f84] leading-relaxed mt-4">
    At Delve Flow, we deliver powerful, results-driven technology services to help startups and established businesses launch faster, scale smarter, automate operations, and dominate their market.
  </p>
</div>

    {/* Services Grid - 3 columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="group rounded-2xl border border-[#e8edf2] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0b3765] hover:border-[#0b3765] hover:shadow-[0_20px_60px_rgba(8,36,67,0.12)]"
        >
          {/* Icon - Changes to white on hover */}
          <div className="mb-4 inline-block rounded-xl bg-[#f0f7ff] p-3 text-[#0b3765] transition-colors group-hover:bg-white/20 group-hover:text-white">
            {serviceIcons[service.id]}
          </div>

          {/* Title - Changes to white on hover */}
          <h3 className="text-xl font-bold text-[#06172b] mb-3 transition-colors group-hover:text-white">
            {service.title}
          </h3>

          {/* Description - Changes to white on hover */}
          <p className="text-[#5c6f84] text-sm leading-relaxed mb-4 transition-colors group-hover:text-white/90">
            {service.description}
          </p>

          {/* Features List - Changes to white on hover */}
          <ul className="space-y-2 mb-5">
            {service.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#333333] transition-colors group-hover:text-white/90">
                <svg className="w-4 h-4 text-[#38B9DF] mt-0.5 flex-shrink-0 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Link - Changes to white on hover */}
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 text-[#0b3765] font-semibold text-sm transition-all group-hover:text-white group-hover:gap-3"
          >
            {service.cta}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
  <a
    href="#/services"
    className="inline-flex items-center gap-3 rounded-full bg-[#001530] py-1.5 pl-6 pr-1.5 text-[15px] font-bold text-white transition hover:bg-[#062142]"
  >
    Explore Our Services
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#FFE459]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="#001530"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>
</div>
  </div>
</section>

      {/* WHY CHOOSE DELVEFLOW SECTION */}
      <section className="bg-[#eef7ff] py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
          <div className="mb-14 scroll-mt-28 text-center">
            <h2 className="mb-4 text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight text-[#06172b]">Why Choose Delveflow</h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#27445f]">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-6">
              {reasons.map(([icon, title, text]) => (
                <article 
                  className="group grid grid-cols-[72px_1fr] items-center gap-5 rounded-lg border border-transparent p-3 transition duration-300 hover:-translate-y-1 hover:border-[#b9d8ed] hover:bg-white hover:shadow-[0_14px_34px_rgba(8,36,67,0.10)]" 
                  key={title}
                >
                  <span className="grid h-14 w-14 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] shadow-[0_12px_26px_rgba(8,36,67,0.12)] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                    {icons[icon]}
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-black text-[#06172b]">{title}</h3>
                    <p className="m-0 text-base leading-7 text-[#27445f]">{text}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* TRACK RECORD - Using trackStats */}
            <div className="rounded-2xl border border-[#cfe6f8] bg-white p-8 shadow-[0_18px_45px_rgba(6,23,43,0.14)] lg:p-10">
              <h3 className="mb-10 text-center text-2xl font-black text-[#0b3765]">Our Track Record</h3>
              <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {trackStats.map(([icon, value, label, note]) => (
                  <div className="group rounded-lg p-3 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#f7fbff]" key={label}>
                    <span className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[#f7fbff] text-[#0d5790] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                      {icons[icon]}
                    </span>
                    <strong className="block text-4xl font-black leading-none text-[#06172b]">{value}</strong>
                    <span className="mt-2 block font-black text-[#06172b]">{label}</span>
                    <small className="mt-2 block text-[#0d5790]">{note}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home