# Plano de implementação — site comercial e geração de leads BodyMotion

Data da análise: 13/07/2026<br>
Branch: `feat/site-lead-generation`<br>
Escopo analisado: `bodymotion-site`, `bodymotion-api`, `bodymotion-painel`, `bodymotion-mobile`, documentação consolidada, experiência local em desktop/mobile e páginas públicas dos concorrentes.

## 1. Decisão executiva

O BodyMotion já tem produto suficiente para um site comercial convincente, mas a comunicação atual mistura lançamento, roadmap, quatro públicos, quatro planos e quase todos os módulos em uma única página longa.

A recomendação é construir um site estático orientado a conversão, com foco inicial em **nutricionistas esportivos e clínicas multidisciplinares que acompanham nutrição, treino e evolução corporal**.

O site deve vender uma transformação simples:

> BodyMotion reúne nutrição, treino e evolução corporal no mesmo acompanhamento, com operação clínica e portal do paciente conectados.

O projeto deve começar como geração de demanda e demonstração assistida. O self-service com trial e checkout só deve ser ativado depois da correção do fluxo público de registro e da validação ponta a ponta em produção.

### O que fazer agora

1. Publicar imediatamente as correções factuais que já existem localmente.
2. Garantir captura de lead, alerta comercial e acompanhamento no painel em produção.
3. Redesenhar a home com menos seções, screenshots reais e um CTA principal.
4. Criar páginas específicas para nutricionistas, clínicas, preços e demonstração.
5. Migrar a camada pública para geração estática com Astro, preservando React apenas nas interações.
6. Instrumentar o funil inteiro até lead qualificado, demonstração, trial e venda.

### O que não fazer agora

- Não anunciar médicos e fisioterapeutas como ICP principal sem validação comercial.
- Não usar depoimentos, logos ou métricas inventadas.
- Não prometer conformidade total com LGPD, criptografia ponta a ponta ou disponibilidade sem evidência operacional/publicável.
- Não abrir cadastro e checkout públicos enquanto o registro aceitar bypass e o onboarding não preservar plano/origem com segurança.
- Não criar blog, CMS, personalização dinâmica ou testes A/B antes de fechar a base de conversão e medição.

## 2. Evidências encontradas

### 2.1 Produto real

O sistema atual já cobre:

- pacientes, prontuário, consultas SOAP e timeline clínica;
- anamnese e pacotes de perguntas;
- antropometria, histórico, captura remota por foto e modelo 3D sob liberação;
- prescrição, PDF, entrega e cálculo nutricional com TACO;
- planos alimentares, substituições, lista de compras, diário alimentar e hábitos;
- treinos com biblioteca, templates, planos, RPE, progresso, links e check-ins;
- agenda, ICS, teleconsulta via Jitsi e TCLE;
- portal do paciente com OTP;
- app mobile Expo para profissionais;
- relatórios, worklist clínica, observabilidade, permissões e suporte;
- assinatura, trial, checkout e gateways Stripe, Asaas e Pagar.me;
- leads comerciais com UTM, deduplicação, status, notas, CSV, e-mail e webhook.

Evidências principais:

- `bodymotion-api/docs/FUNCIONALIDADES_DO_SISTEMA.md`
- `docs/product/PLANOS_GAPS_FEATURES.md`
- `docs/architecture/auditoria-2026-07/12_ANALISE_POR_SERVICO.md`
- `bodymotion-api/src/api/v1/commercial.py`
- `bodymotion-api/src/api/v1/patient_portal.py`
- `bodymotion-api/src/api/v1/trainings.py`
- `bodymotion-api/src/api/v1/prescription_meals.py`
- `bodymotion-painel/src/App.tsx`
- `bodymotion-mobile/app/`

### 2.2 Captura de leads

O diagnóstico antigo de que faltava backend de leads está desatualizado. O fluxo local já existe:

```text
site
  -> POST /commercial/leads
  -> validação + rate limit + deduplicação
  -> core.commercial_lead
  -> notificação por e-mail/webhook
  -> painel /comercial/leads
  -> status + notas + CSV
```

O bloqueio atual é de produção:

