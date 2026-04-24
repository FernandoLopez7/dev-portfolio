"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Lock, X } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/constants/types";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);

  const isPrivate = project.private || project.status === "Confidential";

  return (
    <>
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setOpen(true)}
        className="cursor-pointer group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all"
      >

        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-bold uppercase px-2 py-1 bg-black/60 text-white rounded">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6">

          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-zinc-100">
              {project.title}
            </h3>

            {isPrivate ? (
              <Lock size={16} className="text-zinc-500" />
            ) : (
              <ExternalLink size={16} className="text-zinc-500" />
            )}
          </div>

          <p className="text-zinc-400 text-sm line-clamp-2">
            {project.description}
          </p>

        </div>
      </motion.div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}   // 👈 click fuera cierra
        >

          <div
            className="relative bg-zinc-900 max-w-3xl w-full rounded-2xl overflow-hidden border border-zinc-800"
            onClick={(e) => e.stopPropagation()} // 👈 evita cerrar al clicar dentro
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/60 p-2 rounded-full text-zinc-300 hover:text-white hover:bg-black"
            >
              <X size={18} />
            </button>

            {/* IMAGE */}
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h2>

              <p className="text-zinc-400 mb-4">
                {project.description}
              </p>

              {/* STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-xs text-zinc-500 mb-4">
                Status: {project.status}
              </p>

              {/* LINK */}
              {!isPrivate && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 text-sm flex items-center gap-1 hover:underline"
                >
                  Open Project <ExternalLink size={14} />
                </a>
              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
};