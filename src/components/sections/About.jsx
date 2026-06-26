import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Heart, MessageCircle } from 'lucide-react'
import { about, brand } from '../../data/siteContent'

const iconMap = { Shield: ShieldCheck, Sparkles, Heart, MessageCircle }

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 ruled-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-10 h-px bg-[#e6b800]" />
              <span className="font-mono text-xs text-[#e6b800]/70 tracking-[0.25em] uppercase">
                {about.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              {about.title}{' '}
              <span className="italic gold-text">{about.titleItalic}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-white/60 font-body text-base leading-relaxed"
            >
              {about.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={`https://wa.me/91${brand.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 btn-gold text-[#1a1a1a] text-sm font-body font-semibold rounded-sm hover-lift"
              >
                Book an Appointment
              </a>
              <span className="text-white/30 text-sm font-body">{brand.hours}</span>
            </motion.div>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.features.map((feat, i) => {
              const Icon = iconMap[feat.icon]
              return (
                <motion.div
                  key={feat.title}
                  custom={i}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 border border-[rgba(230,184,0,0.12)] bg-[rgba(230,184,0,0.03)] rounded-sm hover:border-[rgba(230,184,0,0.35)] hover:bg-[rgba(230,184,0,0.06)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-[rgba(230,184,0,0.1)] border border-[rgba(230,184,0,0.2)] rounded-sm flex items-center justify-center mb-4 group-hover:bg-[rgba(230,184,0,0.18)] transition-colors">
                    {Icon && <Icon className="w-5 h-5 text-[#e6b800]" />}
                  </div>
                  <h4 className="font-display text-base font-bold text-white mb-2">{feat.title}</h4>
                  <p className="text-white/50 text-xs font-body leading-relaxed">{feat.desc}</p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
