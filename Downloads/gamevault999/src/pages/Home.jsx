import { useState } from 'react'
import { Link } from 'react-router-dom'

const featuredGames = Array.from({ length: 12 }, (_, i) => i + 1)

const trustSignals = [
  { label: 'SSL Secure', color: 'text-emerald-300', description: 'Every credit is wrapped in bank-grade protection.' },
  { label: 'Verified Agents', color: 'text-sky-300', description: 'Direct access to vetted Game Vault insiders.' },
  { label: '24/7 Support', color: 'text-amber-300', description: 'Real humans watching your back all night long.' },
]

const quickSteps = [
  { number: '01', title: 'Download & install', copy: 'Grab the official Game Vault app—built for mobile casino play.' },
  { number: '02', title: 'Create your vault', copy: 'Set up your profile, pick your room, stay in control.' },
  { number: '03', title: 'Load up with credits', copy: 'Top up instantly through verified agents for zero delays.' },
  { number: '04', title: 'Spin, shoot, win', copy: 'Dive into slots, fish rooms, and tournaments without lag.' },
]

function Home() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/images/banner/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#050914]/90 via-[#0b1a3a]/80 to-[#050914]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.18),transparent_38%),radial-gradient(circle_at_70%_65%,rgba(255,179,71,0.12),transparent_45%)]" />
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 border border-white/20 text-white p-3 rounded-full transition-colors"
          aria-label="Toggle mute"
        >
          {isMuted ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <span className="neon-pill">Casino multiverse</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Game Vault is where late-night adrenaline meets legit payouts.
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Slots, fish rooms, jackpots, and tournaments—built for mobile, secured with SSL, and fueled by verified agents. Trusted by 18 million players who never want the night to end.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://download.gamevault999.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download App
              </a>
              <Link
                to="/agents"
                className="btn-secondary"
              >
                Talk to an Agent
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: '18M+ players', sub: 'Worldwide installs & counting' },
                { label: 'Instant credits', sub: 'Verified agent network' },
                { label: 'Zero downtime', sub: '24/7 play-ready servers' },
              ].map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-4 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">{item.sub}</p>
                  <p className="text-xl font-semibold text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-300">Live jackpot</p>
                  <p className="text-3xl md:text-4xl font-bold text-amber-200">$12,458,202</p>
                  <p className="text-sm text-gray-300">Paid out this week across Game Vault rooms</p>
                </div>
                <div className="rounded-full px-4 py-2 bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-[0.15em]">
                  Always on
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <video
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-56 object-cover"
                >
                  <source src="/images/banner/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050914]/70" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Now playing</p>
                    <p className="text-lg font-semibold">Gold Frenzy • Fish Party • Dragon Spin</p>
                  </div>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="bg-black/60 hover:bg-black/70 border border-white/20 rounded-full p-2 text-white transition"
                    aria-label="Toggle mute preview"
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Players live</p>
                  <p className="text-2xl font-semibold text-white">82,416</p>
                  <p className="text-gray-400">across slots and fish rooms</p>
                </div>
                <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Lightning payouts</p>
                  <p className="text-2xl font-semibold text-white">92%</p>
                  <p className="text-gray-400">processed under 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual pathways */}
      <section className="section-padding grid-aurora">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Choose your lane</p>
              <h2 className="text-3xl md:text-4xl font-bold">Players and agents ride the same wave.</h2>
            </div>
            <Link to="/contact" className="btn-secondary">Need help? Talk to support</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Players',
                copy: 'Dive into 60+ titles built for quick-fire action. Zero friction, zero excuses.',
                cta: 'See how to play',
                to: '/players',
                badges: ['Slots & fish rooms', 'Instant credit top-ups', 'Mobile-first UI'],
              },
              {
                title: 'Agents',
                copy: 'Expand your network with verified credits, analytics, and dedicated support.',
                cta: 'Grow with us',
                to: '/agents',
                badges: ['Verified payouts', 'Marketing boost', 'Control dashboard'],
              },
            ].map((lane) => (
              <div key={lane.title} className="glass-panel rounded-3xl p-7 border border-white/10 hover:border-white/20 transition">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-semibold">{lane.title}</h3>
                  <span className="rounded-full px-4 py-2 bg-white/10 text-xs uppercase tracking-[0.2em]">Ready</span>
                </div>
                <p className="text-gray-200 mb-5">{lane.copy}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {lane.badges.map((badge) => (
                    <span key={badge} className="text-xs px-3 py-2 rounded-full bg-white/10 border border-white/10 text-gray-100">
                      {badge}
                    </span>
                  ))}
                </div>
                <Link to={lane.to} className="btn-primary">
                  {lane.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">The vault library</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Prime-time titles that keep the night alive.</h3>
            <p className="text-gray-300 text-lg">
              A curation of our hottest slots and fish games—fast to load, easy to love, impossible to quit.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredGames.map((num) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-2xl glass-panel border border-white/10 hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={`/images/games/${num.toString().padStart(2, '0')}.png`}
                  alt={`Game ${num}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <Link
                    to="/players"
                    className="btn-secondary w-full justify-center"
                  >
                    Play now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/games" className="btn-primary">
              View the full library
            </Link>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="section-padding bg-[#0b1024]/70">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Why we win trust</p>
            <h3 className="text-3xl md:text-4xl font-bold">Safe play, real payouts, zero mystery.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/20 transition">
                <p className={`text-sm uppercase tracking-[0.25em] mb-2 ${signal.color}`}>{signal.label}</p>
                <p className="text-lg text-gray-100">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">Start in minutes</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">From download to first win—fast.</h3>
            <div className="space-y-4">
              {quickSteps.map((step) => (
                <div key={step.number} className="flex gap-4 items-start glass-panel rounded-2xl p-5 border border-white/10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-sm font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                    <p className="text-gray-300 text-sm md:text-base">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-pink-500/10" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Mobile first</p>
              <h4 className="text-3xl font-bold">Designed for the midnight grind.</h4>
              <p className="text-gray-200 text-lg">
                Crisp visuals, neon glow, and a navigation that keeps your thumbs on what matters—spins, shots, and jackpots.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="https://download.gamevault999.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download the app
                </a>
                <Link to="/contact" className="btn-secondary">Get live help</Link>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 text-sm">
                {[
                  { label: 'Fair play certified', value: 'Vegas iGaming Awards 2025' },
                  { label: 'Support', value: 'Live 24/7 via Telegram, WhatsApp, Signal' },
                  { label: 'Platforms', value: 'iOS & Android ready' },
                  { label: 'Top genres', value: 'Slots, fish, tournaments' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-2xl p-3 border border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">{item.label}</p>
                    <p className="text-gray-100 font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding pb-20">
        <div className="container-custom">
          <div className="glass-panel rounded-3xl p-10 md:p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.15),transparent_40%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Let the vault open</p>
              <h3 className="text-3xl md:text-4xl font-bold">Ready to feel the Game Vault rush?</h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Load up, lock in, and start stacking wins. Your next jackpot is one download away.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href="https://download.gamevault999.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download & play
                </a>
                <Link to="/faq" className="btn-secondary">View FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

