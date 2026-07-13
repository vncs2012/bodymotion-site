# Auditoria do site BodyMotion a partir do produto real

Data: 2026-05-23  
Escopo: `bodymotion-site`, `bodymotion-api`, `bodymotion-painel`, `bodymotion-mobile`, backlogs e docs locais.  
Metodo: aplicacao da skill `skill-auditoria-pagina-produto-saas.md`, analise estatica da base, leitura de docs e verificacao publica de `https://www.bodymotion.pro/`.

## Sumario executivo

O site atual esta vendendo um produto menor do que o sistema real.

A leitura dos repos mostra que BodyMotion nao e apenas uma landing de "gestao de pacientes, prescricao e acompanhamento". O produto real ja tem uma tese mais forte: plataforma para acompanhamento clinico, nutricional, corporal e de treino, com portal do paciente, teleatendimento, IA nutricional auditavel sobre TACO, captura remota de fotos, treinos, relatorios e assinatura.

O principal problema comercial e que o site comunica "lancamento em breve" e marca varias funcionalidades como "em breve", enquanto a base mostra agenda, mobile, portal, telehealth, treinos, dietas, IA nutricional e fluxos publicos ja implementados ou parcialmente implementados. Isso reduz percepcao de valor e enfraquece a diferenciacao contra Dietbox, Nutrium, WebDiet e ferramentas de treino.

Recomendacao: reposicionar a home como pagina de produto SaaS para nutricionistas esportivos, clinicas multidisciplinares e profissionais que acompanham dieta + treino + evolucao corporal. O eixo de venda deve ser "acompanhamento completo", nao apenas "cadastro e prescricao".

## Evidencias principais encontradas

### Produto web/painel

- O painel expoe rotas protegidas para dashboard, agenda, treinos, dietas, chat, suporte, relatorios, observabilidade, antropometria, pacientes, timeline, prescricao, perguntas, anamnese, prontuario, usuarios, configuracoes e worklist clinica.
  - Evidencia: `bodymotion-painel/src/App.tsx`, rotas protegidas em torno das linhas 268-378.
- A documentacao funcional do sistema descreve pacientes, anamneses, avaliacoes antropometricas, prescricoes, agenda/chat, treinos, relatorios e observabilidade.
  - Evidencia: `bodymotion-api/docs/FUNCIONALIDADES_DO_SISTEMA.md`, linhas 6-24 e 169-220.

### IA nutricional

- A IA nutricional esta implementada como fluxo de prescricao estruturada: TACO 4a edicao, parser, embeddings, busca, calculo, plan gating, PDF/envio e painel lateral no frontend.
  - Evidencia: `BACKLOG_IA_NUTRICIONAL.md`, linhas 57-80 e 82-169.
- O backend tem endpoints de calculo e parse nutricional:
  - `POST /v1/prescriptions/meals/calc`
  - `POST /v1/prescriptions/meals/parse`
  - Evidencia: `bodymotion-api/src/api/v1/prescription_meals.py`, linhas 1-5 e 75-163.
- A mensagem correta nao deve ser "IA cria dieta sozinha". Deve ser "IA interpreta a prescricao, calcula macros com base TACO e pede revisao quando ha ambiguidade".

### Portal do paciente

- O portal do paciente tem OTP, `me`, TCLE, diario alimentar, upload de foto alimentar, habitos e resumo.
  - Evidencia: `bodymotion-api/src/api/v1/patient_portal.py`, linhas 66-120 e 300-436.
- O painel expoe `/portal-paciente` como rota publica.
  - Evidencia: `bodymotion-painel/src/App.tsx`, linha 428.

### Telehealth

- O roadmap tecnico marca Telehealth MVP como entregue: Jitsi publico, painel, portal, mobile, TCLE, envio de link e metricas.
  - Evidencia: `PLANOS_GAPS_FEATURES.md`, linhas 11-23.
- O backend tem criacao de sessao de video, proximo agendamento com video e atendimento direto sem agendamento.
  - Evidencia: `bodymotion-api/src/api/v1/scheduling.py`, linhas 451-540.
- Venda recomendada: "consulta por video integrada via Jitsi com TCLE". Nao vender ainda "gravacao, transcricao e resumo automatico da consulta", pois esta pausado.

### Treinos

- O backend tem modulo de treinos com exercicios, templates, planos, check-ins, progresso e links compartilhaveis.
  - Evidencia: `bodymotion-api/src/api/v1/trainings.py`, linhas 246-516.
