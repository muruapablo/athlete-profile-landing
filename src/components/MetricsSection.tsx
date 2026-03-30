'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Award, Timer, Instagram, Youtube, Users, Eye, Heart, Play } from 'lucide-react'
import { athleteData, trainingStats } from '@/data/athlete'
import { formatNumber } from '@/lib/utils'

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function MetricsSection() {
  const { personalBests, achievements, socialMetrics } = athleteData
  const { yearToDate } = trainingStats

  return (
    <section id="metricas" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
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
            Performance & <span className="gradient-text">Resultados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Métricas deportivas y alcance digital que demuestran valor real
          </p>
        </motion.div>

        {/* Personal Bests - DESACTIVADO
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Timer className="w-6 h-6 text-primary-400" />
            Mejores Marcas Personales
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover group">
              <div className="text-4xl mb-4">🏊‍♂️</div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Natación</h4>
              <p className="text-3xl font-bold text-white mb-1">{personalBests.swimming.time}</p>
              <p className="text-sm text-gray-400">{personalBests.swimming.distance} • {personalBests.swimming.event}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover group">
              <div className="text-4xl mb-4">🚴‍♂️</div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Ciclismo</h4>
              <p className="text-3xl font-bold text-white mb-1">{personalBests.cycling.time}</p>
              <p className="text-sm text-gray-400">{personalBests.cycling.distance} • {personalBests.cycling.event}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover group">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Running</h4>
              <p className="text-3xl font-bold text-white mb-1">{personalBests.running.time}</p>
              <p className="text-sm text-gray-400">{personalBests.running.distance} • {personalBests.running.event}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover group animated-border">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Triatlón</h4>
              <p className="text-3xl font-bold gradient-text mb-1">{personalBests.triathlon.time}</p>
              <p className="text-sm text-gray-400">{personalBests.triathlon.distance} • {personalBests.triathlon.event}</p>
            </motion.div>
          </div>
        </motion.div>
        */}

        {/* Training Stats - Live Dashboard - DESACTIVADO
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-accent-400" />
            Entrenamiento 2026
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-400">
                <AnimatedCounter value={yearToDate.swimKm} suffix=" km" />
              </p>
              <p className="text-sm text-gray-400 mt-2">Natación</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-400">
                <AnimatedCounter value={yearToDate.bikeKm} suffix=" km" />
              </p>
              <p className="text-sm text-gray-400 mt-2">Ciclismo</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-400">
                <AnimatedCounter value={yearToDate.runKm} suffix=" km" />
              </p>
              <p className="text-sm text-gray-400 mt-2">Running</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent-400">
                <AnimatedCounter value={yearToDate.totalHours} suffix=" hrs" />
              </p>
              <p className="text-sm text-gray-400 mt-2">Horas Totales</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-green-400">
                <AnimatedCounter value={yearToDate.racesCompleted} />
              </p>
              <p className="text-sm text-gray-400 mt-2">Carreras</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">
                <AnimatedCounter value={yearToDate.daysWithoutMissing} />
              </p>
              <p className="text-sm text-gray-400 mt-2">Días sin faltar</p>
            </motion.div>
          </div>
        </motion.div>
        */}

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-yellow-400" />
            Logros Destacados
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl overflow-hidden card-hover relative group"
              >
                {/* Achievement Image */}
                <div className="relative aspect-square overflow-hidden bg-dark-700">
                  <img 
                    src={achievement.image || '/images/placeholder-achievement.jpg'} 
                    alt={achievement.event}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Position badge */}
                  <div className={`absolute top-3 right-3 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ${
                    achievement.position === 1 ? 'bg-yellow-500 text-black' :
                    achievement.position === 2 ? 'bg-gray-300 text-black' :
                    achievement.position === 3 ? 'bg-amber-600 text-white' :
                    'bg-dark-500 text-white'
                  }`}>
                    {achievement.position}°
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-lg font-semibold text-white mb-2">{achievement.event}</p>
                  <p className="text-sm text-gray-400 mb-1">{achievement.year}</p>
                  <p className="text-xs text-primary-400">{achievement.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Digital Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-pink-400" />
            Alcance Digital
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Instagram */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold">Instagram</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Users className="w-4 h-4" /> Seguidores
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.instagram.followers} />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Heart className="w-4 h-4" /> Engagement
                  </span>
                  <span className="font-bold text-lg text-green-400">{socialMetrics.instagram.engagement}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Eye className="w-4 h-4" /> Alcance
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.instagram.avgReach} />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Play className="w-4 h-4" /> Views/Reel
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.instagram.avgViews} />
                  </span>
                </div>
              </div>
              
              <a 
                href={socialMetrics.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
              >
                {socialMetrics.instagram.handle}
              </a>
            </motion.div>

            {/* TikTok */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-black border border-white/20">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="font-semibold">TikTok</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Users className="w-4 h-4" /> Seguidores
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.tiktok.followers} />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Heart className="w-4 h-4" /> Engagement
                  </span>
                  <span className="font-bold text-lg text-green-400">{socialMetrics.tiktok.engagement}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Play className="w-4 h-4" /> Views/Video
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.tiktok.avgViews} />
                  </span>
                </div>
              </div>
              
              <a 
                href={socialMetrics.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
              >
                {socialMetrics.tiktok.handle}
              </a>
            </motion.div>

            {/* YouTube - COMENTADO (la atleta no usa YouTube)
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-600">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold">YouTube</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Users className="w-4 h-4" /> Suscriptores
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.youtube.subscribers} />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Play className="w-4 h-4" /> Views/Video
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.youtube.avgViews} />
                  </span>
                </div>
              </div>
              
              <a 
                href={socialMetrics.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
              >
                @{socialMetrics.youtube.handle}
              </a>
            </motion.div>
            */}

            {/* Strava */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-500">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.58 14.771h4.172" />
                  </svg>
                </div>
                <span className="font-semibold">Strava</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Users className="w-4 h-4" /> Seguidores
                  </span>
                  <span className="font-bold text-lg">
                    <AnimatedCounter value={socialMetrics.strava.followers} />
                  </span>
                </div>
              </div>
              
              <a 
                href={socialMetrics.strava.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
              >
                Ver Perfil
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
