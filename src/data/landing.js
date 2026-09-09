// Conteúdo editorial do site. Toda afirmação aqui deve ser defensável
// contra o produto real — ver AUDITORIA_PRODUTO_REAL_BODYMOTION.md e
// docs/product/SITE_REDESIGN_ANALISE_E_PROPOSTA.md antes de alterar claims.
// Copy espelhada nas pranchas de docs/design/site/ (Main.dc.html e
// Mobile.dc.html são a fonte da verdade textual).

// Faixa de 4 fatos logo abaixo do hero.
export const HERO_FACTS = [
  {
    title: "Macros na tabela TACO",
    detail: "Macros calculados automaticamente na base brasileira",
  },
  {
    title: "Portal do paciente sem app",
    detail: "Acesso por código de uso único, no navegador",
  },
  {
    title: "Teleconsulta com TCLE",
    detail: "Vídeo integrado e consentimento registrado",
  },
  {
    title: "Pensado para a LGPD",
    detail: "Permissões por papel, consentimento e trilhas de auditoria",
  },
];

// "Como funciona" — 3 passos, sem círculos numerados (número embutido no título).
export const STEPS = [
  {
    title: "1 · Cadastre o paciente",
    detail: "Dados, anamnese digital e histórico inicial em minutos, com pacotes de perguntas reutilizáveis.",
  },
  {
    title: "2 · Avalie, prescreva e envie",
    detail: "Medidas, fotos, plano alimentar e treino saem do mesmo atendimento e chegam ao paciente em PDF ou pelo portal.",
  },
  {
    title: "3 · Acompanhe entre as consultas",
    detail: "Diário, check-ins de treino, retorno e feedback aparecem na ficha, e o próximo passo fica visível.",
  },
];

// "Plataforma por objetivo" — 4 linhas alternadas (chave = id em data/screens.js).
export const GROUPS = [
  {
    id: "atender",
    eyebrow: "Atender",
    title: "Atenda com o histórico inteiro na tela.",
    description: "A consulta reúne o que já foi registrado e sugere o próximo passo, sem trocar de sistema.",
    bullets: [
      "Prontuário e linha do tempo do paciente",
      "Anamnese digital e consulta estruturada (SOAP)",
      "Agenda com lembretes, teleconsulta e TCLE",
    ],
    screenshotKey: "atender",
    alt: "Consulta aberta no Bodymotion com registros do atendimento e próximo passo sugerido",
  },
  {
    id: "avaliar",
    eyebrow: "Avaliar",
    title: "Mostre a evolução com dados e fotos.",
    description: "Cada avaliação nasce comparada com a anterior. O paciente enxerga o resultado e tem motivo para continuar.",
    bullets: [
      "Antropometria com histórico e comparativos",
      "Fotos de evolução e captura remota por link seguro",
      "Medição por foto com IA, em beta",
    ],
    screenshotKey: "avaliar",
    screenshotKeyMobile: "avaliarMobile",
    alt: "Avaliação antropométrica no Bodymotion com dobras cutâneas e leituras anteriores lado a lado",
    altMobile: "Dobras cutâneas com leituras anteriores no Bodymotion",
  },
  {
    id: "prescrever",
    eyebrow: "Prescrever",
    title: "Prescreva dieta e treino em minutos.",
    description: "Escreva a refeição como sempre escreveu. Os macros saem calculados na tabela brasileira e o treino vai junto no mesmo plano.",
    bullets: [
      "Plano alimentar com macros calculados na TACO",
      "Treino com biblioteca de exercícios, RPE e check-ins",
      "PDF pronto e envio direto ao paciente",
    ],
    aiHighlight: {
      title: "A IA sugere. Você decide.",
      detail:
        "Em beta, a IA nutricional interpreta o texto e propõe correspondências; qualquer ambiguidade pede a sua revisão e nada chega ao paciente sem a sua validação.",
    },
    screenshotKey: "prescrever",
    screenshotKeyMobile: "prescreverMobile",
    alt: "Aba Cuidado do paciente no Bodymotion: última avaliação, plano de treino ativo e aderência",
    altMobile: "Plano de treino ativo com aderência no Bodymotion",
  },
  {
    id: "acompanhar",
    eyebrow: "Acompanhar",
    title: "Mantenha o paciente por perto entre as consultas.",
    description: "O que acontece fora do consultório deixa de ficar no escuro: o portal, o retorno e o feedback voltam para a mesma ficha.",
    bullets: [
      "Portal do paciente sem aplicativo, com dieta, treino e diário",
      "Protocolos, retorno e recompra acompanhados automaticamente",
      "Feedback do paciente por link seguro e conversa por WhatsApp",
    ],
    screenshotKey: "acompanhar",
    alt: "Acompanhamentos da clínica no Bodymotion: protocolos, planos e próximos vencimentos por paciente",
  },
];

