import React, { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { faqs } from "../../data/faqs";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <GlassCard>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
          Perguntas frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  open
                    ? "border-cyan-500/25 bg-white/50 dark:bg-white/[0.04] shadow-sm"
                    : "border-slate-200/50 bg-white/30 dark:border-white/[0.06] dark:bg-white/[0.02] hover:bg-white/50 dark:hover:bg-white/[0.04]"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between p-5 text-left font-semibold text-slate-900 dark:text-white focus:outline-none"
                  onClick={() => toggle(i)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-cyan-500" : "text-slate-400"}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${open ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/[0.05] pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
}
