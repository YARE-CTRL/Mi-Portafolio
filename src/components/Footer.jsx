const FOOTER_LINKS = [
  { label: "Email", href: "mailto:hola@bhurtado.dev" },
  { label: "GitHub", href: "https://github.com/YARE-CTRL" },
  { label: "LinkedIn", href: "#" },
];

// Replace with your real git commit SHA
const BUILD_META = {
  sha: "F526968",
  ref: "#GT7P1B",
  year: "2026",
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 md:px-10 py-8" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">

        {/* Identity */}
        <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
          B. Hurtado · Desarrollador Frontend &amp; Datos
        </p>

        {/* Links — centered on desktop */}
        <nav className="flex items-center gap-4 md:justify-center" aria-label="Links de contacto">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs text-zinc-500 hover:text-green-400 transition-colors duration-200 uppercase tracking-widest"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Build meta — right-aligned on desktop */}
        <p className="font-mono text-xs text-zinc-700 tracking-widest md:text-right uppercase">
          Build_{BUILD_META.sha} · {BUILD_META.ref} · {BUILD_META.year}
        </p>

      </div>
    </footer>
  );
}
