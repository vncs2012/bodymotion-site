// Liga/desliga o uso de screenshots reais do produto na landing.
//
// false -> a landing usa as composições ilustrativas (src/components/mock/)
// true  -> usa os PNGs de public/screens/, capturados por scripts/capture-screens.mjs
//
// Depois de rodar o script de captura, mude para true e confira a página.
// Se algum arquivo estiver faltando, aquele módulo volta sozinho para a
// composição ilustrativa — não quebra a página.
export const USE_SCREENSHOTS = false;

/** módulo (id em landing.js) -> arquivo em public/screens/ */
export const MODULE_SCREENSHOTS = {
  clinica: "/screens/dashboard.png",
  nutricao: "/screens/prescricao.png",
  antropometria: "/screens/antropometria.png",
  treinos: "/screens/treinos.png",
  agenda: "/screens/agenda.png",
  relacionamento: "/screens/clinica.png",
  operacao: "/screens/relatorios.png",
  // portal do paciente exige sessão do paciente (OTP); segue ilustrativo
};

export const HERO_SCREENSHOT = "/screens/dashboard.png";

export function screenshotFor(moduleId) {
  if (!USE_SCREENSHOTS) return null;
  return MODULE_SCREENSHOTS[moduleId] ?? null;
}

export function heroScreenshot() {
  return USE_SCREENSHOTS ? HERO_SCREENSHOT : null;
}
