

import dfLogoMark from '../assets/footerlogo.png'
import Email_icon from "../assets/email_icon.png"
import Phone_icon from "../assets/phone_icon.png"
import Location_icon from "../assets/location_icon.png"
import Facebook_icon from '../assets/facebook_icon.png'
import Linkedin_icon from "../assets/linkedin_icon.png"
import Instagram_icon from "../assets/instagram_icon.png"

const quickLinks = [
  { label: 'Home', href: '#/home' },
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'How We Work', href: '#/homework' },
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
  label: 'Facebook',
  href: 'https://www.facebook.com/delveflow?igsh=MXh0bGtibTJqcDZucg==',
  icon: (
    <img 
      src={Facebook_icon} 
      alt="Instagram" 
      className="h-4 w-4 object-contain"
    />
  ),
},
   
  {
  label: 'Instagram',
  href: 'https://www.instagram.com/delveflow?igsh=MXh0bGtibTJqcDZucg==',
  icon: (
    <img 
      src={Instagram_icon} 
      alt="Instagram" 
      className="h-4 w-4 object-contain"
    />
  ),
},

{
  label: 'Linkedin',
  href: 'https://www.instagram.com/delveflow?igsh=MXh0bGtibTJqcDZucg==',
  icon: (
    <img 
      src={Linkedin_icon} 
      alt="Linkedin" 
      className="h-4 w-4 object-contain"
    />
  ),
},
]

const contactInfo = [
  {
    label: 'info@delveflow.co',
    href: 'mailto:info@delveflow.co',
    icon: (
      <img src={Email_icon} className="h-4 w-4">
        
      </img>
    ),
  },
  {
    label: '+92 3469127976',
    href: 'tel:+923469127976',
    icon: (
      <img src={Phone_icon} className="h-4 w-4">
        
      </img>
    ),
  },
  {
    label: 'Peshawar, Pakistan',
    href: '#',
    icon: (
      <img src={Location_icon} className="h-4 w-4">
        
      </img>
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
              <img src={dfLogoMark} alt="" className="h-19 w-auto object-contain" />
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
          <p>© {currentYear} Delve Flow. All rights reserved.</p>
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