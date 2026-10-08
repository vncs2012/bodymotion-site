// Capturas reais do produto em public/screens/.
// Chaves "launch*": componentes atuais do painel capturados
// em 07/10/2026 numa entrada isolada, com dados inteiramente fictícios.
// As demais capturas anteriores ficam preservadas para o site completo.
// Cada imagem declara suas dimensões.
export const USE_SCREENSHOTS = true;

export const SCREENS = {
  launchHome: {
    src: "/screens/home-demo-atual.jpg",
    width: 1600,
    height: 900,
    label: "Sua rotina",
    alt: "Home atual do Bodymotion com agenda preenchida, prioridades e gráfico de atividade clínica; dados fictícios",
    title: "Sua rotina no Bodymotion",
    caption: "Agenda, prioridades e evolução. Tudo à vista.",
  },
  launchPatient: {
    src: "/screens/prontuario-demo-atual.jpg",
    width: 1600,
    height: 900,
    label: "Prontuário",
    alt: "Prontuário atual do Bodymotion com histórico, adesão e próxima consulta de uma paciente fictícia",
    title: "O cuidado de cada paciente",
    caption: "Um histórico completo para acompanhar de perto.",
  },
  launchConsultation: {
    src: "/screens/consulta-demo-atual.jpg",
    width: 1600,
    height: 900,
    label: "Consulta",
    alt: "Consulta de demonstração no Bodymotion com evolução, anamnese, avaliação e prescrição vinculadas; dados fictícios",
    title: "Uma consulta, todo o cuidado",
    caption: "Anamnese, avaliação e prescrição no mesmo atendimento.",
  },
  launchEvolution: {
    src: "/screens/evolucao-demo-atual.jpg",
    width: 1600,
    height: 900,
    label: "Evolução",
    alt: "Evolução física no Bodymotion com seis avaliações, indicadores e gráficos de uma paciente fictícia",
    title: "A evolução em cada avaliação",
    caption: "Medidas e gráficos para acompanhar cada conquista.",
  },
  launchDiet: {
    src: "/screens/dieta-demo-atual.jpg",
    width: 1600,
    height: 900,
    label: "Dieta",
    alt: "Plano alimentar de demonstração com refeições, porções e substituições; dados fictícios",
    title: "O plano alimentar do paciente",
    caption: "Refeições, porções e substituições em um plano claro.",
  },
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

export function getLaunchScreens() {
  return ["launchHome", "launchConsultation", "launchPatient", "launchEvolution", "launchDiet"].map(getScreen).filter(Boolean);
}
