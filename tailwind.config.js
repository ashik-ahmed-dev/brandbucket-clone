/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
      },
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#6366F1',
        secondary: '#EC4899',
        black: '#2f2f2f',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
        title: '#1E1F48',
        body: '#333',
        heading: '#3b82f6',
        gray: {
          50: '#F8F7FF',
          100: '#F6F5FF',
          200: '#EFF0FE',
          300: '#E0E0FC',
          400: '#98A5C0',
          500: '#84848F',
          600: '#595983',
          700: '#1E1F48',
          800: '#141430',
          900: '#0A0A18',
        },
      },

      fontFamily : {
        sans : ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

