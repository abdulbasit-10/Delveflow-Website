// ===== IMPORTS =====
import React, { useState } from 'react'
import web_icon from '../assets/webdevelopment.png'
import AI_icon from '../assets/AI_icon.png'
import UI_icon from '../assets/uiux.svg'
import SAAS_icon from '../assets/saas.png'
import Team_icon from "../assets/team_icon.png"
import Delivery_icon from "../assets/delivery.png"
import Quality_icon from "../assets/quality.png"
import Support_icon from "../assets/support.png"
import Discovery_icon from "../assets/discovery.png"
import Planning_icon from "../assets/planning.png"


// ===== REASONS DATA (for Why Choose Us) =====
const whyChooseReasons = [
  ['shield', 'Expert Development Team', 'Work with battle-tested professionals who bring years of proven industry experience in web development, mobile apps, AI, and modern software architecture.'],
  ['bolt', 'Lightning-Fast Project Delivery', 'Our agile process ensures fast delivery, helping you launch sooner and stay ahead of the competition.'],
  ['users', 'Uncompromising Quality Standards', 'Every product is thoroughly tested, secured, and optimized for maximum performance and reliability.'],
  ['trend', '24/7 Reliable Support', 'Enjoy peace of mind with our dedicated support team available around the clock for maintenance, updates, troubleshooting, and continuous improvements.  '],
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

// ===== ICONS (for Why Choose Us) =====
const whyChooseIcons = {
  shield: (
    <img 
  src= {Team_icon} 
  alt="icon description" 
  className="h-11 w-11"
/>
  ),
  bolt: (
    <img 
  src= {Delivery_icon} 
  alt="icon description" 
  className="h-11 w-11"
/>
  ),
  users: (
    <img 
  src= {Quality_icon} 
  alt="icon description" 
  className="h-11 w-11"
/>
  ),
  trend: (
     <img 
  src= {Support_icon} 
  alt="icon description" 
  className="h-11 w-11"
/>
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
    
<img 
  src={web_icon} 
  alt="icon description" 
  className="h-8 w-8"
/>
  ),
  'ai-solutions': (
    <img 
  src={AI_icon} 
  alt="icon description" 
  className="h-8 w-8"
/>
  ),
  'ui-ux': (
    <img 
  src={UI_icon} 
  alt="icon description" 
  className="h-8 w-8"
/>
  ),
  'saas': (
    <img 
  src={SAAS_icon} 
  alt="icon description" 
  className="h-8 w-8"
/>
  ),
  'cloud': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M6 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c.3-2.8 2.7-5 5.5-5 2.6 0 4.8 1.7 5.5 4.2C18.2 7.8 20 9.7 20 12c0 2.2-1.8 4-4 4H6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ===== RECENT PROJECTS DATA =====
const projects = [
  {
    title: 'Trading App',
    description:
      'A sleek, real-time trading platform built for speed and intelligence. Traders get live market data, smart analytics, and seamless execution empowering smarter decisions and higher profits.',
    image: null,
  },
  {
    title: 'Profit Pal',
    description:
      'An intelligent financial companion that helps businesses and individuals track expenses, forecast profits, and optimize cash flow with AI-powered insights and clean dashboards.',
    image: null,
  },
  {
    title: 'Gym Management System',
    description:
      'Complete all-in-one solution for fitness centers. From member management and attendance tracking to payment automation and workout analytics making gym operations effortless and profitable.',
    image: null,
  },
  {
    title: 'Study Studio',
    description:
      'A modern learning management platform designed for educational institutes and students. Interactive classes, progress tracking, assignments, and performance analytics all in one beautiful interface.',
    image: null,
  },
]

// ===== PROJECT CARD COMPONENT =====
const ProjectCard = ({ project }) => (
  <div className="rounded-xl border border-[#e3e7ee] bg-[#F5F5F4] p-6">
    <h3 className="text-center text-[17px] font-bold text-[#06172b]">
      {project.title}
    </h3>
    <p className="mx-auto mt-3 max-w-md text-center text-[13px] leading-6 text-[#575757]">
      {project.description}
    </p>

    <div className="mt-5 rounded-lg bg-gradient-to-br from-[#0b3b7b] to-[#d4bb15] p-[2px]">
      <div
        className="h-44 w-full rounded-[7px] sm:h-48"
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
            className="h-full w-full rounded-[7px] object-cover"
          />
        )}
      </div>
    </div>
  </div>
)

