import React, { useState } from 'react'
import confetti from 'canvas-confetti'

export default function MassiveCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const end = Date.now() + 800
    const colors = ['#a78bfa', '#22d3ee', '#06b6d4', '#f472b6']
    ;(function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    })()
  }

  return (
    <section className="py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Join the new era of publishing</h2>
        <p className="text-slate-300 mb-8">Be first to access Echo. Early invites ship soon.</p>
        <form onSubmit={onSubmit} className="mx-auto max-w-xl flex gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
          />
          <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-sky-500 to-violet-500 text-white font-medium px-6 shadow-[0_10px_40px_rgba(56,189,248,0.35)]">
            {submitted ? 'Thanks!' : 'Get early access'}
          </button>
        </form>
      </div>
    </section>
  )
}
