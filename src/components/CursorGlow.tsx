"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 40,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 40,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    const clickable = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );

    clickable.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);

      clickable.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        animate={{
          width: hovering ? 70 : 28,
          height: hovering ? 70 : 28,
          opacity: hovering ? 0.15 : 0.35,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="pointer-events-none fixed z-[9999] rounded-full border border-orange-400 mix-blend-screen"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        animate={{
          scale: hovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(139,92,246,0.9)]"
      />
    </>
  );
}