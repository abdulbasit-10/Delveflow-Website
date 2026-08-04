import React from 'react'
// Import the custom PNG assets
//web icons
import CustomDevIcon from "../assets/custom_development.png"
import ResponsiveIcon from "../assets/Monitor Icon.png"
import CMSIcon from "../assets/qlementine-icons.png"
import EcommerceIcon from "../assets/Shopping Icon.png"
import APIIcon from "../assets/icon-lightning.png"
import PerformanceIcon from "../assets/icon-target.png"
import SecurityIcon from "../assets/icon-shield.png"
import SEOIcon from "../assets/Document search icon.png"

//App Icons
import Icon11 from "../assets/Icon-10.png"
import Icon22 from "../assets/Icon-16.png"
import Icon33 from "../assets/Palette.png"
import Icon44 from "../assets/icon-shield.png"
import Icon55 from "../assets/icon-lightning.png"
import Icon66 from "../assets/Icon-19.png"
import Icon77 from "../assets/Icon-18.png"
import Icon88 from "../assets/Chart Icon.png"
//Ui/UX service Icons 
import Icon111 from "../assets/Search Icon.png"
import Icon222 from "../assets/SVG Icon.png"
import Icon333 from "../assets/Icon-12.png"
import Icon444 from "../assets/Icon-10.png"
import Icon555 from "../assets/Icon-11.png"
import Icon666 from "../assets/svg.png"
import Icon777 from "../assets/Icon-14.png"
import Icon888 from "../assets/Icon-14.png"
//SaaS Development
import Icon1111 from "../assets/Building Icon.png"
import Icon2222 from "../assets/Icon Container-3.png"
import Icon3333 from "../assets/f7_creditcard.svg"
import Icon4444 from "../assets/icon-shield.png"
import Icon5555 from "../assets/icon-lightning.png"
import Icon6666 from "../assets/Bar Chart.png"
import Icon7777 from "../assets/icon-settings.png"
import Icon8888 from "../assets/Cloud Icon.png"

//AI Solutions
import aaa from "../assets/icon-robot.png"
import bbb from "../assets/icon-workflow.png"
import ccc from "../assets/Brain Icon.png"
import ddd from "../assets/Chart Icon.png"
import eee from "../assets/icon-chat.png"
import fff from "../assets/Icon-18.png"
import ggg from "../assets/icon-shield.png"
import hhh from "../assets/icon-cpu.png"

//Cloud and Devops
import ccc1 from "../assets/Cloud Icon.png"
import ccc2 from "../assets/Container.png"
import ccc3 from "../assets/icon-cube.png"
import ccc4 from "../assets/icon-blocks.png"
import ccc5 from "../assets/custom_development.png"
import ccc6 from "../assets/Activity Icon.png"
import ccc7 from "../assets/icon-shield.png"
import ccc8 from "../assets/Backup Icon.png"


import { 
  Search, 
  Layout, 
  MousePointerClick, 
  Smartphone, 
  Monitor, 
  Layers, 
  CheckCircle, 
  FileCheck 
} from 'lucide-react'

