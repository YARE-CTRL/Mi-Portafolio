"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";

const COLOR_MAP = {
  green: {
    badge: "text-green-400 border-green-400/20 bg-green-400/5",
    arrow: "text-green-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(74,222,128,0.06)]",
  },
  blue: {
    badge: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    arrow: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.06)]",
  },
  purple: {
    badge: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    arrow: "text-purple-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.06)]",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogCard({ post, index = 0 }) {
  const color = COLOR_MAP[post.categoryColor] || COLOR_MAP.green;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`group flex flex-col h-full bg-black p-8 transition-all duration-300 ${color.glow}`}
      >
        {/* Imagen con efecto cinematográfico */}
        {post.image && (
          <div className="relative w-full h-52 mb-7 overflow-hidden border border-zinc-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale brightness-60 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        )}

        {/* Meta row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <Tag size={10} className="text-zinc-600" strokeWidth={1.5} />
            <span className={`font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border rounded-full ${color.badge}`}>
              {post.category}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={10} className="text-zinc-700" strokeWidth={1.5} />
            <span className="font-mono text-[10px] text-zinc-700 tracking-wider">
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Título */}
        <h2 className="font-sans font-bold text-lg text-white leading-snug tracking-tight mb-3 group-hover:text-zinc-100 transition-colors duration-200">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="font-mono text-[11px] text-zinc-500 leading-relaxed mb-8 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-zinc-900">
          <span className="font-mono text-[10px] text-zinc-700 tracking-wider">
            {new Date(post.date).toLocaleDateString("es-CO", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <div className={`flex items-center gap-1.5 ${color.arrow} transition-transform duration-200`}>
            <span className="font-mono text-[10px] tracking-widest uppercase">Leer</span>
            <ArrowRight
              size={11}
              strokeWidth={1.5}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
