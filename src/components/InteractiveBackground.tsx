"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

export function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const x =
        (e.clientX / innerWidth - 0.5) * 180;

      const y =
        (e.clientY / innerHeight - 0.5) * 180;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const dots = Array.from({ length: 90 });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07010f]">

      {/* GRADIENT BLOBS */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
absolute
left-[-10%]
top-[-10%]
h-[700px]
w-[700px]
rounded-full
bg-orange-600/20
blur-[180px]
"
      />

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
absolute
bottom-[-20%]
right-[-10%]
h-[650px]
w-[650px]
rounded-full
bg-fuchsia-500/20
blur-[180px]
"
      />

      {/* DOT FIELD */}

      <div className="absolute inset-0">

        {dots.map((_, i) => {
          const size =
            Math.random() * 3 + 1;

          const left =
            Math.random() * 100;

          const top =
            Math.random() * 100;

          const duration =
            Math.random() * 8 + 8;

          const delay =
            Math.random() * 5;

          return (
            <motion.div
              key={i}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                x: smoothX,
                y: smoothY,
              }}
              animate={{
                opacity: [0.15, 0.6, 0.15],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
              className="absolute rounded-full bg-orange-300/40"
            >
              <div
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                className="rounded-full bg-white/70 shadow-[0_0_12px_rgba(139,92,246,0.9)]"
              />
            </motion.div>
          );
        })}

      </div>

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 90%)",
        }}
      />

    </div>
  );
}