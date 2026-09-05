import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { startTrial } from "../utils/trial";
import { trackSiteEvent } from "../utils/analytics";

const API = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");
const LEAD = import.meta.env.VITE_LEAD_ENDPOINT || "/commercial/leads";
const CONTACT_EMAIL = "comercial@bodymotion.pro";
const TRANSITION_MS = 240;

// Mesmos valores enviados pelo <select name="segment"> anterior — o backend
// espera exatamente estas strings.
const SEGMENTS = [
  { value: "Nutricionista", label: "Nutricionista" },
  { value: "Clínica multidisciplinar", label: "Clínica multidisciplinar" },
  { value: "Profissional de educação física", label: "Educação física" },
  { value: "Outro perfil de saúde", label: "Outro perfil de saúde" },
];

function getTrackingPayload() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    page_url: window.location.href,
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
  };
}

function buildMailto(payload) {
  const body = [
    `Nome: ${payload.name ?? ""}`,
    `Telefone: ${payload.phone ?? ""}`,
    `E-mail: ${payload.email ?? ""}`,
    `Perfil: ${payload.segment ?? ""}`,
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demonstração Bodymotion")}&body=${encodeURIComponent(body)}`;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Gaveta "Agendar demonstração": <dialog> nativo (showModal, foco preso pelo
 * navegador, Esc fecha). Abre a partir de qualquer clique em
 * href="#demonstracao" (a mudança de hash é observada aqui) ou quando a URL
 * já carrega com #demonstracao.
 */
export default function DemoDrawer({ open, onOpenChange }) {
  const dialogRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const hasTrackedStart = useRef(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Qualquer link para #demonstracao (faixa final, linha de Enterprise em
  // Planos etc.) só precisa mudar o hash — nenhum onClick extra é necessário.
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demonstracao") onOpenChange(true);
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [onOpenChange]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open) {
      if (!dialog.open) {
        lastFocusedRef.current = document.activeElement;
        dialog.showModal();
      }
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    setVisible(false);
    const timer = setTimeout(
      () => {
        if (dialog.open) dialog.close();
      },
      prefersReducedMotion() ? 0 : TRANSITION_MS,
    );
    return () => clearTimeout(timer);
  }, [open]);

  const requestClose = () => onOpenChange(false);

  const handleNativeClose = () => {
    onOpenChange(false);
    setVisible(false);
    if (window.location.hash === "#demonstracao") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    if (lastFocusedRef.current instanceof HTMLElement) {
      lastFocusedRef.current.focus();
    }
    // Some depois da transição de saída para não "piscar" a confirmação
    // enquanto a gaveta ainda está visível fechando.
    window.setTimeout(() => {
      setSubmitted(false);
      hasTrackedStart.current = false;
    }, TRANSITION_MS);
  };

  const handleCancel = (event) => {
    // Esc: assume o fechamento controlado (com transição) em vez do close() imediato do navegador.
    event.preventDefault();
    requestClose();
  };

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) requestClose();
  };

  const trackFormStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackSiteEvent("lead_form_started", { placement: "demo_drawer" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const payload = {
      ...Object.fromEntries(new FormData(form)),
      ...getTrackingPayload(),
      source: "site_comercial_bodymotion",
    };

    try {
      if (!API || !LEAD) {
        window.location.href = buildMailto(payload);
        trackSiteEvent("lead_form_fallback", { reason: "api_not_configured" });
        setSubmitted(true);
        return;
      }

      const response = await fetch(`${API}${LEAD}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("lead-request-failed");

      trackSiteEvent("lead_form_submitted", { segment: payload.segment });
      setSubmitted(true);
    } catch {
      window.location.href = buildMailto(payload);
      trackSiteEvent("lead_form_fallback", { reason: "request_failed" });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-bm-mist bg-white px-4 py-3 text-sm font-semibold text-bm-ink outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-bm-cyan focus:ring-2 focus:ring-bm-cyan/25";

  return (
    <dialog
      ref={dialogRef}
      className="demo-drawer"
      data-visible={visible ? "true" : "false"}
      aria-labelledby="demo-drawer-title"
      onCancel={handleCancel}
      onClose={handleNativeClose}
      onClick={handleBackdropClick}
    >
      <div className="demo-drawer__panel flex flex-col bg-white">
        <div className="flex items-start justify-between gap-4 border-b border-bm-mist px-6 py-6 sm:px-8">
          <div>
            <h2 id="demo-drawer-title" className="font-display text-2xl font-extrabold text-bm-ink">
              Agendar demonstração
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-bm-slate">
              30 minutos, com dados de exemplo, focados na sua rotina. Sem compromisso.
            </p>
          </div>
          <button
            type="button"
            onClick={requestClose}
            aria-label="Fechar"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-bm-mist text-bm-ink transition-colors hover:border-bm-cyan"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-1 flex-col items-start justify-center gap-5 px-6 py-10 sm:px-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bm-cyan-soft text-bm-cyan-deep">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <p className="font-display text-xl font-extrabold text-bm-ink" aria-live="polite">
              Recebemos seu pedido. A equipe retorna em até 1 dia útil.
            </p>
            <Button
              type="button"
              onClick={() => {
                trackSiteEvent("pricing_cta_click", { plan: "pro", placement: "demo_drawer_confirmation" });
                startTrial({ planId: "pro" });
              }}
              className="w-full"
            >
              Enquanto isso, testar grátis
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} onFocus={trackFormStart} className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 py-6 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-bm-ink">
                Nome
                <input required name="name" autoComplete="name" placeholder="Seu nome" className={inputClass} />
              </label>
              <label className="text-sm font-bold text-bm-ink">
                WhatsApp
                <input required name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" className={inputClass} />
              </label>
            </div>

            <label className="text-sm font-bold text-bm-ink">
              E-mail profissional
              <input required name="email" type="email" autoComplete="email" placeholder="voce@clinica.com.br" className={inputClass} />
            </label>

            <fieldset>
              <legend className="text-sm font-bold text-bm-ink">Como você atende hoje?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {SEGMENTS.map((segment, i) => (
                  <React.Fragment key={segment.value}>
                    <input
                      required
                      type="radio"
                      name="segment"
                      id={`demo-segment-${i}`}
                      value={segment.value}
                      className="chip-input"
                    />
                    <label htmlFor={`demo-segment-${i}`} className="chip-label">
                      {segment.label}
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </fieldset>

            <Button type="submit" size="lg" className="mt-1 w-full" loading={loading}>
              Solicitar demonstração
            </Button>

            <p className="text-xs leading-relaxed text-bm-slate">
              Usamos seus dados apenas para retorno comercial. Prefere escrever?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-bm-cyan-deep underline-offset-4 hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </form>
        )}
      </div>
    </dialog>
  );
}
