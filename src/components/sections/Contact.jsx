import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { brand, contact, services } from '../../data/siteContent'

const serviceOptions = [
  'Skin Service', 'Body Service', 'Makeup', 'Hair Service',
  'Bridal Makeup', 'Hair Spa', 'Facial & Glow', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter valid 10-digit mobile number'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})

    const msg = `Hi! I'd like to book an appointment at Eva's Beauty Care.

*Name:* ${form.name}
*Mobile:* ${form.phone}
*Service:* ${form.service || 'Not specified'}
*Message:* ${form.message}

Please confirm my booking. Thank you!`

    window.open(
      `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank',
    )
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }) }, 4000)
  }

  const handleChange = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((err) => ({ ...err, [k]: '' }))
  }

  const contactItems = [
    { icon: Phone, label: 'Call Us', value: brand.phone, href: `tel:${brand.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: `+91 ${brand.whatsapp}`, href: `https://wa.me/91${brand.whatsapp}` },
    { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
    { icon: MapPin, label: 'Location', value: brand.address, href: `https://maps.google.com/?q=${encodeURIComponent(brand.mapQuery)}` },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 ruled-bg opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-10 h-px bg-[#e6b800]" />
              <span className="font-mono text-xs text-[#e6b800]/70 tracking-[0.25em] uppercase">
                {contact.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              {contact.title}{' '}
              <span className="italic gold-text">{contact.titleItalic}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 font-body mb-10 leading-relaxed"
            >
              {contact.subtitle}
            </motion.p>

            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-[rgba(230,184,0,0.1)] border border-[rgba(230,184,0,0.2)] rounded-sm flex items-center justify-center group-hover:bg-[rgba(230,184,0,0.2)] transition-colors">
                    <Icon className="w-4 h-4 text-[#e6b800]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#e6b800]/50 tracking-[0.2em] uppercase">
                      {label}
                    </div>
                    <div className="font-body text-sm text-white/70 group-hover:text-white transition-colors leading-snug mt-0.5">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-5 border border-[rgba(230,184,0,0.15)] bg-[rgba(230,184,0,0.03)] rounded-sm"
            >
              <div className="font-mono text-xs text-[#e6b800]/60 tracking-[0.2em] uppercase mb-2">
                Working Hours
              </div>
              <div className="font-body text-sm text-white/70">{brand.hours}</div>
            </motion.div>

            {/* Map embed placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <iframe
                title="EVA'S BEAUTY CARE Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.mapQuery)}&output=embed&z=15`}
                className="w-full h-48 rounded-sm border border-[rgba(230,184,0,0.15)] grayscale opacity-80"
                loading="lazy"
                allowFullScreen
              />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(230,184,0,0.15)] rounded-sm p-6 lg:p-8">
              <h3 className="font-display text-xl text-white font-bold mb-6">
                Book an Appointment
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <CheckCircle className="w-14 h-14 text-[#e6b800]" />
                  <h4 className="font-display text-xl text-white font-bold">
                    Opening WhatsApp!
                  </h4>
                  <p className="text-white/60 text-sm font-body">
                    Your booking message has been prepared. Complete the booking on WhatsApp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-xs font-body font-medium text-[#e6b800]/70 tracking-wide mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-4 py-3 bg-white border rounded-sm font-body text-[#1a1a1a] text-sm outline-none transition-all duration-200 placeholder:text-[#aaa] ${
                          errors.name
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[rgba(0,0,0,0.12)] focus:border-[#a37700] focus:shadow-[0_0_0_3px_rgba(163,119,0,0.1)]'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label htmlFor="phone" className="block text-xs font-body font-medium text-[#e6b800]/70 tracking-wide mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        placeholder="10-digit number"
                        maxLength={10}
                        className={`w-full px-4 py-3 bg-white border rounded-sm font-body text-[#1a1a1a] text-sm outline-none transition-all duration-200 placeholder:text-[#aaa] ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[rgba(0,0,0,0.12)] focus:border-[#a37700] focus:shadow-[0_0_0_3px_rgba(163,119,0,0.1)]'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-body font-medium text-[#e6b800]/70 tracking-wide mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={handleChange('service')}
                      className="w-full px-4 py-3 bg-white border border-[rgba(0,0,0,0.12)] rounded-sm font-body text-[#1a1a1a] text-sm outline-none focus:border-[#a37700] focus:shadow-[0_0_0_3px_rgba(163,119,0,0.1)] transition-all"
                    >
                      <option value="">Select a service (optional)</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-body font-medium text-[#e6b800]/70 tracking-wide mb-1.5">
                      Message / Preferred Time *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="e.g. I'd like a facial on Saturday morning..."
                      className={`w-full px-4 py-3 bg-white border rounded-sm font-body text-[#1a1a1a] text-sm outline-none transition-all duration-200 resize-none placeholder:text-[#aaa] ${
                        errors.message
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-[rgba(0,0,0,0.12)] focus:border-[#a37700] focus:shadow-[0_0_0_3px_rgba(163,119,0,0.1)]'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 btn-gold text-[#1a1a1a] font-body font-semibold text-sm rounded-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#e6b800] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-white/30 text-xs font-body">
                    Or WhatsApp us directly at{' '}
                    <a
                      href={`https://wa.me/91${brand.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e6b800]/70 hover:text-[#e6b800] transition-colors"
                    >
                      +91 {brand.whatsapp}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
