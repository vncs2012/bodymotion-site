import React from "react";

/* ── Icons as tiny components ── */
const I = ({ d, color = "text-cyan-500" }) => (
  <svg className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export const features = [
  {
    title: "Gestão de Pacientes",
    text: "Cadastre, organize e acompanhe seus pacientes em um só lugar.",
    icon: <I d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
  {
    title: "Anamnese Digital",
    text: "Crie formulários de avaliação inicial personalizados para cada paciente.",
    icon: <I d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" color="text-teal-500" />,
  },
  {
    title: "Avaliação Corporal",
    text: "Medições corporais com histórico completo de evolução do paciente.",
    icon: <I d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" color="text-indigo-500" />,
  },
  {
    title: "Avaliação com IA",
    text: "Tire fotos e a inteligência artificial extrai as medidas automaticamente.",
    icon: <I d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" color="text-violet-500" />,
  },
  {
    title: "Prescrição em PDF",
    text: "Monte e envie prescrições com visual profissional direto pelo sistema.",
    icon: <I d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" color="text-rose-500" />,
  },
  {
    title: "Bate-papo",
    text: "Converse com seus pacientes direto pelo sistema em tempo real.",
    icon: <I d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" color="text-green-500" />,
  },
  {
    title: "Painel de Resultados",
    text: "Veja indicadores da sua clínica: pacientes, consultas e evolução.",
    icon: <I d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" color="text-amber-500" />,
  },
  {
    title: "Envio por E-mail e WhatsApp",
    text: "Envie documentos e mensagens para pacientes automaticamente.",
    badge: "Em breve",
    icon: <I d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" color="text-sky-500" />,
  },
  {
    title: "Agenda Digital",
    text: "Organize consultas e atendimentos em um calendário inteligente.",
    badge: "Em breve",
    icon: <I d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" color="text-orange-500" />,
  },
  {
    title: "Assistente com IA",
    text: "Uma IA que analisa o histórico e ajuda você a avaliar o paciente.",
    badge: "Em breve",
    icon: <I d="M13 10V3L4 14h7v7l9-11h-7z" color="text-purple-500" />,
  },
  {
    title: "Aplicativo Mobile",
    text: "Acesse pelo celular — Android e iPhone, onde estiver.",
    badge: "Em breve",
    icon: <I d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" color="text-pink-500" />,
  },
  {
    title: "Segurança e Privacidade",
    text: "Dados protegidos com criptografia. Conformidade com a LGPD.",
    icon: <I d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" color="text-emerald-500" />,
  },
];
