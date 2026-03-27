'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, MessageCircle, Instagram, Download, CheckCircle, Loader2 } from 'lucide-react'
import { athleteData } from '@/data/athlete'

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mpqoandy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', company: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const { contact } = athleteData

  return (
    <section id="contacto" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-primary-500/20 to-transparent blur-3xl" />
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
            Hablemos de <span className="gradient-text">Sponsorship</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estoy abierto a nuevas colaboraciones y oportunidades. 
            Contactame para conocer más sobre cómo podemos trabajar juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Enviame un mensaje</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-400">Te responderé lo antes posible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                      Empresa / Marca
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Nombre de tu empresa o marca"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Contame sobre la oportunidad de sponsorship..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Direct contact options */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contacto directo</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 bg-dark-600 rounded-xl hover:bg-dark-500 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">{contact.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-600 rounded-xl hover:bg-dark-500 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="font-medium">{contact.whatsapp}</p>
                  </div>
                </a>

                <a
                  href={athleteData.socialMetrics.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-600 rounded-xl hover:bg-dark-500 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors">
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <p className="font-medium">{contact.instagram}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Media Kit Download */}
            <div className="glass rounded-2xl p-8 animated-border">
              <h3 className="text-xl font-semibold mb-4">Media Kit</h3>
              <p className="text-gray-400 text-sm mb-6">
                Descargá el Media Kit completo con toda la información sobre perfil, 
                métricas y oportunidades de sponsorship en formato PDF.
              </p>
              <a
                href={athleteData.mediaKitUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold hover:scale-[1.02] transition-transform"
              >
                <Download className="w-5 h-5" />
                Descargar Media Kit (PDF)
              </a>
            </div>

            {/* Response time */}
            <div className="text-center text-sm text-gray-400">
              <p>⚡ Respuesta típica en menos de 24 horas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
