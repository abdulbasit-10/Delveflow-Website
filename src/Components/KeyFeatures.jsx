// ============================================================
// KEY FEATURES COMPONENT
// ============================================================
// File: src/components/KeyFeatures.jsx


import React from 'react'
import {
  Search,
  Layout,
  MousePointerClick,
  Smartphone,
  Monitor,
  Layers,
  CheckCircle,
  FileCheck,
  Shield,
  Database,
  Cloud,
  Users,
  CreditCard,
  BarChart,
  Bell,
  CloudSync,
  Globe,
  MessageSquare,
  Zap,
  Brain,
  TrendingUp,
  MessageCircle,
  Link2,
  GitBranch,    // ← Added
  Box,          // ← Added
  Code,         // ← Added
} from 'lucide-react'

const iconMap = {
  Search,
  Layout,
  MousePointerClick,
  Smartphone,
  Monitor,
  Layers,
  CheckCircle,
  FileCheck,
  Shield,
  Database,
  Cloud,
  Users,
  CreditCard,
  BarChart,
  Bell,
  CloudSync,
  Globe,
  MessageSquare,
  Zap,
  Brain,
  TrendingUp,
  MessageCircle,
  Link2,
  GitBranch,   
  Box,          
  Code,       
}
const defaultFeatures = [
  {
    icon: 'Search',
    title: 'User Research',
    description: 'Understand users through interviews, research, and behavioral insights.',
  },
  {
    icon: 'Layout',
    title: 'Wireframing',
    description: 'Build clear layouts before visual design begins.',
  },
  {
    icon: 'MousePointerClick',
    title: 'Interactive Prototypes',
    description: 'Visualize user flows with clickable prototypes.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile UI Design',
    description: 'Responsive mobile experiences for every device.',
  },
  {
    icon: 'Monitor',
    title: 'Web UI Design',
    description: 'Modern web interfaces focused on usability.',
  },
  {
    icon: 'Layers',
    title: 'Design Systems',
    description: 'Reusable components for consistency and scalability.',
  },
  {
    icon: 'CheckCircle',
    title: 'Usability Testing',
    description: 'Identify issues before development starts.',
  },
  {
    icon: 'FileCheck',
    title: 'Developer Handoff',
    description: 'Well-organized design files ready for implementation.',
  },
]

const FeatureCard = ({ feature }) => {
  const Icon = iconMap[feature.icon]
  return (
     <div className="mx-auto max-w-[300px] rounded-3xl border border-[#758196] bg-white px-6 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,27,47,0.12)] cursor-pointer">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-[#e3e7ee] bg-white">
        <Icon size={22} color="#0b3765" />
      </span>
      <h3 className="mt-4 text-[17px] font-bold text-[#0a1628]">{feature.title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-[#5b6472]">{feature.description}</p>
    </div>
  )
}
const KeyFeatures = ({
  badge = 'Key Features',
  title = 'Everything You Need for a Exceptional',
  gradientTitle = 'UI/UX Design.',
  description = 'From research and wireframing to polished interfaces and developer-ready designs, we create user experiences that are intuitive, engaging, and built for real business growth.',
  items = defaultFeatures,
}) => {
  // Split items into first 6 and remaining
  const firstRow = items.slice(0, 6)
  const lastRow = items.slice(6)

  return (
    <section className="relative bg-white py-20">
      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-4 inline-block border-b-2 border-[#0b3765] pb-1 text-[13px] font-bold uppercase tracking-wide text-[#0b3765]">
            {badge}
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,2.4vw,2.6rem)] font-black leading-tight text-[#0a0a0a]">
            {title}
            <br />
            <span className="bg-gradient-to-r from-[#093B7B] to-[#FFD600] bg-clip-text text-transparent">
              {gradientTitle}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] text-[#333333]">
            {description}
          </p>
        </div>

        {/* Features Grid - First 6 items */}
       <div className="mt-10 grid grid-cols-1 gap-x-0 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mx-27.5">
          {firstRow.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Features Grid - Remaining items (if any) */}
        {lastRow.length > 0 && (
        <div className="mt-5 flex flex-wrap justify-center gap-x-0 gap-y-5 mx-27.5">
  {lastRow.map((feature) => (
    <div key={feature.title} className="w-full sm:w-[calc(50%-0px)] lg:w-[calc(33.333%-0px)]">
      <FeatureCard feature={feature} />
    </div>
  ))}
</div>
        )}
      </div>
    </section>
  )
}

export default KeyFeatures