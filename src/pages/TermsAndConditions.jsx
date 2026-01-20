import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions: GameVault999 Platform Terms | USA Guide</title>
        <meta name="title" content="Terms & Conditions: GameVault999 Platform Terms | USA Guide" />
        <meta name="description" content="Information about GameVault999 terms and conditions, user responsibilities, and platform policies. Independent educational resource about platform terms." />
        <link rel="canonical" href="https://gamevault99.xyz/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions: GameVault999 Platform Terms" />
        <meta property="og:description" content="Information about GameVault999 terms and conditions, user responsibilities, and platform policies." />
        <meta property="og:url" content="https://gamevault99.xyz/terms-and-conditions" />
        <meta property="og:image" content="https://gamevault99.xyz/og-image.png" />
        <meta name="twitter:title" content="Terms & Conditions: GameVault999 Platform Terms" />
        <meta name="twitter:description" content="Information about GameVault999 terms and conditions and platform policies." />
        <meta name="twitter:image" content="https://gamevault99.xyz/og-image.png" />
      </Helmet>
      <div className="relative">
      {/* Page Header */}
      <section className="section-padding relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-3xl mx-auto space-y-4">
          <span className="neon-pill inline-flex justify-center">Terms</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Terms & Conditions Information</h2>
          <p className="text-gray-200 text-lg">General information about terms and conditions for gaming platforms like GameVault999.</p>
        </div>
      </section>

      {/* Terms Section */}
      <section className="section-padding grid-aurora pb-12">
        <div className="container-custom max-w-4xl">
          <div className="glass-panel rounded-3xl p-8 space-y-6 text-gray-200 border border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">About This Information</h3>
              <p>
                This page provides general information about terms and conditions for gaming platforms. This is an independent informational resource and not the official GameVault999 terms. Users must review and agree to the official terms on the GameVault999 platform.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Typical Terms of Service</h3>
              <p>
                Gaming platforms typically require users to use services lawfully and in accordance with platform rules. Users must be of legal age in their jurisdiction. Terms vary by platform and should be reviewed carefully.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Account Responsibilities</h3>
              <p>
                Users are typically responsible for maintaining account security, keeping login credentials confidential, and for activities conducted through their account. Users should review the platform's specific account policies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Prohibited Activities</h3>
              <p>
                Platforms typically prohibit illegal activities, fraud, and violations of applicable laws. Users should review the platform's terms for specific prohibited activities and consequences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Limitation of Liability</h3>
              <p>
                Gaming platforms typically include limitations of liability in their terms. Users should review these provisions carefully to understand their rights and the platform's responsibilities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Changes to Terms</h3>
              <p>
                Platforms may modify their terms over time. Users should review terms periodically and understand that continued use may constitute acceptance of updated terms. Check the official platform for current terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default TermsAndConditions

