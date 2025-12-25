function FAQ() {
  const faqs = [
    {
      question: 'How do I download the GameVault999 app?',
      answer: 'The GameVault999 mobile app can be downloaded from the platform\'s official download channels. The app is available for iOS and Android devices. Visit the download page for step-by-step instructions.',
    },
    {
      question: 'Is GameVault999 safe to use?',
      answer: 'GameVault999 implements security measures for user accounts and transactions. Users should review the platform\'s security policies and terms of service. This is an independent informational guide and not the official platform.',
    },
    {
      question: 'How does the credit system work?',
      answer: 'GameVault999 operates using a credit-based system. Users obtain credits through the platform\'s designated methods, which may vary. Credits are used to participate in games and activities within the platform.',
    },
    {
      question: 'What types of games are available?',
      answer: 'The platform offers various game types including slot-style games, fish shooting games, and table-style games. Game availability may vary and users can browse available games through the app interface.',
    },
    {
      question: 'How do I contact GameVault999 support?',
      answer: 'Support is available through messaging platforms such as WhatsApp, Telegram, Signal, and Messenger. Contact information can be found on the platform\'s official channels or our Contact page.',
    },
  ]

  return (
    <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-3xl mx-auto space-y-4">
          <span className="neon-pill inline-flex justify-center">Frequently asked questions</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">GameVault999 FAQ: Common Questions Answered</h1>
          <p className="text-lg text-gray-200">Answers to frequently asked questions about the GameVault999 platform.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding grid-aurora">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

