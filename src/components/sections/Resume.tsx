import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Resume() {
  return (
    <section id="resume" className="border-t border-border py-24 sm:py-32">
      <div className="container-content text-center">
        <SectionHeading title="Interested in my work?" />
        <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-ink-secondary">
          Download my resume and learn more about my skills, projects, education, and experience.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={profile.resumeUrl} external>
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
