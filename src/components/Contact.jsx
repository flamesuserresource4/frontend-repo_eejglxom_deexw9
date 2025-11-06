import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    // demo-only success UI
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you shortly.')

    console.log('Contact form payload', payload)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Let’s build something great</h2>
          <p className="mt-4 text-slate-600">Tell me about your project and I’ll reach out with next steps.</p>
        </div>
        <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
          <textarea name="message" required rows={5} placeholder="Tell me a bit about your goals..." className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800" type="submit">
              Send message
            </button>
            <p className="text-sm text-slate-600">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
