const BIG_STATS = [
  { value: "MCP", label: "Arquitecturas IA Generativa" },
  { value: "SQL", label: "Diagnóstico & Cruce de Datos" },
];

const COMMANDS = [
  { id: "01", name: "Analizar requerimientos", time: "Validado" },
  { id: "02", name: "Diagnóstico (PostgreSQL)", time: "100%" },
];

const SUMMARY = [
  { label: "ROL", value: "Analista" },
  { label: "NIVEL", value: "L2/L3" },
  { label: "AÑO", value: "2026" },
];

export default function PipelineMetricsCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-5 h-full">
      {/* Big numbers */}
      <div className="grid grid-cols-2 gap-4">
        {BIG_STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span
              className="font-mono font-black text-green-400 leading-none"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              {value}
            </span>
            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Command log */}
      <div className="flex flex-col gap-2 flex-1">
        {COMMANDS.map(({ id, name, time }) => (
          <div
            key={id}
            className="flex items-center justify-between font-mono text-xs border border-zinc-800 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-zinc-700">{id}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
              <span className="text-green-400">{name}</span>
            </div>
            <span className="text-zinc-500">{time}</span>
          </div>
        ))}
      </div>

      {/* Summary row */}
      <div className="border-t border-zinc-800 pt-4 grid grid-cols-3 gap-2">
        {SUMMARY.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-0.5">
            <span className="font-mono text-xs text-zinc-700 uppercase tracking-widest">
              {label}
            </span>
            <span className="font-mono text-sm font-bold text-white">{value}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
