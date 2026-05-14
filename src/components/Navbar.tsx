"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#other", label: "Other" },
];

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const ids = navItems.map((item) => item.href.replace("#", ""));
      let current = ids[0];

      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);

        if (el && el.getBoundingClientRect().top <= 120) {
          current = ids[i];
          break;
        }
      }

      setActive(current);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full py-6">
      <nav className="section flex items-center justify-center">
        <div className="glass-strong flex h-16 items-center gap-2 rounded-full px-4">

          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-6 py-3 text-sm font-medium"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-orange-500/20 border border-orange-400/20"
                    transition={{
                      type: "spring",
                      duration: 0.6,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 ${isActive
                      ? "text-white"
                      : "text-white/60"
                    }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}