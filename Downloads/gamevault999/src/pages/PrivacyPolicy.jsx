function PrivacyPolicy() {
  return (
    <div className="relative">
      {/* Page Header */}
      <section className="section-padding relative overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-3xl mx-auto space-y-4">
          <span className="neon-pill inline-flex justify-center">Privacy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h2>
          <p className="text-gray-200 text-lg">How Game Vault protects and respects your data.</p>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="section-padding grid-aurora pb-20">
        <div className="container-custom max-w-4xl">
          <div className="glass-panel rounded-3xl p-8 space-y-6 text-gray-200 border border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Introduction</h3>
              <p>
                Game Vault is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Information We Collect</h3>
              <p>
                We collect information that you provide directly to us, including account registration details, transaction information, and communication records.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">How We Use Your Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information, including SSL encryption and secure agent verification.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our Contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy

