'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen, Megaphone, Briefcase } from 'lucide-react'

const timelineEvents = [
  {
    year: '2021',
    title: 'BA English — Bachelor\'s Degree',
    institution: 'Calicut University',
    description:
      'Completed my undergraduate degree in BA English from Calicut University, building a strong foundation in language, literature, and communication skills.',
    icon: GraduationCap,
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.35)',
    side: 'left',
  },
  {
    year: '2023',
    title: 'Post-Graduation (PG)',
    institution: 'Darul Huda Islamic University',
    description:
      'Completed my postgraduate studies at Darul Huda Islamic University, deepening knowledge in Islamic sciences and advanced academic research.',
    icon: BookOpen,
    color: '#34d399',
    glow: 'rgba(52,211,153,0.35)',
    side: 'right',
  },
  {
    year: '2026',
    title: 'Digital Marketing Course',
    institution: 'AJ School of Advertisement, Kanhangad',
    description:
      'Enrolled in a professional Digital Marketing course covering SEO, SEM, social media marketing, content strategy, and modern advertising tools.',
    icon: Megaphone,
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.35)',
    side: 'left',
  },
  {
    year: '2026',
    title: 'Intern Trainee',
    institution: 'AJ School of Advertisement, Kanhangad',
    description:
      'Currently working as an Intern Trainee at AJ School of Advertisement, gaining hands-on experience in digital campaigns, brand strategy, and creative advertising.',
    icon: Briefcase,
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.35)',
    side: 'right',
  },
]

export default function Timeline() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-16 pb-28 text-white"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 font-medium">
          My Journey
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Education Timeline
        </h2>
        <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">
          A snapshot of the academic milestones that have shaped my skills
          and perspective.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden hidden md:block">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.15) 90%, transparent)',
              transformOrigin: 'top',
            }}
          />
        </div>

        <div className="flex flex-col gap-16 w-full">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isLeft = event.side === 'left'

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: '-60px' }}
                className={`relative flex items-center w-full ${
                  isLeft
                    ? 'md:flex-row flex-col'
                    : 'md:flex-row-reverse flex-col'
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-3rem)] ${
                    isLeft ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden"
                    style={{
                      boxShadow: `0 0 40px ${event.glow}`,
                    }}
                  >
                    {/* Background glow blob */}
                    <div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                      style={{ background: event.color }}
                    />

                    {/* Year badge */}
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-4"
                      style={{
                        background: `${event.color}22`,
                        color: event.color,
                        border: `1px solid ${event.color}44`,
                      }}
                    >
                      <span>{event.year}</span>
                    </div>

                    {/* Icon row */}
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `${event.color}22`,
                          border: `1px solid ${event.color}44`,
                        }}
                      >
                        <Icon
                          size={20}
                          style={{ color: event.color }}
                        />
                      </div>
                      <div>
                        <h3 className="text-[17px] font-bold text-white leading-tight">
                          {event.title}
                        </h3>
                        <p
                          className="text-[13px] font-medium mt-0.5"
                          style={{ color: event.color }}
                        >
                          {event.institution}
                        </p>
                      </div>
                    </div>

                    <p className="text-white/55 text-[13.5px] leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.3,
                      type: 'spring',
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                    className="relative w-5 h-5 rounded-full border-2 border-white/20 bg-black flex items-center justify-center"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: event.color }}
                    />
                    {/* Ping animation */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ background: event.color }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
