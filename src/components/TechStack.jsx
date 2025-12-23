import React from 'react'

const TechStack = () => {
  // Colores oficiales de cada tecnología
  const techColors = {
    // Frontend & Mobile
    'HTML5': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-600', hover: 'hover:bg-orange-500/20' },
    'JavaScript': { bg: 'bg-yellow-400/10', border: 'border-yellow-400/30', text: 'text-yellow-600', hover: 'hover:bg-yellow-400/20' },
    'TypeScript': { bg: 'bg-blue-600/10', border: 'border-blue-600/30', text: 'text-blue-600', hover: 'hover:bg-blue-600/20' },
    'Vite': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-600', hover: 'hover:bg-purple-500/20' },
    'Java': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-600', hover: 'hover:bg-red-500/20' },
    'Kotlin': { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-600', hover: 'hover:bg-violet-500/20' },
    'Android': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-600', hover: 'hover:bg-green-500/20' },
    
    // Backend & APIs
    'AdonisJS': { bg: 'bg-indigo-600/10', border: 'border-indigo-600/30', text: 'text-indigo-600', hover: 'hover:bg-indigo-600/20' },
    'Express': { bg: 'bg-gray-700/10', border: 'border-gray-700/30', text: 'text-gray-700', hover: 'hover:bg-gray-700/20' },
    'Socket.io': { bg: 'bg-slate-800/10', border: 'border-slate-800/30', text: 'text-slate-700', hover: 'hover:bg-slate-800/20' },
    
    // Bases de Datos
    'PostgreSQL': { bg: 'bg-sky-600/10', border: 'border-sky-600/30', text: 'text-sky-600', hover: 'hover:bg-sky-600/20' },
    'MySQL': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-600', hover: 'hover:bg-blue-500/20' },
    'MongoDB': { bg: 'bg-green-600/10', border: 'border-green-600/30', text: 'text-green-600', hover: 'hover:bg-green-600/20' },
    'Supabase': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-600', hover: 'hover:bg-emerald-500/20' },
    'Firebase': { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-600', hover: 'hover:bg-amber-500/20' },
    'Redis': { bg: 'bg-red-600/10', border: 'border-red-600/30', text: 'text-red-600', hover: 'hover:bg-red-600/20' },
    
    // DevOps & Tools
    'Docker': { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-600', hover: 'hover:bg-cyan-500/20' },
    'Git': { bg: 'bg-orange-600/10', border: 'border-orange-600/30', text: 'text-orange-600', hover: 'hover:bg-orange-600/20' },
    'GitHub': { bg: 'bg-gray-900/10', border: 'border-gray-900/30', text: 'text-gray-800', hover: 'hover:bg-gray-900/20' },
    'Vercel': { bg: 'bg-black/10', border: 'border-black/30', text: 'text-gray-900', hover: 'hover:bg-black/20' },
    'AWS': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-600', hover: 'hover:bg-orange-500/20' },
    
    // Testing
    'Jest': { bg: 'bg-rose-600/10', border: 'border-rose-600/30', text: 'text-rose-600', hover: 'hover:bg-rose-600/20' },
    'Vitest': { bg: 'bg-lime-500/10', border: 'border-lime-500/30', text: 'text-lime-600', hover: 'hover:bg-lime-500/20' },
    'Cypress': { bg: 'bg-teal-600/10', border: 'border-teal-600/30', text: 'text-teal-600', hover: 'hover:bg-teal-600/20' }
  }

  const categories = [
    {
      title: 'Frontend & Mobile',
      techs: ['HTML5', 'JavaScript', 'TypeScript', 'Vite', 'Java', 'Kotlin', 'Android']
    },
    {
      title: 'Backend & APIs',
      techs: ['AdonisJS', 'Express', 'Socket.io']
    },
    {
      title: 'Bases de Datos',
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase', 'Redis']
    },
    {
      title: 'DevOps & Tools',
      techs: ['Docker', 'Git', 'GitHub', 'Vercel', 'AWS']
    },
    {
      title: 'Testing',
      techs: ['Jest', 'Vitest', 'Cypress']
    }
  ]

  const getTechColor = (tech) => {
    return techColors[tech] || { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', hover: 'hover:bg-gray-200' }
  }

  return (
    <section id="stack" className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">Tecnologías</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Herramientas y tecnologías que utilizo para construir soluciones robustas
          </p>
        </div>

        {/* Tech Grid */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.techs.map((tech) => {
                  const colors = getTechColor(tech)
                  return (
                    <span
                      key={tech}
                      className={`px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg text-sm font-semibold ${colors.text} ${colors.hover} transition-all cursor-default`}
                    >
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Activity */}
        <div className="mt-20 text-center">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            Actividad en GitHub
          </h3>
          <a
            href="https://github.com/YARE-CTRL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver perfil completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TechStack