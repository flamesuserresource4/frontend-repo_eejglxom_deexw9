import { Rocket, Sparkles, Shield, Zap } from 'lucide-react'

const features = [
  {
    title: 'Lightning-fast performance',
    desc: 'Optimized builds, image pipelines, and best practices baked in.',
    icon: Zap,
  },
  {
    title: 'Modern, clean design',
    desc: 'Thoughtful layouts and typography that elevate your brand.',
    icon: Sparkles,
  },
  {
    title: 'Conversion-focused',
    desc: 'Clear calls-to-action that turn visitors into customers.',
    icon: Rocket,
  },
  {
    title: 'Secure and reliable',
    desc: 'Accessibility, SEO, and security from day one.',
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Built to impress and perform</h2>
          <p className="mt-4 text-slate-600">Everything you need for a standout online presence that feels effortless and professional.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
