import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { seoMetadata } from '../config/seoMetadata'

function DownloadIos() {
  const meta = seoMetadata.downloadIos

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:image" content="https://www.gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content={meta.twitterTitle} />
        <meta name="twitter:description" content={meta.twitterDescription} />
        <meta name="twitter:image" content="https://www.gamevault99.xyz/og-image.png" />
      </Helmet>

      <div className="relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050914]/90 via-[#0b1a3a]/80 to-[#050914]" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm uppercase tracking-wider text-gray-200 mb-6">
                iOS Installation Guide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                GameVault999 iOS Download
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Complete guide to download and install GameVault999 on your iPhone or iPad. Learn how to get GameVault999 for iOS devices.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How to Download GameVault999 for iOS</h2>
            
            <div className="space-y-6">
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">Check iOS Compatibility</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      Ensure your iPhone or iPad meets the minimum iOS version requirements for GameVault999. The app typically requires iOS 12.0 or later. Check your device's iOS version in Settings → General → About.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 font-bold text-xl">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">Download via TestFlight or Direct Install</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      GameVault999 for iOS may be available through TestFlight for beta testing or via direct installation. Follow the official instructions provided by the platform. You may need to trust the developer certificate in Settings → General → Device Management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 font-bold text-xl">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">Trust the Developer</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      After installation, you may see a message that the developer is not trusted. Go to Settings → General → Device Management (or Profiles & Device Management), find the developer name, and tap "Trust" to enable the app.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">Launch and Configure</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      Once installed and trusted, locate the GameVault999 app on your home screen. Tap to launch and complete the initial setup. Create an account or log in with your existing credentials to start using the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="section-padding bg-[#0b1024]/70">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">iOS Installation Support</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                If you experience issues during iOS installation, visit our <Link to="/troubleshooting" className="text-cyan-400 hover:text-cyan-300 underline">troubleshooting guide</Link> for device-specific solutions. Common iOS issues include certificate trust errors, installation failures, or compatibility problems.
              </p>
              <p>
                After successful installation, if you need help accessing your account, see our <Link to="/login" className="text-cyan-400 hover:text-cyan-300 underline">login help page</Link>. For Android installation instructions, check our <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android download guide</Link>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DownloadIos
