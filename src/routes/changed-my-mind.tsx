import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionLabel } from "@/components/site/editorial";

export const Route = createFileRoute("/changed-my-mind")({
  head: () => ({
    meta: [
      { title: "What I Changed My Mind About — Product Lab" },
      {
        name: "description",
        content:
          "Ongoing, honest updates to my own product beliefs: what I used to think, what I think now, and what changed it.",
      },
      { property: "og:title", content: "What I Changed My Mind About — Product Lab" },
      {
        property: "og:description",
        content: "Ongoing, honest updates to my own product beliefs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChangedMyMindPage,
});

const entries = [
  {
    usedTo: "A thorough spec meant fewer surprises.",
    now: "Clarity about the problem matters more than completeness of the spec — the surprises live in the assumptions nobody wrote down.",
    change:
      "Years of test cycles taught me this one: specs that were complete on paper still produced wrong behavior, because an underlying assumption was never validated. Now I read a spec asking not “is anything missing?” but “which of these claims are we just trusting?”",
  },
  {
    usedTo: "The loudest feature request was the most important one.",
    now: "Frequency of a request says more about who's asking than about how widespread the problem is.",
    change:
      "The same complaint can come from very different contexts with very different stakes, and it's tempting to count repetitions as evidence. What actually changed my mind was noticing how often the people who shout are simply the people who shout — while the quiet users route around the problem in ways worth studying.",
  },
  {
    usedTo: "Metrics made decisions objective.",
    now: "Metrics make decisions specific — they choose which blindness you accept.",
    change:
      "Choosing a metric for a test is itself a product decision: it declares what counts as better. I stopped treating the number as the judge and started treating it as one witness — useful, partial, and worth cross-examining.",
  },
];

function ChangedMyMindPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="Thinking · Ongoing" title="What I Changed My Mind About">
          <p>
            Small, honest updates. No dramatic conversions — mostly the slow kind, where a belief
            quietly stops fitting the evidence. This page changes when my thinking actually
            changes, which means slowly.
          </p>
        </PageIntro>
      </div>

      <p className="mt-6">
        <span className="label-mono inline-flex items-center rounded-sm border border-dashed border-signal/50 px-2 py-0.5 text-[0.625rem] text-signal">
          Ongoing drafts — refined as the thinking earns it
        </span>
      </p>

      <div className="mt-10 space-y-10">
        {entries.map((entry, i) => (
          <article key={i} className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <SectionLabel>I used to think…</SectionLabel>
                <p className="mt-2 font-display text-xl font-medium leading-snug tracking-tight text-muted-foreground line-through decoration-border decoration-1">
                  {entry.usedTo}
                </p>
              </div>
              <div>
                <SectionLabel>Now I think…</SectionLabel>
                <p className="mt-2 font-display text-xl font-medium leading-snug tracking-tight text-foreground">
                  {entry.now}
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <SectionLabel>What changed my thinking?</SectionLabel>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-foreground/90">
                  {entry.change}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
        If one of these updates itself in a year, I'll leave the old version up somewhere. Changed
        minds are more convincing when you can see the trail.
      </p>
    </div>
  );
}
