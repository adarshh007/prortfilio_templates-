import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="border-t border-border py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading title="Certifications" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.name}
              className="rounded-lg border border-border bg-surface-card p-5"
            >
              <h3 className="font-medium text-ink-primary">{certificate.name}</h3>
              {certificate.issuer && (
                <p className="mt-1 text-sm text-ink-secondary">{certificate.issuer}</p>
              )}
              {certificate.date && (
                <p className="mt-1 font-mono text-xs text-ink-muted">{certificate.date}</p>
              )}
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-signal hover:underline"
                >
                  View credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
