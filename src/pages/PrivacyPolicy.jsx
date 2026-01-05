import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy: GameVault999 Data Handling | USA Guide</title>
        <meta name="title" content="Privacy Policy: GameVault999 Data Handling | USA Guide" />
        <meta name="description" content="Information about GameVault999 privacy practices, data collection, and security measures. Independent educational resource about platform privacy policies." />
        <link rel="canonical" href="https://www.gamevault99.xyz/privacy-policy" />
        <meta property="og:title" content="Privacy Policy: GameVault999 Data Handling" />
        <meta property="og:description" content="Information about GameVault999 privacy practices, data collection, and security measures." />
        <meta property="og:url" content="https://www.gamevault99.xyz/privacy-policy" />
        <meta property="og:image" content="https://www.gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content="Privacy Policy: GameVault999 Data Handling" />
        <meta name="twitter:description" content="Information about GameVault999 privacy practices and data handling." />
        <meta name="twitter:image" content="https://www.gamevault99.xyz/og-image.png" />
      </Helmet>
      <div className="relative">
      {/* Page Header */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-3xl mx-auto space-y-4">
          <span className="neon-pill inline-flex justify-center">Privacy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy Information</h2>
          <p className="text-gray-200 text-lg">Information about GameVault999 privacy practices and data handling.</p>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="section-padding grid-aurora pb-12">
        <div className="container-custom max-w-4xl">
          <div className="glass-panel rounded-3xl p-8 space-y-6 text-gray-200 border border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">About This Information</h3>
              <p>
                This page provides general information about privacy policies for gaming platforms like GameVault999. This is an independent informational resource and not the official GameVault999 privacy policy. Users should review the official privacy policy on the GameVault999 platform.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Typical Information Collection</h3>
              <p>
                Gaming platforms typically collect information provided during account registration, including username, contact information, and account activity data. Users should review the platform's privacy policy for specific details.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">How Platforms Use Information</h3>
              <p>
                Platforms generally use collected information to provide services, process transactions, maintain accounts, and communicate with users. Specific practices vary by platform and should be reviewed in the official privacy policy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Security Measures</h3>
              <p>
                Gaming platforms typically implement security measures such as encryption and account verification. Users should review the platform's security practices and take appropriate precautions with their account information.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Contacting the Platform</h3>
              <p>
                For questions about GameVault999's privacy policy, users should contact GameVault999 directly through their official support channels. See our <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact page</Link> for available support options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default PrivacyPolicy

