/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens:{'2lg':'1200px','lg': '1024px',
  "md": '768px',
   'sm':'400px'},
    
    extend: {
      
    },

  },
  plugins: [],
}

