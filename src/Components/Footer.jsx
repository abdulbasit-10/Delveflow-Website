

import dfLogoMark from '../assets/delveLogo.png'

const quickLinks = [
  { label: 'Home', href: '#/home' },
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'How We Work', href: '#/howwework' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Career', href: '#/career' },
]

const services = [
  { label: 'Web Development', href: '#/services/web-development' },
  { label: 'App Development', href: '#/services/app-development' },
  { label: 'UI/UX Designing', href: '#/services/ui-ux-designing' },
  { label: 'AI Solutions', href: '#/services/ai-solutions' },
  { label: 'SaaS Development', href: '#/services/saas-development' },
  { label: 'Cloud & DevOps', href: '#/services/cloud-devops' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/delveflow?igsh=MXh0bGtibTJqcDZucg==',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/delveflow/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8" cy="9" r="1" fill="currentColor" />
        <path d="M8 11.5v5M16 16.5v-3a2 2 0 00-4 0v3M12 11.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1AMUv5tXQB/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M14 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H8.5v3H10.5V19h3v-6h2l.5-3H13.5v-1.5c0-.5.5-1 1-1z"
          stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const contactInfo = [
  {
    label: 'info@delveflow.co',
    href: 'mailto:info@delveflow.co',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: '+92 3469127976',
    href: 'tel:+923469127976',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M5 4.5h3l1.3 4-2 1.5a12 12 0 006.7 6.7l1.5-2 4 1.3v3a1.5 1.5 0 01-1.6 1.5A16 16 0 015 6.1 1.5 1.5 0 015 4.5z"
          stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Peshawar, Pakistan',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z"
          stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#001530] text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div>
            <a href="#/home" className="inline-flex items-center gap-2" aria-label="Delveflow home">
              <img src={dfLogoMark} alt="" className="h-10 w-auto object-contain" />
            </a>
            <p className="mt-5 max-w-xs text-[14px] leading-6 text-white/70">
              Building scalable digital solutions for modern businesses.
              Transform your ideas into reality with our expert team.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#38B9DF] text-white transition hover:bg-[#2ca3c7]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[15px] font-bold text-white">Quick Links</h4>
            <ul className="mt-4 grid gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14px] text-white/70 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[15px] font-bold text-white">Services</h4>
            <ul className="mt-4 grid gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-[14px] text-white/70 transition hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[15px] font-bold text-white">Contact Us</h4>
            <ul className="mt-4 grid gap-4">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#38B9DF] text-white">
                    {c.icon}
                  </span>
                  <a href={c.href} className="text-[14px] text-white/80 transition hover:text-white">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-36px))] flex-col items-center justify-between gap-3 py-6 text-[13px] text-white/50 sm:flex-row">
          <p>© {currentYear} Encova Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#/terms" className="transition hover:text-white/80">Terms of Service</a>
            <a href="#/privacy" className="transition hover:text-white/80">Privacy Policy</a>
            <a href="#/cookies" className="transition hover:text-white/80">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer