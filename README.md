# BodyMotion Site Comercial (Vite + React)

Landing page comercial do BodyMotion com foco em demonstrações e captação de leads qualificados:

- narrativa centrada em consulta, prescrição, treino e evolução corporal;
- telas reais do produto com dados demonstrativos;
- seções focadas em nutricionistas e clínicas;
- CTA para demonstração guiada;
- formulário de lead com UTM e fallback por e-mail;
- eventos de intenção e conversão via Vercel Analytics;
- SEO básico com canonical, `robots.txt` e sitemap.

## Estrutura

- `index.html`: metadados e entry do Vite.
- `src/App.jsx`: composição da landing page e Analytics.
- `src/components/sections/`: seções comerciais e formulário de demonstração.
- `src/utils/analytics.js`: eventos de intenção e conversão.
- `src/styles/globals.css`: estilos globais e animações.
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
VITE_LEAD_ENDPOINT=/commercial/leads
VITE_TRIAL_START_URL=/registro
```

## Eventos comerciais

Quando o projeto estiver publicado na Vercel, os eventos abaixo podem ser acompanhados no Web Analytics:

1. `cta_demo_clicked`: clique em uma chamada para demonstração;
2. `product_explored`: início da exploração das telas do produto;
3. `plan_interest_clicked`: interesse em um plano;
4. `lead_form_started`: início do preenchimento do formulário;
5. `lead_form_submitted`: envio bem-sucedido para a API;
6. `lead_form_fallback`: uso do e-mail quando a API não está configurada ou falha.

## Próximo passo de publicação

Antes de publicar, configure a URL pública da API e teste o fluxo ponta a ponta:

1. preencher e enviar o formulário;
2. confirmar o lead no painel comercial;
3. validar origem/UTMs e notificações comerciais;
4. cadastrar a imagem Open Graph final antes de divulgar links em redes sociais.
