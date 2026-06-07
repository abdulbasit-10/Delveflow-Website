import { useState } from 'react'
import projects from '../data/portfolioProjects.js'

const categories = ['All', 'Web Development', 'App Development', 'AI Solutions', 'SaaS Development']
const projectsPerPage = 3
const stats = [
  ['20+', 'Total Projects'],
  ['100+', 'Happy Clients'],
  ['98%', 'Success Rate'],
  ['24/7', 'Support'],
]

const Portfolio = () => {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(0)
  const visibleProjects = projects.filter((project) => active === 'All' || project.category === active)
  const totalPages = Math.ceil(visibleProjects.length / projectsPerPage)
  const paginatedProjects = visibleProjects.slice(page * projectsPerPage, (page + 1) * projectsPerPage)

  const selectCategory = (category) => {
    setActive(category)
    setPage(0)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,185,223,0.25),transparent_28%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(980px,calc(100%-36px))]">
          <p className="mb-4 text-xs font-black uppercase text-[#aee8ff]">Our Portfolio</p>
          <h1 className="mb-5 text-[clamp(2.4rem,4vw,5.5rem)] font-black leading-none">Digital Projects That Show What DF Can Build</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#c7e5f8]">
            Explore sample digital products across web, app, AI, custom software, and cloud delivery.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              className={`rounded-full px-5 py-2 text-sm font-black ${active === category ? 'bg-[#06172b] text-white' : 'bg-[#eef7ff] text-[#27445f]'}`}
              key={category}
              onClick={() => selectCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => (
            <article className="group flex min-h-[470px] flex-col overflow-hidden rounded-xl border-2 border-[#c8d3df] bg-white p-5 shadow-[0_12px_28px_rgba(6,23,43,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_20px_48px_rgba(8,36,67,0.16)]" key={project.title}>
              <div className="mb-6 overflow-hidden rounded-lg">
                {project.preview ? (
                  <img
                    className="h-48 w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    src={project.preview}
                    alt={`${project.title} interface preview`}
                  />
                ) : (
                <div className="rounded-md bg-white p-3 shadow-[0_6px_18px_rgba(6,23,43,0.08)]">
                  <div className="mb-3 flex items-center justify-between border-b border-[#e4edf5] pb-2">
                    <strong className="text-[10px] text-[#06172b]">{project.title}</strong>
                    <span className="h-2 w-2 rounded-full bg-[#FF9F00]" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Revenue', 'Costs', 'Profit'].map((label, index) => (
                      <div className="rounded border border-[#e4edf5] p-2" key={label}>
                        <span className="block text-[8px] text-[#697386]">{label}</span>
                        <strong className="mt-1 block text-[11px] text-[#0b3765]">
                          {index === 0 ? 'Rs 125K' : index === 1 ? 'Rs 82K' : 'Rs 43K'}
                        </strong>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-[1.1fr_0.9fr] gap-2">
                    <div className="space-y-2 rounded border border-[#e4edf5] p-2">
                      <span className="block h-2 w-3/4 rounded bg-[#d7e5f2]" />
                      <span className="block h-2 w-full rounded bg-[#eef7ff]" />
                      <span className="block h-2 w-5/6 rounded bg-[#d7f4ec]" />
                    </div>
                    <div className="rounded border border-[#e4edf5] p-2">
                      <span className="mb-3 block h-2 w-2/3 rounded bg-[#d7e5f2]" />
                      <span className="block h-2 w-full rounded bg-[#38b9df]" />
                      <span className="mt-2 block h-2 w-3/4 rounded bg-[#FF9F00]" />
                    </div>
                  </div>
                </div>
                )}
              </div>
              <span className="text-sm uppercase text-[#526174]">{project.category}</span>
              <h2 className="my-4 text-2xl font-black text-[#06172b]">{project.title}</h2>
              <p className="line-clamp-4 leading-7 text-[#5c6f84]">{project.description}</p>
              <a
                className="mt-auto pt-5 font-black text-[#082443] transition group-hover:text-[#FF9F00]"
                href={project.url || '#/contact'}
                target={project.url ? '_blank' : undefined}
                rel={project.url ? 'noreferrer' : undefined}
              >
                View More
              </a>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              className="min-h-11 rounded-md border-2 border-[#c8d3df] bg-white px-5 font-black text-[#082443] transition hover:border-[#0b3765] hover:bg-[#082443] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              type="button"
              disabled={page === 0}
              onClick={() => setPage((currentPage) => currentPage - 1)}
            >
              Previous
            </button>
            <button
              className="min-h-11 rounded-md border-2 border-[#c8d3df] bg-white px-5 font-black text-[#082443] transition hover:border-[#0b3765] hover:bg-[#082443] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              type="button"
              disabled={page === totalPages - 1}
              onClick={() => setPage((currentPage) => currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </section>

      <section className="bg-[#f7f8fa] py-16">
        <div className="mx-auto w-[min(980px,calc(100%-36px))] text-center">
          <h2 className="mb-3 text-[clamp(2rem,4vw,3.3rem)] font-black text-[#06172b]">Our Impact</h2>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-8 text-[#06172b]">
            Real numbers that showcase the value we deliver to our clients.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div className="rounded-xl border-2 border-[#c8d3df] bg-white px-6 py-7 shadow-[0_10px_24px_rgba(6,23,43,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_18px_40px_rgba(8,36,67,0.14)]" key={label}>
                <strong className="block text-3xl font-black leading-none text-[#697386]">{value}</strong>
                <span className="mt-3 block text-[#526174]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto my-16 w-[min(980px,calc(100%-36px))] rounded-lg bg-[#06172b] p-8 text-center text-white">
        <h2 className="text-3xl font-black">Let's Discuss Your Success Story</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#c7e5f8]">Ready to build your next digital product with DF?</p>
        <a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#38b9df] px-6 font-black text-[#06172b]" href="#/contact">Start Project</a>
      </section>
    </>
  )
}

export default Portfolio
