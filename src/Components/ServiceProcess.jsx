const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We dive deep into your business objectives, target audiences, and current challenges to set a clear foundation.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Research & Strategy',
    description:
      'Conducting user interviews, competitor analysis, and mapping user journeys to craft a robust design strategy.',
    icon: 'clipboard',
  },
  {
    number: '03',
    title: 'Design & Prototype',
    description:
      'Iterative wireframing and high-fidelity UI design, followed by interactive prototypes to visualize the product.',
    icon: 'pen',
  },
  {
    number: '04',
    title: 'Test & Deliver',
    description:
      'Rigorous usability testing with real users to refine the design, followed by a seamless handoff to the engineering team.',
    icon: 'check',
  },
]

// const icons = {
//   search: (
//     <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
//       <circle cx="11" cy="11" r="6.5" stroke="white" strokeWidth="2" />
//       <path d="M20 20l-4.3-4.3" stroke="white" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   ),
//   clipboard: (
//     <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
//       <rect x="6" y="4" width="12" height="17" rx="1.5" stroke="white" strokeWidth="1.7" />
//       <rect x="9" y="2.5" width="6" height="3" rx="1" stroke="white" strokeWidth="1.7" />
//       <path d="M9 11h6M9 15h6" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
//     </svg>
//   ),
//   pen: (
//     <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
//       <path d="M4 20l1-4.5L15.5 5 19 8.5 8.5 19 4 20z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
//       <path d="M13.5 6.5l3.5 3.5" stroke="white" strokeWidth="1.6" />
//     </svg>
//   ),
//   check: (
//     <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
//       <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
//       <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   ),
// }

const ServiceProcess = ({
  badge = 'Our Process',
  title = 'Deep into Your Challenges',
  gradientWord = 'Flow',
  boldPrefix = 'Delve',
  subtitleEnd = 'Seamlessly with Powerful Solutions.',
  description = 'Our collaborative UI/UX process transforms ideas into intuitive digital experiences that users enjoy and businesses trust.',
  steps = processSteps,
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#d7e5f2 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative mx-auto w-[min(900px,calc(100%-36px))]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            {badge}
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2rem)] font-black leading-snug text-[#0a0a0a]">
            <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
             {boldPrefix}
            </span>{' '}
             {title}{' '}
            <span className="bg-gradient-to-r from-[#093b7a] to-[#c7b21c] bg-clip-text text-transparent">
              {gradientWord}
            </span>
            <br />
            {subtitleEnd}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#5b6472]">
            {description}
          </p>
        </div>

        <div className="relative mt-16">

            {/* cener vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-solid border-[#0b3765]" />

          <div className="flex flex-col gap-20">
            {steps.map((step, index) => {
              const isRight = index % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`flex items-center gap-6 ${
                    isRight ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isRight ? 'flex justify-end' : 'flex justify-start'}`}>
                    <div className="w-full max-w-sm rounded-xl border border-[#e3e7ee] bg-white px-5 py-4 shadow-[0_10px_25px_rgba(6,23,43,0.06)]">
                      <h3 className="text-[14px] font-bold text-[#0b3765]">
                        <span>{step.number}</span> {step.title}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] leading-5 text-[#6b7280]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div className="grid h-5 w-5 rotate-45 place-items-center rounded-md bg-[#0b3765] shadow-[0_0_0_5px_rgba(56,185,223,0.15)]">
                      {/* <div className="-rotate-45">{icons[step.icon]}</div> */}
                    </div>
                  </div>

                  <div className="flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess