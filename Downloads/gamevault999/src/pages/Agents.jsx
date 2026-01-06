function Agents() {
  const steps = [
    { number: '01', title: 'Verify & onboard', copy: 'Get vetted and set up your secure vault credentials.' },
    { number: '02', title: 'Load credits', copy: 'Access your credit rails and limits instantly.' },
    { number: '03', title: 'Activate stores', copy: 'Open rooms, invite players, and market with our creative kits.' },
    { number: '04', title: 'Track & grow', copy: 'Real-time analytics on performance, payouts, and retention.' },
  ]

  const perks = [
    { title: 'Verified payout rails', copy: 'Instant transfers, SSL protection, and transparent logs.' },
    { title: 'Marketing boost', copy: 'Ready-made creative packs to spin up promos fast.' },
    { title: 'Analytics cockpit', copy: 'Live dashboards for revenue, player velocity, and churn.' },
    { title: 'Tiered rewards', copy: 'Hit milestones, unlock better margins and bonuses.' },
    { title: 'Dedicated desk', copy: 'Agent-only support channels with <2 minute response time.' },
    { title: 'Compliance friendly', copy: 'We keep standards tight so you can focus on scale.' },
  ]

  return (
    <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="neon-pill">Agent HQ</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Grow your network with verified Game Vault rails.</h1>
            <p className="text-lg text-gray-200">
              Credits, payouts, analytics, and always-on support. We give you the tools, you bring the players.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/+85264386769"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Talk to onboarding
              </a>
              <a
                href="https://download.gamevault999.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download app
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Agents live', value: '8,200+' },
                { label: 'Avg. setup time', value: '15 mins' },
                { label: 'Support', value: '24/7 human desk' },
              ].map((stat) => (
                <div key={stat.label} className="glass-panel rounded-2xl p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Your flow</p>
              <div className="space-y-3">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4 items-start bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding grid-aurora">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Agent advantages</p>
            <h2 className="text-3xl md:text-4xl font-bold">Everything you need to scale, built-in.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/20 transition">
                <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                <p className="text-gray-300">{perk.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pb-20">
        <div className="container-custom">
          <div className="glass-panel rounded-3xl p-10 md:p-12 border border-white/10 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.15),transparent_40%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Join the network</p>
              <h3 className="text-3xl md:text-4xl font-bold">Ready to become a Game Vault agent?</h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Verified rails, human support, and marketing muscle—so you can focus on bringing players to the hottest rooms.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/+85264386769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Start onboarding
                </a>
                <a
                  href="https://t.me/gvvssupport2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Chat on Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agents

