"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Flask",
  "Machine Learning",
  "Cybersecurity",
  "TailwindCSS",
  "SQL",
  "Node.js",
  "Git",
  "API Integration",
  "Automation",
  "MongoDB",
  "Pandas",
  "Scikit-learn",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden pb-32 pt-8"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">

        <div className="mb-20 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.4em] text-orange-400">
            Tech Stack
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
            Skills &{" "}
            <span className="text-gradient-shimmer">
              Technologies
            </span>
          </h2>

        </div>

        <div className="mx-auto max-w-6xl">

          <div className="glass-strong rounded-[32px] p-8 md:p-12">

            <div className="flex flex-wrap justify-center gap-4">

              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
px-6
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
                  {skill}
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}