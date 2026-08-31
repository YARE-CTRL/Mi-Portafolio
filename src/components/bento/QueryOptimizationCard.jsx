const BEFORE = [
  { label: "Arquitectura", value: "CSR Masivo", highlight: false },
  { label: "FCP (First Contentful Paint)", value: "3.2s", highlight: false },
  { label: "Bundle Size", value: "4.5MB", highlight: false },
  { label: "TTI (Time to Interactive)", value: "3.8s", highlight: false },
];

const AFTER = [
  { label: "Arquitectura", value: "SSR + RSC", highlight: true },
  { label: "FCP (First Contentful Paint)", value: "0.8s", highlight: true },
  { label: "Bundle Size", value: "1.2MB", highlight: true },
  { label: "TTI (Time to Interactive)", value: "0.9s", highlight: true },
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
            Optimización de Maquetación y Renderizado UI
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-1 tracking-widest uppercase flex-shrink-0">
          React · Next.js
        </span>
      </div>

      {/* Before / After table */}
      <div className="grid grid-cols-2 gap-px bg-zinc-800 flex-1">
        {/* Before */}
        <div className="bg-black p-4 flex flex-col gap-3">
          <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase">Antes</p>
          {BEFORE.map(({ label, value }) => (
            <div key={label} className="flex flex-col xl:flex-row justify-between xl:items-baseline gap-1 xl:gap-2">
              <span className="font-mono text-xs text-zinc-600 truncate">{label}</span>
              <span className="font-mono text-xs text-zinc-400 flex-shrink-0">{value}</span>
            </div>
          ))}
        </div>

        {/* After */}
        <div className="bg-black p-4 flex flex-col gap-3">
          <p className="font-mono text-xs text-green-400 tracking-widest uppercase">Después</p>
          {AFTER.map(({ label, value }) => (
            <div key={label} className="flex flex-col xl:flex-row justify-between xl:items-baseline gap-1 xl:gap-2">
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
            Reducción de FCP
          </span>
          <span className="font-mono text-sm font-bold text-green-400">75%</span>
        </div>
        <div className="h-px bg-zinc-800 relative">
          <div className="absolute top-0 left-0 h-px bg-green-400" style={{ width: "75%" }} />
        </div>
      </div>

      {/* Description */}
      <p className="font-mono text-xs text-zinc-600 leading-relaxed">
        Refactorización de arquitectura monolítica a <code className="text-zinc-400">Next.js Server Components</code> basada en diseños precisos de Figma. Se minimizó la carga de JavaScript en el cliente mejorando el Core Web Vitals de forma drástica.
      </p>
    </article>
  );
}
