import dfLogoMark from '../assets/df-logo-mark.png'

const quickLinks = [
  ['Home', '#/home'],
  ['About Us', '#/about'],
  ['Services', '#/services'],
  ['How We Work', '#/howwework'],
  ['Projects', '#/projects'],
  ['Career', '#/career'],
  ['Contact', '#/contact'],
]

const footerServices = [
  ['Web Development', '#/services/web-development'],
  ['App Development', '#/services/app-development'],
  ['UI/UX Designing', '#/services/ui-ux-designing'],
  ['AI Solutions', '#/services/ai-solutions'],
  ['SaaS Development', '#/services/saas-development'],
  ['Cloud & DevOps', '#/services/cloud-devops'],
]

const socialLinks = ['in', 'ln', 'fb']

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
}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#06172b] px-5 py-12 text-white lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,185,223,0.18),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(18,145,111,0.18),transparent_28%),linear-gradient(135deg,#06172b_0%,#0b3765_58%,#082443_100%)]" />
      <div className="relative mx-auto w-[min(1220px,100%)]">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr_1fr_1.25fr]">
          <div>
            <a className="mb-6 inline-flex items-center gap-3" href="#/home" aria-label="DF home">
              <span className="grid h-12 w-[78px] place-items-center rounded-md bg-white/95 p-1.5 shadow-sm">
                <img className="h-full w-full object-contain" src={dfLogoMark} alt="" aria-hidden="true" />
              </span>
              {/* <span className="text-xl font-black text-white">Df Solutions</span> */}
            </a>
            <p className="max-w-[310px] leading-7 text-[#c7e5f8]">
              Building scalable digital solutions for modern businesses. Transform your ideas into reality with our
              expert team.
            </p>
            <div className="mt-7 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  className="grid h-9 w-9 place-items-center rounded-md bg-white/10 text-sm font-black text-[#aee8ff] ring-1 ring-white/15 transition hover:bg-[#38b9df] hover:text-[#06172b]"
                  href="#/contact"
                  key={item}
                  aria-label={`DF social ${item}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-base font-black text-white">Quick Links</h2>
            <nav className="grid gap-4">
              {quickLinks.map(([label, href]) => (
                <a className="text-[#c7e5f8] transition hover:text-[#38b9df]" href={href} key={label}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-6 text-base font-black text-white">Services</h2>
            <nav className="grid gap-4">
              {footerServices.map(([label, href]) => (
                <a className="text-[#c7e5f8] transition hover:text-[#38b9df]" href={href} key={label}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-6 text-base font-black text-white">Contact Us</h2>
            <div className="grid gap-5">
              <a className="grid grid-cols-[24px_1fr] gap-3 text-[#c7e5f8]" href="mailto:info@delveflow.co">
                <span className="text-[#38b9df]" aria-hidden="true">{icons.mail}</span>
                <span>info@delveflow.co</span>
              </a>
              <a className="grid grid-cols-[24px_1fr] gap-3 text-[#c7e5f8]" href="tel:+923098968639">
                <span className="text-[#38b9df]" aria-hidden="true">{icons.phone}</span>
                <span>+92 309 8968639</span>
              </a>
              <p className="grid grid-cols-[24px_1fr] gap-3 text-[#c7e5f8]">
                <span className="text-[#38b9df]" aria-hidden="true">{icons.pin}</span>
                <span>Peshawar, Pakistan</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/15 pt-7 text-sm text-[#c7e5f8] md:flex-row">
          <span>(c) 2026 Df Solutions. All rights reserved.</span>
          <div className="flex flex-wrap gap-6">
            <a className="hover:text-[#38b9df]" href="#/terms">Terms of Service</a>
            <a className="hover:text-[#38b9df]" href="#/privacy">Privacy Policy</a>
            <a className="hover:text-[#38b9df]" href="#/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
