import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { PageIntro, SectionLabel } from "@/components/site/editorial";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Route = createFileRoute("/ai-skills")({
  head: () => ({
    meta: [
      { title: "AI & Product Skills — Ruchi Parikh" },
      { name: "description", content: "A grounded view of the AI product questions Ruchi Parikh is exploring through quality, data, APIs, and RAG." },
      { property: "og:title", content: "AI & Product Skills — Ruchi Parikh" },
      { property: "og:description", content: "AI product thinking grounded in quality, data validation, APIs, and RAG." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiSkillsPage,
});

const skills = [
  { number: "01", title: "Problem fit", question: "Should this be AI?", body: "I start with the job and the cost of failure. If a simple rule solves it well, adding AI may only add uncertainty.", check: "Compare an AI approach with the simplest credible alternative." },
  { number: "02", title: "Source quality", question: "Can the answer be trusted?", body: "Retrieval quality, stale documents, conflicting sources, and missing context shape trust as much as the model response does.", check: "Trace the answer to its source and test missing or contradictory context." },
  { number: "03", title: "Evaluation", question: "What does good mean?", body: "I would define representative cases, failure classes, human review points, and an acceptable threshold before calling the feature useful.", check: "Build an evaluation set from realistic tasks, including awkward edge cases." },
  { number: "04", title: "System constraints", question: "What can break upstream?", body: "My background in APIs, SQL, and data validation helps me ask where an answer came from—and what might have broken upstream.", check: "Test the data path, not only the final wording." },
  { number: "05", title: "Failure experience", question: "What happens when it is wrong?", body: "Confidence, citation, fallback, correction, and “I don’t know” states are product decisions, not cleanup after the model is chosen.", check: "Design a safe fallback before optimizing the happy path." },
  { number: "06", title: "Useful behavior", question: "Did it help someone finish?", body: "Usage alone is weak evidence. I would look for task completion, correction rates, repeat use, time saved, and the cost of wrong answers.", check: "Pair adoption with an outcome and a failure guardrail." },
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
      <section className="relative mt-12">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" aria-hidden="true" />
        <div className="grid gap-5 lg:grid-cols-2">
        {skills.map((skill) => (
          <Dialog key={skill.number}>
            <DialogTrigger asChild>
              <Button variant="outline" className="group h-36 w-full items-stretch justify-between rounded-sm bg-card p-6 text-left hover:border-cyan hover:bg-accent">
                <span className="flex flex-col items-start justify-between">
                  <span className="label-mono text-cyan">{skill.number} · {skill.title}</span>
                  <span className="font-display text-xl font-semibold leading-snug text-foreground">{skill.question}</span>
                </span>
                <ChevronRight className="mt-auto size-5 text-muted-foreground group-hover:text-cyan" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto border-cyan/40 bg-card sm:max-w-xl">
              <DialogHeader>
                <p className="label-mono text-cyan">{skill.number} · {skill.title}</p>
                <DialogTitle className="pt-2 font-display text-3xl leading-tight">{skill.question}</DialogTitle>
                <DialogDescription className="pt-3 text-base leading-7">{skill.body}</DialogDescription>
              </DialogHeader>
              <div className="mt-3 border-l-2 border-cyan pl-4">
                <p className="label-mono text-muted-foreground">How I would check</p>
                <p className="mt-2 text-sm leading-6 text-foreground">{skill.check}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
        </div>
      </section>
      <section className="mt-16 flex flex-col justify-between gap-6 border-y border-border py-8 sm:flex-row sm:items-center">
        <div><SectionLabel>Related note</SectionLabel><p className="mt-2 text-lg text-foreground">What makes an AI feature actually useful?</p></div>
        <Link to="/notes/$slug" params={{ slug: "what-makes-an-ai-feature-useful" }} className="inline-flex items-center gap-2 text-sm font-medium text-cyan">Read my thinking <ArrowUpRight className="size-4" /></Link>
      </section>
    </div>
  );
}