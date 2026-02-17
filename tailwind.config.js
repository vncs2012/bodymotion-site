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
          cyan: "#22d3ee",
          teal: "#0d9488",
          midnight: "#0b1220",
        },
      },
      boxShadow: {
        glass: "0 18px 40px -24px rgba(13,148,136,0.55)",
        "glass-lg": "0 24px 50px -16px rgba(13,148,136,0.45)",
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
