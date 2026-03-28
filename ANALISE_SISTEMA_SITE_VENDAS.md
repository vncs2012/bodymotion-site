# Analise do Sistema para Site de Divulgacao e Vendas

## Objetivo
Mapear o que ja existe no backend do NutriMotion e orientar a decisao de produto para iniciar divulgacao e vendas online.

## Resumo Executivo
- O repositorio atual e **backend-first** (FastAPI + PostgreSQL + Redis), sem frontend web no codigo.
- Existem **87 endpoints REST** e **1 endpoint WebSocket** ja estruturados.
- O sistema ja cobre operacao clinica, assinatura, pagamento e chat em tempo real.
- Para vender com eficiencia, a recomendacao e: **backend + frontend**.

## O que ja esta pronto (servicos)

### 1) Autenticacao e seguranca
- Cadastro, login, refresh, logout e sessao atual.
- Auth por cookie HTTP-only + token CSRF.
- Rate limit e lock progressivo no login.
- Controle de revogacao de token.
- Middleware de auditoria e middleware de redirect HTTPS (configuravel).

Base tecnica:
- `src/api/v1/auth.py`
- `src/api/v1/dependencies/auth.py`
- `src/core/csrf_middleware.py`
- `src/services/auth/request_guard.py`
- `src/services/auth/token_session_store.py`

### 2) Operacao clinica (core do produto)
- Gestao de pessoas/pacientes.
- Anamnese.
- Avaliacao antropometrica (inclui medicao por IA via upload de imagem).
- Prescricao (inclui geracao de PDF e envio).
- Observacoes por paciente.
- Agenda/atendimentos.
- Banco de perguntas.

Base tecnica:
- `src/api/v1/person.py`
- `src/api/v1/anamnese.py`
- `src/api/v1/anthropometrics.py`
- `src/api/v1/prescription.py`
- `src/api/v1/observation.py`
- `src/api/v1/scheduling.py`
- `src/api/v1/question.py`

### 3) Comercial SaaS (planos e pagamento)
- Assinatura atual do usuario e listagem de planos para upgrade.
- Gestao administrativa de planos.
- Checkout com Stripe/Pagar.me.
- Webhooks de pagamento (Stripe e Pagar.me).
- Servico de limite por plano (pacientes, prescricoes, IA, etc.).

Base tecnica:
- `src/api/v1/subscription.py`
- `src/api/v1/admin.py`
- `src/api/v1/payment.py`
- `src/services/plan/limit_service.py`
- `src/infrastructure/payment/stripe_gateway.py`
- `src/infrastructure/payment/pagarme_gateway.py`

### 4) Comunicacao e experiencia
- Chat REST + WebSocket em tempo real.
- Presenca online/offline e eventos de digitacao.

Base tecnica:
- `src/api/v1/chat.py`
- `src/api/v1/chat_ws.py`
- `src/services/chat/realtime_hub.py`

### 5) Personalizacao e midia
- Configuracoes por usuario/profissional.
- Upload/listagem de imagens no Cloudflare R2 (watermarks e ativos visuais).

Base tecnica:
- `src/api/v1/config.py`
- `src/services/r2_storage.py`

## Pontos de atencao antes de vender em escala

### Endpoints declarados mas ainda nao implementados
- Em alguns routers existem metodos com `...` (ex.: partes de `user`, `person`, `anthropometrics`, `prescription`).
- Isso pode gerar expectativa de funcionalidade que ainda nao esta pronta no front.

### Fluxos que precisam ajuste para producao
- Envio de email de prescricao esta com destinatario fixo no codigo.
  - Arquivo: `src/services/usecase/prescription/send_email.py`
- Envio de WhatsApp existe, mas o disparo esta comentado no fluxo principal.
  - Arquivo: `src/services/usecase/prescription/send.py`

### Consistencia de rotas e DX
- Prefixo `/Person` (P maiusculo) foge do padrao das outras rotas.
- Existem nomes historicos inconsistentes (`pacient`, `mutri`) que impactam DX e documentacao comercial.

## Funcionalidades que voce pode divulgar ja
- Prontuario completo do paciente (dados, anamnese, observacoes).
- Acompanhamento antropometrico com historico.
- Prescricoes com exportacao em PDF.
- Agenda de atendimentos.
- Chat em tempo real entre equipe e paciente.
- Planos de assinatura e checkout online.
- Controle de acesso por permissao e auditoria de requisicoes.

## Backend apenas ou frontend tambem?

## Recomendacao objetiva
**Fazer frontend tambem**.

Motivo pratico:
- So backend nao converte vendas sozinho.
- Para divulgar e vender voce precisa de paginas publicas (proposta de valor, planos, checkout, prova social, FAQ) e area logada com experiencia clara.

## Estrategia recomendada (MVP comercial)
1. Site institucional + landing de planos.
2. Fluxo de compra integrado ao endpoint de checkout (`/payment/checkout`).
3. Area logada inicial (login, dashboard, modulo principal que mais gera valor).
4. Evolucao por modulos (chat, agenda, relatorios, etc.).

## Conclusao
Voce ja tem um backend forte para sustentar um SaaS de saude/fitness.
Para comecar a divulgar e vender de verdade, o caminho mais eficiente e:
- manter o backend atual,
- construir frontend comercial + frontend de produto,
- corrigir os gaps de producao listados acima antes da campanha de vendas.
