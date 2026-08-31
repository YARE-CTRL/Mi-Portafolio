const TIMELINE = [
  { label: "Desarrollador Frontend & Datos", period: "2019 · present" },
  { label: "Entornos de alta disponibilidad", period: null },
  { label: "Remoto / Ciudad de México", period: null },
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
        Desarrollador Frontend &amp; Datos con enfoque en confiabilidad, rendimiento y
        observabilidad de sistemas a escala. Especializado en identificar cuellos de
        botella, reducir latencia P99 y construir pipelines que no fallan en producción.
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
