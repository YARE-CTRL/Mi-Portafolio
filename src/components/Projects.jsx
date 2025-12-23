import React, { useEffect, useRef } from 'react'

// Importar videos
import kalimaVideo from '../assets/vids/KALIMA.mp4'
import neuroclickVideo from '../assets/vids/NEUROCLICK.mp4'
import triviaVideo from '../assets/vids/TRIVIA.mp4'
import icfesWebVideo from '../assets/vids/Aplicativo web flujo.mp4'
// Video móvil muy grande - usar placeholder o CDN
const icfesMovilVideo = icfesWebVideo // Usar el mismo video web como placeholder

// Componente de video con velocidad personalizada
const VideoPlayer = ({ src, playbackRate = 1, isMobile = false }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  return (
    <video
      ref={videoRef}
      src={src}
      className={isMobile ? "w-full aspect-[9/16] object-contain bg-slate-900" : "w-full aspect-video object-cover"}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}

const Projects = () => {
  // Colores oficiales de cada tecnología
  const techColors = {
    'TypeScript': { bg: 'bg-blue-600/15', text: 'text-blue-700' },
    'React': { bg: 'bg-cyan-500/15', text: 'text-cyan-600' },
    'React Native': { bg: 'bg-cyan-600/15', text: 'text-cyan-700' },
    'Vite': { bg: 'bg-purple-500/15', text: 'text-purple-600' },
    'Node.js': { bg: 'bg-green-600/15', text: 'text-green-700' },
    'Express': { bg: 'bg-gray-700/15', text: 'text-gray-700' },
    'Socket.IO': { bg: 'bg-slate-800/15', text: 'text-slate-700' },
    'WebSocket': { bg: 'bg-indigo-500/15', text: 'text-indigo-600' },
    'Context API': { bg: 'bg-blue-500/15', text: 'text-blue-600' },
    'IA/ML': { bg: 'bg-rose-500/15', text: 'text-rose-600' },
    'NLP': { bg: 'bg-pink-500/15', text: 'text-pink-600' },
    'Healthcare': { bg: 'bg-red-500/15', text: 'text-red-600' },
    'Triage': { bg: 'bg-amber-500/15', text: 'text-amber-600' },
    'Gamificación': { bg: 'bg-yellow-500/15', text: 'text-yellow-600' },
    'Stroop Test': { bg: 'bg-violet-500/15', text: 'text-violet-600' },
    'Neurociencia': { bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-600' },
    'Tiempo Real': { bg: 'bg-emerald-500/15', text: 'text-emerald-600' },
    'AWS EC2': { bg: 'bg-orange-500/15', text: 'text-orange-600' },
    'Testing': { bg: 'bg-lime-500/15', text: 'text-lime-600' },
    'Realidad Aumentada': { bg: 'bg-pink-600/15', text: 'text-pink-600' },
    'David Kolb': { bg: 'bg-indigo-600/15', text: 'text-indigo-600' },
    'Android': { bg: 'bg-green-500/15', text: 'text-green-600' },
    'Educación': { bg: 'bg-blue-500/15', text: 'text-blue-600' },
    'ICFES': { bg: 'bg-amber-600/15', text: 'text-amber-700' },
  }

  const getTechColor = (tech) => {
    return techColors[tech] || { bg: 'bg-gray-100', text: 'text-gray-700' }
  }

  const projects = [
    {
      id: 1,
      title: 'ICFES Adaptive Learning',
      subtitle: 'Plataforma Educativa con IA + Realidad Aumentada',
      description: 'Ecosistema educativo revolucionario que transforma la preparación para las pruebas ICFES. Combina inteligencia artificial adaptativa basada en el modelo de aprendizaje de David Kolb, gamificación inmersiva con islas temáticas por áreas de conocimiento, y realidad aumentada para experiencias interactivas. Incluye módulo web institucional para colegios y app móvil para estudiantes con retos competitivos.',
      features: [
        { icon: '🧠', text: 'IA adaptativa (David Kolb)' },
        { icon: '🏝️', text: 'Islas por áreas ICFES' },
        { icon: '📱', text: 'App móvil + Web institucional' },
        { icon: '🎯', text: 'Preguntas tipo ICFES adaptativas' },
        { icon: '🥽', text: 'Realidad Aumentada interactiva' },
        { icon: '🏆', text: 'Retos entre estudiantes' },
        { icon: '🏫', text: 'Panel para instituciones' },
        { icon: '☁️', text: 'Backend en AWS EC2' },
      ],
      technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'IA/ML', 'David Kolb', 'Realidad Aumentada', 'AWS EC2', 'Testing', 'ICFES', 'Educación', 'Android'],
      repoUrl: 'https://github.com/YARE-CTRL/icfes-adaptive',
      demoUrl: 'https://eduexce-aws-sena.vercel.app/',
      videos: [
        { url: icfesWebVideo, label: 'Plataforma Web Institucional', playbackRate: 2.5, isMobile: false },
        { url: icfesMovilVideo, label: 'App Móvil Estudiantes', playbackRate: 2.5, isMobile: true }
      ],
      gradient: 'from-amber-500 to-orange-600',
      accent: 'amber',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'Kalima Health',
      subtitle: 'Asistente Médico Digital 24/7',
      description: 'Asistente médico digital diseñado para comunidades rurales con acceso limitado a servicios de salud. Utiliza IA para realizar triage inteligente, clasificando síntomas automáticamente y brindando orientación médica básica en tiempo real.',
      features: [
        { icon: '🚑', text: 'Orientación médica inmediata' },
        { icon: '🤖', text: 'Triage inteligente con IA' },
        { icon: '💬', text: 'Conversación en lenguaje natural' },
        { icon: '📊', text: 'Análisis contextual personalizado' },
      ],
      technologies: ['React', 'TypeScript', 'IA/ML', 'NLP', 'Healthcare', 'Triage'],
      repoUrl: 'https://github.com/YARE-CTRL/kalima-health.git',
      demoUrl: '',
      videoUrl: kalimaVideo,
      gradient: 'from-rose-500 to-red-600',
      accent: 'rose',
    },
    {
      id: 3,
      title: 'NeuroClick',
      subtitle: 'Entrenamiento Cerebral Gamificado',
      description: 'Juego de entrenamiento cerebral basado en el Stroop Test. Entrena la atención, concentración y velocidad de procesamiento mental a través de desafíos donde debes decidir si el color de una palabra coincide con lo que dice.',
      features: [
        { icon: '🧠', text: 'Entrena funciones ejecutivas' },
        { icon: '⚡', text: 'Mejora velocidad mental' },
        { icon: '🎯', text: 'Control inhibitorio' },
        { icon: '🏆', text: 'Sistema de puntajes y niveles' },
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Gamificación', 'Stroop Test', 'Neurociencia'],
      repoUrl: 'https://github.com/YARE-CTRL/NeuroClick.git',
      demoUrl: '',
      videoUrl: neuroclickVideo,
      gradient: 'from-violet-500 to-purple-600',
      accent: 'violet',
    },
    {
      id: 4,
      title: 'Trivia Multijugador',
      subtitle: 'Juego de Preguntas en Tiempo Real',
      description: 'Plataforma de trivia en tiempo real donde un moderador crea salas con preguntas personalizadas y múltiples jugadores compiten respondiendo con límite de tiempo. Sincronización perfecta mediante WebSockets.',
      features: [
        { icon: '🎮', text: 'Salas con código único' },
        { icon: '⏱️', text: 'Timer servidor autoritativo' },
        { icon: '👥', text: 'Multijugador simultáneo' },
        { icon: '📊', text: 'Ranking en tiempo real' },
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.IO', 'Tiempo Real'],
      repoUrl: 'https://github.com/feeer-28/TRIVIA_MULTIJUGADOR.git',
      demoUrl: '',
      videoUrl: triviaVideo,
      gradient: 'from-emerald-500 to-teal-600',
      accent: 'emerald',
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 font-medium mb-3 tracking-wider uppercase">Portafolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluciones innovadoras que combinan tecnología de punta con impacto real
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id}>
              {/* Featured Project (ICFES) - Special Layout */}
              {project.isFeatured ? (
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center max-w-4xl mx-auto">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-semibold mb-4`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                      PROYECTO DESTACADO
                    </div>
                    <p className={`text-sm font-medium text-amber-400 mb-2 tracking-wider uppercase`}>
                      {project.subtitle}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Dual Video Grid */}
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    {project.videos.map((video, vidIdx) => (
                      <div key={vidIdx} className="space-y-3">
                        <div className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-white/10 ${video.isMobile ? 'max-w-xs mx-auto' : ''}`}>
                          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} z-10`}></div>
                          <VideoPlayer src={video.url} playbackRate={video.playbackRate} isMobile={video.isMobile} />
                        </div>
                        <p className="text-center text-gray-400 font-medium">
                          <span className="text-amber-400">{vidIdx === 0 ? '💻' : '📱'}</span> {video.label}
                        </p>
                        <p className="text-center text-sm text-gray-500">Mejoras próximamente</p>
                      </div>
                    ))}
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                        <span className="text-xl">{feature.icon}</span>
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech) => {
                      const colors = getTechColor(tech)
                      return (
                        <span
                          key={tech}
                          className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-semibold rounded-full border border-white/10`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all border border-white/10"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Ver Código
                    </a>
                  </div>
                </div>
              ) : (
                /* Regular Project Layout */
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                  {/* Video Section */}
                  <div className="w-full lg:w-3/5">
                    <div className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10`}>
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} z-10`}></div>
                      
                      {project.videoUrl ? (
                        <>
                          <VideoPlayer src={project.videoUrl} playbackRate={1} />
                          <p className="text-center text-sm text-gray-500 mt-2">Mejoras próximamente</p>
                        </>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                              <svg className="w-10 h-10 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <p className="text-white/40">Video próximamente</p>
                            <p className="text-center text-sm text-gray-500 mt-2">Mejoras próximamente</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-2/5 space-y-6">
                    <div>
                      <p className="text-sm font-medium text-rose-400 mb-2 tracking-wider uppercase" style={{ color: project.accent === 'rose' ? '#fb7185' : project.accent === 'violet' ? '#a78bfa' : project.accent === 'emerald' ? '#34d399' : '#fbbf24' }}>
                        {project.subtitle}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300">
                          <span className="text-lg">{feature.icon}</span>
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => {
                        const colors = getTechColor(tech)
                        return (
                          <span
                            key={tech}
                            className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-semibold rounded-full border border-white/10`}
                          >
                            {tech}
                          </span>
                        )
                      })}
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all border border-white/10"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Ver Código
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:opacity-90 transition-all`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo en Vivo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
