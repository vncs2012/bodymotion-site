import React from "react";
import Reveal from "../ui/Reveal";
import { FAQS } from "../../data/landing";
import { trackSiteEvent } from "../../utils/analytics";

export default function Faq() {
  return (
    <section id="faq" className="bg-bm-paper py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            O que todo mundo pergunta antes de agendar.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bm-slate">
            Não achou a sua dúvida? Escreva para{" "}
            <a
              href="mailto:comercial@bodymotion.pro"
              className="font-bold text-bm-cyan-deep underline-offset-4 hover:underline"
            >
              comercial@bodymotion.pro
            </a>{" "}
            ou traga para a demonstração.
          </p>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details
                className="group card-surface overflow-hidden"
                onToggle={(e) => e.currentTarget.open && trackSiteEvent("faq_open", { question: faq.q })}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-extrabold text-bm-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    viewBox="0 0 20 20"
                    className="h-5 w-5 shrink-0 text-bm-cyan-deep transition-transform duration-200 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-bm-slate">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
