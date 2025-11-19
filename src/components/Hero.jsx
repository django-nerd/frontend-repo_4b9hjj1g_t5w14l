import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  // Glowing cursor trail
  const trailRef = useRef(null)
  useEffect(() => {
    const el = trailRef.current
    const handler = (e) => {
      const dot = document.createElement('span')
      dot.className = 'pointer-events-none absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-sky-400/15 to-violet-500/20 blur-2xl'
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      el.appendChild(dot)
      setTimeout(() => dot.remove(), 600)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div ref={trailRef} className="pointer-events-none absolute inset-0 z-20" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_40px_rgba(99,102,241,0.25)]"
        >
          Write Once. Resonate Forever.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl"
        >
          AI-powered publishing, beautiful reading experiences, zero distractions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-sky-500 to-violet-500 text-white font-medium px-6 py-3 shadow-[0_10px_40px_rgba(56,189,248,0.35)] hover:shadow-[0_12px_50px_rgba(139,92,246,0.5)] transition-all">
            Start Writing Free
          </button>
          <button className="inline-flex items-center justify-center rounded-xl border border-white/15 text-slate-100/90 hover:text-white hover:bg-white/5 px-6 py-3 transition-colors">
            Explore Echo
          </button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950"></div>
    </section>
  )
}
