/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        backgroundImage: {
          'hero-pattern': `url('/abstract.svg')`,
        },
      },
    },
    plugins: [],
  }
  