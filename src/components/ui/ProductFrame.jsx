import React from "react";

/**
 * Moldura de janela do produto. Sempre exibe uma captura real
 * (public/screens/, ver src/data/screens.js) — a barra superior tem só os
 * três pontos, sem pílula de URL nem legenda.
 *
 * `priority` marca a imagem do LCP (hero): carrega eager + fetchpriority
 * "high" em vez de lazy.
 */
export default function ProductFrame({
  screenshot,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sources = [],
}) {
  const priorityAttrs = priority ? { fetchpriority: "high" } : {};

  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-bm-mist bg-white shadow-frame ${className}`}
    >
      <div className="flex h-[34px] items-center gap-1.5 border-b border-bm-mist bg-bm-paper px-3.5">
        <i className="h-2.5 w-2.5 rounded-full bg-bm-mist" aria-hidden="true" />
        <i className="h-2.5 w-2.5 rounded-full bg-bm-mist" aria-hidden="true" />
        <i className="h-2.5 w-2.5 rounded-full bg-bm-cyan" aria-hidden="true" />
      </div>

      <picture>
        {sources.map((source) => (
          <source
            key={source.media}
            media={source.media}
            srcSet={source.src}
            width={source.width}
            height={source.height}
          />
        ))}
        <img
          src={screenshot}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? undefined : "async"}
          className="block h-auto w-full"
          {...priorityAttrs}
        />
      </picture>
    </figure>
  );
}
