const benefitIcons = {
  salary: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M12 3v18M17 7.5c0-2-2-3-5-3s-5 1-5 3 2 3 5 3 5 1 5 3-2 3-5 3-5-1-5-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  learning: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M3 8l9-5 9 5-9 5-9-5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M7 11v5c2.7 2 7.3 2 10 0v-5M21 9v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  mug: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M5 8h11v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8zm11 3h2a3 3 0 0 1 0 6h-2M7 3v2M11 3v2M15 3v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  laptop: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M5 5h14v10H5zM3 19h18l-2-4H5l-2 4z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M4 16l6-6 4 4 7-8m0 0v6m0-6h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  smile: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 10h.01M15.5 10h.01M8 14c1.2 1.5 2.5 2 4 2s2.8-.5 4-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5zm10-1a3 3 0 1 0 0-6m-2 13h5v-1c0-2-1.4-3.5-3.6-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
}

const benefits = [
  ['salary', 'Competitive Salary', 'Industry-leading compensation packages with performance bonuses and equity options.'],
  ['learning', 'Learning & Development', 'Annual learning budget for courses, conferences, and professional certificates.'],
  ['heart', 'Health Benefits', 'Comprehensive health insurance, dental, vision, and mental health support programs.'],
  ['mug', 'Work-Life Balance', 'Generous PTO, paid holidays, and a culture that respects your personal time.'],
  ['laptop', 'Remote Flexibility', 'Work from anywhere with our remote-first culture and flexible working hours.'],
  ['growth', 'Career Growth', 'Clear career paths, mentorship programs, and opportunities for advancement.'],
  ['smile', 'Fun Environment', 'Enjoy a vibrant workplace with team events, creative energy, and a culture that celebrates success.'],
  ['team', 'Great Team', 'Work alongside talented professionals who are passionate, supportive, and collaborative.'],
]

const careerValues = [
  ['growth', 'Innovation First', 'We encourage creative thinking and new ideas. Your voice matters and your innovations are celebrated.'],
  ['team', 'Work-Life Balance', "We believe in teamwork, open communication, and supporting each other's growth."],
  ['learning', 'Excellence', 'We set high standards and strive for excellence in everything we do.'],
  ['mug', 'Work-Life Balance', 'We value your well-being and believe in maintaining a healthy work-life balance.'],
]

const processIcons = {
  apply: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4zM13 6l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  screen: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  interview: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect x="4" y="5" width="16" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20h8M12 16v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  join: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5zm10-1a3 3 0 1 0 0-6m-2 13h5v-1c0-2-1.4-3.5-3.6-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
}

const process = [
  ['apply', 'Apply Online', 'Submit your application through our contact form or email'],
  ['screen', 'Initial Screening', 'Our HR team reviews your application and reaches out'],
  ['interview', 'Technical Interview', 'Meet with our technical team to discuss your skills'],
  ['join', 'Join the Team', 'Receive offer and start your journey with us'],
]

const Career = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,185,223,0.25),transparent_28%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(980px,calc(100%-36px))]">
          <p className="mb-4 text-xs font-black uppercase text-[#aee8ff]">Join Our Team</p>
          <h1 className="mb-5 text-[clamp(2.4rem,4vw,5.5rem)] font-black leading-none">Build The Future With Delveflow</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#c7e5f8]">
            Work with a team that values clean design, thoughtful engineering, and practical digital solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="mb-9 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">Why Work With Us</h2>
          <p className="mt-4 text-sm font-black uppercase tracking-wide text-[#06172b]">
            We offer more than just a job - we provide a platform for growth, learning, and making a real impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([icon, title, text], index) => (
            <article className={`group rounded-xl border-2 bg-white p-6 shadow-[0_14px_34px_rgba(6,23,43,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_20px_48px_rgba(8,36,67,0.16)] ${index === 1 ? 'border-[#0b3765]' : 'border-[#c8d3df]'}`} key={title}>
              <span className={`mb-6 grid h-14 w-14 place-items-center rounded-lg transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df] ${index === 1 ? 'bg-[#082443] text-[#38b9df]' : 'bg-[#f7fbff] text-[#0b3765]'}`}>
                {benefitIcons[icon]}
              </span>
              <h3 className="mb-4 text-lg font-black text-[#06172b]">{title}</h3>
              <p className="leading-7 text-[#27445f]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eef7ff] py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
          <div className="mb-9 text-center">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">Our Values</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#27445f]">
              The principles that guide our culture and define who we are.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {careerValues.map(([icon, title, text]) => (
              <article className="group rounded-xl border-2 border-[#c8d3df] bg-white px-7 py-8 text-center shadow-[0_14px_34px_rgba(6,23,43,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_20px_48px_rgba(8,36,67,0.16)]" key={title}>
                <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                  {benefitIcons[icon]}
                </span>
                <h3 className="mb-4 text-lg font-black text-[#06172b]">{title}</h3>
                <p className="leading-7 text-[#27445f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="mb-9 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">Application Process</h2>
          <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#06172b]">How to apply</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([icon, title, text], index) => (
            <article className="rounded-xl border-2 border-[#c8d3df] bg-white px-6 py-8 text-center shadow-[0_14px_34px_rgba(6,23,43,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_20px_48px_rgba(8,36,67,0.16)]" key={title}>
              <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#06172b] text-lg font-black text-white">{index + 1}</span>
              <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765]">
                {processIcons[icon]}
              </span>
              <h3 className="mb-3 font-black text-[#06172b]">{title}</h3>
              <p className="leading-7 text-[#27445f]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06172b] px-5 py-16 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(56,185,223,0.18),transparent_30%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(900px,100%)]">
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-black">Don't See the Perfect Role?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-[#c7e5f8]">
            We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <a className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-7 font-black text-[#06172b]" href="#/contact">
            Get In Touch
          </a>
        </div>
      </section>
    </>
  )
}

export default Career
