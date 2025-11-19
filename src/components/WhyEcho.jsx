import React from 'react'
import { Brain, Rocket, BarChart3, Globe, Coins } from 'lucide-react'

const features = [
  { icon: Brain, title: 'AI co-writer', desc: 'Drafts, outlines, and tone suggestions that feel like you.' },
  { icon: Rocket, title: 'Instant SEO', desc: 'Automatic metadata, sitemaps, and semantic structure.' },
  { icon: BarChart3, title: 'Reader analytics', desc: 'Understand resonance with deep engagement insights.' },
  { icon: Globe, title: 'Custom domains', desc: 'Make it yours with brand-forward domains & themes.' },
  { icon: Coins, title: 'Monetization', desc: 'Memberships, tips, and sponsorships built in.' }
]

export default function WhyEcho() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Why writers choose Echo</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 via-sky-500 to-violet-500 p-[2px] mb-4">
                <div className="h-full w-full rounded-md bg-slate-900 grid place-items-center text-white">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
