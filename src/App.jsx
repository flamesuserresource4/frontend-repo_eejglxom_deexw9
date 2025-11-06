import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#features" className="hover:text-slate-700">Features</a>
              <a href="#work" className="hover:text-slate-700">Work</a>
              <a href="#contact" className="hover:text-slate-700">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
