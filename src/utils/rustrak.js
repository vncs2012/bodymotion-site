import * as Sentry from '@sentry/react';

const tipos = new Set(['Error', 'TypeError', 'RangeError', 'ReferenceError', 'SyntaxError',
  'URIError', 'AggregateError', 'DOMException']);

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
  Sentry.init({
    dsn, environment: import.meta.env.VITE_APP_ENV || import.meta.env.MODE,
    release: import.meta.env.VITE_RUSTRAK_RELEASE || undefined,
    sendDefaultPii: false, enableLogs: true, maxBreadcrumbs: 0, tracesSampleRate: 0.05,
    tracePropagationTargets: [],
    integrations: [Sentry.browserTracingIntegration({
      traceFetch: false, traceXHR: false, beforeStartSpan: (op) => ({ ...op, name: 'Site comercial' }),
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
        type: evento.type, event_id: evento.event_id, transaction: 'Site comercial',
        release: evento.release, environment: evento.environment, timestamp: evento.timestamp,
        start_timestamp: evento.start_timestamp, measurements: evento.measurements, platform: evento.platform,
        contexts: trace ? { trace: { trace_id: trace.trace_id, span_id: trace.span_id, op: trace.op } } : {},
        spans: [],
      };
    },
    beforeSendSpan(span) {
      return { ...span, description: span.op, data: Object.fromEntries(
        Object.entries(span.data || {}).filter(([k, v]) => k === 'sentry.op'
          || (typeof v === 'number' && /^(?:sentry\.measurement|web_vital|browser\.)/.test(k))),
      ) };
    },
  });
  Sentry.logger.info('Site Bodymotion inicializado');
}
