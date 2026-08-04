// src/components/HeroSection.jsx
import React from 'react'

// Default image import
import defaultHeroImage from '../assets/about_hero.png'

const HeroSection = ({ 
  badge = "About Us",
  title = "Building Digital Solutions",
  subtitle = "That Turn Ideas Into",
  gradientText = "Business Growth.",
  description = "At DelveFlow, we combine strategy, design, and cutting-edge technology to solve real business challenges. Our team helps startups and enterprises build scalable digital products that drive innovation, efficiency, and long-term success.",
  buttonText = "Let's Work Together",
  buttonLink = "#/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "#/projects",
  image = defaultHeroImage,
  projectsCount = "250+",
  clientsCount = "20+"
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white via-[#e9ecf7] via-[#eef1fb] via-[#fdf3df] to-[#fdf0da] py-10 px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">
        {/* LEFT COLUMN */}
        <div className="flex-1 max-w-[560px] py-10 lg:py-16">
          {/* About Us badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7d7d7] bg-white/60 px-5 py-2 text-[13px] font-sans font-semibold text-[#1a1a2e]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1a1a2e]" />
            {badge}
          </div>

          {/* Headline - Exact Figma specs */}
          <h2 className="font-dm-serif text-[clamp(2.8rem,4vw,4rem)] font-normal leading-[1.125] tracking-normal text-[#0a0a0a]">
            {title}
            <br />
            {subtitle}
            <br />
            <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
              {gradientText}
            </span>
          </h2>

          {/* Paragraph - Sans-serif */}
          <p className="mt-6 max-w-[460px] font-sans text-[13.5px] leading-relaxed text-[#5b5b5b]">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={buttonLink}
              className="inline-flex font-sans items-center gap-3 rounded-full bg-[#12203f] py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-white transition hover:bg-[#1a2f5a]"
            >
              {buttonText}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f2c14e] text-[#12203f] transition hover:scale-105">
                ↗
              </span>
            </a>

            <a
              href={secondaryButtonLink}
              className="inline-flex font-sans items-center rounded-full border border-[#c9c9c9] px-8 py-3.5 text-[15px] font-semibold text-[#1a1a2e] transition hover:border-[#12203f] hover:bg-[#f8f8f8]"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex-1 max-w-[460px] py-10 lg:py-16">
          {/* Decorative yellow circles */}
          <div className="absolute top-12 right-2 z-0 h-11 w-11 rounded-full bg-[#e2ca0f] opacity-90" />

          {/* Main image */}
          <div className="relative z-10 h-[360px] overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(20,20,50,0.12)]">
            <img
              src={image}
              alt="Team meeting"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Projects Delivered card */}
          <div className="absolute -top-1 -left-5.5 z-20 min-w-[180px] rounded-[14px] bg-white p-3.5 px-5 shadow-[0_12px_30px_rgba(20,20,50,0.10)]">
            <div className="mb-1 font-sans text-xs text-[#8a8a8a]">Projects Delivered</div>
            <div className="flex items-center gap-2.5">
              <span className="font-dm-serif text-2xl font-normal text-[#12203f]">
                {projectsCount}
              </span>
              <span className="flex items-center gap-1 font-sans text-[11px] font-medium text-[#3aa0d1]">
                ✓ Successfully Completed
              </span>
            </div>
          </div>

          {/* Happy Clients card */}
          <div className="absolute -bottom-1 -right-4 z-20 min-w-[190px] rounded-[14px] bg-white p-3.5 px-5 shadow-[0_12px_30px_rgba(20,20,50,0.10)]">
            <div className="mb-1 font-sans text-xs text-[#8a8a8a]">Happy Clients</div>
            <div className="flex items-center gap-2.5">
              <span className="font-dm-serif text-2xl font-normal text-[#12203f]">
                {clientsCount}
              </span>
              <span className="flex items-center gap-1 font-sans text-[11px] font-medium text-[#5b5b5b]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#3aa0d1]" />
                Trusted Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection