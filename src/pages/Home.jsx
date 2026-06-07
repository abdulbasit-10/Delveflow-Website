const reasons = [
  ['shield', 'Expert Team', 'Skilled professionals with years of industry experience'],
  ['bolt', 'Fast Delivery', 'Efficient processes ensure timely project completion'],
  ['users', 'Quality Assured', 'Rigorous testing and quality control standards'],
  ['trend', '24/7 Support', 'Dedicated support team always ready to help'],
]

const stats = [
  ['check', '15+', 'Projects Delivered', 'Successfully completed'],
  ['clock', '2+', 'Years Experience', 'In the industry'],
  ['globe', '20+', 'Global Clients', 'Across 20 countries'],
  ['badge', '100%', 'Client Satisfaction', 'And growing'],
]

const icons = {
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M12 3l7 3v5c0 4.6-2.8 8.7-7 10-4.2-1.3-7-5.4-7-10V6l7-3z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M13 2L4 14h8l-1 8 9-13h-8l1-7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5zm10-1a3 3 0 1 0 0-6m-2 13h5v-1c0-2-1.4-3.5-3.6-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M4 17l6-6 4 4 7-8m0 0v6m0-6h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
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

const serviceIcons = {
  'app-development': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10.5 18h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M10 5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  'web-development': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8M12 18v3M7 9l-2 2 2 2M17 9l2 2-2 2M14 8l-4 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  'ai-solutions': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect x="5" y="5" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 9h6v6H9zM2 9h3M2 15h3M19 9h3M19 15h3M9 2v3M15 2v3M9 19v3M15 19v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 15l2-6 2 6M10.8 13h2.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  ),
  'ui-ux-designing': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8h8M8 12h5M8 16h3M17 13l-2 5 5-2-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  'saas-development': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 9h3v3H7zM14 9h3v3h-3zM7 15h10M8 21h8M12 18v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
}

const Home = ({ services }) => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,185,223,0.28),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(18,145,111,0.24),transparent_28%),linear-gradient(135deg,#06172b_0%,#0b3765_55%,#082443_100%)]" />
        <div className="relative mx-auto grid min-h-[620px] w-[min(1180px,calc(100%-36px))] place-items-center py-20 text-center text-white">
          {/* <p className="mb-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase text-[#aee8ff]">
            Delve into problems. Flow with solutions.
          </p> */}
          <h1 className="mb-6 max-w-4xl text-[clamp(2.5rem,5vw,6.2rem)] font-black leading-[0.95]">
            <span className="text-[#FF9F00]">Delve</span> into Problems.{' '}
            <span className="text-[#FF9F00]">Flow</span> with Solutions.
          </h1>
          <h3 className="text-[#FF9F00]">
            Your Business Has Problems.We Have the Digital Solutions.
          </h3>
          <p className="max-w-3xl text-lg leading-8 text-[#c7e5f8]">
            At Delve Flow, we don't just build software we listen, research, and engineer solutions that actually fit your business. From websites to AI automation, we deliver technology that works for you.
            {/* A leading IT company delivering custom apps, web platforms, AI solutions, custom software, cloud, and DevOps
            services for growing businesses. */}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#38b9df] px-6 font-black text-[#06172b] shadow-[0_18px_42px_rgba(56,185,223,0.32)]" href="#/contact">
              Get Started
            </a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 font-black text-white" href="#/services">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase text-[#0d5790]">Our Services</p>
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-black text-[#06172b]">Solutions Built For Your Growth</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#5c6f84]">
            From strategy to launch, Df builds digital systems that are clean, scalable, and easy to use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <a className="group rounded-lg border border-[#d7e5f2] bg-white p-7 shadow-[0_18px_48px_rgba(6,23,43,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_20px_48px_rgba(8,36,67,0.16)]" href={`#/services/${service.slug}`} key={service.slug}>
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] shadow-[0_14px_30px_rgba(8,36,67,0.12)] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                {serviceIcons[service.slug]}
              </span>
              <h3 className="mb-3 text-2xl font-black text-[#06172b]">{service.title}</h3>
              <p className="leading-7 text-[#5c6f84]">{service.short}</p>
            </a>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#082443] px-6 font-black text-white" href="#/services">
            Explore All Services
          </a>
        </div>
      </section>

      <section className="bg-[#eef7ff] py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
          <div className="mb-14 scroll-mt-28 text-center">
            <h2 className="mb-4 text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight text-[#06172b]">Why Choose Delveflow</h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#27445f]">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-6">
              {reasons.map(([icon, title, text]) => (
                <article className="group grid grid-cols-[72px_1fr] items-center gap-5 rounded-lg border border-transparent p-3 transition duration-300 hover:-translate-y-1 hover:border-[#b9d8ed] hover:bg-white hover:shadow-[0_14px_34px_rgba(8,36,67,0.10)]" key={title}>
                  <span className="grid h-14 w-14 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] shadow-[0_12px_26px_rgba(8,36,67,0.12)] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                    {icons[icon]}
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-black text-[#06172b]">{title}</h3>
                    <p className="m-0 text-base leading-7 text-[#27445f]">{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-2xl border border-[#cfe6f8] bg-white p-8 shadow-[0_18px_45px_rgba(6,23,43,0.14)] lg:p-10">
              <h3 className="mb-10 text-center text-2xl font-black text-[#0b3765]">Our Track Record</h3>
              <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {stats.map(([icon, value, label, note]) => (
                  <div className="group rounded-lg p-3 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#f7fbff]" key={label}>
                    <span className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[#f7fbff] text-[#0d5790] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">{icons[icon]}</span>
                    <strong className="block text-4xl font-black leading-none text-[#06172b]">{value}</strong>
                    <span className="mt-2 block font-black text-[#06172b]">{label}</span>
                    <small className="mt-2 block text-[#0d5790]">{note}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
