import React, { useEffect, useState } from 'react'

const sample = [
  'How to Think in Systems',
  'The Silent Rules of Great Interfaces',
  'Why Slow Content Wins',
  'Rituals for Deep Work',
  'The Elegance of Sparse UI'
]

export default function LiveFeed() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(sample)
    const interval = setInterval(() => {
      setItems((prev) => {
        const next = [...prev]
        const first = next.shift()
        next.push(first)
        return next
      })
    }, 1600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Trending now</h2>
          <span className="inline-flex items-center gap-2 text-emerald-400 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> live
          </span>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <ul className="divide-y divide-white/10">
            {items.map((t, i) => (
              <li key={t + i} className="flex items-center justify-between px-4 py-3 text-slate-200">
                <span className="truncate">{t}</span>
                <span className="text-slate-400 text-sm">{Math.floor(Math.random()*400)+100} readers</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
