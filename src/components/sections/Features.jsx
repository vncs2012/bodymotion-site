import React from "react";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import { features } from "../../data/features";

export default function Features() {
  return (
    <section id="funcionalidades" className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <GlassCard>
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Tudo o que você precisa para atender e crescer
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Do primeiro contato com o paciente até o acompanhamento completo — com ferramentas que simplificam sua rotina.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-2xl border border-slate-200/60 bg-white/60 dark:border-white/[0.06] dark:bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-cyan-500/20 dark:hover:bg-white/[0.06]"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/60 p-2.5 transition-colors group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20">
                {f.icon}
              </div>

              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                {f.badge && <Badge variant="soon">{f.badge}</Badge>}
              </div>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {f.text}
              </p>
            </article>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
