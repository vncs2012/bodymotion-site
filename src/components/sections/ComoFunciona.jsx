import React from "react";
import Reveal from "../ui/Reveal";
import { STEPS } from "../../data/landing";

export default function ComoFunciona() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="shell grid gap-8 sm:grid-cols-3 sm:gap-8">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 90}>
            <div className="flex h-full flex-col gap-2.5 border-t-2 border-bm-cyan pt-5">
              <p className="font-display text-xl font-extrabold text-bm-ink">{step.title}</p>
              <p className="text-base leading-relaxed text-bm-slate">{step.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
