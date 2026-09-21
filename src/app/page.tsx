'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import AnimatedBackground from '@/components/AnimatedBackground'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Companies from '@/components/sections/Companies'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import Timeline from '@/components/sections/Timeline'
import Blogs from '@/components/sections/Blogs'
import ContactSection from '@/components/sections/contact/ContactSection'
import Footer from '@/components/sections/Footer'
import WelcomeScreen from '@/components/WelcomeScreen'
import WhatsAppButton from '@/components/WhatsAppButton'

import { hasPlayedIntro, setIntroPlayed } from '@/lib/introState'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false)
  // appVisible: controls CSS opacity — App stays mounted the whole time
  const [appVisible, setAppVisible] = useState(true)

  useEffect(() => {
    const currentHash = window.location.hash
    const pathname = window.location.pathname

    // coming back from portfolio detail page
    if (currentHash === '#portfolio') {
      setShowWelcome(false)
      setAppVisible(true)
      return
    }

    const navEntries = performance.getEntriesByType('navigation')
    const navigationType =
      navEntries.length > 0
        ? (navEntries[0] as PerformanceNavigationTiming).type
        : null

    const isReload = navigationType === 'reload'

    if (isReload && pathname === '/') {
      sessionStorage.removeItem('introPlayed')
      sessionStorage.removeItem('heroPlayed')

      if (window.location.hash) {
        history.replaceState(null, '', '/')
      }

      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    if (!hasPlayedIntro()) {
      // Show welcome, hide main content visually (but keep App mounted to warm up GPU)
      setShowWelcome(true)
      setAppVisible(false)

      const timer = setTimeout(() => {
        setShowWelcome(false)
        // Slight delay before revealing so the welcome exit animation leads cleanly
        setTimeout(() => setAppVisible(true), 200)
        setIntroPlayed()
      }, 2800)

      return () => clearTimeout(timer)
    } else {
      setShowWelcome(false)
      setAppVisible(true)
    }
  }, [])

  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />

      {/* Main content — always mounted, opacity driven so 3D canvas warms up silently */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          opacity: appVisible ? 1 : 0,
          transition: appVisible ? 'opacity 0.6s ease' : 'none',
          pointerEvents: appVisible ? 'auto' : 'none',
        }}
      >
        <Navbar />
        <Hero showApp={true} />
        <About />
        <Companies />
        <Services />
        <PortfolioShowcase />
        <Timeline />
        <Blogs />
        <ContactSection />
        <Footer />
      </div>

      {/* WHATSAPP FLOAT */}
      <WhatsAppButton />

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
            }}
          >
            <WelcomeScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}