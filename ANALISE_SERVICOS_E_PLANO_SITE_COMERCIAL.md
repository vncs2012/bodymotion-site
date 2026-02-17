# Analise do Sistema Atual + Plano para Site Comercial

Data: 16/02/2026  
Projeto: `nutriMotion-theme`

## 1. Objetivo

Este documento resume:
- o que ja existe no sistema (servicos e funcionalidades);
- o que ja pode ser divulgado/vendido;
- o que falta para um site comercial publico;
- recomendacao direta: fazer apenas backend ou backend + frontend.

## 2. Resumo Executivo

O projeto atual ja e um **painel de operacao clinica** robusto (frontend SPA + integracoes de API), com modulos centrais para rotina de atendimento.

Para **divulgar e vender** de forma consistente, **nao e suficiente fazer apenas backend**.  
Recomendacao: manter evolucao do backend + criar frontend publico (site comercial) separado do painel logado.

## 3. Mapeamento dos Servicos Atuais

## 3.1 Servicos ja integrados no frontend

| Dominio | Endpoints/servico | Status |
|---|---|---|
| Autenticacao | `/auth/login`, `/auth/me`, `/auth/logout` | Integrado |
| Pacientes | `/Person/patient`, `/Person/select` | Integrado |
| Avaliacoes antropometricas | `/anthropometrics`, `/anthropometrics/pacient/:id`, `/anthropometrics/:id`, `/anthropometrics/measurement` | Integrado |
| Anamnese | `/anamnese`, `/anamnese/:id`, `/anamnese/pacient/:id` | Integrado |
| Perguntas | `/questions`, `/questions/:id`, `/questions/anamnese` | Integrado |
| Prescricao | `/prescription`, `/prescription/:id`, `/prescription/patient/:id`, `/prescription/pdf/:id`, `/prescription/send/:id` | Integrado |
| Dashboard | `/user/dashboard` | Integrado |
| Usuarios | `/user`, `/user/:id`, `Person/users/:id` | Integrado (com pontos de ajuste) |
| Configuracoes | `/config` | Integrado |
| Chat | `/chat/conversations`, `/chat/conversations/:id/messages`, `/chat/conversations/:id/read`, `POST /chat/conversations` | Integrado |
| Tempo real chat | `WebSocket /ws/chat` (com fallback de URL) | Integrado no frontend, depende backend WS estavel |

## 3.2 Servicos com implementacao parcial/local

| Dominio | Situacao atual |
|---|---|
| Agendamento | Tela funcional, mas com dados locais/mockados (sem API persistente no contexto) |
| Medicos | Contexto local, sem API dedicada no frontend |
| Funcionarios | Contexto local, sem API dedicada no frontend |
| Recuperacao de senha | Fluxo da UI simulado (sem endpoint real integrado) |
| Upgrade/plano na UI | Existe redirecionamento para `/upgrade`, mas rota nao esta definida no app |

## 3.3 Servicos planejados (documentados)

| Dominio | Documento | Status |
|---|---|---|
| Chat paciente x equipe (contrato backend) | `CHAT_BACKEND_INTEGRACAO.md` | Planejado/guia tecnico |
| SSG + Magic Link para avaliacao + PDF persistido | `ANALISE_SSG_MAGIC_LINK.md` e `BACKEND_CONTRATO_SSG_MAGIC_LINK.md` | Planejado/contrato tecnico |

## 4. Funcionalidades que Voce Ja Pode Divulgar e Vender

1. Gestao de pacientes.
2. Avaliacao antropometrica com metricas e historico.
3. Prescricao nutricional com geracao e envio de PDF.
4. Anamnese digital.
5. Banco de perguntas para anamnese.
6. Dashboard com indicadores operacionais.
7. Controle de usuarios e permissoes.
8. Configuracoes de comunicacao (email/WhatsApp, watermark).
9. Chat interno entre equipe e paciente (com capacidade de tempo real).

## 5. O que Falta para o Site Comercial (Divulgacao e Conversao)

## 5.1 Frontend publico (obrigatorio para vender melhor)

Paginas minimas:
1. Home (proposta de valor clara).
2. Funcionalidades.
3. Planos e precos.
4. Contato/demo.
5. FAQ.
6. Politica de privacidade e termos.

Elementos de conversao:
1. CTA de teste/demo em destaque.
2. Formulario de lead.
3. Prova social (depoimentos/cases).
4. SEO tecnico + performance + analytics.

## 5.2 Backend comercial (necessario para escalar vendas)

1. Captura e gestao de leads (CRM basico).
2. Checkout/assinatura (se quiser venda online automatica).
3. Fluxo de trial e onboarding.
4. Integracao de notificacao comercial (email/WhatsApp).

## 6. Resposta Direta: Fazer Apenas Backend ou Front Tambem?

**Resposta curta:** faca **os dois**.

Se fizer so backend:
- voce pode ter servico pronto tecnicamente, mas pouca conversao comercial.

Se fizer backend + frontend comercial:
- voce cria canal de aquisicao, demonstracao de valor e conversao de vendas.

## 7. Estrategia Recomendada (Pragmatica)

## Fase 1 (rapida, 2-3 semanas)
1. Criar site comercial simples e forte (Home + Funcionalidades + Planos + Contato).
2. Conectar formulario de lead no backend.
3. Publicar CTA para demo/whatsapp comercial.

## Fase 2 (3-6 semanas)
1. Implementar checkout/assinatura.
2. Criar pagina de onboarding.
3. Ligar funil de emails automatizados.

## Fase 3 (evolucao de produto)
1. Concluir SSG + magic link para compartilhamento com pacientes.
2. Consolidar chat em tempo real com regras de autorizacao completas.
3. Fechar agendamento/medicos/funcionarios com API persistente.

## 8. Recomendacao Final

Use o sistema atual como **produto principal (area logada)** e construa um **site comercial separado** para vender.

Arquitetura sugerida:
1. `App atual`: operacao clinica (logado).
2. `Novo site`: aquisicao e conversao (publico).
3. `Backend unico`: auth, modulos clinicos, leads, plano/checkout.

Assim voce reduz tempo de entrada no mercado e nao trava crescimento comercial.

