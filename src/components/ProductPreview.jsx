import React, { useEffect, useRef, useState } from "react";
import ProductFrame from "./ui/ProductFrame";
import { trackSiteEvent } from "../utils/analytics";

const SLIDE_DURATION = 7000;

function Arrow({ previous = false }) {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d={previous ? "m12 5-5 5 5 5" : "m8 5 5 5-5 5"} /></svg>;
}

export default function ProductPreview({ screens }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const touchRef = useRef(null);
  const screen = screens[activeIndex];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPlaying(!media.matches);
    const handleMotionChange = () => { if (media.matches) setIsPlaying(false); };
    const handleVisibility = () => setIsVisible(!document.hidden);
    handleVisibility();
    media.addEventListener("change", handleMotionChange);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      media.removeEventListener("change", handleMotionChange);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    screens.slice(1).forEach(({ src }) => { const preload = new Image(); preload.src = src; });
  }, [screens]);

  useEffect(() => {
    if (screens.length < 2 || !isPlaying || isHovered || isExpanded || !isVisible) return;
    const timer = window.setTimeout(() => setActiveIndex(index => (index + 1) % screens.length), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [activeIndex, screens.length, isPlaying, isHovered, isExpanded, isVisible]);

  if (!screen) return null;

  const selectScreen = (index) => {
    const nextIndex = (index + screens.length) % screens.length;
    setIsPlaying(false);
    setActiveIndex(nextIndex);
    trackSiteEvent("product_preview_change", { screen: screens[nextIndex].label });
  };

  return (
    <section
      className="launch-product"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Conheça as telas do Bodymotion"
      onPointerEnter={(event) => { if (event.pointerType !== "touch") setIsHovered(true); }}
      onPointerLeave={() => setIsHovered(false)}
      onFocusCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPlaying(false);
      }}
      onKeyDown={(event) => {
        if (isExpanded || event.target.tagName === "SELECT") return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          selectScreen(activeIndex + (event.key === "ArrowLeft" ? -1 : 1));
        }
      }}
    >
      <div
        onTouchStart={(event) => { touchRef.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchEnd={(event) => {
          if (!touchRef.current) return;
          const dx = event.changedTouches[0].clientX - touchRef.current.x;
          const dy = event.changedTouches[0].clientY - touchRef.current.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) selectScreen(activeIndex + (dx < 0 ? 1 : -1));
          touchRef.current = null;
        }}
      >
        <ProductFrame
          priority
          imageId="product-preview-image"
          screenshot={screen.src}
          width={screen.width}
          height={screen.height}
          alt={screen.alt}
          className="launch-preview"
          toolbar={
            <>
            <select
              className="launch-carousel-select"
              aria-label="Escolher tela do sistema"
              aria-controls="product-preview-image"
              value={activeIndex}
              onChange={(event) => selectScreen(Number(event.target.value))}
            >
              {screens.map((item, index) => <option key={item.src} value={index}>{item.label}</option>)}
            </select>
            <div className="launch-carousel-tabs" role="group" aria-label="Escolher tela do sistema">
              {screens.map((item, index) => (
                <button type="button" key={item.src} aria-pressed={index === activeIndex} aria-controls="product-preview-image" onClick={() => selectScreen(index)}>{item.label}</button>
              ))}
            </div>
            </>
          }
        />
      </div>
      <div className="launch-product-caption">
        <p aria-live={isPlaying ? "off" : "polite"} aria-atomic="true">{screen.caption}</p>
        <div className="launch-product-controls">
          <span className="launch-slide-count" aria-label={`Tela ${activeIndex + 1} de ${screens.length}`}>{String(activeIndex + 1).padStart(2, "0")}<span> / {String(screens.length).padStart(2, "0")}</span></span>
          <button type="button" className="launch-carousel-control" aria-label="Tela anterior" onClick={() => selectScreen(activeIndex - 1)}><Arrow previous /></button>
          <button type="button" className="launch-carousel-control" aria-label="Próxima tela" onClick={() => selectScreen(activeIndex + 1)}><Arrow /></button>
          <button type="button" className="launch-carousel-control" aria-label={isPlaying ? "Pausar troca automática" : "Iniciar troca automática"} onClick={() => setIsPlaying(value => !value)}>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">{isPlaying ? <path d="M5.5 4h3v12h-3zm6 0h3v12h-3z" /> : <path d="m6 3 10 7-10 7V3Z" />}</svg>
          </button>
          <button
            ref={triggerRef}
            type="button"
            className="launch-expand"
            aria-haspopup="dialog"
            onClick={() => {
              setIsExpanded(true);
              dialogRef.current.showModal();
              trackSiteEvent("product_preview_open", { placement: "launch_page", screen: screen.label });
            }}
          >
            Ampliar
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 3H3v4m10-4h4v4M3 13v4h4m10-4v4h-4M3 3l5 5m9-5-5 5M3 17l5-5m9 5-5-5" /></svg>
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="launch-preview-dialog"
        aria-labelledby="product-preview-title"
        onClose={() => {
          setIsExpanded(false);
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current.close();
        }}
      >
        <div className="launch-preview-dialog-panel">
          <header className="flex items-center justify-between gap-4 border-b border-bm-mist px-5 py-3">
            <h2 id="product-preview-title" className="font-display text-lg font-bold text-bm-ink">{screen.title}</h2>
            <button type="button" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-bm-ink transition-colors hover:bg-bm-paper" aria-label="Fechar visualização" onClick={() => dialogRef.current.close()}><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
          </header>
          <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} className="block h-auto w-full" />
        </div>
      </dialog>
    </section>
  );
}
