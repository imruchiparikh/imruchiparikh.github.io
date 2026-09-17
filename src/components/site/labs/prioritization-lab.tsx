import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";

type Item = {
  id: string;
  title: string;
  note: string;
  uv: number; // user value
  bv: number; // business value
  effort: number;
  conf: number; // confidence
};

const initialItems: Item[] = [
  {
    id: "double-booking",
    title: "Fix the double-booking bug on mobile",
    note: "Some lessons get booked twice when tutors confirm from a phone.",
    uv: 5,
    bv: 4,
    effort: 1,
    conf: 5,
  },
  {
    id: "onboarding",
    title: "Guided onboarding checklist",
    note: "New tutors set up availability, policies, and payment in one flow.",
    uv: 3,
    bv: 3,
    effort: 2,
    conf: 3,
  },
  {
    id: "calendar-sync",
    title: "Google Calendar sync",
    note: "Two-way sync so lessons never collide with personal events.",
    uv: 4,
    bv: 4,
    effort: 4,
    conf: 4,
  },
  {
    id: "referrals",
    title: "Referral program",
    note: "Give a free month, get a free month.",
    uv: 2,
    bv: 5,
    effort: 3,
    conf: 2,
  },
  {
    id: "pricing-page",
    title: "Pricing page rewrite",
    note: "Clearer plans; the current page buries the main tier.",
    uv: 1,
    bv: 3,
    effort: 2,
    conf: 2,
  },
  {
    id: "offline",
    title: "Offline mode",
    note: "Lesson notes accessible with a weak connection.",
    uv: 3,
    bv: 2,
    effort: 5,
    conf: 2,
  },
];

function score(item: Item) {
  return ((item.uv + item.bv) / 2) * (item.conf / 5) * (4 / item.effort);
}

function maxScore() {
  return initialItems.reduce((m, item) => Math.max(m, score(item)), 0);
}

function rankMap(items: Item[]) {
  const sorted = [...items].sort((a, b) => score(b) - score(a));
  return new Map(sorted.map((item, i) => [item.id, i]));
}

function DimensionSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="label-mono w-20 shrink-0 text-[0.5625rem] text-muted-foreground">
        {label}
      </span>
      <Slider
        min={1}
        max={5}
        step={1}
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        aria-label={label}
        className="w-28"
      />
      <span className="w-4 text-right font-mono text-xs text-muted-foreground">{value}</span>
    </div>
  );
}

export function PrioritizationLab() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const baseline = useMemo(() => rankMap(initialItems), []);
  const current = useMemo(() => rankMap(items), [items]);
  const max = useMemo(() => maxScore(), []);

  const ranked = [...items].sort((a, b) => score(b) - score(a));

  const movers = items
    .map((item) => {
      const before = baseline.get(item.id)!;
      const after = current.get(item.id)!;
      return { item, delta: before - after, before, after };
    })
    .filter((m) => m.delta !== 0)
    .sort((a, b) => b.delta - a.delta);

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <p className="label-mono text-muted-foreground">Your prioritization</p>
        <div className="mt-4 space-y-3">
          {ranked.map((item, i) => {
            const before = baseline.get(item.id)!;
            const delta = before - i;
            const s = score(item);
            return (
              <div key={item.id} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-baseline gap-3">
                  <span className="label-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base font-medium tracking-tight text-foreground">
                    {item.title}
                  </span>
                  {delta !== 0 && (
                    <span
                      className={`label-mono text-[0.625rem] ${
                        delta > 0 ? "text-moss" : "text-signal"
                      }`}
                      title={`Was #${before + 1}`}
                    >
                      {delta > 0 ? "▲" : "▼"} {Math.abs(delta)}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-moss/70 transition-all duration-300"
                    style={{ width: `${(s / max) * 100}%` }}
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  <DimensionSlider
                    label="User value"
                    value={item.uv}
                    onChange={(v) =>
                      setItems((prev) =>
                        prev.map((it) => (it.id === item.id ? { ...it, uv: v } : it)),
                      )
                    }
                  />
                  <DimensionSlider
                    label="Business"
                    value={item.bv}
                    onChange={(v) =>
                      setItems((prev) =>
                        prev.map((it) => (it.id === item.id ? { ...it, bv: v } : it)),
                      )
                    }
                  />
                  <DimensionSlider
                    label="Effort"
                    value={item.effort}
                    onChange={(v) =>
                      setItems((prev) =>
                        prev.map((it) => (it.id === item.id ? { ...it, effort: v } : it)),
                      )
                    }
                  />
                  <DimensionSlider
                    label="Confidence"
                    value={item.conf}
                    onChange={(v) =>
                      setItems((prev) =>
                        prev.map((it) => (it.id === item.id ? { ...it, conf: v } : it)),
                      )
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setItems(initialItems)}
          className="mt-4 text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          Reset to starting scores
        </button>
      </div>

      <aside className="lg:col-span-2">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="label-mono text-muted-foreground">What changed?</p>
            {movers.length === 0 ? (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nothing has moved yet. Drag any slider — then notice which single number moves the
                whole ranking. It's rarely the one you'd expect.
              </p>
            ) : (
              <ul className="mt-3 space-y-3">
                {movers.slice(0, 4).map(({ item, delta, before, after }) => (
                  <li key={item.id} className="text-sm leading-relaxed">
                    <span
                      className={`font-medium ${delta > 0 ? "text-moss" : "text-signal"}`}
                    >
                      {delta > 0 ? "Up" : "Down"} #{before + 1} → #{after + 1}:
                    </span>{" "}
                    <span className="text-muted-foreground">{item.title}.</span>{" "}
                    <span className="text-muted-foreground/80">
                      {delta > 0
                        ? "Its score is doing more work than its cost."
                        : "Its cost is eating its value."}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <p className="label-mono text-muted-foreground">The trade-offs hiding in the math</p>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Confidence is a multiplier.</span>{" "}
                The formula treats a low-confidence bet as almost worthless — watch what happens
                to the referral program when you push it to 5. Is that judgment, or optimism?
              </li>
              <li>
                <span className="font-medium text-foreground">Effort divides.</span> A huge,
                valuable idea can lose to a small fix. Sometimes that's right. Sometimes it means
                you never attempt anything ambitious.
              </li>
              <li>
                <span className="font-medium text-foreground">User and business value average out.</span>{" "}
                A 5/1 and a 1/5 look identical to the formula. They are not identical as products.
              </li>
              <li>
                <span className="font-medium text-foreground">No dependencies.</span> Real
                roadmaps have sequencing — sync might unblock offline mode. This model can't see
                that. Neither can most spreadsheets.
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
              The formula is a starting point for a conversation, not a truth. If a number changes
              your mind instantly, ask why the conversation was that close.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