- aplicar a migration correta;
- configurar `VITE_API_BASE_URL` e `VITE_LEAD_ENDPOINT`;
- configurar destinatários/notificação da API;
- liberar CORS somente para os domínios reais;
- executar smoke com persistência, alerta e painel;
- definir política de retenção de leads.

Documento operacional: `bodymotion-api/docs/COMMERCIAL_LEADS_OPERACAO.md`.

### 2.3 Trial e checkout

Os planos e preços locais estão alinhados ao seed da API (`R$ 97`, `R$ 197` e `R$ 347`), mas o site mantém IDs numéricos do banco em código. Isso cria risco de divergência entre ambientes.

O registro público também exige atenção:

- `RegisterPage.tsx` permite registro direto e envia `bypass_token_validacao` quando não recebe token;
- a página recebe a promessa de 14 dias grátis, mas ainda não usa de forma confiável `plan`, `planId` e `billing` para fechar o ciclo;
- o site só deve habilitar `VITE_TRIAL_START_URL` quando registro, trial, checkout, retorno e webhook estiverem validados em produção.

### 2.4 Site publicado versus código local

O site publicado ainda comunica:

- “lançamento em breve”;
- IA e recursos já existentes como futuro;
- métricas comerciais sem prova;
- claims absolutos de segurança;
- contato antigo em `bodymotion.com.br`;
- conteúdo principal dependente de JavaScript para leitura direta por crawler.

O código local já corrige parte desses problemas, mas ainda não está refletido no ambiente público. A busca pública rastreada em julho de 2026 continua mostrando o conteúdo antigo.

### 2.5 Experiência local atual

Pontos positivos:

- identidade visual reconhecível;
- hierarquia forte no hero;
- boa responsividade básica;
- foco visível e skip link;
- diferenciação correta da IA como assistente auditável;
- formulário conectado ao contrato atual de leads;
- labels claros entre disponível, beta e roadmap;
- build de produção aprovado.

Problemas de conversão:

- página longa demais, especialmente no mobile;
- excesso de conteúdo antes do formulário;
- quatro públicos disputam a mesma narrativa;
- hero usa uma interface fictícia quando existem telas reais;
- repetição entre benefícios, módulos, segmentos e fluxo;
- tabela completa de planos ocupa muito espaço na home;
- ausência de prova social verificável;
- ausência de link claro para “Entrar” no produto;
- analytics registra pageview, mas não os eventos do funil;
- OG image referenciada, porém não existe no repositório;
- não há `robots.txt`, `sitemap.xml` ou páginas legais reais no projeto;
- componente de depoimentos contém dados fictícios, mesmo estando fora de `App.jsx`;
- README do site descreve arquitetura e fluxo que já não correspondem ao código.

## 3. Público, posicionamento e oferta

### 3.1 ICP primário

**Nutricionista esportivo ou clínico com acompanhamento recorrente**, que:

- atende de forma particular;
- acompanha composição corporal e adesão;
- usa planilhas, PDFs e WhatsApp em paralelo;
- quer prescrever, acompanhar e demonstrar evolução;
- valoriza nutrição e treino no mesmo contexto;
- atende sozinho ou com equipe pequena.

### 3.2 ICP secundário

**Clínica multidisciplinar de pequeno/médio porte**, que:

- tem mais de um profissional;
- precisa de permissões e histórico central;
- quer padronizar atendimento e acompanhar operação;
- pode pagar onboarding e plano superior.

### 3.3 Público de expansão

- personal trainer que trabalha conectado a nutricionista;
- redes e operações corporativas;
- médicos e fisioterapeutas, somente após descoberta e prova de aderência.

### 3.4 Posicionamento recomendado

**Categoria:** plataforma de acompanhamento de saúde e performance.<br>
**Recorte:** nutrição + treino + evolução corporal.<br>
**Razão para acreditar:** TACO auditável, antropometria/fotos, treinos/check-ins, portal, teleconsulta e operação clínica no mesmo histórico.

### 3.5 Mensagem principal

Marca:

`BodyMotion`

Headline recomendada:

`Nutrição, treino e evolução corporal no mesmo acompanhamento.`

Subheadline:

`Centralize prescrição com TACO, antropometria, treinos, teleconsulta e portal do paciente sem espalhar a rotina entre planilhas, PDFs e aplicativos.`

