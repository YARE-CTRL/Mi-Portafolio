"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Award } from "lucide-react";

const TIMELINE_DATA = [
  {
    type: "work",
    period: "2024 — Presente",
    title: "Analista de Soporte TI L2",
    company: "PersonalSoft · cliente Suramericana",
    description:
      "Diagnóstico y resolución de incidentes críticos en plataformas core de seguros. Observabilidad con Dynatrace, gestión de SLAs, análisis de stack traces y logs en producción. Soporte a infraestructura en AWS ECS.",
    tags: ["Dynatrace", "AWS ECS", "Oracle DB", "SRE", "ITSM"],
    color: "green",
  },
  {
    type: "project",
    period: "2025",
    title: "Career OS AI",
    company: "Proyecto Personal",
    description:
      "Plataforma de gestión de carrera profesional con integración de Gemini API. Análisis de hojas de vida, generación de cartas de presentación personalizadas y seguimiento de postulaciones.",
    tags: ["Next.js", "Gemini API", "PostgreSQL", "Node.js"],
    color: "purple",
  },
  {
    type: "education",
    period: "2023 — 2025",
    title: "Tecnología en Análisis y Desarrollo de Software",
    company: "SENA — Regional Antioquia",
    description:
      "Formación técnica en desarrollo de software, bases de datos relacionales, estructuras de datos y metodologías ágiles. Proyecto de grado: plataforma adaptativa para preparación ICFES con algoritmos de aprendizaje personalizado.",
    tags: ["SQL", "Python", "Java", "Scrum"],
    color: "blue",
  },
  {
    type: "cert",
    period: "2024",
    title: "Google Data Analytics Professional Certificate",
    company: "Google / Coursera",
    description:
      "Certificación de 6 cursos sobre análisis de datos: limpieza y transformación, visualización con Tableau, SQL avanzado y programación en R.",
    tags: ["SQL", "Tableau", "R", "BigQuery"],
    color: "blue",
  },
  {
    type: "cert",
    period: "2024",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    company: "Microsoft",
    description:
      "Fundamentos de computación en la nube con Azure: servicios de cómputo, almacenamiento, redes, seguridad y modelos de precios.",
    tags: ["Azure", "Cloud", "IaaS", "PaaS"],
    color: "blue",
  },
];

const TYPE_META = {
  work:      { Icon: Briefcase,     label: "Experiencia" },
  project:   { Icon: Code2,         label: "Proyecto"    },
  education: { Icon: GraduationCap, label: "Formación"   },
  cert:      { Icon: Award,         label: "Certificación"},
};

const COLOR_MAP = {
  green:  { dot: "bg-green-400",  badge: "text-green-400 border-green-400/20 bg-green-400/5",  icon: "text-green-400"  },
  blue:   { dot: "bg-blue-400",   badge: "text-blue-400 border-blue-400/20 bg-blue-400/5",     icon: "text-blue-400"   },
  purple: { dot: "bg-purple-400", badge: "text-purple-400 border-purple-400/20 bg-purple-400/5", icon: "text-purple-400" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Timeline() {
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Línea vertical continua */}
      <div className="absolute left-[18px] top-2 bottom-0 w-px bg-zinc-900" />

      <div className="space-y-0">
        {TIMELINE_DATA.map((item, i) => {
          const color = COLOR_MAP[item.color] || COLOR_MAP.green;
          const { Icon, label } = TYPE_META[item.type] || TYPE_META.work;

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative flex gap-10 pb-12 pl-12"
            >
              {/* Icono del tipo flotando sobre la línea */}
              <div
                className={`absolute left-0 top-0 w-9 h-9 rounded-full bg-black border border-zinc-900 flex items-center justify-center flex-shrink-0 ${color.icon}`}
              >
                <Icon size={14} strokeWidth={1.5} />
              </div>

              {/* Contenido */}
              <div className="flex-1 pt-1">
                {/* Período + tipo */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-zinc-600 tracking-[0.2em] uppercase">
                    {item.period}
                  </span>
                  <span className="font-mono text-[9px] text-zinc-800 tracking-widest uppercase border border-zinc-900 px-1.5 py-0.5 rounded-full">
                    {label}
                  </span>
                </div>

                {/* Título */}
                <h3 className="font-sans font-bold text-white text-base leading-snug tracking-tight mb-1">
                  {item.title}
                </h3>

                {/* Empresa */}
                <p className="font-mono text-[11px] text-zinc-600 mb-4 tracking-wide">
                  {item.company}
                </p>

                {/* Descripción */}
                <p className="font-mono text-[11px] text-zinc-500 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-[10px] px-2 py-0.5 border rounded-full tracking-wider ${color.badge}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
