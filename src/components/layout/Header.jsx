import React, { useEffect, useState } from "react";
import { trackSiteEvent } from "../../utils/analytics";

const NAV = [
  { href: "#modulos", label: "Produto" },
  { href: "#fluxo", label: "Como funciona" },
  { href: "#ia", label: "IA auditável" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

const APP_URL = "https://app.bodymotion.pro";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-bm-mist bg-white/90 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <a href="#inicio" aria-label="Bodymotion — início" onClick={close}>
          <img src="/brand/logo.png" alt="Bodymotion" className="h-8 w-auto sm:h-9" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-bm-slate transition-colors hover:text-bm-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={APP_URL}
            className="text-sm font-bold text-bm-slate transition-colors hover:text-bm-ink"
            onClick={() => trackSiteEvent("header_login_click")}
          >
            Entrar
          </a>
          <a
            href="#demonstracao"
            className="btn-primary !px-5 !py-2.5"
            onClick={() => trackSiteEvent("header_cta_click")}
          >
            Agendar demonstração
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-bm-mist bg-white text-bm-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-b border-bm-mist bg-white shadow-lg lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4" aria-label="Navegação móvel">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base font-bold text-bm-ink hover:bg-bm-paper"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid gap-2 border-t border-bm-mist pt-4">
              <a href={APP_URL} className="btn-ghost w-full" onClick={close}>
                Entrar na plataforma
              </a>
              <a href="#demonstracao" className="btn-primary w-full" onClick={close}>
                Agendar demonstração
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