CTA primário enquanto o self-service não estiver aprovado:

`Agendar uma demonstração`

CTA secundário:

`Ver a plataforma em 90 segundos`

Depois do gate de self-service:

- primário: `Começar teste grátis`;
- secundário: `Agendar demonstração`.

### 3.6 Proposta comercial inicial

Não usar os quatro cards detalhados na home. Exibir:

- “Planos a partir de R$ 97/mês”;
- oferta recomendada para profissional solo;
- oferta para clínica/equipe;
- IA/foto/3D como add-on ou tier avançado;
- link para comparação completa em `/precos`.

Antes de investir em mídia, validar em entrevistas:

- disposição a pagar por nutrição + treino integrado;
- limite de pacientes e profissionais percebido como justo;
- valor específico atribuído à IA, foto e 3D;
- preferência entre trial autônomo e demo assistida;
- objeções de migração, segurança e curva de aprendizado.

## 4. Direção visual e de interação

### 4.1 Tese visual

> SaaS clínico de performance com clareza editorial: superfícies claras, azul/ciano BodyMotion, fotografia humana autêntica e telas reais do produto como principal prova.

Regras:

- hero edge-to-edge, tratado como pôster;
- marca é o texto mais forte;
- uma única cor de ação;
- duas famílias tipográficas no máximo;
- sem mosaico de cards genéricos;
- sem interface fictícia no hero;
- sem dark mode no lançamento comercial, reduzindo distração e custo de QA;
- produto logado continua seguindo o sistema visual operacional já documentado.

### 4.2 Plano de conteúdo visual

1. **Hero:** foto real de consulta/performance com área calma para texto ou screenshot real dominante e tratado editorialmente.
2. **Prova de produto:** três telas sanitizadas do painel/portal/mobile.
3. **Narrativa do fluxo:** prescrever -> acompanhar -> revisar evolução.
4. **Final:** profissional e paciente, com CTA de demonstração.

Antes de publicar screenshots:

- usar uma conta demo com dados fictícios consistentes;
- remover nomes, e-mails, CPF, datas e identificadores reais;
- capturar em resolução padronizada;
- não usar telas em loading ou estados incompletos;
- produzir WebP/AVIF responsivo e manter PNG apenas como fonte.

### 4.3 Tese de interação

- entrada curta do hero: marca, headline, CTA e visual, em sequência de 500–700 ms;
- storytelling sticky com três screenshots reais durante a rolagem;
- transição suave entre módulos e estados do produto;
- microinteração clara em CTA/formulário;
- respeitar `prefers-reduced-motion` e nunca depender de animação para compreensão.

## 5. Arquitetura de informação

### 5.1 Rotas da primeira versão

| Rota | Objetivo | CTA |
| --- | --- | --- |
| `/` | apresentar categoria, diferenciação e prova | agendar demonstração |
| `/nutricionistas` | landing do ICP primário | solicitar demonstração/teste |
| `/clinicas` | operação multiusuário e gestão | falar com especialista |
| `/funcionalidades` | módulos, estados e screenshots | ver demonstração |
| `/precos` | preço, limites e comparação | escolher plano/demonstração |
| `/demonstracao` | conversão sem distrações | enviar lead |
| `/privacidade` | tratamento de dados comerciais | contato de privacidade |
| `/termos` | termos comerciais e de uso público | — |

Segunda onda:

- `/integracoes`;
- `/seguranca`;
- `/recursos/*` com conteúdos de intenção de busca;
- `/clientes/*` quando existirem cases verificáveis;
- `/blog/*` somente com calendário editorial real.

### 5.2 Estrutura da home

1. Header: marca, Produto, Para nutricionistas, Para clínicas, Preços, Entrar e CTA.
2. Hero: promessa, uma frase, CTA principal e visual real.
3. Prova factual: TACO, portal, treinos/check-ins e teleconsulta/TCLE.
4. Problema: planilha + PDF + WhatsApp + app de treino fragmentam o acompanhamento.
5. Produto: narrativa de três momentos com screenshots reais.
6. Diferencial: nutrição + treino + evolução corporal no mesmo histórico.
7. Para quem: somente ICP primário e secundário.
8. Planos: resumo compacto e link para `/precos`.
9. Segurança/privacidade: claims defensáveis e link para página completa.
10. FAQ: 5–6 objeções comerciais reais.
11. CTA final + formulário curto.

