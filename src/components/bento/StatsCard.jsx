const STATS = [
  { value: "100%", label: "Trazabilidad & Integridad de Datos (SQL)" },
  { value: "L2/L3", label: "Soporte & Resolución de Incidencias" },
];

export default function StatsCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col justify-end gap-6 h-full">
      <div className="grid grid-cols-2 gap-4 flex-1 items-end">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span
              className="font-mono font-black text-green-400 leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
            >
              {value}
            </span>
            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
