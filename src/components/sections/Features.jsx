import React, { useState } from "react";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import { featureCategories, featureStatus } from "../../data/features";

const categoryNames = featureCategories.map((c) => c.category);

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = featureCategories[activeTab];

  return (
    <section id="funcionalidades" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <GlassCard>
        <div className="max-w-3xl mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Módulos para acompanhar o paciente inteiro
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Clínica, nutrição, corpo, treino, portal e gestão no mesmo fluxo, com estados claros entre disponível, beta e roadmap.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryNames.map((name, i) => (
            <button
              key={name}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25"
                  : "border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-400 bg-white/50 dark:bg-white/[0.03]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activeCategory.features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-2xl border border-slate-200/60 bg-white/60 p-5 transition-all hover:-translate-y-0.5 hover:border-cyan-500/20 hover:shadow-lg dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/60 p-2.5 transition-colors group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20">
                {f.icon}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                {f.status && f.status !== "available" && (
                  <Badge variant={featureStatus[f.status]?.variant ?? "default"}>
                    {featureStatus[f.status]?.label ?? f.status}
                  </Badge>
                )}
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
