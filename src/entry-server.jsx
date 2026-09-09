import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Ponto de entrada do pré-render (SSR). Usado só em build, por
// scripts/prerender.mjs — nunca é carregado no navegador, então não importa
// o CSS global (isso é feito por src/main.jsx no cliente). Qualquer código de
// terceiros que dependa de `window`/`document` (ex.: @vercel/analytics/react)
// já é seguro fora do navegador: renderiza `null` em vez de estourar.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
