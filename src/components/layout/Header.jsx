import React, { useEffect, useState } from "react";
import { startTrial } from "../../utils/trial";
import { trackSiteEvent } from "../../utils/analytics";

const NAV = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#planos", label: "Planos" },
  { href: "#perguntas", label: "Perguntas" },
];

const APP_URL = "https://app.bodymotion.pro";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 lg:h-[72px] ${
        solid ? "border-b border-bm-mist bg-white/95 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-full items-center justify-between gap-4">
        <a href="#inicio" aria-label="Bodymotion — início" onClick={close}>
          <img
            src={solid ? "/brand/logo.svg" : "/brand/logo-branca.svg"}
            alt="Bodymotion"
            className="h-[26px] w-auto lg:h-[34px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-bold transition-colors ${
                solid ? "text-bm-slate hover:text-bm-ink" : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={APP_URL}
            className={`text-sm font-bold transition-colors ${
              solid ? "text-bm-slate hover:text-bm-ink" : "text-white/85 hover:text-white"
            }`}
            onClick={() => trackSiteEvent("header_login_click")}
          >
            Entrar
          </a>
          <button
            type="button"
            className="btn-primary !px-5 !py-2.5"
            onClick={() => {
              trackSiteEvent("header_cta_click");
              startTrial({ planId: "pro" });
            }}
          >
            Testar grátis
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="btn-primary !h-11 !px-4 !py-0 text-sm shadow-none"
            onClick={() => {
              trackSiteEvent("header_cta_click");
              startTrial({ planId: "pro" });
            }}
          >
            Testar grátis
          </button>
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
              solid ? "border-bm-mist bg-white text-bm-ink" : "border-white/30 text-white"
            }`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="border-b border-bm-mist bg-white shadow-lg lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4" aria-label="Navegação móvel">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="min-h-11 rounded-lg px-3 py-3 text-base font-bold text-bm-ink hover:bg-bm-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href={APP_URL}
              onClick={close}
              className="min-h-11 rounded-lg px-3 py-3 text-base font-bold text-bm-ink hover:bg-bm-paper"
            >
              Entrar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
