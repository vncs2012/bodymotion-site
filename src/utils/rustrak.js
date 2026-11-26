import * as Sentry from '@sentry/react';

const tipos = new Set(['Error', 'TypeError', 'RangeError', 'ReferenceError', 'SyntaxError',
  'URIError', 'AggregateError', 'DOMException']);
const vitais = new Set(['lcp', 'inp', 'cls', 'fcp', 'ttfb']);
const pagina = 'Site comercial';

function metricasDoNavegador(medidas) {
  return Object.fromEntries(Object.entries(medidas ?? {}).flatMap(([nome, medida]) =>
    vitais.has(nome) && Number.isFinite(medida.value) && medida.value >= 0
      ? [[nome, { value: medida.value, unit: nome === 'cls' ? 'none' : 'millisecond' }]]
      : [],
  ));
}

function arquivoDoBuild(nome) {
  try {
    const url = new URL(nome, location.origin);
    if (url.origin === location.origin && /^\/assets\/[\w.-]+\.js$/.test(url.pathname)) {
      return url.origin + url.pathname;
    }
  } catch { /* Uma falha externa também pode ter um nome que não é uma URL. */ }
  return undefined;
}

export function iniciarRustrak() {
  const dsn = import.meta.env.VITE_RUSTRAK_DSN;
  if (!dsn) return;
  const ambiente = import.meta.env.VITE_APP_ENV || import.meta.env.MODE;
  const release = import.meta.env.VITE_RUSTRAK_RELEASE || undefined;
  Sentry.init({
    dsn, environment: ambiente, release,
    sendDefaultPii: false, enableLogs: true, maxBreadcrumbs: 0, tracesSampleRate: 0.25,
    tracePropagationTargets: [],
    integrations: [Sentry.browserTracingIntegration({
      traceFetch: false, traceXHR: false, enableInp: true, beforeStartSpan: (op) => ({ ...op, name: pagina }),
      _experiments: { enableStandaloneClsSpans: true },
    })],
    beforeSend(evento) {
      const erros = evento.exception?.values;
      if (!erros?.length) return null;
      return {
        event_id: evento.event_id, timestamp: evento.timestamp, platform: evento.platform,
        environment: evento.environment, release: evento.release, level: evento.level, sdk: evento.sdk,
        debug_meta: { images: (evento.debug_meta?.images || []).filter((i) => arquivoDoBuild(i.code_file))
          .map((i) => ({ type: i.type, debug_id: i.debug_id, code_file: arquivoDoBuild(i.code_file) })) },
        exception: { values: erros.map((erro) => ({
          type: tipos.has(erro.type) ? erro.type : 'Error', value: 'Falha no site Bodymotion',
          stacktrace: { frames: (erro.stacktrace?.frames || []).filter((f) => arquivoDoBuild(f.filename))
            .map((f) => ({ filename: arquivoDoBuild(f.filename), lineno: f.lineno, colno: f.colno, in_app: true })) },
        })) },
      };
    },
    beforeSendTransaction(evento) {
      const trace = evento.contexts?.trace;
      return {
        type: evento.type, event_id: evento.event_id, transaction: pagina,
        release: evento.release, environment: evento.environment, timestamp: evento.timestamp,
        start_timestamp: evento.start_timestamp, measurements: metricasDoNavegador(evento.measurements), platform: evento.platform,
        contexts: trace ? { trace: { trace_id: trace.trace_id, span_id: trace.span_id, op: trace.op } } : {},
        spans: [],
      };
    },
    beforeSendSpan(span) {
      const medidas = metricasDoNavegador(span.measurements);
      const carregamento = span.data?.['sentry.pageload.span_id'];
      const avulso = span.op === 'ui.webvital.cls' || span.op?.startsWith('ui.interaction.');
      const data = avulso
        ? { transaction: pagina, environment: ambiente, release }
        : {};
      if (avulso && typeof carregamento === 'string' && /^[a-f0-9]{16}$/.test(carregamento)) {
        Object.assign(data, { 'sentry.pageload.span_id': carregamento });
      }
      return { ...span, description: span.op, data, measurements: medidas };
    },
  });
  Sentry.logger.info('Site Bodymotion inicializado');
}

export function registrarVisitaRustrak() {
  const origem = window.location.origin;
  if (!import.meta.env.PROD || !['https://bodymotion.pro', 'https://www.bodymotion.pro'].includes(origem)) return;
  if (['1', 'yes'].includes(navigator.doNotTrack ?? '')) return;

  const chave = import.meta.env.VITE_RUSTRAK_DSN?.trim()
    .match(/^https:\/\/([a-f0-9]{32})@logs\.bodymotion\.pro\/4$/i)?.[1];
  if (!chave) return;

  // O contador precisa apenas do domínio, sem parâmetros da página ou do formulário.
  void fetch(`https://logs.bodymotion.pro/api/projects/4/plugins/web-traffic/collect?sentry_key=${chave}`, {
    method: 'POST',
    // Requisições no-cors são rejeitadas com redirect: 'error'.
    mode: 'cors',
    credentials: 'omit',
    redirect: 'error',
    keepalive: true,
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ type: 'pageview', url: `${origem}/` }),
  }).catch(() => undefined);
}
