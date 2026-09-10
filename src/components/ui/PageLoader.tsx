"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";

const SESSION_KEY = "adarsh-portfolio:loader-shown";

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.045, ease: [0.16, 1, 0.3, 1] },
  }),
};

type LoaderState = "checking" | "visible" | "hidden";

export function PageLoader() {
  const shouldReduceMotion = useReducedMotion();
  const [state, setState] = useState<LoaderState>("checking");
  // React Strict Mode intentionally re-runs effects once in development to
  // surface bugs like this one: without this guard, the second invocation
  // reads back the sessionStorage flag the first invocation just wrote,
  // and immediately flips the loader to "hidden" before it's ever seen.
  const hasDecidedRef = useRef(false);

  useEffect(() => {
    if (hasDecidedRef.current) return;
    hasDecidedRef.current = true;

    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of an external browser API on mount, not derived state
      setState("hidden");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setState("visible");
  }, []);

  useEffect(() => {
    if (state !== "visible") return;

    document.body.style.overflow = "hidden";
    const holdMs = shouldReduceMotion ? 200 : 1500;
    const timer = window.setTimeout(() => setState("hidden"), holdMs);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [state, shouldReduceMotion]);

  // Nothing to show before the sessionStorage check resolves, and nothing
  // to show at all once this session has already seen it once.
  if (state === "checking") return null;

  const isVisible = state === "visible";
  const name = profile.name.split("");

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {isVisible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-primary"
        >
          <motion.div
            initial={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="flex items-center gap-1 overflow-hidden"
          >
            {name.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                initial={shouldReduceMotion ? undefined : "hidden"}
                animate={shouldReduceMotion ? undefined : "show"}
                variants={letterVariants}
                className="font-display text-4xl font-semibold tracking-tight text-ink-primary sm:text-6xl"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
