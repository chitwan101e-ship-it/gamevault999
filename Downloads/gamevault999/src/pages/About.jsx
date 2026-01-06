import { Link } from 'react-router-dom'

const highlights = [
  { label: '18M+ players', detail: 'Spinning, shooting, and winning across the globe' },
  { label: '60+ titles', detail: 'Slots, fish rooms, jackpots, and tourneys' },
  { label: 'SSL-first', detail: 'Bank-grade security and verified agents' },
]

const pillars = [
  { icon: '💎', title: 'Built for late nights', copy: 'Fast loads, bold visuals, and controls that stay under your thumbs.' },
  { icon: '🛰️', title: 'Always-on infra', copy: 'Redundant servers tuned for zero downtime at peak hours.' },
  { icon: '🛡️', title: 'Fair play certified', copy: 'Audited RNG and payout transparency recognized by Vegas iGaming Awards 2025.' },
  { icon: '🤝', title: 'Human support', copy: 'Real people on Telegram, WhatsApp, and Signal—24/7.' },
  { icon: '📈', title: 'Agent horsepower', copy: 'Analytics dashboards, credit controls, and marketing boosts for your network.' },
  { icon: '🚀', title: 'Ship new heat fast', copy: 'Fresh drops weekly to keep your room buzzing.' },
]

function About() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.18),transparent_35%)]" />
        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="neon-pill">About Game Vault</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We’re the crew keeping your casino multiverse live, loud, and secure.
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Nearly a decade of obsessing over silky spins, instant credits, and payouts that land on time. Game Vault is the late-night destination trusted by millions who want excitement without the compromise.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://download.gamevault999.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download the app
              </a>
              <Link to="/contact" className="btn-secondary">Talk to us</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-4 border border-white/10">
                  <p className="text-xl font-semibold">{item.label}</p>
                  <p className="text-gray-300 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10" />
            <div className="relative space-y-5">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Game Vault DNA</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: 'Peak uptime', value: '99.96%' },
                  { label: 'Average payout speed', value: '5 min' },
                  { label: 'Live markets', value: '23 countries' },
                  { label: 'Support response', value: '< 2 min' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Vegas iGaming Awards</p>
                  <p className="text-lg font-semibold text-white">“Best Mobile Casino App” • 2025</p>
                  <p className="text-gray-300 text-sm">Recognized for fairness, support, and speed.</p>
                </div>
                <span className="rounded-full px-4 py-2 bg-white/10 text-xs uppercase tracking-[0.2em] border border-white/15">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding grid-aurora">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Why players stay</p>
            <h2 className="text-3xl md:text-4xl font-bold">We cut the fluff and double down on the essentials.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item) => (
              <div key={item.title} className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/20 transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-8">
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-pink-500/10" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Player promise</p>
              <h3 className="text-3xl font-bold">Your wins, your pace.</h3>
              <p className="text-gray-200">
                Transparent RTP, secure credit flow, and interfaces tuned for mobile speed. You focus on the rush—we handle the rails.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Instant credits', 'Lag-free rooms', 'Fair play audits', 'Live 24/7 support'].map((item) => (
                  <div key={item} className="bg-white/5 rounded-2xl px-4 py-3 border border-white/10">{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-amber-400/10" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Agent promise</p>
              <h3 className="text-3xl font-bold">Grow with verified backing.</h3>
              <p className="text-gray-200">
                We give you analytics dashboards, marketing boosts, and trusted credit rails so your network scales without friction.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Dedicated agent desk', 'Weekly promos', 'Instant payouts', 'Control over limits'].map((item) => (
                  <div key={item} className="bg-white/5 rounded-2xl px-4 py-3 border border-white/10">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-20">
        <div className="container-custom">
          <div className="glass-panel rounded-3xl p-10 md:p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.15),transparent_40%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Our story keeps going</p>
              <h3 className="text-3xl md:text-4xl font-bold">Come write the next win with us.</h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Whether you’re spinning your first reel or scaling an agent network, Game Vault is the neon-lit arena built to keep you ahead.
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
                <Link to="/agents" className="btn-secondary">See agent perks</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

