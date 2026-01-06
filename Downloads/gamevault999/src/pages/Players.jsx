const steps = [
  { number: '01', title: 'Download the app', copy: 'Grab Game Vault on iOS or Android—built for mobile play.' },
  { number: '02', title: 'Create your vault', copy: 'Set up your profile, lock in your pin, and choose your room.' },
  { number: '03', title: 'Top up with credits', copy: 'Use verified agents for instant, SSL-wrapped credits.' },
  { number: '04', title: 'Pick a room', copy: 'Slots, fish rooms, jackpots, and tournaments—jump in fast.' },
  { number: '05', title: 'Spin, shoot, win', copy: 'Stack wins and redeem according to store policies.' },
]

const assurances = [
  { label: 'SSL everywhere', copy: 'Bank-grade encryption around every credit and payout.' },
  { label: 'Fair play certified', copy: 'RNG audited and recognized by Vegas iGaming Awards 2025.' },
  { label: 'Live humans', copy: 'Support on Telegram, WhatsApp, and Signal around the clock.' },
]

function Players() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="neon-pill">For players</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">The fastest path from download to first win.</h1>
            <p className="text-lg text-gray-200">
              Secure credits, blazing load times, and games that keep the adrenaline high. Game Vault is your neon-night casino—always open.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://download.gamevault999.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download & play
              </a>
              <a
                href="https://t.me/gvvssupport2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get live help
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 text-sm">
              {[
                { label: 'Players live', value: '82,416 now' },
                { label: 'Avg payout speed', value: '5 minutes' },
                { label: 'Game modes', value: 'Slots • Fish • Tournaments' },
              ].map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-4 border border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">{item.label}</p>
                  <p className="text-gray-100 font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">How it works</p>
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

      {/* Assurances */}
      <section className="section-padding grid-aurora">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Safe play, zero mystery</p>
            <h2 className="text-3xl md:text-4xl font-bold">We sweat the rails so you can chase the rush.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assurances.map((item) => (
              <div key={item.label} className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/20 transition">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-300 mb-2">{item.label}</p>
                <p className="text-gray-200">{item.copy}</p>
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
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Ready to roll?</p>
              <h3 className="text-3xl md:text-4xl font-bold">Your next jackpot is one download away.</h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Load up credits, pick your room, and stay for the neon rush. We’ll keep the rails smooth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://download.gamevault999.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download now
                </a>
                <a
                  href="https://wa.me/+85264386769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Players

