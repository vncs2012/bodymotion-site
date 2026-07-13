/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        bodymotion: {
          navy: "#043873",
          blue: "#4F9CF9",
          sky: "#A7CEFC",
          yellow: "#FFE492",
          ink: "#212529",
          cyan: "#4F9CF9",
          teal: "#10A37F",
          midnight: "#071D3A",
        },
      },
      boxShadow: {
        glass: "0 18px 45px -28px rgba(4,56,115,0.36)",
        "glass-lg": "0 26px 64px -34px rgba(4,56,115,0.42)",
      },
      animation: {
        floaty: "floaty 18s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-18px,0) scale(1.06)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
