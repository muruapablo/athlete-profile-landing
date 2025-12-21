import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Athlete Profile | Triatleta de Alto Rendimiento',
  description: 'Plataforma profesional de atleta - Media Kit interactivo, métricas deportivas y oportunidades de sponsorship.',
  keywords: ['triatlón', 'atleta', 'sponsorship', 'deportista', 'alto rendimiento'],
  authors: [{ name: 'Athlete Name' }],
  openGraph: {
    title: 'Athlete Profile | Triatleta de Alto Rendimiento',
    description: 'Disciplina, constancia y resultados medibles. Conocé mi perfil deportivo y oportunidades de sponsorship.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athlete Profile | Triatleta de Alto Rendimiento',
    description: 'Disciplina, constancia y resultados medibles.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-dark-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
