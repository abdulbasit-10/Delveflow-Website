// ===== CONTACT PAGE =====
// File: src/pages/Contact.jsx

import React, { useState } from 'react'
import Facebook_icon from "../assets/facebook_icon.png"
import Insta_icon from "../assets/instagram_icon.png"
import Linkedin_icon from "../assets/linkedin_icon.png"

// ============================================================
// SECTION 1: CONTACT HERO
// ============================================================
// ===== CONTACT HERO SECTION =====
const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(56,107,223,0.14),transparent_50%),radial-gradient(circle_at_80%_65%,rgba(255,197,92,0.14),transparent_50%)]" />
      
      {/* Dotted grid */}
      <div
        className="pointer-events-none absolute -left-4 -bottom-4 h-36 w-36 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(#b9c6d6 1.4px, transparent 1.4px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="relative mx-auto w-[min(1180px,calc(100%-36px))] py-20 text-center">
        {/* Badge */}
        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#0b3765] px-4 py-1.5 text-[13px] font-bold text-[#0b3765]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0b3765]" />
          Contact Us
        </span>

        {/* Heading with gradient */}
        <h1 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,3vw,3.4rem)] font-black leading-[1.15] text-[#0a0a0a] font-medium">
          Let's Turn Your Ideas
          <br />
          <span className="bg-gradient-to-r from-[#0b3b7b] to-[#d4bb15] bg-clip-text text-transparent">
            Into Reality.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#333333]">
          Whether you're planning a new website, building a custom
          application, or looking to scale your business with modern
          technology, our team is here to help. Tell us about your project,
          and we'll get back to you with the right solution.
        </p>
      </div>
    </section>
  )
}

// ===== SERVICES LIST =====


// ============================================================
// SECTION 2: CONTACT FORM & INFO
// ============================================================

// ===== CONTACT INFO DATA =====
const contactInfo = [
  {
    icon: 'location',
    label: 'Address',
    value: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  },
  {
    icon: 'email',
    label: 'Email',
    value: 'info@delveflow.co',
    href: 'mailto:info@delveflow.co',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+92 346 9127976',
    href: 'tel:+923469127976',
  },
]

// ===== SOCIAL LINKS DATA =====
const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1AMUv5tXQB/', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/delveflow/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/delveflow?igsh=MXh0bGtibTJqcDZucg==', icon: 'instagram' },
]

// ===== SERVICES LIST =====
const services = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'AI Solutions',
  'SaaS Development',
  'Cloud & DevOps',
]

// ===== CONTACT INFO ICONS =====
const infoIcons = {
  location: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" stroke="#001530" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" stroke="#001530" strokeWidth="1.8" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="#001530" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="#001530" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M5 4.5h3l1.3 4-2 1.5a12 12 0 006.7 6.7l1.5-2 4 1.3v3a1.5 1.5 0 01-1.6 1.5A16 16 0 015 6.1 1.5 1.5 0 015 4.5z" stroke="#001530" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
}

// ===== SOCIAL ICONS =====
const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="#001530" strokeWidth="1.8" />
      <circle cx="8" cy="9" r="1" fill="#001530" />
      <path d="M8 11.5v5M16 16.5v-3a2 2 0 00-4 0v3M12 11.5v5" stroke="#001530" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M14 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H8.5v3H10.5V19h3v-6h2l.5-3H13.5v-1.5c0-.5.5-1 1-1z" stroke="#001530" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="#001530" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="#001530" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="#001530" />
    </svg>
  ),
}

