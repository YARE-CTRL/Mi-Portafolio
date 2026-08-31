const METRICS = [
  {
    label: "MTTR",
    before: "42 min",
    after: "8 min",
    afterPct: 19,
  },
  {
    label: "P99 Latency",
    before: "3,400ms",
    after: "210ms",
    afterPct: 6,
  },
  {
    label: "Error Rate",
    before: "0.89%",
    after: "0.03%",
    afterPct: 3,
  },
  {
    label: "Uptime SLA",
    before: "99.5%",
    after: "99.97%",
    afterPct: 100,
  },
];

const TOOLS = {
  tools: ["PagerDuty", "Grafana", "Loki"],
  infra: ["K8s", "Prometheus", "ArgoCD"],
};

export default function MTTRCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-5 h-full">
      {/* Header */}
      <div>
        <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
          Caso de Estudio · #02
        </p>
        <h2 className="font-sans font-bold text-white text-lg leading-tight">
          Reducción de MTTR &amp; Mejora de SLA
        </h2>
      </div>

      {/* Metric rows */}
      <div className="flex flex-col gap-4 flex-1">
        {METRICS.map(({ label, before, after, afterPct }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                {label}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-700 line-through">
                  {before}
                </span>
                <span className="font-mono text-xs font-bold text-green-400">
                  {after}
                </span>
              </div>
            </div>
            {/* Progress bar — green showing the "after" reduced footprint */}
            <div className="h-px bg-zinc-800">
              <div
                className="h-px bg-green-400"
                style={{ width: `${afterPct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tools footer */}
      <div className="border-t border-zinc-800 pt-4 grid grid-cols-2 gap-3">
        <div>
          <p className="font-mono text-xs text-zinc-700 uppercase tracking-widest mb-1.5">
            Tools
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {TOOLS.tools.map((t) => (
              <span key={t} className="font-mono text-xs text-green-400/80">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs text-zinc-700 uppercase tracking-widest mb-1.5">
            Infra
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {TOOLS.infra.map((t) => (
              <span key={t} className="font-mono text-xs text-green-400/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
