import QueryOptimizationCard from "./bento/QueryOptimizationCard";
import ProfileCard from "./bento/ProfileCard";
import StatsCard from "./bento/StatsCard";
import PipelineIngestionCard from "./bento/PipelineIngestionCard";
import PipelineMetricsCard from "./bento/PipelineMetricsCard";
import MTTRCard from "./bento/MTTRCard";
import SqlTerminalCard from "./bento/SqlTerminalCard";
import TechStackCard from "./bento/TechStackCard";

/**
 * BentoGrid — 12-column CSS Grid layout
 *
 * Desktop (md+) layout:
 * ┌──────────────────────────┬────────────┐  Row 1
 * │  QueryOptimization (8)   │ Profile (4)│
 * ├──────────┬───────────────┴────────────┤  Row 2
 * │ Stats (4)│  PipelineIngestion (8)     │
 * ├──────────┴─────────────────────────────┤  Row 3
 * │        PipelineMetrics (12)            │
 * ├──────────┬─────────────────┬──────────┤  Row 4
 * │ MTTR (4) │ SqlTerminal (5) │ Stack (3)│
 * └──────────┴─────────────────┴──────────┘
 *
 * Mobile: all cards stack to col-span-12 (single column)
 */
export default function BentoGrid() {
  return (
    <section
      id="casos"
      className="px-6 md:px-10 py-16"
      aria-label="Casos de estudio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase mb-6">
          Casos de Estudio
        </p>

        {/* ── 12-col grid with 1px gap (gap shows bg → simulates borders) ── */}
        <div className="grid grid-cols-12 gap-px bg-zinc-800">

          {/* ── Row 1 ── */}
          <div className="col-span-12 md:col-span-8">
            <QueryOptimizationCard />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ProfileCard />
          </div>

          {/* ── Row 2 ── */}
          <div className="col-span-12 md:col-span-4">
            <StatsCard />
          </div>
          <div className="col-span-12 md:col-span-8">
            <PipelineIngestionCard />
          </div>

          {/* ── Row 3 — full width ── */}
          <div className="col-span-12">
            <PipelineMetricsCard />
          </div>

          {/* ── Row 4 ── */}
          <div className="col-span-12 md:col-span-4">
            <MTTRCard />
          </div>
          <div className="col-span-12 md:col-span-5">
            <SqlTerminalCard />
          </div>
          <div className="col-span-12 md:col-span-3">
            <TechStackCard />
          </div>

        </div>
      </div>
    </section>
  );
}
