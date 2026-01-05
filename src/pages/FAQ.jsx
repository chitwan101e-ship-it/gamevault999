import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

function FAQ() {
  const [riddleAnswer, setRiddleAnswer] = useState('')
  const [riddleFeedback, setRiddleFeedback] = useState('')
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0)
  const [showHint, setShowHint] = useState(false)

  const faqs = [
    {
      question: 'How do I download the GameVault999 app?',
      answer: (
        <>
          The GameVault999 mobile app can be downloaded from the platform's official download channels. The app is available for iOS and Android devices. For detailed instructions, see our <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">download guide</Link> or <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 underline">contact support</Link> for assistance.
        </>
      ),
    },
    {
      question: 'Is GameVault999 safe to use?',
      answer: 'GameVault999 implements security measures for user accounts and transactions. Users should review the platform\'s security policies and terms of service. This is an independent informational guide and not the official platform.',
    },
    {
      question: 'How does the credit system work?',
      answer: (
        <>
          GameVault999 operates using a credit-based system. Users obtain credits through the platform's designated methods, which may vary. Credits are used to participate in <Link to="/games" className="text-cyan-400 hover:text-cyan-300 underline">games and activities</Link> within the platform. Learn more about <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">how the platform operates</Link>.
        </>
      ),
    },
    {
      question: 'What types of games are available?',
      answer: (
        <>
          The platform offers various game types including slot-style games, fish shooting games, and table-style games. <Link to="/games" className="text-cyan-400 hover:text-cyan-300 underline">Browse our game library</Link> to see available titles and categories. Game availability may vary and users can browse available games through the app interface.
        </>
      ),
    },
    {
      question: 'How do I contact GameVault999 support?',
      answer: (
        <>
          Support is available through messaging platforms such as WhatsApp, Telegram, Signal, and Messenger. <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Find contact information</Link> for all support channels on our Contact page.
        </>
      ),
    },
  ]

  const riddles = [
    {
      question: "I'm a mobile platform with three nines in my name, offering slots, fish games, and table fun. I'm designed for USA users and use a credit system. What am I?",
      answer: 'gamevault999',
      hint: 'Check the title of this website!',
      explanation: 'GameVault999 is the mobile gaming platform this guide is all about!'
    },
    {
      question: "I'm not cash, but I'm used to play. I'm obtained through designated methods and let you participate in games. What am I?",
      answer: 'credits',
      hint: 'Think about how the platform operates...',
      explanation: 'Credits are the currency used on GameVault999 to participate in games!'
    },
    {
      question: "I'm a game type where you shoot underwater creatures. I'm one of three main game categories on this platform. What am I?",
      answer: 'fish games',
      hint: 'One of the top features involves aquatic creatures...',
      explanation: 'Fish shooting games are one of the main game types available on GameVault999!'
    },
    {
      question: "I'm available on two mobile operating systems. I'm where you download the GameVault999 app. What am I?",
      answer: 'ios and android',
      hint: 'Think about mobile devices...',
      explanation: 'GameVault999 is available on both iOS and Android devices!'
    },
    {
      question: "I'm a support channel mentioned on this site. I'm a messaging app with a blue bird logo. What am I?",
      answer: 'telegram',
      hint: 'Check the footer for social links...',
      explanation: 'Telegram is one of the support channels available for GameVault999 users!'
    }
  ]

  const checkAnswer = () => {
    const currentRiddle = riddles[currentRiddleIndex]
    const userAnswer = riddleAnswer.toLowerCase().trim()
    const correctAnswers = currentRiddle.answer.split(' and ').map(a => a.trim().toLowerCase())
    
    if (correctAnswers.some(answer => userAnswer.includes(answer) || answer.includes(userAnswer))) {
      setRiddleFeedback('correct')
    } else {
      setRiddleFeedback('incorrect')
    }
    setShowHint(false)
  }

  const nextRiddle = () => {
    setCurrentRiddleIndex((prev) => (prev + 1) % riddles.length)
    setRiddleAnswer('')
    setRiddleFeedback('')
    setShowHint(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer()
    }
  }

  return (
    <>
      <Helmet>
        <title>GameVault999 FAQ: Common Questions Answered | USA Guide</title>
        <meta name="title" content="GameVault999 FAQ: Common Questions Answered | USA Guide" />
        <meta name="description" content="Frequently asked questions about GameVault999: how to download, safety, credit system, games, and support. Get answers to common questions about the platform." />
        <link rel="canonical" href="https://www.gamevault99.xyz/faq" />
        <meta property="og:title" content="GameVault999 FAQ: Common Questions Answered" />
        <meta property="og:description" content="Frequently asked questions about GameVault999: download, safety, credit system, games, and support information." />
        <meta property="og:url" content="https://www.gamevault99.xyz/faq" />
        <meta property="og:image" content="https://www.gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content="GameVault999 FAQ: Common Questions Answered" />
        <meta name="twitter:description" content="Frequently asked questions about GameVault999 platform, download, and support." />
        <meta name="twitter:image" content="https://www.gamevault99.xyz/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof faq.answer === 'string' ? faq.answer : faq.question
              }
            }))
          }, null, 2)}
        </script>
      </Helmet>
      <div className="relative">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-3xl mx-auto space-y-4">
          <span className="neon-pill inline-flex justify-center">Frequently asked questions</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">GameVault999 FAQ: Common Questions Answered</h1>
          <p className="text-lg text-gray-200">Answers to frequently asked questions about the GameVault999 platform. Need more information? Learn about <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">the platform features</Link>, browse <Link to="/games" className="text-cyan-400 hover:text-cyan-300 underline">available games</Link>, or <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 underline">contact support</Link>.</p>
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

      {/* Interactive Riddle Section */}
      <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10" />
            <div className="relative space-y-6">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 flex items-center justify-center shadow-lg shadow-pink-500/20">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Test Your Knowledge
                  </h2>
                </div>
                <p className="text-gray-300 text-sm">Can you solve this riddle about GameVault999?</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <span>Riddle {currentRiddleIndex + 1} of {riddles.length}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-lg md:text-xl text-white leading-relaxed text-center">
                    {riddles[currentRiddleIndex].question}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={riddleAnswer}
                      onChange={(e) => {
                        setRiddleAnswer(e.target.value)
                        setRiddleFeedback('')
                      }}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your answer here..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition"
                      disabled={riddleFeedback === 'correct'}
                    />
                    <button
                      onClick={checkAnswer}
                      disabled={!riddleAnswer.trim() || riddleFeedback === 'correct'}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold hover:from-pink-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      Check
                    </button>
                  </div>

                  {showHint && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                      <p className="text-amber-300 text-sm">
                        <strong>Hint:</strong> {riddles[currentRiddleIndex].hint}
                      </p>
                    </div>
                  )}

                  {riddleFeedback === 'correct' && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-green-300 font-semibold">Correct!</p>
                      </div>
                      <p className="text-green-200 text-sm">{riddles[currentRiddleIndex].explanation}</p>
                      <button
                        onClick={nextRiddle}
                        className="mt-3 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold hover:bg-green-500/30 transition"
                      >
                        Next Riddle →
                      </button>
                    </div>
                  )}

                  {riddleFeedback === 'incorrect' && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-red-300 font-semibold">Not quite right. Try again!</p>
                        </div>
                        {!showHint && (
                          <button
                            onClick={() => setShowHint(true)}
                            className="text-xs text-amber-300 hover:text-amber-200 underline"
                          >
                            Need a hint?
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default FAQ

