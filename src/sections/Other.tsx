"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

export function Other() {
  const links = [
    {
      title: "GitHub",
      desc: "Explore my repositories and projects",
      href: "https://github.com/farooq-senpai",
      icon: Github,
    },
    {
      title: "LinkedIn",
      desc: "Connect with me professionally",
      href: "https://www.linkedin.com/in/shaikabdulfarooq/",
      icon: Linkedin,
    },
    {
      title: "Email",
      desc: "Reach out for collaborations or opportunities",
      href: "mailto:farooqshaik3906@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section
      id="other"
      className="relative overflow-hidden pb-32 pt-4"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">

        <div className="mb-20 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.4em] text-orange-400">
            Connect
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
            Let's{" "}
            <span className="text-gradient-shimmer">
              Connect
            </span>
          </h2>

        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          {links.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
              }}
              className="glass-strong group rounded-[32px] p-8 transition-all duration-300 hover:border-orange-400/20"
            >

              <div className="flex items-center justify-between">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <item.icon size={28} />
                </div>

                <ExternalLink
                  size={18}
                  className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/60">
                {item.desc}
              </p>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}