import { getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";

export const metadata = {
  title: "Blog — Bryan Hurtado",
  description:
    "Notas y artículos sobre SRE, bases de datos, desarrollo personal y vida. Escritos desde producción real.",
};

const CATEGORY_COLORS = {
  green:  "text-green-400 border-green-400/20 bg-green-400/5",
  blue:   "text-blue-400 border-blue-400/20 bg-blue-400/5",
  purple: "text-purple-400 border-purple-400/20 bg-purple-400/5",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <main className="bg-black min-h-screen">
      <Header />

      <section className="px-6 md:px-10 pt-32 pb-20 max-w-7xl mx-auto">

        {/* Encabezado de sección */}
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-[10px] text-zinc-600 tracking-[0.35em] uppercase mb-5">
            Digital Garden
          </p>
          <h1
            className="font-sans font-black text-white leading-[1.0] tracking-tighter mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            Blog &amp; Notas
          </h1>
          <div className="w-10 h-px bg-zinc-800 mb-6" />
          <p className="font-mono text-xs text-zinc-500 leading-relaxed">
            Un espacio donde conviven lo técnico y lo personal. Notas desde la
            terminal, reflexiones desde el parque.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mr-2">
            Filtrar
          </span>
          <span className="font-mono text-[10px] px-3 py-1 border border-zinc-800 text-zinc-400 rounded-full tracking-wider">
            Todos · {posts.length}
          </span>
          {categories.map((cat) => {
            const post = posts.find((p) => p.category === cat);
            const colorClass = CATEGORY_COLORS[post?.categoryColor] || CATEGORY_COLORS.green;
            return (
              <span
                key={cat}
                className={`font-mono text-[10px] px-3 py-1 border rounded-full tracking-wider ${colorClass}`}
              >
                {cat}
              </span>
            );
          })}
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
