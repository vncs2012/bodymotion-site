import React, { useRef, useState } from "react";
import { buildLeadPayload, submitLead } from "../utils/leads";
import { trackSiteEvent } from "../utils/analytics";

const API = import.meta.env.VITE_API_BASE_URL?.trim() || (import.meta.env.DEV ? "/api" : "https://api.bodymotion.pro");
const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || "/commercial/leads";
const SEGMENTS = ["Nutricionista", "Clínica multidisciplinar", "Profissional de educação física", "Outro perfil de saúde"];

export default function InterestForm() {
  const submitting = useRef(false);
  const trackedStart = useRef(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const phone = form.elements.phone;
    if (phone.value.replace(/\D/g, "").length < 8) {
      phone.setCustomValidity("Informe um WhatsApp válido, com DDD.");
      phone.reportValidity();
      return;
    }
    const payload = buildLeadPayload(Object.fromEntries(new FormData(form)), window.location.href);
    submitting.current = true;
    setLoading(true);
    setError("");
    try {
      await submitLead(payload, { api: API, endpoint: ENDPOINT });
      setSubmitted(true);
      trackSiteEvent("lead_form_submitted", { segment: payload.segment, placement: "launch_page" });
    } catch (cause) {
      setError(cause instanceof TypeError || cause.name === "TimeoutError"
        ? "Não conseguimos conectar. Seus dados continuam preenchidos. Tente novamente em instantes."
        : cause.message);
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  };

  return (
    <section id="interesse" aria-labelledby="interest-title" className="launch-form">
      {submitted ? (
        <div className="flex min-h-[430px] flex-col justify-center" role="status" aria-live="polite">
          <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-bm-cyan-soft text-bm-ink" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6" /></svg>
          </span>
          <h2 id="interest-title" className="font-display text-3xl font-extrabold tracking-tight">Você está na lista.</h2>
          <p className="mt-4 leading-relaxed text-bm-slate">Recebemos seu interesse no Bodymotion. Nossa equipe vai entrar em contato para apresentar a plataforma.</p>
          <p className="mt-6 text-sm text-bm-slate">Até breve!</p>
        </div>
      ) : (
        <>
          <p className="eyebrow">Para quem quer começar</p>
          <h2 id="interest-title" className="mt-2 font-display text-[28px] font-extrabold leading-tight tracking-tight">Conheça na prática.</h2>
          <p className="mt-2 text-sm leading-relaxed text-bm-slate">Deixe seu contato. Nossa equipe apresenta o Bodymotion para a sua rotina.</p>
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit} onFocus={() => {
            if (trackedStart.current) return;
            trackedStart.current = true;
            trackSiteEvent("lead_form_started", { placement: "launch_page" });
          }} aria-busy={loading}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="launch-label">Nome
                <input className="launch-input" name="name" required minLength={2} maxLength={160} pattern=".*\S.*\S.*" autoComplete="name" placeholder="Seu nome" disabled={loading} />
              </label>
              <label className="launch-label">WhatsApp
                <input className="launch-input" name="phone" type="tel" required minLength={8} maxLength={40} autoComplete="tel" placeholder="DDD + número" disabled={loading} onInput={(event) => event.currentTarget.setCustomValidity("")} />
              </label>
            </div>
            <label className="launch-label">E-mail
              <input className="launch-input" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="voce@exemplo.com.br" disabled={loading} />
            </label>
            <label className="launch-label">Seu perfil profissional
              <select className="launch-input" name="segment" required defaultValue="" disabled={loading}>
                <option value="" disabled>Selecione seu perfil</option>
                {SEGMENTS.map((segment) => <option key={segment}>{segment}</option>)}
              </select>
            </label>
            {error && <p role="alert" className="text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" disabled={loading} className="btn-primary mt-1 min-h-12 w-full text-base disabled:cursor-wait disabled:opacity-70">
              {loading ? "Enviando…" : "Tenho interesse"}
              {!loading && <span aria-hidden="true">→</span>}
            </button>
            <p className="text-xs leading-relaxed text-bm-slate">Usamos seus dados apenas para entrar em contato sobre o Bodymotion. Sem compromisso.</p>
          </form>
        </>
      )}
    </section>
  );
}
