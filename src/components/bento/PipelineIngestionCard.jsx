const STEPS = [
  { id: "01", name: "Supabase Magic Link", time: "Auth", widthPct: 20 },
  { id: "02", name: "Resume PDF Parsing", time: "Storage", widthPct: 45 },
  { id: "03", name: "Gemini JSON Structuring", time: "AI Engine", widthPct: 75 },
  { id: "04", name: "Geographic Job Match", time: "Data", widthPct: 100 },
];

export default function PipelineIngestionCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-5 h-full">
      {/* Header */}
      <div>
        <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
          Proyecto · 02
        </p>
        <h2 className="font-sans font-bold text-white text-lg md:text-xl leading-tight">
          LumiJob: AI Job Matcher
        </h2>
        <p className="font-mono text-xs text-zinc-500 mt-1 tracking-wide">
          Buscador inteligente de empleo remoto impulsado por Google Gemini.
        </p>
      </div>

      {/* Description */}
      <p className="font-mono text-xs text-zinc-400 leading-relaxed">
        Analiza CVs en formato PDF utilizando LLMs deterministas para extraer fortalezas reales. Cruza el perfil estructurado en JSON con APIs globales, filtrando el ruido del mercado laboral.
      </p>

      {/* Pipeline steps */}
      <div className="flex flex-col gap-3 flex-1">
        {STEPS.map(({ id, name, time, widthPct }) => (
          <div key={id} className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-700">{id}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs text-zinc-300 truncate max-w-[150px] sm:max-w-none">{name}</span>
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

      {/* Action / Link */}
      <div className="pt-2 border-t border-zinc-800">
        <a 
          href="https://lumijob.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-green-400 transition-colors"
        >
          <span className="text-green-400 group-hover:animate-pulse">›</span> [ VISITAR_LUMIJOB ]
        </a>
      </div>
    </article>
  );
}
