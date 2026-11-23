/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f4f2ee',
          light: '#faf9f6',
          dark: '#eae7e1',
          watermark: '#ebe7de',
        },
        ink: {
          DEFAULT: '#191919',
          muted: '#8b8881',
          faint: '#b5b2aa',
        },
        dock: {
          DEFAULT: '#0a0a0a',
          card: '#161616',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Bodoni Moda"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Bodoni Moda"', '"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        widest: '0.12em',
      }
    },
  },
  plugins: [],
}
