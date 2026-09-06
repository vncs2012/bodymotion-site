import React from "react";
import Reveal from "../ui/Reveal";
import { FAQS } from "../../data/landing";
import { trackSiteEvent } from "../../utils/analytics";

export default function Faq() {
  return (
    <section id="perguntas" className="bg-white py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-4">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.6rem]">
            O que todo mundo pergunta antes de testar.
          </h2>
          <p className="text-lg leading-relaxed text-bm-slate">
            Não achou a sua dúvida? Escreva para{" "}
            <a
              href="mailto:comercial@bodymotion.pro"
              className="font-bold text-bm-cyan-deep underline-offset-4 hover:underline"
            >
              comercial@bodymotion.pro
            </a>
            .
          </p>
        </Reveal>

        <div className="border-t border-bm-mist">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details
                className="group border-b border-bm-mist"
                open={i === 0 ? true : undefined}
                onToggle={(e) => e.currentTarget.open && trackSiteEvent("faq_open", { question: faq.q })}
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-extrabold text-bm-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    className="relative flex h-5 w-5 shrink-0 items-center justify-center text-xl font-bold leading-none text-bm-cyan-deep"
                    aria-hidden="true"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-bm-slate">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
