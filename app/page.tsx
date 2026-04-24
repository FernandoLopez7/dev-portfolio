"use client";

import { motion } from "framer-motion";

// ✅ FIX: usar BI (estable en tu instalación)
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Image from "next/image";
import {
  Mail,
  ChevronDown,
  Code2,
  Cpu,
  Cloud,
  Database,
  Network,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, SKILLS } from "@/constants/data";

export default function Portfolio() {
  return (
    <main className="bg-black text-zinc-300 min-h-screen selection:bg-blue-500/30">
      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          {/* PROFILE IMAGE */}
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border border-zinc-800">
              <Image
                src="/projects/yo.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ROLE */}
          <span className="text-blue-500 font-mono tracking-[0.3em] mb-4 block uppercase text-sm">
            Software Engineer • Backend & Cloud Developer
          </span>

          {/* NAME / IDENTITY */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
            Full Stack Backend Engineer
          </h1>

          {/* PERSONAL DESCRIPTION (CLAVE PARA RECLUTADORES) */}
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
            Ingeniero en Software enfocado en desarrollo backend, arquitectura
            de sistemas y cloud computing con Azure. Experiencia construyendo
            soluciones escalables, integrando inteligencia artificial y
            diseñando APIs robustas en entornos reales y académicos.
          </p>

          {/* STACK SHORT TAGLINE */}
          <p className="text-zinc-500 text-sm mb-8">
            Python • Azure • Django • AI • React • Data Systems
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full font-bold"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-zinc-700 px-8 py-3 rounded-full font-bold"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="text-zinc-600" size={30} />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* CORE BACKEND */}
            <div className="col-span-2 h-32 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Code2 className="text-blue-500" size={28} />
              <span className="text-xs text-zinc-400 font-mono">
                Backend Engineering
              </span>
            </div>

            {/* CLOUD */}
            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Cloud className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                Azure Cloud
              </span>
            </div>

            {/* AI */}
            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Cpu className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                AI Systems
              </span>
            </div>

            {/* DATA */}
            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Database className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                Data / ETL
              </span>
            </div>
            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Network className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                Distributed Systems
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Software Engineer
            </h2>

            <p className="text-zinc-400 mb-8">
              Backend developer especializado en Python, Azure y sistemas
              escalables con integración de IA.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="p-4 bg-zinc-900 rounded-xl">
                  <h4 className="text-white font-bold mb-2">{skill.name}</h4>
                  <ul className="text-sm text-zinc-400">
                    {skill.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="border-t border-zinc-900 py-24 text-center"
      >
        <div className="flex justify-center gap-6 mb-10">
          {/* GitHub */}
          <a
            href="https://github.com/FernandoLopez7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <BiLogoGithub size={28} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fernando-lopez-365277258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-500 transition"
          >
            <BiLogoLinkedin size={28} />
          </a>

          {/* Email */}
          <a
            href="mailto:gabol90@outlook.com"
            className="text-zinc-400 hover:text-zinc-200 transition"
          >
            <Mail size={28} />
          </a>
        </div>

        <p className="text-zinc-600 text-xs">© 2026 Dev Portfolio</p>
      </footer>
    </main>
  );
}
