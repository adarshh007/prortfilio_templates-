"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: only lights up once the corresponding section exists in the
  // DOM. Phase 1 ships no sections beyond Hero, so every link starts inert —
  // this activates automatically as Phases 2–5 add their sections.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "border-b border-border bg-surface-primary/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-primary"
        >
          {profile.name.toUpperCase()}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary",
                  activeHref === link.href && "text-ink-primary"
                )}
              >
                {link.label}
                {activeHref === link.href && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-[5px] left-0 right-0 h-[2px] bg-signal"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={profile.resumeUrl} variant="secondary" external>
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="text-ink-primary md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-surface-primary md:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-base font-medium text-ink-secondary transition-colors hover:text-ink-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button href={profile.resumeUrl} variant="secondary" external className="w-full">
                  Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
