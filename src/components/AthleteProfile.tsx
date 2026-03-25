'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Trophy, TrendingUp, Award, Users, Clock, MapPin } from 'lucide-react'
import { athleteData } from '@/data/athlete'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Shield,
  Trophy,
  TrendingUp,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AthleteProfile() {
  const { profile, values } = athleteData

  return (
    <section id="perfil" className="section-padding bg-dark-800 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-repeat" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perfil <span className="gradient-text">Deportivo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Más de {profile.yearsOfExperience} años dedicados al triatlón de alto rendimiento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Profile Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary-400" />
                Información del Atleta
              </h3>
            </motion.div>

            {/* Main Profile Card */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Disciplina</span>
                    <p className="text-xl font-semibold text-white">{profile.discipline}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Categoría</span>
                    <p className="text-xl font-semibold text-white">{profile.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Experiencia</span>
                    <p className="text-xl font-semibold text-white">{profile.yearsOfExperience} años</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Club / Equipo</span>
                    <p className="text-xl font-semibold text-white">{profile.club}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Ubicación</span>
                    <p className="text-xl font-semibold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      {athleteData.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Current Sponsors */}
            {profile.currentSponsors && profile.currentSponsors.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="glass rounded-2xl p-6"
              >
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-400" />
                  Sponsors Actuales
                </h4>
                <div className="flex flex-wrap gap-3">
                  {profile.currentSponsors.map((sponsor, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-dark-600 rounded-full text-sm text-gray-300"
                    >
                      {sponsor}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Values & Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-accent-400" />
                Valores del Atleta
              </h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const IconComponent = iconMap[value.icon] || Target
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group glass rounded-xl p-6 card-hover h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-1">
                          {value.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bio Section */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6"
            >
              <p className="text-gray-300 leading-relaxed text-base">
                {athleteData.bio}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
