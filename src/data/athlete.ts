// Datos del atleta - Editar según corresponda
export const athleteData = {
  // Información personal
  name: "Leticia Alberto",
  title: "Triatleta de Alto Rendimiento",
  claim: "Disciplina, constancia y resultados medibles",
  bio: "Atleta dedicada al triatlón desde hace más de 5 años. Comprometida con la excelencia deportiva y la superación constante. Busco alianzas con marcas que compartan mis valores de disciplina y alto rendimiento.",
  location: "Córdoba, Argentina",
  
  // Video hero (URL de YouTube embed o video local)
  heroVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  // Imagen de respaldo si no hay video
  heroImageUrl: "/images/hero-athlete.jpg",
  
  // Perfil deportivo
  profile: {
    discipline: "Triatlón",
    category: "Elite Amateur",
    yearsOfExperience: 5,
    club: "AGMT2",
    currentSponsors: ["Oslo", "Ziroox", "24hs SECURITY"],
  },
  
  // Valores del atleta
  values: [
    { name: "Disciplina", icon: "Target", description: "Compromiso diario con el entrenamiento" },
    { name: "Resiliencia", icon: "Shield", description: "Superar obstáculos y lesiones" },
    { name: "Mentalidad Competitiva", icon: "Trophy", description: "Siempre buscando mejorar" },
    { name: "Constancia", icon: "TrendingUp", description: "Resultados sostenidos en el tiempo" },
  ],
  
  // Mejores marcas personales
  personalBests: {
    swimming: { distance: "1.9km", time: "28:45", event: "Half Ironman" },
    cycling: { distance: "90km", time: "2:35:00", event: "Half Ironman" },
    running: { distance: "21.1km", time: "1:42:30", event: "Media Maratón" },
    triathlon: { distance: "Half Ironman", time: "4:58:00", event: "Mar del Plata 2024" },
  },
  
  // Resultados destacados
  achievements: [
    { position: 1, event: "Triatlón Cordoba 26", year: 2026, category: "General" },
    { position: 1, event: "Triatlón Cross 25", year: 2025, category: "General" },
    { position: 5, event: "Desafio Rio Pinto", year: 2025, category: "Damas A2" },
    { position: 1, event: "Gran Fondo 7 Lagos", year: 2024, category: "Damas A" },
  ],
  
  // Métricas digitales
  socialMetrics: {
    instagram: {
      followers: 13200,
      engagement: 4.2,
      avgReach: 25000,
      avgViews: 12000,
      handle: "@lety.atleta.arg",
      url: "https://instagram.com/lety.atleta.arg"
    },
    tiktok: {
      followers: 8500,
      engagement: 6.8,
      avgViews: 45000,
      handle: "@atleta_tri",
      url: "https://tiktok.com/@letyalberto"
    },
    // youtube: {
    //   subscribers: 2100,
    //   avgViews: 3500,
    //   handle: "AtletaTri",
    //   url: "https://youtube.com/@AtletaTri"
    // },
    strava: {
      followers: 890,
      handle: "Lety🦋 Alberto",
      url: "https://www.strava.com/athletes/95453743?oq=let"
    }
  },
  
  // Behold Instagram Feed (Servicio de terceros - más fácil que API)
  // Obtén tu Feed ID en https://behold.so después de crear tu feed
  // Ejemplo: "ABC123DEF"
  beholdFeedId: "", // Vacío = usa placeholders. Completa después de crear el feed en Behold
  
  // Calendario de competencias
  upcomingRaces: [
    {
      name: "Ironman 5i50 San Juan 2026",
      date: "2026-10-30",
      location: "San Juan, Argentina",
      distance: "5i50 Ironman",
      status: "confirmed", // confirmed | target | preparation
      priority: "A", // A = objetivo principal, B = preparación, C = training
    },
    {
      name: "Hombre de piedra 2026",
      date: "2026-09-26",
      location: "Tandil, Argentina",
      distance: "Duatlon",
      status: "preparation",
      priority: "B",
    },
    /*{
      name: "Ironman Mar del Plata",
      date: "2025-12-07",
      location: "Mar del Plata, Argentina",
      distance: "Full Ironman",
      status: "target",
      priority: "A",
    },*/
    {
      name: "Rio Pinto 2026",
      date: "2026-05-03",
      location: "La Cumbre, Córdoba, Argentina",
      distance: "85KM",
      status: "preparation",
      priority: "B",
    },
  ],
  
  // Timeline / Historia
  timeline: [
    {
      year: 2019,
      title: "Inicio en el Triatlón",
      description: "Primer triatlón sprint. El comienzo de un camino de transformación.",
      type: "milestone",
    },
    {
      year: 2020,
      title: "Pandemia y Entrenamiento Indoor",
      description: "Mantuve la disciplina entrenando en casa. Crecimiento mental significativo.",
      type: "challenge",
    },
    {
      year: 2021,
      title: "Primer Podio",
      description: "3er puesto en Triatlón Olímpico. Validación del trabajo constante.",
      type: "achievement",
    },
    {
      year: 2022,
      title: "Lesión y Recuperación",
      description: "Fractura por estrés. 4 meses de rehabilitación. Aprendí sobre paciencia.",
      type: "challenge",
    },
    {
      year: 2023,
      title: "Regreso Triunfal",
      description: "Múltiples podios. Mejor temporada hasta la fecha.",
      type: "achievement",
    },
    {
      year: 2024,
      title: "Primer Half Ironman Sub-5",
      description: "Objetivo cumplido. Nuevo récord personal y top 10 general.",
      type: "milestone",
    },
  ],
  
  // Frases de mentalidad
  mindsetQuotes: [
    {
      quote: "El dolor es temporal, el orgullo es para siempre.",
      context: "En los últimos kilómetros de cada carrera",
    },
    {
      quote: "No entreno para ganar. Entreno para no rendirme nunca.",
      context: "Filosofía de entrenamiento",
    },
    {
      quote: "La disciplina supera a la motivación todos los días.",
      context: "Entrenamientos a las 5am en invierno",
    },
  ],
  
  // Propuesta para sponsors
  sponsorshipValue: {
    benefits: [
      {
        title: "Visibilidad en Competencias",
        description: "Presencia de marca en carreras nacionales e internacionales",
        icon: "Eye",
      },
      {
        title: "Contenido Auténtico",
        description: "Stories, reels y posts mostrando uso real del producto",
        icon: "Video",
      },
      {
        title: "Asociación de Valores",
        description: "Tu marca vinculada a disciplina, superación y alto rendimiento",
        icon: "Heart",
      },
      {
        title: "Alcance Digital",
        description: "Exposición a una audiencia comprometida con el deporte",
        icon: "Users",
      },
    ],
    tiers: [
      {
        name: "Equipamiento",
        description: "Productos y equipamiento deportivo",
        includes: ["Uso en competencias", "Menciones en RRSS", "Fotos de producto"],
      },
      {
        name: "Apoyo Económico",
        description: "Contribución para viajes y competencias",
        includes: ["Todo lo anterior", "Logo en indumentaria", "Contenido exclusivo"],
      },
      {
        name: "Partner Principal",
        description: "Alianza estratégica completa",
        includes: ["Todo lo anterior", "Naming rights", "Eventos conjuntos", "Exclusividad en categoría"],
      },
    ],
    activations: [
      "Sorteos y giveaways",
      "Reviews auténticos de productos",
      "Presencia en eventos de marca",
      "Contenido behind the scenes",
      "Historias de uso real",
    ],
  },
  
  // Contacto
  contact: {
    email: "leticiaalberto04@gmail.com",
    whatsapp: "+5493513042525",
    instagram: "@lety.atleta.arg",
  },
  
  // Media Kit PDF URL
  mediaKitUrl: "/LA-Media-Kit.pdf",
}

// Datos de métricas de entrenamiento (para dashboard en vivo - futuro)
export const trainingStats = {
  yearToDate: {
    swimKm: 245,
    bikeKm: 4500,
    runKm: 1200,
    totalHours: 520,
    racesCompleted: 8,
    daysWithoutMissing: 156,
  },
  weeklyAverage: {
    swimKm: 8,
    bikeKm: 150,
    runKm: 45,
    hours: 15,
  },
}
