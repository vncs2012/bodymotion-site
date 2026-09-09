import React, { useEffect, useState } from "react";
import { startTrial } from "../../utils/trial";
import { trackSiteEvent } from "../../utils/analytics";

/**
 * Barra fixa "Testar grátis" no rodapé da tela — só no celular/tablet
 * (abaixo de lg). Aparece quando o hero (#inicio) sai da viewport, some
 * quando a gaveta de demonstração está aberta ou um campo de formulário
 * está em foco.
 */
export default function StickyCta({ drawerOpen = false }) {
  const [pastHero, setPastHero] = useState(false);
  const [fieldFocused, setFieldFocused] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Fallback por posição de rolagem — em alguns layouts o IntersectionObserver
  // sozinho não é suficiente para revelar a barra (ex.: pré-render/SSR).
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return undefined;

    const onScroll = () => {
      setPastHero(window.scrollY > hero.offsetTop + hero.offsetHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const isField = (el) => !!el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
    const onFocusIn = (event) => {
      if (isField(event.target)) setFieldFocused(true);
    };
    const onFocusOut = (event) => {
      if (isField(event.target)) setFieldFocused(false);
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const visible = pastHero && !drawerOpen && !fieldFocused;

  return (
    <div
      className={`sticky-cta fixed inset-x-0 bottom-0 z-40 lg:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex h-16 items-center gap-3 border-t border-bm-mist bg-white/95 px-4 shadow-[0_-8px_24px_-12px_rgba(34,37,90,0.25)] backdrop-blur">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-extrabold text-bm-ink">14 dias grátis</p>
          <p className="truncate text-xs font-semibold text-bm-slate">sem compromisso</p>
        </div>
        <button
          type="button"
          className="btn-primary !h-11 !px-5 !py-0 shrink-0 text-sm shadow-none"
          tabIndex={visible ? 0 : -1}
          onClick={() => {
            trackSiteEvent("sticky_cta_click");
            startTrial({ planId: "pro" });
          }}
        >
          Testar grátis
        </button>
      </div>
    </div>
  );
}
