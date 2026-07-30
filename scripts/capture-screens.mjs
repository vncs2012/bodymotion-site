#!/usr/bin/env node
/**
 * Captura as telas reais do painel para usar na landing page.
 *
 * Uso:
 *   npx playwright install chromium         # só na primeira vez
 *   BM_PANEL_URL=http://localhost:8080 \
 *   BM_USER=demo.landing \
 *   BM_PASS='sua-senha' \
 *   node scripts/capture-screens.mjs
 *
 * As imagens vão para public/screens/. Depois disso, cada seção da landing passa
 * a usar o screenshot em vez da composição ilustrativa (ver USE_SCREENSHOTS em
 * src/data/screens.js).
 *
 * IMPORTANTE (LGPD): use SEMPRE uma conta de demonstração com pacientes
 * fictícios. Nunca capture telas com nome, e-mail, telefone ou CPF de paciente
 * real — essas imagens vão para uma página pública.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const PANEL = (process.env.BM_PANEL_URL || "http://localhost:8080").replace(/\/$/, "");
const USER = process.env.BM_USER;
const PASS = process.env.BM_PASS;
const OUT = path.resolve(import.meta.dirname, "../public/screens");

if (!USER || !PASS) {
  console.error("Defina BM_USER e BM_PASS (conta de demonstração com dados fictícios).");
  process.exit(1);
}

/** Telas a capturar: [arquivo, rota, espera opcional] */
const SHOTS = [
  ["dashboard", "/", "Início"],
  ["agenda", "/agendamento", null],
  ["pacientes", "/cadastros/pacientes", null],
  ["antropometria", "/prontuario/antropometria", null],
  ["prescricao", "/prontuario/prescricao", null],
  ["treinos", "/treinos", null],
  ["clinica", "/clinica", null],
  ["relatorios", "/relatorios", null],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2, // retina: imagem nítida quando reduzida na página
    locale: "pt-BR",
    timezoneId: "America/Sao_Paulo",
  });
  const page = await context.newPage();

  console.log(`→ login em ${PANEL}`);
  await page.goto(`${PANEL}/login`, { waitUntil: "networkidle" });
  await page.getByRole("textbox", { name: /usuário/i }).fill(USER);
  await page.getByRole("textbox", { name: /senha/i }).fill(PASS);
  await page.getByRole("button", { name: /^entrar$/i }).click();
  await page.waitForURL((url) => !url.pathname.includes("/login"), { timeout: 30_000 });
  console.log("✓ autenticado");

  for (const [name, route, waitText] of SHOTS) {
    try {
      await page.goto(`${PANEL}${route}`, { waitUntil: "networkidle" });
      if (waitText) {
        await page.getByText(waitText, { exact: false }).first().waitFor({ timeout: 10_000 });
      }
      await sleep(1800); // deixa gráficos/animações assentarem
      const file = path.join(OUT, `${name}.png`);
      await page.screenshot({ path: file, scale: "css" });
      console.log(`✓ ${name}.png`);
    } catch (err) {
      console.warn(`✗ ${name}: ${err.message.split("\n")[0]}`);
    }
  }

  await browser.close();
  console.log(`\nPronto. Imagens em public/screens/`);
  console.log("Agora ligue-as na landing: em src/data/screens.js, mude USE_SCREENSHOTS para true.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
