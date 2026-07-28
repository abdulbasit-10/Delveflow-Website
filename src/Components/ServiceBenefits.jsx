const defaultBenefits = [
  {
    icon: 'users',
    title: 'User-Centered',
    description:
      'Every decision we make is backed by deep empathy for your users and their real-world needs.',
  },
  {
    icon: 'globe',
    title: 'Faster Build',
    description:
      'Our organized design systems and handoff documents cut engineering time by up to 40%.',
  },
  {
    icon: 'chart',
    title: 'Higher Conversion',
    description:
      'We optimize flows and visual hierarchies to guide users naturally toward your goals.',
  },
  {
    icon: 'headset',
    title: 'Ongoing Support',
    description:
      'We stay by your side after launch to iterate based on live user feedback and data.',
  },
]

const icons = {
  users: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="9" cy="8" r="3" stroke="#0b3765" strokeWidth="1.7" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#0b3765" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="16.5" cy="9" r="2.2" stroke="#0b3765" strokeWidth="1.7" />
      <path d="M14.5 12.3c2.1.2 3.7 2 3.7 4.2" stroke="#0b3765" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="#0b3765" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="#0b3765" strokeWidth="1.6" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19z" stroke="#0b3765" strokeWidth="1.7" />
      <path d="M12 3v9h9" stroke="#0b3765" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M4 13v-1a8 8 0 0116 0v1" stroke="#0b3765" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.6" stroke="#0b3765" strokeWidth="1.6" />
      <rect x="17" y="13" width="4" height="6" rx="1.6" stroke="#0b3765" strokeWidth="1.6" />
      <path d="M19 19.5c0 1.4-1.6 2.5-4 2.7" stroke="#0b3765" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
}

const ServiceBenefits = ({
  badge = 'Benefits',
  title = 'Why Businesses Choose',
  boldPrefix = 'Our',
  gradientTitle = 'UI/UX Design.',
  description = 'Our design process combines creativity, strategy, and usability to build experiences that delight users and deliver measurable business value.',
  benefits = defaultBenefits,
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,197,92,0.14),transparent_45%),radial-gradient(circle_at_5%_95%,rgba(56,107,223,0.08),transparent_40%)]" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            {badge}
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,2.4vw,2.6rem)] font-black leading-tight text-[#0a0a0a]">
            {title}
            <br />
            <span className="text-[#0b3b7b]">{boldPrefix}</span>{' '}
            <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
              {gradientTitle}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#333333]">
            {description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[20px] border border-[#b5e4f3] border-r-[#093B7B] bg-white px-6 py-7 border-r-[3px]"
            >
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-[#e7f0f8]">
                {icons[benefit.icon]}
              </span>
              <h3 className="text-[16px] font-bold text-[#001530]">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-[#333333]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceBenefits