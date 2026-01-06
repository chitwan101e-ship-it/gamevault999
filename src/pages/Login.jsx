import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { seoMetadata } from '../config/seoMetadata'

function Login() {
  const meta = seoMetadata.login

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
                Account Access Help
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                GameVault999 Login Help
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Get assistance with GameVault999 login issues. Learn how to access your account, reset your password, and troubleshoot common login problems.
              </p>
            </div>
          </div>
        </section>

        {/* Login Help Steps */}
        <section className="section-padding bg-gradient-to-br from-[#0b1024] via-[#0f1428] to-[#0b1024]">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How to Access Your GameVault999 Account</h2>
            
            <div className="space-y-6">
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">Locate the Login Screen</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      Open the GameVault999 app on your device. Navigate to the login screen where you'll be prompted to enter your username and password. If you don't have an account yet, look for the registration or sign-up option.
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
                    <h3 className="text-xl font-semibold mb-3 text-white">Enter Your Credentials</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      Enter your registered username and password. Ensure you're using the correct credentials associated with your GameVault999 account. Check for any typos or case sensitivity issues in your username or password.
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
                    <h3 className="text-xl font-semibold mb-3 text-white">Password Recovery Options</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      If you've forgotten your password, look for the "Forgot Password" or "Reset Password" link on the login screen. Follow the password recovery process, which typically involves verifying your account through email or phone number associated with your account.
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
                    <h3 className="text-xl font-semibold mb-3 text-white">Troubleshoot Login Issues</h3>
                    <p className="text-gray-200 leading-relaxed mb-3">
                      If you're unable to log in, check your internet connection, verify your account status, and ensure the app is updated to the latest version. Clear the app cache or restart the app if you continue experiencing issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="section-padding bg-[#0b1024]/70">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Common Login Problems</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                If you're experiencing persistent login issues, visit our <Link to="/troubleshooting" className="text-cyan-400 hover:text-cyan-300 underline">troubleshooting guide</Link> for detailed solutions. Common login problems include incorrect credentials, account lockouts, network connectivity issues, or app-related errors.
              </p>
              <p>
                Need help with installation first? Check our guides for <Link to="/download/android" className="text-cyan-400 hover:text-cyan-300 underline">Android</Link> or <Link to="/download/ios" className="text-cyan-400 hover:text-cyan-300 underline">iOS</Link> installation. For general information about the platform, visit our <Link to="/about" className="text-cyan-400 hover:text-cyan-300 underline">about page</Link>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
