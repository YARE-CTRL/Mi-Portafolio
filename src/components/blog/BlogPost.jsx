"use client";

import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

const COLOR_MAP = {
  green: "text-green-400 border-green-400/20 bg-green-400/5",
  blue: "text-blue-400 border-blue-400/20 bg-blue-400/5",
  purple: "text-purple-400 border-purple-400/20 bg-purple-400/5",
};

export default function BlogPost({ post }) {
  const badgeColor = COLOR_MAP[post.categoryColor] || COLOR_MAP.green;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="px-6 md:px-10 pt-8 pb-28 max-w-3xl mx-auto"
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-14 font-mono text-[10px] text-zinc-700 tracking-widest uppercase">
        <Link
          href="/blog"
          className="flex items-center gap-1.5 hover:text-zinc-400 transition-colors duration-200"
        >
          <ArrowLeft size={11} strokeWidth={1.5} />
          Blog
        </Link>
        <span className="text-zinc-800">/</span>
        <span className="text-zinc-600 truncate max-w-xs normal-case tracking-normal">
          {post.title}
        </span>
      </div>

      {/* Imagen de cabecera — efecto cinematográfico */}
      {post.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative w-full h-64 md:h-[420px] mb-14 overflow-hidden border border-zinc-900"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover grayscale brightness-50 hover:grayscale-[30%] hover:brightness-75 transition-all duration-1000 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </motion.div>
      )}

      {/* Meta badges */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center gap-1.5">
          <Tag size={11} className="text-zinc-600" strokeWidth={1.5} />
          <span className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-0.5 border rounded-full ${badgeColor}`}>
            {post.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={11} className="text-zinc-700" strokeWidth={1.5} />
          <span className="font-mono text-[10px] text-zinc-700 tracking-wider">
            {post.readTime} de lectura
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={11} className="text-zinc-700" strokeWidth={1.5} />
          <span className="font-mono text-[10px] text-zinc-700 tracking-wider">
            {new Date(post.date).toLocaleDateString("es-CO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Título del artículo */}
      <h1
        className="font-sans font-black text-white leading-[1.05] tracking-tight mb-12"
        style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)" }}
      >
        {post.title}
      </h1>

      {/* Separador */}
      <div className="w-12 h-px bg-zinc-800 mb-12" />

      {/* Contenido Markdown */}
      <div className="
        prose prose-invert prose-zinc max-w-none
        prose-headings:font-sans prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
        prose-h2:text-xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:border-b prose-h2:border-zinc-900 prose-h2:pb-4
        prose-h3:text-base prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-zinc-200
        prose-p:font-mono prose-p:text-[13px] prose-p:text-zinc-400 prose-p:leading-[1.85]
        prose-a:text-green-400 prose-a:no-underline prose-a:font-normal hover:prose-a:underline
        prose-strong:text-white prose-strong:font-semibold
        prose-blockquote:border-l-zinc-700 prose-blockquote:border-l-2 prose-blockquote:pl-5 prose-blockquote:not-italic prose-blockquote:text-zinc-500 prose-blockquote:font-mono prose-blockquote:text-xs
        prose-code:text-green-300 prose-code:bg-zinc-950 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none prose-code:text-xs prose-code:font-mono prose-code:border prose-code:border-zinc-800
        prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-900 prose-pre:rounded-none prose-pre:text-xs
        prose-img:rounded-none prose-img:border prose-img:border-zinc-900 prose-img:my-10
        prose-li:text-zinc-400 prose-li:font-mono prose-li:text-[13px] prose-li:leading-relaxed
        prose-ul:space-y-1 prose-ol:space-y-1
      ">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Footer de navegación */}
      <div className="mt-20 pt-8 border-t border-zinc-900 flex items-center justify-between">
        <Link
          href="/blog"
          className="group flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
        >
          <ArrowLeft
            size={11}
            strokeWidth={1.5}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          Volver al blog
        </Link>
        <span className="font-mono text-[10px] text-zinc-800 tracking-widest">
          B. Hurtado · {new Date(post.date).getFullYear()}
        </span>
      </div>
    </motion.article>
  );
}
