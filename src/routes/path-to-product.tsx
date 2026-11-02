import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/editorial";

export const Route = createFileRoute("/path-to-product")({
  head: () => ({
    meta: [
      { title: "My Path to Product — Ruchi Parikh" },
      {
        name: "description",
        content:
          "How more than eight years in software quality engineering developed alongside a lasting interest in product thinking.",
      },
      { property: "og:title", content: "My Path to Product — Ruchi Parikh" },
      {
        property: "og:description",
        content: "How quality engineering and product thinking have developed alongside each other over more than eight years.",
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
    body: "More than eight years in software quality engineering taught me to look beyond whether a feature technically works. Even while testing, I was drawn to the product questions around it: who needs this, what problem does it solve, and what makes the experience worth returning to? Quality and product thinking have grown alongside each other for me rather than one replacing the other.",
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
    label: "CSPO",
    title: "Certified Scrum Product Owner",
    body: "The Scrum side of the same curiosity: how product decisions survive contact with delivery reality. Backlogs, priorities, and the discipline of choosing what not to do.",
  },
  {
    label: "AIPMM CDPM",
    title: "Certified Digital Product Manager",
    body: "The AIPMM program gave structure to the instincts — vocabulary for trade-offs, frameworks for discovery and delivery. Useful not as a credential to lean on, but because naming a trade-off makes it harder to quietly ignore.",
  },
  {
    label: "Product Management",
    title: "From understanding systems to shaping products",
    body: "The shift into Product Management brought a different perspective to the same problems I had spent years working around. The focus expanded from validating what gets built to understanding what should be built, why it matters, and how it creates value for clients.\nThe work spans product discovery, problem definition, roadmap discussions, and feature delivery. It involves translating client challenges into product opportunities, exploring solutions across customer acquisition and engagement, and bringing structure to ambiguous problems through stakeholder research, user journeys, and PRDs.\nWorking closely with clients, Product, Engineering, Data Science, and UX has meant connecting different perspectives throughout the product lifecycle — from early discovery and solution exploration to design decisions, prioritization, and delivery. It has also brought a closer view of how data, technology, and customer behavior come together to shape meaningful product experiences.",
  },
];

function PathPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="About · My Path to Product" title="My Path to Product">
          <p>
            This is not a story of leaving one discipline behind for another. Product questions
            have been part of how I think even while working in QA, and practical product exposure
            gave those questions more structure.
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
    </div>
  );
}
