'use client'

import { motion } from 'framer-motion'
import { Citrus, Instagram, Youtube, Mail } from 'lucide-react'
import { athleteData } from '@/data/athlete'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { socialMetrics, contact } = athleteData

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {athleteData.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {athleteData.title}
            </p>
            <p className="text-gray-500 text-sm">
              {athleteData.claim}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#perfil" className="hover:text-white transition-colors">Perfil Deportivo</a></li>
              <li><a href="#metricas" className="hover:text-white transition-colors">Métricas</a></li>
              <li><a href="#calendario" className="hover:text-white transition-colors">Calendario</a></li>
              <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Conectemos</h4>
            <div className="flex gap-3 mb-4">
              <a
                href={socialMetrics.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* YouTube comentado - la atleta no usa esta plataforma
              <a
                href={socialMetrics.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-white/10 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              */}
              <a
                href={`mailto:${contact.email}`}
                className="p-3 glass rounded-lg hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              {contact.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {athleteData.name}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Hecho Por <Citrus className="w-4 h-4 text-orange-500 fill-orange-500" /> Mandarine Desing
          </p>
        </div>
      </div>
    </footer>
  )
}
