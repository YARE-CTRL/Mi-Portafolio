const BIG_STATS = [
  { value: "28", label: "Pipelines en Producción" },
  { value: "1.2B", label: "Data Points / Día" },
];

const COMMANDS = [
  { id: "05", name: "dot run", time: "32s" },
  { id: "06", name: "Notify", time: "0.1s" },
];

const SUMMARY = [
  { label: "TOTAL", value: "55.7s" },
  { label: "PREV", value: "4m 12s" },
  { label: "∆ GAIN", value: "78%" },
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
