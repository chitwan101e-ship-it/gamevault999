import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1024]/80 to-[#050914]" />
      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About Section */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h5 className="text-white font-semibold mb-3">About Game Vault</h5>
            <p className="text-gray-300 text-sm">
              Trusted by 18 million players worldwide. Late-night slots, fish rooms, jackpots, and payouts that land fast.
            </p>
          </div>

          {/* Quick Links */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h5 className="text-white font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h5 className="text-white font-semibold mb-3">Connect With Us</h5>
            <div className="flex gap-4">
              <a
                href="https://wa.me/+85264386769"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
                aria-label="WhatsApp"
              >
                <img src="/images/social/color-icons/whatsapp-hd.png" alt="WhatsApp" className="w-10 h-10" />
              </a>
              <a
                href="https://t.me/gvvssupport2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
                aria-label="Telegram"
              >
                <img src="/images/social/color-icons/telegram-hd.png" alt="Telegram" className="w-10 h-10" />
              </a>
              <a
                href="https://signal.me/#eu/JPBLGihdYBnMHy5e_-qVMfkK8xYqWgelHGZIQobHojBKNkHiwQdJ7JbmIo0uTm7p"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
                aria-label="Signal"
              >
                <img src="/images/social/color-icons/signal-hd.png" alt="Signal" className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h5 className="text-white font-semibold mb-3">Location</h5>
            <p className="text-gray-300 text-sm">
              Technology Park, 1856 Sha Tin, Hong Kong
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2025{' '}
            <Link to="/" className="text-amber-200 hover:text-white">
              Game Vault
            </Link>
            {' '}— All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

