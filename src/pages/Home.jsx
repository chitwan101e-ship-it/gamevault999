import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

function Home() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <>
      <Helmet>
        <title>GameVault999 Download & Install Guide (iOS + Android)</title>
        <meta name="description" content="Download and install GameVault999 on iOS and Android. Step-by-step APK setup, login help, and troubleshooting in this independent user guide." />
        <link rel="canonical" href="https://gamevault99.xyz/" />
        <meta property="og:title" content="GameVault999 Download & Install Guide (iOS + Android)" />
        <meta property="og:description" content="Download and install GameVault999 on iOS and Android. Step-by-step APK setup, login help, and troubleshooting in this independent user guide." />
        <meta property="og:url" content="https://gamevault99.xyz/" />
        <meta property="og:image" content="https://gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content="GameVault999 Download & Install Guide (iOS + Android)" />
        <meta name="twitter:description" content="Download and install GameVault999 on iOS and Android. Step-by-step APK setup, login help, and troubleshooting in this independent user guide." />
        <meta name="twitter:image" content="https://gamevault99.xyz/og-image.png" />
      </Helmet>
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
                GameVault999: Gaming App for iOS & Android
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Discover GameVault999 (Game Vault 999), a mobile gaming app. Download Game Vault 999 for iOS and Android, get the APK, and login to play online. Enjoy fish games, slots, and more.
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

      {/* About GameVault999 */}
      <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 flex items-center justify-center shadow-lg shadow-pink-500/20">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About GameVault999</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-200 leading-relaxed text-lg">
              <span className="font-semibold text-white">GameVault999</span> (also known as Game Vault 999) is a mobile gaming platform offering exceptional gaming experiences through iOS and Android apps. This mobile gaming app features <Link to="/games" className="text-cyan-400 hover:text-cyan-300 underline">slot games, fish games, and table-style games</Link> optimized for mobile devices. Whether you're searching for the Game Vault 999 app or need the APK download, this platform provides comprehensive mobile gaming entertainment.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              The platform uses a secure credit-based system where users can download the app for iOS and Android devices. Create an account and access diverse gaming activities designed for smartphones and tablets. The platform delivers an immersive gaming experience with high-quality graphics and smooth gameplay. Users can download the APK for Android or install directly on iOS. Learn more about <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">how the platform operates</Link> and what features are available in this comprehensive guide.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              As one of the popular mobile gaming apps available, this platform combines advanced mobile gaming technology with a user-friendly interface. The app works seamlessly on both iOS and Android platforms. Players can enjoy their favorite fish games and slot machines regardless of their device preference. To get started, see our <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android download guide</Link> or <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">iOS download guide</Link> for installation instructions.
            </p>
          </div>
        </div>
      </section>

      {/* How GameVault999 Works */}
      <section className="section-padding bg-[#0b1024]/70 relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-end">
            <img 
              src="/images/characters/bull.png" 
              alt="GameVault999 platform illustration" 
              className="h-full w-full lg:w-auto object-cover lg:object-contain opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1024]/85 via-[#0b1024]/70 to-transparent"></div>
        </div>
        
        <div className="container-custom max-w-4xl mx-auto relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">How GameVault999 Works</h2>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl p-5 border border-cyan-500/30 hover:border-cyan-500/50 transition">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Step 1: Download the Mobile Gaming App</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Download the app through the platform's official channels. The mobile gaming application is available for both <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android devices</Link> and <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">iOS devices</Link>. Installation follows standard procedures for mobile apps, ensuring a smooth setup process on your smartphone or tablet. If you encounter issues, see our <Link to="/troubleshooting" className="text-cyan-400 hover:text-cyan-300 underline">troubleshooting guide</Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-pink-500/30 hover:border-pink-500/50 transition">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Step 2: Account Creation</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Create an account by providing basic registration information, including a username and login credentials. Complete any required verification steps. Need help accessing your account? Check our <Link to="/login" className="text-cyan-400 hover:text-cyan-300 underline">login help guide</Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-amber-500/30 hover:border-amber-500/50 transition">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Step 3: Understanding the Credit System</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      The platform uses a secure credit-based system. Users obtain credits through designated methods and use them to participate in various games including fish games, slots, and table games. This system enhances the overall gaming experience by providing seamless transactions and secure payment processing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-purple-500/30 hover:border-purple-500/50 transition">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Step 4: Accessing Games on the Platform</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Browse and access various games available on the mobile app. The platform displays different game categories including fish games, slot games, and table games for easy selection. Each game is optimized for iOS and Android to provide the best gaming experience with smooth performance and engaging gameplay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-green-500/30 hover:border-green-500/50 transition">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Step 5: Platform Navigation</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Navigate through features like game rooms, user profiles, and account management tools using the mobile-optimized interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GameVault999 Top Features */}
      <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 flex items-center justify-center shadow-lg shadow-pink-500/20">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">GameVault999 App Top Features</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/images/characters/fish.png" alt="HD Games" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">HD Games</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Smooth visuals and fast load times on modern devices.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/images/characters/support.png" alt="Customer Support" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customer Support 24/7</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Support 24/7 on Facebook, Telegram & WhatsApp.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/images/characters/prizes.png" alt="Daily Offers" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Daily offers and rewards</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Unlock bonuses, events, and loyalty perks.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/images/characters/big-win.png" alt="Verified Payments" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Verified agent payments</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Buy credits safely through verified agents.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/images/characters/mummy.png" alt="Secure Credit System" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure credit system</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transactions are protected and monitored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GameVault999 App */}
      <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose the GameVault999 App?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Premium Gaming Experience</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                The mobile gaming platform delivers an exceptional gaming experience with stunning graphics, smooth gameplay, and immersive sound effects. Whether you're playing fish games, slot machines, or table games, the platform ensures every session is engaging and entertaining. The gaming experience is designed to be intuitive and enjoyable for players of all skill levels.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The app is optimized for both iOS and Android devices, providing a seamless gaming experience across all mobile platforms. Game Vault 999 sets the standard for mobile gaming apps with its user-friendly interface and high-quality game selection.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Comprehensive Game Selection</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                The platform offers a diverse collection of games to suit every player's preference. From exciting fish games with colorful underwater themes to classic slot games and strategic table games, the mobile gaming app has something for everyone. Explore different game vault options to find your favorite gaming experience.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Each game on the platform is carefully selected to provide the best gaming experience possible. The app regularly updates its game library, ensuring players always have access to the latest and most popular titles in the mobile gaming world. This commitment to quality enhances the overall gaming experience for all users.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Cross-Platform Compatibility</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                One of the standout features of the mobile gaming app is its compatibility with both iOS and Android devices. Whether you're using an iPhone, iPad, Android smartphone, or tablet, you can enjoy the full gaming experience without any limitations. The cross-platform support ensures a consistent gaming experience across all devices.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The GameVault platform is designed to work seamlessly across different screen sizes and operating systems. This cross-platform support ensures that all players, regardless of their device preference, can access and enjoy the GameVault game app.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Secure and Reliable Platform</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Security is a top priority for the mobile gaming platform. The platform employs advanced security measures to protect user data and ensure safe transactions. Players can enjoy their gaming experience with confidence, knowing their information is protected. The secure environment enhances the overall gaming experience.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The platform uses encrypted connections and secure payment processing to safeguard all user activities. Combined with 24/7 customer support, the mobile gaming platform provides a trustworthy and reliable gaming environment for all users. This commitment to security and support creates a positive gaming experience.
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
              The GameVault999 app is designed for users who enjoy mobile gaming entertainment. This GameVault game app may appeal to those interested in <Link to="/games" className="text-cyan-400 hover:text-cyan-300 underline">mobile gaming experiences</Link> and <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">casino-style entertainment</Link>. Whether you're looking for the GameVault app, GameVault game, or GameVault999 for iOS and Android, this platform offers an exceptional gaming experience. The platform is ideal for:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="8" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                      <path d="M12 2l2 2-2 2-2-2 2-2z" strokeWidth="1.5" stroke="currentColor" fill="currentColor" opacity="0.6"/>
                    </svg>
                  </div>
                  <strong>Entertainment-focused users:</strong>
                </div>
                <p className="text-sm ml-11">Individuals looking for mobile gaming experiences for entertainment purposes.</p>
              </div>
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <strong>Mobile-first players:</strong>
                </div>
                <p className="text-sm ml-11">Users who prefer gaming on smartphones and tablets rather than desktop computers.</p>
              </div>
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-500/10 border border-gray-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">US</span>
                  </div>
                  <strong>USA audience:</strong>
                </div>
                <p className="text-sm ml-11">The platform is accessible to users in the United States, though users should verify local regulations and platform availability in their specific location.</p>
              </div>
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18C6.67 18 6 17.33 6 16.5S6.67 15 7.5 15 9 15.67 9 16.5 8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4.5c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6 18 6.67 18 7.5 17.33 9 16.5 9zm0 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                  </div>
                  <strong>Casino-style game enthusiasts:</strong>
                </div>
                <p className="text-sm ml-11">Users interested in casino-style gaming experiences adapted for mobile devices.</p>
              </div>
            </div>
            <p className="pt-4">
              It's important to note that users should only engage with gaming platforms if they are of legal age in their jurisdiction and understand that gaming activities are for entertainment purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Download Game Vault 999 - iOS & Android */}
      <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Download Game Vault 999: iOS & Android Guide</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">GameVault999 Download for iOS</h3>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">
                To download Game Vault 999 for iOS, see our <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">complete iOS download guide</Link>. The GameVault999 app is compatible with iPhone and iPad devices running iOS 12.0 or later. The download process follows standard iOS app installation procedures.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                After downloading, follow the installation prompts and allow the necessary permissions to complete the setup. For detailed step-by-step instructions, visit our <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">iOS installation guide</Link>.
              </p>
              <a href="https://download.gamevault999.com/" target="_blank" rel="noopener noreferrer" className="inline-block btn-primary">
                Download for iOS
              </a>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">GameVault999 Download for Android</h3>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">
                For Android users, see our <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android download guide</Link> to download Game Vault 999 APK. The GameVault999 app works on Android 6.0 and higher. You may need to enable installation from unknown sources in your device settings.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                The Game Vault 999 APK download file can be installed by following the on-screen instructions after downloading. For complete step-by-step instructions, visit our <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android installation guide</Link>.
              </p>
              <a href="https://download.gamevault999.com/" target="_blank" rel="noopener noreferrer" className="inline-block btn-primary">
                Download for Android / APK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Game Vault 999 Login Guide */}
      <section className="section-padding bg-[#0b1024]/70">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Game Vault 999 Login Guide</h2>
          </div>
          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">How to Login to GameVault999</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                To access your GameVault999 account, use the login feature within the app or visit our <Link to="/login" className="text-cyan-400 hover:text-cyan-300 underline">login help page</Link> for assistance. Users need their registered username and Game Vault 999 login password to access their account.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                You can access the login portal directly through the app. Make sure you have your Game Vault 999 login password ready, and if you've forgotten it, use the password recovery feature. For complete login instructions and password help, see our <Link to="/login" className="text-cyan-400 hover:text-cyan-300 underline">login guide</Link>.
              </p>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-sm font-semibold text-cyan-400 mb-2">Login Steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
                  <li>Open the GameVault999 app or visit the login page</li>
                  <li>Enter your registered username</li>
                  <li>Input your Game Vault 999 login password</li>
                  <li>Click the login button to access your account</li>
                </ol>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Game Vault 999 Login Password Help</h3>
              <p className="text-gray-200 leading-relaxed">
                If you've forgotten your Game Vault 999 login password, use the "Forgot Password" option on the login screen. You'll need to provide your registered email or username to reset your password. Follow the password reset instructions sent to your registered contact information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Play Online & Real Money */}
      <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Game Vault 999: Play Online</h2>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white/10 mb-6">
            <p className="text-gray-200 leading-relaxed mb-4">
              Game Vault 999 allows users to play online through the mobile app. The platform offers various gaming activities including fish games, slots, and table games. Users searching for "Game Vault 999 play online real money" should note that the platform uses a credit-based system.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              The GameVault999 platform provides an online gaming experience accessible through the mobile app. Players can enjoy games with credits obtained through the platform's designated methods. Always play responsibly and within your means.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/games" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition block group">
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition">Browse Games</h3>
              <p className="text-gray-300 text-sm">Explore all available games on GameVault999 platform</p>
            </Link>
            <Link to="/faq" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition block group">
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-amber-400 transition">FAQ & Help</h3>
              <p className="text-gray-300 text-sm">Get answers to common questions about Game Vault 999</p>
            </Link>
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
            Explore our comprehensive guides to learn more about Game Vault 999, GameVault999 download options, login help, and more:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/about" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition block group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
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
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">How to Download GameVault999 (USA)</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Step-by-step instructions for downloading and installing the app in the United States.
              </p>
            </Link>
            <Link to="/contact" className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition block group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
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
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Responsible Gaming Notice</h2>
          </div>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="8"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                  <path d="M12 4l1 1M12 20l1-1M4 12l1-1M20 12l-1-1M7.05 7.05l.7.7M16.25 16.25l.7.7M7.05 16.95l.7-.7M16.25 7.75l.7-.7" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-2 text-white">Entertainment Only:</p>
                <p className="text-gray-300">All gaming activities on GameVault999 and similar platforms should be viewed as entertainment activities only. There are no guarantees of outcomes, and users should never spend more than they can afford to lose.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-2 text-white">Responsible Play:</p>
                <p className="text-gray-300">We encourage all users to practice responsible gaming habits. This includes setting time limits, budget limits, and recognizing when to take breaks. Gaming should never interfere with daily responsibilities, relationships, or financial obligations.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M9 12h6M12 9v6M12 2L2 7v10l10 5 10-5V7L12 2z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-2 text-white">Legal Awareness:</p>
                <p className="text-gray-300">Users in the United States should be aware of their local and state laws regarding online gaming activities. Laws vary by jurisdiction, and it is the user's responsibility to understand and comply with applicable regulations in their area.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15"/>
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="bold">18</text>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-2 text-white">Age Restrictions:</p>
                <p className="text-gray-300">Gaming platforms are intended for users who are of legal age in their jurisdiction. Users must verify that they meet age requirements before engaging with any gaming platform.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.15"/>
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <text x="12" y="15" textAnchor="middle" fontSize="5.5" fill="currentColor" fontWeight="bold" letterSpacing="1">SOS</text>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-2 text-white">Seek Help if Needed:</p>
                <p className="text-gray-300">If you or someone you know is experiencing problems with gaming activities, resources are available. Organizations such as the National Council on Problem Gambling (1-800-522-4700) provide support and information.</p>
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
    </>
  )
}

export default Home
