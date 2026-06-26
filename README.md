# EVA'S BEAUTY CARE — Website

Premium beauty care website for EVA'S BEAUTY CARE, Barmer, Rajasthan.

## Tech Stack

- **React** (JavaScript, no TypeScript)
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Lucide React** — icons

## Folder Structure

```
evas-beauty-care/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── logo.jpeg          ← EVA'S BEAUTY CARE logo
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   ├── CTAStrip.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQ.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   └── FloatingActions.jsx
│   │   ├── Hero.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── siteContent.js     ← ALL content/config here
│   ├── hooks/
│   │   └── useScrollSpy.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
└── package.json
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts — framework auto-detected as Vite
```

Or connect your GitHub repo at https://vercel.com

## Deploy to Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Or drag & drop the `dist/` folder at https://netlify.com/drop

## Customisation

All content lives in `src/data/siteContent.js`:
- Change phone, WhatsApp, email, address
- Update services, prices, testimonials, FAQs
- All WhatsApp messages auto-update from this file

## Features

- ✅ Sticky glassmorphism navbar with scroll spy
- ✅ Animated hero with staggered entrance
- ✅ Marquee strip (pauses on hover)
- ✅ Glossy premium service cards (each with WhatsApp enquiry + View Prices)
- ✅ About section with feature cards
- ✅ Gold CTA strip with pulse animation
- ✅ Testimonial carousel with side list
- ✅ FAQ accordion with smooth height animation
- ✅ Contact form → opens WhatsApp with pre-filled message
- ✅ Dark footer with gold top line
- ✅ Floating WhatsApp action button
- ✅ Grain overlay for premium texture
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Keyboard accessible + ARIA labels
- ✅ Respects prefers-reduced-motion

## Contact Details in Use

- Phone: 7790940252
- WhatsApp: 7790940252
- Email: evasbeautycare.barmer@gmail.com
- Address: Vishwakarma Circle, Rai Colony, Barmer, Rajasthan