// "Para quem é" — 3 cartões de uma frase.
export const PERSONAS = [
  {
    title: "Nutricionista",
    detail: "Prescrição calculada, fotos e medidas contando a história do paciente, e menos vaivém no WhatsApp.",
  },
  {
    title: "Clínica multidisciplinar",
    detail: "Prontuário central, permissões por papel, agenda da equipe e relatórios de retenção da clínica inteira.",
  },
  {
    title: "Educação física e avaliação",
    detail: "Antropometria com comparativos, treino com check-ins de RPE e evolução que o aluno acompanha pelo portal.",
  },
];

// "Confiança" — 3 cartões, cada um com frases curtas (sem marcador de check).
export const TRUST_CARDS = [
  {
    title: "Segurança e privacidade",
    items: [
      "Tráfego criptografado (HTTPS/TLS) e sessões protegidas.",
      "Cada pessoa da equipe vê só o que o papel dela permite.",
      "Consentimento registrado (TCLE, captura remota) e trilhas de auditoria nas ações sensíveis.",
    ],
  },
  {
    title: "Suporte de gente",
    items: [
      "Onboarding assistido para você e para a equipe.",
      "Migração de cadastros e históricos de planilhas ou de outro sistema, junto com o time.",
      "Canal direto por e-mail e manual do usuário dentro da plataforma.",
    ],
  },
  {
    title: "Feito para a rotina brasileira",
    items: [
      "Cálculo nutricional na tabela TACO.",
      "Documentos com registro profissional (CRN, CREFITO, CREF, CRP e CRM).",
      "WhatsApp e portal sem aplicativo, do jeito que o paciente já usa o celular.",
    ],
  },
];

// Depoimento real de cliente — mantenha vazio até existir um caso verdadeiro
// (nome, profissão e cidade reais). Com a lista vazia, Confianca.jsx não
// renderiza nenhum bloco de prova social falsa ou placeholder.
// Formato esperado: { quote, name, role, city }
export const TESTIMONIALS = [];

// "Perguntas" — 5, a primeira aberta por padrão.
export const FAQS = [
  {
    q: "Como funciona o teste grátis de 14 dias?",
    a: "Acesso completo à plataforma, limitado a 10 pacientes ativos, o suficiente para rodar casos reais. Ao fim do período você escolhe o plano e o histórico continua com você.",
  },
  {
    q: "Meu paciente precisa instalar um aplicativo?",
    a: "Não. O paciente acessa um portal pelo navegador com código de uso único: prescrições, treinos, consultas e diário ficam disponíveis sem instalar nada.",
  },
  {
    q: "A IA substitui o meu julgamento profissional?",
    a: "Não — e é assim por decisão de produto. A IA interpreta o texto e sugere correspondências com a base TACO; qualquer ambiguidade exige a sua revisão, e nada é enviado ao paciente sem a sua validação.",
  },
  {
    q: "Funciona para clínica com vários profissionais?",
    a: "Sim — é onde a plataforma rende mais. Além do prontuário central e das permissões por papel, o módulo de relacionamento acompanha retorno, protocolos e feedback de cada paciente da clínica. O Pro atende até 3 profissionais e o Pro Saúde até 10; acima disso, o Enterprise é sob contrato.",
  },
  {
    q: "Consigo migrar meus dados de planilhas ou de outro sistema?",
    a: "Sim, com apoio do time no onboarding: estruturamos a migração de cadastros e históricos junto com você.",
  },
];
