// ============================================================
// AI SOLUTIONS SERVICE PAGE
// ============================================================
// File: src/pages/ServiceAI.jsx

import React from 'react'
import ServiceHero from '../Components/ServiceHero'
import KeyFeatures from '../Components/KeyFeatures'
import ServiceProcess from '../Components/ServiceProcess'
import ServiceTools from '../Components/ServiceTools'
import ServiceProjects from '../Components/ServiceProjects'
import ServiceBenefits from '../Components/ServiceBenefits'
import { CtaSection } from './Home'

// ============================================================
// AI SOLUTIONS SERVICE DATA
// ============================================================
const aiData = {
  hero: {
    badge: 'AI Solutions',
    title: 'Smarter AI Solutions Built',
    gradientTitle: 'for Business Growth.',
    description: 'Leverage the power of Artificial Intelligence to automate workflows, unlock valuable insights, and build intelligent solutions that improve efficiency, enhance customer experiences, and accelerate business growth.',
    primaryButtonText: 'Start Your AI Project',
    primaryButtonLink: '#/contact',
    secondaryButtonText: 'Explore AI Solutions',
    secondaryButtonLink: '#/services',
  },
  features: {
    badge: 'Key Features',
    title: 'Everything You Need to Build',
    gradientTitle: 'Intelligent AI Solutions.',
    description: 'We develop fast, secure, and scalable websites using modern technologies, ensuring exceptional performance, seamless user experiences, and long-term business growth.',
    items: [
      {
        icon: 'MessageSquare',
        title: 'AI Chatbots',
        description: 'Build intelligent chatbots that provide instant support and enhance customer engagement.',
      },
      {
        icon: 'Zap',
        title: 'Workflow Automation',
        description: 'Automate repetitive business processes to improve efficiency and reduce manual work.',
      },
      {
        icon: 'Brain',
        title: 'Machine Learning',
        description: 'Develop AI models that learn from data and deliver smarter business insights.',
      },
      {
        icon: 'TrendingUp',
        title: 'Predictive Analytics',
        description: 'Analyze historical data to forecast trends and support better business decisions.',
      },
      {
        icon: 'MessageCircle',
        title: 'Natural Language AI',
        description: 'Enable AI to understand, process, and respond to human language naturally.',
      },
      {
        icon: 'Database',
        title: 'Data Intelligence',
        description: 'Transform raw business data into meaningful insights through AI-driven analysis.',
      },
      {
        icon: 'Shield',
        title: 'Secure AI Solutions',
        description: 'Build reliable AI systems with secure infrastructure and responsible data handling.',
      },
      {
        icon: 'Link2',
        title: 'Custom AI Integration',
        description: 'Integrate AI capabilities into your existing applications and business workflows.',
      },
    ],
  },
  process: {
    badge: 'Our Process',
    title: 'Turning AI Ideas Into',
    gradientWord: 'Intelligent Solutions.',
    boldPrefix: '',
    subtitleEnd: '',
    description: 'Our AI development process combines strategy, data, and cutting-edge technologies to build intelligent solutions that solve real business challenges and deliver measurable results.',
    steps: [
      {
        number: '01',
        title: 'Discovery & Strategy',
        description:
          'We understand your business objectives, identify AI opportunities, and define a clear implementation roadmap.',
        icon: 'search',
      },
      {
        number: '02',
        title: 'Data Preparation',
        description:
          'We collect, organize, and prepare quality data to build accurate and reliable AI models.',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: 'Model Development',
        description:
          'We develop, train, and test intelligent AI models tailored to your business requirements.',
        icon: 'pen',
      },
      {
        number: '04',
        title: 'Deployment & Optimization',
        description:
          'We deploy AI solutions, monitor performance, and continuously optimize them for long-term success.',
        icon: 'check',
      },
    ],
  },
  tools: {
    badge: 'Tools We Use',
    title: 'Modern AI Technologies',
    boldPrefix: '',
    gradientTitle: 'Driving Smarter Solutions.',
    description: 'We leverage industry-leading AI frameworks, machine learning libraries, cloud platforms, and development tools to build intelligent, secure, and scalable AI solutions.',
    tools: [
      { name: 'OpenAI', icon: 'openai' },
      { name: 'Python', icon: 'python' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'AWS AI', icon: 'aws' },
    ],
  },
  projects: {
    badge: 'Featured Projects',
    boldPrefix: '',
    title: 'AI Solutions Built for',
    gradientWord: '',
    subtitleEnd: 'Real-World Impact.',
    description: 'Discover how our AI-powered solutions help businesses automate operations, unlock valuable insights, and deliver smarter customer experiences across industries.',
    projects: [
      {
        title: 'AI Customer Support',
        category: 'AI Support',
        image: null,
        link: '#',
        description:
          'An AI-powered customer support platform with intelligent chatbots, automated ticket handling, and 24/7 customer assistance.',
      },
      {
        title: 'InsightIQ',
        category: 'AI Analytics',
        image: null,
        link: '#',
        description:
          'An AI analytics platform that predicts business trends, customer behavior, and sales opportunities using machine learning.',
      },
      {
        title: 'DocMind AI',
        category: 'AI Document Processing',
        image: null,
        link: '#',
        description:
          'An intelligent document processing solution that extracts, classifies, and analyzes business documents automatically.',
      },
      {
        title: 'FlowPilot AI',
        category: 'AI Automation',
        image: null,
        link: '#',
        description:
          'An AI workflow automation platform that streamlines repetitive tasks, boosts productivity, and improves operational efficiency.',
      },
    ],
  },
  benefits: {
    badge: 'Benefits',
    title: 'Why Choose Our',
    boldPrefix: '',
    gradientTitle: 'AI Solutions.',
    description: 'We build intelligent AI solutions that automate workflows, unlock valuable insights, and help businesses achieve sustainable growth with secure and reliable technology.',
    benefits: [
      {
        icon: 'users',
        title: 'Smarter Automation',
        description:
          'Automate repetitive tasks and streamline business operations with intelligent AI solutions.',
      },
      {
        icon: 'globe',
        title: 'Better Decisions',
        description:
          'Gain valuable insights from your data to make informed business decisions.',
      },
      {
        icon: 'chart',
        title: 'Business Growth',
        description:
          'Drive business growth and improve efficiency with AI-powered solutions.',
      },
      {
        icon: 'headset',
        title: 'Secure & Reliable AI',
        description:
          'Build secure, reliable AI systems with responsible data handling and industry-standard security practices.',
      },
    ],
  },
}

// ============================================================
// MAIN AI SOLUTIONS SERVICE PAGE
// ============================================================
const ServiceAI = () => {
  const data = aiData

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

export default ServiceAI