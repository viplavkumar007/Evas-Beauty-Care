/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f3',
        dark: '#111111',
        'dark-2': '#1a1a1a',
        gold: '#e6b800',
        'gold-deep': '#a37700',
        'gold-light': '#ffd000',
        'text-grey': '#4a4a4a',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e6b800, #ffd000, #a37700)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(230,184,0,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(230,184,0,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(230,184,0,0.25)',
        'gold-lg': '0 8px 60px rgba(230,184,0,0.3)',
        'card': '0 4px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 50px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
