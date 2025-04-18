/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollImg: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        'scroll-img': 'scrollImg 15s linear infinite',
      },
    },
  },
  plugins: [],
}

