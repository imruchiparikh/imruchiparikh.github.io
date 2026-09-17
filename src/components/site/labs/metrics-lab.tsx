import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories: {
  id: string;
  label: string;
  framing: string;
  questions: string[];
}[] = [
  {
    id: "acquisition",
    label: "Acquisition",
    framing: "Is the dip in new users arriving — or in what they do after arriving?",
    questions: [
      "Did a top acquisition channel change volume — or quality?",
      "Did a campaign end, a referral loop slow down, or an ad set get turned off?",
      "Are we still acquiring the same kind of user, or a different mix that behaves differently?",
      "If sign-ups held steady but activity fell, what did those new users actually experience?",
    ],
  },
  {
    id: "activation",
    label: "Activation",
    framing: "Are the people who arrive still becoming users?",
    questions: [
      "Did onboarding completion change — and did it change for everyone, or a segment?",
      "Did something recently ship near the first-session experience?",
      "Is activation slower, lower, or broken anywhere — a specific platform, browser, or device?",
      "If completion held but first meaningful action didn't, what did “meaningful” look like last month?",
    ],
  },
  {
    id: "engagement",
    label: "Engagement",
    framing: "Are the users who stayed still using the product the same way?",
    questions: [
      "Are sessions shorter, fewer, or both?",
      "Did usage of a core feature shift — or did usage of everything shift together?",
      "Is the drop uniform, or concentrated in platforms, regions, app versions, or account types?",
      "Did anything outside the product change — a school term ending, a season, a competing launch?",
    ],
  },
  {
    id: "retention",
    label: "Retention",
    framing: "Are existing users coming back less often — and since when, exactly?",
    questions: [
      "Are established users returning less often, or did established usage stay flat while new-user quality fell?",
      "Is the problem concentrated in a specific cohort — users who joined in a particular week or month?",
      "When did the cohort curves last look normal? The answer dates the change better than any average.",
      "Are the users who left similar to users who stayed — or does the difference point at the cause?",
    ],
  },
];

export function MetricsLab() {
  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="label-mono text-signal">Scenario</p>
          <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-foreground">
            NoteNest — a notes app for university students — just saw weekly active users drop
            noticeably over two weeks.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            You have access to the same dashboards the team does, and no memory of what changed
            recently. Where do you look first?
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Fictional product. No real numbers — this is a thinking exercise, not a case study.
          </p>
        </div>

        <div className="mt-8">
          <Accordion type="multiple" className="w-full">
            {categories.map((cat) => (
              <AccordionItem key={cat.id} value={cat.id} className="border-border">
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-baseline gap-3 text-left">
                    <span className="font-display text-lg font-medium tracking-tight text-foreground">
                      {cat.label}
                    </span>
                    <span className="hidden text-sm text-muted-foreground sm:inline">
                      {cat.framing}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-sm italic text-muted-foreground sm:hidden">
                    {cat.framing}
                  </p>
                  <ul className="space-y-2.5">
                    {cat.questions.map((q, i) => (
                      <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                        <span className="label-mono mt-1 shrink-0 text-moss">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <aside className="lg:col-span-2">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-lg border-2 border-moss/40 bg-moss/5 p-5">
            <p className="label-mono text-moss">Where I'd start — before all of this</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              “Is the drop real?” Half of the weird metric movements I've seen up close were
              tracking problems or data pipeline issues, not behavior changes. Confirm the
              instrument before diagnosing the patient.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              This instinct comes from years of data validation work — and it transfers to product
              more than I expected.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <p className="label-mono text-muted-foreground">How to use this</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Real drops rarely respect these four boundaries — the categories are a sequence for
              your questions, not a diagnosis. The point is to replace “I think the drop is
              because of X” with “the first thing I'd check is whether X could even show up in
              this data.”
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              And notice which questions could be answered with a query versus which ones need a
              conversation with the team. That split is usually where the real work starts.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
