"use client";

const TECH_STACK = [
  "Next.js",
  "React",
  "PostgreSQL",
  "Tailwind CSS",
  "Python",
  "SQL",
  "Node.js",
  "Docker",
];

function handleScrollToCasos(e) {
  e.preventDefault();
  const target = document.getElementById("casos");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-14"
      aria-label="Hero — presentación"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* ── Status badge ── */}
        <div className="flex items-center gap-2 mb-10">
          <span
            className="w-2 h-2 rounded-full bg-green-400 animate-pulse-green flex-shrink-0"
            aria-hidden="true"
          />
          <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
            Disponible para proyectos&nbsp;·&nbsp;Q4 2026
          </span>
        </div>

        {/* ── Headline ── */}
        <h1
          className="font-sans font-black leading-[0.92] tracking-tighter mb-10"
          style={{ fontSize: "clamp(3.2rem, 10vw, 8.5rem)" }}
        >
          {/* word-break: keep-all prevents mid-word breaks */}
          <span className="block text-white" style={{ wordBreak: "keep-all" }}>
            Desarrollador
          </span>
          <span className="block text-zinc-700" style={{ wordBreak: "keep-all" }}>
            Frontend &amp; Datos
          </span>
          <span className="block text-white" style={{ wordBreak: "keep-all" }}>
            en Producción
          </span>
        </h1>

        {/* ── Subtitle ── */}
        <div className="flex flex-col gap-2 mb-16 max-w-2xl">
          <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-wide flex items-start gap-2">
            <span className="text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
            Construyendo interfaces y pipelines de datos que no fallan en producción
          </p>
          <p className="font-mono text-xs md:text-sm text-zinc-500 tracking-wide flex items-start gap-2">
            <span className="text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
            {TECH_STACK.join(" · ")}
          </p>
        </div>

        {/* ── Scroll indicator — functional smooth scroll ── */}
        <a
          href="#casos"
          onClick={handleScrollToCasos}
          className="group inline-flex items-center gap-4 cursor-pointer"
          aria-label="Ir a casos de estudio"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors duration-200">
            Casos de Estudio
          </span>
          <div className="flex-1 w-24 md:w-48 h-px bg-zinc-800 group-hover:bg-zinc-600 transition-colors duration-200" />
        </a>

      </div>
    </section>
  );
}
