import React, { useState } from "react";
import Badge from "../ui/Badge";
import { featureCategories, featureStatus } from "../../data/features";

const categoryNames = featureCategories.map((c) => c.category);

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = featureCategories[activeTab];

  return (
    <section id="funcionalidades" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <div className="blue-panel rounded-[8px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-bodymotion-yellow">Módulos</p>
            <h2 className="font-display text-2xl font-extrabold sm:text-4xl">
            Módulos para acompanhar o paciente inteiro
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-100">
            Clínica, nutrição, corpo, treino, portal e gestão no mesmo fluxo, com estados claros entre disponível, beta e roadmap.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categoryNames.map((name, i) => (
              <button
                key={name}
                onClick={() => setActiveTab(i)}
                className={`rounded-[8px] px-4 py-2 text-sm font-bold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-bodymotion-yellow text-bodymotion-navy"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activeCategory.features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-[8px] border border-white/10 bg-white p-5 text-bodymotion-ink shadow-[0_20px_50px_-38px_rgba(0,0,0,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_56px_-34px_rgba(0,0,0,0.65)] dark:bg-white/[0.96]"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-[8px] bg-bodymotion-blue/10 p-2.5 transition-colors group-hover:bg-bodymotion-blue/15">
                {f.icon}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-base font-bold text-slate-900">
                  {f.title}
                </h3>
                {f.status && f.status !== "available" && (
                  <Badge variant={featureStatus[f.status]?.variant ?? "default"}>
                    {featureStatus[f.status]?.label ?? f.status}
                  </Badge>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
