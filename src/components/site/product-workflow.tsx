import { ArrowDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const workflow = [
  {
    number: "01",
    label: "Problem",
    title: "Name the problem before the feature",
    detail:
      "I learned how tempting it is to think about a solution while the problem is still being discovered. In practice, I want to stay with the behavior, friction, and context long enough to understand what is actually happening and who feels it.",
    output: "A problem statement and the assumptions underneath it.",
  },
  {
    number: "02",
    label: "Evidence",
    title: "Separate signal from a good story",
    detail:
      "The habit I want to practice is simple: never assume, and trust but verify. That means combining conversations, observable behavior, desktop research, and data checks before treating a convincing explanation as evidence.",
    output: "Evidence, unknowns, and a clear confidence level.",
  },
  {
    number: "03",
    label: "PRD",
    title: "Write for decisions, not ceremony",
    detail:
      "A useful PRD should make the problem, user, constraints, success measure, edge cases, and open questions easy for design, engineering, and data partners to challenge. I learned that the document matters most when it improves the conversation around the decision.",
    output: "A concise working PRD that exposes trade-offs.",
  },
  {
    number: "04",
    label: "MVP",
    title: "Choose the smallest useful learning loop",
    detail:
      "The goal is not simply to build less. I want to identify the riskiest assumption, shape enough of the product to test it, and keep quality high enough that a weak experience does not distort what the team learns.",
    output: "A scoped first version and an explicit learning goal.",
  },
  {
    number: "05",
    label: "Measure",
    title: "Decide what better means in advance",
    detail:
      "I learned to discuss the intended behavior and its guardrails before delivery. Instrumentation and data quality belong early in the flow, because a result is only useful when the team can trust what produced it.",
    output: "Success signals, guardrails, and a validation plan.",
  },
  {
    number: "06",
    label: "Learn",
    title: "Compare the result with the original belief",
    detail:
      "The final practice is to return to the original belief: what changed, what did not, and which assumption was wrong? Expanding, revising, or stopping can all be responsible outcomes when the learning is clear.",
    output: "A decision, plus the evidence that supports it.",
  },
];

export function ProductWorkflow() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col">
        {workflow.map((step, index) => (
          <div key={step.label} className="contents">
            <div className={`w-full sm:w-[46%] ${index % 2 === 0 ? "sm:self-start" : "sm:self-end"}`}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="group min-h-28 w-full min-w-0 flex-col items-start justify-between whitespace-normal rounded-sm border-border bg-card px-5 py-4 text-left hover:border-cyan hover:bg-accent"
                  >
                    <span className="label-mono text-cyan">{step.number}</span>
                    <span className="text-base font-semibold text-foreground">{step.label}</span>
                    <span className="text-xs font-normal text-muted-foreground">Open detail</span>
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
            </div>
            {index < workflow.length - 1 ? (
              <div className="flex h-14 items-center justify-center text-cyan" aria-hidden="true">
                <span className="h-full w-px bg-border" />
                <ArrowDown className="absolute size-5 bg-background" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}