import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import dfLogoMark from '../assets/delveLogo.png'


// ===== NAVIGATION DATA =====
const navItems = [
  { label: 'Home', href: '/', page: 'home' },
  { label: 'About Us', href: '/about', page: 'about' },
  {
    label: 'Services',
    href: '/services',
    page: 'services',
    children: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'SaaS Development', href: '/services/saas-development' },
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'Cloud And DevOps', href: '/services/cloud-and-devops' },
    ],
  },
  { label: 'How We Work', href: '/howwework', page: 'howwework' },
  { label: 'Projects', href: '/projects', page: 'projects' },
  { label: 'Career', href: '/career', page: 'career' },
  { label: 'Contact', href: '/contact', page: 'contact' },
]

const Header = ({ currentPage }) => {
  // Mobile menu state
  const [open, setOpen] = useState(false)
  // Services dropdown state
  const [servicesOpen, setServicesOpen] = useState(false)
  // Reference for click outside detection
  const servicesRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-30 border-b border-[#d7e5f2] bg-white/95 font-sans backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,100%)] items-center justify-between gap-5 px-3 py-3">
        
        {/* Logo - Updated to Link */}
        <Link to="/" className="inline-flex items-center gap-3 leading-none text-[#082443]" aria-label="DF home">
          <img className="h-12 w-auto object-contain ml-0" src={dfLogoMark} alt="" aria-hidden="true" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-[#d7e5f2] bg-white lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-6 bg-[#082443]" />
            <span className="block h-0.5 w-6 bg-[#082443]" />
            <span className="block h-0.5 w-6 bg-[#082443]" />
          </span>
        </button>

        {/* Navigation */}
        <nav
          className={`absolute left-5 right-5 top-[74px] ml-10 rounded-[18px] bg-white shadow-[inset_0_7px_6px_rgba(0,0,0,0.06),0_12px_35px_rgba(0,0,0,0.08),inset_0_-7px_6px_rgba(0,0,0,0.06)] lg:static lg:flex lg:w-fit lg:items-center lg:gap-1 lg:p-2 ${
            open ? 'grid gap-1 !rounded-[18px]' : 'hidden lg:flex'
          }`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive =
              currentPage === item.page ||
              (currentPage === 'portfolio' && item.page === 'projects')

            // Services Dropdown
            return item.children ? (
              <div key={item.href} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between gap-1.5 rounded-full px-4 py-2 text-[15px] font-normal transition lg:w-auto ${
                    isActive
                      ? 'bg-[#0b1b2f] text-white'
                      : 'text-[#0a1b2f] hover:bg-[#f2f7fc] hover:text-[#0b3765]'
                  }`}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  {isActive && <span className="mr-1">•</span>}
                  {item.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  className={`grid gap-1 rounded-lg border border-[#d7e5f2] bg-white p-2 shadow-[0_24px_70px_rgba(6,23,43,0.13)] lg:absolute lg:left-0 lg:top-[calc(100%+10px)] lg:w-56 ${
                    servicesOpen ? 'grid' : 'hidden'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="rounded-md px-3 py-2 text-[14px] font-normal text-[#0a1b2f] transition hover:bg-[#f2f7fc] hover:text-[#0b3765]"
                      onClick={() => {
                        setServicesOpen(false)
                        setOpen(false)
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              // Regular nav link - Updated to Link
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-full px-4 py-2 text-[15px] font-normal transition ${
                  isActive
                    ? 'bg-[#0b1b2f] text-white'
                    : 'text-[#0a1b2f] hover:bg-[#f2f7fc] hover:text-[#0b3765]'
                }`}
                onClick={() => setOpen(false)}
              >
                {isActive && <span className="mr-1">•</span>}
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button - Updated to Link */}
        <Link
          to="/projects"
          className="relative inline-flex items-center rounded-full bg-[#001530] py-2.5 pl-5 pr-10 text-[15px] font-medium text-white transition hover:bg-[#062142]"
        >
          <span className="tracking-wide">See More Projects</span>
          <span className="absolute -right-2.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#FFE459] text-[#001530] shadow-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="#001530"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
        
      </div>
    </header>
  )
}

export default Header