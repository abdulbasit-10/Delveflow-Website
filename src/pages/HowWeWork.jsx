import React from 'react'
import { CtaSection } from '../pages/Home.jsx'
import Career_hero_img from "../assets/howweworkhero.png"
import Yellow_circle from "../assets/Yellow_circle.png"
import { Search, ClipboardList, Headphones, ShieldCheck, Lightbulb } from 'lucide-react'
import { Pencil, Code2, Eye, Trophy } from 'lucide-react'


const HowWeWorkHero = ({
  badge = 'How We Work',
  title = 'From Deep Discovery to',
  boldPrefix = 'Successful ',
  gradientTitle = 'Delivery.',
  description = "Every successful digital product starts with understanding. Our DELVE → FLOW framework helps us uncover real business challenges, define the right strategy, and transform ideas into scalable, high-performing digital solutions.",
  primaryButtonText = 'Start Your Project',
  primaryButtonLink = '#/career/apply',
  secondaryButtonText = 'Contact Us',
  secondaryButtonLink = '#/contact',
  heroImage = Career_hero_img,
  accentImage = Yellow_circle,
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,107,223,0.10),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(255,197,92,0.10),transparent_45%)]" />
      <div
        className="pointer-events-none absolute -left-4 -bottom-4 h-36 w-36 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(#b9c6d6 1.4px, transparent 1.4px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b3765] px-4 py-1.5 text-[13px] font-black uppercase tracking-wide text-[#0b3765] lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0b3765]" />
              {badge}
            </span>

            <h1 className="font-serif text-[clamp(2.4rem,2vw,3.6rem)] font-black leading-[1.1] text-[#0a0a0a] font-medium">
              {title}
              <br />
              <span className="text-[#0b3b7b]">{boldPrefix}</span>
              <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
                {gradientTitle}
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-8 text-[#333333] lg:mx-0">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
  href={primaryButtonLink}
  className="relative inline-flex items-center rounded-full bg-[#001530] py-2.5 pl-6 pr-12 text-[16px] font-medium text-white transition hover:bg-[#062142]"
>
  <span className="font-serif tracking-wide">{primaryButtonText}</span>
  <span className="absolute -right-2 top-1/2 grid h-13 w-13 -translate-y-1/2 place-items-center rounded-full bg-[#ffde59] text-[#001530] shadow-sm">
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
                href={secondaryButtonLink}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7e5f2] bg-white px-7 text-[15px] font-bold text-[#0a1b2f] transition hover:border-[#0b3765]"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          <div className="relative">
            {accentImage && (
              <img
                src={accentImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-3 z-0 h-12 w-12 select-none"
              />
            )}

            <div className="relative overflow-hidden rounded-2xl border border-[#d7e5f2] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              {heroImage && (
                <img
                  src={heroImage}
                  alt="DelveFlow team at work"
                  className="h-[350px] w-full object-cover z-10"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We learn about your business, goals, users, and market landscape.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Evaluate',
    description: 'We analyze the current state, identify gaps and opportunities.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Listen',
    description: 'We listen to your needs, stakeholders, and customer pain points.',
    icon: Headphones,
  },
  {
    number: '04',
    title: 'Validate',
    description: 'We validate ideas through research, feasibility and prioritization.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Envision',
    description: 'We define the right solution, strategy and future roadmap.',
    icon: Lightbulb,
  },
]

