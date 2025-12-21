# Athlete Profile Landing

## 🏊‍♂️🚴‍♂️🏃 Plataforma Personal de Triatleta

Landing page profesional para atletas de alto rendimiento. Diseñada para atraer sponsors y mostrar métricas deportivas y digitales.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales y Tailwind
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── HeroSection.tsx      # Hero con video y CTAs
│   ├── AthleteProfile.tsx   # Perfil deportivo
│   ├── MetricsSection.tsx   # Métricas y resultados
│   ├── RaceCalendar.tsx     # Calendario de competencias
│   ├── SocialFeed.tsx       # Integración redes sociales
│   ├── SponsorProposal.tsx  # Propuesta para sponsors
│   ├── Timeline.tsx         # Historia y mentalidad
│   ├── ContactSection.tsx   # Formulario de contacto
│   ├── Navigation.tsx       # Navegación
│   └── Footer.tsx           # Pie de página
├── data/
│   └── athlete.ts       # Datos del atleta (editar aquí)
└── lib/
    └── utils.ts         # Utilidades
```

## ✏️ Personalización

### Datos del Atleta

Edita el archivo `src/data/athlete.ts` para personalizar:

- Información personal (nombre, bio, ubicación)
- Perfil deportivo (disciplina, categoría, experiencia)
- Mejores marcas personales
- Logros y resultados
- Métricas de redes sociales
- Calendario de competencias
- Historia y timeline
- Frases de mentalidad
- Propuesta de sponsorship
- Datos de contacto

### Imágenes y Videos

Coloca tus archivos multimedia en la carpeta `public/`:

- `public/images/` - Fotos de perfil y posts
- `public/videos/` - Video hero (hero-reel.mp4)
- `public/media-kit.pdf` - Media Kit descargable

### Estilos

Los colores principales se pueden modificar en `tailwind.config.ts`:

- `primary` - Color principal (azul)
- `accent` - Color de acento (púrpura/rosa)
- `dark` - Fondos oscuros

## 🌐 Deploy en Vercel

1. Sube el proyecto a GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Deploy automático en cada push

### Variables de Entorno (opcional)

Para integraciones avanzadas:

```env
NEXT_PUBLIC_GA_ID=           # Google Analytics
INSTAGRAM_TOKEN=             # Instagram API
YOUTUBE_API_KEY=             # YouTube API
```

## 📱 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones con Framer Motion
- ✅ SEO optimizado
- ✅ Performance alta (Next.js 14)
- ✅ Modo oscuro profesional
- ✅ Formulario de contacto
- ✅ Media Kit descargable
- ✅ Métricas animadas
- ✅ Timeline interactivo
- ✅ Calendario de carreras

## 🔮 Próximas Mejoras

- [ ] Integración real con Instagram API
- [ ] Dashboard de métricas en vivo (Strava)
- [ ] CMS headless (Sanity/Notion)
- [ ] Formulario conectado a email
- [ ] Analíticas avanzadas

## 📄 Licencia

MIT - Libre uso para proyectos personales y comerciales.

---

Desarrollado con ❤️ para atletas de alto rendimiento
