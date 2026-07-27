const defaultTools = [
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
]

const toolIcons = {
  figma: (
    <svg viewBox="0 0 38 57" className="h-5 w-5">
      <path d="M19 28.5a9.5 9.5 0 119.5-9.5H19v9.5z" fill="#0acf83" />
      <path d="M9.5 38A9.5 9.5 0 0119 28.5v9.5a9.5 9.5 0 01-9.5 9.5A9.5 9.5 0 019.5 38z" fill="#0acf83" />
      <path d="M19 0v19h9.5A9.5 9.5 0 0019 0z" fill="#a259ff" transform="translate(0 -0.5)" />
      <path d="M9.5 19A9.5 9.5 0 1119 9.5V19H9.5z" fill="#f24e1e" />
      <path d="M9.5 19H19v9.5A9.5 9.5 0 019.5 19z" fill="#ff7262" />
      <path d="M28.5 19A9.5 9.5 0 1119 28.5H28.5V19z" fill="#1abcfe" />
    </svg>
  ),
  // Add more tool icons here as you need them, e.g.:
  // adobe: ( <svg>...</svg> ),
  // sketch: ( <svg>...</svg> ),
}

const ServiceTools = ({
  badge = 'Tools We Use',
  title = 'Modern Tools Behind Every',
  boldPrefix = 'Great',
  gradientTitle = 'Interface.',
  description = 'We use industry-leading design and collaboration tools to create pixel-perfect interfaces and seamless workflows.',
  tools = defaultTools,
}) => {
  return (
    <section className="relative bg-white py-20">
      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-5 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            {badge}
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-black leading-tight text-[#0a0a0a]">
            {title}
            <br />
            <span className="text-[#093165]">{boldPrefix}</span>{' '}
            <span className="bg-gradient-to-r from-[#798143] to-[#d4bb15] bg-clip-text text-transparent">
              {gradientTitle}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] text-[#3d3d3d]">
            {description}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center gap-2 rounded-xl border border-[#e3e7ee] bg-[#F5F8FE] px-6 py-3.5"
            >
              {toolIcons[tool.icon]}
              <span className="text-[15px] font-semibold text-[#0a1628]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceTools