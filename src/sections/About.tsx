"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-32 pt-10"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">

        <div className="mb-20 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-orange-400">
            Get To Know Me
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
            Code • Create •{" "}
            <span className="text-gradient-shimmer">
              Scale
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong overflow-hidden rounded-[32px]"
          >
            <div className="relative h-full">

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

              <Image
                src="https://i.pinimg.com/1200x/33/54/38/335438a4894bdd9a8999d59e69cdadc0.jpg"
                alt="Shaik Abdul Farooq"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 z-20 w-full p-8">

                <h3 className="text-3xl font-bold text-white">
                  Shaik Abdul Farooq
                </h3>

                <p className="mt-2 text-white/70">
                  App & Web Developer, Cyber Security enthusiast, Machine Learning practitioner, and Automation aficionado.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
                  <MapPin size={16} />
                  Bengaluru, India
                </div>

                <div className="mt-6 flex gap-3">

                  <a
                    href="https://github.com/farooq-senpai"
                    target="_blank"
                    className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-orange-500/20"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shaikabdulfarooq"
                    target="_blank"
                    className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-orange-500/20"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="mailto:farooqshaik3906@gmail.com"
                    className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-orange-500/20"
                  >
                    <Mail size={18} />
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="glass-strong rounded-[28px] p-8">

              <span className="text-xs uppercase tracking-[0.4em] text-orange-400">
                INTRODUCTION
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Versatile Developer.
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Computer Science graduate focused on building modern web applications, AI-driven tools and scalable digital experiences. Skilled in full stack development, automation, machine learning and backend systems with hands-on experience developing real-world projects across web, data and cybersecurity domains
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/70">
                My interests span across Full Stack Development, AI-driven applications, Automation, Machine Learning, Cybersecurity and modern scalable systems.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="glass-strong rounded-[28px] p-6">
                <h4 className="text-xl font-bold">
                  Focused Areas
                </h4>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "AI",
                    "Automation",
                    "Web Apps",
                    "Machine Learning",
                    "Cybersecurity",
                    "APIs",
                    "Python",
                    "Java",
                    "Android App Development",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-[28px] p-6">
                <h4 className="text-xl font-bold">
                  Current Goal
                </h4>

                <p className="mt-4 leading-relaxed text-white/70">
                  Kickstarting my software engineering career by building impactful real-world applications and continuously growing in AI, full stack development and scalable systems.
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}