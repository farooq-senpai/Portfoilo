"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className="group flex h-full min-h-[760px] flex-col"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <div className="flex items-center gap-2">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition-all hover:bg-orange-500/20 hover:text-white"
            >
              <Github size={18} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition-all hover:bg-orange-500/20 hover:text-white"
            >
              <ArrowUpRight size={18} />
            </a>
          )}

        </div>
      </div>

      <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-[1px] shadow-[0_20px_80px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30">

        <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] bg-[#0f0f17]">

          <div
            className={`absolute inset-0 bg-gradient-to-br opacity-80 ${project.bgColor}`}
          />

          <div className="relative z-10 p-7">

            <p className="line-clamp-4 text-base leading-relaxed text-white/75">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {project.screenshots?.[0] && (
            <div className="relative mt-6 px-6 pb-6">

              <div className="h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">

                <Image
                  src={project.screenshots[0]}
                  alt={project.title}
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

            </div>
          )}

        </div>
      </div>
    </motion.article>
  );
}