const iconMap = {
  // Lucide icons mapped directly
  Search: Search,
  Layout: Layout,
  MousePointerClick: MousePointerClick,
  Smartphone: Smartphone,
  Monitor: Monitor,
  Layers: Layers,
  CheckCircle: CheckCircle,
  FileCheck: FileCheck,
  
  // Custom PNG icons
  CustomDev: () => <img src={CustomDevIcon} className="h-6 w-6 object-contain" alt="Custom Dev" />,
  Responsive: () => <img src={ResponsiveIcon} className="h-6 w-6 object-contain" />,
  CMSIcon: () => <img src={CMSIcon} className="h-6 w-6 object-contain" />,
  Ecommerce: () => <img src={EcommerceIcon} className="h-6 w-6 object-contain" />,
   API: () => <img src={APIIcon} className="h-6 w-6 object-contain" />,
    Performance: () => <img src={PerformanceIcon} className="h-6 w-6 object-contain" />,
    Security: () => <img src={SecurityIcon} className="h-6 w-6 object-contain" />,
  SEO: () => <img src={SEOIcon} className="h-6 w-6 object-contain" />,
  //App icons
  Icon11: () => <img src={Icon11} className="h-6 w-6 object-contain" />,
  Icon22: () => <img src={Icon22} className="h-6 w-6 object-contain" />,
  Icon33: () => <img src={Icon33} className="h-6 w-6 object-contain" />,
  Icon44: () => <img src={Icon44} className="h-6 w-6 object-contain" />,
  Icon55: () => <img src={Icon55} className="h-6 w-6 object-contain" />,
  Icon66: () => <img src={Icon66} className="h-6 w-6 object-contain" />,
  Icon77: () => <img src={Icon77} className="h-6 w-6 object-contain" />,
  Icon88: () => <img src={Icon88} className="h-6 w-6 object-contain" />,
  //UI/UX Icons
  Icon111: () => <img src={Icon111} className="h-6 w-6 object-contain" />,
  Icon222: () => <img src={Icon222} className="h-6 w-6 object-contain" />,
  Icon333: () => <img src={Icon333} className="h-6 w-6 object-contain" />,
  Icon444: () => <img src={Icon444} className="h-6 w-6 object-contain" />,
  Icon555: () => <img src={Icon555} className="h-6 w-6 object-contain" />,
  Icon666: () => <img src={Icon666} className="h-6 w-6 object-contain" />,
  Icon777: () => <img src={Icon777} className="h-6 w-6 object-contain" />,
  Icon888: () => <img src={Icon888} className="h-6 w-6 object-contain" />,
  //SaaS Development
   Icon1111: () => <img src={Icon1111} className="h-6 w-6 object-contain" />,
   Icon2222:  () => <img src={Icon2222} className="h-6 w-6 object-contain" />,
   Icon3333:  () => <img src={Icon3333} className="h-6 w-6 object-contain" />,
   Icon4444:  () => <img src={Icon4444} className="h-6 w-6 object-contain" />,
   Icon5555:  () => <img src={Icon5555} className="h-6 w-6 object-contain" />,
   Icon6666:  () => <img src={Icon6666} className="h-6 w-6 object-contain" />,
   Icon7777:  () => <img src={Icon7777} className="h-6 w-6 object-contain" />,
   Icon8888:  () => <img src={Icon8888} className="h-6 w-6 object-contain" />,
   //AI Solutions
     aaa: () => <img src={aaa} className="h-6 w-6 object-contain" />,
  bbb: () => <img src={bbb} className="h-6 w-6 object-contain" />,
  ccc: () => <img src={ccc} className="h-6 w-6 object-contain" />,
  ddd: () => <img src={ddd} className="h-6 w-6 object-contain" />,
  eee: () => <img src={eee} className="h-6 w-6 object-contain" />,
  fff: () => <img src={fff} className="h-6 w-6 object-contain" />,
  ggg: () => <img src={ggg} className="h-6 w-6 object-contain" />,
  hhh: () => <img src={hhh} className="h-6 w-6 object-contain" />,
  //Cloud And Dev0ps
  ccc1: () => <img src={ccc1} className="h-6 w-6 object-contain" />,
  ccc2: () => <img src={ccc2} className="h-6 w-6 object-contain" />,
  ccc3: () => <img src={ccc3} className="h-6 w-6 object-contain" />,
  ccc4: () => <img src={ccc4} className="h-6 w-6 object-contain" />,
  ccc5: () => <img src={ccc5} className="h-6 w-6 object-contain" />,
  ccc6: () => <img src={ccc6} className="h-6 w-6 object-contain" />,
  ccc7: () => <img src={ccc7} className="h-6 w-6 object-contain" />,
  ccc8: () => <img src={ccc8} className="h-6 w-6 object-contain" />,
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
        {/* SAFE RENDERING: Only renders if the icon is found. */}
        {Icon ? <Icon size={22} color="#0b3765" /> : null}
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