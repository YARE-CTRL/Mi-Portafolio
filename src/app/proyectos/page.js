import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";

export const metadata = {
  title: "Proyectos — Bryan Hurtado",
  description:
    "Casos de estudio de proyectos reales: pipelines de datos, optimización SQL, observabilidad SRE y desarrollo frontend.",
};

export default function ProyectosPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />

      <section className="px-6 md:px-10 pt-32 pb-6 max-w-7xl mx-auto">
        <p className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase mb-4">
          Portafolio
        </p>
        <h1
          className="font-sans font-black text-white leading-tight tracking-tighter mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Proyectos
        </h1>
        <p className="font-mono text-sm text-zinc-500 max-w-xl mb-0">
          Casos de estudio reales. Datos, sistemas y frontend en producción.
        </p>
      </section>

      <BentoGrid />
      <Footer />
    </main>
  );
}
