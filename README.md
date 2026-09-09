# Bodymotion — Site Comercial (Vite + React)

Landing page comercial do Bodymotion orientada a demonstração e captação de leads
qualificados, com a identidade visual oficial da logomarca (navy `#22255a` + ciano
`#50b4e6`, Bricolage Grotesque + Manrope). As fontes são empacotadas via
`@fontsource-variable` (importadas em `src/main.jsx`), sem `<link>` para o CDN do
Google Fonts.

Estrutura da página (branch `feat/site-redesign-2026`):

1. Header fixo, com "Testar grátis" como único CTA primário;
2. Hero com captura real do produto e uma linha de fatos verificáveis (TACO, portal sem app, TCLE, LGPD);
3. Como funciona: 3 passos curtos;
4. Plataforma por objetivo: 4 linhas (Atender, Avaliar, Prescrever, Acompanhar), cada uma com captura real;
5. Para quem é: 3 cartões (nutricionista, clínica multidisciplinar, educação física);
6. Confiança: segurança e privacidade, suporte, rotina brasileira;
7. Planos: toggle mensal/anual, Pro em destaque, Estudante e Enterprise em uma linha;
8. Perguntas: 5 perguntas frequentes;
9. Faixa final: CTA de teste grátis + "Agendar demonstração";
10. Rodapé em uma linha.

"Agendar demonstração" abre uma gaveta (drawer) por cima da página, no lugar da
antiga seção de formulário. No celular, uma barra fixa com "Testar grátis" aparece
depois que o hero sai da tela.

## Pré-render

`npm run build` faz duas etapas em sequência (um único comando):

1. `vite build` — gera o bundle do cliente em `dist/`;
2. `node scripts/prerender.mjs` — builda `src/entry-server.jsx` como bundle SSR em
   `dist-ssr/`, chama `render()` (`renderToString` de `<App />`) e injeta o HTML
   resultante dentro de `<div id="root">…</div>` em `dist/index.html`, no lugar
   do bloco estático.

O bloco estático que existe hoje dentro de `#root` em `index.html` continua no
repositório como fallback — serve o `npm run dev` (sem build) e qualquer cliente
sem JavaScript. Em produção, `dist/index.html` sempre carrega o HTML já
renderizado pelo React, nunca o fallback.

## Estrutura de código

- `index.html`: metadados, JSON-LD (`SoftwareApplication` + `FAQPage`), preload
  da imagem do hero e o bloco estático de fallback dentro de `#root`.
- `src/main.jsx`: monta `<App />` no cliente e marca `<html class="js">` (usado
  pelo CSS para nunca esconder conteúdo antes do JavaScript rodar).
- `src/entry-server.jsx`: ponto de entrada do pré-render — exporta `render()`,
  usado só no build SSR (nunca no navegador).
- `scripts/prerender.mjs`: gera o bundle SSR e injeta o HTML renderizado em
  `dist/index.html` (ver "Pré-render" acima).
- `src/App.jsx`: composição da página e Analytics.
- `src/data/landing.js`: toda a copy editorial (passos, grupos por objetivo, personas, confiança, FAQ).
- `src/data/plans.js`: planos e preços (alinhar sempre com o seed da API).
- `src/data/screens.js`: liga o `screenshotKey` de cada grupo em `data/landing.js`
  a um arquivo em `public/screens/` (`USE_SCREENSHOTS` decide entre captura real
  e composição ilustrativa).
- `src/components/sections/`: seções da página.
- `src/components/mock/`: composições ilustrativas do produto, usadas onde ainda
  não existe captura real em `public/screens/`.
- `src/components/ui/`: Button, Reveal, MotionLine, ProductFrame, Toast.
- `public/brand/`: logomarca oficial (horizontal, branca, símbolo/favicon).
- `public/screens/`: capturas reais do produto.

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (cliente + SSR + pré-render)
npm run preview  # preview do build
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste:

```bash
VITE_API_BASE_URL=http://localhost:8000
VITE_LEAD_ENDPOINT=/commercial/leads
VITE_TRIAL_START_URL=/registro
```

Sem `VITE_API_BASE_URL`, o formulário usa fallback de e-mail (mailto para
`comercial@bodymotion.pro`).

## Screenshots reais do produto

As chaves de `screenshotKey` em `src/data/landing.js` (`atender`, `avaliar` /
`avaliarMobile`, `prescrever` / `prescreverMobile`, `acompanhar`) são resolvidas
em `src/data/screens.js` para um arquivo em `public/screens/`. Onde o arquivo
não existe, a linha correspondente volta sozinha para a composição ilustrativa
em `src/components/mock/`.

**Pendência:** recapturar as telas de `public/screens/` com a conta de
demonstração (dados fictícios), para garantir que refletem o produto atual e
não carregam nenhum dado de paciente real, usando o script automatizado:

```bash
npx playwright install chromium
BM_PANEL_URL=http://localhost:8080 BM_USER=demo.landing BM_PASS='<senha>' node scripts/capture-screens.mjs
```

**LGPD — obrigatório:** use sempre uma conta de demonstração com pacientes
fictícios. Nunca capture telas com nome, e-mail, telefone ou CPF de paciente
real; essas imagens vão para uma página pública. Há um seed de referência em
`scratchpad/seed_demo.sql` da sessão que criou a landing (profissional
"Ana Duarte" + 10 pacientes `@example.com`, marcados com
`person.observation = 'demo-landing-2026'` para facilitar a limpeza).

## Eventos de analytics (Vercel Web Analytics)

- `header_cta_click` / `header_login_click`
- `hero_primary_cta_click` / `hero_secondary_cta_click`
- `module_tab_view` (módulo ativo nas abas)
- `pricing_billing_toggle` / `pricing_cta_click`
- `faq_open`
- `lead_form_started` / `lead_form_submitted` / `lead_form_fallback`

## Checklist antes de publicar

1. Configurar `VITE_API_BASE_URL` público e CORS da API para o domínio real;
2. Enviar um lead de teste e confirmar persistência + notificação + painel `/comercial/leads`;
3. Validar UTMs de ponta a ponta;
4. Conferir `PLAN_BACKEND_IDS` em `src/data/plans.js` contra `GET /subscription/plans`
   do ambiente de produção (IDs divergem entre ambientes);
5. Testar OG image em compartilhamento (WhatsApp/LinkedIn) — `public/og-image.png`.
