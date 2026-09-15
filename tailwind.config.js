/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        subtle: '#5a5a5a',
        muted: '#8F8F8F',
        borderSubtle: '#0000001a',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Satoshi', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'inset-top': 'inset 0px 3px 0px 0px rgb(255, 255, 255)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
