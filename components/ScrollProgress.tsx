"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 135,
    damping: 28,
    mass: 0.22,
  });

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
      />
    </div>
  );
}
