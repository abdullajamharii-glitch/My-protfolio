'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { X } from 'lucide-react'

const PHONE = '919778148699' // WhatsApp format: country code + number
const MESSAGE = encodeURIComponent(
  "Hi Abdulla! I came across your portfolio and would love to connect. 👋"
)
const WA_LINK = `https://wa.me/${PHONE}?text=${MESSAGE}`

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
      }}
    >
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(18,18,18,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(14px)',
              borderRadius: 16,
              padding: '10px 14px 10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              maxWidth: 230,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                Chat on WhatsApp
              </p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>
                Usually replies quickly ⚡
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setDismissed(true)
                setShowTooltip(false)
              }}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: 'none',
                borderRadius: 8,
                width: 22,
                height: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.5)',
                flexShrink: 0,
              }}
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.4)',
          cursor: 'pointer',
          textDecoration: 'none',
          position: 'relative',
        }}
      >
        {/* Pulse ring */}
        <motion.span
          animate={{
            scale: [1, 1.55, 1],
            opacity: [0.45, 0, 0.45],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid rgba(37,211,102,0.6)',
            pointerEvents: 'none',
          }}
        />

        <FaWhatsapp size={26} color="white" />
      </motion.a>
    </div>
  )
}
