function Contact() {
  const channels = [
    {
      icon: '/images/social/svg-icons/whatsapp-white.svg',
      title: 'WhatsApp',
      contact: '+852 64386769',
      link: 'https://wa.me/+85264386769',
      accent: 'from-emerald-400/40 to-cyan-300/30',
    },
    {
      icon: '/images/social/svg-icons/telegram-white.svg',
      title: 'Telegram',
      contact: '@gvvssupport2',
      link: 'https://t.me/gvvssupport2',
      accent: 'from-sky-400/40 to-blue-500/30',
    },
    {
      icon: '/images/social/svg-icons/signal-white.svg',
      title: 'Signal',
      contact: 'GameVault999',
      link: 'https://signal.me/#eu/JPBLGihdYBnMHy5e_-qVMfkK8xYqWgelHGZIQobHojBKNkHiwQdJ7JbmIo0uTm7p',
      accent: 'from-indigo-400/40 to-blue-500/30',
    },
    {
      icon: '/images/social/svg-icons/messenger-white.svg',
      title: 'Messenger',
      contact: 'GameVault999',
      link: '#',
      accent: 'from-fuchsia-400/40 to-pink-500/30',
    },
  ]

  return (
    <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-4xl mx-auto space-y-6">
          <span className="neon-pill inline-flex justify-center">Contact information</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">GameVault999 Support and Contact Channels</h1>
          <p className="text-lg text-gray-200">
            Information about how to contact GameVault999 support through available messaging platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/+85264386769"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp support
            </a>
            <a
              href="https://t.me/gvvssupport2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Telegram support
            </a>
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
                  <p className="text-gray-200">{channel.contact}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

