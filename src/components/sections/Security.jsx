import React from "react";
import GlassCard from "../ui/GlassCard";

const items = [
  {
    title: "Criptografia ponta a ponta",
    desc: "Toda comunicação entre você, seus pacientes e nossos servidores é criptografada com TLS 1.3.",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    color: "text-cyan-500",
  },
  {
    title: "Controle de acesso",
    desc: "Permissões por nível: cada profissional acessa apenas os pacientes atribuídos a ele.",
    iconPath: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    color: "text-teal-500",
  },
  {
    title: "Consentimento e LGPD",
    desc: "Termos de consentimento digitais para coleta de dados e fotos. Conformidade total com a LGPD.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "text-emerald-500",
  },
  {
    title: "Backups e disponibilidade",
    desc: "Backups automáticos diários, infraestrutura redundante e disponibilidade de 99.9%.",
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    color: "text-violet-500",
  },
];

export default function Security() {
  return (
    <section id="seguranca" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <GlassCard>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: heading and description */}
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Seus dados e os dos seus pacientes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                estão protegidos
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              O BodyMotion foi projetado desde o início com privacidade e segurança como prioridade.
              Lidamos com dados sensíveis de saúde e fotos corporais com o máximo rigor.
            </p>

            {/* LGPD Badge */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/[0.03] px-5 py-3">
              <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="font-bold text-sm text-slate-900 dark:text-white">LGPD Compliance</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Lei Geral de Proteção de Dados</p>
              </div>
            </div>
          </div>

          {/* Right: security items grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-white/40 dark:bg-white/[0.02] p-5 transition-all hover:-translate-y-0.5 hover:border-teal-500/20"
              >
                <svg className={`w-6 h-6 ${item.color} mb-3`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
                <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
