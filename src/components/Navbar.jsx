import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500" />
            <span className="font-semibold tracking-tight text-slate-900">Flames Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#work" className="hover:text-slate-900">Work</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Get Started</a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 grid gap-2 text-sm text-slate-700">
              <a onClick={() => setOpen(false)} href="#features" className="rounded-md px-3 py-2 hover:bg-slate-100">Features</a>
              <a onClick={() => setOpen(false)} href="#work" className="rounded-md px-3 py-2 hover:bg-slate-100">Work</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-md px-3 py-2 hover:bg-slate-100">Contact</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-md px-3 py-2 bg-slate-900 text-white hover:bg-slate-800">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
