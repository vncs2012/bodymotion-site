# BodyMotion Site Comercial (Vite + React)

Frontend comercial do BodyMotion com foco em divulgação e conversão:

- layout moderno com glassmorphism;
- modo claro/escuro;
- seção de funcionalidades;
- 5 planos (incluindo teste grátis);
- integração de checkout preparada para Stripe;
- formulário de lead para equipe comercial.

## Estrutura

- `index.html`: entry do Vite + Tailwind CDN + Stripe script.
- `src/main.jsx`: bootstrap React.
- `src/App.jsx`: layout e lógica do site (tema, FAQ, planos, checkout, lead).
- `src/styles.css`: estilos globais e animações de fundo.
- `.env.example`: variáveis de integração da API.

## Rodar localmente

1. Instale dependências:

```bash
npm install
```

2. Suba ambiente de desenvolvimento:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build
```

4. Preview do build:

```bash
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste:

```bash
VITE_API_BASE_URL=http://localhost:8000
VITE_CHECKOUT_ENDPOINT=/payment/checkout
VITE_LEAD_ENDPOINT=/commercial/leads
VITE_STRIPE_PUBLISHABLE_KEY=
```

## Contrato esperado do checkout

Endpoint chamado pelos botões de plano:

- `POST /payment/checkout`

Payload enviado:

```json
{
  "plan_id": "pro_saude",
  "provider": "stripe",
  "origin": "https://seusite.com",
  "success_url": "https://seusite.com?checkout=success&plan=pro_saude",
  "cancel_url": "https://seusite.com?checkout=cancel&plan=pro_saude"
}
```

Retorno aceito:

- `checkout_url`, ou
- `session_id` (usando `Stripe.redirectToCheckout`).

## Próximo passo recomendado

Testar fluxo ponta a ponta com backend real:

1. selecionar plano;
2. criar checkout;
3. efetuar pagamento em sandbox Stripe;
4. validar atualização de assinatura no sistema.
