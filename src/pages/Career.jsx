// ===== CAREER PAGE =====
// File: src/pages/Career.jsx

import React from 'react'
import Yellow_circle from "../assets/Yellow_circle.png"
import Career_hero_img from "../assets/Career_hero.png"
import roundedArc from '../assets/rounded_image.png'
import { CtaSection } from '../pages/Home.jsx'
import Upload_icon from '../assets/file.png'
import Handshake_icon from '../assets/handshake.png'
import Interview_icon from '../assets/interview.png'
import Jointeam_icon from '../assets/jointeam.png'





// ============================================================
// SECTION 1: CAREER HERO
// ============================================================
const CareerHero = ({
  badge = 'Career',
  title = 'Build The Future With',
  boldPrefix = 'Delve',
  gradientTitle = 'Flow.',
  description = "Join a team that values innovation, collaboration, and continuous learning. At DelveFlow, you'll work on meaningful digital products, grow your skills, and make a real impact alongside passionate professionals.",
  primaryButtonText = 'Join Our Team',
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

            <h1 className="font-serif text-[clamp(2.4rem,2vw,3.6rem)] font-black leading-[1.1] text-[#0a0a0a]">
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
                className="inline-flex items-center gap-3 rounded-full bg-[#001530] py-1.5 pl-6 pr-1.5 text-[15px] font-bold text-white transition hover:bg-[#062142]"
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

// ============================================================
// SECTION 2: WHY DELVEFLOW
// ============================================================
const perks = [
  {
    icon: 'trending',
    title: 'Career Growth',
    description:
      'Structured progression paths with bi-annual reviews, mentorship pairings, and clear promotion criteria — no guesswork.',
  },
  {
    icon: 'book',
    title: 'Continuous Learning',
    description:
      'Annual $2,400 learning budget for courses, conferences, and certifications. Friday afternoons are protected for skill development.',
  },
  {
    icon: 'clock',
    title: 'Flexible Work',
    description:
      'Fully remote-optional with async-first culture. Core hours 10am–3pm in your timezone. Unlimited PTO that people actually use.',
  },
  {
    icon: 'code',
    title: 'Latest Technologies',
    description:
      'We adopt emerging tools deliberately. TypeScript, Go, Rust, AI-assisted development — you choose the right tool for the job.',
  },
  {
    icon: 'layers',
    title: 'Meaningful Projects',
    description:
      "Every engagement is hand-picked for technical depth and real-world impact. We turn down clients whose problems don't challenge us.",
  },
  {
    icon: 'team',
    title: 'Supportive Team',
    description:
      'Feedback culture built on psychological safety. Pair programming, design reviews, and open retrospectives are baked into how we work.',
  },
]

const icons = {
  trending: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M4 17l6-6 4 4 7-8m0 0v6m0-6h-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M4 5.5c2-1 5-1 8 0v13c-3-1-6-1-8 0v-13zM20 5.5c-2-1-5-1-8 0v13c3-1 6-1 8 0v-13z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="12" cy="12" r="8.5" stroke="white" strokeWidth="1.8" />
      <path d="M12 7.5V12l3 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="4.5" width="18" height="14" rx="2" stroke="white" strokeWidth="1.7" />
      <path d="M9 9.5L6.5 12 9 14.5M15 9.5L17.5 12 15 14.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M12 3.5l8 4.3-8 4.3-8-4.3 8-4.3z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 12.2l8 4.3 8-4.3M4 16.2l8 4.3 8-4.3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle cx="9" cy="8" r="3" stroke="white" strokeWidth="1.7" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="16.5" cy="9" r="2.2" stroke="white" strokeWidth="1.7" />
      <path d="M14.5 12.3c2.1.2 3.7 2 3.7 4.2" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
}

const WhyDelveFlow = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(56,107,223,0.06),transparent_45%)]" />
      <div
        className="pointer-events-none absolute -left-4 -bottom-4 h-36 w-36 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(#b9c6d6 1.4px, transparent 1.4px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <p className="mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[12px] font-bold text-[#0b3765]">
              Why DelveFlow
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,2.2vw,2.6rem)] font-black leading-tight text-[#171717]">
              A Workplace Built Around
              <br />
              <span className="text-[#093b7a]">People</span>{' '}
              <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
                Who Care.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[12px] leading-7 text-[#333333]">
              At DelveFlow, we believe great products are created by
              empowered people. We foster a culture of collaboration,
              continuous learning, and innovation where every team member
              has the opportunity to grow, contribute, and make a
              meaningful impact.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e3e7ee] bg-white shadow-[0_14px_34px_rgba(6,23,43,0.06)]">
            {perks.map((perk, index) => (
              <div
                key={perk.title}
                className={`flex gap-4 px-6 py-5 ${
                  index !== perks.length - 1 ? 'border-b border-[#eef1f4]' : ''
                }`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#0b3765]">
                  {icons[perk.icon]}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0a1628]">
                    {perk.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-6 text-[#76859c]">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    icon: 'apply',
    title: 'Apply Online',
    description:
      'Submit your application along with your resume or portfolio. Tell us about your skills and experience.',
  },
  {
    icon: 'review',
    title: 'Application Review',
    description:
      'Our hiring team carefully reviews your application to understand your experience and potential.',
  },
  {
    icon: 'interview',
    title: 'Interview',
    description:
      'Meet with our team to discuss your skills, career goals, and how you can contribute to DelveFlow.',
  },
  {
    icon: 'join',
    title: 'Join the Team',
    description:
      'Receive your offer, complete onboarding, and begin building innovative digital products with us.',
  },
]

const icons2 = {
  apply: (
    <img 
      src={Jointeam_icon}  
      alt="Apply" 
      className="h-5 w-5 object-contain"
    />
  ),
  review: (
     <img 
      src={Upload_icon}  
      alt="" 
      className="h-5 w-5 object-contain"
    />
  ),
  interview: (
     <img 
      src={Interview_icon}  
      alt="" 
      className="h-5 w-5 object-contain"
    />
  ),
  join: (
    <img 
      src={Handshake_icon}  
      alt="" 
      className="h-5 w-5 object-contain"
    />
  ),
}

const HiringJourney = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-black leading-tight text-[#06172b]">
            Ready to Start Your{' '}
            <span className="bg-linear-to-r from-[#093b7a] to-[#d4bb18] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mx-auto mt-4 text-[14px] leading-6 text-[#333333]">
            Our hiring process is simple, transparent, and designed to help
            you succeed at every step. Here's how you can become part of
            the DelveFlow team.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Dashed line - hidden on mobile */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-[#d7e5f2] lg:block" />

          {steps.map((step) => (
            <div key={step.title} className="relative text-center">
              <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#0b3765]">
                {icons2[step.icon]}
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-[#0b3765]">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-6 text-[#404040]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// ============================================================
// MAIN CAREER COMPONENT (Combines both sections)
// ============================================================
const Career = () => {
  return (
    <>
      <CareerHero />
      <WhyDelveFlow />
      <HiringJourney/>
      <CtaSection />
    </>
  )
}

// ============================================================
// EXPORT
// ============================================================
export default Career