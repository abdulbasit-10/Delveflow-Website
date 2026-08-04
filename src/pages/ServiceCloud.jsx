// ============================================================
// CLOUD AND DEVOPS SERVICE PAGE
// ============================================================
// File: src/pages/ServiceCloud.jsx

import React from 'react'
import ServiceHero from '../Components/ServiceHero'
import KeyFeatures from '../Components/KeyFeatures'
import ServiceProcess from '../Components/ServiceProcess'
import ServiceTools from '../Components/ServiceTools'
import ServiceProjects from '../Components/ServiceProjects'
import ServiceBenefits from '../Components/ServiceBenefits'
import { CtaSection } from './Home'

// ============================================================
// CLOUD AND DEVOPS SERVICE DATA
// ============================================================
const cloudData = {
  hero: {
    badge: 'Cloud and DevOps',
    title: 'Build Secure Cloud',
    gradientTitle: 'Infrastructure That Scales.',
    description: 'Deploy, automate, and optimize your applications with modern cloud infrastructure, CI/CD pipelines, containerization, and DevOps best practices for faster, secure, and reliable software delivery.',
    primaryButtonText: 'Start Your Cloud Journey',
    primaryButtonLink: '#/contact',
    secondaryButtonText: 'Explore Cloud Solutions',
    secondaryButtonLink: '#/services',
  },
  features: {
    badge: 'Key Features',
    title: 'Everything You Need for Modern',
    gradientTitle: 'Cloud & DevOps.',
    description: 'We build resilient cloud environments and automated deployment pipelines.',
  items: [
  {
    icon: 'ccc1',
    title: 'Cloud Architecture',
    description: 'Design secure, scalable cloud infrastructure tailored to your business and application needs.',
  },
  {
    icon: 'ccc2',
    title: 'CI/CD Pipelines',
    description: 'Automate code building, testing, and deployment for faster and more reliable software releases.',
  },
  {
    icon: 'ccc3',
    title: 'Docker Containers',
    description: 'Package applications into portable containers for consistent development and production environments.',
  },
  {
    icon: 'ccc4',
    title: 'Kubernetes Management',
    description: 'Orchestrate and scale containerized applications efficiently with Kubernetes clusters.',
  },
  {
    icon: 'ccc5',
    title: 'Infrastructure as Code',
    description: 'Provision and manage cloud resources automatically using version-controlled infrastructure code.',
  },
  {
    icon: 'ccc6',
    title: 'Monitoring & Alerts',
    description: 'Track application performance and receive real-time alerts to ensure maximum uptime.',
  },
  {
    icon: 'ccc7',
    title: 'Security Hardening',
    description: 'Protect your cloud environment with security best practices, access control, and compliance measures.',
  },
  {
    icon: 'ccc8',
    title: 'Backup & Recovery',
    description: 'Safeguard critical data with automated backups and reliable disaster recovery solutions.',
  },
]
  },
  process: {
    badge: 'Our Process',
    title: 'From Cloud Strategy to',
    gradientWord: 'Reliable Deployments.',
    boldPrefix: '',
    subtitleEnd: '',
    description: 'Our proven DevOps workflow helps you build secure cloud infrastructure, automate deployments, monitor performance, and continuously optimize your applications for long-term success.',
    steps: [
      {
        number: '01',
        title: 'Assessment & Planning',
        description:
          'We analyze your infrastructure, business goals, and technical requirements to create a scalable cloud and DevOps strategy.',
        icon: 'search',
      },
      {
        number: '02',
        title: 'Cloud Infrastructure Setup',
        description:
          'We configure secure cloud environments, networking, storage, and computing resources tailored to your application.',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: 'Automation & Deployment',
        description:
          'We build CI/CD pipelines that automate testing, deployment, and release management for faster and error-free delivery.',
        icon: 'pen',
      },
      {
        number: '04',
        title: 'Monitoring & Optimization',
        description:
          'We continuously monitor system performance, optimize infrastructure, and ensure high availability, security, and reliability.',
        icon: 'check',
      },
    ],
  },
  tools: {
    badge: 'Tools We Use',
    title: 'Modern Cloud Technologies That',
    boldPrefix: '',
    gradientTitle: 'Power Every Deployment.',
    description: 'We leverage industry-leading cloud platforms, DevOps tools, and automation technologies to build secure infrastructure, streamline deployments, and ensure reliable application performance at every stage.',
    tools: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'GitHub Actions', icon: 'github' },
      { name: 'Grafana', icon: 'grafana' },
    ],
  },
  projects: {
    badge: 'Featured Projects',
    boldPrefix: '',
    title: 'Cloud Solutions',
    gradientWord: '',
    subtitleEnd: 'Built for Performance.',
    description: 'Explore how our cloud and DevOps solutions help businesses modernize infrastructure, automate deployments, improve system reliability, and scale with confidence.',
    projects: [
      {
        title: 'CloudShift Pro',
        category: 'Cloud Migration',
        image: null,
        link: '#',
        description:
          'Migrated legacy infrastructure to AWS, improving scalability, reducing downtime, and optimizing operational costs.',
      },
      {
        title: 'DeployFlow',
        category: 'CI/CD Automation',
        image: null,
        link: '#',
        description:
          'Built an automated CI/CD pipeline that accelerated software releases while ensuring secure and reliable deployments.',
      },
      {
        title: 'KubeScale',
        category: 'Container Platform',
        image: null,
        link: '#',
        description:
          'Implemented a Kubernetes-based infrastructure to improve application availability, scalability, and resource management.',
      },
      {
        title: 'CloudWatch 360',
        category: 'Monitoring & Observability',
        image: null,
        link: '#',
        description:
          'Developed a centralized monitoring solution with real-time metrics, alerting, and performance dashboards for cloud environments.',
      },
    ],
  },
  benefits: {
    badge: 'Benefits',
    title: 'Why Businesses Choose',
    boldPrefix: '',
    gradientTitle: 'Our Cloud & DevOps Solutions.',
    description: 'Accelerate software delivery, strengthen security, and build resilient cloud infrastructure that keeps your applications running smoothly while supporting long-term business growth.',
    benefits: [
      {
        icon: 'users',
        title: 'Faster Releases',
        description:
          'Automate your deployment pipeline to deliver new features and updates quickly with fewer manual errors.',
      },
      {
        icon: 'globe',
        title: 'Enhanced Security',
        description:
          'Protect your applications with secure infrastructure, continuous monitoring, access controls, and DevOps best practices.',
      },
      {
        icon: 'chart',
        title: 'Reliable Infrastructure',
        description:
          'Build highly available cloud environments designed for maximum uptime, stability, and consistent performance.',
      },
      {
        icon: 'headset',
        title: 'Effortless Scalability',
        description:
          'Scale your infrastructure on demand to support growing traffic, workloads, and future business expansion without disruption.',
      },
    ],
  },
}

// ============================================================
// MAIN CLOUD AND DEVOPS SERVICE PAGE
// ============================================================
const ServiceCloud = () => {
  const data = cloudData

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

export default ServiceCloud