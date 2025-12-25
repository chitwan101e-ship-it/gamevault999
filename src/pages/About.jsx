import { Link } from 'react-router-dom'

const highlights = [
  { label: 'Platform users', detail: 'Mobile gaming platform with various game types available' },
  { label: 'Game variety', detail: 'Slots, fish games, table games, and tournament-style features' },
  { label: 'Security features', detail: 'Platform includes security measures and user verification' },
]

const pillars = [
  { icon: '💎', title: 'Mobile-first design', copy: 'Platform designed for mobile devices with responsive interface and touch controls.' },
  { icon: '🛰️', title: 'Platform availability', copy: 'Mobile app accessible on iOS and Android devices for users in supported regions.' },
  { icon: '🛡️', title: 'Security measures', copy: 'Platform implements security protocols and user verification processes.' },
  { icon: '🤝', title: 'Support channels', copy: 'Customer support available through messaging platforms like Telegram, WhatsApp, and Signal.' },
  { icon: '📈', title: 'Platform features', copy: 'Includes account management tools, game categories, and user interface options.' },
  { icon: '🚀', title: 'Game updates', copy: 'Platform may add new games and features over time as part of regular updates.' },
]

function About() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.18),transparent_35%)]" />
        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="neon-pill">About GameVault999</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Understanding the GameVault999 Platform
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              This independent guide provides information about GameVault999, a mobile gaming platform that offers various casino-style entertainment experiences. Learn about the platform's features, game types, and how it operates.
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
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Platform Overview</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: 'Platform type', value: 'Mobile app' },
                  { label: 'Available on', value: 'iOS & Android' },
                  { label: 'Game categories', value: 'Multiple types' },
                  { label: 'Support available', value: 'Via messaging' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Platform Information</p>
                  <p className="text-lg font-semibold text-white">Mobile Gaming Platform</p>
                  <p className="text-gray-300 text-sm">Educational resource about GameVault999 features and operation.</p>
                </div>
                <span className="rounded-full px-4 py-2 bg-white/10 text-xs uppercase tracking-[0.2em] border border-white/15">Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding grid-aurora">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Platform features</p>
            <h2 className="text-3xl md:text-4xl font-bold">Key aspects of the GameVault999 platform.</h2>
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
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">For users</p>
              <h3 className="text-3xl font-bold">Platform features and access.</h3>
              <p className="text-gray-200">
                The platform offers various game types, account management features, and mobile-optimized interface. Users can access games through the mobile app after account setup.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Credit system', 'Game categories', 'Account tools', 'Support channels'].map((item) => (
                  <div key={item} className="bg-white/5 rounded-2xl px-4 py-3 border border-white/10">{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-amber-400/10" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Platform structure</p>
              <h3 className="text-3xl font-bold">How the platform operates.</h3>
              <p className="text-gray-200">
                GameVault999 uses a credit-based system where users obtain credits through designated methods. The platform includes various game rooms and account management features.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Credit system', 'Game access', 'Account features', 'Platform navigation'].map((item) => (
                  <div key={item} className="bg-white/5 rounded-2xl px-4 py-3 border border-white/10">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-12">
        <div className="container-custom">
          <div className="glass-panel rounded-3xl p-10 md:p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.15),transparent_40%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Learn more</p>
              <h3 className="text-3xl md:text-4xl font-bold">Explore our GameVault999 guides.</h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                This independent guide provides educational information about GameVault999, including how to download the app, create an account, and understand the platform's features.
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
                <Link to="/contact" className="btn-secondary">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

