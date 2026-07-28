// ============================================================
// UI/UX DESIGN SERVICE PAGE
// ============================================================
// File: src/pages/ServiceUIUX.jsx

import ServiceHero from "../Components/ServiceHero"
import KeyFeatures from "../Components/KeyFeatures"
import ServiceProcess from "../Components/ServiceProcess"
import ServiceTools from "../Components/ServiceTools"
import ServiceProjects from "../Components/ServiceProjects"
import ServiceBenefits from "../Components/ServiceBenefits"
import { CtaSection } from "./Home"

// ============================================================
// UI/UX SERVICE DATA
// ============================================================
const uiuxData = {
  hero: {
    badge: 'UI/UX Design',
    title: 'Creating Exceptional Digital',
    gradientTitle: 'User Experiences.',
    description: 'We create delightful, user-centered solutions that enhance your experience, enabling you to achieve your goals.',
    primaryButtonText: 'Start Your Project',
    primaryButtonLink: '#/contact',
    secondaryButtonText: 'Learn More',
    secondaryButtonLink: '#/services',
  },
  features: {
    badge: 'Key Features',
    title: 'Everything You Need for a Exceptional',
    gradientTitle: 'UI/UX Design.',
    description: 'From research and wireframing to polished interfaces and developer-ready designs, we create user experiences that are intuitive, engaging, and built for real business growth.',
    items: [
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
    ],
  },
  process: {
    badge: 'Our Process',
    title: 'Deep into Your Challenges',
    gradientWord: 'Flow',
    boldPrefix: 'Delve',
    subtitleEnd: 'Seamlessly with Powerful Solutions.',
    description: 'Our collaborative UI/UX process transforms ideas into intuitive digital experiences that users enjoy and businesses trust.',
    steps: [
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
    ],
  },
  tools: {
    badge: 'Tools We Use',
    title: 'Modern Tools Behind Every',
    boldPrefix: 'Great',
    gradientTitle: 'Interface.',
    description: 'We use industry-leading design and collaboration tools to create pixel-perfect interfaces and seamless workflows.',
    tools: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
  projects: {
    badge: 'Featured Projects',
    boldPrefix: 'Delve',
    title: 'into Innovation.',
    gradientWord: 'Flow',
    subtitleEnd: 'with Real Results.',
    description: 'We craft powerful digital solutions that solve real problems and deliver measurable success. Here are some of our latest standout projects.',
    projects: [
      {
        title: 'Trading App',
        category: 'Fintech',
        image: null,
        link: '#',
        description:
          'A sleek, real-time trading platform built for speed and intelligence. Traders get live market data, smart analytics, and seamless execution empowering smarter decisions and higher profits.',
      },
      {
        title: 'Profit Pal',
        category: 'Fintech',
        image: null,
        link: '#',
        description:
          'An intelligent financial companion that helps businesses and individuals track expenses, forecast profits, and optimize cash flow with AI-powered insights.',
      },
      {
        title: 'Gym Management System',
        category: 'Fitness',
        image: null,
        link: '#',
        description:
          'Complete all-in-one solution for fitness centers. From member management to payment automation and workout analytics.',
      },
      {
        title: 'Study Studio',
        category: 'EdTech',
        image: null,
        link: '#',
        description:
          'A modern learning management platform designed for educational institutes and students with interactive classes and progress tracking.',
      },
    ],
  },
  benefits: {
    badge: 'Benefits',
    title: 'Why Businesses Choose',
    boldPrefix: 'Our',
    gradientTitle: 'UI/UX Design.',
    description: 'Our design process combines creativity, strategy, and usability to build experiences that delight users and deliver measurable business value.',
    benefits: [
      {
        icon: 'users',
        title: 'User-Centered',
        description:
          'Every decision we make is backed by deep empathy for your users and their real-world needs.',
      },
      {
        icon: 'globe',
        title: 'Faster Build',
        description:
          'Our organized design systems and handoff documents cut engineering time by up to 40%.',
      },
      {
        icon: 'chart',
        title: 'Higher Conversion',
        description:
          'We optimize flows and visual hierarchies to guide users naturally toward your goals.',
      },
      {
        icon: 'headset',
        title: 'Ongoing Support',
        description:
          'We stay by your side after launch to iterate based on live user feedback and data.',
      },
    ],
  },
}

// ============================================================
// MAIN UI/UX SERVICE PAGE
// ============================================================
const ServiceUIUX = () => {
  const data = uiuxData

  return (
    <>
      {/* Hero Section */}
      <ServiceHero
        badge={data.hero.badge}
        title={data.hero.title}
        gradientTitle={data.hero.gradientTitle}
        description={data.hero.description}
        primaryButtonText={data.hero.primaryButtonText}
        primaryButtonLink={data.hero.primaryButtonLink}
        secondaryButtonText={data.hero.secondaryButtonText}
        secondaryButtonLink={data.hero.secondaryButtonLink}
      />

      {/* Key Features Section */}
      <KeyFeatures
        badge={data.features.badge}
        title={data.features.title}
        gradientTitle={data.features.gradientTitle}
        description={data.features.description}
        items={data.features.items}
      />

      {/* Process Section */}
      <ServiceProcess
        badge={data.process.badge}
        title={data.process.title}
        gradientWord={data.process.gradientWord}
        boldPrefix={data.process.boldPrefix}
        subtitleEnd={data.process.subtitleEnd}
        description={data.process.description}
        steps={data.process.steps}
      />

      {/* Tools Section */}
      <ServiceTools
        badge={data.tools.badge}
        title={data.tools.title}
        boldPrefix={data.tools.boldPrefix}
        gradientTitle={data.tools.gradientTitle}
        description={data.tools.description}
        tools={data.tools.tools}
      />

      {/* Projects Section */}
      <ServiceProjects
        badge={data.projects.badge}
        boldPrefix={data.projects.boldPrefix}
        title={data.projects.title}
        gradientWord={data.projects.gradientWord}
        subtitleEnd={data.projects.subtitleEnd}
        description={data.projects.description}
        projects={data.projects.projects}
      />

      {/* Benefits Section */}
      <ServiceBenefits
        badge={data.benefits.badge}
        title={data.benefits.title}
        boldPrefix={data.benefits.boldPrefix}
        gradientTitle={data.benefits.gradientTitle}
        description={data.benefits.description}
        benefits={data.benefits.benefits}
      />

      {/* CTA Section */}
      <CtaSection />
    </>
  )
}

export default ServiceUIUX