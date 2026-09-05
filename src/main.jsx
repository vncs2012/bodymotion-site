import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource-variable/manrope/wght.css";
import "./styles/globals.css";

// Marca a página como "com JavaScript" para o CSS (globals.css escopa
// .reveal-init sob html.js): o HTML pré-renderizado nunca deve esconder
// conteúdo antes do JavaScript assumir.
document.documentElement.classList.add("js");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
