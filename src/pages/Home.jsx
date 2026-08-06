// ===== IMPORTS =====
import React, { useState, useEffect, useRef } from 'react'
import web_icon from '../assets/webdevelopment.png'
import AI_icon from '../assets/icon-robot.png'
import UI_icon from '../assets/uiux.svg'
import SAAS_icon from '../assets/saas.png'
import Team_icon from "../assets/team_icon.png"
import Delivery_icon from "../assets/delivery.png"
import Quality_icon from "../assets/quality.png"
import Support_icon from "../assets/support.png"
import Bg_icon from "../assets/testibg.png"
import Client1 from "../assets/client1.png"
import Client2 from "../assets/client2.png"
import Client3 from "../assets/client3.png"
import topRightImage from "../assets/topright.png"
import topLeftImage from "../assets/left.png"
import OurProcess from '../Components/OurProcess'
import Phone_Icon from "../assets/smartphone.png"
import Rebot_Icon from "../assets/AI_icon.png"
import Cloud_Icon from "../assets/Cloud Icon.png"


// ===== REASONS DATA (for Why Choose Us) =====
const whyChooseReasons = [
  ['shield', 'Expert Development Team', 'Work with battle-tested professionals who bring years of proven industry experience in web development, mobile apps, AI, and modern software architecture.'],
  ['bolt', 'Lightning-Fast Project Delivery', 'Our agile process ensures fast delivery, helping you launch sooner and stay ahead of the competition.'],
  ['users', 'Uncompromising Quality Standards', 'Every product is thoroughly tested, secured, and optimized for maximum performance and reliability.'],
  ['trend', '24/7 Reliable Support', 'Enjoy peace of mind with our dedicated support team available around the clock for maintenance, updates, troubleshooting, and continuous improvements.  '],
]

// ===== HERO STATS (for the hero section) =====
const heroStats = [
  { value: '15', suffix: ' +', suffixColor: '#38B9DF', label: 'High-Impact Projects' },
  { value: '2', suffix: ' +', suffixColor: '#38B9DF', label: 'Years of Experience' },
  { value: '20', suffix: ' +', suffixColor: '#38B9DF', label: 'Satisfied Clients worldwide' },
  { value: '100', suffix: ' %', suffixColor: '#38B9DF', label: 'Client Satisfaction Rate' },
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
    
    <img 
  src={Phone_Icon} 
  alt="icon description" 
  className="h-8 w-8"
   
/>
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
  src={Rebot_Icon} 
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
    <img 
  src={Cloud_Icon} 
  alt="icon description" 
  className="h-8 w-8"
   
/>  
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

// ===== TESTIMONIALS DATA =====
const testimonials = [
  {
    name: 'Saliha Noor',
    role: 'Founder, NovaTech Solutions',
    photo: Client1,
    quote:
      'Delve Flow transformed our vision into a high-performance trading app that exceeded all expectations. The real-time features and smooth UI have significantly improved user engagement. Professional team, timely delivery, and outstanding support!',
    rating: 5,
  },
  {
    name: 'Malaika Javed',
    role: 'CEO, Profit Pal',
    photo: Client2,
    quote:
      'Working with Delve Flow was seamless from start to finish. They understood our business goals immediately and delivered a product that our users genuinely love. Communication was clear throughout the entire process.',
    rating: 5,
  },
  {
    name: 'Bilal Hassan',
    role: 'Operations Lead, Gym Management System',
    photo: Client3,
    quote:
      'The team at Delve Flow rebuilt our entire booking and payments workflow. It is faster, more reliable, and our staff finds it far easier to use day to day. Highly recommend them for any serious digital project.',
    rating: 5,
  },
]


const AUTO_SLIDE_INTERVAL = 4000

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill={i < rating ? '#FFE459' : 'none'}
        stroke="#FFE459"
        strokeWidth="1.5"
      >
        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.6l-5.8 3-1.1-6.5-4.8-4.6 6.6-.9L12 2.5z" strokeLinejoin="round" />
      </svg>
    ))}
  </div>
)

