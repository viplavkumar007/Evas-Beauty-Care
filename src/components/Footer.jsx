import { motion } from 'framer-motion'
import { MessageCircle, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { brand, footer, services } from '../data/siteContent'
import logoSrc from '../assets/logo.jpeg'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[rgba(230,184,0,0.1)]">
      {/* Gold top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#e6b800] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoSrc}
                alt="EVA'S BEAUTY CARE"
                className="h-14 w-auto object-contain rounded-sm"
              />
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
              {footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/91${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-[rgba(230,184,0,0.1)] border border-[rgba(230,184,0,0.15)] rounded-sm flex items-center justify-center hover:bg-[rgba(230,184,0,0.2)] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#e6b800]" />
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-[rgba(230,184,0,0.1)] border border-[rgba(230,184,0,0.15)] rounded-sm flex items-center justify-center hover:bg-[rgba(230,184,0,0.2)] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#e6b800]" />
              </a>
              <a
                href={`tel:${brand.phone}`}
                aria-label="Phone"
                className="w-9 h-9 bg-[rgba(230,184,0,0.1)] border border-[rgba(230,184,0,0.15)] rounded-sm flex items-center justify-center hover:bg-[rgba(230,184,0,0.2)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e6b800]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-[#e6b800]/60 tracking-[0.2em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="font-body text-sm text-white/50 hover:text-[#e6b800] transition-colors underline-slide"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs text-[#e6b800]/60 tracking-[0.2em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footer.serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="font-body text-sm text-white/50 hover:text-[#e6b800] transition-colors underline-slide"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-[#e6b800]/60 tracking-[0.2em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${brand.phone}`} className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-[#e6b800]/60 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                    {brand.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-[#e6b800]/60 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors break-all">
                    {brand.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(brand.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 text-[#e6b800]/60 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors">
                    {brand.address}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(230,184,0,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body text-center sm:text-left">
            {footer.copyright}
          </p>
          <p className="text-white/20 text-xs font-body">
            Crafted with ❤️ for Barmer
          </p>
        </div>
      </div>
    </footer>
  )
}
