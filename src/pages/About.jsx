// ===== ABOUT PAGE =====
// File: src/pages/About.jsx

import React from 'react'
import abdulBasitPhoto from '../assets/abdul-basit.jpg'
import arifaNaveedPhoto from '../assets/arifa-naveed.jpeg'
import warishaAsadPhoto from '../assets/warisha-asad.jpeg'
import Hero_Image from '../assets/about_hero.png'
import Arrow_icon from '../assets/arrow_icon.png'
import Lense_icon from '../assets/lence_icon.png'
import ValueIconBg from '../assets/valueiconbg.png'


import { CtaSection } from './Home'

// ============================================================
// SECTION 1: HERO SECTION
// ============================================================
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white via-[#e9ecf7] via-[#eef1fb] via-[#fdf3df] to-[#fdf0da] py-10 px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">
        {/* LEFT COLUMN */}
        <div className="flex-1 max-w-[560px] py-10 lg:py-16">
          {/* About Us badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7d7d7] bg-white/60 px-5 py-2 text-[13px] font-semibold text-[#1a1a2e]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1a1a2e]" />
            About Us
          </div>

          {/* Headline */}
          <h2 className="font-serif text-[clamp(2.5rem,4vw,1.6rem)] font-extrabold leading-[1.18] text-[#111111]">
            Building Digital Solutions
            <br />
            That Turn Ideas Into
            <br />
              <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
                 Business Growth.
                </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-[460px] text-[13.5px] leading-relaxed text-[#5b5b5b]">
            At DelveFlow, we combine strategy, design, and cutting-edge
            technology to solve real business challenges. Our team helps
            startups and enterprises build scalable digital products that
            drive innovation, efficiency, and long-term success.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#12203f] py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-white transition hover:bg-[#1a2f5a]"
            >
              Let's Work Together
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f2c14e] text-[#12203f] transition hover:scale-105">
                ↗
              </span>
            </a>

            <a
              href="#/projects"
              className="inline-flex items-center rounded-full border border-[#c9c9c9] px-8 py-3.5 text-[15px] font-semibold text-[#1a1a2e] transition hover:border-[#12203f] hover:bg-[#f8f8f8]"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex-1 max-w-[460px] py-10 lg:py-16">
          {/* Decorative yellow circles */}
          <div className="absolute top-12 right-2 z-0 h-11 w-11 rounded-full bg-[#e2ca0f] opacity-90" />
          {/* <div className="absolute top-7 right-12 z-0 h-4 w-4 rounded-full bg-[#f6d873] opacity-90" /> */}

          {/* Main image */}
          <div className="relative z-10 h-[360px] overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(20,20,50,0.12)]">
            <img
              src={Hero_Image}
              alt="Team meeting"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Projects Delivered card */}
          <div className="absolute -top-1 -left-5.5 z-20 min-w-[180px] rounded-[14px] bg-white p-3.5 px-5 shadow-[0_12px_30px_rgba(20,20,50,0.10)]">
            <div className="mb-1 text-xs text-[#8a8a8a]">Projects Delivered</div>
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl font-extrabold text-[#12203f]">
                250+
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-[#3aa0d1]">
                ✓ Successfully Completed
              </span>
            </div>
          </div>

          {/* Happy Clients card */}
          <div className="absolute -bottom-1 -right-4 z-20 min-w-[190px] rounded-[14px] bg-white p-3.5 px-5 shadow-[0_12px_30px_rgba(20,20,50,0.10)]">
            <div className="mb-1 text-xs text-[#8a8a8a]">Happy Clients</div>
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl font-extrabold text-[#12203f]">
                20+
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-[#5b5b5b]">
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

// ============================================================
// SECTION 2: STORY SECTION (Mission & Vision)
// ============================================================
// ===== ICONS =====
function TargetIcon() {
  return (
    <img src={Arrow_icon} width="46" height="46"  >
      
      
    </img>
  )
}

function LensIcon() {
  return (
   <img src={Lense_icon} width="26" height="26"  >
      
      
    </img>
  )
}

function InfoCard({ accent, icon, title, text }) {
  const isBlue = accent === "blue"
  return (
    <div className="flex max-w-[420px] items-start gap-5 rounded-2xl bg-white px-7 py-7 shadow-[0_10px_30px_rgba(20,20,50,0.06)]">
      <div
        className={`relative flex h-14 w-14 min-w-[56px] items-center justify-center rounded-full ${
          isBlue
            ? "bg-[radial-gradient(circle_at_35%_35%,#cfe6ff_0%,#eaf4ff_60%,#ffffff_100%)]"
            : "bg-[radial-gradient(circle_at_35%_35%,#fbe9b8_0%,#fdf3d8_60%,#ffffff_100%)]"
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full border ${
            isBlue ? "border-[#dceaff]" : "border-[#f6e6b6]"
          }`}
        />
        {icon}
      </div>

      <div>
        <div className={`mb-3 h-0.5 w-7 ${isBlue ? "bg-[#2f6fed]" : "bg-[#e0a800]"}`} />
        <h3 className="font-serif mb-2.5 text-[19px] font-extrabold text-[#111111]">
          {title}
        </h3>
        <p className="text-sm leading-[1.65] text-[#6b6b6b]">{text}</p>
      </div>
    </div>
  )
}

const StorySection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-white to-[#fdf1da] py-20 px-6 md:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-12">
        {/* LEFT COLUMN */}
        <div className="flex-1 min-w-[320px] max-w-xl py-4">
          {/* Our Story badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-[13px] font-semibold text-[#1a1a2e]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1a1a2e]" />
            Our Story
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-[32px] font-extrabold leading-[1.22] text-[#111111]">
            Turning Business Challenges
            <br />
            Into <span className="bg-gradient-to-r from-[#093B7B] via-[#8a9a3c] to-[#FFD600] bg-clip-text text-transparent">
  Digital Success Stories.
</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-lg text-[13.5px] leading-7 text-[#5b5b5b]">
            DelveFlow was founded with a simple mission—to help businesses
            overcome complex challenges through innovative digital solutions.
            We take the time to understand your goals, analyze your
            problems, and craft scalable web, mobile, AI, and cloud
            solutions that create measurable business growth. Every project
            is driven by collaboration, creativity, and a commitment to
            delivering lasting value.
          </p>

          {/* Button */}
          <div className="mt-8">
           <a
  href="#/about"
  className="inline-flex items-center rounded-full bg-[#001530] py-0.5 pl-5 pr-0 text-[16px] font-semibold text-white transition hover:bg-[#062142]"
>
  <span className="font-serif pr-2">Discover Our Journey</span>
  <span className="-mr-[1px] grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ffde59] shadow-sm">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="#0b3765"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</a>
          </div>
        </div>

        {/* RIGHT COLUMN - cards */}
        <div className="flex-1 min-w-[320px] max-w-[440px] flex flex-col gap-5 py-4">
          <InfoCard
            accent="blue"
            icon={<TargetIcon />}
            title="Our Mission"
            text="To deliver innovative, scalable digital solutions that help businesses overcome challenges, streamline operations, and achieve sustainable growth through technology and strategic thinking."
          />
          <InfoCard
            accent="yellow"
            icon={<LensIcon />}
            title="Our Vision"
            text="To become a globally recognized technology partner known for turning complex business problems into elegant, high-impact digital solutions that drive measurable success."
          />
        </div>
      </div>
    </section>
  )
}

// ============================================================
// SECTION 4: CORE VALUES SECTION (NEW DESIGN)
// ============================================================
const coreValues = [
  {
    number: '01',
    icon: 'bulb',
    title: 'Innovation First',
    text: 'We embrace creative thinking and modern technologies to deliver smarter, future-ready digital solutions.',
  },
  {
    number: '02',
    icon: 'handshake',
    title: 'Client Partnership',
    text: 'We believe in honest communication, collaboration, and building lasting relationships with every client.',
  },
  {
    number: '03',
    icon: 'shield',
    title: 'Quality & Reliability',
    text: 'Every project is built with performance, security, and attention to detail to ensure lasting success.',
  },
  {
    number: '04',
    icon: 'growth',
    title: 'Results Driven',
    text: 'Our focus is delivering measurable outcomes that help businesses grow, scale, and achieve their goals.',
  },
]

const coreValueIcons = {
  bulb: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none">
      <path
        d="M9 18h6M10 21h4M8 14a5 5 0 1 1 8 0c-.8.9-1.3 1.6-1.3 2.6h-5.4c0-1-.5-1.7-1.3-2.6z"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 6V4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none">
      <path
        d="M2 12l4-4 4 3 3-3 2 2M2 12v5l3 2M22 12l-4-4-2 2M22 12v5l-3 2M8 15l2.5 2.5a1.7 1.7 0 0 0 2.4 0l.1-.1a1.7 1.7 0 0 0 0-2.4L11 13M12.5 17.5l1 1a1.6 1.6 0 0 0 2.3 0 1.6 1.6 0 0 0 0-2.3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none">
      <path
        d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
        stroke="white"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none">
      <path
        d="M3 17c3-1 4-4 6-4s2 2 4 2 3-4 5-6"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 8h4v4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 20h18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
}

const ValueCard = ({ number, icon, title, text }) => {
  return (
    <div className="relative overflow-hidden rounded-20xl bg-[#f7f8fb] px-8 py-8">
      <h3 className="font-serif text-xl font-extrabold text-[#111111]">{title}</h3>
      <p className="mt-3 max-w-[280px] text-[13.5px] leading-relaxed text-[#5b5b5b]">
        {text}
      </p>
      <div className="mt-8 text-2xl font-black text-[#c9cfdb]">{number}</div>

      {/* navy quarter-circle icon badge */}
      <div 
  className="absolute bottom-0 right-0 flex h-[92px] w-[92px] items-end justify-end rounded-none"
  style={{ backgroundImage: `url(${ValueIconBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <span className="mb-5 mr-5 flex h-9 w-9 items-center justify-center">
    {coreValueIcons[icon]}
  </span>
</div>
    </div>
  )
}

const ValuesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf6ea] via-white to-[#eaf3fb] py-20 px-6 md:px-12 lg:px-20">
      {/* decorative dashed rings */}
      <svg
        className="pointer-events-none absolute -left-16 top-10 h-64 w-64 text-[#0e2547]/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeDasharray="4 6" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 text-[#0e2547]/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeDasharray="4 6" />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Core Values badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7d7d7] bg-white/60 px-5 py-2 text-[13px] font-semibold text-[#1a1a2e]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1a1a2e]" />
          Core Values
        </div>

        {/* Heading */}
        <h3 className="font-serif text-[clamp(1.8rem,1.6vw,2.6rem)] font-extrabold leading-tight text-[#111111]">
          The Values That Shape
          <br />
           <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
  Every Solution We Build.
</span>
        </h3>

        {/* Paragraph */}
        <p className="mx-auto mt-5 max-w-2xl text-[13.5px] leading-relaxed text-[#5b5b5b]">
          At DelveFlow, our values guide every decision we make. From understanding
          your business challenges to delivering reliable digital solutions, we
          believe in building long-term partnerships through innovation,
          transparency, and excellence.
        </p>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {coreValues.map((value) => (
          <ValueCard key={value.number} {...value} />
        ))}
      </div>
    </section>
  )
}

// ============================================================
// SECTION 5: EXPERTS SECTION
// ============================================================
const experts = [
  ['WA', 'Warisha Asad', 'CEO & Founder', 'Visionary leader with 3+ years in Tech Industry', 'https://www.linkedin.com/in/warisha-asad-6259203b0/', warishaAsadPhoto, 'center'],
  ['AB', 'Abdul Basit', 'Cofounder', 'Shaping businesses with executive foresight.', 'https://www.linkedin.com/in/abdul-basit-1039b522b/', abdulBasitPhoto, 'center'],
  ['AN', 'Arifa Naveed', 'Chief Operation Officer', 'Shaping businesses with executive foresight.', 'https://www.linkedin.com/in/arifa-naveed-2a79773a5/', arifaNaveedPhoto, 'center'],
]

const ExpertsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,107,223,0.06),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(255,197,92,0.08),transparent_45%)]" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mx-auto mb-3 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-black uppercase tracking-wide text-[#0d5790]">
            Our Team
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight text-[#06172b]">
            Meet Our Experts{' '}
            <span className="text-[#0b3b7b]">T</span>
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              eam
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#5b6f84]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi
          </p>
        </div>

        <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-3">
          {experts.map(([initials, name, role, text, linkedinUrl, photo, photoPosition]) => (
            <article
              className="group overflow-hidden rounded-xl border-2 border-[#d7e5f2] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_20px_48px_rgba(8,36,67,0.16)]"
              key={name}
            >
              {/* Photo Section - Full width with gradient background */}
              <div className="h-56 w-full overflow-hidden bg-[radial-gradient(circle_at_35%_25%,#38b9df,#0b3765_62%,#06172b)]">
                {photo ? (
                  <img
                    className="h-full w-full object-cover"
                    src={photo}
                    alt={name}
                    style={{ objectPosition: photoPosition }}
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center text-3xl font-black text-white">
                    {initials}
                  </div>
                )}
              </div>

              {/* Info Card - Half outside the photo */}
              <div className="relative -mt-12 mx-4 rounded-xl bg-white px-5 py-4 shadow-[0_14px_34px_rgba(6,23,43,0.12)]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[15px] font-black text-[#06172b]">{name}</h3>
                    <p className="mt-1 text-[13px] font-semibold text-[#0d5790]">{role}</p>
                  </div>
                  <a
                    className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#0b3765] text-[13px] font-black text-white transition duration-300 hover:bg-[#082443]"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} LinkedIn`}
                  >
                    in
                  </a>
                </div>
                <p className="mt-2 text-[13px] leading-6 text-[#595959]">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


// ============================================================
// MAIN ABOUT COMPONENT
// ============================================================
const About = () => {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <ExpertsSection />
      <CtaSection />
      
    </>
  )
}

export default About