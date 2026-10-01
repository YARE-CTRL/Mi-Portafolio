import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPost from "@/components/blog/BlogPost";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} — Bryan Hurtado`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post no encontrado" };
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <BlogPost post={post} />
      <Footer />
    </main>
  );
}
