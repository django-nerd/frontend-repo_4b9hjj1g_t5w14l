import React from 'react'
import { motion } from 'framer-motion'

const people = [
  { name: 'Aria Vega', role: 'Essayist', avatar: 'https://i.pravatar.cc/120?img=12', quote: 'Echo feels like writing in the future—quiet, focused, and powerful.' },
  { name: 'Noah K', role: 'Tech Blogger', avatar: 'https://i.pravatar.cc/120?img=31', quote: 'My drafts became publishable twice as fast. The polish is unreal.' },
  { name: 'Mina Park', role: 'Editor', avatar: 'https://i.pravatar.cc/120?img=5', quote: 'Readers are staying longer and sharing more. It just resonates.' }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Loved by thoughtful writers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {people.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={p.avatar} alt="" className="h-12 w-12 rounded-full"/>
                <div>
                  <p className="text-white font-semibold">{p.name}</p>
                  <p className="text-slate-400 text-sm">{p.role}</p>
                </div>
              </div>
              <p className="text-slate-200">“{p.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