const TestimonialSection = () => {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)
  const current = testimonials[active]

  const goToNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(goToNext, AUTO_SLIDE_INTERVAL)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleManualSelect = (index) => {
    setActive(index)
    startTimer()
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(56,107,223,0.07),transparent_45%),radial-gradient(circle_at_90%_85%,rgba(255,197,92,0.10),transparent_45%)]" />

      {/* Fixed height container - increased min height */}
      <div className="relative mx-auto max-w-5xl min-h-[500px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            Testimonial
          </p>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.3rem)] font-black leading-snug text-[#0a0a0a]">
            Real Stories. Real Results.
            <br />
            <span className="text-[#0b3b7b]">Real</span>{' '}
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              Trust.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-[#404040]">
            Don't just take our word for it, hear from the businesses and
            founders who have experienced the Delve Flow difference.
          </p>
        </div>

        {/* Fixed height row */}
        <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:items-stretch h-[320px] sm:h-[280px]">
          
          {/* Photo Stack - Fixed height */}
          <div className="flex shrink-0 flex-row gap-4 sm:flex-col sm:justify-center h-[80px] sm:h-[260px]">
            {testimonials.map((t, index) => {
              const isActive = index === active
              return (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => handleManualSelect(index)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className={`shrink-0 overflow-hidden rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'h-20 w-20 sm:h-28 sm:w-28 border-2 border-transparent bg-gradient-to-br from-[#38B9DF] to-[#d4bb15] p-[3px] shadow-[0_10px_25px_rgba(56,185,223,0.3)]'
                      : 'h-14 w-14 sm:h-20 sm:w-20 border border-[#e3e7ee] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    className={`h-full w-full object-cover ${isActive ? 'rounded-[11px]' : 'rounded-2xl'}`}
                  />
                </button>
              )
            })}
          </div>

          {/* Quote Card - Fixed height with overflow handling */}
          <div className="relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#38B9DF] via-[#38B9DF]/30 to-[#d4bb15] p-[2px] h-[220px] sm:h-[280px]">
            <div className="h-full w-full overflow-y-auto rounded-2xl bg-gradient-to-br from-[#f8fcf9] to-[#eef4fb] px-5 py-6 sm:px-9 sm:py-8">
              <div className="pointer-events-none absolute right-6 top-2 select-none font-serif text-[80px] sm:text-[110px] leading-none text-[#0e2547]/10">
                "
              </div>

              <p className="relative max-w-xl text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-[#333333] pr-4">
                "{current.quote}"
              </p>

              <div className="mt-4 sm:mt-6 flex items-end justify-between gap-4 border-t border-dashed border-[#d7e5f2] pt-4 sm:pt-5">
                <div>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[#06172b]">{current.name}</p>
                  <p className="text-[12px] sm:text-[13px] text-[#6b7280]">{current.role}</p>
                </div>
                <StarRating rating={current.rating} />
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
    <section className="relative overflow-hidden bg-white py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,107,223,0.08),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(255,197,92,0.10),transparent_45%)]" />

      <div className="relative mx-auto w-[min(1000px,calc(100%-36px))]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#0b3765]/25 bg-white px-6 py-10 sm:px-14">
          
          {/* TOP-RIGHT IMAGE - Use topRightImage */}
          <img
            src={topRightImage}  
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-4 h-40 w-40 object-contain opacity-299 mt-15"
          />

          {/* BOTTOM-LEFT IMAGE - Use topLeftImage */}
          <img
            src={topLeftImage}   
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 -top-1 h-40 w-40 object-contain opacity-299"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(1.4rem,3vw,2rem)] font-black leading-snug text-[#06172b]">
              Ready to Turn Your Ideas Into
              <br />
              <span className="text-[#093B7A]">Powerful</span>{' '}
              <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
                Digital Products?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
  href="#/services"
  className="relative inline-flex items-center rounded-full bg-[#001530] py-2.5 pl-5 pr-11 text-[16px] font-medium text-white transition hover:bg-[#062142]"
>
  <span className="font-serif tracking-wide">Get Started</span>
  <span className="absolute -right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#ffde59] text-[#001530] shadow-sm">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="#001530"
        strokeWidth="2.5"
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
          <h1 className="mx-auto max-w-3xl  text-[clamp(2.1rem,3.4vw,2.9rem)] font-medium leading-[1.15] text-[#171717] tracking-wide">
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-9">
            <a
  href="/contact"
  className="relative inline-flex items-center rounded-full bg-[#001530] py-2.5 pl-5 pr-10 text-[15px] font-medium text-white transition hover:bg-[#062142]"
>
  <span className="tracking-wide">Get Started</span>
  <span className="absolute -right-2.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#FFE459] text-[#001530] shadow-sm">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="#001530"
        strokeWidth="2.5"
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
                <p className="text-[13px] font-[DM_Serif_Display] text-black">
                  {stat.label}
                </p>
                  <p className="mt-2 font-[DM_Serif_Display]  text-4xl font-black text-[#001530]">
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
            <p className="text-sm font-['DM_Serif_Text'] text-5xl font-bold uppercase tracking-wider text-[#0d5790] mb-3">
              Our Services
            </p>
            <h2 className="mx-auto max-w-4xl font-serif text-[clamp(2rem,2.5vw,3.6rem)] font-medium leading-[1.2] text-[#171717] tracking-wide">
              Custom Digital Solutions That Drive
              <br />
              <span className="bg-gradient-to-r from-[#0d3b66] via-[#8a9a3c] to-[#e2ca26] bg-clip-text text-transparent">
  Real Business Growth
</span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-[#5c6f84] leading-relaxed mt-4">
              At Delve Flow, we deliver powerful, results-driven technology services to help startups and established businesses launch faster, scale smarter, automate operations, and dominate their market.
            </p>
          </div>

          {/* Services Grid - 3 columns */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group rounded-[20px] border border-[#e8edf2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:bg-[#0b3765] hover:shadow-[0_18px_40px_rgba(8,36,67,0.10)]"
              >
                {/* Icon - Changes to white on hover */}
                <div className="mb-3 inline-block rounded-xl bg-[#f0f7ff] p-2.5 text-[#0b3765] transition-colors group-hover:bg-white/20 group-hover:text-white">
                  {serviceIcons[service.id]}
                </div>

                {/* Title - Changes to white on hover */}
                <h3 className="mb-2 text-[18px] font-semibold text-[#06172b] transition-colors group-hover:text-white">
                  {service.title}
                </h3>

                {/* Description - Changes to white on hover */}
                <p className="mb-4 text-[13.5px] leading-6 text-[#5c6f84] transition-colors group-hover:text-white/90">
                  {service.description}
                </p>

                {/* Features List - Changes to white on hover */}
                <ul className="mb-4 space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#333333] transition-colors group-hover:text-white/90">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38B9DF] transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link - Changes to white on hover */}
                <a
                  href="#/contact"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0b3765] transition-all group-hover:gap-3 group-hover:text-white"
                >
                  {service.cta}
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
             <a
  href="/services"
  className="relative inline-flex items-center rounded-full bg-[#001530] py-2.5 pl-5 pr-10 text-[15px] font-medium text-white transition hover:bg-[#062142]"
>
  <span className="tracking-wide">Explore Our Services</span>
  <span className="absolute -right-2.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#FFE459] text-[#001530] shadow-sm">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="#001530"
        strokeWidth="2.5"
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
            <h2 className="font-['DM_Serif_Text'] text-[clamp(1.8rem,1.4vw,2.6rem)] font-black leading-tight text-[#0a0a0a]">
              Why Businesses Choose{' '}
              <span className="bg-gradient-to-r from-[#0d3b66] via-[#8a9a3c] to-[#e2ca26] bg-clip-text text-transparent font-medium">
  Delve Flow
</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#333333]">
              Where Technical Mastery Meets Real Business Impact. We don't just
              build technology, we craft smart, scalable digital solutions that
              solve real problems, accelerate growth, and give you a
              competitive edge in today's fast-moving market.
            </p>
          </div>

           <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {whyChooseReasons.map(([icon, title, description]) => (
    <div
      key={title}
      className="min-h-[205px] rounded-br-[120px] bg-gradient-to-r from-[#b5e4f3] via-[#b5e4f3] via-40% to-[#f5e6b8] to-60% p-[2px]"
    >
      <div className="h-full w-full rounded-br-[120px] bg-white px-5 py-6">
        <div className="mb-4 grid h-12 w-12 place-items-center text-[#38B9DF]">
          {whyChooseIcons[icon]}
        </div>
        <h3 className="text-[16px] font-bold leading-snug text-[#06172b]">
          {title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-6 text-[#333333]">
          {description}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* OUR PROCESS SECTION - NEW */}
      <OurProcess />

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
  href="/projects"
  className="relative inline-flex items-center rounded-full bg-[#001530] py-2.5 pl-5 pr-10 text-[15px] font-medium text-white transition hover:bg-[#062142]"
>
  <span className="tracking-wide">View All Projects</span>
  <span className="absolute -right-2.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#FFE459] text-[#001530] shadow-sm">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="#001530"
        strokeWidth="2.5"
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