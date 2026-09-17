import { useMemo, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type Feature = {
  id: string;
  title: string;
  blurb: string;
  defaultInMvp: boolean;
  mvpWhy: string;
  deferredWhy: string;
};

const riskiestAssumption =
  "the riskiest assumption: people will faithfully log what they buy. Without that habit, everything else in Pantry is decoration.";

const features: Feature[] = [
  {
    id: "signup",
    title: "Email sign-up",
    blurb: "Simple account creation.",
    defaultInMvp: true,
    mvpWhy: "Fine to include — any low-friction auth works. This isn't where the learning is, but everyone needs a door.",
    deferredWhy: "You still need some account to persist a pantry. Pick the cheapest one and move on.",
  },
  {
    id: "manual-log",
    title: "Manual pantry logging",
    blurb: "Type in what you bought, with expiry dates if you know them.",
    defaultInMvp: true,
    mvpWhy: "Core. The willingness to log — or not — is exactly what you're testing. Make it as fast as possible and watch what people actually do.",
    deferredWhy: "Without a way to log items, the core assumption never gets tested. This is the experiment.",
  },
  {
    id: "reminders",
    title: "Expiry reminders",
    blurb: "A nudge before something goes bad.",
    defaultInMvp: true,
    mvpWhy: "The mechanism you're validating. If reminders don't change behavior, Pantry doesn't work — better to learn that with three features than eight.",
    deferredWhy: "This is the thing you're testing. Without it, there's nothing to learn about.",
  },
  {
    id: "barcode",
    title: "Barcode scanning",
    blurb: "Scan the package to add an item.",
    defaultInMvp: false,
    mvpWhy: "Convenience could rescue logging — but if nobody logs manually, scanning probably won't save it, and you've spent your build budget finding out late.",
    deferredWhy: "Convenience helps retention later. Manual logging also tests willingness — if nobody logs by hand, the friction wasn't the real barrier.",
  },
  {
    id: "recipes",
    title: "Recipe suggestions from what's expiring",
    blurb: "“You have spinach and eggs — here's dinner.”",
    defaultInMvp: false,
    mvpWhy: "A genuine value moment, and arguably why people stay. But it only matters once people log and return — build it after the habit is proven.",
    deferredWhy: "Delightful, but it depends on the logging habit existing first. Sequence it second.",
  },
  {
    id: "grocery-list",
    title: "Shared grocery list",
    blurb: "Add running-low items to a list.",
    defaultInMvp: false,
    mvpWhy: "A real adjacent workflow, but it doesn't answer the core question. Tempting to include because it feels useful — that's exactly the pattern to watch in yourself.",
    deferredWhy: "Adjacent, not core. It can wait until the logging-and-reminder loop is proven.",
  },
  {
    id: "household",
    title: "Shared household pantry",
    blurb: "Everyone in the home sees the same pantry.",
    defaultInMvp: false,
    mvpWhy: "Powerful eventually, but it multiplies the work and splits your learning signal — now you're testing coordination, not logging. And it needs two users to even evaluate.",
    deferredWhy: "Two-user features double the complexity and blur the learning. One person logging is already the experiment.",
  },
  {
    id: "analytics",
    title: "Pantry analytics dashboard",
    blurb: "Waste trends, spending stats, pretty charts.",
    defaultInMvp: false,
    mvpWhy: "You don't have behavior data yet — analytics on day one measure a product nobody uses. This is the classic feature that demos well and teaches nothing.",
    deferredWhy: "Analytics need history, which an MVP by definition doesn't have. Later.",
  },
];

type Verdict = { tone: "good" | "warn" | "bad"; text: string };

function analyze(selected: Set<string>): Verdict[] {
  const verdicts: Verdict[] = [];

  if (!selected.has("manual-log")) {
    verdicts.push({
      tone: "bad",
      text: "Without a way to log items, nothing gets tested — the MVP can't produce the learning you need, no matter how small it is.",
    });
  }
  if (!selected.has("reminders") && selected.has("manual-log")) {
    verdicts.push({
      tone: "warn",
      text: "You can log, but nothing nudges. The mechanism you wanted to validate isn't in the build — what would this version prove?",
    });
  }
  if (selected.has("manual-log") && selected.has("reminders")) {
    verdicts.push({
      tone: "good",
      text: "Log + nudge is the smallest loop that can actually answer the question: will people maintain a pantry, and do reminders change what they throw away?",
    });
  }
  if (selected.has("household")) {
    verdicts.push({
      tone: "warn",
      text: "Shared household pantry needs at least two engaged users to even evaluate — you've added coordination work before proving a single user cares.",
    });
  }
  if (selected.has("analytics")) {
    verdicts.push({
      tone: "warn",
      text: "Analytics on an MVP measure a product nobody uses yet. There's no history to analyze — this is build cost with no learning attached.",
    });
  }
  if (selected.has("barcode") && selected.size >= 5) {
    verdicts.push({
      tone: "warn",
      text: "That's a wide build. Barcode scanning is polish on the logging experience — worth having eventually, but it delays the day you learn anything.",
    });
  }
  if (selected.size <= 2) {
    verdicts.push({
      tone: "warn",
      text: "Very lean. Leanness isn't automatically a virtue — check that this version can still deliver a real experience, not just a hypothesis with a UI.",
    });
  }
  if (selected.size >= 7) {
    verdicts.push({
      tone: "bad",
      text: "That's not an MVP — that's the roadmap. What's the one question this version answers that a smaller one couldn't?",
    });
  }
  return verdicts;
}

const toneStyles: Record<Verdict["tone"], string> = {
  good: "border-moss/40 bg-moss/5",
  warn: "border-signal/40 bg-signal/5",
  bad: "border-signal/60 bg-signal/10",
};

export function MvpLab() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(features.filter((f) => f.defaultInMvp).map((f) => f.id)),
  );

  const verdicts = useMemo(() => analyze(selected), [selected]);
  const inMvp = features.filter((f) => selected.has(f.id));
  const deferred = features.filter((f) => !selected.has(f.id));

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="label-mono text-signal">Scenario</p>
          <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-foreground">
            Pantry — an app that tracks what's in your kitchen and nudges you before food expires.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Engineering capacity exists for roughly three features. Which ones earn a spot in the
            MVP — and which get deferred?
          </p>
        </div>

        <p className="label-mono mt-8 text-muted-foreground">Choose your MVP</p>
        <div className="mt-3 space-y-2">
          {features.map((feature) => {
            const checked = selected.has(feature.id);
            return (
              <label
                key={feature.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                  checked
                    ? "border-moss/50 bg-moss/5"
                    : "border-border bg-card hover:border-foreground/30"
                }`}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) =>
                    setSelected((prev) => {
                      const next = new Set(prev);
                      if (v) next.add(feature.id);
                      else next.delete(feature.id);
                      return next;
                    })
                  }
                  className="mt-0.5"
                  aria-label={feature.title}
                />
                <span>
                  <span className="block font-medium text-foreground">{feature.title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {feature.blurb}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <aside className="lg:col-span-2">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="label-mono text-muted-foreground">Your cut</p>
            <p className="mt-3 text-sm leading-relaxed">
              <span className="font-medium text-moss">In the MVP:</span>{" "}
              {inMvp.length > 0
                ? inMvp.map((f) => f.title).join(", ") + "."
                : "nothing selected yet."}
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              <span className="font-medium text-muted-foreground">Deferred:</span>{" "}
              {deferred.length > 0
                ? deferred.map((f) => f.title).join(", ") + "."
                : "nothing deferred — bold, but is it wise?"}
            </p>
          </div>

          {verdicts.length > 0 && (
            <div className="space-y-2">
              {verdicts.map((v, i) => (
                <div key={i} className={`rounded-lg border p-4 ${toneStyles[v.tone]}`}>
                  <p className="text-sm leading-relaxed text-foreground/90">{v.text}</p>
                </div>
              ))}
            </div>
          )}

          <div className="rounded-lg border border-border bg-card p-5">
            <p className="label-mono text-muted-foreground">Why this is the exercise</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The goal of an MVP isn't simply to build less. It's to learn something important
              with the smallest useful product — which means you start from the assumption you
              need to test, not from the feature list you'd like to ship.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For Pantry, that's {riskiestAssumption}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