// ===== HOW WE WORK DATA =====
const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your world, uncovering hidden challenges, ambitious goals, user needs, and market opportunities before building anything.',
    bullets: [
      'Business goals & core challenges',
      'In-depth user & competitor research',
      'Technical audit & strategic roadmap',
    ],
    icon: 'search',
    side: 'left',
  },
  {
    number: '02',
    title: 'Planning & Intelligent Design',
    description:
      'We turn insights into crystal-clear plans, crafting intuitive user journeys, robust architecture, and a delivery roadmap that sets you up for success.',
    bullets: [
      'User-centric UX flows & wireframes',
      'Scalable system architecture',
      'Realistic timelines & agile sprint plans',
    ],
    icon: 'compass',
side: 'right',
  },
  {
    number: '03',
    title: 'Agile Development & Rigorous Testing',
    description:
      'We work fast, iterate smarter, and hold ourselves to the highest standards, including clean code, frequent reviews, and rigorous testing to keep you in the lead every step of the way. Expert Frontend & Backend Development.',
    bullets: [
      'Continuous Quality Assurance & Security Testing',
      'Performance Optimization at every stage',
    ],
    icon: 'code',
    side: 'left',
  },
  {
    number: '04',
    title: 'Successful Launch & Continuous Growth',
    description:
      "We ensure a smooth launch, proactive monitoring, and ongoing optimization so your product doesn't just go live, it thrives, scales, and evolves with your business.",
    bullets: [
      'Professional Deployment & Go-Live Support',
      'Real-time Monitoring & Analytics',
      'Post-Launch Optimization & Dedicated Support',
    ],
    icon: 'rocket',
    side: 'right',
  },
]

