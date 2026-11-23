/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        classic: {
          navy: '#0F2537',
          navyLight: '#1B3B57',
          gold: '#C9962B',
          goldBright: '#E5B94C',
          ivory: '#FCFBF7',
          sand: '#F5F1E6',
          mint: '#2EC4B6',
          ink: '#000000',
        }
      },
      animation: {
        'cta-blink': 'ctaBlink 2s ease-in-out infinite',
        'pulse-classic': 'pulseClassic 5s ease-in-out infinite',
      },
      keyframes: {
        ctaBlink: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 0 4px #374151, 0 8px 20px rgba(31, 41, 55, 0.45)',
          },
          '50%': {
            opacity: '0.45',
            transform: 'scale(0.98)',
            boxShadow: '0 0 0 6px #111827, 0 12px 26px rgba(17, 24, 39, 0.65)',
          },
        },
        pulseClassic: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
};
