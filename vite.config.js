import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    // Preserva os navegadores-alvo do Vite 5 durante a atualizacao.
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
  },
  server: {
    proxy: {
      "/api": {
        target: loadEnv(mode, process.cwd(), "VITE_").VITE_API_PROXY_TARGET || "http://127.0.0.1:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
}));
