import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { profile } from "@/data/profile";

export function Github() {
  return (
    <section id="github" className="border-t border-border py-24 sm:py-32">
      <div className="container-content flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <SectionHeading
            title="GitHub"
            description="Projects, repositories, and ongoing coding activity."
          />
        </div>

        <Button href={profile.github} external>
          <BrandMark label="gh" size={16} />
          View profile
        </Button>
      </div>
    </section>
  );
}
