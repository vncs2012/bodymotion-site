import assert from "node:assert/strict";
import test from "node:test";
import { buildLeadPayload, submitLead } from "./leads.js";

test("cadastro mantém a origem da campanha e normaliza o contato", () => {
  const payload = buildLeadPayload({ name: " Ana Teste ", email: " ANA@EXAMPLE.COM ", phone: " (11) 99999-0000 ", segment: "Nutricionista" }, "https://www.bodymotion.pro/?utm_source=instagram&utm_campaign=lancamento");
  assert.equal(payload.name, "Ana Teste");
  assert.equal(payload.email, "ana@example.com");
  assert.equal(payload.phone, "(11) 99999-0000");
  assert.equal(payload.source, "site_comercial_bodymotion");
  assert.equal(payload.utm_source, "instagram");
  assert.equal(payload.utm_campaign, "lancamento");
  assert.equal(payload.utm_medium, undefined);
});

test("limita os dados de atribuição ao contrato da API", () => {
  const payload = buildLeadPayload({ name: "Ana", email: "ana@example.com", phone: "11999990000" }, `https://www.bodymotion.pro/?utm_content=${"a".repeat(600)}`);
  assert.equal(payload.page_url.length, 512);
  assert.equal(payload.utm_content.length, 120);
});

test("envia o cadastro para o endpoint comercial e confirma o ID persistido", async () => {
  const payload = { name: "Ana Teste", email: "ana@example.com" };
  const lead = await submitLead(payload, { api: "/api/", endpoint: "/commercial/leads", fetchImpl: async (url, options) => {
    assert.equal(url, "/api/commercial/leads");
    assert.equal(options.method, "POST");
    assert.equal(options.headers["Content-Type"], "application/json");
    assert.deepEqual(JSON.parse(options.body), payload);
    return { ok: true, json: async () => ({ id: 123, is_duplicate: false }) };
  } });
  assert.equal(lead.id, 123);
});

test("um cadastro já recebido também confirma sucesso", async () => {
  const lead = await submitLead({}, { api: "/api", endpoint: "/commercial/leads", fetchImpl: async () => ({ ok: true, json: async () => ({ id: 123, is_duplicate: true }) }) });
  assert.equal(lead.is_duplicate, true);
});

for (const [status, message] of [[422, /Confira/], [429, /Muitas tentativas/], [500, /Não foi possível enviar/]]) {
  test(`erro ${status} não confirma o cadastro`, async () => {
    await assert.rejects(submitLead({}, { api: "/api", endpoint: "/commercial/leads", fetchImpl: async () => ({ ok: false, status }) }), message);
  });
}

test("resposta sem ID não confirma o cadastro", async () => {
  await assert.rejects(submitLead({}, { api: "/api", endpoint: "/commercial/leads", fetchImpl: async () => ({ ok: true, json: async () => ({}) }) }), /confirmar o cadastro/);
});

test("falha de conexão mantém o envio como falha", async () => {
  await assert.rejects(submitLead({}, { api: "/api", endpoint: "/commercial/leads", fetchImpl: async () => { throw new TypeError("Failed to fetch"); } }), /Failed to fetch/);
});
