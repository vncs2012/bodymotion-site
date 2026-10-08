export function buildLeadPayload(fields, pageUrl) {
  const url = new URL(pageUrl);
  const payload = {
    name: fields.name.trim(),
    email: fields.email.trim().toLowerCase(),
    phone: fields.phone.trim(),
    segment: fields.segment,
    source: "site_comercial_bodymotion",
    page_url: pageUrl.slice(0, 512),
  };
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = url.searchParams.get(key);
    if (value) payload[key] = value.slice(0, 120);
  }
  return payload;
}

export async function submitLead(payload, { api, endpoint, fetchImpl = fetch }) {
  const response = await fetchImpl(`${api.replace(/\/$/, "")}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("Muitas tentativas. Aguarde alguns minutos e tente novamente.");
    }
    if (response.status === 422) {
      throw new Error("Confira seu nome, e-mail e WhatsApp e tente novamente.");
    }
    throw new Error("Não foi possível enviar agora. Tente novamente em instantes.");
  }
  const lead = await response.json();
  if (!Number.isInteger(lead.id) || lead.id <= 0) {
    throw new Error("Não foi possível confirmar o cadastro. Tente novamente em instantes.");
  }
  return lead;
}
