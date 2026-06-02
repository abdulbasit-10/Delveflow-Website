import { useState } from 'react'
import dfLogoMark from '../assets/df-logo-mark.png'

const navItems = [
  { label: 'Home', href: '#/home', page: 'home' },
  { label: 'About Us', href: '#/about', page: 'about' },
  { label: 'Services', href: '#/services', page: 'services' },
  { label: 'How We Work', href: '#/howwework', page: 'howwework' },
  { label: 'Projects', href: '#/projects', page: 'projects' },
  { label: 'Career', href: '#/career', page: 'career' },
  { label: 'Contact', href: '#/contact', page: 'contact' },
]

const Header = ({ currentPage }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-[#d7e5f2] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,100%)] items-center justify-between gap-5 px-5 py-3">
      <a className="inline-flex items-center gap-3 leading-none text-[#082443]" href="#/home" aria-label="DF home">
        <img className="h-12 w-auto object-contain" src={dfLogoMark} alt="" aria-hidden="true" />
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
        {navItems.map((item) => (
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
        ))}
      </nav>
      </div>
    </header>
  )
}

export default Header
