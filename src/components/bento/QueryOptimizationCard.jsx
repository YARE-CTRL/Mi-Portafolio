const CORE_TECH = [
  { label: "Framework", value: "Next.js (App Router)" },
  { label: "Estilos", value: "Tailwind CSS" },
  { label: "Despliegue", value: "Vercel" },
];

const INTEGRATIONS = [
  { label: "Motor IA", value: "LLM Generativo" },
  { label: "Base de Datos", value: "Notion API" },
  { label: "Estado", value: "BETA (En Construcción)" },
];

export default function QueryOptimizationCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-5 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
            Proyecto · 01
          </p>
          <h2 className="font-sans font-bold text-white text-lg md:text-xl leading-tight">
            Career OS
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-400 border border-zinc-700 px-2 py-1 tracking-widest uppercase flex-shrink-0">
          IA · Notion API
        </span>
      </div>

      {/* Tech / Integrations table */}
      <div className="grid grid-cols-2 gap-px bg-zinc-800 flex-1">
        {/* Core Tech */}
        <div className="bg-black p-4 flex flex-col gap-3">
          <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase">Stack Core</p>
          {CORE_TECH.map(({ label, value }) => (
            <div key={label} className="flex flex-col xl:flex-row justify-between xl:items-baseline gap-1 xl:gap-2">
              <span className="font-mono text-xs text-zinc-600 truncate">{label}</span>
              <span className="font-mono text-xs text-zinc-400 flex-shrink-0">{value}</span>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="bg-black p-4 flex flex-col gap-3">
          <p className="font-mono text-xs text-green-400 tracking-widest uppercase">Integraciones & IA</p>
          {INTEGRATIONS.map(({ label, value }) => (
            <div key={label} className="flex flex-col xl:flex-row justify-between xl:items-baseline gap-1 xl:gap-2">
              <span className="font-mono text-xs text-zinc-600 truncate">{label}</span>
              <span className="font-mono text-xs text-green-400 font-bold flex-shrink-0">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="font-mono text-xs text-zinc-600 leading-relaxed">
        Plataforma que utiliza <code className="text-zinc-400">Inteligencia Artificial</code> para generar roadmaps de estudio hiper-personalizados y los organiza automáticamente creando bases de datos interactivas en tu workspace de Notion.
      </p>
      
      {/* Action / Link */}
      <div className="pt-2 border-t border-zinc-800">
        <a 
          href="https://careeros-yare.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-green-400 transition-colors"
        >
          <span className="text-green-400 group-hover:animate-pulse">›</span> [ VISITAR_PROYECTO_BETA ]
        </a>
      </div>
    </article>
  );
}
