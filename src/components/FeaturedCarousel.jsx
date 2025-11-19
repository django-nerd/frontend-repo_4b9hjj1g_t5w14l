import React from 'react'
import { motion } from 'framer-motion'

const stories = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: [
    'Designing Calm Interfaces',
    'The Psychology of Focus',
    'From Draft to Masterpiece',
    'Invisible Performance Wins',
    'Crafting with AI, Thoughtfully',
    'Aesthetics of Readability',
    'Signals vs. Noise',
    'Latency of Thought'
  ][i % 8],
  author: ['Nova Park', 'Eli Arman', 'Kai Rivera', 'Mira Chen'][i % 4],
  cover: `https://picsum.photos/seed/echo${i}/900/1200`
}))

export default function FeaturedCarousel() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Curated featured stories</h2>
          <p className="text-slate-400 text-sm">Hover to preview</p>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto px-6">
        <div className="flex gap-6 min-w-max">
          {stories.map((s, idx) => (
            <motion.article
              key={s.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative w-[260px] shrink-0"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <img src={s.cover} alt="" className="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"/>
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-semibold leading-tight drop-shadow">{s.title}</h3>
                  <p className="text-slate-300 text-sm">by {s.author}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
