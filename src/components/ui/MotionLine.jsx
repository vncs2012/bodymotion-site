import React, { useEffect, useRef } from "react";

/**
 * Traço de movimento da marca — eco da curva do símbolo Bodymotion.
 * Desenha o traço quando entra no viewport (stroke-dash animado).
 */
export default function MotionLine({ className = "", stroke = "#50b4e6", strokeWidth = 5 }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return undefined;

    const length = Math.ceil(path.getTotalLength());
    path.style.setProperty("--trace-length", `${length}`);
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      path.style.strokeDashoffset = "0";
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("animate-trace-line");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(path);
    const fallback = setTimeout(() => {
      path.classList.add("animate-trace-line");
      observer.disconnect();
    }, 3000);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 220 26"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="M4 19C46 8 96 4 132 9c24 3 40 8 84 6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
