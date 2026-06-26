import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'
import { brand } from '../../data/siteContent'

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          {/* Expandable actions */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="flex flex-col gap-2"
              >
                <a
                  href={`tel:${brand.phone}`}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white border border-[rgba(230,184,0,0.3)] rounded-full shadow-lg text-sm font-body font-medium text-[#1a1a1a] hover:bg-[#faf8f3] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#a37700]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/91${brand.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 bg-[#25D366] rounded-full shadow-lg text-sm font-body font-medium text-white hover:bg-[#1fb955] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setExpanded(!expanded)}
            aria-label="Contact options"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#1fb955] transition-colors pulse-gold"
            style={{ animation: 'pulseGold 2.5s ease-in-out infinite' }}
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="wa" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
