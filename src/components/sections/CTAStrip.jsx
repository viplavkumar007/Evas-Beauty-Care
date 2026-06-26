import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { cta, brand } from '../../data/siteContent'

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-[#e6b800] py-16 lg:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc9900] via-[#e6b800] to-[#ffd000]" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full"
        />
      </div>

      {/* Corner marks */}
      <div className="absolute top-5 left-8 w-14 h-px bg-[#1a1a1a] opacity-20" />
      <div className="absolute top-5 left-8 w-px h-14 bg-[#1a1a1a] opacity-20" />
      <div className="absolute bottom-5 right-8 w-14 h-px bg-[#1a1a1a] opacity-20" />
      <div className="absolute bottom-5 right-8 w-px h-14 bg-[#1a1a1a] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/55 mb-4">
            {cta.eyebrow}
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6">
            {cta.title}{' '}
            <span className="italic">{cta.titleItalic}</span>
          </h2>
          <p className="text-[#1a1a1a]/65 font-body text-base lg:text-lg max-w-xl mx-auto mb-10">
            {cta.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/91${brand.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20Eva's%20Beauty%20Care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-body font-semibold text-sm rounded-sm shadow-xl hover:bg-[#2a2a2a] transition-colors hover-lift"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-body font-semibold text-sm rounded-sm hover:bg-[#1a1a1a] hover:text-[#e6b800] transition-all duration-300"
            >
              Call: {brand.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
