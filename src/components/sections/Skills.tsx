import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories, currentlyLearning } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading title="Skills" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-medium text-ink-primary">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-dashed border-border-strong p-6 sm:p-8">
          <h3 className="text-sm font-medium text-ink-primary">{currentlyLearning.title}</h3>
          <p className="mt-2 max-w-prose text-sm text-ink-muted">{currentlyLearning.context}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {currentlyLearning.topics.map((topic) => (
              <SkillBadge key={topic} label={topic} variant="learning" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
