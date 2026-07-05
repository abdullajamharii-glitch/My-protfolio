'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Search,
  Share2,
  Target,
  Smartphone,
  CheckCircle2
} from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Building blazing-fast, responsive web applications using modern technology.',
    details: [
      'Next.js & React Applications',
      'Tailwind CSS & Modern UI',
      'Speed & Core Web Vitals optimization',
      'CMS & Custom Admin Panels'
    ],
    icon: Code2,
    color: '#34d399',
    glow: 'rgba(52, 211, 153, 0.12)',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Optimizing sites to boost organic rankings, traffic, and search visibility.',
    details: [
      'Keyword Research & Competitor Analysis',
      'On-Page, Off-Page & Technical SEO',
      'Local SEO (Google Business Profiles)',
      'Schema markup & semantic structured data'
    ],
    icon: Search,
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.12)',
  },
  {
    title: 'Social Media Marketing (SMM)',
    description: 'Creating organic campaigns to drive brand awareness and engagement.',
    details: [
      'Brand positioning & creative content',
      'Targeted campaign management',
      'Engagement strategies & audits',
      'Analytics & growth reports'
    ],
    icon: Share2,
    color: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.12)',
  },
  {
    title: 'Search Engine Marketing (SEM)',
    description: 'Maximizing reach and conversion rates through strategic paid ads.',
    details: [
      'PPC & Google Ads management',
      'High-converting ad copies',
      'Budget management & optimization',
      'A/B testing & landing page alignment'
    ],
    icon: Target,
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.12)',
  },
  {
    title: 'App Development',
    description: 'Designing and building intuitive, modern mobile applications.',
    details: [
      'Hybrid & cross-platform applications',
      'Mobile UX design optimization',
      'Lightweight and fluid performance',
      'API integrations & offline access'
    ],
    icon: Smartphone,
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.12)',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 py-20 text-white"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 font-medium font-mono">
          My Services
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          What I Do
        </h2>
        <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">
          Fusing technical engineering with creative marketing strategies to build, scale, and optimize your digital presence.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-[24px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 flex flex-col overflow-hidden transition-all duration-300 group hover:border-white/[0.15] hover:bg-white/[0.035]"
              style={{
                boxShadow: `0 8px 30px rgba(0, 0, 0, 0.45)`,
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 15px 40px -10px ${service.glow}, 0 0 1px 1px rgba(255, 255, 255, 0.05)`
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 30px rgba(0, 0, 0, 0.45)`
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Background gradient blob */}
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-300 pointer-events-none"
                style={{ background: service.color }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}35`,
                }}
              >
                <Icon size={22} style={{ color: service.color }} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-[13.5px] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Details Bullet List */}
              <ul className="flex flex-col gap-2.5 mt-auto">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs text-white/50 font-mono">
                    <CheckCircle2 size={13} className="text-white/30 mt-0.5 flex-shrink-0" style={{ color: `${service.color}cc` }} />
                    <span className="leading-normal">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
