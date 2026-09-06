import React from "react";
import ProductFrame from "../ui/ProductFrame";
import Reveal from "../ui/Reveal";
import { GROUPS } from "../../data/landing";
import { getScreen } from "../../data/screens";

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-base font-semibold text-bm-ink">
      <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-bm-cyan-soft text-bm-ink">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function PlatformRow({ group, imageLeft, delay }) {
  const desktopShot = getScreen(group.screenshotKey);
  const mobileShot = group.screenshotKeyMobile ? getScreen(group.screenshotKeyMobile) : null;

  const imageBlock = (
    <div className={imageLeft ? "" : "lg:order-2"}>
      {mobileShot ? (
        <>
          <ProductFrame
            screenshot={mobileShot.src}
            width={mobileShot.width}
            height={mobileShot.height}
            alt={group.altMobile || group.alt}
            className="lg:hidden"
          />
          {desktopShot && (
            <ProductFrame
              screenshot={desktopShot.src}
              width={desktopShot.width}
              height={desktopShot.height}
              alt={group.alt}
              className="hidden lg:block"
            />
          )}
        </>
      ) : (
        desktopShot && (
          <ProductFrame
            screenshot={desktopShot.src}
            width={desktopShot.width}
            height={desktopShot.height}
            alt={group.alt}
          />
        )
      )}
    </div>
  );

  const textBlock = (
    <div className={imageLeft ? "" : "lg:order-1"}>
      <p className="text-[15px] font-extrabold text-bm-cyan-deep">{group.eyebrow}</p>
      <h3 className="mt-2 font-display text-2xl font-extrabold text-bm-ink sm:text-[30px]">{group.title}</h3>
      <p className="mt-3 text-base leading-relaxed text-bm-slate">{group.description}</p>
      <ul className="mt-4 space-y-3">
        {group.bullets.map((bullet) => (
          <Bullet key={bullet}>{bullet}</Bullet>
        ))}
      </ul>
      {group.aiHighlight && (
        <div className="mt-4 flex items-start gap-3.5 rounded-xl bg-bm-cyan-soft px-4 py-4">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-[22px] w-[22px] shrink-0" fill="none" stroke="#22255a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
            <path d="M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z" />
          </svg>
          <p className="text-sm leading-relaxed text-bm-ink">
            <strong>{group.aiHighlight.title}</strong> {group.aiHighlight.detail}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Reveal
      delay={delay}
      className={`grid gap-10 lg:items-center lg:gap-[72px] ${
        imageLeft ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)]" : "lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)]"
      }`}
    >
      {imageBlock}
      {textBlock}
    </Reveal>
  );
}

export default function Plataforma() {
  return (
    <section id="plataforma" className="bg-white py-16 lg:py-24">
      <div className="shell">
        <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-4 text-center">
          <p className="eyebrow justify-center">A plataforma</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-bm-ink sm:text-[2.5rem]">
            Tudo o que você faz com o paciente, no mesmo histórico.
          </h2>
          <p className="hidden max-w-[640px] text-lg leading-relaxed text-bm-slate lg:block">
            Não é um pacote de ferramentas separadas. Cada consulta, medida, refeição e treino
            alimenta a mesma ficha.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14 lg:mt-24 lg:space-y-[88px]">
          {GROUPS.map((group, i) => (
            <PlatformRow key={group.id} group={group} imageLeft={i % 2 === 1} delay={Math.min(i, 2) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
