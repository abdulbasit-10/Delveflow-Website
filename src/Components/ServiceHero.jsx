// ============================================================
// SERVICE HERO COMPONENT
// ============================================================
import React from 'react'

const ServiceHero = ({
  badge,
  title,
  gradientTitle,
  description,
  primaryButtonText = 'Start Your Project',
  primaryButtonLink = '#/contact',
  secondaryButtonText = 'View Our Portfolio',
  secondaryButtonLink = '#/projects',
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,107,223,0.14),transparent_50%),radial-gradient(circle_at_75%_80%,rgba(255,197,92,0.16),transparent_50%)]" />

      <div className="relative mx-auto w-[min(1000px,calc(100%-36px))] text-center">
        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#0b3765] px-4 py-1.5 text-[13px] font-bold text-[#0b3765]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0b3765]" />
          {badge}
        </span>

        <h1 className="font-serif text-[clamp(2rem,3.2vw,3.2rem)] font-black leading-[1.15] text-[#0a0a0a]">
          {title}
          <br />
             <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
               {gradientTitle}
            </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#333333]">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* PRIMARY BUTTON - Fixed */}
          <a
            href={primaryButtonLink}
            className="inline-flex items-center gap-3 rounded-full bg-[#001530] py-1.5 pl-6 pr-1.5 text-[15px] font-semibold text-white transition hover:bg-[#062142]"
          >
            {primaryButtonText}
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
          
          {/* SECONDARY BUTTON - Fixed */}
          <a
            href={secondaryButtonLink}
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7e5f2] bg-white px-7 text-[15px] font-bold text-[#0a1b2f] transition hover:border-[#0b3765]"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero