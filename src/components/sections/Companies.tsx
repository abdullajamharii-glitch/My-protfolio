'use client'

import { motion } from 'framer-motion'
import { Marquee } from '@/components/ui/Marquee'
import {
  Palmtree,
  Utensils,
  Megaphone,
  GraduationCap,
  BookOpen,
  Heart
} from 'lucide-react'

const companies = [
  {
    name: 'Rajav Beach Resort',
    role: 'Web Development & SEO',
    location: 'Kochi, Kerala',
    icon: Palmtree,
    color: 'rgba(52, 211, 153, 0.1)',
    iconColor: '#34d399',
    shadowGlow: 'rgba(52, 211, 153, 0.15)',
  },
  {
    name: 'Al Beraimi Cafeteria',
    role: 'Food Menu Portal & SEO',
    location: 'Sharjah, UAE',
    icon: Utensils,
    color: 'rgba(251, 146, 60, 0.1)',
    iconColor: '#fb923c',
    shadowGlow: 'rgba(251, 146, 60, 0.15)',
  },
  {
    name: 'AJ School of Ad',
    role: 'Digital Marketing Intern',
    location: 'Kanhangad, Kerala',
    icon: Megaphone,
    color: 'rgba(244, 114, 182, 0.1)',
    iconColor: '#f472b6',
    shadowGlow: 'rgba(244, 114, 182, 0.15)',
  },
  {
    name: 'Calicut University',
    role: 'BA English Literature',
    location: 'Calicut, Kerala',
    icon: GraduationCap,
    color: 'rgba(167, 139, 250, 0.1)',
    iconColor: '#a78bfa',
    shadowGlow: 'rgba(167, 139, 250, 0.15)',
  },
  {
    name: 'Darul Huda University',
    role: 'Academic PG Studies',
    location: 'Malappuram, Kerala',
    icon: BookOpen,
    color: 'rgba(56, 189, 248, 0.1)',
    iconColor: '#38bdf8',
    shadowGlow: 'rgba(56, 189, 248, 0.15)',
  },
  {
    name: 'Noufu Weds Kubra',
    role: 'Digital Wedding Design',
    location: 'Vercel App',
    icon: Heart,
    color: 'rgba(239, 68, 68, 0.1)',
    iconColor: '#ef4444',
    shadowGlow: 'rgba(239, 68, 68, 0.15)',
  },
]

export default function Companies() {
  return (
    <section className="relative w-full py-14 overflow-hidden bg-black/35 border-y border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#ffffff] opacity-[0.01] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/35 mb-2 block">
            COLLABORATIONS & MILESTONES
          </span>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/85">
            Companies & Institutions I Work With
          </h2>
        </motion.div>
      </div>

      <div className="w-full">
        <Marquee pauseOnHover className="[--duration:35s] py-3" repeat={4}>
          {companies.map((company, idx) => {
            const Icon = company.icon
            return (
              <div
                key={idx}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.035] transition-all duration-300 w-[295px] sm:w-[315px] backdrop-blur-md group cursor-pointer"
                style={{
                  // Dynamic subtle color shadow on hover
                  boxShadow: `0 4px 20px -2px rgba(0, 0, 0, 0.3)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px -10px ${company.shadowGlow}, 0 0 1px 1px rgba(255, 255, 255, 0.1)`
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px -2px rgba(0, 0, 0, 0.3)`
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                  style={{
                    backgroundColor: company.color,
                  }}
                >
                  <Icon
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: company.iconColor }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14.5px] font-bold text-white/95 group-hover:text-white transition-colors duration-200 truncate">
                    {company.name}
                  </h4>
                  <p className="text-xs text-white/45 truncate font-mono mt-0.5">
                    {company.role}
                  </p>
                  <p className="text-[9.5px] text-white/30 font-mono mt-1 flex items-center gap-1">
                    <span>•</span> {company.location}
                  </p>
                </div>
              </div>
            )
          })}
        </Marquee>
      </div>
    </section>
  )
}