Remover da home:

- tabela extensa de comparação;
- roadmap detalhado;
- quatro personas completas;
- repetição de benefícios e funcionalidades;
- três CTAs diferentes no mesmo bloco;
- componentes de depoimentos fictícios.

## 6. Funil de aquisição e operação comercial

### 6.1 Jornada alvo

```text
visita qualificada
  -> CTA principal
  -> formulário iniciado
  -> lead salvo
  -> alerta comercial
  -> lead qualificado
  -> demonstração realizada
  -> trial/onboarding
  -> assinatura ativa
```

### 6.2 Formulário recomendado

Obrigatórios:

- nome;
- WhatsApp;
- e-mail profissional;
- perfil: nutricionista, clínica, personal/equipe, outro.

Qualificação progressiva:

- número de profissionais;
- faixa de pacientes ativos;
- principal interesse;
- melhor horário.

Evitar um campo aberto longo na primeira conversão. A equipe pode aprofundar na demonstração.

### 6.3 Contrato de lead

Manter:

- `name`, `email`, `phone`, `segment`, `source`, `page_url`;
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`;
- rate limit, IP com hash e janela de deduplicação;
- fallback por e-mail somente como último recurso visível.

Evoluir:

- transformar perfil e tamanho da operação em campos estruturados;
- registrar `referrer` e landing path;
- registrar variante da página/campanha quando houver experimento real;
- definir responsável e prazo de primeiro contato;
- enviar evento de conversão somente após confirmação da API;
- criar alerta de falha 5xx/429 e de notificação comercial.

### 6.4 SLA comercial inicial

- lead nunca pode falhar silenciosamente;
- alerta deve chegar em até 1 minuto após persistência;
- primeiro contato em até 15 minutos no horário comercial;
- todo lead deve receber status e próxima ação;
- duplicata deve atualizar contexto comercial ou ser claramente identificada;
- retenção e descarte de lead devem ter política documentada.

## 7. Arquitetura técnica recomendada

### 7.1 Decisão

Migrar o site público de React/Vite totalmente client-side para **Astro com saída estática**, Tailwind e ilhas React.

Motivos:

- conteúdo comercial precisa chegar como HTML em todas as rotas;
- menos JavaScript no primeiro carregamento;
- metadata, sitemap, robots e JSON-LD por página;
- React continua disponível para formulário, tabs e preços;
- migração incremental possível;
- arquitetura mais simples que Next.js para um site sem sessão e sem SSR dinâmico.

Não adicionar:

- Redux/Zustand;
- camada de domínio complexa;
- BFF;
- CMS antes de haver rotina editorial;
- autenticação no site público.

### 7.2 Estrutura proposta

```text
src/
  components/
    layout/
    sections/
    ui/
  islands/
    LeadForm.tsx
    PricingToggle.tsx
    ProductTabs.tsx
  content/
    features/
    faq/
  layouts/
    MarketingLayout.astro
  lib/
    analytics.ts
    lead-api.ts
    offers.ts
    tracking.ts
  pages/
    index.astro
    nutricionistas.astro
    clinicas.astro
    funcionalidades.astro
    precos.astro
    demonstracao.astro
    privacidade.astro
    termos.astro
  styles/
    globals.css
public/
  images/
  robots.txt
  favicon.svg
  og/
