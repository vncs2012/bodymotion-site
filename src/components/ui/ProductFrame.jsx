import React from "react";

/**
 * Moldura de janela do produto. Envolve uma composição ilustrativa
 * (src/components/mock) ou, quando disponível, um screenshot real:
 * passe `screenshot="/screens/arquivo.png"` e ele substitui o mock.
 */
export default function ProductFrame({
  children,
  screenshot = null,
  alt = "Tela do Bodymotion",
  caption = null,
  className = "",
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-bm-mist bg-white shadow-frame ${className}`}>
      <div className="flex items-center gap-3 border-b border-bm-mist bg-bm-paper px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-bm-mist" />
          <i className="h-2.5 w-2.5 rounded-full bg-bm-mist" />
          <i className="h-2.5 w-2.5 rounded-full bg-bm-cyan/60" />
        </span>
        <span className="hidden flex-1 justify-center sm:flex">
          <span className="rounded-full border border-bm-mist bg-white px-4 py-0.5 text-[10px] font-semibold tracking-wide text-bm-slate">
            app.bodymotion.pro
          </span>
        </span>
        <span className="w-10" aria-hidden="true" />
      </div>

      {screenshot ? (
        <img src={screenshot} alt={alt} loading="lazy" className="block w-full" />
      ) : (
        <div role="img" aria-label={alt}>
          {children}
        </div>
      )}

      {caption && (
        <figcaption className="border-t border-bm-mist bg-bm-paper px-4 py-2 text-[11px] font-medium text-bm-slate">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
