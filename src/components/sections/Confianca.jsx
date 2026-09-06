import React from "react";
import Reveal from "../ui/Reveal";
import { TRUST_CARDS, TESTIMONIALS } from "../../data/landing";

const TRUST_ICONS = [
  <React.Fragment key="0">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </React.Fragment>,
  <React.Fragment key="1">
    <path d="M4 14v-2a8 8 0 0116 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1" />
    <rect x="17" y="14" width="4" height="6" rx="1" />
  </React.Fragment>,
  <React.Fragment key="2">
    <path d="M5 21V4" />
    <path d="M5 4h13l-2.5 4 2.5 4H5" />
  </React.Fragment>,
];

export default function Confianca() {
  return (
    <section className="bg-white py-14 lg:py-24">
      <div className="shell">
        <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-4 text-center">
          <p className="eyebrow justify-center">Confiança</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            Dados clínicos exigem responsabilidade. Suporte também.
          </h2>
          <p className="max-w-[640px] text-lg leading-relaxed text-bm-slate">
            Sem promessas vagas: o que está aqui é o que a plataforma faz hoje.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {TRUST_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article className="card-surface flex h-full flex-col gap-3.5 p-5 lg:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bm-cyan-soft text-bm-ink">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[22px] w-[22px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {TRUST_ICONS[i]}
                  </svg>
                </span>
                <p className="font-display text-lg font-extrabold text-bm-ink">{card.title}</p>
                <p className="text-sm leading-relaxed text-bm-slate lg:hidden">{card.items.join(" ")}</p>
                <div className="hidden flex-col gap-2.5 lg:flex">
                  {card.items.map((item) => (
                    <p key={item} className="text-sm leading-relaxed text-bm-slate">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {TESTIMONIALS.length > 0 && (
          <div className="mt-6 grid gap-4">
            {TESTIMONIALS.map((testimonial) => (
              <Reveal key={testimonial.name} className="rounded-2xl border border-bm-mist bg-bm-paper px-7 py-6">
                <p className="font-display text-lg font-semibold leading-relaxed text-bm-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm font-bold text-bm-slate">
                  {testimonial.name} · {testimonial.role} · {testimonial.city}
                </p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
