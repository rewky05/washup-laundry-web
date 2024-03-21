/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    
    colors: {
      red: "#DD0202",
      yellow: "#ffff00",
      white: "#FFFFFFFF",
      black: "#000",
      lightred: "#F08494",
      pink: "#FFD6D6",
      strongpink: "#FF4848",
    },
    screens: {
      xs: "280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  
  plugins: [],
};
