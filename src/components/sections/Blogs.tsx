'use client'

import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight, Clock } from 'lucide-react'

const blogs = [
  {
    tag: 'Digital Marketing',
    title: 'How to Build a Strong Brand Presence on Social Media in 2026',
    excerpt:
      'Discover the latest strategies to grow your brand organically — from content calendars to algorithm-friendly creatives.',
    date: 'Coming Soon',
    readTime: '5 min read',
    gradient: 'from-violet-500/20 to-transparent',
    tagColor: '#a78bfa',
  },
  {
    tag: 'SEO',
    title: 'Mastering On-Page SEO: A Beginner\'s Complete Guide',
    excerpt:
      'Learn how to optimize your web pages for search engines — covering keywords, meta tags, page speed, and more.',
    date: 'Coming Soon',
    readTime: '7 min read',
    gradient: 'from-emerald-500/20 to-transparent',
    tagColor: '#34d399',
  },
  {
    tag: 'Advertising',
    title: 'Creative Poster Design Tips for Digital Advertisers',
    excerpt:
      'Explore essential design principles and tools that help you create visually compelling advertising posters.',
    date: 'Coming Soon',
    readTime: '4 min read',
    gradient: 'from-pink-500/20 to-transparent',
    tagColor: '#f472b6',
  },
]

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-16 pb-24 text-white"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 font-medium">
          Insights &amp; Ideas
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Blogs</h2>
        <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">
          Thoughts on digital marketing, SEO, design, and the ever-evolving
          world of advertising.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden flex flex-col"
          >
            {/* Gradient top accent */}
            <div
              className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${blog.gradient} opacity-60 pointer-events-none`}
            />

            {/* Icon header */}
            <div className="relative z-10 p-6 pb-4 flex items-center justify-between">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${blog.tagColor}22`,
                  border: `1px solid ${blog.tagColor}44`,
                }}
              >
                <BookOpen size={18} style={{ color: blog.tagColor }} />
              </div>

              <span
                className="text-[11px] font-semibold px-3 py-1 rounded-full"
                style={{
                  background: `${blog.tagColor}18`,
                  color: blog.tagColor,
                  border: `1px solid ${blog.tagColor}33`,
                }}
              >
                {blog.tag}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 pb-6 flex flex-col flex-1">
              <h3 className="text-[16px] font-bold text-white leading-snug mb-3">
                {blog.title}
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed flex-1">
                {blog.excerpt}
              </p>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] text-white/30">
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {blog.readTime}
                  </span>
                  <span>{blog.date}</span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ArrowUpRight size={13} className="text-white/70" />
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Coming Soon note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <span className="inline-flex items-center gap-2 text-xs text-white/30 border border-white/10 rounded-full px-4 py-2 bg-white/[0.02]">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Full blog coming soon — stay tuned!
        </span>
      </motion.div>
    </section>
  )
}
