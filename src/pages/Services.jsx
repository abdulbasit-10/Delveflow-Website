const serviceIcons = {
  'app-development': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10.5 18h3M10 5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
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
  'cloud-devops': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path d="M7 18h10a5 5 0 0 0 .6-10A7 7 0 0 0 4.2 10.5 4.5 4.5 0 0 0 7 18z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 21h8M12 18v3M9 12h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
}

const deliverySteps = [
  ['01', 'Discovery', 'We start by understanding your needs, goals, and challenges to create a tailored solution.'],
  ['02', 'Development', 'Our expert team builds your solution using cutting-edge technologies and best practices.'],
  ['03', 'Delivery', 'We ensure smooth deployment and provide ongoing support for continued success.'],
]

const advantageIcons = {
  trophy: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 12v5M8 21h8M9 17h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M8 14a7 7 0 1 1 8 0c-1 1-1.5 2-1.5 3h-5c0-1-.5-2-1.5-3zM9 21h6M10 18h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M4 16l6-6 4 4 7-8m0 0v6m0-6h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
}

const advantages = [
  ['trophy', 'AI-Native from Day One', 'We do not bolt AI on as an afterthought. Innovation is baked into everything we build.'],
  ['bulb', 'Fast Turnaround', '2–3 week delivery on web projects. We respect your time and your business momentum.'],
  ['target', 'Transparent Pricing', 'Clear packages, You know exactly what you are getting before you say yes.'],
  ['trend', 'End-to-End Partnership', 'We stay with you after launch, maintenance, updates, and growth support.'],
]

const Services = ({ services }) => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,185,223,0.25),transparent_28%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(980px,calc(100%-36px))]">
          <p className="mb-4 text-xs font-black uppercase text-[#aee8ff]">Our Services</p>
          <h1 className="mb-5 text-[clamp(2.4rem,4vw,5.5rem)] font-black leading-none">Digital Solutions For Every Business Need</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#c7e5f8]">
            Comprehensive technology services designed to help you launch, scale, automate, and operate with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article className="group flex min-h-80 flex-col rounded-lg border border-[#d7e5f2] bg-white p-7 shadow-[0_18px_48px_rgba(6,23,43,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_20px_48px_rgba(8,36,67,0.16)]" key={service.slug}>
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] shadow-[0_14px_30px_rgba(8,36,67,0.12)] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                {serviceIcons[service.slug]}
              </span>
              <h2 className="mb-3 text-2xl font-black text-[#06172b]">{service.title}</h2>
              <p className="mb-5 leading-7 text-[#5c6f84]">{service.summary}</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-[#36566f]">
                {service.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="mt-auto font-black text-[#0b3765]" href={`#/services/${service.slug}`}>Learn More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
          <div className="mb-10 text-center">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">How We Deliver Excellence</h2>
            <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#06172b]">Our Approach</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {deliverySteps.map(([number, title, text]) => (
              <article className="group relative overflow-hidden rounded-xl border-2 border-transparent bg-white p-8 shadow-[0_12px_30px_rgba(6,23,43,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_18px_40px_rgba(8,36,67,0.14)]" key={title}>
                <span className="mb-12 grid h-11 w-11 place-items-center rounded-lg bg-[#f7fbff] text-2xl font-black text-[#06172b] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">{number}</span>
                <span className="absolute right-7 top-7 text-6xl font-black leading-none text-[#06172b]/10">{number}</span>
                <h3 className="mb-4 text-2xl font-black text-[#06172b]">{title}</h3>
                <p className="leading-8 text-[#27445f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
          <div className="mb-10 text-center">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">The Delveflow Advantage</h2>
            <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#06172b]">Why Choose Us</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map(([icon, title, text]) => (
              <article className="group rounded-xl border-2 border-[#c8d3df] bg-white px-6 py-7 text-center shadow-[0_12px_28px_rgba(6,23,43,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_18px_40px_rgba(8,36,67,0.14)]" key={title}>
                <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                  {advantageIcons[icon]}
                </span>
                <h3 className="mb-4 text-lg font-black text-[#06172b]">{title}</h3>
                <p className="leading-6 text-[#27445f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
