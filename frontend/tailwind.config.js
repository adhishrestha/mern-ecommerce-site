/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        "primary": "#3A3845",
        "primaryMuted": "#595667", 
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
