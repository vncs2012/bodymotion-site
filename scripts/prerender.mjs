#!/usr/bin/env node
// Pré-render de dist/index.html.
//
// Abordagem escolhida: este script RODA o build SSR sozinho (via
// child_process), em vez de depender de um passo separado no package.json.
// Assim "npm run build" continua sendo um único comando:
//
//   vite build && node scripts/prerender.mjs
//
// 1. `vite build` (fora deste arquivo, já rodou antes deste script) gera o
//    bundle do cliente em dist/.
// 2. Este script chama `vite build --ssr src/entry-server.jsx --outDir
//    dist-ssr` para gerar o bundle do servidor, importa a função render() de
//    lá, renderiza <App /> com renderToString e injeta o HTML resultante
//    dentro de `<div id="root">...</div>` em dist/index.html — substituindo o
//    bloco estático de fallback (que continua no repositório para `npm run
//    dev` sem build e para clientes sem JavaScript, mas nunca deve ser o que
//    chega ao ar em produção).
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distIndexPath = path.join(rootDir, "dist", "index.html");
const ssrOutDir = path.join(rootDir, "dist-ssr");

function fail(message) {
  console.error(`[prerender] ${message}`);
  process.exit(1);
}

// Acha o `</div>` que fecha exatamente `<div id="root">`, contando
// profundidade (e não só o primeiro `</div>` encontrado), já que o HTML
// renderizado por dentro pode ter divs aninhadas.
function findRootDivContent(html) {
  const openTag = '<div id="root">';
  const startIdx = html.indexOf(openTag);
  if (startIdx === -1) {
    fail('não encontrei <div id="root"> em dist/index.html.');
  }
  const contentStart = startIdx + openTag.length;

  const tagRe = /<div\b[^>]*>|<\/div>/gi;
  tagRe.lastIndex = contentStart;
  let depth = 1;
  let match;
  while ((match = tagRe.exec(html)) !== null) {
    if (match[0].toLowerCase() === "</div>") {
      depth -= 1;
      if (depth === 0) {
        return { contentStart, contentEnd: match.index };
      }
    } else {
      depth += 1;
    }
  }
  fail('não encontrei o </div> que fecha <div id="root"> em dist/index.html.');
  return null; // inalcançável — fail() já chamou process.exit(1)
}

if (!existsSync(distIndexPath)) {
  fail(`dist/index.html não encontrado (${distIndexPath}). Rode "vite build" antes do pré-render.`);
}

console.log("[prerender] gerando bundle SSR: vite build --ssr src/entry-server.jsx --outDir dist-ssr");
const viteBin = path.join(rootDir, "node_modules", ".bin", "vite");
try {
  if (existsSync(viteBin)) {
    execFileSync(viteBin, ["build", "--ssr", "src/entry-server.jsx", "--outDir", "dist-ssr"], {
      cwd: rootDir,
      stdio: "inherit",
    });
  } else {
    execFileSync(
      "npx",
      ["--no-install", "vite", "build", "--ssr", "src/entry-server.jsx", "--outDir", "dist-ssr"],
      { cwd: rootDir, stdio: "inherit" },
    );
  }
} catch (error) {
  fail(`build SSR falhou (${error.message}).`);
}

const ssrFiles = existsSync(ssrOutDir) ? readdirSync(ssrOutDir) : [];
const entryFile = ssrFiles.find((file) => /^entry-server\.(m?js|cjs)$/.test(file));
if (!entryFile) {
  fail(
    `não encontrei o bundle SSR em ${ssrOutDir} (arquivos presentes: ${ssrFiles.join(", ") || "nenhum"}).`,
  );
}

const entryPath = path.join(ssrOutDir, entryFile);
let render;
try {
  ({ render } = await import(pathToFileURL(entryPath).href));
} catch (error) {
  fail(`falha ao importar ${entryFile}: ${error.message}`);
}
if (typeof render !== "function") {
  fail(`${entryFile} não exporta a função render().`);
}

let renderedHtml;
try {
  renderedHtml = render();
} catch (error) {
  fail(`render() lançou um erro: ${error.stack || error.message}`);
}

if (typeof renderedHtml !== "string" || !renderedHtml.includes("<h1")) {
  fail(
    "o HTML renderizado por render() não contém <h1 — abortando para não publicar uma página sem título.",
  );
}

const originalHtml = readFileSync(distIndexPath, "utf-8");
const { contentStart, contentEnd } = findRootDivContent(originalHtml);
const finalHtml = originalHtml.slice(0, contentStart) + renderedHtml + originalHtml.slice(contentEnd);

writeFileSync(distIndexPath, finalHtml, "utf-8");
console.log(
  `[prerender] dist/index.html atualizado com o HTML renderizado (${renderedHtml.length} caracteres).`,
);
