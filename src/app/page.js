import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Bryan Hurtado — Desarrollador Frontend & Datos",
  description:
    "Portafolio de Bryan Hurtado. Desarrollador Frontend & Datos en producción. Especialista en SRE, pipelines de datos y optimización SQL.",
};

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <BentoGrid />

      {/* ── Sección: Últimas notas del blog ── */}
      <section className="px-6 md:px-10 py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">

          {/* Encabezado de sección */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-[10px] text-zinc-600 tracking-[0.35em] uppercase mb-3">
                Notas Recientes
              </p>
              <h2 className="font-sans font-black text-white text-3xl tracking-tight">
                Del Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="group hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
            >
              Ver todos
              <ArrowRight
                size={11}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900">
            {latestPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {/* CTA móvil */}
          <div className="mt-8 md:hidden">
            <Link
              href="/blog"
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
            >
              Ver todos los artículos
              <ArrowRight
                size={11}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
