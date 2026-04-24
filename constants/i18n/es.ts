// src/i18n/es.ts

export const es = {
  metadata: {
    title: "Fernando Lopez | Software Engineer",
    description:
      "Backend developer especializado en Python, Azure y sistemas escalables con integración de IA.",
  },

  hero: {
    role: "Software Engineer • Backend & Cloud Developer",
    title: "Full Stack Backend Engineer",
    description:
      "Ingeniero en Software enfocado en desarrollo backend, arquitectura de sistemas y cloud computing con Azure. Experiencia construyendo soluciones escalables, integrando inteligencia artificial y diseñando APIs robustas en entornos reales y académicos.",
    stack: "Python • Azure • Django • AI • React • Data Systems",
    ctaProjects: "Ver Proyectos",
    ctaContact: "Contacto",
  },

  about: {
    title: "Software Engineer",
    description:
      "Backend developer especializado en Python, Azure y sistemas escalables con integración de IA.",
    highlights: {
      backend: "Backend Engineering",
      cloud: "Azure Cloud",
      ai: "AI Systems",
      data: "Data / ETL",
      systems: "Distributed Systems",
    },
  },

  projects: {
    title: "Proyectos",
    list: [
      {
        id: 1,
        title: "Interior Design VR System",
        description:
          "Sistema de tesis con realidad virtual y backend en Django. Panel administrativo para gestión de mobiliario y espacios digitalizados.",
        stack: ["Python", "Django", "VR", "PostgreSQL"],
        category: "Proyecto Académico / Tesis",
        status: "Completado",
        image: "/projects/thesis.jpg",
        isHero: true,
        link: "https://github.com/FernandoLopez7/ProjectVertexScape",
      },
      {
        id: 2,
        title: "Enterprise Backend & AI",
        description:
          "Arquitectura escalable en Azure Functions integrada con OpenAI para procesamiento inteligente de datos corporativos. Proyecto confidencial del sector financiero. Participación en backend, arquitectura y despliegue en Azure.",
        stack: [
          "Python",
          "Azure Functions",
          "OpenAI API",
          "Azure SQL",
        ],
        category: "Proyecto Empresarial",
        status: "Confidencial",
        image: "/projects/enterprise.jpg",
        isHero: false,
        private: true,
        link: "",
      },
      {
        id: 3,
        title: "Personal Finance App",
        description:
          "Gestión de ingresos y gastos con arquitectura modular. Enfoque en UX y seguridad de datos.",
        stack: ["React Native", "Expo", "Node.js"],
        category: "Proyecto Personal",
        status: "En Progreso",
        image: "/projects/finance.jpg",
        isHero: false,
        private: true,
        link: "",
      },
    ],
  },

  skills: [
    {
      name: "Backend",
      items: ["Python", "Django", "FastAPI"],
    },
    {
      name: "Cloud",
      items: ["Azure", "Azure Functions", "Cognitive Services"],
    },
    {
      name: "Frontend",
      items: ["React", "Next.js", "Expo"],
    },
    {
      name: "AI & Data",
      items: ["Deep Learning", "SQL", "ETL Pipelines"],
    },
  ],

  contact: {
    copyright: "© 2026 Dev Portfolio",
  },
};