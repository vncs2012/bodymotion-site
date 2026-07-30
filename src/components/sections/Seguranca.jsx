import React from "react";
import Reveal from "../ui/Reveal";
import { SECURITY_ITEMS } from "../../data/landing";

const ICONS = [
  // cadeado
  <path key="0" d="M7 10V8a5 5 0 0110 0v2m-11 0h12a1 1 0 011 1v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a1 1 0 011-1z" />,
  // escudo
  <path key="1" d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z" />,
  // chave numérica
  <path key="2" d="M4 8h16v8H4zM8 12h.01M12 12h.01M16 12h.01" />,
  // documento assinado
  <path key="3" d="M7 3h7l4 4v14H7zM14 3v4h4M10 14l1.8 1.8L15 12.5" />,
  // pessoas
  <path key="4" d="M16 19v-1a4 4 0 00-8 0v1M12 11a3 3 0 100-6 3 3 0 000 6zM19 8v4M17 10h4" />,
  // trilha
  <path key="5" d="M4 6h9M4 12h13M4 18h7m6-3l2 2 4-4" />,
];

export default function Seguranca() {
  return (
    <section id="seguranca" className="bg-white py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Segurança e privacidade</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
              Dados clínicos exigem responsabilidade.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-bm-slate">
              O Bodymotion trata dados de saúde — e a plataforma foi construída com controles
              de acesso, consentimento e rastreabilidade para apoiar a sua conformidade com a
              LGPD.
            </p>
            <p className="mt-6 rounded-xl border border-bm-mist bg-bm-paper px-5 py-4 text-sm font-semibold leading-relaxed text-bm-slate">
              Sem promessas vagas: o que listamos aqui é o que a plataforma faz. Dúvidas de
              segurança e privacidade são bem-vindas na demonstração.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {SECURITY_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-surface h-full p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-bm-cyan-soft text-bm-cyan-deep">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {ICONS[i]}
                    </svg>
                  </span>
                  <h3 className="mt-3 font-display text-base font-extrabold text-bm-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bm-slate">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
