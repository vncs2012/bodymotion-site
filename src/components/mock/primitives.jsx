import React from "react";

/**
 * Primitivas das composições ilustrativas do produto.
 * Representam a interface real do painel (sidebar navy, ação ciano,
 * superfícies claras) com dados fictícios de exemplo.
 */

export function AppShell({ children, active = "Início" }) {
  const items = ["Início", "Agenda", "Pacientes", "Prescrições", "Treinos", "Relatórios"];
  return (
    <div className="flex aspect-[16/10] w-full bg-bm-paper text-left">
      <aside className="hidden w-[27%] shrink-0 flex-col gap-1 bg-bm-ink px-3 py-3 sm:flex">
        <div className="mb-2 flex items-center gap-2">
          <img src="/brand/favicon-branca.png" alt="" className="h-5 w-5 object-contain" />
          <span className="text-[10px] font-extrabold tracking-wide text-white">
            Body<span className="text-bm-cyan">motion</span>
          </span>
        </div>
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-md px-2.5 py-1.5 text-[9px] font-bold ${
              item === active ? "bg-bm-cyan text-bm-ink" : "text-white/70"
            }`}
          >
            {item}
          </span>
        ))}
        <span className="mt-auto flex items-center gap-1.5 px-2.5 text-[8px] font-semibold text-white/50">
          <i className="h-3.5 w-3.5 rounded-full bg-bm-cyan/40" /> Dra. A. Duarte
        </span>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3 sm:p-3.5">{children}</div>
    </div>
  );
}

export function PanelHeader({ title, chip = null }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="truncate text-[11px] font-extrabold text-bm-ink sm:text-xs">{title}</span>
      {chip && (
        <span className="shrink-0 rounded-full bg-bm-cyan/15 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-bm-cyan-deep">
          {chip}
        </span>
      )}
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-bm-mist bg-white p-2.5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function Stat({ label, value, trend = null }) {
  return (
    <Card className="flex-1">
      <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">{label}</p>
      <p className="mt-0.5 text-sm font-extrabold text-bm-ink">{value}</p>
      {trend && <p className="text-[8px] font-bold text-emerald-600">{trend}</p>}
    </Card>
  );
}

export function TextRow({ w = "100%" }) {
  return <span className="block h-1.5 rounded-full bg-bm-mist" style={{ width: w }} />;
}

export function PersonRow({ initials, name, meta, tone = "cyan" }) {
  const tones = {
    cyan: "bg-bm-cyan/20 text-bm-cyan-deep",
    ink: "bg-bm-ink/10 text-bm-ink",
  };
  return (
    <div className="flex items-center gap-2 py-1">
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[7px] font-extrabold ${tones[tone]}`}
      >
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[9px] font-bold text-bm-ink">{name}</p>
        <p className="truncate text-[8px] font-medium text-bm-slate">{meta}</p>
      </div>
    </div>
  );
}

export function Bars({ values, tone = "cyan", labels = null }) {
  const max = Math.max(...values);
  return (
    <div className="flex h-full min-h-[44px] items-end gap-1.5">
      {values.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
          <span
            className={`w-full rounded-t ${tone === "cyan" ? "bg-bm-cyan" : "bg-bm-ink/80"}`}
            style={{ height: `${Math.round((v / max) * 100)}%`, minHeight: 3, opacity: 0.45 + (v / max) * 0.55 }}
          />
          {labels && <span className="text-[7px] font-bold text-bm-slate">{labels[i]}</span>}
        </div>
      ))}
    </div>
  );
}

export function Sparkline({ points = "0,26 18,22 36,24 54,17 72,18 90,11 108,13 126,6", className = "h-12 w-full" }) {
  return (
    <svg viewBox="0 0 126 30" className={className} preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke="#50b4e6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="126" cy="6" r="3" fill="#50b4e6" />
    </svg>
  );
}
