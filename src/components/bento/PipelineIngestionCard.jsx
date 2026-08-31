const STEPS = [
  { id: "01", name: "Ingesta", time: "1.2s", widthPct: 20 },
  { id: "02", name: "Transform", time: "3.4s", widthPct: 55 },
  { id: "03", name: "Validate", time: "5.9s", widthPct: 95 },
  { id: "04", name: "Load", time: "0.1s", widthPct: 5 },
];

export default function PipelineIngestionCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-5 h-full">
      {/* Header */}
      <div>
        <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
          Caso de Estudio · #03
        </p>
        <h2 className="font-sans font-bold text-white text-lg md:text-xl leading-tight">
          Data Ingestion Pipeline
        </h2>
        <p className="font-mono text-xs text-zinc-500 mt-1 tracking-wide">
          12M registros/hora · PostgreSQL → ClickHouse
        </p>
      </div>

      {/* Pipeline steps */}
      <div className="flex flex-col gap-3 flex-1">
        {STEPS.map(({ id, name, time, widthPct }) => (
          <div key={id} className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-700">{id}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs text-zinc-300">{name}</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">{time}</span>
            </div>
            {/* Progress bar */}
            <div className="h-px bg-zinc-800">
              <div
                className="h-px bg-green-400/60"
                style={{ width: `${widthPct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
