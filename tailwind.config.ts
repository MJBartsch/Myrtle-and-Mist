import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Botanical Mode (Greens)
        myrtle: {
          900: '#0f1f15', // Deep Forest
          800: '#1a3324',
          500: '#4a7a5d',
        },
        // Esoteric Mode (Violets/Indigos)
        esoteric: {
          900: '#1a1025', // Deep Void
          800: '#2d1b4e',
          500: '#8b5cf6',
        },
        // Shared Neutrals
        mist: {
          100: '#e8f3f1', 
          200: '#cce3de', 
          500: '#a4c3b2', 
        },
        // Shared Accent
        spirit: {
          gold: '#d4c4a8', 
        }
      },
      backgroundImage: {
        'gradient-botanical': 'linear-gradient(to top, #0f1f15, #1a3324)',
        'gradient-esoteric': 'linear-gradient(to top, #1a1025, #2d1b4e)',
      },
    },
  },
  plugins: [],
}
export default config
