import React from "react";
import GlassCard from "../ui/GlassCard";
import { plans } from "../../data/plans";

/* Combine all unique feature names from all plans */
const featureNames = plans[0].features.map((f) => f.name);

const Cell = ({ included, note }) => {
  if (included === true)
    return (
      <span className="flex items-center justify-center gap-1 text-teal-500 font-bold text-sm">
        ✓{note ? <span className="text-[10px] text-slate-400 font-normal">({note})</span> : null}
      </span>
    );
  if (included === "soon")
    return <span className="text-amber-500 text-xs font-semibold">Em breve</span>;
  return <span className="text-slate-300 dark:text-slate-600">—</span>;
};

export default function ComparisonTable() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
      <GlassCard className="overflow-hidden !p-0">
        <div className="p-6 sm:p-8 pb-0">
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Comparativo completo dos planos
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
            Veja tudo que cada plano oferece de um jeito fácil.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200/60 dark:border-white/[0.06]">
                <th className="text-left py-3 px-6 font-semibold text-slate-500 dark:text-slate-400 w-[220px]">
                  Funcionalidade
                </th>
                {plans.map((p) => (
                  <th
                    key={p.id}
                    className={`py-3 px-4 text-center font-bold text-xs uppercase tracking-wider ${
                      p.featured ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Limits rows */}
              <tr className="border-b border-slate-100/60 dark:border-white/[0.04] bg-slate-50/50 dark:bg-white/[0.02]">
                <td className="py-3 px-6 font-semibold text-slate-700 dark:text-slate-300">Pacientes</td>
                {plans.map((p) => (
                  <td key={p.id} className="py-3 px-4 text-center font-bold text-slate-700 dark:text-slate-200">
                    {p.patients}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-100/60 dark:border-white/[0.04]">
                <td className="py-3 px-6 font-semibold text-slate-700 dark:text-slate-300">Profissionais</td>
                {plans.map((p) => (
                  <td key={p.id} className="py-3 px-4 text-center font-bold text-slate-700 dark:text-slate-200">
                    {p.professionals}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-100/60 dark:border-white/[0.04] bg-slate-50/50 dark:bg-white/[0.02]">
                <td className="py-3 px-6 font-semibold text-slate-700 dark:text-slate-300">Suporte</td>
                {plans.map((p) => (
                  <td key={p.id} className="py-3 px-4 text-center text-xs text-slate-500 dark:text-slate-400">
                    {p.supportLevel}
                  </td>
                ))}
              </tr>

              {/* Feature rows */}
              {featureNames.map((name, i) => (
                <tr
                  key={name}
                  className={`border-b border-slate-100/60 dark:border-white/[0.04] ${i % 2 === 0 ? "bg-slate-50/50 dark:bg-white/[0.02]" : ""}`}
                >
                  <td className="py-3 px-6 text-slate-700 dark:text-slate-300">{name}</td>
                  {plans.map((p) => {
                    const feat = p.features.find((f) => f.name === name);
                    return (
                      <td key={p.id} className="py-3 px-4 text-center">
                        <Cell included={feat?.included} note={feat?.note} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </section>
  );
}
