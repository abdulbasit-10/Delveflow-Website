// ============================================================
// WEB DEVELOPMENT SERVICE PAGE
// ============================================================
// File: src/pages/ServiceWeb.jsx

import React from 'react'
import ServiceHero from '../Components/ServiceHero'
import KeyFeatures from '../Components/KeyFeatures'
import ServiceProcess from '../Components/ServiceProcess'
import ServiceTools from '../Components/ServiceTools'
import ServiceProjects from '../Components/ServiceProjects'
import ServiceBenefits from '../Components/ServiceBenefits'
import { CtaSection } from './Home'

// ============================================================
// WEB DEVELOPMENT SERVICE DATA
// ============================================================
const webData = {
  hero: {
    badge: 'Web Development',
    title: 'Build Modern Websites',
    gradientTitle: 'That Drive Results.',
    description: 'From responsive business websites to powerful custom web applications, we develop high-performing digital solutions that engage users, strengthen your brand, and accelerate business success.',
    primaryButtonText: 'Start Your Project',
    primaryButtonLink: '#/contact',
    secondaryButtonText: 'View Our portfolio',
    secondaryButtonLink: '#/projects',
  },
  features: {
    badge: 'Key Features',
    title: 'Everything You Need to Build',
    gradientTitle: 'Powerful Websites.',
    description: 'We develop fast, secure, and scalable websites using modern technologies, ensuring exceptional performance, seamless user experiences, and long-term business growth.',
    items: [
      {
        icon: 'Layout',
        title: 'Custom Development',
        description: 'Build custom web solutions tailored to your specific business needs and requirements.',
      },
      {
        icon: 'Monitor',
        title: 'Responsive Design',
        description: 'Websites that work beautifully on desktop, tablet, and mobile devices.',
      },
      {
        icon: 'Layers',
        title: 'Ecommerce Solutions',
        description: 'Powerful online stores with seamless payment integration and inventory management.',
      },
      {
        icon: 'FileCheck',
        title: 'CMS Integration',
        description: 'Easy-to-manage content systems that let you update your website without coding.',
      },
      {
        icon: 'Search',
        title: 'Performance Optimization',
        description: 'Lightning-fast loading speeds and optimized performance for better user experience.',
      },
      {
        icon: 'Search',
        title: 'SEO-Ready Architecture',
        description: 'Built with search engine optimization in mind to help you rank higher.',
      },
      {
        icon: 'Layers',
        title: 'API Integrations',
        description: 'Seamless integration with third-party services and custom APIs.',
      },
      {
        icon: 'CheckCircle',
        title: 'Secure Deployment',
        description: 'Enterprise-grade security with SSL, authentication, and data protection.',
      },
    ],
  },
  process: {
    badge: 'Our Process',
    title: 'From Concept to',
    gradientWord: '',
    boldPrefix: '',
    subtitleEnd: 'High-Performance Websites.',
    description: 'Our streamlined web development process ensures every website is strategically planned, expertly built, thoroughly tested, and optimized to deliver exceptional performance and long-term business success.',
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
        title: 'Plan & Design',
        description:
          'We create wireframes, design mockups, and plan the architecture for your web solution.',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: 'Develop & Test',
        description:
          'We build your website with clean code, rigorous testing, and performance optimization.',
        icon: 'pen',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description:
          'We deploy your website and provide ongoing maintenance and support.',
        icon: 'check',
      },
    ],
  },
  tools: {
    badge: 'Tools We Use',
    title: 'Building Websites with',
    boldPrefix: '',
    gradientTitle: 'Modern Web Technologies.',
    description: 'We leverage modern frameworks, programming languages, CMS platforms, and cloud technologies to build fast, secure, scalable, and high-performing websites tailored to your business goals.',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  projects: {
    badge: 'Featured Projects',
    boldPrefix: '',
    title: 'Web Solutions Built for',
    
    gradientWord: '',
    subtitleEnd: 'Real Businesses.',
    description: 'Explore a selection of custom web solutions designed to strengthen online presence, improve user engagement, and help businesses achieve sustainable growth.',
    projects: [
      {
        title: 'Ecommerce Platform',
        category: 'Ecommerce',
        image: null,
        link: '#',
        description:
          'A full-featured ecommerce platform with payment integration, inventory management, and customer analytics.',
      },
      {
        title: 'Business Dashboard',
        category: 'SaaS',
        image: null,
        link: '#',
        description:
          'A comprehensive business dashboard with real-time analytics, reporting, and team collaboration tools.',
      },
      {
        title: 'Corporate Website',
        category: 'Corporate',
        image: null,
        link: '#',
        description:
          'A modern, responsive corporate website with CMS integration and optimized user experience.',
      },
      {
        title: 'Healthcare Portal',
        category: 'Healthcare',
        image: null,
        link: '#',
        description:
          'A secure healthcare portal with appointment booking, patient records, and telemedicine features.',
      },
    ],
  },
  benefits: {
    badge: 'Benefits',
    title: 'Why Choose Our',
    boldPrefix: '',
    gradientTitle: 'Web Development Services.',
    description: 'We build fast, secure, and scalable websites that enhance user experiences, strengthen your online presence, and help your business achieve long-term digital success.',
    benefits: [
      {
        icon: 'users',
        title: 'High Performance',
        description:
          'Optimized websites that load quickly and deliver a seamless browsing experience.',
      },
      {
        icon: 'globe',
        title: 'Secure Development',
        description:
          'Built with modern security practices to protect your website and customer data.',
      },
      {
        icon: 'chart',
        title: 'Responsive Design',
        description:
          'Websites that adapt perfectly across desktops, tablets, and mobile devices.',
      },
      {
        icon: 'headset',
        title: 'Business Growth',
        description:
          'Strategic web solutions designed to increase engagement, generate leads, and drive conversions.',
      },
    ],
  },
}

// ============================================================
// MAIN WEB DEVELOPMENT SERVICE PAGE
// ============================================================
const ServiceWeb = () => {
  const data = webData

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

export default ServiceWeb