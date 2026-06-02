const steps = [
  {
    number: '01',
    title: 'Discovery and Strategy',
    columns: ['Business goals', 'User needs', 'Technical audit'],
    text: 'We understand your vision, market, workflow, users, and success metrics before design or development begins.',
  },
  {
    number: '02',
    title: 'Planning and Design',
    columns: ['UX structure', 'System architecture', 'Delivery roadmap'],
    text: 'We turn requirements into clear user flows, product architecture, sprint plans, and realistic timelines.',
  },
  {
    number: '03',
    title: 'Development and Testing',
    columns: ['Frontend', 'Backend', 'Quality assurance'],
    text: 'We build in focused cycles with clean code, regular reviews, testing, and transparent progress updates.',
  },
  {
    number: '04',
    title: 'Launch and Support',
    columns: ['Deployment', 'Monitoring', 'Optimization'],
    text: 'We deploy, monitor, stabilize, and improve your product so it can keep growing after launch.',
  },
]

const HowWeWork = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#06172b] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,185,223,0.25),transparent_28%),linear-gradient(135deg,#06172b,#0b3765)]" />
        <div className="relative mx-auto w-[min(980px,calc(100%-36px))]">
          <p className="mb-4 text-xs font-black uppercase text-[#aee8ff]">How We Work</p>
          <h1 className="mb-5 text-[clamp(2.4rem,4vw,5.5rem)] font-black leading-none">Our Proven Development Process</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#c7e5f8]">
            A structured approach that keeps projects clear, collaborative, and focused from first idea to final launch.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-36px))] py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase text-[#0d5790]">Step-by-Step Success</p>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black text-[#06172b]">From concept to launch</h2>
        </div>
        <div className="grid gap-7">
          {steps.map((step) => (
            <article className="grid gap-5 rounded-lg border border-[#d7e5f2] bg-white p-6 shadow-[0_18px_48px_rgba(6,23,43,0.08)] lg:grid-cols-[84px_1fr]" key={step.title}>
              <span className="grid h-16 w-16 place-items-center rounded-lg bg-[#06172b] text-xl font-black text-white">{step.number}</span>
              <div>
                <h3 className="mb-3 text-2xl font-black text-[#06172b]">{step.title}</h3>
                <p className="mb-5 leading-7 text-[#5c6f84]">{step.text}</p>
                <div className="grid gap-3 md:grid-cols-3">
                  {step.columns.map((item) => (
                    <div className="rounded-lg bg-[#eef7ff] px-4 py-3 font-bold text-[#27445f]" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HowWeWork
