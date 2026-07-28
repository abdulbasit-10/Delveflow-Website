// ============================================================
// SAAS DEVELOPMENT SERVICE PAGE
// ============================================================
// File: src/pages/ServiceSaaS.jsx

import React from 'react'
import ServiceHero from '../Components/ServiceHero'
import KeyFeatures from '../Components/KeyFeatures'
import ServiceProcess from '../Components/ServiceProcess'
import ServiceTools from '../Components/ServiceTools'
import ServiceProjects from '../Components/ServiceProjects'
import ServiceBenefits from '../Components/ServiceBenefits'
import { CtaSection } from './Home'

// ============================================================
// SAAS DEVELOPMENT SERVICE DATA
// ============================================================
const saasData = {
  hero: {
    badge: 'SaaS Development',
    title: 'Build Scalable SaaS',
    gradientTitle: 'Products That Grow.',
    description: 'From MVPs to enterprise-grade SaaS platforms, we build secure, scalable, and cloud-ready applications with subscription billing, role-based access, analytics, and seamless third-party integrations.',
    primaryButtonText: 'Start Your SaaS Project',
    primaryButtonLink: '#/contact',
    secondaryButtonText: 'View Our Work',
    secondaryButtonLink: '#/projects',
  },
  features: {
    badge: 'Key Features',
    title: 'Everything You Need to Build',
    gradientTitle: 'Powerful SaaS Products.',
    description: 'From secure authentication to subscription billing and cloud deployment, we build scalable SaaS solutions designed for performance, growth, and long-term success.',
    items: [
      {
        icon: 'Layers',
        title: 'Multi-Tenant Architecture',
        description: 'Support multiple customers with a secure and scalable shared platform.',
      },
      {
        icon: 'Shield',
        title: 'Secure Authentication',
        description: 'Protect user accounts with secure login, encryption, and access control.',
      },
      {
        icon: 'Users',
        title: 'Admin Management',
        description: 'Manage users, settings, permissions, and business operations effortlessly.',
      },
      {
        icon: 'Layout',
        title: 'Role-Based Dashboards',
        description: 'Personalized dashboards with custom permissions for every user role.',
      },
      {
        icon: 'Database',
        title: 'API Integrations',
        description: 'Connect seamlessly with payment gateways, CRMs, and third-party services.',
      },
      {
        icon: 'Cloud',
        title: 'Cloud Deployment',
        description: 'Deploy secure, reliable applications with modern cloud infrastructure.',
      },
      {
        icon: 'CreditCard',
        title: 'Subscription Billing',
        description: 'Automate recurring payments, invoices, and subscription management.',
      },
      {
        icon: 'BarChart',
        title: 'Analytics & Reports',
        description: 'Monitor business performance through real-time insights and reporting.',
      },
    ],
  },
  process: {
    badge: 'Our Process',
    title: 'From Idea to Scalable',
    gradientWord: 'SaaS Success.',
    boldPrefix: '',
    subtitleEnd: '',
    description: 'We follow a proven SaaS development process that transforms your vision into a secure, scalable, and cloud-ready product built for long-term growth.',
    steps: [
      {
        number: '01',
        title: 'Discovery & Planning',
        description:
          'We define your business goals, target audience, product requirements, and development roadmap before coding begins.',
        icon: 'search',
      },
      {
        number: '02',
        title: 'Architecture & Design',
        description:
          'Design scalable system architecture, user flows, database structure, and intuitive SaaS interfaces.',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: 'Development & Testing',
        description:
          'Iterative development with clean code, rigorous testing, and performance optimization.',
        icon: 'pen',
      },
      {
        number: '04',
        title: 'Deployment & Growth',
        description:
          'Deploy your SaaS product and provide ongoing support, monitoring, and continuous improvements.',
        icon: 'check',
      },
    ],
  },
  tools: {
    badge: 'Tools We Use',
    title: 'Modern Technologies Powering',
    boldPrefix: '',
    gradientTitle: 'Every SaaS Platform.',
    description: 'We use industry-leading frameworks, cloud platforms, databases, and development tools to build secure, scalable, and high-performance SaaS applications.',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Stripe', icon: 'stripe' },
      { name: 'AWS', icon: 'aws' },
    ],
  },
  projects: {
    badge: 'Featured Projects',
    boldPrefix: '',
    title: 'Innovative SaaS Solutions',
    gradientWord: '',
    subtitleEnd: 'Built For Real Businesses.',
    description: 'Explore a selection of SaaS platforms designed to simplify operations, improve productivity, and help businesses scale with confidence.',
    projects: [
      {
        title: 'SaaS CRM',
        category: 'CRM',
        image: null,
        link: '#',
        description:
          'A cloud-based CRM platform that helps sales teams manage leads, automate follow-ups, track pipelines, and improve customer relationships.',
      },
      {
        title: 'TeamSync HR',
        category: 'HR Management',
        image: null,
        link: '#',
        description:
          'An employee management system that streamlines attendance, payroll, leave requests, onboarding, and performance tracking.',
      },
      {
        title: 'HealthConnect',
        category: 'Healthcare',
        image: null,
        link: '#',
        description:
          'A healthcare management platform for appointment scheduling, patient records, online consultations, and secure medical data management.',
      },
      {
        title: 'ProfitPilot',
        category: 'Fintech',
        image: null,
        link: '#',
        description:
          'A financial dashboard that provides expense tracking, invoicing, subscription management, and real-time business analytics.',
      },
    ],
  },
  benefits: {
    badge: 'Benefits',
    title: 'Why Businesses Choose',
    boldPrefix: '',
    gradientTitle: 'Our SaaS Development.',
    description: 'We build scalable, secure, and high-performance SaaS solutions that help businesses grow, streamline operations, and achieve long-term success.',
    benefits: [
      {
        icon: 'users',
        title: 'Scalable Architecture',
        description:
          'Built to grow with your business without sacrificing speed or performance.',
      },
      {
        icon: 'globe',
        title: 'Enterprise Security',
        description:
          'Protect your data with secure authentication, encryption, and best security practices.',
      },
      {
        icon: 'chart',
        title: 'High Performance',
        description:
          'Fast-loading applications optimized for reliability and exceptional user experience.',
      },
      {
        icon: 'headset',
        title: 'Long-Term Support',
        description:
          'Receive continuous maintenance, feature updates, and technical support after launch.',
      },
    ],
  },
}

// ============================================================
// MAIN SAAS DEVELOPMENT SERVICE PAGE
// ============================================================
const ServiceSaaS = () => {
  const data = saasData

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

export default ServiceSaaS