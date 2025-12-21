'use client'

import { motion } from 'framer-motion'
import { Eye, Video, Heart, Users, Gift, Star, Camera, Mic, Check, ChevronRight, Download } from 'lucide-react'
import { athleteData } from '@/data/athlete'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  Video,
  Heart,
  Users,
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

export default function SponsorProposal() {
  const { sponsorshipValue } = athleteData

  return (
    <section id="sponsors" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            🤝 Oportunidad de Sponsorship
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Propuesta para <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Invertí en un atleta comprometido con la excelencia. 
            Tu marca asociada a valores de disciplina, superación y alto rendimiento.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            ¿Qué obtiene tu marca?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipValue.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || Eye
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-6 text-center card-hover group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Sponsorship Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Tipos de Colaboración
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {sponsorshipValue.tiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass rounded-2xl p-8 relative overflow-hidden ${
                  index === 2 ? 'border-2 border-primary-500/50' : ''
                }`}
              >
                {index === 2 && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-primary-500 text-sm font-semibold rounded-bl-xl">
                    Recomendado
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-blue-500/20' :
                  index === 1 ? 'bg-purple-500/20' :
                  'bg-primary-500/20'
                }`}>
                  {index === 0 ? <Gift className="w-6 h-6 text-blue-400" /> :
                   index === 1 ? <Star className="w-6 h-6 text-purple-400" /> :
                   <Star className="w-6 h-6 text-primary-400 fill-primary-400" />}
                </div>
                
                <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                
                <ul className="space-y-3">
                  {tier.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contacto"
                  className={`mt-8 block text-center py-3 rounded-xl font-semibold transition-all ${
                    index === 2 
                      ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  Consultar
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Activaciones Posibles
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {sponsorshipValue.activations.map((activation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 px-5 py-3 glass rounded-full"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span>{activation}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto animated-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para conectar tu marca con el alto rendimiento?
            </h3>
            <p className="text-gray-400 mb-8">
              Descargá el Media Kit completo o contactame directamente para hablar de oportunidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={athleteData.mediaKitUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5" />
                Descargar Media Kit
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Contactar
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
