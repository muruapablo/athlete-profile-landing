'use client'

import { motion } from 'framer-motion'
import { Award, Zap, Heart, Target, TrendingUp, Star } from 'lucide-react'
import { athleteData } from '@/data/athlete'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

const typeConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; bgColor: string }> = {
  milestone: { icon: Star, color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' },
  achievement: { icon: Award, color: 'text-green-400', bgColor: 'bg-green-500/20' },
  challenge: { icon: Zap, color: 'text-red-400', bgColor: 'bg-red-500/20' },
}

export default function Timeline() {
  const { timeline, mindsetQuotes } = athleteData

  return (
    <section id="historia" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mi <span className="gradient-text">Historia</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un camino de superación, aprendizaje y crecimiento constante
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary-400" />
              Timeline Deportivo
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

              <div className="space-y-8">
                {timeline.map((event, index) => {
                  const config = typeConfig[event.type] || typeConfig.milestone
                  const IconComponent = config.icon

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative pl-16"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-0 w-11 h-11 rounded-full ${config.bgColor} flex items-center justify-center border-4 border-dark-900`}>
                        <IconComponent className={`w-5 h-5 ${config.color}`} />
                      </div>

                      {/* Content */}
                      <div className="glass rounded-xl p-6 card-hover">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold gradient-text">{event.year}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${config.bgColor} ${config.color}`}>
                            {event.type === 'milestone' ? 'Hito' : 
                             event.type === 'achievement' ? 'Logro' : 'Desafío'}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                        <p className="text-gray-400 text-sm">{event.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Mindset Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Heart className="w-6 h-6 text-accent-400" />
              Mentalidad de Atleta
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {mindsetQuotes.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-6 card-hover relative overflow-hidden"
                >
                  {/* Quote decoration */}
                  <div className="absolute -top-2 -left-2 text-6xl text-primary-500/20 font-serif">
                    &ldquo;
                  </div>
                  
                  <blockquote className="relative z-10">
                    <p className="text-xl md:text-2xl font-medium text-white mb-4 pl-6">
                      {item.quote}
                    </p>
                    <footer className="flex items-center gap-2 text-sm text-gray-400 pl-6">
                      <Target className="w-4 h-4 text-primary-400" />
                      {item.context}
                    </footer>
                  </blockquote>
                </motion.div>
              ))}

              {/* Values summary */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-2xl p-6 mt-8"
              >
                <h4 className="font-semibold mb-4">Lo que define a un atleta de alto rendimiento:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span>Disciplina diaria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-500" />
                    <span>Gestión del dolor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Resiliencia mental</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Mejora continua</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Sacrificio consciente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                    <span>Visión a largo plazo</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
