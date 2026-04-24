// src/i18n/en.ts

export const en = {
  metadata: {
    title: "Fernando Lopez | Software Engineer",
    description:
      "Backend developer specialized in Python, Azure, and scalable systems with AI integration.",
  },

  hero: {
    role: "Software Engineer • Backend & Cloud Developer",
    title: "Full Stack Backend Engineer",
    description:
      "Software Engineer focused on backend development, system architecture, and cloud computing with Azure. Experienced in building scalable solutions, integrating artificial intelligence, and designing robust APIs in real-world and academic environments.",
    stack: "Python • Azure • Django • AI • React • Data Systems",
    ctaProjects: "View Projects",
    ctaContact: "Contact",
  },

  about: {
    title: "Software Engineer",
    description:
      "Backend developer specialized in Python, Azure, and scalable systems with AI integration.",
    highlights: {
      backend: "Backend Engineering",
      cloud: "Azure Cloud",
      ai: "AI Systems",
      data: "Data / ETL",
      systems: "Distributed Systems",
    },
  },

  projects: {
    title: "Projects",
    list: [
      {
        id: 1,
        title: "Interior Design VR System",
        description:
          "Thesis project with virtual reality and a Django backend. Administrative panel for managing furniture and digitized spaces.",
        stack: ["Python", "Django", "VR", "PostgreSQL"],
        category: "Academic Project / Thesis",
        status: "Completed",
        image: "/projects/thesis.jpg",
        isHero: true,
        link: "https://github.com/FernandoLopez7/ProjectVertexScape",
      },
      {
        id: 2,
        title: "Enterprise Backend & AI",
        description:
          "Scalable architecture built with Azure Functions and integrated with OpenAI for intelligent corporate data processing. Confidential project in the financial sector. Contribution focused on backend development, system architecture, and Azure deployment.",
        stack: [
          "Python",
          "Azure Functions",
          "OpenAI API",
          "Azure SQL",
        ],
        category: "Enterprise Project",
        status: "Confidential",
        image: "/projects/enterprise.jpg",
        isHero: false,
        private: true,
        link: "",
      },
      {
        id: 3,
        title: "Personal Finance App",
        description:
          "Income and expense management with a modular architecture. Focused on UX and data security.",
        stack: ["React Native", "Expo", "Node.js"],
        category: "Personal Project",
        status: "Work in Progress",
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