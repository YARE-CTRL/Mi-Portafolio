const TIMELINE = [
  { label: "Desarrollo Frontend & Software Analytics", period: "presente" },
  { label: "Maquetación interactiva & Arquitectura UI", period: null },
  { label: "Cierre de prácticas profesionales", period: "Ago 2026" },
];

export default function ProfileCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-6 h-full">
      {/* Label */}
      <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
        Perfil
      </p>

      {/* Bio */}
      <p className="font-sans text-sm text-zinc-400 leading-relaxed">
        Desarrollador e integrador con experiencia en soporte técnico L2/L3, resolución de incidencias complejas y análisis de datos mediante SQL. Especializado en la implementación de arquitecturas Agent-to-Agent (A2A), Model Context Protocol (MCP) y desarrollo frontend para optimizar flujos operativos.
      </p>

      {/* Timeline */}
      <div className="flex flex-col gap-2 flex-1">
        {TIMELINE.map(({ label, period }) => (
          <div key={label} className="flex items-start gap-2">
            <span className="text-green-400 font-mono text-xs mt-0.5 flex-shrink-0" aria-hidden="true">
              ›
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-zinc-400">{label}</span>
              {period && (
                <span className="font-mono text-xs text-zinc-600">{period}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Last activity */}
      <div className="border-t border-zinc-800 pt-4">
        <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-2">
          Última Actividad
        </p>
        <p className="font-mono text-xs text-zinc-400">
          Merged PR #847 – dbt model refactor{" "}
          <span className="text-zinc-600">· 2h ago</span>
        </p>
      </div>
    </article>
  );
}
