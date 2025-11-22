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
        // The "Myrtle" Greens
        myrtle: {
          900: '#0f1f15', // Deepest forest (Background)
          800: '#1a3324', // Card background
          500: '#4a7a5d', // Primary buttons/accents
        },
        // The "Mist" Colors
        mist: {
          100: '#e8f3f1', // Text highlights
          200: '#cce3de', // Secondary text
          500: '#a4c3b2', // Borders/Subtle lines
        },
        // The "Spirit" Accent
        spirit: {
          gold: '#d4c4a8', // Elegant accent
        }
      },
      backgroundImage: {
        'gradient-mist': 'linear-gradient(to top, #0f1f15, #1a3324)',
      },
    },
  },
  plugins: [],
}
export default config
