import React, { useEffect, useRef } from "react";

/**
 * Revela o conteúdo com fade-up quando entra no viewport.
 * Respeita prefers-reduced-motion via .reveal-init (globals.css).
 * Fallback: revela de qualquer forma após 3s para nunca esconder
 * conteúdo de crawlers, print ou browsers sem IntersectionObserver.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.remove("reveal-init");
      return undefined;
    }

    const show = () => {
      if (el.classList.contains("animate-fade-up")) return;
      el.style.animationDelay = `${delay}ms`;
      el.classList.add("animate-fade-up");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show();
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    const fallback = setTimeout(() => {
      el.style.animationDelay = "0ms";
      show();
      observer.disconnect();
    }, 3000);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal-init ${className}`}>
      {children}
    </Tag>
  );
}
