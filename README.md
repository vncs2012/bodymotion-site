# Bodymotion — Site Comercial (Vite + React)

Landing page comercial do Bodymotion orientada a demonstração e captação de leads
qualificados, com a identidade visual oficial da logomarca (navy `#22255a` + ciano
`#50b4e6`, Bricolage Grotesque + Manrope). As fontes são empacotadas via
`@fontsource-variable` (importadas em `src/main.jsx`), sem `<link>` para o CDN do
Google Fonts.

## Página de divulgação atual

A branch `feat/site-redesign-2026` mostra somente a apresentação inicial e um
formulário de interesse. No desktop, a composição ocupa a altura da tela; em
celulares ou telas baixas, o conteúdo pode rolar para manter o formulário legível.
Planos, navegação, teste grátis e seções detalhadas não são renderizados. O
site completo está preservado em `src/FullSite.jsx`, com todas as seções e
interações originais. A abertura usa um carrossel com telas atualizadas do painel:
home preenchida primeiro, depois consulta, prontuário, evolução física e plano alimentar.
A abertura destaca a avaliação física com IA por fotos, em beta, e a revisão
das medidas pelo profissional.
“Ampliar” abre a imagem completa do
painel em uma visualização com fechamento por botão ou Esc.
O carrossel alterna a cada 7 segundos e pausa durante interação do mouse,
ampliação ou quando a aba está em segundo plano. Receber foco desliga a troca
até a pessoa apertar iniciar. As setas, os botões com nome
das telas, o seletor compacto e o gesto horizontal no celular permitem navegar manualmente; uma
escolha manual desliga a troca automática até a pessoa apertar iniciar.
Quem prefere movimento reduzido começa com a troca automática desligada.

Para reativar o site completo, altere `VITE_SITE_MODE=launch` para
`VITE_SITE_MODE=full` no ambiente e faça um novo build/deploy (ou reinicie o Vite
em desenvolvimento). Sem configuração, o modo de divulgação permanece ativo.
A troca é manual, sem uma data automática de ativação.

O formulário pede nome, WhatsApp, e-mail e perfil profissional. Envia para
`POST /commercial/leads`, preservando a URL e UTMs da campanha. Só confirma o
cadastro após receber um ID da API. Em falhas, mantém os dados preenchidos e
permite tentar novamente. Não há endereço comercial alternativo publicado
neste formulário.

Os registros aparecem em **Leads comerciais**, `/comercial/leads`, no painel.
A rota do painel exige administrador; listagem e alterações da API já usam
`require_admin()` (`manage_plans`). Leads da prática são outro cadastro, voltado
aos pacientes potenciais das clínicas, e não são usados por esta página.

Validação local em 07/10/2026: envio pelo formulário no navegador, resposta
HTTP 201, confirmação no PostgreSQL e visualização no painel administrativo.
Dois envios do mesmo contato resultaram em um único registro. O teste usou
uma instância temporária da rota real com notificações desativadas e o banco
local; o cadastro fictício e os serviços temporários foram removidos ao final.

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

- `index.html`: metadados, JSON-LD (`SoftwareApplication`) e o bloco estático de
  fallback dentro de `#root`.
- `src/main.jsx`: monta `<App />` no cliente e marca `<html class="js">` (usado
  pelo CSS para nunca esconder conteúdo antes do JavaScript rodar).
- `src/entry-server.jsx`: ponto de entrada do pré-render — exporta `render()`,
  usado só no build SSR (nunca no navegador).
- `scripts/prerender.mjs`: gera o bundle SSR e injeta o HTML renderizado em
  `dist/index.html` (ver "Pré-render" acima).
