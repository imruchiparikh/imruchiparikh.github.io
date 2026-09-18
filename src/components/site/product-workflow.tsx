import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
  return (
    <div className="relative">
      <div className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-border lg:block" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {workflow.map((step) => (
          <Dialog key={step.label}>
            <DialogTrigger asChild>
              <Button type="button" variant="outline" className="group relative z-10 h-28 flex-col items-start justify-between rounded-sm bg-card px-4 py-4 text-left hover:border-cyan hover:bg-accent">
                <span className="flex w-full items-center justify-between"><span className="label-mono text-cyan">{step.number}</span><ChevronRight className="size-4 text-muted-foreground group-hover:text-cyan" /></span>
                <span className="text-sm font-semibold text-foreground">{step.label}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto border-cyan/40 bg-card sm:max-w-2xl">
              <DialogHeader>
                <p className="label-mono text-cyan">Step {step.number} · {step.label}</p>
                <DialogTitle className="pt-2 font-display text-3xl leading-tight">{step.title}</DialogTitle>
                <DialogDescription className="pt-3 text-base leading-7">{step.detail}</DialogDescription>
              </DialogHeader>
              <div className="mt-3 border-l-2 border-cyan pl-4">
                <p className="label-mono text-muted-foreground">Output</p>
                <p className="mt-2 flex gap-3 text-sm leading-6 text-foreground"><Check className="mt-1 size-4 shrink-0 text-cyan" />{step.output}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}