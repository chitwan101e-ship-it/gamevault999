import { Link } from 'react-router-dom'

function Footer() {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/games', label: 'Games' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ]

  return (
    <>
      {/* Floating Social Media Icons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 hover:from-sky-300 hover:to-sky-500 border-2 border-sky-300/50 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50 backdrop-blur-sm"
          aria-label="Telegram"
        >
          <img src="/images/social/svg-icons/telegram-white.svg" alt="Telegram" className="w-7 h-7" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 border-2 border-emerald-300/50 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50 backdrop-blur-sm"
          aria-label="WhatsApp"
        >
          <img src="/images/social/svg-icons/whatsapp-white.svg" alt="WhatsApp" className="w-7 h-7" />
        </a>
        <a
          href="https://signal.me/#eu/H4dqi2VC7E_jEWZQSmddKK1oaARHUxxBPHZ3A_ygWoHK7Opj9L9Ktr3xIKwIxCvd"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 hover:from-indigo-300 hover:to-indigo-500 border-2 border-indigo-300/50 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 backdrop-blur-sm"
          aria-label="Signal"
        >
          <img src="/images/social/svg-icons/signal-white.svg" alt="Signal" className="w-7 h-7" />
        </a>
        <a
          href="https://www.facebook.com/people/Happy-Hour-Wheel-of-Fortune/61557285823755"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 border-2 border-blue-300/50 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 backdrop-blur-sm"
          aria-label="Facebook"
        >
          <img src="/images/social/svg-icons/messenger-white.svg" alt="Facebook" className="w-7 h-7" />
        </a>
      </div>

      <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0b1024] to-[#050914] border-t border-white/10">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom py-12 md:py-16 relative z-10">
          {/* Top Section: Logo, Copyright, Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl bg-pink-500/30 group-hover:bg-pink-500/40 transition" />
                <img
                  src="/images/logo/logo.png"
                  alt="GameVault999 Logo"
                  className="relative h-16 w-16 md:h-20 md:w-20 rounded-full object-cover ring-2 ring-white/10 shadow-lg"
                />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-white">GameVault999</p>
                <p className="text-sm text-gray-400">USA Guide</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">© 2025 All rights reserved.</p>
          </div>

          {/* Warning Card */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-red-500/5 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-red-400 font-bold mb-3 text-base md:text-lg tracking-tight">
                  18+ Only | For Entertainment Purposes Only | Play Responsibly
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Copyright 2025, GameVault999 USA Guide. All rights reserved. This is an independent informational website about GameVault999, a mobile gaming platform. This site is not affiliated with, owned by, or operated by GameVault999. All information is provided for educational purposes only. 18+ only.
                </p>
              </div>
            </div>
          </div>

          {/* App Description Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                GameVault999 – Mobile Gaming Platform Guide for USA Users
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed flex-grow">
                GameVault999 is a mobile gaming platform available for Android and iOS devices, featuring various game types including slots, fish shooting games, and table-style games. This independent guide provides educational information about the platform for users in the United States.
              </p>
            </div>
            
            {/* Additional Info Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-white/0 flex flex-col h-full">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-4 font-semibold">Quick Info</p>
              <div className="space-y-2.5 flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-snug">Independent informational resource</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-snug">Educational content only</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-snug">Not affiliated with GameVault999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs text-center">
              This website is an independent informational resource and is not affiliated with, owned by, or operated by GameVault999.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
