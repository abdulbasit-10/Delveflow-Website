// ============================================================
// OUR PROCESS COMPONENT
// ============================================================
// File: src/Components/OurProcess.jsx

import Discovery_icon from "../assets/discovery.png"
import Planning_icon from "../assets/planning.png"
import Agile_icon from "../assets/agile.png"
import Growth_icon from "../assets/growth.png"
import CardBulitsIcon from "../assets/Sub-detail Image.svg"

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your world uncovering hidden challenges, ambitious goals, user needs, and market opportunities before building anything.',
    bullets: [
      'Business goals & core challenges',
      'In-depth user & competitor research',
      'Technical audit & strategic roadmap',
    ],
    icon: 'search',
    side: 'right',
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
    side: 'left',
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
    side: 'right',
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
    side: 'left',
  },
]

const processIcons = {
  search: <img src={Discovery_icon} alt="Discovery" className="h-16 w-16 object-contain" />,
  compass: <img src={Planning_icon} alt="Planning" className="h-16 w-16 object-contain" />,
  code: <img src={Agile_icon} alt="Agile" className="h-16 w-16 object-contain" />,
  rocket: <img src={Growth_icon} alt="Growth" className="h-16 w-16 object-contain" />,
}

const ChevronBullet = ({ children }) => (
  <li className="flex items-center gap-2.5 py-1.5 text-[12px] text-[#dbe4ee]">
    {/* Replace old SVG path with your SVG image */}
    <img 
      src={CardBulitsIcon} 
      alt="bullet icon" 
      className="h-3.5 w-3.5 shrink-0 object-contain" 
    />
    <span>{children}</span>
  </li>
)

const StepCard = ({ step }) => {
  const isRight = step.side === 'right'

  return (
    <div className="relative w-full max-w-md rounded-xl bg-[#082a4d] border-l-4 border-l-[#38B9DF] px-6 pb-6 pt-5 shadow-[0_20px_45px_rgba(6,23,43,0.3)] transition duration-300 hover:-translate-y-1">
      {/* Pointer Notch */}
      <span
        className={`absolute top-5 h-0 w-0 border-y-[8px] border-y-transparent ${
          isRight
            ? 'right-full border-r-[10px] border-r-[#082a4d]'
            : 'left-full border-l-[10px] border-l-[#082a4d]'
        }`}
        aria-hidden="true"
      />

      <h3 className="font-serif text-[18px] font-medium text-white">{step.title}</h3>
      <p className="mt-2 text-[12px] leading-relaxed text-[#b4c8de]">{step.description}</p>

      {/* Card Content Layout */}
      {isRight ? (
        <div className="mt-4 flex items-end justify-between">
          <ul className="space-y-1">
            {step.bullets.map((b) => (
              <ChevronBullet key={b}>{b}</ChevronBullet>
            ))}
          </ul>
          <span
            className="select-none bg-gradient-to-b from-[#d9c24a] to-[#7f8837] bg-clip-text font-serif text-5xl font-black leading-none text-transparent opacity-90"
            aria-hidden="true"
          >
            {step.number}
          </span>
        </div>
      ) : (
        <div className="mt-4 flex items-end gap-4">
          <span
            className="select-none bg-gradient-to-b from-[#d9c24a] to-[#7f8837] bg-clip-text font-serif text-5xl font-black leading-none text-transparent opacity-90"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <ul className="flex-1 space-y-1">
            {step.bullets.map((b) => (
              <ChevronBullet key={b}>{b}</ChevronBullet>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const OurProcess = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            How We Work
          </p>
          <h2 className="font-['DM_Serif_Text'] text-[clamp(1.6rem,3vw,1.3rem)] font-black leading-snug text-[#0a0a0a]">
            <span className="text-[#0b3b7b]">D</span>
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              elve
            </span>{' '}
            Deep into Your Challenges{' '}
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

          <div className="flex flex-col gap-16">
            {steps.map((step) => {
              const isRight = step.side === 'right'

              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto_1fr]"
                >
                  <div className="flex justify-end">
                    {!isRight && <StepCard step={step} />}
                  </div>

                  <div className="relative z-10 hidden shrink-0 pt-2 md:block">
                    <div className="grid h-16 w-16 place-items-center">
                      {processIcons[step.icon]}
                    </div>
                  </div>

                  <div className="flex justify-start">
                    {isRight && <StepCard step={step} />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess