import { Link } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/images/banner/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#050914]/90 via-[#0b1a3a]/80 to-[#050914]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,127,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,224,255,0.18),transparent_38%),radial-gradient(circle_at_70%_65%,rgba(255,179,71,0.12),transparent_45%)]" />
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 border border-white/20 text-white p-3 rounded-full transition-colors"
          aria-label="Toggle mute"
        >
          {isMuted ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm uppercase tracking-wider text-gray-200">
                Independent Guide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                GameVault999 USA: How the Platform Works
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                An independent, educational guide explaining GameVault999, available games, and how U.S. players get started.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about" className="btn-primary">
                  Learn How It Works
                </Link>
                <Link to="/games" className="btn-secondary">
                  Download Guide
                </Link>
              </div>
            </div>

            {/* Video Preview Card */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-300">Platform Preview</p>
                    <p className="text-2xl md:text-3xl font-bold text-amber-200">GameVault999</p>
                    <p className="text-sm text-gray-300">Mobile gaming platform</p>
                  </div>
                  <div className="rounded-full px-4 py-2 bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-[0.15em]">
                    USA Guide
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <video
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-56 object-cover"
                  >
                    <source src="/images/banner/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050914]/70" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Platform Features</p>
                    <p className="text-sm font-semibold">Slots • Fish Games • Table Games</p>
                    </div>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="bg-black/60 hover:bg-black/70 border border-white/20 rounded-full p-2 text-white transition"
                      aria-label="Toggle mute preview"
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.617-3.793a1 1 0 011.383.07z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Platform Type</p>
                    <p className="text-xl font-semibold text-white">Mobile App</p>
                    <p className="text-gray-400">iOS & Android</p>
                  </div>
                  <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Game Types</p>
                    <p className="text-xl font-semibold text-white">Multiple</p>
                    <p className="text-gray-400">Slots, Fish, Tables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GameVault999 */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What is GameVault999?</h2>
          </div>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              GameVault999 is a mobile gaming platform that offers casino-style entertainment experiences. The platform provides access to various game types including slot-style games, fish shooting games, and table-style games through a mobile application.
            </p>
            <p>
              This website is an independent informational resource and is not affiliated with, owned by, or operated by GameVault999. We provide educational content to help users understand the platform, its features, and how to access it. Our goal is to offer transparent, helpful information for those interested in learning more about GameVault999.
            </p>
            <p>
              The platform operates through a mobile app that users can download and install on their devices. It uses a credit-based system where users can participate in various gaming activities. The platform is designed primarily for mobile use, making it accessible to users who prefer gaming on smartphones and tablets.
            </p>
          </div>
        </div>
      </section>

      {/* How GameVault999 Works */}
      <section className="section-padding bg-[#0b1024]/70">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">How GameVault999 Works</h2>
          </div>
          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📥</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Step 1: Download the Application</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Users begin by downloading the GameVault999 mobile application. The app is typically available through the platform's official download channels. Installation follows standard mobile app installation procedures for iOS and Android devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Step 2: Account Creation</h3>
                  <p className="text-gray-200 leading-relaxed">
                    After installation, users create an account by providing basic registration information. This typically includes creating a username, setting up login credentials, and completing any required verification steps.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💳</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Step 3: Understanding the Credit System</h3>
                  <p className="text-gray-200 leading-relaxed">
                    GameVault999 operates using a credit-based system. Users obtain credits through the platform's designated methods, which may vary. Credits are used to participate in games and activities within the platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎮</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Step 4: Accessing Games</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Once set up, users can browse and access various games available on the platform. The interface typically displays different game categories and allows users to select games they wish to play.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧭</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Step 5: Platform Navigation</h3>
                  <p className="text-gray-200 leading-relaxed">
                    The platform includes various features such as game rooms, user profiles, and account management tools. Users navigate through these features using the app's interface, which is designed for mobile use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Games Available */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Types of Games Available</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-xl">🎰</span>
                </div>
                <h3 className="text-xl font-semibold">Slot-Style Games</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                The platform offers various slot-style games with different themes, graphics, and gameplay mechanics. These games typically feature spinning reels and various symbols, similar to traditional slot machine experiences adapted for mobile play.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-xl">🐟</span>
                </div>
                <h3 className="text-xl font-semibold">Fish and Arcade Games</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Fish shooting games are a popular category on the platform. These games involve aiming and shooting at targets, often with colorful graphics and interactive elements. They provide an arcade-style gaming experience.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <span className="text-xl">🃏</span>
                </div>
                <h3 className="text-xl font-semibold">Table-Style Games</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                The platform may include table-style games that simulate traditional casino table game experiences. These games are adapted for mobile play and offer various gameplay options for users who enjoy this style of entertainment.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                  <span className="text-xl">🎁</span>
                </div>
                <h3 className="text-xl font-semibold">Jackpot Features</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Some games on the platform include jackpot-style features. These features may display progressive amounts or special game mechanics. The specific mechanics and features vary by individual game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Platform Is For */}
      <section className="section-padding bg-[#0b1024]/70">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Who This Platform Is For</h2>
          </div>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              GameVault999 is designed for users who enjoy mobile gaming entertainment. The platform may appeal to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎯</span>
                  <strong>Entertainment-focused users:</strong>
                </div>
                <p className="text-sm ml-10">Individuals looking for mobile gaming experiences for entertainment purposes.</p>
              </div>
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📱</span>
                  <strong>Mobile-first players:</strong>
                </div>
                <p className="text-sm ml-10">Users who prefer gaming on smartphones and tablets rather than desktop computers.</p>
              </div>
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🇺🇸</span>
                  <strong>USA audience:</strong>
                </div>
                <p className="text-sm ml-10">The platform is accessible to users in the United States, though users should verify local regulations and platform availability in their specific location.</p>
              </div>
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎲</span>
                  <strong>Casino-style game enthusiasts:</strong>
                </div>
                <p className="text-sm ml-10">Users interested in casino-style gaming experiences adapted for mobile devices.</p>
              </div>
            </div>
            <p className="pt-4">
              It's important to note that users should only engage with gaming platforms if they are of legal age in their jurisdiction and understand that gaming activities are for entertainment purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Resources */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Helpful Resources</h2>
          </div>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Explore our comprehensive guides to learn more about GameVault999:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/about" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition block group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition">
                  <span className="text-xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold">GameVault999 Review</h3>
              </div>
              <p className="text-gray-300 text-sm">
                An in-depth look at the platform's features, interface, and user experience.
              </p>
            </Link>
            <Link to="/games" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition block group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition">
                  <span className="text-xl">⬇️</span>
                </div>
                <h3 className="text-xl font-semibold">How to Download GameVault999 (USA)</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Step-by-step instructions for downloading and installing the app in the United States.
              </p>
            </Link>
            <Link to="/contact" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition block group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition">
                  <span className="text-xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold">GameVault999 Login Guide</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Information about creating an account and accessing the platform.
              </p>
            </Link>
            <Link to="/faq" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition block group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold">Is GameVault999 Legal in the USA?</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Important information about legal considerations and regulations for USA users.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Responsible Gaming Notice */}
      <section className="section-padding bg-[#0b1024]/70">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Responsible Gaming Notice</h2>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4 text-gray-200 leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-2xl flex-shrink-0">🎯</span>
              <div>
                <p className="font-semibold mb-1">Entertainment Only:</p>
                <p>All gaming activities on GameVault999 and similar platforms should be viewed as entertainment activities only. There are no guarantees of outcomes, and users should never spend more than they can afford to lose.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl flex-shrink-0">⏰</span>
              <div>
                <p className="font-semibold mb-1">Responsible Play:</p>
                <p>We encourage all users to practice responsible gaming habits. This includes setting time limits, budget limits, and recognizing when to take breaks. Gaming should never interfere with daily responsibilities, relationships, or financial obligations.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl flex-shrink-0">⚖️</span>
              <div>
                <p className="font-semibold mb-1">Legal Awareness:</p>
                <p>Users in the United States should be aware of their local and state laws regarding online gaming activities. Laws vary by jurisdiction, and it is the user's responsibility to understand and comply with applicable regulations in their area.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl flex-shrink-0">🔞</span>
              <div>
                <p className="font-semibold mb-1">Age Restrictions:</p>
                <p>Gaming platforms are intended for users who are of legal age in their jurisdiction. Users must verify that they meet age requirements before engaging with any gaming platform.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl flex-shrink-0">🆘</span>
              <div>
                <p className="font-semibold mb-1">Seek Help if Needed:</p>
                <p>If you or someone you know is experiencing problems with gaming activities, resources are available. Organizations such as the National Council on Problem Gambling (1-800-522-4700) provide support and information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="section-padding pb-12">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 border border-red-500/30 bg-red-500/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-300">Important Disclosure</h3>
            </div>
            <div className="space-y-3 text-gray-200 leading-relaxed text-sm">
              <p>
                <strong>Independent Affiliate Website:</strong> This website is an independent informational resource and is not owned, operated, or affiliated with GameVault999. We are not the official GameVault999 website or operator.
              </p>
              <p>
                <strong>Affiliate Relationships:</strong> This site may participate in affiliate programs, which means we may receive compensation if users take certain actions through links on this site. This does not affect our editorial independence or the information we provide.
              </p>
              <p>
                <strong>No Guarantees:</strong> We do not guarantee any outcomes, results, or experiences related to GameVault999. All information is provided for educational and informational purposes only.
              </p>
              <p>
                <strong>User Responsibility:</strong> Users are responsible for verifying all information, understanding platform terms and conditions, and making informed decisions about their use of GameVault999 or any similar platform.
              </p>
              <p>
                <strong>Accuracy:</strong> While we strive to provide accurate information, platform features, policies, and availability may change. Users should verify current information directly with GameVault999 or through official channels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
