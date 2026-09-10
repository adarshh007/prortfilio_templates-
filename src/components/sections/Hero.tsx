"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { SonarField } from "@/components/ui/SonarField";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <SonarField
        aria-hidden="true"
        baseOpacity={0.16}
        spacing={32}
        pingEvery={4}
        className="absolute inset-0 -z-10"
      />

      <div className="container-content max-w-3xl">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
        >
          <motion.p
            variants={item}
            className="font-mono text-sm text-ink-muted"
          >
            Hi, I&apos;m Adarsh.
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-primary sm:text-5xl lg:text-6xl"
          >
            Aspiring Data Scientist
            <br />
            &amp; Full-Stack Developer
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-prose text-lg leading-relaxed text-ink-secondary"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects">View Projects</Button>
            <Button href={profile.resumeUrl} variant="secondary" external>
              Download Resume
            </Button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <BrandMark label="gh" size={16} />
              View GitHub
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
