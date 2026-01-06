import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { seoMetadata } from '../config/seoMetadata'

function DownloadAndroid() {
  const meta = seoMetadata.downloadAndroid

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
                Android Installation Guide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                GameVault999 Android Download
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Step-by-step guide to download and install GameVault999 APK on your Android device. Learn how to enable unknown sources and complete the installation process.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How to Download GameVault999 for Android</h2>
            
            <div className="space-y-6">
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">Enable Unknown Sources</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      Before downloading the GameVault999 APK, you need to enable installation from unknown sources on your Android device. Go to Settings → Security → Enable "Install unknown apps" or "Unknown sources" for your browser or file manager.
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
                    <h3 className="text-xl font-semibold mb-3 text-white">Download the APK File</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      Download the GameVault999 APK file from the official source. Ensure you're downloading from a trusted location. The file size and version information should be verified before proceeding with installation.
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
                    <h3 className="text-xl font-semibold mb-3 text-white">Install the APK</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      Once downloaded, locate the APK file in your device's Downloads folder. Tap on the file to begin installation. Follow the on-screen prompts to complete the installation process. The app will be installed on your Android device.
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
                    <h3 className="text-xl font-semibold mb-3 text-white">Launch and Set Up</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      After installation, locate the GameVault999 app icon on your home screen or app drawer. Tap to launch the app and follow the initial setup process. You may need to create an account or log in with existing credentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="section-padding bg-[#0b1024]/70">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Common Android Installation Issues</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                If you encounter problems during installation, check our <Link to="/troubleshooting" className="text-cyan-400 hover:text-cyan-300 underline">troubleshooting guide</Link> for solutions to common issues. Common problems include installation blocked errors, insufficient storage space, or compatibility issues with older Android versions.
              </p>
              <p>
                For login assistance after installation, visit our <Link to="/login" className="text-cyan-400 hover:text-cyan-300 underline">login help page</Link>. Need help with iOS installation? See our <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">iOS download guide</Link>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DownloadAndroid
