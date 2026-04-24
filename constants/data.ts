import { Cloud, Brain, Layout, Terminal } from "lucide-react";

export const PROJECTS = [
  {
    id: 1,
    title: "Interior Design VR System",
    description: "Sistema de tesis con realidad virtual y backend en Django. Panel administrativo para gestión de mobiliario y espacios digitalizados.",
    stack: ["Python", "Django", "VR", "PostgreSQL"],
    category: "Academic Project / Thesis",
    status: "Completed",
    image: "/projects/thesis.jpg",
    isHero: true,
    link: "https://github.com/FernandoLopez7/ProjectVertexScape", // ❌ sin link público
  },
  {
    id: 2,
    title: "Enterprise Backend & AI",
    description: "Arquitectura escalable en Azure Functions integrada con OpenAI para procesamiento inteligente de datos corporativos. Proyecto confidencial del sector financiero. Participación en backend, arquitectura y despliegue en Azure.",
    stack: ["Python", "Azure Functions", "OpenAI API", "Azure SQL"],
    category: "Enterprise Project",
    status: "Confidential",
    image: "/projects/enterprise.jpg",
    isHero: false,
    private: true,
    link: "", // ❌ no disponible
  },
  {
    id: 3,
    title: "Personal Finance App",
    description: "Gestión de ingresos y gastos con arquitectura modular. Enfoque en UX y seguridad de datos.",
    stack: ["React Native", "Expo", "Node.js"],
    category: "Personal Project",
    status: "Work in Progress",
    image: "/projects/finance.jpg",
    isHero: false,
    private: true,
    link: "", // puede ser vacío por ahora
  }
];

export const SKILLS = [
  { name: "Backend", items: ["Python", "Django", "FastAPI"], icon: Terminal },
  { name: "Cloud", items: ["Azure", "Azure Functions", "Cognitive Services"], icon: Cloud },
  { name: "Frontend", items: ["React", "Next.js", "Expo"], icon: Layout },
  { name: "AI & Data", items: ["Deep Learning", "SQL", "ETL Pipelines"], icon: Brain },
];