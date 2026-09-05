// Capturas reais do produto usadas na landing (public/screens/, WebP).
// Todas vêm da conta de demonstração "Ana Duarte" (pacientes fictícios).
//
// Dimensões conferidas nos arquivos (scripts/capture-screens.mjs mantém a
// receita de recaptura): as de desktop são 1200×633, as de celular variam —
// por isso cada chave carrega width/height junto com o caminho, para que
// todo <img> declare as dimensões reais e evite CLS.
export const USE_SCREENSHOTS = true;

export const SCREENS = {
  hero: { src: "/screens/tela-paciente360.webp", width: 1200, height: 633 },
  heroMobile: { src: "/screens/detalhe-cuidado.webp", width: 900, height: 407 },
  atender: { src: "/screens/tela-consulta.webp", width: 1200, height: 633 },
  avaliar: { src: "/screens/tela-avaliacao.webp", width: 1200, height: 633 },
  avaliarMobile: { src: "/screens/detalhe-dobras.webp", width: 900, height: 707 },
  prescrever: { src: "/screens/tela-cuidado.webp", width: 1200, height: 633 },
  prescreverMobile: { src: "/screens/detalhe-treino.webp", width: 900, height: 258 },
  acompanhar: { src: "/screens/tela-clinica.webp", width: 1200, height: 633 },
};

/**
 * Retorna os dados de uma captura (src/width/height) ou null se a chave não
 * existir ou USE_SCREENSHOTS estiver desligado — quem consome decide o que
 * fazer (ProductFrame exige screenshot; nunca deve receber null em produção).
 */
export function getScreen(key) {
  if (!USE_SCREENSHOTS) return null;
  return SCREENS[key] ?? null;
}
