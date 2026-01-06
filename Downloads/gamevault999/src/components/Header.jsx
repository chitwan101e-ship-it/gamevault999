import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/games', label: 'Games' },
    { path: '/agents', label: 'Agents' },
    { path: '/players', label: 'Players' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#0a1024]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-pink-500/10">
        <div className="container-custom flex items-center justify-between gap-3 py-3 md:py-4">
          {/* Logo + wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl bg-pink-500/30 group-hover:scale-110 transition" />
              <img
                src="/images/logo/logo.png"
                alt="Game Vault Logo"
                className="relative h-12 w-12 md:h-14 md:w-14 rounded-full object-cover ring-2 ring-white/10 shadow-lg shadow-amber-500/25 bg-[#0a1024]"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gray-300">Game Vault</p>
              <p className="text-base font-semibold text-white">Casino Multiverse</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.path) && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/70 via-amber-400/60 to-cyan-400/70 shadow-lg shadow-pink-500/30" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/games" className="btn-secondary">
              Explore Games
            </Link>
            <a
              href="https://download.gamevault999.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-pink-300 p-2 rounded-xl bg-white/10 border border-white/10 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 px-4">
            <div className="glass-panel rounded-2xl p-4 border border-white/10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-white bg-gradient-to-r from-pink-500/60 via-amber-400/60 to-cyan-400/60 shadow-lg shadow-pink-500/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://download.gamevault999.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 btn-primary justify-center w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download App
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
