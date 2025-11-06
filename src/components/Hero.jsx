import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for new projects
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Simple. Modern. Professional.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              I craft modern, responsive, and elegant websites that make your brand stand out. From personal portfolios to company profiles — fast, clean, and beautifully executed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center rounded-md px-5 py-3 border border-slate-300 text-slate-900 hover:bg-slate-50">
                See my work
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 max-w-md text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />Responsive by default</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />SEO-friendly</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />Blazing fast</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />Clean, modern UI</li>
            </ul>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -z-[1] inset-0 bg-[radial-gradient(80%_60%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
    </section>
  )
}
