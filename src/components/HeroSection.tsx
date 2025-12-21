'use client'

import { motion } from 'framer-motion'
import { Play, Download, Mail, ChevronDown } from 'lucide-react'
import { athleteData } from '@/data/athlete'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900 z-10" />
        
        {/* Imagen de fondo para móvil y fallback */}
        <img
          src="/images/hero-poster.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
        />
        
        {/* Video de fondo (solo desktop, se superpone a la imagen) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Disponible para sponsorship</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="gradient-text">{athleteData.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            {athleteData.title}
          </motion.p>

          {/* Claim */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-4xl font-light text-white mb-8 max-w-3xl mx-auto"
          >
            &ldquo;{athleteData.claim}&rdquo;
          </motion.p>

          {/* Sport icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🏊‍♂️</span>
              <span className="text-xs text-gray-400">Natación</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🚴‍♂️</span>
              <span className="text-xs text-gray-400">Ciclismo</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🏃‍♂️</span>
              <span className="text-xs text-gray-400">Running</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={athleteData.mediaKitUrl}
              download
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <Download className="w-5 h-5" />
              Descargar Media Kit
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full font-semibold text-lg transition-all hover:scale-105 hover:bg-white/10"
            >
              <Mail className="w-5 h-5" />
              Contactar para Sponsorship
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Conocé más</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Play video button (opcional) */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute bottom-32 right-8 md:right-16 z-20 group"
        onClick={() => {/* Abrir modal de video */}}
      >
        <div className="relative w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 ml-1 text-white" />
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
        </div>
        <span className="block mt-2 text-xs text-gray-400 text-center">Ver reel</span>
      </motion.button>
    </section>
  )
}
