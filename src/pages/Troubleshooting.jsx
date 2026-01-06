import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { seoMetadata } from '../config/seoMetadata'

function Troubleshooting() {
  const meta = seoMetadata.troubleshooting

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
                Problem Solving Guide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                GameVault999 Troubleshooting
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Find solutions for common GameVault999 problems including installation issues, login errors, app crashes, and update problems.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting Categories */}
        <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Common Issues and Solutions</h2>
            
            <div className="space-y-6">
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Installation Problems</h3>
                <div className="space-y-3 text-gray-200">
                  <p><strong className="text-white">Issue:</strong> App won't install on Android</p>
                  <p><strong className="text-white">Solution:</strong> Enable "Install unknown apps" in Settings → Security. Ensure you have sufficient storage space. Check that your Android version meets minimum requirements. See our <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android installation guide</Link> for detailed steps.</p>
                </div>
                <div className="space-y-3 text-gray-200 mt-4">
                  <p><strong className="text-white">Issue:</strong> iOS installation fails</p>
                  <p><strong className="text-white">Solution:</strong> Trust the developer certificate in Settings → General → Device Management. Ensure your iOS version is compatible. Check our <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">iOS installation guide</Link> for step-by-step instructions.</p>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Login and Account Issues</h3>
                <div className="space-y-3 text-gray-200">
                  <p><strong className="text-white">Issue:</strong> Cannot log in to account</p>
                  <p><strong className="text-white">Solution:</strong> Verify your username and password are correct. Check your internet connection. Try resetting your password using the "Forgot Password" option. Clear app cache and restart the app. Visit our <Link to="/login" className="text-cyan-400 hover:text-cyan-300 underline">login help page</Link> for more assistance.</p>
                </div>
                <div className="space-y-3 text-gray-200 mt-4">
                  <p><strong className="text-white">Issue:</strong> Account locked or suspended</p>
                  <p><strong className="text-white">Solution:</strong> Contact customer support through the app or official channels. Verify your account information and ensure you're following platform terms and conditions.</p>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">App Performance Issues</h3>
                <div className="space-y-3 text-gray-200">
                  <p><strong className="text-white">Issue:</strong> App crashes or freezes</p>
                  <p><strong className="text-white">Solution:</strong> Update the app to the latest version. Clear app cache and data. Restart your device. Ensure you have sufficient storage and RAM available. Check for device compatibility issues.</p>
                </div>
                <div className="space-y-3 text-gray-200 mt-4">
                  <p><strong className="text-white">Issue:</strong> Slow loading or lag</p>
                  <p><strong className="text-white">Solution:</strong> Check your internet connection speed. Close other apps running in the background. Clear app cache. Restart your device. Ensure your device meets minimum system requirements.</p>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Update and Compatibility Issues</h3>
                <div className="space-y-3 text-gray-200">
                  <p><strong className="text-white">Issue:</strong> App update fails</p>
                  <p><strong className="text-white">Solution:</strong> Uninstall the current version and reinstall the latest version. Ensure you have sufficient storage space. Check your internet connection. For Android, re-enable unknown sources if needed.</p>
                </div>
                <div className="space-y-3 text-gray-200 mt-4">
                  <p><strong className="text-white">Issue:</strong> Device not compatible</p>
                  <p><strong className="text-white">Solution:</strong> Verify your device meets minimum system requirements. Check Android version (typically Android 6.0+) or iOS version (typically iOS 12.0+). Some older devices may not be supported.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="section-padding bg-[#0b1024]/70">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Additional Resources</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                If you're still experiencing issues after trying these solutions, review our installation guides for <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android</Link> or <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">iOS</Link>. For login-specific problems, see our <Link to="/login" className="text-cyan-400 hover:text-cyan-300 underline">login help page</Link>.
              </p>
              <p>
                For general information about GameVault999, visit our <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">about page</Link> or check our <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 underline">FAQ section</Link> for answers to common questions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Troubleshooting
