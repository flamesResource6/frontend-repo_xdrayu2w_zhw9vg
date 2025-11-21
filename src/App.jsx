import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-neutral-900">
      {/* Hero Section with full-width Spline cover */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Spline 3D background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Subtle gradient overlay for readability (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]"></div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 sm:py-28 md:py-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20 backdrop-blur mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Live in your browser
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Capture anything.
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
              One shortcut to record your tab, window, or desktop. Clean cuts and a shareable link—automatically.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm shadow-black/30 hover:bg-neutral-100 transition">
                Start recording
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                Send link to my desktop
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                No install required
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                Smart cuts remove silences
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
