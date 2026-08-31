const STACK = [
  {
    category: "Frontend / Frameworks",
    items: ["React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    category: "Data & Backend",
    items: ["PostgreSQL", "SQL", "Python", "Node.js"],
  },
  {
    category: "Lenguajes",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Arquitectura e IA",
    items: ["AWS", "MCP (Model Context Protocol)", "A2A (Agent-to-Agent)", "Docker"],
  },
];

export default function TechStackCard() {
  return (
    <article className="bento-card bg-black border border-zinc-800 p-6 flex flex-col gap-5 h-full">
      <h2 className="font-sans font-bold text-white text-lg">Herramientas</h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-5 flex-1">
        {STACK.map(({ category, items }) => (
          <div key={category} className="flex flex-col gap-2">
            <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
              {category}
            </p>
            <ul className="flex flex-col gap-1" role="list">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-green-400 font-mono text-xs" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-mono text-xs text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
