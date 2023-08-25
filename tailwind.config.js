/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'camp': "url('./assets/nature2.jpg')",
      'coupl': "url('./assets/wherego/3.jpg')",
    },
    extend: {},
  },
  plugins: [],
}

