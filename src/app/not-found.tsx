'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060608] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-md w-full text-center flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-white/70 shadow-2xl backdrop-blur-md">
          <FileQuestion size={30} className="text-white/80" />
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3 block">
          404 Error • Page Not Found
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Document Unavailable
        </h1>

        <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
          The requested document or page is currently being updated or is not publicly accessible at this moment.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-xs uppercase font-mono tracking-wider font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-[1.02]"
          >
            <Home size={15} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white/80 text-xs uppercase font-mono tracking-wider font-semibold hover:bg-white/[0.08] hover:text-white transition-all duration-200"
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
