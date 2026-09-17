import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SectionLabel } from "@/components/site/editorial";

export const Route = createFileRoute("/ai-skills")({
  head: () => ({
    meta: [
      { title: "AI & Product Skills — Product Lab" },
      { name: "description", content: "A grounded view of the AI product questions Ruchi Parikh is exploring through quality, data, APIs, and RAG." },
      { property: "og:title", content: "AI & Product Skills — Product Lab" },
      { property: "og:description", content: "AI product thinking grounded in quality, data validation, APIs, and RAG." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiSkillsPage,
});

const skills = [
  { number: "01", title: "Problem fit before model fit", body: "I start with the job and the cost of failure. If a simple rule solves it well, adding AI may only add uncertainty." },
  { number: "02", title: "RAG and source quality", body: "Retrieval quality, stale documents, conflicting sources, and missing context shape trust as much as the model response does." },
  { number: "03", title: "Evaluation beyond a good demo", body: "I would define representative cases, failure classes, human review points, and an acceptable threshold before calling the feature useful." },
  { number: "04", title: "Data and API constraints", body: "My background in APIs, SQL, and data validation helps me ask where an answer came from—and what might have broken upstream." },
  { number: "05", title: "Failure-aware experience", body: "Confidence, citation, fallback, correction, and “I don’t know” states are product decisions, not cleanup after the model is chosen." },
  { number: "06", title: "Measure useful behavior", body: "Usage alone is weak evidence. I would look for task completion, correction rates, repeat use, time saved, and the cost of wrong answers." },
];

function AiSkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="pt-16 sm:pt-24">
        <PageIntro label="AI & Product Skills" title="The questions behind the feature">
          <p>
            I am interested in AI where it solves a real problem and earns trust over time. My
            technical background gives me a useful angle: I naturally look at the data, the edges,
            and what happens when the system is wrong.
          </p>
        </PageIntro>
      </div>
      <section className="mt-12 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill.number} className="min-h-60 border-b border-r border-border p-6 sm:p-8">
            <p className="label-mono text-cyan">{skill.number}</p>
            <h2 className="mt-8 font-display text-xl font-semibold text-foreground">{skill.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{skill.body}</p>
          </article>
        ))}
      </section>
      <section className="mt-16 flex flex-col justify-between gap-6 border-y border-border py-8 sm:flex-row sm:items-center">
        <div><SectionLabel>Related note</SectionLabel><p className="mt-2 text-lg text-foreground">What makes an AI feature actually useful?</p></div>
        <Link to="/notes/$slug" params={{ slug: "what-makes-an-ai-feature-useful" }} className="inline-flex items-center gap-2 text-sm font-medium text-cyan">Read my thinking <ArrowUpRight className="size-4" /></Link>
      </section>
    </div>
  );
}