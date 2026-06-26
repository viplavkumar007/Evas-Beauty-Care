import { motion } from 'framer-motion'
import { ArrowRight, Phone, MapPin, Sparkles } from 'lucide-react'
import { brand, hero, marqueeItems, stats } from '../data/siteContent'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background rules */}
      <div className="absolute inset-0 ruled-bg opacity-60 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[8%] right-[-8%] w-[600px] h-[600px] border border-[rgba(230,184,0,0.06)] rounded-full" />
        <div className="absolute top-[14%] right-[4%] w-[400px] h-[400px] border border-[rgba(230,184,0,0.05)] rounded-full" />
        <div className="absolute top-[22%] right-[14%] w-[220px] h-[220px] border border-[rgba(230,184,0,0.08)] rounded-full" />
      </div>

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e6b800] to-transparent opacity-70" />

      {/* Corner accents */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <div className="w-10 h-10 border-t-2 border-l-2 border-[rgba(230,184,0,0.35)]" />
      </div>
      <div className="absolute bottom-28 right-8 hidden lg:block">
        <div className="w-10 h-10 border-b-2 border-r-2 border-[rgba(230,184,0,0.35)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-4">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[rgba(230,184,0,0.3)] bg-[rgba(230,184,0,0.06)] rounded-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e6b800]" />
            <span className="text-[#e6b800] font-mono text-xs tracking-[0.2em] uppercase">
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div {...fadeLeft(0.2)}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.93] text-white mb-1">
              {hero.headline[0]}
            </h1>
          </motion.div>
          <motion.div {...fadeLeft(0.3)}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.93] italic mb-1">
              <span className="gold-text">{hero.headline[1]}</span>
            </h1>
          </motion.div>
          <motion.div {...fadeLeft(0.4)}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.93] text-white/35 mb-10">
              {hero.headline[2]}
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p {...fadeUp(0.5)}
            className="text-white/60 font-body text-lg lg:text-xl leading-relaxed max-w-xl mb-10"
          >
            {hero.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4 mb-12">
            <a
              href={hero.cta1.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 btn-gold text-[#1a1a1a] font-body font-semibold text-sm tracking-wide rounded-sm pulse-gold"
            >
              {hero.cta1.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={hero.cta2.href}
              className="inline-flex items-center gap-3 px-7 py-4 border border-[rgba(255,255,255,0.2)] text-white font-body font-medium text-sm tracking-wide rounded-sm hover:border-[#e6b800] hover:text-[#e6b800] active:scale-95 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              {hero.cta2.label}
            </a>
          </motion.div>

          {/* Address */}
          <motion.div {...fadeUp(0.7)}
            className="flex items-start gap-2 text-white/40 text-sm font-body"
          >
            <MapPin className="w-4 h-4 text-[#e6b800] mt-0.5 flex-shrink-0" />
            <span>{brand.address}</span>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 border-t border-[rgba(230,184,0,0.12)] bg-[rgba(230,184,0,0.04)] overflow-hidden py-3 mt-8"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-6 font-mono text-xs tracking-[0.3em] uppercase text-[#e6b800]/55"
            >
              {item}
              <span className="text-[#e6b800]/25">◆</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="relative z-10 border-t border-[rgba(230,184,0,0.12)] bg-[#111111]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-5 px-4 text-center ${
                  i < stats.length - 1 ? 'border-r border-[rgba(230,184,0,0.1)]' : ''
                }`}
              >
                <div className="font-display text-2xl lg:text-3xl text-[#e6b800] font-bold">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-white/40 tracking-wide uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
