// Conteúdo editorial da landing. Toda afirmação aqui deve ser defensável
// contra o produto real — ver AUDITORIA_PRODUTO_REAL_BODYMOTION.md e
// PLANO_IMPLEMENTACAO_SITE_COMERCIAL_LEADS_2026.md antes de alterar claims.

export const PROOFS = [
  { title: "Base TACO", detail: "Cálculo nutricional sobre tabela brasileira" },
  { title: "Portal do paciente", detail: "Acesso seguro por código, sem senha" },
  { title: "Teleconsulta com TCLE", detail: "Consentimento registrado na sessão" },
  { title: "Treinos e check-ins", detail: "Dieta e treino no mesmo histórico" },
];

export const FRAGMENTS = [
  { label: "Planilha de medidas", rot: "-6deg" },
  { label: "PDF da dieta", rot: "3deg" },
  { label: "WhatsApp do paciente", rot: "-3deg" },
  { label: "App de treino", rot: "5deg" },
  { label: "Agenda em papel", rot: "-2deg" },
];

export const PAINS = [
  {
    title: "Retrabalho a cada consulta",
    detail:
      "Medidas em um lugar, dieta em outro, treino em um terceiro. Cada retorno começa reconstruindo o contexto do paciente.",
  },
  {
    title: "Evolução que ninguém enxerga",
    detail:
      "Sem histórico unificado, o progresso corporal se perde — e o paciente não vê motivo para continuar.",
  },
  {
    title: "Adesão invisível entre consultas",
    detail:
      "O que acontece entre um atendimento e outro fica no escuro: diário, hábitos e check-ins espalhados no WhatsApp.",
  },
];

export const MODULES = [
  {
    id: "clinica",
    tab: "Atendimento",
    title: "Atendimento clínico completo",
    status: "Disponível",
    description:
      "Do primeiro contato ao retorno: prontuário, consultas com registro estruturado, anamnese digital e a linha do tempo do paciente em um só lugar.",
    bullets: [
      "Prontuário com timeline clínica do paciente",
      "Anamnese digital com pacotes de perguntas reutilizáveis",
      "Registro de consulta estruturado (SOAP)",
      "Documentos e atestados com validação",
    ],
  },
  {
    id: "nutricao",
    tab: "Nutrição + IA",
    title: "Prescrição nutricional com base TACO",
    status: "Disponível · IA em beta",
    description:
      "Monte a prescrição, calcule macros sobre a tabela brasileira e entregue em PDF. A IA interpreta o texto e sugere correspondências — você revisa antes de salvar.",
    bullets: [
      "Cálculo de macros sobre a base TACO",
      "PDF profissional com envio ao paciente",
      "IA auditável: sugestões passam pela sua validação",
      "Diário alimentar e hábitos no acompanhamento",
    ],
  },
  {
    id: "antropometria",
    tab: "Antropometria",
    title: "Evolução corporal que aparece",
    status: "Disponível · foto com IA em beta",
    description:
      "Avaliações antropométricas com histórico completo, fotos de evolução e captura remota: o paciente envia as fotos de casa por um link seguro.",
    bullets: [
      "Avaliações com histórico e comparativos",
      "Fotos de evolução organizadas por data",
      "Captura remota por link com consentimento",
      "Medição assistida por foto e modelo 3D em beta",
    ],
  },
  {
    id: "treinos",
    tab: "Treinos",
    title: "Treino conectado à dieta",
    status: "Disponível",
    description:
      "Biblioteca de exercícios, templates e planos com check-ins do paciente. Performance e nutrição finalmente no mesmo acompanhamento.",
    bullets: [
      "Biblioteca de exercícios e templates de plano",
      "Check-ins com percepção de esforço (RPE)",
      "Progresso registrado por sessão",
      "Link compartilhável para o paciente",
    ],
  },
  {
    id: "agenda",
    tab: "Agenda",
    title: "Agenda e teleconsulta integradas",
    status: "Disponível",
    description:
      "Agenda da equipe com convite por calendário e teleconsulta por vídeo com TCLE registrado — sem depender de ferramenta externa.",
    bullets: [
      "Agenda com status e histórico por paciente",
      "Convites de calendário (ICS)",
      "Teleconsulta por vídeo integrada",
      "TCLE com registro de consentimento",
    ],
  },
  {
    id: "portal",
    tab: "Portal do paciente",
    title: "O paciente acompanha tudo, sem depender de prints",
    status: "Disponível",
    description:
      "Prescrições, treinos, consultas, diário alimentar e hábitos ficam em um portal seguro, acessado por código de uso único — sem instalar aplicativo.",
    bullets: [
      "Acesso por código de uso único (OTP), sem senha",
      "Dieta, treino e próximas consultas em um lugar",
      "Diário alimentar com foto e hábitos",
      "Funciona no navegador do celular",
    ],
  },
  {
    id: "operacao",
    tab: "Operação",
    title: "A clínica inteira sob controle",
    status: "Disponível",
    description:
      "Equipe multiusuário com permissões por papel, relatórios de retenção e operação, trilhas de auditoria e visão do que precisa de atenção.",
    bullets: [
      "Permissões por papel para cada perfil da equipe",
      "Relatórios de retenção, agenda e prescrições",
      "Trilhas de auditoria em ações sensíveis",
      "Gestão de leads comerciais integrada",
    ],
  },
];