```

### 7.3 Fonte única de preços

Curto prazo:

- manter ofertas em módulo tipado e versionado;
- remover IDs numéricos fixos do banco;
- usar slug estável (`starter`, `pro-saude`, `pro-plus`);
- adicionar teste de contrato entre seed da API e ofertas do site.

Evolução recomendada:

- adicionar `public_slug` estável ao plano;
- criar `GET /commercial/plans` público, somente leitura;
- retornar apenas plano ativo, preço público, periodicidade, limites e labels comerciais aprovadas;
- usar cache/ETag;
- consumir no build estático, falhando o CI quando houver divergência não aprovada.

### 7.4 Integrações

- leads: `POST /commercial/leads`;
- demonstração: lead com `intent=demo` ou campo equivalente;
- analytics: Vercel Analytics ou alternativa aprovada, com eventos explícitos;
- agendamento: Calendly/Cal.com somente se houver agenda e responsável definidos;
- trial: app autenticado após gate de segurança;
- checkout: sempre iniciado no app autenticado, nunca com segredo no site.

## 8. SEO, performance e distribuição

### 8.1 Entregas obrigatórias

- HTML completo por rota;
- title e description únicos;
- canonical consistente em `https://www.bodymotion.pro`;
- `robots.txt` e `sitemap.xml`;
- Open Graph/Twitter com imagem real existente;
- JSON-LD de `SoftwareApplication`, `Organization`, `FAQPage` e `BreadcrumbList` onde aplicável;
- redirects de URLs antigas;
- página 404 útil;
- favicon e manifest coerentes;
- Search Console e Bing Webmaster configurados;
- submissão de sitemap após deploy.

### 8.2 Performance

- não carregar Stripe no site enquanto checkout for hospedado no app;
- fontes self-hosted ou com subset e preload criterioso;
- imagens em AVIF/WebP, tamanhos responsivos e dimensões fixas;
- hidratar apenas ilhas interativas;
- adiar analytics sem bloquear renderização;
- budget inicial:
  - JS inicial abaixo de 90 kB gzip na home;
  - LCP abaixo de 2,5 s no percentil 75;
  - CLS abaixo de 0,1;
  - INP abaixo de 200 ms;
  - Lighthouse Performance >= 90 em CI controlado.

## 9. Analytics e métricas

### 9.1 Eventos

| Evento | Quando | Propriedades mínimas |
| --- | --- | --- |
| `landing_view` | página carregada | path, referrer, UTM |
| `primary_cta_click` | CTA principal | page, placement, intent |
| `product_demo_play` | vídeo iniciado | page, placement |
| `pricing_view` | seção/página vista | page |
| `plan_cta_click` | plano selecionado | plan_slug, billing |
| `lead_form_start` | primeiro campo alterado | form_id, page |
| `lead_submit_attempt` | submit | form_id, intent |
| `lead_submit_success` | API confirmou | lead_id ou hash, duplicate |
| `lead_submit_error` | falha real | status_class, fallback |
| `login_click` | entrada no app | page |
| `trial_start_click` | gate liberado | plan_slug, billing |

Não enviar e-mail, telefone, nome, CPF ou mensagem para analytics.

### 9.2 KPIs

- visita qualificada -> CTA;
- CTA -> início de formulário;
- início -> lead salvo;
- lead -> qualificado;
- qualificado -> demonstração;
- demonstração -> trial;
- trial -> assinatura;
- tempo até primeiro contato;
- conversão por origem/campanha/landing;
- taxa de erro do formulário.

Definir metas de conversão somente após uma baseline mínima de tráfego qualificado. Antes disso, o objetivo é 100% de observabilidade do funil e zero perda silenciosa de lead.

## 10. Segurança, privacidade e claims

### 10.1 Claims permitidos

- conexão protegida por HTTPS/TLS;
- controle de acesso e permissões;
- consentimento/TCLE nos fluxos aplicáveis;
- dados comerciais usados para retorno e qualificação;
- IA como assistência com revisão do profissional;
- TACO como referência de cálculo, com resultado revisável.

### 10.2 Claims condicionados a evidência

- uptime/99,9%;
- backups diários e recuperação;
- ambiente dedicado;
- certificações;
- criptografia em repouso para todos os dados;
- conformidade total com LGPD;
- resultados clínicos ou redução de tempo/abandono.

### 10.3 Requisitos do formulário

- texto de finalidade e base de contato;
- link para política de privacidade real;
- retenção definida;
- e-mail de privacidade;
- rate limit existente;
- honeypot simples na primeira versão;
- Turnstile somente se o spam justificar;
- mensagens de erro sem expor detalhes internos;
- acessibilidade de validação e `aria-live`.

## 11. Testes e critérios de qualidade

### 11.1 Automação

Unitários:

- montagem de payload/UTM;
- normalização de telefone;
- validação do formulário;
- seleção de oferta/plano;
- URLs de trial/checkout;
- limpeza de dados sensíveis em analytics.

Integração:

- lead criado;
- duplicata;
- erro 422;
- rate limit 429;
- erro 5xx e fallback;
- evento de analytics somente após sucesso.

