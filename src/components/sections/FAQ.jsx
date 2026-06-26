import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs, brand } from '../../data/siteContent'

function FAQItem({ item, index, open, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`border rounded-sm overflow-hidden transition-all duration-300 ${
        open
          ? 'border-[rgba(230,184,0,0.4)] bg-white shadow-card'
          : 'border-[rgba(230,184,0,0.12)] bg-white hover:border-[rgba(230,184,0,0.3)]'
      }`}
    >
      <button
        className="w-full text-left flex items-center justify-between gap-4 p-5 lg:p-6"
        onClick={toggle}
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="font-mono text-xs text-[#e6b800] mt-0.5 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-body font-medium text-[#1a1a1a] text-sm lg:text-base leading-snug">
            {item.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${open ? 'text-[#a37700]' : 'text-[#7a7a7a]'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 lg:px-6 pb-5 pt-0 pl-[3.5rem] text-[#4a4a4a] text-sm font-body leading-relaxed border-t border-[rgba(230,184,0,0.1)]">
              <div className="pt-4">{item.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#f5f0e4] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-10 h-px bg-[#e6b800]" />
            <span className="font-mono text-xs text-[#a37700] tracking-[0.25em] uppercase">
              Got Questions?
            </span>
            <div className="w-10 h-px bg-[#e6b800]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl lg:text-6xl font-bold text-[#1a1a1a]"
          >
            Frequently Asked
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-[#7a7a7a] font-body"
          >
            Everything you need to know before your visit.
          </motion.p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              open={openIdx === i}
              toggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center p-6 border border-[rgba(230,184,0,0.25)] bg-white rounded-sm shadow-card"
        >
          <p className="text-[#4a4a4a] font-body text-sm mb-4">
            Still have questions? We're happy to help!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/91${brand.whatsapp}?text=Hi!%20I%20have%20a%20question%20about%20Eva's%20Beauty%20Care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1a1a1a] text-[#e6b800] text-sm font-body font-medium rounded-sm hover:bg-[#2a2a2a] transition-colors"
            >
              Ask on WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-5 py-2.5 border border-[rgba(0,0,0,0.15)] text-[#1a1a1a] text-sm font-body font-medium rounded-sm hover:border-[#a37700] transition-colors"
            >
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
