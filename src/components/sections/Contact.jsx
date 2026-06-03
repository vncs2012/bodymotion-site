import React, { useState } from "react";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

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
  const subject = encodeURIComponent("Acesso antecipado BodyMotion");
  const body = encodeURIComponent(
    [
      `Nome: ${payload.name ?? ""}`,
      `Telefone: ${payload.phone ?? ""}`,
      `E-mail: ${payload.email ?? ""}`,
      `Profissão / clínica: ${payload.segment ?? ""}`,
      "",
      payload.message ?? "",
    ].join("\n"),
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ text: "", ok: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ text: "", ok: true });

    const form = e.currentTarget;
    const payload = {
      ...Object.fromEntries(new FormData(form)),
      ...getTrackingPayload(),
      source: "site_comercial_bodymotion",
    };

    try {
      if (!API || !LEAD) {
        window.location.href = buildMailto(payload);
        setMsg({ text: "Abrimos seu app de e-mail com a mensagem preenchida para a equipe BodyMotion.", ok: true });
        return;
      }

      const res = await fetch(`${API}${LEAD}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setMsg({ text: "Contato enviado. Vamos retornar com as próximas etapas de acesso.", ok: true });
      form.reset();
    } catch {
      window.location.href = buildMailto(payload);
      setMsg({ text: "Não foi possível enviar pelo formulário. Abrimos o e-mail como alternativa.", ok: false });
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "mt-2 w-full rounded-xl border border-slate-300/50 bg-white/80 dark:border-white/10 dark:bg-slate-800/70 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30";

  return (
    <section id="contato" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 scroll-mt-24">
      <GlassCard>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Solicite acesso ao BodyMotion
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Conte sobre sua operação para entrarmos com o melhor plano de onboarding: nutrição, treino, avaliação corporal, portal e IA em beta assistido.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm">Seg–Sex, 9h às 18h</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-2xl border border-slate-200/40 dark:border-white/[0.06] bg-white/40 dark:bg-white/[0.03] p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Nome
                <input required name="name" placeholder="Seu nome" className={inputCls} />
              </label>
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Telefone
                <input required name="phone" placeholder="(00) 00000-0000" className={inputCls} />
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              E-mail
              <input required type="email" name="email" placeholder="voce@empresa.com" className={inputCls} />
            </label>

            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Profissão / Clínica
              <input name="segment" placeholder="Ex: Nutricionista Esportivo" className={inputCls} />
            </label>

            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Mensagem
              <textarea name="message" rows={3} placeholder="Conte sobre sua clínica, número de profissionais e módulos de interesse..." className={inputCls} />
            </label>

            <Button type="submit" className="w-full mt-1" loading={loading}>
              Solicitar acesso
            </Button>

            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Ao enviar, você autoriza o BodyMotion a usar estes dados para
              retornar seu contato comercial. Veja como tratamos segurança e
              privacidade em{" "}
              <a
                href="#privacidade"
                className="font-semibold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300"
              >
                privacidade
              </a>
              .
            </p>

            {msg.text && (
              <p className={`text-sm font-semibold text-center ${msg.ok ? "text-teal-600 dark:text-teal-400" : "text-rose-500"}`}>
                {msg.text}
              </p>
            )}
          </form>
        </div>
      </GlassCard>
    </section>
  );
}
