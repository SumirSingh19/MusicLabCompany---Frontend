/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero-pattern' : "url('https://themusiccablecompany.com/wp-content/themes/mtc-child/images/shop_category.png')",
      }
    },
  },
  plugins: [],
}