import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import CTAStrip from './components/sections/CTAStrip'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/ui/FloatingActions'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#faf8f3]">
      {/* Grain overlay for premium texture */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <CTAStrip />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}
