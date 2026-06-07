import { useState } from 'react'

const contactItems = [
  ['mail', 'Email', 'info@delveflow.co', 'mailto:info@delveflow.co'],
  ['phone', 'Phone', '+92 3469127976', 'tel:+92 3469127976'],
  ['pin', 'Address', 'Peshawar, Pakistan', '#/contact'],
]

const socialLinks = [
  ['instagram', 'Instagram', 'https://www.instagram.com/delveflow?igsh=MXh0bGtibTJqcDZucg=='],
  ['linkedin', 'LinkedIn', 'https://www.linkedin.com/company/delveflow/'],
  ['facebook', 'Facebook', 'https://www.facebook.com/share/1AMUv5tXQB/'],
]

const icons = {
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M8 5l2 4-2.5 1.5c1.1 2.2 2.8 3.9 5 5L14 13l4 2-1 4c-7.5-.2-13.8-6.5-14-14l5-1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M12 21s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M6.5 9.5V18M10.5 18v-8.5M10.5 13.2c0-2.4 5-2.9 5 1.1V18M6.5 6.4v.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.4" cy="7.7" r="0.8" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M14.5 8.2h-1.6c-1 0-1.4.5-1.4 1.5V12h3l-.5 3h-2.5v5M9 12h5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
}

const Contact = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,185,223,0.25),transparent_28%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(980px,calc(100%-36px))]">
          <p className="mb-4 text-xs font-black uppercase text-[#aee8ff]">Get In Touch</p>
          <h1 className="mb-5 text-[clamp(2.4rem,4vw,5.5rem)] font-black leading-none">Let's Build Something Great Together</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#c7e5f8]">
            Ready to start your next digital project? Tell us what you need and the DF team will help you plan the next move.
          </p>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_18%_12%,rgba(56,185,223,0.12),transparent_28%),linear-gradient(180deg,#eef7ff_0%,#f8fcff_100%)] px-5 py-12 text-[#16253a] lg:px-10">
        <div className="mx-auto grid w-[min(1100px,100%)] gap-7 lg:grid-cols-[1fr_1fr]">
          <form className="rounded-xl border border-[#b9d8ed] bg-white p-6 shadow-[0_16px_34px_rgba(6,23,43,0.12)]" onSubmit={handleSubmit}>
            <h2 className="mb-6 text-2xl font-black text-[#06172b]">Send us a message</h2>

            <div className="grid gap-4">
              <label className="grid gap-2 text-xs font-bold text-[#16253a]">
                Full Name *
                <input className="h-11 rounded-md border border-[#c8d3df] bg-white px-4 text-sm outline-none transition focus:border-[#0b3765] focus:ring-4 focus:ring-[#38b9df]/25" placeholder="John Doe" required />
              </label>
              <label className="grid gap-2 text-xs font-bold text-[#16253a]">
                Email Address *
                <input className="h-11 rounded-md border border-[#c8d3df] bg-white px-4 text-sm outline-none transition focus:border-[#0b3765] focus:ring-4 focus:ring-[#38b9df]/25" placeholder="john@example.com" required type="email" />
              </label>
              <label className="grid gap-2 text-xs font-bold text-[#16253a]">
                Phone Number *
                <input className="h-11 rounded-md border border-[#c8d3df] bg-white px-4 text-sm outline-none transition focus:border-[#0b3765] focus:ring-4 focus:ring-[#38b9df]/25" placeholder="+1 (555) 123-4567" required type="tel" />
              </label>
              <label className="grid gap-2 text-xs font-bold text-[#16253a]">
                Your Message *
                <textarea className="min-h-28 rounded-md border border-[#c8d3df] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0b3765] focus:ring-4 focus:ring-[#38b9df]/25" placeholder="Tell us about your project..." required />
              </label>
            </div>

            <button className="mt-6 h-12 w-full rounded-md bg-[#06172b] text-sm font-black text-white shadow-[0_10px_22px_rgba(6,23,43,0.24)] transition hover:bg-[#0b3765]" type="submit">
              Send Message
            </button>
            {sent && <p className="mt-4 text-sm font-black text-[#0d5790]">Thanks. Your message is ready for the DF team.</p>}
          </form>

          <div>
            <h2 className="mb-4 text-2xl font-black text-[#06172b]">Get in touch</h2>
            <p className="mb-4 max-w-xl leading-7 text-[#27445f]">
              We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon
              as we can.
            </p>

            <div className="grid gap-4">
              {contactItems.map(([icon, title, value, href]) => (
                <a className="group grid min-h-[92px] grid-cols-[44px_1fr] items-center gap-4 rounded-xl border border-transparent bg-white p-6 shadow-[0_8px_24px_rgba(6,23,43,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_14px_34px_rgba(6,23,43,0.10)]" href={href} key={title}>
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-[#eef7ff] text-[#0b3765] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                    {icons[icon]}
                  </span>
                  <span>
                    <strong className="block text-sm font-black text-[#06172b]">{title}</strong>
                    <span className="mt-1 block text-sm text-[#0b3765]">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-base font-black text-[#06172b]">Follow us</h3>
              <div className="flex gap-3">
                {socialLinks.map(([icon, label, href]) => (
                  <a
                    className="grid h-10 w-10 place-items-center rounded-lg bg-[#e9edf3] text-[#06172b] transition hover:bg-[#38b9df] hover:text-[#06172b]"
                    href={href}
                    key={icon}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`DF ${label}`}
                  >
                    {icons[icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
