import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SectionLabel, DraftBadge } from "@/components/site/editorial";

export const Route = createFileRoute("/teardowns")({
  head: () => ({
    meta: [
      { title: "Product Teardowns — Product Lab" },
      {
        name: "description",
        content:
          "Outside-in product teardowns by Ruchi Parikh: observed behavior, hypotheses, and what I'd test — clearly separated.",
      },
      { property: "og:title", content: "Product Teardowns — Product Lab" },
      {
        property: "og:description",
        content: "Outside-in teardowns: observed behavior, hypotheses, and what I'd test — clearly separated.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeardownsPage,
});

const blocks: {
  label: string;
  kind: "observed" | "hypothesis" | "neutral";
  body?: string[];
  list?: string[];
}[] = [
  {
    label: "Who it serves",
    kind: "neutral",
    body: [
      "Listeners who want music everywhere without managing files — and artists and labels who need reach. Two-sided in practice, though most of the visible product decisions live on the listener side.",
    ],
  },
  {
    label: "The problem I think it solves",
    kind: "hypothesis",
    body: [
      "“I want the right music right now, without owning any of it.” Discovery quietly solves a second problem people didn't know they had: “I don't even know what I want.”",
    ],
  },
  {
    label: "What works well",
    kind: "observed",
    body: [
      "The distance from opening the app to hearing music is remarkably short — search and play take seconds, and playlists make the decision for you when you'd rather not make it.",
      "The free tier is a real product, not a crippled demo. It teaches the habit first and sells the upgrade later, which I think is a much smarter sequence than most paywalls manage.",
      "Picking up where you left off across devices just works, without ceremony.",
    ],
  },
  {
    label: "Where I see friction",
    kind: "observed",
    body: [
      "Discovery can feel like a loop that keeps serving the person you were last month. I suspect the recommendations optimize for “safe next track” more than “interesting next track.”",
      "Playlists accumulate with no real strategy for pruning, and over time the library gets harder to navigate — a problem the product seems in no hurry to solve.",
      "The free tier's interruptions are aggressive enough that I'd guess some users leave rather than upgrade. That may be a deliberate, profitable trade-off — or a leak.",
    ],
  },
  {
    label: "My hypothesis",
    kind: "hypothesis",
    body: [
      "I suspect Spotify's real moat isn't the catalog — most services have roughly the same songs. It's the accumulated model of your taste plus the habit loop built around it. Switching costs here are psychological, not technical.",
    ],
  },
  {
    label: "What I would test",
    kind: "hypothesis",
    list: [
      "Whether deliberately risky discovery — a “surprise me” mode — raises long-term retention even if short-term skip rates go up.",
      "Whether pruning tools (archive, auto-clean stale playlists) reduce library abandonment.",
      "Whether the free tier's interruption pattern converts listeners — or quietly corrodes the habit it's supposed to monetize.",
    ],
  },
  {
    label: "What I would measure",
    kind: "neutral",
    list: [
      "Discovery diversity vs. 60–90 day retention.",
      "Playlist creation vs. playlist abandonment.",
      "Free-tier session length before and after interruption changes.",
      "Upgrade conversion by acquisition cohort.",
    ],
  },
  {
    label: "What I don't know",
    kind: "hypothesis",
    body: [
      "Almost everything internal: actual churn data, how recommendations are weighted, what the upgrade funnel really looks like. Everything above is outside-in reasoning from publicly observable behavior — informed guessing, clearly labeled as such.",
    ],
  },
];

function kindTone(kind: "observed" | "hypothesis" | "neutral") {
  if (kind === "observed") return { marker: "text-moss", text: "What I can see" };
  if (kind === "hypothesis") return { marker: "text-signal", text: "Informed guessing" };
  return { marker: "text-muted-foreground", text: "Context" };
}

function TeardownsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="Thinking · Product Teardowns" title="Product Teardowns">
          <p>
            Outside-in teardowns of products I use, based only on publicly observable behavior.
            What I can see, what I suspect, and what I don't know are kept deliberately separate
            — because the most useful part of a teardown is knowing which is which.
          </p>
        </PageIntro>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="label-mono inline-flex items-center rounded-sm border border-border bg-muted px-2 py-0.5 text-[0.625rem] text-muted-foreground">
          Replaceable example — the product will rotate
        </span>
        <span className="label-mono inline-flex items-center rounded-sm border border-border bg-muted px-2 py-0.5 text-[0.625rem] text-muted-foreground">
          Not insider knowledge
        </span>
      </div>

      <article className="mt-10">
        <header className="border-b border-border pb-8">
          <SectionLabel>Teardown 01</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Spotify
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Free and premium tiers, mobile-first. Observed as a user, thought about as a product
            person.
          </p>
        </header>

        <div className="mt-10 space-y-12">
          {blocks.map((block) => {
            const tone = kindTone(block.kind);
            return (
              <section key={block.label}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                    {block.label}
                  </h3>
                  <span className={`label-mono text-[0.625rem] ${tone.marker}`}>{tone.text}</span>
                </div>
                <div className="mt-4 border-l-2 border-border pl-5">
                  {block.body?.map((p, i) => (
                    <p key={i} className="text-[1.0625rem] leading-relaxed text-foreground/90">
                      {block.kind === "hypothesis" && <span className="sr-only">Hypothesis: </span>}
                      {p}
                    </p>
                  ))}
                  {block.list && (
                    <ul className="space-y-2.5">
                      {block.list.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[1.0625rem] leading-relaxed">
                          <span className="label-mono mt-1 text-moss">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </article>

      <div className="mt-14 rounded-md border border-border bg-card p-6">
        <div className="flex flex-wrap items-center gap-2">
          <SectionLabel>A note on method</SectionLabel>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          I suspect, I hypothesize, I'd want to validate — because from the outside, that's what
          every claim in a teardown is. The discipline I'm practicing here is refusing to let a
          plausible story dress itself up as a finding.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          More teardowns will land here as I find products with a specific question worth examining.
        </p>
      </div>
    </div>
  );
}
