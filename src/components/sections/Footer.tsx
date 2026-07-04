'use client'

import { motion } from 'framer-motion'
import {
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abdulla-chembarikka-b333ab417',
    color: '#0A66C2',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/abdulla_chembarikka_/',
    color: '#E1306C',
  },
  {
    icon: FaPinterestP,
    label: 'Pinterest',
    href: 'https://pin.it/1ftO7kiFh',
    color: '#E60023',
  },
  {
    icon: FaXTwitter,
    label: 'X',
    href: 'https://x.com/AbdullaChembar1',
    color: '#ffffff',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:abdullajamharii@gmail.com',
    color: '#a78bfa',
  },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden border-t border-white/[0.06]">
      {/* Glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/[0.07]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p
              className="font-mono text-sm tracking-[0.2em] text-white/40 uppercase mb-2"
            >
              Portfolio
            </p>
            <h2 className="text-2xl font-bold mb-3 tracking-tight">
              Abdulla Jamhari
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Digital Marketer &amp; Web Developer based in Kasaragod, Kerala.
              Crafting brands, content, and campaigns that drive growth.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-sm tracking-[0.2em] text-white/40 uppercase mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-white/60 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-sm tracking-[0.2em] text-white/40 uppercase mb-4">
              Get In Touch
            </p>
            <a
              href="mailto:abdullajamharii@gmail.com"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 block mb-2"
            >
              abdullajamharii@gmail.com
            </a>
            <p className="text-sm text-white/40 mb-5">Kasaragod, Kerala, India</p>

            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-colors duration-200"
                  >
                    <Icon size={14} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/30 font-mono tracking-wider">
            © {new Date().getFullYear()} Abdulla Jamhari — All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-mono tracking-wider">
            www.abdullajamhari.com
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
