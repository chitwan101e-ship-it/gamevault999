import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const gameImages = Array.from({ length: 24 }, (_, i) => i + 1)

const categories = [
  { label: 'Slots', color: 'from-pink-500/60 to-amber-400/60', copy: 'Slot-style games with various themes and gameplay mechanics.' },
  { label: 'Fish games', color: 'from-cyan-400/60 to-blue-500/60', copy: 'Arcade-style shooting games with interactive elements.' },
  { label: 'Jackpot features', color: 'from-amber-400/70 to-rose-500/70', copy: 'Some games include jackpot-style features and mechanics.' },
  { label: 'Tournaments', color: 'from-purple-500/60 to-indigo-500/60', copy: 'Tournament-style events and competitive gameplay options.' },
]

function Games() {
  return (
    <>
      <Helmet>
        <title>GameVault999 Games: Available Titles & Categories | USA Guide</title>
        <meta name="title" content="GameVault999 Games: Available Titles & Categories | USA Guide" />
        <meta name="description" content="Explore GameVault999 games including slots, fish games, and table-style games. Browse available titles and game categories for mobile gaming." />
        <link rel="canonical" href="https://www.gamevault99.xyz/games" />
        <meta property="og:title" content="GameVault999 Games: Available Titles & Categories" />
        <meta property="og:description" content="Explore GameVault999 games including slots, fish games, and table-style games available on the mobile platform." />
        <meta property="og:url" content="https://www.gamevault99.xyz/games" />
        <meta property="og:image" content="https://www.gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content="GameVault999 Games: Available Titles & Categories" />
        <meta name="twitter:description" content="Explore GameVault999 games including slots, fish games, and table-style games." />
        <meta name="twitter:image" content="https://www.gamevault99.xyz/og-image.png" />
      </Helmet>
      <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="neon-pill">Game Library</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              GameVault999 Games: Available Titles and Categories
            </h1>
            <p className="text-lg text-gray-200">
              The platform offers various game types including slots, fish games, and table-style games designed for mobile play. Learn more about <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">the platform features</Link> and <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 underline">how to get started</Link>.
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
              <Link to="/about" className="btn-secondary">Learn more</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Game types', value: 'Multiple' },
                { label: 'Platform', value: 'Mobile app' },
                { label: 'Availability', value: 'iOS & Android' },
              ].map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-300 mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10" />
            <div className="relative space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Game preview</p>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/games/01.png" alt="Featured Game" className="w-full h-56 object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { label: 'Game type', value: 'Various' },
                  { label: 'Platform', value: 'Mobile app' },
                  { label: 'Categories', value: 'Slots • Fish • Tables' },
                  { label: 'Devices', value: 'iOS & Android' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-2 border border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-0.5">{stat.label}</p>
                    <p className="text-gray-100 font-semibold text-xs">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding grid-aurora">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Game categories</p>
            <h2 className="text-3xl md:text-4xl font-bold">Different game types available on the platform.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.label} className="relative overflow-hidden rounded-3xl p-6 glass-panel border border-white/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
                <div className="relative space-y-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/80">{cat.label}</p>
                  <p className="text-gray-100 text-sm">{cat.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Available games</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">GameVault999 game library overview.</h3>
            <p className="text-gray-300 text-lg">
              The platform offers various games across different categories for mobile entertainment.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {gameImages.map((num) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-2xl glass-panel border border-white/10 hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={`/images/games/${num.toString().padStart(2, '0')}.png`}
                  alt={`GameVault999 game ${num} - Available on mobile platform`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <a
                    href="https://download.gamevault999.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center"
                  >
                    Play now
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://download.gamevault999.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download & start
            </a>
          </div>
        </div>
      </section>

      {/* Assurance */}
      <section className="section-padding bg-[#0b1024]/70">
        <div className="container-custom grid lg:grid-cols-3 gap-6">
          {[
            { title: 'Security features', copy: 'Platform includes security measures for user accounts and transactions.' },
            { title: 'Game availability', copy: 'Various game types are accessible through the mobile app interface.' },
            { title: 'Mobile platform', copy: 'Designed for mobile devices with touch-optimized controls and interface.' },
          ].map((item) => (
            <div key={item.title} className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/20 transition">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">{item.title}</p>
              <p className="text-gray-200">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default Games

