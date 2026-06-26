import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../../data/siteContent'

function StarRow({ count = 5, size = 'sm' }) {
  const cls = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${cls} fill-[#e6b800] text-[#e6b800]`} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#faf8f3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-[rgba(230,184,0,0.07)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-10 h-px bg-[#e6b800]" />
            <span className="font-mono text-xs text-[#a37700] tracking-[0.25em] uppercase">
              Happy Clients
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl font-bold text-[#1a1a1a]"
          >
            What They <span className="italic text-[#a37700]">Say</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Main testimonial */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-[rgba(230,184,0,0.2)] rounded-sm p-8 lg:p-10 relative overflow-hidden shadow-card"
              >
                <div className="absolute top-6 right-8 font-display text-8xl text-[rgba(230,184,0,0.1)] leading-none select-none">
                  "
                </div>
                <StarRow count={t.stars} size="md" />
                <p className="font-body text-xl lg:text-2xl text-[#1a1a1a] leading-relaxed mt-6 mb-8 font-light">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg text-[#e6b800] font-bold">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-body font-semibold text-[#1a1a1a]">{t.name}</div>
                    <div className="font-body text-sm text-[#7a7a7a]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-[rgba(0,0,0,0.15)] rounded-sm flex items-center justify-center hover:border-[#e6b800] hover:text-[#a37700] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 h-2 bg-[#e6b800]' : 'w-2 h-2 bg-[#d0d0d0] hover:bg-[#a37700]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-[rgba(0,0,0,0.15)] rounded-sm flex items-center justify-center hover:border-[#e6b800] hover:text-[#a37700] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-2 hidden lg:flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-sm border transition-all duration-300 ${
                  i === active
                    ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white'
                    : 'bg-white border-[rgba(230,184,0,0.15)] hover:border-[rgba(230,184,0,0.4)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 text-sm font-display font-bold ${
                      i === active ? 'bg-[#e6b800] text-[#1a1a1a]' : 'bg-[#f0ebe0] text-[#a37700]'
                    }`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className={`font-body font-semibold text-sm ${i === active ? 'text-white' : 'text-[#1a1a1a]'}`}>
                      {item.name}
                    </div>
                    <div className={`font-body text-xs ${i === active ? 'text-white/60' : 'text-[#7a7a7a]'}`}>
                      {item.role}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: item.stars }).map((_, s) => (
                      <Star key={s} className={`w-3 h-3 fill-current ${i === active ? 'text-[#e6b800]' : 'text-[#e6b800]'}`} />
                    ))}
                  </div>
                </div>
                <p className={`mt-2 text-xs font-body leading-relaxed line-clamp-2 ${i === active ? 'text-white/70' : 'text-[#7a7a7a]'}`}>
                  {item.text}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
