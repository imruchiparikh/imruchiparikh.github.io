import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SectionLabel } from "@/components/site/editorial";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Ruchi Parikh" },
      {
        name: "description",
        content:
          "AIPMM Certified Digital Product Manager (CDPM) and Certified Scrum Product Owner (CSPO) — kept in perspective.",
      },
      { property: "og:title", content: "Certifications — Ruchi Parikh" },
      {
        property: "og:description",
        content: "AIPMM CDPM and CSPO — kept in perspective.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificationsPage,
});

const certs = [
  {
    name: "AIPMM Certified Digital Product Manager",
    abbr: "CDPM",
    note: "Structured the product fundamentals: discovery, strategy, delivery, and the vocabulary that makes trade-offs discussable.",
  },
  {
    name: "Certified Scrum Product Owner",
    abbr: "CSPO",
    note: "How product intent survives contact with delivery: backlogs, priorities, iteration, and the discipline of the cut.",
  },
];

function CertificationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="About · Certifications" title="Certifications" />
      </div>

      <div className="mt-12 space-y-4">
        {certs.map((cert) => (
          <div
            key={cert.abbr}
            className="flex flex-col gap-1 rounded-lg border border-border bg-card p-6 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="label-mono w-16 shrink-0 text-moss">{cert.abbr}</span>
            <div>
              <h2 className="font-display text-lg font-medium tracking-tight text-foreground">
                {cert.name}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{cert.note}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Useful, not the point. The programs gave structure; the thinking itself happens in the
        open —{" "}
        <Link
          to="/notes"
          className="underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          in the notes
        </Link>{" "}
        and in{" "}
        <Link
          to="/workflow"
          className="underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          how I approach product work
        </Link>
        .
      </p>
    </div>
  );
}
