"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { getDictionary } from "@/constants/i18n";

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

export default function Portfolio() {
  const { lang, changeLanguage } = useLanguage();
  const t = getDictionary(lang);

  return (
    <main className="bg-black text-zinc-300 min-h-screen selection:bg-blue-500/30">

      {/* 🌐 LANGUAGE SWITCH (sin tocar estilos globales) */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <button
          onClick={() => changeLanguage("es")}
          className={`px-3 py-1 text-xs rounded ${
            lang === "es" ? "bg-white text-black" : "bg-zinc-800 text-zinc-400"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 text-xs rounded ${
            lang === "en" ? "bg-white text-black" : "bg-zinc-800 text-zinc-400"
          }`}
        >
          EN
        </button>
      </div>

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
                src="/projects/yo.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ROLE */}
          <span className="text-blue-500 font-mono tracking-[0.3em] mb-4 block uppercase text-sm">
            {t.hero.role}
          </span>

          {/* NAME / IDENTITY */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
            {t.hero.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
            {t.hero.description}
          </p>

          {/* STACK */}
          <p className="text-zinc-500 text-sm mb-8">
            {t.hero.stack}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full font-bold"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="border border-zinc-700 px-8 py-3 rounded-full font-bold"
            >
              {t.hero.ctaContact}
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

            <div className="col-span-2 h-32 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Code2 className="text-blue-500" size={28} />
              <span className="text-xs text-zinc-400 font-mono">
                {t.about.highlights.backend}
              </span>
            </div>

            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Cloud className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                {t.about.highlights.cloud}
              </span>
            </div>

            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Cpu className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                {t.about.highlights.ai}
              </span>
            </div>

            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Database className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                {t.about.highlights.data}
              </span>
            </div>

            <div className="h-28 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-2 border border-zinc-800 hover:border-blue-500/40 transition">
              <Network className="text-blue-500" size={26} />
              <span className="text-[10px] text-zinc-500 font-mono">
                {t.about.highlights.systems}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.about.title}
            </h2>

            <p className="text-zinc-400 mb-8">
              {t.about.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {t.skills.map((skill) => (
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
        <h2 className="text-4xl font-bold text-white mb-10">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.list.map((p) => (
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
          <a
            href="https://github.com/FernandoLopez7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
          >
            <BiLogoGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/fernando-lopez-365277258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-500 transition"
          >
            <BiLogoLinkedin size={28} />
          </a>

          <a
            href="mailto:gabol90@outlook.com"
            className="text-zinc-400 hover:text-zinc-200 transition"
          >
            <Mail size={28} />
          </a>
        </div>

        <p className="text-zinc-600 text-xs">
          {t.contact.copyright}
        </p>
      </footer>
    </main>
  );
}