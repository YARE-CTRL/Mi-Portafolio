const BEFORE = [
  { label: "Tipo de scan", value: "Full Table Scan", highlight: false },
  { label: "Rows examined", value: "4,200,000", highlight: false },
  { label: "Tiempo de ejecución", value: "4,200ms", highlight: false },
  { label: "CPU usage", value: "94%", highlight: false },
];

const AFTER = [
  { label: "Tipo de scan", value: "Index Seek", highlight: true },
  { label: "Rows examined", value: "12,400", highlight: true },
  { label: "Tiempo de ejecución", value: "120ms", highlight: true },
  { label: "CPU usage", value: "3%", highlight: true },
];

export default function QueryOptimizationCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-5 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
            Caso de Estudio · #01
          </p>
          <h2 className="font-sans font-bold text-white text-lg md:text-xl leading-tight">
            Optimización de Query Crítica en PostgreSQL 16
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-1 tracking-widest uppercase flex-shrink-0">
          SQL · DBA
        </span>
      </div>

      {/* Before / After table */}
      <div className="grid grid-cols-2 gap-px bg-zinc-800 flex-1">
        {/* Before */}
        <div className="bg-black p-4 flex flex-col gap-3">
          <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase">Antes</p>
          {BEFORE.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-baseline gap-2">
              <span className="font-mono text-xs text-zinc-600 truncate">{label}</span>
              <span className="font-mono text-xs text-zinc-400 flex-shrink-0">{value}</span>
            </div>
          ))}
        </div>

        {/* After */}
        <div className="bg-black p-4 flex flex-col gap-3">
          <p className="font-mono text-xs text-green-400 tracking-widest uppercase">Después</p>
          {AFTER.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-baseline gap-2">
              <span className="font-mono text-xs text-zinc-600 truncate">{label}</span>
              <span className="font-mono text-xs text-green-400 font-bold flex-shrink-0">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Latency bar */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
            Reducción de Latencia
          </span>
          <span className="font-mono text-sm font-bold text-green-400">97.1%</span>
        </div>
        <div className="h-px bg-zinc-800 relative">
          <div className="absolute top-0 left-0 h-px bg-green-400" style={{ width: "97.1%" }} />
        </div>
      </div>

      {/* Description */}
      <p className="font-mono text-xs text-zinc-600 leading-relaxed">
        Introducción de índices compuestos en{" "}
        <code className="text-zinc-400">(customer_id, created_at)</code>{" "}
        y reescritura de subqueries correlacionados. Eliminó 99.7% de row reads.
      </p>
    </article>
  );
}
