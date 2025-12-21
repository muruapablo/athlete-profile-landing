'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Flag, Target, Star, ChevronRight } from 'lucide-react'
import { athleteData } from '@/data/athlete'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'confirmed':
      return { text: 'Confirmada', color: 'bg-green-500/20 text-green-400 border-green-500/30' }
    case 'target':
      return { text: 'Objetivo Principal', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' }
    case 'preparation':
      return { text: 'En Preparación', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' }
    default:
      return { text: status, color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
  }
}

function getPriorityIcon(priority: string) {
  switch (priority) {
    case 'A':
      return <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    case 'B':
      return <Star className="w-4 h-4 text-gray-400" />
    default:
      return null
  }
}

export default function RaceCalendar() {
  const { upcomingRaces } = athleteData

  // Sort races by date
  const sortedRaces = [...upcomingRaces].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  return (
    <section id="calendario" className="section-padding bg-dark-800 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calendario de <span className="gradient-text">Competencias</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Próximas carreras con oportunidades de visibilidad de marca
          </p>
        </motion.div>

        {/* Sponsor visibility callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-12 border border-primary-500/30"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 rounded-lg bg-primary-500/20">
              <Target className="w-6 h-6 text-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">Oportunidad para Sponsors</h3>
              <p className="text-gray-400 text-sm">
                Cada carrera es una oportunidad de visibilidad. Los sponsors pueden aparecer en 
                indumentaria, redes sociales y contenido exclusivo de cada evento.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold transition-colors"
            >
              Ser Sponsor
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Race list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {sortedRaces.map((race, index) => {
            const status = getStatusBadge(race.status)
            const priorityIcon = getPriorityIcon(race.priority)
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass rounded-xl p-6 card-hover relative overflow-hidden ${
                  race.priority === 'A' ? 'border border-yellow-500/30' : ''
                }`}
              >
                {/* Priority A background glow */}
                {race.priority === 'A' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent pointer-events-none" />
                )}
                
                <div className="relative flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-4 lg:w-48">
                    <div className="p-3 rounded-lg bg-primary-500/20">
                      <Calendar className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{formatDate(race.date)}</p>
                      <p className="text-sm text-gray-400">
                        {new Date(race.date) > new Date() 
                          ? `En ${Math.ceil((new Date(race.date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} días`
                          : 'Pasada'
                        }
                      </p>
                    </div>
                  </div>

                  {/* Race info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {priorityIcon}
                      <h3 className="text-xl font-semibold">{race.name}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {race.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flag className="w-4 h-4" />
                        {race.distance}
                      </span>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div>
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${status.color}`}>
                      {status.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Objetivo Principal (Carrera A)</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gray-400" />
            <span>Carrera de Preparación (B)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Confirmada</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
