import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function Contact() {
  const channels = [
    {
      icon: '/images/social/svg-icons/whatsapp-white.svg',
      title: 'WhatsApp',
      link: '#',
      accent: 'from-emerald-400/40 to-cyan-300/30',
    },
    {
      icon: '/images/social/svg-icons/telegram-white.svg',
      title: 'Telegram',
      link: '#',
      accent: 'from-sky-400/40 to-blue-500/30',
    },
    {
      icon: '/images/social/svg-icons/signal-white.svg',
      title: 'Signal',
      link: 'https://signal.me/#eu/H4dqi2VC7E_jEWZQSmddKK1oaARHUxxBPHZ3A_ygWoHK7Opj9L9Ktr3xIKwIxCvd',
      accent: 'from-indigo-400/40 to-blue-500/30',
    },
    {
      icon: '/images/social/svg-icons/messenger-white.svg',
      title: 'Facebook',
      link: 'https://www.facebook.com/people/Happy-Hour-Wheel-of-Fortune/61557285823755',
      accent: 'from-fuchsia-400/40 to-pink-500/30',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Contact GameVault999: Support Channels & Help | USA Guide</title>
        <meta name="title" content="Contact GameVault999: Support Channels & Help | USA Guide" />
        <meta name="description" content="Contact GameVault999 support through WhatsApp, Telegram, Signal, and Facebook. Find support channels and contact information for USA users." />
        <link rel="canonical" href="https://www.gamevault99.xyz/contact" />
        <meta property="og:title" content="Contact GameVault999: Support Channels & Help" />
        <meta property="og:description" content="Contact GameVault999 support through WhatsApp, Telegram, Signal, and Facebook messaging platforms." />
        <meta property="og:url" content="https://www.gamevault99.xyz/contact" />
        <meta property="og:image" content="https://www.gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content="Contact GameVault999: Support Channels & Help" />
        <meta name="twitter:description" content="Contact GameVault999 support through messaging platforms like WhatsApp, Telegram, and Signal." />
        <meta name="twitter:image" content="https://www.gamevault99.xyz/og-image.png" />
      </Helmet>
      <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-4xl mx-auto space-y-6">
          <span className="neon-pill inline-flex justify-center">Contact information</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">GameVault999 Support and Contact Channels</h1>
          <p className="text-lg text-gray-200">
            Information about how to contact GameVault999 support through available messaging platforms. For common questions, check our <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 underline">FAQ page</Link>, or learn more about <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">the platform</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="section-padding grid-aurora">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/20 transition block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.accent}`} />
                <div className="relative space-y-3 text-center">
                  <div className="flex justify-center">
                    <img src={channel.icon} alt={channel.title} className="w-12 h-12" />
                  </div>
                  <h6 className="text-xl font-semibold text-white">{channel.title}</h6>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contact