// ===== HOW WE WORK ICONS =====
const howWeWorkIcons = {
  search: (
    <img 
  src= {Discovery_icon} 
  alt="icon description" 
  className="h-15 w-15 object-contain"
/>
  ),
  compass: (
    <img 
  src= {Planning_icon} 
  alt="icon description" 
  className="h-15 w-15 object-contain"
/>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M8.5 8L4 12l4.5 4M15.5 8L20 12l-4.5 4M13.5 5l-3 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M13.5 3.5c2.5 1 4 3.6 4 6.8 0 2-1 4.3-2.6 5.9l-2 2-2-2c-1.6-1.6-2.6-3.9-2.6-5.9 0-3.2 1.5-5.8 4-6.8l.6-.2.6.2z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
      />
      <circle cx="13.4" cy="9.6" r="1.3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
}

// ===== HOW WE WORK COMPONENTS =====
// UPDATED: Chevron icon on LEFT side (before the text)
const ChevronBullet = ({ children }) => (
  <li className="flex items-start gap-2 border-t border-white/10 py-2.5 text-[13px] text-[#dbe4ee] first:border-t-0">
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#38B9DF]">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>{children}</span>
  </li>
)

// UPDATED: Removed overflow-hidden, added hover effects, adjusted number position
const StepCard = ({ step }) => (
  <div className="relative w-full max-w-md rounded-xl bg-[#0b3765] px-6 pb-5 pt-6 shadow-[0_20px_45px_rgba(6,23,43,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(6,23,43,0.35)]">
    <h3 className="text-[16px] font-bold text-white">{step.title}</h3>
    <p className="mt-2 text-[13px] leading-6 text-[#c7d5e5]">{step.description}</p>
    <ul className="mt-3">
      {step.bullets.map((b) => (
        <ChevronBullet key={b}>{b}</ChevronBullet>
      ))}
    </ul>
    <span
      className="pointer-events-none absolute -bottom-2 right-4 select-none bg-gradient-to-b from-[#d9c24a] to-[#8a9440] bg-clip-text font-serif text-5xl font-black leading-none text-transparent opacity-90"
      aria-hidden="true"
    >
      {step.number}
    </span>
  </div>
)

// ===== TESTIMONIALS DATA =====
const testimonials = [
  {
    id: 1,
    name: 'Mr. Kamran,',
    role: 'Founder, Trading App',
    quote:
      '"Delve Flow transformed our vision into a high-performance trading app that exceeded all expectations. The real-time features and smooth UI have significantly improved user engagement. Professional team, timely delivery, and outstanding support!"',
    rating: 5,
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  },
  {
    id: 2,
    name: 'Sarah Mitchell,',
    role: 'CEO, RetailPro',
    quote:
      '"Working with DelveFlow was seamless from start to finish. They understood our business goals immediately and delivered a platform that our customers genuinely love using every day."',
    rating: 5,
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
  },
  {
    id: 3,
    name: 'Ahmed Raza,',
    role: 'Founder, LogiTrack',
    quote:
      '"The team went above and beyond to make sure every detail was right. Communication was clear throughout, and the final product exceeded what we imagined possible."',
    rating: 5,
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
  },
]

// ===== TESTIMONIALS COMPONENT =====
const StarIcon = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-[#f2c14e]" aria-hidden="true">
    <path d="M10 1.5l2.6 5.4 5.9.7-4.4 4.1 1.2 5.8L10 14.6l-5.3 2.9 1.2-5.8L1.5 7.6l5.9-.7L10 1.5z" />
  </svg>
)

const TestimonialSection = () => {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 md:px-12 lg:px-20">
      {/* decorative dashed ring, top-left */}
      <svg
        className="pointer-events-none absolute -left-16 top-6 h-56 w-56 text-[#0e2547]/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeDasharray="4 6" />
      </svg>

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-block border-b-2 border-[#12203f] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#12203f]">
          Testimonial
        </div>

        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold leading-tight text-[#111111]">
          Real Stories. Real Results.
          <br />
          <span className="text-[#374767]">Rea</span>
          <span className="bg-gradient-to-r from-[#8a9a3c] to-[#f2c14e] bg-clip-text text-transparent">l </span>

          <span className="bg-gradient-to-r from-[#8a9a3c] to-[#f2c14e] bg-clip-text text-transparent">
            Trust.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[13.5px] leading-relaxed text-[#5b5b5b]">
          Don't just take our word for it hear from the businesses and founders
          who have experienced the Delve Flow difference.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto mt-14 flex max-w-4xl items-stretch gap-6">
        {/* Photo stack */}
        <div className="flex flex-col gap-4">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`h-[84px] w-[84px] overflow-hidden rounded-xl border-2 transition ${
                i === active
                  ? 'border-[#3fc6e0] ring-2 ring-[#3fc6e0]/40'
                  : 'border-transparent opacity-90 hover:opacity-100'
              }`}
              aria-label={`Show testimonial from ${t.name}`}
            >
              <img 
                src={t.photo} 
                alt={t.name} 
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Quote card */}
        <div className="relative flex-1 rounded-2xl bg-gradient-to-br from-[#eaf4ff] via-[#eef3fb] to-[#fdf6e3] p-[1.5px]">
          <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fc] to-[#fbf6e6] px-9 py-8">
            {/* decorative quote mark */}
            <span className="pointer-events-none absolute right-6 top-2 select-none font-serif text-[110px] leading-none text-[#0e2547]/10">
              "
            </span>

            <p className="relative z-10 max-w-[420px] text-[15px] leading-relaxed text-[#33363f]">
              {current.quote}
            </p>

            <div className="relative z-10 mt-8 flex items-end justify-between border-t border-dashed border-[#c9cfdb] pt-5">
              <div>
                <div className="font-serif text-[15px] font-bold text-[#111111]">
                  {current.name}
                </div>
                <div className="mt-0.5 text-[12.5px] text-[#8a8a8a]">{current.role}</div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== CTA SECTION =====
const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,107,223,0.08),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(255,197,92,0.10),transparent_45%)]" />

      <div className="relative mx-auto w-[min(1000px,calc(100%-36px))]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#0b3765]/25 bg-white px-6 py-14 sm:px-14">
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#FFE459] opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#38B9DF] opacity-30 blur-3xl" />
          <div
            className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 opacity-50"
            style={{
              backgroundImage: 'radial-gradient(#b9c6d6 1.4px, transparent 1.4px)',
              backgroundSize: '14px 14px',
            }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-black leading-snug text-[#06172b]">
              Ready to Turn Your Ideas Into
              <br />
              <span className="text-[#093B7A]">Powerful</span>{' '}
              <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
                Digital Products?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[14px] leading-6 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi
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
          </div>
        </div>
      </div>
    </section>
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
              <span className="text-[#0d3b66]">Real Business </span>
<span className="bg-gradient-to-r from-[#8a9a3c] to-[#e2ca26] bg-clip-text text-transparent">
  Growth
</span>
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
                  <span className="transition-transform duration-300 group-hover:-translate-y-1 inline-block">
                    →
                  </span>
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

      {/* WHY CHOOSE US SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* soft color tints, same gradient family as hero */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,197,92,0.16),transparent_45%),radial-gradient(circle_at_5%_95%,rgba(56,107,223,0.10),transparent_40%)]" />

        <div className="relative mx-auto w-[min(1180px,calc(100%-36px))] py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-black leading-tight text-[#0a0a0a]">
              Why Businesses Choose{' '}
              <span className="text-[#0b3b7b]">Delve</span>{' '}
              <span className="bg-gradient-to-r from-[#87923c] to-[#d5b914] bg-clip-text text-transparent">
                Flow
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#333333]">
              Where Technical Mastery Meets Real Business Impact. We don't just
              build technology, we craft smart, scalable digital solutions that
              solve real problems, accelerate growth, and give you a
              competitive edge in today's fast-moving market.
            </p>
          </div>

           <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {whyChooseReasons.map(([icon, title, description]) => (
    <div
      key={title}
      className="rounded-br-[140px] bg-gradient-to-r from-[#b5e4f3] via-[#b5e4f3] via-40% to-[#f5e6b8] to-60% p-[2px] min-h-[240px]"
    >
      <div className="h-full w-full rounded-br-[140px] bg-white px-6 py-8">
        <div className="mb-5 grid h-14 w-14 place-items-center  text-[#38B9DF]">
          {whyChooseIcons[icon]}
        </div>
        <h3 className="text-[17px] font-bold leading-snug text-[#06172b]">
          {title}
        </h3>
        <p className="mt-3 text-[14px] leading-6 text-[#333333]">
          {description}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="relative overflow-hidden bg-white py-0">
        <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
              How We Work
            </p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,1.3rem)] font-black leading-snug text-[#0a0a0a]">
  <span className="text-[#0b3b7b]">D</span>
<span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
  elve
</span> Deep into Your Challenges{' '}
  <span className="text-[#0b3b7b]">F</span>
<span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
  low
</span>
  <br />
  Seamlessly with Powerful Solutions.
</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#404040]">
              At Delve Flow, we follow a clear, collaborative, and
              results-focused process designed to eliminate guesswork and
              deliver exceptional digital products that drive real business
              growth.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#38B9DF] via-[#38B9DF]/40 to-[#38B9DF] md:block" />

            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-start gap-16 ${
                    step.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${step.side === 'right' ? 'md:flex md:justify-end' : 'md:flex md:justify-start'}`}>
                    <StepCard step={step} />
                  </div>

                  <div className="relative z-10 hidden shrink-0 md:block">
                    <div className="grid h-21 w-21 place-items-center  ">
                      {howWeWorkIcons[step.icon]}
                    </div>
                  </div>

                  <div className="flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS SECTION */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,197,92,0.16),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(56,107,223,0.10),transparent_40%)]" />

        <div className="relative mx-auto w-[min(1000px,calc(100%-36px))]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
              Recent Projects
            </p>
            <h2 className="font-serif text-[clamp(1.5rem,2.8vw,1.9rem)] px-24 font-black leading-snug text-[#0a0a0a]">
              <span className="text-[#0b3b7b]">D</span>
              <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
                elve
              </span>{' '}
              into Innovation.{' '}
              <span className="text-[#0b3b7b]">F</span>
              <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
                low
              </span>{' '}
              with Real Results.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-[#717272]">
              We craft powerful digital solutions that solve real problems and
              deliver measurable success. Here are some of our latest
              standout projects.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#/projects"
              className="inline-flex items-center gap-3 rounded-full bg-[#001530] py-1.5 pl-6 pr-1.5 text-[15px] font-bold text-white transition hover:bg-[#062142]"
            >
              View All Projects
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

      {/* TESTIMONIALS SECTION */}
      <TestimonialSection />

      {/* CTA SECTION - AT THE VERY END */}
      <CtaSection />
    </>
  )
}

export { CtaSection }
export default Home