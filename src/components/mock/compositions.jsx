import React from "react";
import { AppShell, PanelHeader, Card, Stat, TextRow, PersonRow, Bars, Sparkline } from "./primitives";

/**
 * Composições ilustrativas por módulo — dados fictícios de exemplo.
 * Cada composição pode ser substituída por screenshot real via
 * ProductFrame `screenshot="/screens/<modulo>.png"`.
 */

export function DashboardMock() {
  return (
    <AppShell active="Início">
      <PanelHeader title="Bom dia, Dra. Duarte" chip="Hoje · 6 consultas" />
      <div className="flex gap-2.5">
        <Stat label="Pacientes ativos" value="128" trend="+6 no mês" />
        <Stat label="Consultas hoje" value="6" />
        <Stat label="Check-ins da semana" value="42" trend="87% de adesão" />
      </div>
      <div className="flex min-h-0 flex-1 gap-2.5">
        <Card className="flex w-[55%] flex-col">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Agenda de hoje</p>
          <div className="mt-1 flex-1 space-y-0.5 overflow-hidden">
            <PersonRow initials="MR" name="Consulta de retorno · 09h00" meta="M. Ribeiro · presencial" />
            <PersonRow initials="JP" name="Teleconsulta · 10h30" meta="J. Prado · vídeo + TCLE" tone="ink" />
            <PersonRow initials="CS" name="Avaliação corporal · 14h00" meta="C. Santos · antropometria" />
          </div>
        </Card>
        <Card className="flex min-w-0 flex-1 flex-col">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Evolução · peso (kg)</p>
          <div className="mt-1 flex flex-1 flex-col justify-end">
            <Sparkline />
            <p className="mt-1 text-[8px] font-bold text-bm-slate">últimos 6 meses</p>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

export function NutricaoMock() {
  return (
    <AppShell active="Prescrições">
      <PanelHeader title="Prescrição · Plano de definição" chip="IA + TACO" />
      <div className="flex min-h-0 flex-1 gap-2.5">
        <Card className="flex w-[52%] flex-col gap-1.5">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Almoço · texto livre</p>
          <p className="rounded-md bg-bm-paper p-1.5 text-[9px] font-semibold leading-relaxed text-bm-ink">
            120 g de frango grelhado, 4 col. de arroz integral, salada à vontade
          </p>
          <TextRow w="82%" />
          <TextRow w="64%" />
          <span className="mt-auto inline-flex w-fit rounded-full bg-bm-cyan px-2 py-0.5 text-[8px] font-extrabold text-bm-ink">
            Calcular com IA
          </span>
        </Card>
        <Card className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Correspondência TACO</p>
          <div className="rounded-md border border-bm-cyan/40 bg-bm-cyan-soft p-1.5">
            <p className="text-[9px] font-extrabold text-bm-ink">Frango, peito, grelhado — 120 g</p>
            <p className="text-[8px] font-bold text-bm-slate">191 kcal · P 38 g · C 0 g · G 3,7 g</p>
          </div>
          <div className="rounded-md border border-amber-300 bg-amber-50 p-1.5">
            <p className="text-[9px] font-extrabold text-amber-700">“Arroz integral” — revisar medida</p>
            <p className="text-[8px] font-bold text-amber-700/80">2 correspondências possíveis</p>
          </div>
          <p className="mt-auto text-[8px] font-bold text-bm-slate">Nada é salvo sem a sua validação.</p>
        </Card>
      </div>
    </AppShell>
  );
}

export function AntropometriaMock() {
  return (
    <AppShell active="Pacientes">
      <PanelHeader title="Avaliação corporal · C. Santos" chip="12ª avaliação" />
      <div className="flex min-h-0 flex-1 gap-2.5">
        <Card className="flex w-[46%] flex-col">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Fotos de evolução</p>
          <div className="mt-1.5 grid flex-1 grid-cols-2 gap-1.5">
            {["jan", "mar", "mai", "hoje"].map((m) => (
              <div key={m} className="relative flex items-end justify-center overflow-hidden rounded-md bg-gradient-to-b from-bm-mist to-bm-cyan/25">
                <svg viewBox="0 0 40 64" className="h-[85%]" aria-hidden="true">
                  <ellipse cx="20" cy="10" rx="6" ry="6.5" fill="#22255a" opacity="0.55" />
                  <path d="M12 22c0-3 3.5-5 8-5s8 2 8 5l-1.5 16c0 2-2.5 3.5-6.5 3.5s-6.5-1.5-6.5-3.5L12 22z" fill="#22255a" opacity="0.55" />
                  <path d="M13.5 41h4l-1 18h-3.5zM22.5 41h4l.5 18h-3.5z" fill="#22255a" opacity="0.55" />
                </svg>
                <span className="absolute left-1 top-1 rounded bg-white/85 px-1 text-[7px] font-extrabold text-bm-ink">{m}</span>
              </div>
            ))}
          </div>
        </Card>
        <div className="flex min-w-0 flex-1 flex-col gap-2.5">
          <div className="flex gap-2.5">
            <Stat label="% Gordura" value="24,1%" trend="−3,2 pts" />
            <Stat label="Cintura" value="78 cm" trend="−6 cm" />
          </div>
          <Card className="flex flex-1 flex-col">
            <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Histórico de medidas</p>
            <div className="mt-1 flex-1">
              <Bars values={[62, 58, 55, 52, 50, 47]} labels={["jan", "fev", "mar", "abr", "mai", "jun"]} />
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

export function TreinoMock() {
  return (
    <AppShell active="Treinos">
      <PanelHeader title="Plano de treino · Hipertrofia B" chip="Check-ins" />
      <div className="flex min-h-0 flex-1 gap-2.5">
        <Card className="flex w-[55%] flex-col gap-1">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Sessão de hoje</p>
          {[
            ["Agachamento livre", "4 × 8 · carga 60 kg"],
            ["Leg press 45°", "3 × 12 · carga 140 kg"],
            ["Cadeira extensora", "3 × 15 · até a falha"],
          ].map(([nome, serie]) => (
            <div key={nome} className="flex items-center justify-between rounded-md bg-bm-paper px-1.5 py-1">
              <span className="truncate text-[9px] font-bold text-bm-ink">{nome}</span>
              <span className="shrink-0 text-[8px] font-bold text-bm-slate">{serie}</span>
            </div>
          ))}
          <span className="mt-auto inline-flex w-fit rounded-full bg-bm-cyan px-2 py-0.5 text-[8px] font-extrabold text-bm-ink">
            Enviar link ao paciente
          </span>
        </Card>
        <Card className="flex min-w-0 flex-1 flex-col">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Check-in do paciente</p>
          <div className="mt-1 rounded-md border border-emerald-300 bg-emerald-50 p-1.5">
            <p className="text-[9px] font-extrabold text-emerald-700">Sessão concluída ✓</p>
            <p className="text-[8px] font-bold text-emerald-700/80">RPE 8 · “senti forte na última série”</p>
          </div>
          <p className="mt-2 text-[8px] font-bold uppercase tracking-wide text-bm-slate">Adesão do mês</p>
          <div className="mt-1 flex-1">
            <Bars values={[3, 4, 4, 5]} labels={["s1", "s2", "s3", "s4"]} />
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

export function AgendaMock() {
  return (
    <AppShell active="Agenda">
      <PanelHeader title="Agenda da semana" chip="Teleconsulta" />
      <div className="flex min-h-0 flex-1 gap-2.5">
        <Card className="flex w-[58%] flex-col gap-1">
          {[
            ["09h00", "M. Ribeiro", "Retorno · presencial", false],
            ["10h30", "J. Prado", "Teleconsulta · TCLE aceito", true],
            ["14h00", "C. Santos", "Avaliação corporal", false],
            ["16h00", "R. Lima", "Primeira consulta", false],
          ].map(([hora, nome, tipo, video]) => (
            <div
              key={hora}
              className={`flex items-center gap-2 rounded-md px-1.5 py-1 ${video ? "border border-bm-cyan/50 bg-bm-cyan-soft" : "bg-bm-paper"}`}
            >
              <span className="text-[8px] font-extrabold text-bm-cyan-deep">{hora}</span>
              <span className="truncate text-[9px] font-bold text-bm-ink">{nome}</span>
              <span className="ml-auto shrink-0 truncate text-[8px] font-semibold text-bm-slate">{tipo}</span>
            </div>
          ))}
        </Card>
        <Card className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1.5 bg-bm-ink">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bm-cyan">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#22255a" aria-hidden="true">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
          </div>
          <p className="text-[9px] font-extrabold text-white">Sala de vídeo pronta</p>
          <p className="text-center text-[8px] font-semibold leading-relaxed text-white/60">
            Link enviado ao paciente<br />consentimento registrado
          </p>
        </Card>
      </div>
    </AppShell>
  );
}

export function PortalMock() {
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-bm-ink via-bm-night to-bm-ink p-4">
      <div className="grid w-full max-w-[430px] gap-2.5 sm:grid-cols-[1fr_0.9fr]">
        <div className="rounded-xl bg-white p-3 shadow-frame">
          <div className="flex items-center gap-1.5">
            <img src="/brand/favicon.png" alt="" className="h-4 w-4 object-contain" />
            <p className="text-[10px] font-extrabold text-bm-ink">Portal do paciente</p>
          </div>
          <p className="mt-2 text-[9px] font-bold text-bm-slate">Olá, Camila — seu plano de hoje:</p>
          <div className="mt-1.5 space-y-1">
            {[
              ["Dieta do dia", "5 refeições · 1.850 kcal"],
              ["Treino B", "Inferiores · 45 min"],
              ["Diário alimentar", "2 registros enviados"],
            ].map(([t, m]) => (
              <div key={t} className="rounded-md bg-bm-paper px-2 py-1.5">
                <p className="text-[9px] font-extrabold text-bm-ink">{t}</p>
                <p className="text-[8px] font-semibold text-bm-slate">{m}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 p-3">
          <p className="text-[9px] font-extrabold uppercase tracking-wide text-bm-cyan">Acesso seguro</p>
          <p className="text-[10px] font-bold leading-relaxed text-white">
            Código de uso único enviado ao contato do paciente
          </p>
          <div className="flex gap-1">
            {["4", "8", "2", "9"].map((d, i) => (
              <span key={i} className="flex h-7 w-6 items-center justify-center rounded-md bg-white/10 text-xs font-extrabold text-bm-cyan">
                {d}
              </span>
            ))}
          </div>
          <p className="text-[8px] font-semibold text-white/55">Sem senha para memorizar ou vazar</p>
        </div>
      </div>
    </div>
  );
}

export function OperacaoMock() {
  return (
    <AppShell active="Relatórios">
      <PanelHeader title="Visão geral da clínica" chip="Equipe · 8 pessoas" />
      <div className="flex gap-2.5">
        <Stat label="Retenção 90d" value="86%" trend="+4 pts" />
        <Stat label="Consultas no mês" value="214" />
        <Stat label="Planos ativos" value="163" />
      </div>
      <div className="flex min-h-0 flex-1 gap-2.5">
        <Card className="flex w-[55%] flex-col">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Consultas por semana</p>
          <div className="mt-1 flex-1">
            <Bars values={[38, 46, 51, 44, 58, 61]} />
          </div>
        </Card>
        <Card className="flex min-w-0 flex-1 flex-col gap-0.5">
          <p className="text-[8px] font-bold uppercase tracking-wide text-bm-slate">Equipe · papéis</p>
          <PersonRow initials="AD" name="Dra. A. Duarte" meta="Administradora" />
          <PersonRow initials="RM" name="Dr. R. Mota" meta="Nutricionista" tone="ink" />
          <PersonRow initials="BS" name="B. Silva" meta="Recepção · acesso limitado" tone="ink" />
        </Card>
      </div>
    </AppShell>
  );
}