- O painel expoe rotas de treinos.
  - Evidencia: `bodymotion-painel/src/App.tsx`, linhas 271-276.
- Isso muda o posicionamento: BodyMotion compete tambem no espaco de acompanhamento integrado de dieta + treino, nao so software de nutricao tradicional.

### Captura remota e antropometria por foto

- Ha rota publica para captura remota de fotos com token, consentimento, validacao de imagem e pipeline de medidas.
  - Evidencia: `bodymotion-api/src/api/v1/public_capture.py`, linhas 1-7 e 138-207.
- O site atual ainda fala "como vai funcionar a IA" e "em desenvolvimento". Esse texto esta atrasado em relacao ao codigo. Se a feature ainda nao esta liberada em producao, a promessa correta e "beta/acesso antecipado", nao "ideia futura".

### Mobile

- `bodymotion-mobile` e um app Expo real, com auth mobile e telas para dashboard, pacientes, agenda, antropometria, prescricao, prontuario, perguntas, configuracao, usuarios e treinos.
- O site marca "Aplicativo Mobile" como "em breve"; isso precisa ser reavaliado contra o estado de distribuicao real. Se ainda nao esta nas lojas, vender como "app mobile em acesso controlado".

### Comercial e assinatura

- A API tem assinatura, planos e checkout com gateways como Stripe/Pagar.me/Asaas.
- O site ja tem tabela de planos local, mas usa URLs Stripe de teste ou placeholders em `bodymotion-site/src/data/plans.js`.
- A rota publica de auto-registro existe, mas o DTO ainda tem `token` default `bypass_token_validacao`, entao o self-service publico precisa de revisao antes de abrir trafego pago.
  - Evidencia: `bodymotion-api/src/services/usecase/user/auth_dto.py`, linhas 159-163.

## Diagnostico do site atual

### 1. Produto subvendido

O hero atual diz:

> "Gestao de pacientes, prescricao e acompanhamento em uma so plataforma"

Isso e correto, mas generico. Qualquer concorrente de prontuario/nutricao pode dizer algo parecido. O produto real tem diferenciais mais especificos:

- prescricao com calculo nutricional TACO e IA auditavel;
- antropometria, fotos, evolucao corporal e 3D;
- treino integrado com check-ins;
- portal do paciente com diario alimentar/habitos;
- teleconsulta com TCLE;
- relatorios e observabilidade;
- assinatura e pagamentos.

### 2. "Em breve" em excesso

`bodymotion-site/src/data/plans.js` marca email/WhatsApp, agenda, app e todas as features de IA como `soon`.

Problema: a base mostra que agenda, telehealth, portal, treinos, IA nutricional, envio por email/WhatsApp e mobile existem em diferentes niveis de maturidade. O site precisa separar:

- disponivel;
- beta/acesso antecipado;
- roadmap.

Hoje tudo cai em "em breve", o que diminui confianca e preco percebido.

### 3. SEO e indexacao fracos

A verificacao publica de `https://www.bodymotion.pro/` retornou apenas:

- `JavaScript necessario`
- `Por favor, habilite o JavaScript para usar o BodyMotion.`

Isso significa que crawlers sem execucao JS veem quase nada da pagina. Para aquisicao organica, a home precisa renderizar conteudo indexavel ou usar pre-render/SSR/static generation.

### 4. Metadados com dominio errado

`bodymotion-site/index.html` ainda aponta Open Graph para `https://bodymotion.com.br/` e `https://bodymotion.com.br/og-image.jpg`, enquanto o site analisado e `bodymotion.pro`.

### 5. Claims de seguranca precisam ser precisos

`Security.jsx` usa "Criptografia ponta a ponta" mas descreve TLS 1.3. TLS protege transito cliente-servidor, mas nao e necessariamente criptografia ponta a ponta. Tambem ha promessa de "Conformidade total com a LGPD" e "99.9%" sem evidencia operacional no site.

Recomendacao: trocar por linguagem defensavel:

- "Conexao criptografada via HTTPS/TLS"
- "Fluxos com consentimento e controles para apoiar conformidade com LGPD"
- "Backups e monitoramento operacional" se houver evidencias reais

### 6. Formulario de lead provavelmente nao tem backend no repo

`Contact.jsx` envia para `VITE_API_BASE_URL + /commercial/leads` por padrao. A busca local nao encontrou rota implementada correspondente em `bodymotion-api/src`. Se esse endpoint nao existe no ambiente de producao, a captura de lead falha.

