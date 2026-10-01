import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/timeline/Timeline";

export const metadata = {
  title: "Trayectoria — Bryan Hurtado",
  description:
    "Mi experiencia profesional y académica: soporte TI L2, análisis de datos, desarrollo web y certificaciones.",
};

export default function TrayectoriaPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />

      <section className="px-6 md:px-10 pt-32 pb-16 max-w-7xl mx-auto">
        <p className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase mb-4">
          Sobre mí
        </p>
        <h1
          className="font-sans font-black text-white leading-tight tracking-tighter mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Trayectoria
        </h1>
        <p className="font-mono text-sm text-zinc-500 max-w-xl mb-16">
          Experiencia profesional, formación académica y certificaciones. Todo
          el camino hasta hoy.
        </p>

        <Timeline />
      </section>

      <Footer />
    </main>
  );
}