// ===== CONTACT SECTION =====
const ContactSection = () => {
  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  // ===== HANDLE INPUT CHANGE =====
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  // ===== HANDLE FORM SUBMIT =====
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Add your form submission logic here
  }

  return (
    <section className="relative overflow-hidden bg-white py-12">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,107,223,0.06),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(255,197,92,0.08),transparent_45%)]" />

      <div className="relative mx-auto w-[min(1000px,calc(100%-36px))]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          
          {/* ===== LEFT COLUMN - CONTACT FORM ===== */}
          <div className="overflow-hidden rounded-2xl border border-[#e3e7ee] bg-white shadow-[0_14px_34px_rgba(6,23,43,0.06)]">
            {/* Form Header */}
            <div className="bg-[#0b3765] px-5 py-3.5">
              <h2 className="font-serif text-[clamp(1.2rem,1.5vw,1.6rem)] font-black text-white">
                Send us a message
              </h2>
              <p className="mt-0.5 text-[11px] text-white/70">
                Fill out the form below, and our team will get back to you
                within one business day.
              </p>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="grid gap-2.5 px-9 py-6">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <div>
                  <label className="mb-0.5 block text-[10px] font-semibold text-[#0b3765]">
                    Full Name<span className="text-[#0b3765]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ali Hassan"
                    className="w-full rounded-lg bg-[#F7F8FA] px-3 py-1.5 text-[12px] text-[#06172b] placeholder:text-[#8b97a5] outline-none transition focus:ring-2 focus:ring-[#0b3765]/30"
                    value={formData.fullName}
                    onChange={handleChange('fullName')}
                  />
                </div>
                <div>
                  <label className="mb-0.5 block text-[10px] font-semibold text-[#0b3765]">
                    Email<span className="text-[#0b3765]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="@james.com"
                    className="w-full rounded-lg bg-[#F7F8FA] px-3 py-1.5 text-[12px] text-[#06172b] placeholder:text-[#8b97a5] outline-none transition focus:ring-2 focus:ring-[#0b3765]/30"
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#0b3765]">
                  Phone Number<span className="text-[#0b3765]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 123 456 7890"
                  className="w-full rounded-lg bg-[#F7F8FA] px-3 py-1.5 text-[12px] text-[#06172b] placeholder:text-[#8b97a5] outline-none transition focus:ring-2 focus:ring-[#0b3765]/30"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                />
              </div>

              {/* Row 3: Service Selection with Chevron */}
              <div className="relative">
                <label className="mb-0.5 block text-[10px] font-semibold text-[#0b3765]">
                  Choose a service
                </label>
                <div className="relative">
                  <select
                    className="w-full cursor-pointer appearance-none rounded-lg bg-[#F7F8FA] px-3 py-1.5 text-[12px] text-[#06172b] placeholder:text-[#8b97a5] outline-none transition focus:ring-2 focus:ring-[#0b3765]/30"
                    value={formData.service}
                    onChange={handleChange('service')}
                  >
                    <option value="">Select</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {/* Chevron Icon */}
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8b97a5]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#0b3765]">
                  Message<span className="text-[#0b3765]">*</span>
                </label>
                <textarea
                  required
                  rows={2.5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg bg-[#F7F8FA] px-3 py-1.5 text-[12px] text-[#06172b] placeholder:text-[#8b97a5] outline-none transition focus:ring-2 focus:ring-[#0b3765]/30"
                  value={formData.message}
                  onChange={handleChange('message')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#001530] py-1 pl-4 pr-1 text-[12px] font-bold text-white transition hover:bg-[#062142]"
              >
                Send Message
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#FFE459]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#001530"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* ===== RIGHT COLUMN - CONTACT INFO ===== */}
          <div
            className="rounded-2xl bg-[#0b3765] px-5 py-5 text-white"
            style={{ clipPath: 'polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)' }}
          >
            <h2 className="font-serif text-[clamp(1.2rem,1.5vw,1.6rem)] font-black">
              Get in touch
            </h2>
            <p className="mt-1 text-[11px] leading-5 text-white/70">
              Have a question or need guidance before starting your project?
              Reach out through any of the channels below, we're here to
              help.
            </p>

            {/* Contact Info Items */}
            <ul className="mt-4 grid gap-3.5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#FFE459]">
                    {infoIcons[item.icon]}
                  </span>
                  <div>
                    <p className="text-[12px] font-bold text-white">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[11px] text-white/70 transition hover:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[11px] text-white/70">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-4 border-t border-white/15 pt-3.5">
              <p className="text-[12px] font-bold text-white">Follow Us</p>
              <div className="mt-1.5 flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-7 w-7 cursor-pointer place-items-center rounded-lg bg-[#FFE459] transition hover:bg-[#f5d63f]"
                  >
                    {s.icon === 'facebook' && <img src={Facebook_icon} alt="Facebook" className="h-3 w-3 object-contain" />}
                    {s.icon === 'linkedin' && <img src={Linkedin_icon} alt="LinkedIn" className="h-3 w-3 object-contain" />}
                    {s.icon === 'instagram' && <img src={Insta_icon} alt="Instagram" className="h-3 w-3 object-contain" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// ============================================================
// MAIN CONTACT PAGE (Combines both sections)
// ============================================================
const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}

// ===== EXPORT =====
export default Contact