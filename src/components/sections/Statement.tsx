"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Inspired by a reference clip: a solid band sits across the fold, then
// grows vertically as you scroll until it fills the screen and reveals a
// headline underneath. Rebuilt here with Framer Motion's scroll transforms
// (no GSAP/ScrollTrigger) to stay on the stack this project already uses,
// and re-themed from the reference's cream/black swap to this site's dark
// surface + amber signal accent.
export function Statement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The band starts as a thin horizontal strip (scaleY 0.08) pinned to the
  // vertical center, and grows to fully cover the sticky viewport.
  const bandScale = useTransform(scrollYProgress, [0, 0.55], [0.08, 1]);
  const headlineOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const headlineY = useTransform(headlineOpacity, [0, 1], [24, 0]);

  if (shouldReduceMotion) {
    // No scroll-linked motion: show the resting state as a plain, static section.
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-surface-card px-6 py-24 text-center">
        <p className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-ink-primary sm:text-4xl">
          Every project moves through the same path — data, AI, code, product.
        </p>
      </section>
    );
  }

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ scaleY: bandScale }}
          className="absolute inset-x-0 top-1/2 h-screen -translate-y-1/2 origin-center bg-surface-card"
          aria-hidden="true"
        />

        <motion.p
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="relative max-w-2xl px-6 text-center text-2xl font-semibold leading-snug tracking-tight text-ink-primary sm:text-4xl"
        >
          Every project moves through the same path — data, AI, code, product.
        </motion.p>
      </div>
    </div>
  );
}
