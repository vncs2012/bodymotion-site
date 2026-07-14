import React, { useRef, useState } from "react";
import Button from "../ui/Button";
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

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demonstração BodyMotion")}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", ok: true });
  const hasTrackedStart = useRef(false);

  const trackFormStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackSiteEvent("lead_form_started", { placement: "contact" });
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
      setMessage({ text: "Recebemos seu pedido. A equipe BodyMotion entrará em contato para agendar a demonstração.", ok: true });
    } catch {
      window.location.href = buildMailto(payload);
      trackSiteEvent("lead_form_fallback", { reason: "request_failed" });
      setMessage({ text: "Não foi possível enviar pelo formulário. Abrimos o e-mail como alternativa.", ok: false });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "mt-2 w-full rounded-[8px] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-bodymotion-blue focus:ring-2 focus:ring-bodymotion-blue/20";

  return (
    <section id="contato" className="bg-bodymotion-navy px-4 py-20 text-white sm:px-6 lg:py-28 scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-bodymotion-yellow">Próximo passo</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">
            Veja o BodyMotion aplicado à sua rotina.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
            Conte rapidamente como você atende. Na demonstração, mostramos os fluxos que fazem sentido para sua operação e orientamos o próximo passo de onboarding.
          </p>
          <ol className="mt-9 space-y-4 border-y border-white/20 py-6 text-sm text-blue-100">
            <li className="grid grid-cols-[1.75rem_1fr] gap-3"><span className="font-display font-extrabold text-bodymotion-yellow">01</span>Entendemos sua rotina e o perfil de atendimento.</li>
            <li className="grid grid-cols-[1.75rem_1fr] gap-3"><span className="font-display font-extrabold text-bodymotion-yellow">02</span>Mostramos os fluxos mais úteis para sua operação.</li>
            <li className="grid grid-cols-[1.75rem_1fr] gap-3"><span className="font-display font-extrabold text-bodymotion-yellow">03</span>Combinamos um onboarding adequado antes da ativação.</li>
          </ol>
          <div className="mt-6 text-sm text-blue-100">
            <p className="font-bold text-white">Prefere escrever diretamente?</p>
            <a className="mt-2 inline-block font-semibold text-bodymotion-yellow underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} onFocus={trackFormStart} className="grid gap-5 rounded-2xl bg-white p-6 text-slate-900 shadow-2xl shadow-bodymotion-midnight/30 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold">
              Nome
              <input required name="name" autoComplete="name" placeholder="Seu nome" className={inputClass} />
            </label>
            <label className="text-sm font-bold">
              Telefone
              <input required name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" className={inputClass} />
            </label>
          </div>

          <label className="text-sm font-bold">
            E-mail profissional
            <input required name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" className={inputClass} />
          </label>

          <label className="text-sm font-bold">
            Como você atende hoje?
            <select required name="segment" defaultValue="" className={inputClass}>
              <option value="" disabled>Selecione uma opção</option>
              <option value="Nutricionista">Nutricionista</option>
              <option value="Clínica multidisciplinar">Clínica multidisciplinar</option>
              <option value="Profissional de educação física">Profissional de educação física</option>
              <option value="Outro perfil de saúde">Outro perfil de saúde</option>
            </select>
          </label>

          <Button type="submit" size="lg" className="mt-1 w-full" loading={loading}>
            Solicitar demonstração
          </Button>

          <p className="text-xs leading-relaxed text-slate-500">
            Usamos seus dados apenas para retorno comercial, qualificação do atendimento e registro operacional. Consulte nossa{" "}
            <a href="#privacidade" className="font-semibold text-bodymotion-blue underline-offset-4 hover:underline">política de privacidade</a>.
          </p>

          {message.text && (
            <p className={`text-center text-sm font-semibold ${message.ok ? "text-bodymotion-blue" : "text-rose-600"}`} aria-live="polite">
              {message.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