E2E com Playwright:

- home e navegação em desktop/mobile;
- CTA para demonstração;
- formulário com teclado;
- sucesso, erro e retry;
- página de preços;
- menu mobile;
- links legais e “Entrar”;
- ausência de overflow horizontal.

Qualidade:

- build estático;
- HTML contém H1/copy/links sem executar JS;
- Lighthouse CI;
- axe nas rotas principais;
- visual regression em 1440x900 e 390x844;
- `prefers-reduced-motion`;
- teste de links e metadata;
- smoke do lead contra homologação.

### 11.2 Gates de release

- build, lint, typecheck e testes verdes;
- nenhum erro de console;
- todos os CTAs levam ao destino correto;
- lead aparece no painel e notificação chega;
- Search Console consegue rastrear HTML;
- OG image responde 200;
- privacidade e termos publicados;
- nenhum dado real em screenshot;
- claims aprovados por responsável de produto/operação;
- rollback de deploy documentado.

## 12. Fases de implementação

### Fase 0 — estabilização de produção (1–2 dias)

Objetivo: parar de divulgar informação antiga e garantir que nenhum lead se perca.

Entregas:

- publicar correções factuais já existentes;
- remover claims e métricas sem prova do ambiente público;
- corrigir domínio/e-mail/metadata;
- confirmar variáveis do site/API e CORS;
- aplicar migration de leads;
- executar smoke site -> API -> painel -> notificação;
- monitorar 5xx/429;
- manter CTA como demonstração/acesso assistido.

Aceite:

- conteúdo publicado corresponde ao produto atual;
- lead real de teste aparece no painel;
- alerta comercial chega;
- fallback é acionável e não silencioso.

### Fase 1 — fundação estática e medição (3–5 dias)

Objetivo: criar base indexável, rápida e mensurável.

Entregas:

- Astro + Tailwind + React islands;
- layout, tokens e componentes básicos;
- rotas `/`, `/precos`, `/demonstracao`, `/privacidade`, `/termos`;
- analytics com eventos do funil;
- sitemap, robots, metadata e OG;
- testes básicos e CI;
- atualização do README.

Aceite:

- conteúdo principal está no HTML final;
- JS inicial dentro do budget;
- eventos chegam sem PII;
- Lighthouse/axe e E2E passam.

### Fase 2 — nova narrativa e produto real (4–7 dias)

Objetivo: transformar a home em demonstração clara de valor.

Entregas:

- hero full-bleed;
- screenshots reais sanitizados;
- storytelling em três momentos;
- redução de seções e textos;
- vídeo de 60–90 segundos;
- home e página de funcionalidades;
- formulário curto e progressivo;
- remoção definitiva de conteúdo fictício.

Aceite:

- primeira dobra comunica marca, categoria, valor e ação;
- cada seção tem uma função única;
- home pode ser entendida só pelos títulos;
- mobile não tem rolagem redundante;
- screenshots representam o produto real.

### Fase 3 — landings por ICP e preços (3–5 dias)

Objetivo: aumentar relevância de campanha e qualificação.

Entregas:

- `/nutricionistas`;
- `/clinicas`;
- `/precos` com comparação completa;
- UTMs e origem preservadas;
- oferta e objeções específicas;
- integração opcional de agenda de demo.

Aceite:

- cada landing tem mensagem/CTA próprios;
- não há conteúdo duplicado sem canonical;
- origem chega ao painel comercial;
- preço e limites batem com a fonte canônica.

### Fase 4 — self-service controlado (dependente, 5–10 dias)

Pré-requisitos:

- remover bypass inseguro do registro;
- definir registro aberto ou convite assinado;
- preservar plano/origem no onboarding;
- ativar Trial corretamente;
- validar Stripe e webhook em sandbox/produção;
- criar recuperação e suporte de onboarding.

Entregas:

- CTA `Começar teste grátis`;
- registro seguro;
- trial de 14 dias;
- onboarding mínimo;
- upgrade/checkout no app autenticado;
- retorno de sucesso, pendência e cancelamento;
- eventos `trial_started` e `subscription_activated`.

Aceite:

