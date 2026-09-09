/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bricolage Grotesque Variable'", "'Bricolage Grotesque'", "sans-serif"],
        body: ["'Manrope Variable'", "Manrope", "sans-serif"],
      },
      colors: {
        bm: {
          ink: "#22255a", // navy oficial da logomarca
          night: "#15173f", // navy profundo p/ seções escuras
          deep: "#2b2e6b", // navy elevado (superfícies em seção escura)
          cyan: "#50b4e6", // ciano oficial da logomarca — cor única de ação
          "cyan-hover": "#3ea8e0", // hover do botão primário (texto navy, 5,3:1)
          "cyan-deep": "#2b95cc", // bordas/ícones do ciano — nunca texto pequeno sobre branco
          "cyan-soft": "#eaf5fc", // tint de apoio
          paper: "#f6f9fd", // fundo claro padrão
          mist: "#dfe9f4", // linhas e bordas suaves
          slate: "#565d85", // texto secundário
        },
      },
      maxWidth: {
        shell: "76rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(34,37,90,0.06), 0 12px 32px -18px rgba(34,37,90,0.25)",
        frame:
          "0 1px 3px rgba(34,37,90,0.08), 0 32px 72px -36px rgba(34,37,90,0.45)",
        cta: "0 14px 30px -16px rgba(43,149,204,0.75)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "trace-line": {
          from: { strokeDashoffset: "var(--trace-length, 600)" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
        "trace-line": "trace-line 1.1s cubic-bezier(0.55,0,0.25,1) forwards",
      },
    },
  },
  plugins: [],
};
