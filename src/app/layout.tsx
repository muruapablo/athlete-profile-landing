import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Leticia Alberto | Triatleta de Alto Rendimiento',
  description: 'Triatleta Elite Amateur con +5 años de experiencia. Disciplina, constancia y resultados medibles. Media Kit y oportunidades de sponsorship.',
  keywords: ['triatlón', 'atleta', 'sponsorship', 'deportista', 'alto rendimiento', 'Leticia Alberto', 'AGMT2', 'Córdoba'],
  authors: [{ name: 'Leticia Alberto' }],
  openGraph: {
    title: 'Leticia Alberto | Triatleta de Alto Rendimiento',
    description: '🏊‍♀️🚴‍♀️🏃‍♀️ Triatleta Elite Amateur • AGMT2 • Disciplina, constancia y resultados medibles. Conocé mi perfil y propuestas de sponsorship.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leticia Alberto | Triatleta de Alto Rendimiento',
    description: '🏊‍♀️🚴‍♀️🏃‍♀️ Triatleta Elite Amateur • Disciplina, constancia y resultados medibles.',
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