- fluxo E2E do anúncio à assinatura;
- nenhuma dependência de ID numérico fixo no site;
- duplicação/retry de webhook não duplica cobrança;
- falha deixa estado recuperável.

### Fase 5 — prova social e conteúdo (contínua)

Entregas:

- programa beta com 3–5 clientes;
- entrevistas e autorização de uso;
- um case verificável;
- depoimentos com nome/cargo aprovados;
- conteúdos de intenção comercial;
- experimentos somente após volume suficiente.

## 13. Priorização

### P0

- deploy do conteúdo factual;
- leads em produção;
- remoção de claims/métricas falsas;
- privacidade mínima;
- CTA único de demonstração;
- medição de sucesso/erro do formulário.

### P1

- Astro/SSG;
- home curta com produto real;
- pricing simplificado;
- SEO técnico;
- testes e CI;
- landings de nutricionistas e clínicas.

### P2

- fonte pública de planos;
- vídeo demonstrativo;
- agenda automática;
- case real;
- self-service/trial seguro.

### P3

- blog/CMS;
- integrações avançadas de marketing;
- personalização por campanha;
- testes A/B;
- internacionalização.

## 14. Riscos e mitigação

| Risco | Impacto | Mitigação |
| --- | --- | --- |
| site promete recurso ainda controlado | perda de confiança | matriz disponível/beta/roadmap aprovada no release |
| preço acima do mercado sem prova | baixa conversão | demo, posicionamento do conjunto e pesquisa de disposição a pagar |
| lead salvo sem resposta | perda comercial | alerta, SLA, responsável e painel obrigatório |
| self-service aberto cedo | abuso e onboarding quebrado | manter lead/demo até gate técnico |
| screenshots com PII | incidente de privacidade | massa demo e checklist de sanitização |
| nova arquitetura vira reescrita longa | atraso | migração incremental e ilhas React |
| conteúdo volta a ficar desatualizado | promessa incorreta | owner de conteúdo + revisão mensal + contrato de planos |
| SEO sem operação editorial | baixo retorno | primeiro páginas de intenção, blog somente com capacidade real |

## 15. Decisões necessárias antes da implementação visual

1. Confirmar ICP principal: nutricionista esportivo/clínico.
2. Confirmar se o CTA inicial é demo ou acesso antecipado.
3. Confirmar os planos públicos e se o Pro+ será preço ou “sob consulta”.
4. Definir responsável e SLA de atendimento comercial.
5. Aprovar claims de segurança e política de privacidade.
6. Definir conta demo e telas autorizadas para captura.
7. Confirmar domínio do app para o link “Entrar”.
8. Decidir quando o self-service pode substituir a demo.

## 16. Fontes externas consultadas

Fontes oficiais verificadas em 13/07/2026:

- BodyMotion: <https://www.bodymotion.pro/>
- Dietbox: <https://dietbox.me/pt-BR>
- WebDiet: <https://webdiet.com.br/site/>
- Nutrium: <https://nutrium.com/pt/professionals>

Leituras relevantes:

- Dietbox vende teste gratuito, app do paciente, agenda, WhatsApp, ferramentas de marketing e planos a partir de faixas abaixo do BodyMotion.
- WebDiet vende trial, Clara IA e Body3D em tier premium, tornando insuficiente comunicar apenas “IA + 3D”.
- Nutrium ancora a oferta em organização, acompanhamento, crescimento e prova de marcas/clientes, com CTA de teste gratuito.
- A diferenciação defensável do BodyMotion é o conjunto conectado de nutrição, treino, evolução corporal e operação clínica, não uma feature isolada.

## 17. Definition of Done do projeto

O novo site só estará concluído quando:

- comunicar produto e público em uma frase;
- carregar conteúdo indexável sem JavaScript;
- usar imagens reais e sanitizadas do produto;
- ter uma ação principal por página;
- salvar e notificar 100% dos leads válidos no smoke;
- medir o funil sem PII;
- ter preços e limites consistentes com a API;
- cumprir acessibilidade AA nos fluxos principais;
- ter páginas legais e claims aprovados;
- passar build, lint, typecheck, unit/integration/E2E, axe e Lighthouse;
- estar publicado com monitoramento e rollback;
- permitir que a equipe acompanhe lead até demonstração, trial e venda.
