import { useState } from 'react'

const projects = [
  ['All', 'AI Support Desk', 'AI assistant for routing questions and summarizing tickets.'],
  ['Web Development', 'Operations Portal', 'Custom workflow software for tasks, approvals, and reports.'],
  ['AI Solutions', 'Smart Document Assistant', 'AI workflow for document search, summaries, and internal knowledge access.'],
  ['Cloud', 'Cloud Launch Stack', 'Deployment pipeline with monitoring, backups, and staging.'],
  ['App Development', 'Mobile Booking App', 'Cross-platform scheduling, notifications, and customer profiles.'],
]

const categories = ['All', 'Web Development', 'App Development', 'AI Solutions', 'Cloud']
const stats = [
  ['150+', 'Total Projects'],
  ['100+', 'Happy Clients'],
  ['98%', 'Success Rate'],
  ['24/7', 'Support'],
]

const Portfolio = () => {
  const [active, setActive] = useState('All')
  const visibleProjects = projects.filter(([category]) => active === 'All' || category === active)

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
              onClick={() => setActive(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {visibleProjects.map(([, title, description], index) => (
            <article className="rounded-lg border border-[#d7e5f2] bg-white p-6 shadow-[0_18px_48px_rgba(6,23,43,0.08)]" key={title}>
              <div className="mb-5 grid h-36 place-items-center rounded-lg bg-gradient-to-br from-[#eef7ff] via-white to-[#d7f4ec]">
                <span className="font-serif text-5xl font-black text-[#0b3765]">Df</span>
              </div>
              <span className="font-black text-[#38b9df]">0{index + 1}</span>
              <h2 className="my-3 text-2xl font-black text-[#06172b]">{title}</h2>
              <p className="leading-7 text-[#5c6f84]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16">
        <div className="mx-auto w-[min(980px,calc(100%-36px))] text-center">
          <h2 className="mb-3 text-[clamp(2rem,4vw,3.3rem)] font-black text-[#06172b]">Our Impact</h2>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-8 text-[#06172b]">
            Real numbers that showcase the value we deliver to our clients.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div className="rounded-xl border-2 border-[#c8d3df] bg-white px-6 py-7 shadow-[0_10px_24px_rgba(6,23,43,0.04)]" key={label}>
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
