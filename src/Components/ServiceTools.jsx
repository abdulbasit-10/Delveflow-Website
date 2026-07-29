const defaultTools = [
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Figma', icon: 'figma' },
]

const toolIcons = {
  // ===== DESIGN TOOLS =====
  figma: (
    <svg viewBox="0 0 38 57" className="h-5 w-5">
      <path d="M19 28.5a9.5 9.5 0 119.5-9.5H19v9.5z" fill="#0acf83" />
      <path d="M9.5 38A9.5 9.5 0 0119 28.5v9.5a9.5 9.5 0 01-9.5 9.5A9.5 9.5 0 019.5 38z" fill="#0acf83" />
      <path d="M19 0v19h9.5A9.5 9.5 0 0019 0z" fill="#a259ff" />
      <path d="M9.5 19A9.5 9.5 0 1119 9.5V19H9.5z" fill="#f24e1e" />
      <path d="M9.5 19H19v9.5A9.5 9.5 0 019.5 19z" fill="#ff7262" />
      <path d="M28.5 19A9.5 9.5 0 1119 28.5H28.5V19z" fill="#1abcfe" />
    </svg>
  ),
  adobe: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FF0000">
      <path d="M13.1 14.2L8.5 23H2.5L12 5.6L21.5 23H15.5L13.1 14.2Z" />
    </svg>
  ),
  sketch: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F7B500">
      <path d="M12 2L2 8L12 22L22 8L12 2Z" />
    </svg>
  ),
  invision: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FF3366">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  ),
  webflow: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#4353FF">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  ),

  // ===== WEB DEVELOPMENT TOOLS =====
  react: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.3">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="12" r="11" fill="black" />
      <path d="M8 8v8M8 8l8 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" fill="#539E43" />
      <path d="M12 2l8.5 5v10L12 22" fill="#3C873A" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#38BDF8">
      <path d="M12 6.5c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 1.9 1.4.9 1 2 2.1 4.1 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-1.9-1.4-.9-1-2-2.1-4.1-2.1zM7 12.5c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 1.9 1.4.9 1 2 2.1 4.1 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-1.9-1.4-.9-1-2-2.1-4.1-2.1z" />
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M22 3L12.5 21 3 3l9.5 3.5L22 3z" fill="#646CFF" />
      <path d="M17 6l-4.5 12L8 8.5l9-2.5z" fill="#FFDD35" />
    </svg>
  ),

  // ===== APP DEVELOPMENT TOOLS =====
  flutter: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#02569B">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  swift: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FA7343">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  kotlin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#7F52FF">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FFCA28">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  // ===== SAAS DEVELOPMENT TOOLS =====
  postgresql: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#4169E1">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#635BFF">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FF9900">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  // ===== AI SOLUTIONS TOOLS =====
  openai: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#10A37F">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#3776AB">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FF6F00">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  langchain: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1C3C3C">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),

  // ===== CLOUD & DEVOPS TOOLS =====
  docker: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#2496ED">
      <path d="M18.2 7.2c-.5-.7-1.4-1-2.3-1-.9 0-1.7.3-2.3.9l-.4-.4V3.5h-2.2v3.2l-.4.4c-.6-.6-1.4-.9-2.3-.9-.9 0-1.8.3-2.3.9C7.7 7.7 7.5 8.7 7.5 9.7v.7H2v1.7h5.5v.7c0 .9.3 1.7.9 2.3.6.6 1.4.9 2.3.9.9 0 1.7-.3 2.3-.9l.4-.4h.4c.6.6 1.4.9 2.3.9.9 0 1.7-.3 2.3-.9.6-.6.9-1.4.9-2.3v-.7H22v-1.7h-4.3v-.7c0-.9-.2-1.7-.8-2.3l-.7.6z" />
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#326CE5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#181717">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  grafana: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F46800">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
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
          <h2 className="font-serif text-[clamp(1.8rem,2.4vw,2.6rem)] font-black leading-tight text-[#0a0a0a]">
            {title}
            <br />
            <span className="text-[#093165]">{boldPrefix}</span>{' '}
            <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
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