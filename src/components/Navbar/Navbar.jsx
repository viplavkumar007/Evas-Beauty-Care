import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import { brand } from '../../data/siteContent'
import { useScrolled, useScrollSpy } from '../../hooks/useScrollSpy'
import logoSrc from '../../assets/logo.jpeg'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['home', 'services', 'about', 'testimonials', 'faq', 'contact']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(30)
  const activeSection = useScrollSpy(sectionIds)

  const handleNav = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#faf8f3]/97 backdrop-blur-xl shadow-[0_2px_40px_rgba(0,0,0,0.08)] border-b border-[rgba(230,184,0,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 group"
            aria-label="EVA'S BEAUTY CARE — go to top"
          >
            <img
              src={logoSrc}
              alt="EVA'S BEAUTY CARE Logo"
              className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-sm"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className={`underline-slide font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-[#a37700]' : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center gap-2 text-sm font-body font-medium text-[#4a4a4a] hover:text-[#a37700] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{brand.phone}</span>
            </a>
            <a
              href={`https://wa.me/91${brand.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20Eva's%20Beauty%20Care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1a1a1a] text-[#e6b800] text-sm font-body font-semibold tracking-wide rounded-sm hover:bg-[#e6b800] hover:text-[#1a1a1a] transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#1a1a1a] hover:text-[#a37700] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#faf8f3]/98 backdrop-blur-xl border-t border-[rgba(230,184,0,0.15)] px-4 py-6 space-y-1"
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="block w-full text-left px-4 py-3 font-body text-sm font-medium text-[#4a4a4a] hover:text-[#a37700] hover:bg-[rgba(230,184,0,0.05)] rounded-sm transition-all"
              >
                {label}
              </button>
            ))}
            <div className="pt-4 border-t border-[rgba(230,184,0,0.15)] flex flex-col gap-3">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2 px-4 py-3 border border-[rgba(230,184,0,0.3)] rounded-sm text-sm font-body font-medium text-[#4a4a4a] hover:text-[#a37700] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e6b800]" />
                Call: {brand.phone}
              </a>
              <a
                href={`https://wa.me/91${brand.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1a1a1a] text-[#e6b800] rounded-sm text-sm font-semibold font-body transition-all hover:bg-[#e6b800] hover:text-[#1a1a1a]"
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
