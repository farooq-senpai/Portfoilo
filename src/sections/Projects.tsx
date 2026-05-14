"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden pb-32 pt-8"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          className="absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-[140px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="section">

        <div className="mb-24 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.4em] text-orange-400">
            Portfolio
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Featured{" "}
            <span className="text-gradient-shimmer">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            A showcase of projects focused on AI,
            automation, machine learning, full stack
            development and scalable digital experiences.
          </p>

        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-2">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <a
            href="https://github.com/farooq-senpai"
            target="_blank"
            rel="noopener noreferrer"
            className="
group
inline-flex
items-center
gap-3
rounded-full
border
border-white/10
bg-white/[0.03]
px-7
py-4
text-sm
font-semibold
text-white/80
backdrop-blur-xl
transition-all
duration-300
hover:border-orange-400/30
hover:bg-orange-500/10
hover:text-white
"
          >
            <span>Explore More on GitHub</span>

            <ExternalLink
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}