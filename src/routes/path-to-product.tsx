import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/editorial";

export const Route = createFileRoute("/path-to-product")({
  head: () => ({
    meta: [
      { title: "My Path to Product — Ruchi Parikh" },
      {
        name: "description",
        content:
          "From six years in software quality engineering to deliberate product thinking — the honest path, in progress.",
      },
      { property: "og:title", content: "My Path to Product — Ruchi Parikh" },
      {
        property: "og:description",
        content: "From quality engineering to deliberate product thinking — the honest path, in progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PathPage,
});

const steps = [
  {
    label: "Quality Engineering",
    title: "Where it started",
    body: "Six-plus years in software quality engineering. The job trained me to assume the happy path is a lie — and to care, intensely, about what actually happens to the person on the other side of the screen. Somewhere in there, “the software is correct” stopped being the interesting question and “the product is right” became the interesting one.",
  },
  {
    label: "Automation & Technical Depth",
    title: "Learning how systems think",
    body: "Automation work, APIs, SQL, data validation, performance testing. Building systems that verify other systems teaches you a specific kind of humility: most wrong answers are upstream of where anyone is looking. That instinct — check the pipeline before blaming the behavior — shows up constantly in product questions.",
  },
  {
    label: "Product Exposure",
    title: "The questions started changing",
    body: "The more I automated and validated, the more my questions drifted from “does it work?” to “why does this exist, and does it earn its place?” Watching decisions land — and watching which arguments actually moved them — pulled me toward product thinking the long way round: through the work, not around it.",
  },
  {
    label: "AIPMM CDPM",
    title: "Certified Digital Product Manager",
    body: "The AIPMM program gave structure to the instincts — vocabulary for trade-offs, frameworks for discovery and delivery. Useful not as a credential to lean on, but because naming a trade-off makes it harder to quietly ignore.",
  },
  {
    label: "CSPO",
    title: "Certified Scrum Product Owner",
    body: "The Scrum side of the same curiosity: how product decisions survive contact with delivery reality. Backlogs, priorities, and the discipline of choosing what not to do.",
  },
  {
    label: "4-Month Internal PM Program",
    title: "Going deeper, where I work",
    body: "A four-month product management program inside my current company — coursework, case work, and a chance to test whether the thinking holds up under real constraints. Still processing what it changed; the honest draft lives in my notes.",
  },
  {
    label: "Now",
    title: "Continuing to build product thinking",
    body: "I haven't held a Product Manager title yet, and this site doesn't pretend otherwise. What I have is a technical foundation that most product thinking would benefit from, a deliberate and growing practice, and this lab — where the thinking has to survive being written down. The next step is doing it for real. This site is part of how I get there.",
  },
];

function PathPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="About · My Path to Product" title="My Path to Product">
          <p>
            Not a career pivot story with the ending pre-written — a path still being walked.
            Technical work slowly turned me into someone who asks product questions, and the
            programs gave those questions structure.
          </p>
        </PageIntro>
      </div>

      <ol className="mt-14 space-y-0">
        {steps.map((step, i) => (
          <li key={step.label} className="relative grid grid-cols-[1.25rem_1fr] gap-x-5 sm:grid-cols-[10rem_1fr] sm:gap-x-8">
            {/* rail */}
            <div className="relative flex justify-center">
              <div
                className={`w-px flex-1 bg-border ${i === 0 ? "from-transparent" : ""} ${i === steps.length - 1 ? "hidden" : ""} absolute inset-y-0`}
                aria-hidden="true"
              />
              <span
                className={`relative z-10 mt-1.5 size-2.5 rounded-full border-2 ${
                  i === steps.length - 1
                    ? "border-moss bg-moss"
                    : "border-foreground/40 bg-background"
                }`}
                aria-hidden="true"
              />
            </div>
            <div className={i === steps.length - 1 ? "pb-2" : "pb-12"}>
              <p className="label-mono text-moss">{step.label}</p>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground">
                {step.title}
              </h2>
              <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-foreground/90">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-md border border-border bg-card p-6">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          The short version: I'm not a Product Manager yet. I'm a quality engineer with six years
          of systems thinking, two product certifications, a four-month PM program, and a habit of
          writing down what I think —{" "}
          <Link
            to="/notes"
            className="underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            which you can judge for yourself
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