### 7. Hero visual usa interface falsa

O hero usa mock visual desenhado, mas o sistema tem telas reais. Para produto B2B SaaS, telas reais aumentam credibilidade. Recomendacao: substituir por composicao de screenshots reais:

- prescricao com tabela nutricional lateral;
- timeline/prontuario;
- captura de fotos;
- portal do paciente;
- plano de treino/check-in.

## O que vender agora, beta e roadmap

### Pode vender agora, desde que ambiente de producao esteja configurado

- Gestao de pacientes, prontuario e timeline.
- Anamnese digital e pacotes de perguntas.
- Avaliacoes antropometricas e historico.
- Prescricao com PDF, copia, envio e editor rico.
- Agenda, ICS e consultas.
- Telehealth MVP via Jitsi com TCLE.
- Treinos: biblioteca, templates, planos, progresso e check-ins.
- Portal do paciente com OTP.
- Relatorios, observabilidade, usuarios e permissoes.
- Assinaturas e checkout.

### Vender como beta/acesso antecipado

- IA nutricional com TACO, parse e resolucao de ambiguidades.
- Captura remota por foto e medidas com IA.
- Modelo 3D, se depender de flag ou validacao visual.
- App mobile, caso ainda nao esteja distribuido publicamente.
- Diario alimentar com foto e habitos, se ainda estiver restrito ao portal/painel.

### Nao prometer ainda

- Gravacao, transcricao e resumo automatico de teleconsulta.
- WhatsApp bidirecional integrado ao chat interno.
- Canvas/editor visual avancado de dietas.
- Lista de compras automatica e substituicoes alimentares, se nao estiverem completas.
- Push notifications nativas como canal principal, se o fluxo estiver parcial.
- "Criptografia ponta a ponta" para toda a plataforma.
- "Conformidade total LGPD" sem pagina legal, DPA, termos, politica e processos demonstraveis.

## Posicionamento recomendado

### Posicionamento principal

BodyMotion e a plataforma para profissionais de saude e performance que acompanham dieta, treino e evolucao corporal em um unico fluxo.

### Nicho inicial mais forte

Nutricionistas esportivos, clinicas multidisciplinares, consultorios com acompanhamento recorrente e profissionais que trabalham com composicao corporal, treino e adesao do paciente.

### Proposta de valor

Centralize paciente, anamnese, avaliacao corporal, prescricao nutricional, treino, teleconsulta e acompanhamento do paciente sem espalhar dados entre planilhas, PDFs, WhatsApp e aplicativos separados.

### Diferenciadores defendiveis

- Nutricional: calculo com base TACO e IA como assistente auditavel.
- Corporal: fotos, antropometria, historico e 3D.
- Acompanhamento: diario alimentar, habitos, treino e check-ins.
- Operacao: agenda, teleconsulta, relatorios, permissoes, pagamentos e portal.

## Nova estrutura da home

1. Hero com promessa especifica, print real do produto e CTA.
2. Barra de prova/maturidade: TACO, portal do paciente, treinos, teleconsulta, LGPD-ready controls.
3. Problema: acompanhamento fragmentado em planilhas, WhatsApp, PDFs e apps separados.
4. Produto em modulos com tabs e screenshots:
   - Clinica
   - Nutricao + IA
   - Antropometria + Fotos
   - Treinos
   - Portal do Paciente
   - Gestao e Relatorios
5. Fluxo em 5 passos:
   - cadastrar paciente;
   - coletar anamnese/avaliacao;
   - prescrever dieta/treino;
   - acompanhar via portal;
   - revisar evolucao com relatorios.
6. Secao de IA auditavel:
   - IA interpreta;
   - TACO calcula;
   - profissional valida;
   - historico fica salvo.
7. Personas:
   - nutricionista esportivo;
   - clinica multidisciplinar;
   - personal/educador fisico;
   - operacao com varios profissionais.
8. Planos.
9. Seguranca, privacidade e consentimento com claims ajustados.
10. FAQ.
11. CTA final.

## Copy sugerida

### H1 recomendado

`Dieta, treino e evolucao corporal em uma unica plataforma`

Alternativas:

- `Prescricao nutricional, antropometria por foto e treinos no mesmo fluxo`
- `O sistema para nutricionistas esportivos que acompanham evolucao de verdade`
- `Troque planilhas por acompanhamento clinico com IA auditavel e portal do paciente`

