# BodyMotion Site Comercial (Vite + React)

Frontend comercial do BodyMotion com foco em divulgação e conversão:

- layout moderno com glassmorphism;
- modo claro/escuro;
- seção de funcionalidades;
- planos reposicionados por profissionais, pacientes ativos e IA;
- início de jornada com 14 dias grátis sem cartão;
- CTA público apontando para a tela de cadastro do painel;
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
VITE_LEAD_ENDPOINT=/commercial/leads
VITE_TRIAL_START_URL=/registro
```

## Fluxo de trial e pagamento

O site comercial agora inicia pelo trial de 14 dias. Em vez de mandar o usuário direto para o checkout, os botões levam para a URL configurada em `VITE_TRIAL_START_URL`, normalmente a rota pública de cadastro do painel (`/registro`).

Essa URL pode ser:

1. relativa, se site e painel compartilharem o mesmo domínio, por exemplo `/registro`;
2. absoluta, se o painel estiver em outro domínio, por exemplo `https://app.seudominio.com/registro`.

Os parâmetros `plan` e `billing` são anexados automaticamente na URL para preservar o contexto da oferta escolhida no site.

## Próximo passo recomendado

Testar fluxo ponta a ponta com backend real:

1. selecionar plano;
2. iniciar trial pela tela pública de cadastro;
3. concluir criação da conta;
4. validar assinatura `trial` ativa no sistema.
