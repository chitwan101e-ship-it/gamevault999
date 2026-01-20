import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const highlights = [
  { label: 'Platform users', detail: 'Mobile gaming platform with various game types available' },
  { label: 'Game variety', detail: 'Slots, fish games, table games, and tournament-style features' },
  { label: 'Security features', detail: 'Platform includes security measures and user verification' },
]

const pillars = [
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-first design', 
    copy: 'Platform designed for mobile devices with responsive interface and touch controls.',
    gradient: 'from-cyan-400 to-blue-600'
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    title: 'Platform availability', 
    copy: 'Mobile app accessible on iOS and Android devices for users in supported regions.',
    gradient: 'from-purple-400 to-indigo-600'
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
    title: 'Security measures', 
    copy: 'Platform implements security protocols and user verification processes.',
    gradient: 'from-blue-400 to-cyan-600'
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    title: 'Support channels', 
    copy: 'Customer support available through messaging platforms like Telegram, WhatsApp, and Signal.',
    gradient: 'from-amber-400 to-yellow-600'
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
    title: 'Platform features', 
    copy: 'Includes account management tools, game categories, and user interface options.',
    gradient: 'from-emerald-400 to-green-600'
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2.81 14.12L5.64 11.3l-1.42-1.42L1.39 12.7c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.42-1.41zM22.61 11.3l-2.83-2.83c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.42 1.42-2.83 2.83 1.42 1.42c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.42-1.41zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    ),
    title: 'Game updates', 
    copy: 'Platform may add new games and features over time as part of regular updates.',
    gradient: 'from-pink-400 to-rose-600'
  },
]

function About() {
  return (
    <>
      <Helmet>
        <title>About GameVault999: Platform Overview & Features | USA Guide</title>
        <meta name="title" content="About GameVault999: Platform Overview & Features | USA Guide" />
        <meta name="description" content="Learn about the GameVault999 mobile gaming platform, its features, game types, and how it works. Independent educational guide for USA users." />
        <link rel="canonical" href="https://gamevault99.xyz/about" />
        <meta property="og:title" content="About GameVault999: Platform Overview & Features" />
        <meta property="og:description" content="Learn about the GameVault999 mobile gaming platform, its features, game types, and how it works for USA users." />
        <meta property="og:url" content="https://gamevault99.xyz/about" />
        <meta property="og:image" content="https://gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content="About GameVault999: Platform Overview & Features" />
        <meta name="twitter:description" content="Learn about the GameVault999 mobile gaming platform, its features, and how it works." />
        <meta name="twitter:image" content="https://gamevault99.xyz/og-image.png" />
      </Helmet>
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
              This independent guide provides information about GameVault999, a mobile gaming platform that offers various casino-style entertainment experiences. Learn about the platform's features, <Link to="/games" className="text-cyan-400 hover:text-cyan-300 underline">game types</Link>, and how it operates. For common questions, visit our <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 underline">FAQ page</Link>.
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
            {pillars.map((item, index) => (
              <div 
                key={item.title} 
                className="group relative glass-panel rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon Container - Square with rounded corners */}
                <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-50 blur-md -z-10 group-hover:opacity-75 transition-opacity duration-300`} />
                </div>
                
                {/* Content */}
                <div className="relative space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.copy}</p>
                </div>
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
    </>
  )
}

export default About
