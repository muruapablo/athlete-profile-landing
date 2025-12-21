'use client'

import { motion } from 'framer-motion'
import { Instagram, ExternalLink, Play } from 'lucide-react'
import { athleteData } from '@/data/athlete'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

// Placeholder para posts de Instagram (en producción usarías la API)
const instagramPosts = [
  { id: 1, type: 'reel', thumbnail: '/images/post-1.jpg', likes: 1250, comments: 45 },
  { id: 2, type: 'image', thumbnail: '/images/post-2.jpg', likes: 890, comments: 32 },
  { id: 3, type: 'reel', thumbnail: '/images/post-3.jpg', likes: 2100, comments: 78 },
  { id: 4, type: 'image', thumbnail: '/images/post-4.jpg', likes: 1560, comments: 56 },
  { id: 5, type: 'reel', thumbnail: '/images/post-5.jpg', likes: 3200, comments: 120 },
  { id: 6, type: 'image', thumbnail: '/images/post-6.jpg', likes: 980, comments: 38 },
]

export default function SocialFeed() {
  const { socialMetrics } = athleteData

  return (
    <section id="contenido" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contenido & <span className="gradient-text">Redes Sociales</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contenido auténtico que conecta con una audiencia comprometida con el deporte
          </p>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href={socialMetrics.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <Instagram className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">{socialMetrics.instagram.handle}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href={socialMetrics.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all"
          >
            <div className="p-2 rounded-lg bg-black border border-white/20">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <span className="font-medium">{socialMetrics.tiktok.handle}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href={socialMetrics.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all"
          >
            <div className="p-2 rounded-lg bg-red-600">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span className="font-medium">@{socialMetrics.youtube.handle}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Instagram Feed Grid (Placeholder) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <Instagram className="w-5 h-5 text-pink-400" />
              Últimos Posts
            </h3>
            <a
              href={socialMetrics.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1"
            >
              Ver más <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group relative aspect-square rounded-xl overflow-hidden bg-dark-600 cursor-pointer"
              >
                {/* Post image */}
                <img 
                  src={post.thumbnail} 
                  alt={`Post ${post.id}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Reel indicator */}
                {post.type === 'reel' && (
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50">
                    <Play className="w-3 h-3 text-white fill-white" />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  <div className="text-center">
                    <p className="font-bold">{post.likes}</p>
                    <p className="text-xs text-gray-300">❤️ likes</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">{post.comments}</p>
                    <p className="text-xs text-gray-300">💬 comments</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Embedded Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <Play className="w-5 h-5 text-red-400" />
            Mini Documental
          </h3>
          
          <div className="glass rounded-2xl overflow-hidden">
            <div className="aspect-video bg-dark-700 flex items-center justify-center">
              {/* YouTube Embed Placeholder */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-xl font-semibold mb-2">¿Qué significa ser triatleta de alto rendimiento?</p>
                <p className="text-gray-400 text-sm">Video documental de 3 minutos</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-4">
            * Integración con YouTube para reproducción directa. Ideal para mostrar a sponsors potenciales.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
