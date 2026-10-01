"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const TECH_STACK = [
  "Next.js", "React", "PostgreSQL",
  "Python", "SQL", "Node.js", "Docker", "Tailwind CSS",
];

function handleScrollToCasos(e) {
  e.preventDefault();
  const target = document.getElementById("casos");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const imageVariants = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-14"
      aria-label="Hero — presentación"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── Columna de texto ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-10">
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-green flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase">
                Disponible para proyectos · Q4 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-sans font-black leading-[0.92] tracking-tighter mb-10"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              <span className="block text-white" style={{ wordBreak: "keep-all" }}>
                Desarrollador
              </span>
              <span className="block text-zinc-800" style={{ wordBreak: "keep-all" }}>
                Frontend &amp; Datos
              </span>
              <span className="block text-white" style={{ wordBreak: "keep-all" }}>
                en Producción
              </span>
            </motion.h1>

            {/* Subtítulos */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5 mb-16">
              <p className="font-mono text-xs text-zinc-400 tracking-wide flex items-start gap-2.5 leading-relaxed">
                <span className="text-green-400 mt-0.5 flex-shrink-0 select-none">→</span>
                Construyendo interfaces y pipelines de datos que no fallan en producción
              </p>
              <p className="font-mono text-xs text-zinc-600 tracking-wide flex items-start gap-2.5 leading-relaxed">
                <span className="text-zinc-700 mt-0.5 flex-shrink-0 select-none">→</span>
                {TECH_STACK.join(" · ")}
              </p>
            </motion.div>

            {/* CTA scroll */}
            <motion.a
              variants={itemVariants}
              href="#casos"
              onClick={handleScrollToCasos}
              className="group inline-flex items-center gap-4 cursor-pointer"
              aria-label="Ir a casos de estudio"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-700 uppercase group-hover:text-zinc-400 transition-colors duration-300">
                Casos de Estudio
              </span>
              <div className="w-16 md:w-32 h-px bg-zinc-900 group-hover:bg-zinc-700 transition-colors duration-300" />
              <ArrowDown
                size={12}
                strokeWidth={1.5}
                className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-y-0.5 transition-all duration-300"
              />
            </motion.a>
          </motion.div>

          {/* ── Retrato fotográfico ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex justify-end items-center"
          >
            <div className="relative w-[340px] h-[500px] overflow-hidden border border-zinc-900 group">
              <Image
                src="/Me/Retrato profesional en estudio de joven sonriente.png"
                alt="Bryan Hurtado — Analista TI y Desarrollador"
                fill
                sizes="340px"
                className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-700 ease-out"
                priority
              />
              {/* Gradiente inferior que une con el fondo negro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              {/* Etiqueta discreta sobre la foto */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[9px] text-zinc-600 tracking-[0.2em] uppercase">
                  Bryan Hurtado · Medellín, Colombia
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
