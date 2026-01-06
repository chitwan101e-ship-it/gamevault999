function TermsAndConditions() {
  return (
    <div className="relative">
      {/* Page Header */}
      <section className="section-padding relative overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024] via-[#0f1d3f] to-[#0b1024]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(109,224,255,0.18),transparent_38%)]" />
        <div className="container-custom relative text-center max-w-3xl mx-auto space-y-4">
          <span className="neon-pill inline-flex justify-center">Terms</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Terms & Conditions</h2>
          <p className="text-gray-200 text-lg">The rules of the Game Vault multiverse.</p>
        </div>
      </section>

      {/* Terms Section */}
      <section className="section-padding grid-aurora pb-20">
        <div className="container-custom max-w-4xl">
          <div className="glass-panel rounded-3xl p-8 space-y-6 text-gray-200 border border-white/10">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Acceptance of Terms</h3>
              <p>
                By accessing and using Game Vault, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Use of Service</h3>
              <p>
                You agree to use Game Vault only for lawful purposes and in accordance with these Terms. You must be of legal age to use our services in your jurisdiction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Account Responsibility</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Prohibited Activities</h3>
              <p>
                You may not use our services for any illegal activities, fraud, or to violate any applicable laws or regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Limitation of Liability</h3>
              <p>
                Game Vault shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Changes to Terms</h3>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsAndConditions

