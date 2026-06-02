import abdulBasitPhoto from '../assets/abdul-basit.jpg'
import warishaAsadPhoto from '../assets/warisha-asad.jpeg'

const icons = {
  award: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <circle cx="12" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 13l-2 8 5-3 5 3-2-8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <path d="M4 16l6-6 4 4 7-8m0 0v6m0-6h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5zm10-1a3 3 0 1 0 0-6m-2 13h5v-1c0-2-1.4-3.5-3.6-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M8 14a7 7 0 1 1 8 0c-1 1-1.5 2-1.5 3h-5c0-1-.5-2-1.5-3zM9 21h6M10 18h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-4-4 5-7zM8 14l-3 1-2 4 4-2 1-3zM15 5l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M4 13a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-3M4 13v4h4v-6H4zm16 0v4h-4v-6h4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
      <path d="M13 2L4 14h8l-1 8 9-13h-8l1-7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
}

const stats = [
  ['award', '20+', 'Projects Completed'],
  ['globe', '20+', 'Global Clients'],
  ['trend', '2+', 'Years Experience'],
  ['users', '10+', 'Team Members'],
]

const values = [
  ['bulb', 'Innovation', 'We embrace creativity and constantly seek new ways to solve problems and deliver value.'],
  ['heart', 'Integrity', 'We conduct business with honesty, transparency, and ethical practices in every interaction.'],
  ['target', 'Excellence', 'We are committed to delivering the highest quality in everything we do, exceeding expectations.'],
  ['users', 'Collaboration', 'We believe in the power of teamwork and foster a culture of cooperation and mutual respect.'],
  ['rocket', 'Growth', 'We invest in continuous learning and development for both our team and our clients.'],
  ['headset', 'Customer Focus', 'We put our clients at the center of everything we do, ensuring their success is our priority.'],
  ['globe', 'Accountability', 'We take ownership of our actions and results, delivering on our commitments with reliability.'],
  ['bolt', 'Agility', 'We adapt quickly to change, embrace challenges, and respond with speed and flexibility.'],
]

const experts = [
  ['WA', 'Warisha Asad', 'CEO & Founder', 'Visionary leader with 3+ years in Tech Industry', 'https://www.linkedin.com/in/warisha-asad-6259203b0/', warishaAsadPhoto],
  ['AB', 'Abdul Basit', 'Co-Founder', 'Shaping businesses with executive foresight.', 'https://www.linkedin.com/in/abdul-basit-1039b522b/', abdulBasitPhoto],
  ['AN', 'Arifa Naveed', 'Chief Operation Officer', 'Building reliable systems requires both technical depth and strategic vision.', 'https://www.linkedin.com/in/arifa-naveed-2a79773a5/'],
  ['AS', 'Aqsa Siddique ', 'Chief Technology Officer', 'Shaping businesses with executive foresight.', '#/contact'],

]

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,185,223,0.25),transparent_28%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(980px,calc(100%-36px))]">
          <p className="mb-4 text-xs font-black uppercase text-[#aee8ff]">About Delveflow</p>
          <h1 className="mb-5 text-[clamp(2.4rem,4vw,5.5rem)] font-black leading-none">About Delveflow</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#c7e5f8]">
            We are a technology company focused on delivering modern digital experiences through app development, web
            platforms, AI solutions, custom software, cloud, and DevOps.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([icon, value, label]) => (
            <article className="rounded-xl border-2 border-[#c8d3df] bg-white px-6 py-8 text-center shadow-[0_14px_34px_rgba(6,23,43,0.06)]" key={label}>
              <span className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765]">
                {icons[icon]}
              </span>
              <strong className="block text-3xl font-black text-[#0b3765]">{value}</strong>
              <span className="mt-1 block text-[#06172b]">{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-36px))] gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-xs font-black uppercase text-[#0d5790]">Your Trusted Technology Partner</p>
          <h2 className="mb-5 text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight text-[#06172b]">
            Building reliable digital products for ambitious teams.
          </h2>
          <p className="leading-8 text-[#5c6f84]">
            Delveflow combines business understanding, product design, engineering discipline, and cloud operations to create
            software that works in the real world. We focus on clarity, maintainability, and long-term value.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="min-h-40 rounded-lg bg-[linear-gradient(135deg,#082443,#0d5790_55%,#38b9df)] p-6 text-white shadow-[0_18px_45px_rgba(8,36,67,0.18)]">
            <h3 className="text-2xl font-black">Mission</h3>
            <p className="mt-3 leading-7 text-[#d8f0ff]">To help businesses solve meaningful problems through modern, scalable, and practical technology.</p>
          </div>
          <div className="min-h-40 rounded-lg bg-[linear-gradient(135deg,#082443,#0d5790_55%,#38b9df)] p-6 text-white shadow-[0_18px_45px_rgba(8,36,67,0.18)]">
            <h3 className="text-2xl font-black">Vision</h3>
            <p className="mt-3 leading-7 text-[#d8f0ff]">To become a trusted digital transformation partner for companies that want software done properly.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef7ff] py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-36px))]">
          <div className="mb-10 text-center">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">Our Core Values</h2>
            <p className="mx-auto mt-3 max-w-3xl leading-8 text-[#27445f]">
              The principles that guide how we build, communicate, and grow as a technology company.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([icon, title, text]) => (
              <article className="group rounded-xl border-2 border-[#c8d3df] bg-white px-5 py-6 text-center shadow-[0_12px_28px_rgba(6,23,43,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0b3765] hover:shadow-[0_18px_40px_rgba(8,36,67,0.16)]" key={title}>
                <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg bg-[#f7fbff] text-[#0b3765] transition duration-300 group-hover:bg-[#082443] group-hover:text-[#38b9df]">
                  {icons[icon]}
                </span>
                <h3 className="mb-3 text-lg font-black text-[#06172b]">{title}</h3>
                <p className="leading-6 text-[#27445f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">Meet The Experts</h2>
          <p className="mt-3 text-sm font-black uppercase text-[#0d5790]">Our Team</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {experts.map(([initials, name, role, text, linkedinUrl, photo]) => (
            <article className="rounded-xl border-2 border-[#d7e5f2] bg-white px-7 py-8 text-center shadow-[0_14px_34px_rgba(6,23,43,0.06)]" key={name}>
              <div className="mx-auto mb-6 grid h-28 w-28 place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_35%_25%,#38b9df,#0b3765_62%,#06172b)] text-3xl font-black text-white">
                {photo ? (
                  <img className="h-full w-full object-cover" src={photo} alt={name} />
                ) : (
                  initials
                )}
              </div>
              <h3 className="text-xl font-black text-[#06172b]">{name}</h3>
              <p className="mt-2 text-sm text-[#0d5790]">{role}</p>
              <p className="mt-4 min-h-20 leading-7 text-[#5c6f84]">{text}</p>
              <a
                className="mx-auto mt-4 grid h-8 w-8 place-items-center rounded-md bg-[#082443] text-sm font-black text-[#38b9df]"
                href={linkedinUrl}
                target={linkedinUrl.startsWith('http') ? '_blank' : undefined}
                rel={linkedinUrl.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={`${name} LinkedIn`}
              >
                in
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