### Subheadline

`BodyMotion conecta prontuario, anamnese, antropometria, prescricao com calculo nutricional TACO, teleconsulta, treinos e portal do paciente para profissionais que precisam acompanhar progresso com consistencia.`

### CTA

Se o auto-registro estiver pronto:

- Primario: `Comecar teste gratis`
- Secundario: `Ver produto em 2 minutos`

Se ainda estiver em beta:

- Primario: `Solicitar acesso antecipado`
- Secundario: `Ver modulos da plataforma`

### Secao de IA

`IA para acelerar, nao para substituir o profissional.`

`A IA interpreta o texto da prescricao e sugere correspondencias com alimentos da TACO. O calculo nutricional fica estruturado e o profissional revisa ambiguidades antes de salvar.`

### Secao de portal

`O paciente acompanha tudo sem depender de prints no WhatsApp.`

`Prescricoes, proximas consultas, treinos, habitos, diario alimentar e termos ficam acessiveis em um portal seguro por codigo de acesso.`

## Backlog de implementacao para o site

### P0 - Corrigir desalinhamentos antes de campanha

1. Atualizar hero e proposta de valor para dieta + treino + evolucao corporal.
2. Trocar "em breve" por tres estados: disponivel, beta, roadmap.
3. Corrigir metadados de `index.html` para `bodymotion.pro`.
4. Resolver indexacao: pre-render/SSR/static export ou conteudo HTML inicial indexavel.
5. Validar e corrigir formulario de lead; criar endpoint real ou integrar ferramenta externa.
6. Remover claims indefensiveis: "criptografia ponta a ponta", "conformidade total", "99.9%" se nao houver prova.
7. Substituir mock visual do hero por screenshots reais.
8. Corrigir clipping/overflow mobile observado anteriormente no header/hero.

### P1 - Aumentar conversao

1. Criar secao de modulos com screenshots reais.
2. Criar secao "IA auditavel com TACO".
3. Criar secao "Portal do paciente".
4. Criar secao "Dieta + treino no mesmo acompanhamento".
5. Adicionar FAQ real sobre beta, LGPD, IA, app, teleconsulta, plano e migracao.
6. Adicionar comparativo simples: BodyMotion vs planilhas/PDF/WhatsApp/apps separados.
7. Separar CTA de beta e trial conforme status comercial.

### P2 - Aquisicao e SEO

1. Criar paginas SEO:
   - software para nutricionista esportivo;
   - sistema de prescricao nutricional;
   - software para antropometria;
   - portal do paciente para nutricionista;
   - sistema para treino e nutricao.
2. Adicionar JSON-LD de SoftwareApplication.
3. Criar imagens OG reais por pagina.
4. Adicionar sitemap e robots.

### P3 - Prova social e vendas

1. Usar depoimentos apenas se forem reais e autorizados.
2. Enquanto nao houver cases, usar "piloto fechado", "acesso antecipado" e demonstracao do produto.
3. Criar video curto de produto com roteiro:
   - paciente;
   - prescricao com IA/TACO;
   - avaliacao/foto;
   - treino;
   - portal.

## Eventos de analytics recomendados

- `hero_primary_cta_click`
- `hero_secondary_cta_click`
- `pricing_trial_click`
- `pricing_contact_click`
- `lead_form_submit_success`
- `lead_form_submit_error`
- `module_tab_view`
- `ai_section_view`
- `portal_section_view`
- `mobile_menu_open`
- `faq_open`

## Riscos antes de trafego pago

- Landing indexa mal se continuar apenas com JS.
- Leads podem falhar se `/commercial/leads` nao existir em producao.
- Self-service publico precisa revisar token/validacao antes de abrir cadastro.
- Promessas de seguranca precisam de linguagem juridicamente defensavel.
- Funcionalidades beta devem ser identificadas para nao gerar expectativa errada.
- Backlog API/painel ainda aponta gaps de exclusao de paciente/anamnese e permissoes de agenda/suporte.

## Conclusao

A direcao correta nao e apenas "melhorar design". O site precisa ser reescrito em torno do produto real.

O BodyMotion tem um diferencial mais forte do que o site comunica: juntar nutricional, corporal, treino e acompanhamento continuo. A primeira versao revisada da home deve corrigir a tese, mostrar produto real, diminuir "em breve", separar beta de roadmap e capturar lead/trial com infraestrutura confiavel.
