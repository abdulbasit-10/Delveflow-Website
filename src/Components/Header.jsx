import { useEffect, useRef, useState } from 'react'
import dfLogoMark from '../assets/delveLogo.png'

const navItems = [
  { label: 'Home', href: '#/home', page: 'home' },
  { label: 'About Us', href: '#/about', page: 'about' },
  {
    label: 'Services',
    href: '#/services',
    page: 'services',
    children: [
      { label: 'Web Development', href: '#/services/web-development' },
      { label: 'App Development', href: '#/services/app-development' },
      { label: 'UI/UX Design', href: '#/services/ui-ux-design' },
      { label: 'Digital Marketing', href: '#/services/digital-marketing' },
    ],
  },
  { label: 'How We Work', href: '#/howwework', page: 'howwework' },
  { label: 'Projects', href: '#/projects', page: 'projects' },
  { label: 'Career', href: '#/career', page: 'career' },
  { label: 'Contact', href: '#/contact', page: 'contact' },
]

const Header = ({ currentPage }) => {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef(null)

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
    <header className="sticky top-0 z-30 border-b border-[#d7e5f2] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,100%)] items-center justify-between gap-5 px-3 py-3">
      <a className="inline-flex items-center gap-3 leading-none text-[#082443]" href="#/home" aria-label="DF home">
        <img className="h-12 w-auto object-contain ml-0" src={dfLogoMark} alt="" aria-hidden="true" />
        {/* <span className="text-2xl font-black tracking-normal">Delveflow</span> */}
      </a>
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
      <nav
        className={`absolute left-5 right-5 top-[74px] rounded-lg border border-[#d7e5f2] bg-white p-3 shadow-[0_24px_70px_rgba(6,23,43,0.13)] lg:static lg:flex lg:items-center lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
          open ? 'grid gap-1' : 'hidden lg:flex'
        }`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) =>
          item.children ? (
            <div key={item.href} className="relative" ref={servicesRef}>
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-1.5 rounded-md px-1 py-2 text-[15px] font-bold text-[#0a1b2f] transition hover:text-[#0b3765] lg:w-auto ${
                  currentPage === item.page
                    ? 'text-[#0b3765] underline decoration-[#06172b] decoration-2 underline-offset-8'
                    : ''
                }`}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((value) => !value)}
              >
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
              <div
                className={`grid gap-1 rounded-lg border border-[#d7e5f2] bg-white p-2 shadow-[0_24px_70px_rgba(6,23,43,0.13)] lg:absolute lg:left-0 lg:top-[calc(100%+10px)] lg:w-56 ${
                  servicesOpen ? 'grid' : 'hidden'
                }`}
              >
                {item.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    className="rounded-md px-3 py-2 text-[14px] font-semibold text-[#0a1b2f] transition hover:bg-[#f2f7fc] hover:text-[#0b3765]"
                    onClick={() => {
                      setServicesOpen(false)
                      setOpen(false)
                    }}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-1 py-2 text-[15px] font-bold text-[#0a1b2f] transition hover:text-[#0b3765] ${
                currentPage === item.page || (currentPage === 'portfolio' && item.page === 'projects')
                  ? 'text-[#0b3765] underline decoration-[#06172b] decoration-2 underline-offset-8'
                  : ''
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          )
        )}
      </nav>
      <a
        href="#/projects"
        className="hidden lg:inline-flex items-center gap-3 rounded-full bg-[#001530] py-1.5 pl-6 pr-1.5 text-[15px] font-bold text-white transition hover:bg-[#062142]"
      >
        See More Projects
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#FFE459]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#001530"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
      </div>
    </header>
  )
}
export default Header