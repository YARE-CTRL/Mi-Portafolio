# B. Hurtado · Digital Garden & Portafolio 🚀

Un espacio híbrido que combina mi **portafolio profesional** como Desarrollador y Analista TI L2, junto con mi **Blog Personal / Digital Garden** donde documento mi día a día, aprendizajes en producción, y mi filosofía de trabajo y vida.

![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animaciones-blue?style=for-the-badge&logo=framer)
![Markdown](https://img.shields.io/badge/Markdown-Motor_de_Blog-white?style=for-the-badge&logo=markdown)

## 📌 Arquitectura del Proyecto

El proyecto está construido bajo la arquitectura App Router de Next.js, priorizando el rendimiento, la accesibilidad y un diseño oscuro inspirado en la estética de terminal (mi hábitat natural).

*   `/` **Home:** Presentación rápida (Hero), stack tecnológico y acceso rápido a los últimos posts.
*   `/proyectos` **(Portafolio):** Casos de estudio interactivos (Bento Grid) destacando proyectos de automatización, IA y bases de datos.
*   `/trayectoria` **(CV Timeline):** Línea de tiempo con mi experiencia laboral, educación y certificaciones técnicas.
*   `/blog` **(Digital Garden):** Motor de blog estático impulsado por archivos locales `.md`. Combina contenido altamente técnico (SQL, Dynatrace, AWS) con reflexiones personales sobre mis pasatiempos, filosofía y entorno.

## 🛠️ Stack Tecnológico

*   **Framework:** Next.js 16 (App Router, Server Components).
*   **Estilos:** Tailwind CSS v4.
*   **Animaciones:** Framer Motion (transiciones de página, scroll reveals).
*   **Iconografía:** Lucide React.
*   **Content Parsing:** `gray-matter` y `react-markdown` para renderizar el contenido del blog.
*   **Despliegue:** Railway.

## 🚀 Instalación Local

Si deseas correr este proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/YARE-CTRL/Mi-Portafolio.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:3000` en tu navegador.

## 📝 Gestión del Blog

El blog no utiliza una base de datos externa ni un CMS. Para crear un nuevo artículo, simplemente añade un archivo `.md` en la carpeta `src/posts/` con la siguiente estructura de *frontmatter*:

```markdown
---
title: "Título de tu post"
date: "2026-10-01"
category: "Personal"
categoryColor: "purple" # Opciones: green, blue, purple
excerpt: "Resumen corto que aparecerá en las tarjetas"
readTime: "5 min"
image: "/activities/tu-imagen.jpg" # Opcional
---

Aquí va tu contenido en Markdown...
```

## 👨‍💻 Autor

**Bryan Hurtado**
*   Analista de Soporte TI L2 (Suramericana)
*   Desarrollador Frontend & Datos
*   [LinkedIn](https://www.linkedin.com/in/bryan-hurtado-b13891364/) | [GitHub](https://github.com/YARE-CTRL)
