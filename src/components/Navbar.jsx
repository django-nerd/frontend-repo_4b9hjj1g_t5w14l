import React from 'react'
import { Menu, PenLine, LogIn, Search } from 'lucide-react'

const NavLink = ({ children }) => (
  <a href="#" className="text-sm text-slate-200/80 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5">
    {children}
  </a>
)

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] md:w-[86%]">
      <div className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-sky-500 to-violet-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center text-white font-semibold tracking-tight">E</div>
          </div>
          <span className="text-white font-semibold tracking-tight">Echo</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <NavLink>Explore</NavLink>
          <NavLink>Topics</NavLink>
          <NavLink className="flex items-center gap-2"><Search className="h-4 w-4"/>Search</NavLink>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 text-sm text-slate-200/80 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
            <PenLine className="h-4 w-4"/>
            Write
          </button>
          <button className="hidden md:inline-flex items-center gap-2 text-sm text-slate-200/80 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
            <LogIn className="h-4 w-4"/>
            Sign In
          </button>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-sky-500 to-violet-500 px-4 py-2 rounded-lg shadow-[0_8px_30px_rgba(59,130,246,0.45)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.55)] transition-all">
            Start Writing Free
          </button>
          <button className="md:hidden text-slate-200/80 hover:text-white p-2 rounded-md hover:bg-white/5">
            <Menu className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </div>
  )
}
