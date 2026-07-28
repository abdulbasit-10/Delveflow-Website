// ============================================================
// APP DEVELOPMENT SERVICE PAGE
// ============================================================
// File: src/pages/ServiceApp.jsx

import React from 'react'
import ServiceHero from '../Components/ServiceHero'
import KeyFeatures from '../Components/KeyFeatures'
import ServiceProcess from '../Components/ServiceProcess'
import ServiceTools from '../Components/ServiceTools'
import ServiceProjects from '../Components/ServiceProjects'
import ServiceBenefits from '../Components/ServiceBenefits'
import { CtaSection } from './Home'

// ============================================================
// APP DEVELOPMENT SERVICE DATA
// ============================================================
const appData = {
  hero: {
    badge: 'App Development',
    title: 'Build Powerful Mobile Apps',
    gradientTitle: 'That Users Love.',
    description: 'We create fast, scalable, and intuitive mobile applications for iOS and Android that help businesses engage customers, streamline operations, and accelerate growth.',
    primaryButtonText: 'Start Your App Project',
    primaryButtonLink: '#/contact',
    secondaryButtonText: 'View Our Apps',
    secondaryButtonLink: '#/projects',
  },
  features: {
    badge: 'Key Features',
    title: 'Everything You Need to Build',
    gradientTitle: 'Exceptional Mobile Apps.',
    description: 'From intuitive UI design to secure backend integration, we build high-performance mobile applications that deliver seamless experiences across iOS and Android devices.',
    items: [
      {
        icon: 'Smartphone',
        title: 'Native App Development',
        description: 'Build high-performance iOS and Android applications tailored to your business.',
      },
      {
        icon: 'Layers',
        title: 'Cross-Platform Apps',
        description: 'Develop once and deploy seamlessly across multiple mobile platforms.',
      },
      {
        icon: 'Monitor',
        title: 'Modern UI/UX Design',
        description: 'Create intuitive, engaging interfaces that users love to interact with.',
      },
      {
        icon: 'Shield',
        title: 'Secure Authentication',
        description: 'Protect user data with secure login, encryption, and access control.',
      },
      {
        icon: 'Database',
        title: 'API Integrations',
        description: 'Connect your app with payment gateways, CRMs, and third-party services.',
      },
      {
        icon: 'Bell',
        title: 'Push Notifications',
        description: 'Keep users engaged with real-time alerts and personalized notifications.',
      },
      {
        icon: 'Cloud',
        title: 'Cloud Data Sync',
        description: 'Synchronize data securely across devices with cloud-based infrastructure.',
      },
      {
        icon: 'BarChart',
        title: 'Analytics Integration',
        description: 'Track user behavior and app performance with detailed analytics.',
      },
    ],
  },
  process: {
    badge: 'Our Process',
    title: 'From Idea to',
    gradientWord: 'Launch',
    boldPrefix: 'Built for',
    subtitleEnd: 'Success.',
    description: 'We follow a streamlined development process to transform your app idea into a secure, scalable, and high-performing mobile application.',
    steps: [
      {
        number: '01',
        title: 'Idea & Discovery',
        description:
          'We understand your business goals, target audience, and app requirements to create a clear product roadmap.',
        icon: 'search',
      },
      {
        number: '02',
        title: 'UI/UX Design',
        description:
          'We design intuitive user flows, wireframes, and modern interfaces that deliver an exceptional mobile experience.',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: 'Development & Testing',
        description:
          'Our developers build robust app features while ensuring performance, security, and thorough quality testing.',
        icon: 'pen',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description:
          'We publish your app, monitor performance, provide updates, and deliver continuous support for long-term success.',
        icon: 'check',
      },
    ],
  },
  tools: {
    badge: 'Tools We Use',
    title: 'Modern Technologies Behind',
    boldPrefix: '',
    gradientTitle: 'Every Great Mobile App.',
    description: 'Our development stack combines modern mobile frameworks, powerful backend technologies, and cloud platforms to deliver fast, reliable, and future-ready applications.',
    tools: [
      { name: 'React Native', icon: 'react' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Swift', icon: 'swift' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  projects: {
    badge: 'Featured Projects',
    boldPrefix: '',
    title: 'Mobile Apps That Deliver',
    gradientWord: '',
    subtitleEnd: 'Real Results.',
    description: 'Discover a selection of mobile app solutions we\'ve designed and developed to enhance user experiences, streamline operations, and drive business growth across various industries.',
    projects: [
      {
        title: 'FitPulse',
        category: 'Health & Fitness',
        image: null,
        link: '#',
        description:
          'A fitness tracking app that helps users monitor workouts, nutrition, and health goals with personalized progress insights.',
      },
      {
        title: 'QuickBite',
        category: 'Food Delivery',
        image: null,
        link: '#',
        description:
          'A modern food delivery application featuring real-time order tracking, secure payments, and an intuitive ordering experience.',
      },
      {
        title: 'CareConnect',
        category: 'Healthcare',
        image: null,
        link: '#',
        description:
          'A healthcare mobile app for booking appointments, managing medical records, and connecting patients with healthcare professionals.',
      },
      {
        title: 'WalletWise',
        category: 'Fintech',
        image: null,
        link: '#',
        description:
          'A personal finance app that enables users to track expenses, manage budgets, and gain real-time insights into their financial health.',
      },
    ],
  },
  benefits: {
    badge: 'Benefits',
    title: 'Why Choose Our',
    boldPrefix: '',
    gradientTitle: 'App Development Services.',
    description: 'We build high-quality mobile applications that combine exceptional performance, intuitive user experiences, and scalable technology to help your business grow with confidence.',
    benefits: [
      {
        icon: 'users',
        title: 'Cross-Platform Apps',
        description:
          'React Native iOS and Android apps with a single, efficient development approach.',
      },
      {
        icon: 'globe',
        title: 'High Performance',
        description:
          'Fast, responsive apps optimized for smooth performance across all devices.',
      },
      {
        icon: 'chart',
        title: 'Secure & Reliable',
        description:
          'Protect user data with secure authentication and industry-standard security practices.',
      },
      {
        icon: 'headset',
        title: 'Ongoing Support',
        description:
          'Receive continuous maintenance, updates, and technical support after launch.',
      },
    ],
  },
}

// ============================================================
// MAIN APP DEVELOPMENT SERVICE PAGE
// ============================================================
const ServiceApp = () => {
  const data = appData

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

export default ServiceApp