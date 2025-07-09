/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F855A', // Grün für Golf
        'secondary': '#276749',
        'background': '#F7FAFC',
        'surface': '#FFFFFF',
        'text': '#1A202C',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      minHeight: {
        'touch': '3rem',
      },
      fontSize: {
        'xxl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
} 