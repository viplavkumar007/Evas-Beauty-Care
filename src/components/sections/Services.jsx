import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { services, contact, brand } from '../../data/siteContent'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function ServiceCard({ service }) {
  const waHref = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group relative glossy-card rounded-sm overflow-hidden transition-all duration-400 cursor-pointer"
    >
      {/* Top shimmer line */}
      <div className="h-[2px] bg-gradient-to-r from-[#e6b800] via-[#ffd000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6">
        {/* Emoji + Price badge row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-3xl mb-3 filter drop-shadow-sm">{service.emoji}</div>
            <h3 className="font-display text-xl font-bold text-[#1a1a1a] leading-tight group-hover:text-[#a37700] transition-colors">
              {service.title}
            </h3>
            <p className="text-[#7a7a7a] text-sm font-body mt-2 leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="flex-shrink-0 ml-4">
            <div className="px-3 py-1.5 bg-[#1a1a1a] rounded-sm shadow-sm">
              <span className="text-[#e6b800] font-mono text-xs font-medium whitespace-nowrap">
                From {service.price}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#1a1a1a] text-[#e6b800] text-xs font-body font-semibold rounded-sm hover:bg-[#e6b800] hover:text-[#1a1a1a] transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Enquire Now
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-[rgba(230,184,0,0.4)] text-[#a37700] text-xs font-body font-semibold rounded-sm hover:bg-[rgba(230,184,0,0.08)] transition-all duration-200"
          >
            View Prices
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#faf8f3] relative overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-48 h-48 border-b border-r border-[rgba(230,184,0,0.08)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border-t border-l border-[rgba(230,184,0,0.08)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-10 h-px bg-[#e6b800]" />
            <span className="font-mono text-xs text-[#a37700] tracking-[0.25em] uppercase">
              What We Offer
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight"
            >
              Our <span className="italic text-[#a37700]">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md text-[#7a7a7a] font-body text-base leading-relaxed lg:text-right"
            >
              Skin, body, makeup and hair — every treatment crafted with care, precision and premium products.
            </motion.p>
          </div>
        </div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Price note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-[#7a7a7a] font-body max-w-2xl mx-auto leading-relaxed"
        >
          {contact.priceNote}
        </motion.p>
      </div>
    </section>
  )
}
