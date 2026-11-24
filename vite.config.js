import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig(({ mode, command, isSsrBuild }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const release = env.VERCEL_GIT_COMMIT_SHA || env.VITE_RUSTRAK_RELEASE || "";
  const mapas = command === "build" && mode === "production" && !isSsrBuild && !!env.RUSTRAK_SOURCEMAP_TOKEN;
  return {
    define: { "import.meta.env.VITE_RUSTRAK_RELEASE": JSON.stringify(release) },
    plugins: [react(), mapas && sentryVitePlugin({
      url: "https://logs.bodymotion.pro", org: "bodymotion", project: "bodymotion-site",
      authToken: env.RUSTRAK_SOURCEMAP_TOKEN, telemetry: false,
      release: { name: release || undefined, create: false, finalize: false },
      sourcemaps: { filesToDeleteAfterUpload: ["./dist/**/*.map"] },
    })],
    build: { sourcemap: mapas ? "hidden" : false },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_PROXY_TARGET || "http://127.0.0.1:8000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