const DelvePhaseSection = ({
  phaseLabel = 'Phase 01',
  titlePrefix = 'De',
  titleHighlight = 'lve',
  titleSuffix = ' We Understand',
  titleSecondLine = 'Before We Build',
  description = 'In the DELVE phase, we dive deep into your business, goals, and challenges. We ask the right questions, uncover insights, and create a clear roadmap.',
  footerText = 'Turning Insight Into Impact',
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Decorative dotted circle - top left, echoes hero section */}
      <div
        className="pointer-events-none absolute -left-4 -top-4 h-36 w-36 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(#b9c6d6 1.4px, transparent 1.4px)',
          backgroundSize: '14px 14px',
        }}
      />
      {/* Decorative gradient blobs - bottom, echoes hero section */}
      <div className="pointer-events-none absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,197,92,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(56,107,223,0.12),transparent_70%)]" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        {/* Header */}
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-black uppercase tracking-wide text-[#0b3765]">
            {phaseLabel}
          </span>

          <h2 className="mt-5 font-serif text-[clamp(1.9rem,2.2vw,1.6rem)] font-black leading-[1.25] text-[#0a0a0a] font-medium">
            <span className="text-[#0b3b7b]">{titlePrefix}</span>
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              {titleHighlight}
            </span>
            {titleSuffix}
            <br />
            {titleSecondLine}
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#333333]">
            {description}
          </p>
        </div>

        {/* Icon connector row */}
        <div className="mt-14 hidden items-center justify-center md:flex">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <React.Fragment key={step.number}>
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#FFE459] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                  <Icon size={24} strokeWidth={2.2} color="#001530" />
                </div>
                {index < steps.length - 1 && (
                  <div className="mx-2 flex flex-1 items-center">
                    <div className="h-[2px] w-full border-t-2 border-dashed border-[#c9d3de]" />
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="-ml-1 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="#0b3765"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Step cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
  key={step.number}
  className="relative overflow-hidden rounded-2xl border border-[#e3e9f0] bg-white p-5 shadow-[0_10px_30px_rgba(10,27,47,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,27,47,0.12)]"
>
  <div
    className="-mx-5 -mt-5 mb-4 flex h-24 w-28 items-start bg-gradient-to-br from-[#0b1f3f] to-[#001530] px-4 pt-3.5"
    style={{ borderRadius: '16px 0 90px 0' }}
  >
    <span className="font-serif text-[26px] font-black italic text-white">
      {step.number}
    </span>
  </div>
  <h3 className="font-serif text-[18px] font-black text-[#0a0a0a]">
    {step.title}
  </h3>
  <p className="mt-2 text-[13px] leading-6 text-[#5b6472]">
    {step.description}
  </p>
</div>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <span className="hidden h-[2px] w-24 bg-gradient-to-r from-transparent to-[#d4bb15] sm:block" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="hidden sm:block" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#d4bb15" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

           <span className="font-serif text-[19px] font-black bg-gradient-to-r from-[#FFD600] to-[#38B9DF] bg-clip-text text-transparent">
           {footerText}
          </span>

          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="hidden sm:block" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M11 18l-6-6 6-6" stroke="#0b3b7b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden h-[2px] w-24 bg-gradient-to-l from-transparent to-[#0b3b7b] sm:block" />
        </div>
      </div>
    </section>
  )
}



const steps2 = [
  {
    number: '01',
    title: 'Frame',
    description: 'We plan the architecture, design, technology stack, and execution strategy.',
    icon: Pencil,
  },
  {
    number: '02',
    title: 'Launch',
    description: 'We build, integrate, and test with quality and performance in focus.',
    icon: Code2,
  },
  {
    number: '03',
    title: 'Observe',
    description: 'We monitor, measure, and gather insights to ensure everything runs smoothly.',
    icon: Eye,
  },
  {
    number: '04',
    title: 'Win',
    description: 'We optimize, scale, and deliver value that drives long-term success.',
    icon: Trophy,
  },
]

const FlowPhaseSection = ({
  phaseLabel = 'Phase 02',
  titlePrefix = 'Fl',
  titleHighlight = 'ow',
  titleSuffix = ' We Build. We Deliver.',
  titleSecondLine = 'We Grow Together.',
  description = 'In the FLOW phase, we bring strategy to life with precision, agility, and continuous improvement to deliver exceptional results.',
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Decorative dotted circle - bottom right */}
      <div
        className="pointer-events-none absolute -right-4 -bottom-4 h-36 w-36 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(#b9c6d6 1.4px, transparent 1.4px)',
          backgroundSize: '14px 14px',
        }}
      />
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-10 left-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,197,92,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(56,107,223,0.12),transparent_70%)]" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        {/* Header */}
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-black uppercase tracking-wide text-[#0b3765] font-bold">
            {phaseLabel}
          </span>

          <h2 className="mt-5 font-serif text-[clamp(1.9rem,2.2vw,2.6rem)] font-black leading-[1.25] text-[#0a0a0a] font-medium">
            <span className="text-[#0b3b7b]">{titlePrefix}</span>
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              {titleHighlight}
            </span>
            {titleSuffix}
            <br />
            {titleSecondLine}
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#333333]">
            {description}
          </p>
        </div>

        {/* Icon connector row */}
        <div className="mt-14 hidden max-w-[800px] mx-auto items-center justify-center md:flex">
          {steps2.map((step, index) => {
            const Icon = step.icon
            return (
              <React.Fragment key={step.number}>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#3fc1e9] to-[#1b8fd1] shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                  <Icon size={20} strokeWidth={2.2} color="#0b3765" />
                </div>
                {index < steps2.length - 1 && (
                  <div className="mx-2 flex flex-1 items-center">
                    <div className="h-[2px] w-full border-t-2 border-dashed border-[#c9d3de]" />
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="-ml-1 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="#0b3765"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Step cards */}
        <div className="mt-10 grid max-w-[900px] mx-auto grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps2.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-2xl border border-[#e3e9f0] bg-white p-5 shadow-[0_10px_30px_rgba(10,27,47,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,27,47,0.12)]"
            >
              <div
                className="-mx-5 -mt-5 mb-4 flex h-24 w-28 items-start bg-[#001530] px-4 pt-3.5"
                style={{ borderRadius: '16px 0 90px 0' }}
              >
                <span className="font-serif text-[26px] font-black italic text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-[18px] font-black text-[#0a0a0a]">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-[#5b6472]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const HowWeWork = () => {
  return (
    <>
      <HowWeWorkHero />
      <DelvePhaseSection />
      <FlowPhaseSection />
      <CtaSection />
    </>
  )
}

export default HowWeWork
