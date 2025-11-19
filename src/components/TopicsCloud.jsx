import React from 'react'
const topics = ['AI', 'Design', 'Culture', 'Productivity', 'Minimalism', 'Technology', 'Storytelling', 'Creativity', 'Startups', 'Research', 'Wellbeing', 'Philosophy']

export default function TopicsCloud() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Topics that matter</h2>
        <div className="flex flex-wrap gap-3">
          {topics.map((t) => (
            <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-100/90 hover:text-white hover:shadow-[0_0_0_2px_rgba(139,92,246,0.25)_inset] hover:bg-white/10 transition-all cursor-pointer">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