- `src/App.jsx`: página de divulgação e Analytics.
- `src/FullSite.jsx`: site completo preservado; ativado por `VITE_SITE_MODE=full`.
- `src/components/LaunchPage.jsx`: abertura em tela inteira com identidade atual.
- `src/components/InterestForm.jsx`: formulário com validação, envio e confirmação.
- `src/utils/leads.js`: contrato de envio, UTMs e tratamento de respostas da API.
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
# Opcional: vazio usa /api em dev e https://api.bodymotion.pro em produção
VITE_API_BASE_URL=
VITE_API_PROXY_TARGET=http://127.0.0.1:8000
VITE_LEAD_ENDPOINT=/commercial/leads
VITE_TRIAL_START_URL=/registro
```

Em desenvolvimento, `/api` é encaminhado pelo Vite para `VITE_API_PROXY_TARGET`.
Em produção, configure `VITE_API_BASE_URL` se o destino diferir de
`https://api.bodymotion.pro` e permita o domínio do site no CORS da API.
O formulário só confirma o cadastro após a resposta de sucesso da API com ID.

## Screenshots reais do produto

A abertura de divulgação usa `home-demo-atual.jpg`, `consulta-demo-atual.jpg`, `prontuario-demo-atual.jpg`,
`evolucao-demo-atual.jpg` e `dieta-demo-atual.jpg`
(1600 × 900), capturadas em 07/10/2026 com os componentes atuais do painel.
Uma entrada temporária e isolada renderizou `WorkspaceHeader`, `SummaryTab`,
os componentes `Today*`, `EvolutionSummaryTiles`, `EvolutionCharts` e a navegação
atual com fixtures inteiramente fictícias. O plano alimentar combina
`DietSectionLayout` com o renderizador de leitura de `PatientPortal/DietSection.tsx`,
copiado sem alterações para a entrada temporária e disposto em duas colunas.
A consulta preserva a marcação visual atual de `ConsultationWorkspace`, com
evolução, anamnese, antropometria e prescrição preenchidas por fixtures. Os
provedores, editores, gravação, câmera e consultas à API foram omitidos; o
botão de envio de link é apenas visual nesta entrada de captura.
Nas imagens de divulgação, Comunicação está oculta e Gestão exibe somente
Financeiro e Relatórios. Esse recorte não altera o menu funcional do painel.
O cabeçalho identifica a demonstração. Essa entrada não monta autenticação
nem consultas à API; nenhum paciente real foi aberto e nenhum registro foi
criado ou alterado. O código temporário foi retirado do painel após a captura.

As chaves de `screenshotKey` em `src/data/landing.js` (`atender`, `avaliar` /
`avaliarMobile`, `prescrever` / `prescreverMobile`, `acompanhar`) são resolvidas
em `src/data/screens.js` para um arquivo em `public/screens/`. Onde o arquivo
não existe, a linha correspondente volta sozinha para a composição ilustrativa
em `src/components/mock/`.

**Pendência do site completo:** recapturar as demais telas de `public/screens/` com a conta de
demonstração (dados fictícios), para garantir que refletem o produto atual e
não carregam nenhum dado de paciente real, usando o script automatizado:

```bash
npx playwright install chromium
BM_PANEL_URL=http://localhost:8080 BM_USER=demo.landing BM_PASS='<senha>' node scripts/capture-screens.mjs
```

**LGPD — obrigatório:** para capturas com registros, use uma conta de demonstração
com pacientes fictícios. Nunca capture telas com nome, e-mail, telefone ou CPF de paciente
real; essas imagens vão para uma página pública. Há um seed de referência em
`scratchpad/seed_demo.sql` da sessão que criou a landing (profissional
"Ana Duarte" + 10 pacientes `@example.com`, marcados com
`person.observation = 'demo-landing-2026'` para facilitar a limpeza).

## Validação

```bash
npm test         # contrato de envio, UTMs, sucesso e falhas
npm run build    # cliente + SSR + pré-render
```

## Eventos de analytics (Vercel Web Analytics)

- `lead_form_started` (`placement: launch_page`)
- `lead_form_submitted` (perfil profissional e `placement: launch_page`)
- `product_preview_change` (nome da tela selecionada)
- `product_preview_open` (nome da tela e `placement: launch_page`)

## Checklist antes de publicar

1. Configurar `VITE_API_BASE_URL` público e CORS da API para o domínio real;
2. Enviar um lead de teste e confirmar persistência + notificação + painel `/comercial/leads`;
3. Validar UTMs de ponta a ponta;
4. Testar OG image em compartilhamento (WhatsApp/LinkedIn) — `public/og-image.png`.
