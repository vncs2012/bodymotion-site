# Bodymotion — Site Comercial (Vite + React)

Landing page comercial do Bodymotion orientada a demonstração e captação de leads
qualificados, com a identidade visual oficial da logomarca (navy `#22255a` + ciano
`#50b4e6`, Bricolage Grotesque + Manrope).

Estrutura da página (branch `feat/landing-2026`):

1. Hero pôster com composição do painel e prova factual (TACO, portal OTP, TCLE, check-ins);
2. Problema: acompanhamento fragmentado em planilha/PDF/WhatsApp/apps;
3. Módulos em abas (Atendimento, Nutrição+IA, Antropometria, Treinos, Agenda, Portal, Operação);
4. Fluxo em 5 passos;
5. IA auditável ("A IA sugere. A TACO calcula. Você decide.");
6. Personas (nutricionista esportivo e clínica multidisciplinar);
7. Planos compactos (R$ 97/197/347 + Enterprise) com toggle mensal/anual;
8. Segurança com claims defensáveis;
9. FAQ;
10. Formulário de demonstração com UTM e fallback por e-mail.

## Estrutura de código

- `index.html`: metadados, JSON-LD, fontes e conteúdo estático indexável.
- `src/App.jsx`: composição da landing e Analytics.
- `src/data/landing.js`: toda a copy editorial (módulos, passos, FAQ, segurança).
- `src/data/plans.js`: planos e preços (alinhar sempre com o seed da API).
- `src/components/sections/`: seções da página.
- `src/components/mock/`: composições ilustrativas do produto (dados fictícios).
- `src/components/ui/`: Button, Reveal, MotionLine, ProductFrame, Toast.
- `public/brand/`: logomarca oficial (horizontal, branca, símbolo/favicon).

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
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

As telas do produto hoje são composições ilustrativas (`src/components/mock/`),
projetadas para serem trocadas por screenshots reais sem refatorar nada:

1. Capture a tela no painel com uma conta demo e dados fictícios (sem nomes,
   e-mails ou CPFs reais — LGPD), em janela de ~1280×800.
2. Salve em `public/screens/<modulo>.png` (ex.: `nutricao.png`, `dashboard.png`).
3. No componente da seção, passe o caminho ao `ProductFrame`:
   `<ProductFrame screenshot="/screens/nutricao.png" alt="..." />` — o mock é
   substituído automaticamente pela imagem.

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
