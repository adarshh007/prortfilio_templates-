"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export function Projects() {
  // Filter chips only cover categories that actually have a project —
  // showing all five suggested categories when two are empty would
  // misrepresent the amount of work done in each.
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.category)));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading title="Projects" />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "rounded-md border px-3.5 py-1.5 text-sm transition-colors",
                activeCategory === category
                  ? "border-signal text-signal"
                  : "border-border text-ink-secondary hover:text-ink-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
