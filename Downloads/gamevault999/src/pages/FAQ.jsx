function FAQ() {
  const faqs = [
    {
      question: 'How do I download the Game Vault app?',
      answer: 'You can download the Game Vault app from our official website at download.gamevault999.com. The app is available for both iOS and Android devices.',
    },
    {
      question: 'Is Game Vault safe and secure?',
      answer: 'Yes, Game Vault uses SSL encryption to secure all transactions. We only work with verified agents and provide 24/7 support to ensure your safety.',
    },
    {
      question: 'How do I get credits?',
      answer: 'Credits can be purchased through authorized stores within the Game Vault network. Once topped up, credits appear instantly in your account.',
    },
    {
      question: 'What games are available?',
      answer: 'Game Vault offers a wide selection of games including slots, fish games, and other exciting options. Browse our games section to see the full collection.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact our support team through WhatsApp, Telegram, Signal, or Messenger. Visit our Contact page for all the details.',
    },
  ]

  return (
    <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-3xl mx-auto space-y-4">
          <span className="neon-pill inline-flex justify-center">Support center</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">FAQs for players and agents.</h1>
          <p className="text-lg text-gray-200">Quick answers to the most common questions about Game Vault.</p>
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

