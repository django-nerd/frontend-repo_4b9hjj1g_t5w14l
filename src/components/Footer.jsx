import React, { useState } from 'react'
import { Moon, Sun, Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const [dark, setDark] = useState(true)

  const toggle = () => {
    setDark((d) => !d)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <footer className="py-16 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-sky-500 to-violet-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center text-white font-semibold tracking-tight">E</div>
          </div>
          <span className="text-white font-semibold tracking-tight">Echo</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white"><Twitter className="h-4 w-4"/></a>
          <a href="#" className="p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white"><Github className="h-4 w-4"/></a>
          <a href="#" className="p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white"><Linkedin className="h-4 w-4"/></a>
          <button onClick={toggle} className="p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white">
            {dark ? <Moon className="h-4 w-4"/> : <Sun className="h-4 w-4"/>}
          </button>
        </div>
      </div>
    </footer>
  )
}
