// ATENÇÃO — divergência conhecida com o backend (30/07/2026):
// a tabela financial_management.subscription_plans ainda tem os preços e nomes
// antigos (Starter 97 / Pro Saúde 197 / Pro+ Saúde 347). Antes de ligar qualquer
// checkout é obrigatório atualizar o backend (scripts/seed_billing_plans.py +
// banco) e reconferir os IDs abaixo com GET /subscription/plans do ambiente.
//
// Mapeamento site -> id no banco (por posição de tier, não por nome):
//   gratis     -> 5  ("Trial",      R$ 0, 14 dias, 10 pacientes)
//   starter    -> 2  ("Starter")
//   pro        -> 3  (hoje "Pro Saúde"  no banco -> renomear para "Pro")
//   pro_saude  -> 4  (hoje "Pro+ Saúde" no banco -> renomear para "Pro Saúde")
export const PLAN_BACKEND_IDS = {
  gratis: 5,
  starter: 2,
  pro: 3,
  pro_saude: 4,
  estudante: null, // exige validação de matrícula, sem autoatendimento
  enterprise: null, // negociado via contato
};

// Oferta para estudante — PROPOSTA: 50% do Starter, sujeita à sua confirmação.
export const studentPlan = {
  id: "estudante",
  name: "Estudante",
  price: 23.9,
  description:
    "Para quem ainda está na graduação e quer aprender a rotina clínica na ferramenta que vai usar depois.",
  requirement: "Exige comprovante de matrícula ativa, revalidado a cada semestre.",
  highlights: ["Limites do plano Starter", "1 profissional", "Renovação semestral com novo comprovante"],
  cta: "Solicitar plano estudante",
};

export const plans = [
  {
    id: "starter",
    badge: "Essencial",
    name: "Starter",
    description: "Para profissional solo que quer sair de planilhas e centralizar o atendimento.",
    monthlyPrice: 47.9,
    annualPrice: 38.9,
    professionals: "1",
    activePatients: "50",
    featured: false,
    popular: false,
  },
  {
    id: "pro",
    badge: "Equilíbrio ideal", // a pílula de destaque já diz "Recomendado"
    name: "Pro",
    description: "Para consultórios que acompanham o paciente entre uma consulta e outra.",
    monthlyPrice: 97.9,
    annualPrice: 78.9,
    professionals: "3",
    activePatients: "200",
    featured: true,
    popular: true,
  },
  {
    id: "pro_saude",
    badge: "Clínica completa",
    name: "Pro Saúde",
    description: "Para clínicas que precisam de IA, relacionamento e equipe multiprofissional.",
    monthlyPrice: 159.9,
    annualPrice: 129.9,
    professionals: "10",
    activePatients: "500",
    featured: false,
    popular: false,
  },
];

export const enterprisePlan = {
  id: "enterprise",
  name: "Enterprise",
  description:
    "Para redes, franquias e times multidisciplinares que precisam de contrato, ambiente e acompanhamento próprios.",
  highlights: [
    "Profissionais e pacientes sob contrato",
    "Ambiente dedicado",
    "Gestor de conta e onboarding consultivo",
    "Permissões e relatórios sob medida",
  ],
  cta: "Falar com especialista",
};

// Destaques por plano, exibidos nos cards (acumulativos).
export const PLAN_HIGHLIGHTS = {
  starter: [
    "Prontuário, anamnese e prescrição em PDF",
    "Antropometria com histórico e fotos",
    "Treinos e check-ins",
    "1 profissional · até 50 pacientes ativos",
  ],
  pro: [
    "Tudo do Starter",
    "Portal do paciente e agenda com teleconsulta",
    "Envio por e-mail e WhatsApp, relatórios",
    "3 profissionais · até 200 pacientes ativos",
  ],
  pro_saude: [
    "Tudo do Pro",
    "Relacionamento: protocolos, retorno e feedback",
    "IA nutricional e avaliação por foto (beta)",
    "10 profissionais · até 500 pacientes ativos",
  ],
};
