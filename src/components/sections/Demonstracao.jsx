import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { trackSiteEvent } from "../../utils/analytics";

const API = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");
const LEAD = import.meta.env.VITE_LEAD_ENDPOINT || "/commercial/leads";
const CONTACT_EMAIL = "comercial@bodymotion.pro";

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

const STEPS = [
  "Entendemos a sua rotina e o perfil de atendimento.",
  "Mostramos os fluxos que resolvem a sua operação, com dados de exemplo.",
  "Combinamos plano, migração e onboarding — sem pressão.",
];

export default function Demonstracao() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", ok: true });
  const hasTrackedStart = useRef(false);

  const trackFormStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackSiteEvent("lead_form_started", { placement: "demonstracao" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ text: "", ok: true });

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
        setMessage({ text: "Abrimos seu e-mail com o pedido de demonstração preenchido.", ok: true });
        return;
      }

      const response = await fetch(`${API}${LEAD}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("lead-request-failed");

      form.reset();
      trackSiteEvent("lead_form_submitted", { segment: payload.segment });
      setMessage({
        text: "Recebemos seu pedido! A equipe Bodymotion entra em contato para agendar a demonstração.",
        ok: true,
      });
    } catch {
      window.location.href = buildMailto(payload);
      trackSiteEvent("lead_form_fallback", { reason: "request_failed" });
      setMessage({ text: "Não foi possível enviar pelo formulário. Abrimos o e-mail como alternativa.", ok: false });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-bm-mist bg-white px-4 py-3 text-sm font-semibold text-bm-ink outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-bm-cyan focus:ring-2 focus:ring-bm-cyan/25";

  return (
    <section
      id="demonstracao"
      className="relative overflow-hidden bg-bm-night px-0 py-20 text-white lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-bm-cyan/15 blur-3xl"
      />
      <div id="contato" className="shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow !text-bm-cyan">Próximo passo</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
            Veja o Bodymotion aplicado à sua rotina.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Conte rapidamente como você atende. A demonstração é guiada, com dados de exemplo,
            e mostra exatamente os fluxos que fazem sentido para a sua operação.
          </p>
          <ol className="mt-9 space-y-4 border-y border-white/15 py-6 text-sm text-white/75">
            {STEPS.map((step, i) => (
              <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-display text-base font-extrabold text-bm-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-white/70">
            Prefere escrever?{" "}
            <a
              className="font-bold text-bm-cyan underline-offset-4 hover:underline"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            onFocus={trackFormStart}
            className="grid gap-5 rounded-2xl bg-white p-6 text-bm-ink shadow-frame sm:p-8"
          >
            <p className="font-display text-xl font-extrabold">Agendar demonstração gratuita</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">
                Nome
                <input required name="name" autoComplete="name" placeholder="Seu nome" className={inputClass} />
              </label>
              <label className="text-sm font-bold">
                WhatsApp
                <input required name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" className={inputClass} />
              </label>
            </div>

            <label className="text-sm font-bold">
              E-mail profissional
              <input required name="email" type="email" autoComplete="email" placeholder="voce@clinica.com.br" className={inputClass} />
            </label>

            <label className="text-sm font-bold">
              Como você atende hoje?
              <select required name="segment" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Clínica multidisciplinar">Clínica multidisciplinar</option>
                <option value="Profissional de educação física">Profissional de educação física</option>
                <option value="Outro perfil de saúde">Outro perfil de saúde</option>
              </select>
            </label>

            <Button type="submit" size="lg" className="mt-1 w-full" loading={loading}>
              Solicitar demonstração
            </Button>

            <p className="text-xs leading-relaxed text-bm-slate">
              Usamos seus dados apenas para retorno comercial e qualificação do atendimento.
              Consulte a nota de{" "}
              <a href="#privacidade" className="font-bold text-bm-cyan-deep underline-offset-4 hover:underline">
                privacidade
              </a>
              .
            </p>

            {message.text && (
              <p
                className={`text-center text-sm font-bold ${message.ok ? "text-bm-cyan-deep" : "text-rose-600"}`}
                aria-live="polite"
              >
                {message.text}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