export const STEPS = [
  {
    title: "Cadastre e colete",
    detail: "Paciente, anamnese digital e histórico inicial em minutos.",
  },
  {
    title: "Avalie o corpo",
    detail: "Antropometria, fotos de evolução e captura remota.",
  },
  {
    title: "Prescreva dieta e treino",
    detail: "Cálculo TACO, PDF profissional e plano de treino no mesmo fluxo.",
  },
  {
    title: "Acompanhe de longe",
    detail: "Portal, diário alimentar, hábitos e check-ins entre consultas.",
  },
  {
    title: "Mostre a evolução",
    detail: "Comparativos e relatórios que sustentam a próxima decisão.",
  },
];

export const AI_STEPS = [
  {
    step: "01",
    title: "A IA interpreta",
    detail:
      "Você escreve a refeição como sempre escreveu. A IA identifica alimentos e quantidades no texto da prescrição.",
  },
  {
    step: "02",
    title: "A TACO calcula",
    detail:
      "Cada item é correspondido à base nutricional brasileira e os macros são calculados de forma estruturada.",
  },
  {
    step: "03",
    title: "Você decide",
    detail:
      "Ambiguidades pedem revisão explícita. Nada chega ao paciente sem a validação do profissional.",
  },
];

export const PERSONAS = [
  {
    eyebrow: "Para quem atende sozinho",
    title: "Nutricionista esportivo e clínico",
    detail:
      "Você acompanha composição corporal, prescreve dieta e treino e precisa provar evolução — sem gastar a noite montando PDF e planilha.",
    bullets: [
      "Prescrição com cálculo TACO em vez de calculadora avulsa",
      "Fotos e medidas contam a história do paciente",
      "Treino e dieta no mesmo plano de acompanhamento",
      "Portal reduz o vai-e-vem de WhatsApp",
    ],
  },
  {
    eyebrow: "Para equipes",
    title: "Clínica multidisciplinar",
    detail:
      "Mais de um profissional, um só padrão de atendimento: histórico central, permissões por papel e visão da operação inteira.",
    bullets: [
      "Prontuário central com permissões por papel",
      "Agenda da equipe e teleconsulta integrada",
      "Relatórios de retenção e produtividade",
      "Onboarding assistido para a equipe inteira",
    ],
  },
];

export const SECURITY_ITEMS = [
  {
    title: "Conexão criptografada",
    detail: "Tráfego protegido por HTTPS/TLS entre você, seus pacientes e a plataforma.",
  },
  {
    title: "Sessões protegidas",
    detail: "Autenticação com cookies seguros, proteção CSRF e bloqueio progressivo de tentativas.",
  },
  {
    title: "Portal com código de acesso",
    detail: "O paciente entra com código de uso único enviado ao próprio contato — sem senha para vazar.",
  },
  {
    title: "Consentimento registrado",
    detail: "TCLE nas teleconsultas e consentimento na captura remota de fotos, com registro.",
  },
  {
    title: "Permissões por papel",
    detail: "Cada pessoa da equipe vê apenas o que o papel dela permite ver.",
  },
  {
    title: "Trilhas de auditoria",
    detail: "Ações sensíveis registradas para rastreabilidade da operação clínica.",
  },
];

export const FAQS = [
  {
    q: "Como funciona a demonstração?",
    a: "Você conta como atende hoje e mostramos os fluxos que fazem sentido para a sua rotina, com dados de exemplo. Sem compromisso — é também o momento de tirar dúvidas de migração e plano.",
  },
  {
    q: "A IA substitui o meu julgamento profissional?",
    a: "Não — e é assim por decisão de produto. A IA interpreta o texto e sugere correspondências com a base TACO; qualquer ambiguidade exige a sua revisão, e nada é enviado ao paciente sem a sua validação.",
  },
  {
    q: "Preciso que meu paciente instale um aplicativo?",
    a: "Não. O paciente acessa um portal pelo navegador com código de uso único: prescrições, treinos, consultas e diário ficam disponíveis sem instalar nada.",
  },
  {
    q: "Funciona para clínicas com vários profissionais?",
    a: "Sim. O Bodymotion tem operação multiusuário com permissões por papel, agenda de equipe, prontuário central e relatórios da operação. Os planos Pro acomodam equipes de até 15 profissionais.",
  },
  {
    q: "O que significa um recurso estar em beta?",
    a: "Beta é um recurso funcional em maturação, liberado de forma controlada — hoje: medição por foto com IA, modelo 3D, IA nutricional e app mobile. Na demonstração mostramos o estado real de cada um.",
  },
  {
    q: "Consigo migrar meus dados de planilhas ou de outro sistema?",
    a: "Sim, com apoio do time no onboarding: estruturamos a migração de cadastros e históricos junto com você, no plano combinado na demonstração.",
  },
  {
    q: "Como funcionam os planos e o upgrade?",
    a: "Os planos partem de R$ 97/mês e crescem com a sua operação — pacientes ativos, equipe e recursos de IA. O upgrade é feito sem perder histórico.",
  },
];
