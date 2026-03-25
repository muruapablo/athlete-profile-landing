'use client'

import { motion } from 'framer-motion'
import { Instagram, ExternalLink, Play } from 'lucide-react'
import { athleteData } from '@/data/athlete'
import BeholdFeed from './BeholdFeed'

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

// Placeholder para posts de Instagram (fallback si Behold no está configurado)
const placeholderPosts = [
  { id: '1', type: 'carousel_album', thumbnailUrl: '/images/post-1.jpg', permalink: '#' },
  { id: '2', type: 'image', thumbnailUrl: '/images/post-2.jpg', permalink: '#' },
  { id: '3', type: 'video', thumbnailUrl: '/images/post-3.jpg', permalink: '#' },
  { id: '4', type: 'image', thumbnailUrl: '/images/post-4.jpg', permalink: '#' },
  { id: '5', type: 'video', thumbnailUrl: '/images/post-5.jpg', permalink: '#' },
  { id: '6', type: 'image', thumbnailUrl: '/images/post-6.jpg', permalink: '#' },
]

export default function SocialFeed() {
  const { socialMetrics, beholdFeedId } = athleteData

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

          {/* <a
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
          </a> */}
        </motion.div>

        {/* Instagram Feed Grid */}
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

          {/* Behold Feed (si está configurado) o Placeholders */}
          {beholdFeedId ? (
            <BeholdFeed feedId={beholdFeedId} />
          ) : (
            <>
              {/* Placeholders Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {placeholderPosts.map((post) => (
                  <motion.a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-dark-600 cursor-pointer"
                  >
                    {/* Post image */}
                    <img 
                      src={post.thumbnailUrl} 
                      alt="Instagram post"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder-post.jpg'
                      }}
                    />
                    
                    {/* Video/Reel indicator */}
                    {(post.type === 'video' || post.type === 'carousel_album') && (
                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50">
                        <Play className="w-3 h-3 text-white fill-white" />
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center">
                        <ExternalLink className="w-6 h-6 mx-auto mb-2" />
                        <p className="text-xs text-gray-300">Ver en Instagram</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Info message */}
              <div className="text-center text-gray-500 text-sm mt-6 glass rounded-xl p-4">
                <p className="mb-2">📸 Contenido de demostración</p>
                <p className="text-xs">
                  Sigue las instrucciones en{' '}
                  <a 
                    href="/BEHOLD_SETUP.md" 
                    className="text-primary-400 hover:underline"
                    target="_blank"
                  >
                    BEHOLD_SETUP.md
                  </a>
                  {' '}para conectar Instagram en 2 minutos
                </p>
              </div>
            </>
          )}
        </motion.div>

        {/* Embedded Video Section - Comentado */}
      </div>
    </section>
  )
}
