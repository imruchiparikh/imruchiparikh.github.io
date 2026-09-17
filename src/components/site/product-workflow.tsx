import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflow = [
  {
    number: "01",
    label: "Problem",
    title: "Name the problem before the feature",
    detail:
      "I would start with the behavior, friction, and context—not a requested solution. What is happening now? Who feels it? What evidence would change my mind?",
    output: "A problem statement and the assumptions underneath it.",
  },
  {
    number: "02",
    label: "Evidence",
    title: "Separate signal from a good story",
    detail:
      "I would combine user conversations, observable behavior, and data checks. My quality background makes me verify the signal before explaining it; a tracking issue can look exactly like a product issue.",
    output: "Evidence, unknowns, and a clear confidence level.",
  },
  {
    number: "03",
    label: "PRD",
    title: "Write for decisions, not ceremony",
    detail:
      "The document should make the problem, user, constraints, success measure, edge cases, and open questions easy to challenge. For AI features, I would also define acceptable failure and when the product should say “I don’t know.”",
    output: "A concise working PRD that exposes trade-offs.",
  },
  {
    number: "04",
    label: "MVP",
    title: "Choose the smallest useful learning loop",
    detail:
      "I would cut anything that does not test the riskiest assumption. The goal is not simply fewer features; it is enough product to produce a trustworthy answer.",
    output: "A scoped first version and an explicit learning goal.",
  },
  {
    number: "05",
    label: "Measure",
    title: "Decide what better means in advance",
    detail:
      "I would pair one primary behavior with guardrails so a metric cannot improve while the experience quietly gets worse. Instrumentation and data quality belong in this conversation early.",
    output: "Success signals, guardrails, and a validation plan.",
  },
  {
    number: "06",
    label: "Learn",
    title: "Compare the result with the original belief",
    detail:
      "After release, I would ask what changed, what did not, and which assumption failed. The next decision could be to expand, revise, or stop. All three are useful outcomes when the learning is clear.",
    output: "A decision, plus the evidence that supports it.",
  },
];

export function ProductWorkflow() {
  const [active, setActive] = useState(0);
  const current = workflow[active];
  if (!current) return null;

  return (
    <div>
      <div className="grid border-y border-border sm:grid-cols-3 lg:grid-cols-6">
        {workflow.map((step, index) => (
          <Button
            key={step.label}
            type="button"
            variant="ghost"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            className={`group h-auto min-h-24 justify-between rounded-none border-b border-border px-4 py-5 text-left sm:border-r lg:border-b-0 ${
              active === index ? "bg-card text-foreground" : "text-muted-foreground"
            }`}
          >
            <span>
              <span className="label-mono block text-cyan">{step.number}</span>
              <span className="mt-3 block text-sm font-medium">{step.label}</span>
            </span>
            <ChevronRight className={`size-4 ${active === index ? "text-cyan" : "opacity-35"}`} />
          </Button>
        ))}
      </div>

      <div className="grid gap-8 bg-card px-6 py-8 md:grid-cols-[1fr_0.62fr] md:px-10 md:py-10">
        <div>
          <p className="label-mono text-cyan">{current.label} · What I would do</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {current.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{current.detail}</p>
        </div>
        <div className="border-l border-border pl-6">
          <p className="label-mono text-muted-foreground">Output</p>
          <p className="mt-3 flex gap-3 text-sm leading-6 text-foreground">
            <Check className="mt-1 size-4 shrink-0 text-cyan" aria-hidden="true" />
            {current.output}
          </p>
        </div>
      </div>
    </div>
  );
}