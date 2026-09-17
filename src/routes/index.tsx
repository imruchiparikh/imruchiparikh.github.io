import { createFileRoute, Link } from "@tanstack/react-router";
import { notes, featuredNote } from "@/lib/site/notes";
import { SectionLabel, SourceAttribution, NoteRow } from "@/components/site/editorial";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Product Lab — Notes, experiments & product thinking" },
      {
        name: "description",
        content:
          "An interactive product-thinking journal by Ruchi Parikh: notes, teardowns, and hands-on product experiments.",
      },
      { property: "og:title", content: "Product Lab — Notes, experiments & product thinking" },
      {
        property: "og:description",
        content:
          "Exploring why products work, where they struggle, and what I'd try next. By Ruchi Parikh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const labs = [
  {
    to: "/lab/prioritization",
    label: "Lab 01",
    title: "Prioritization Lab",
    blurb:
      "Six improvements, limited capacity, four adjustable inputs. Watch the ranking — and the story behind it — shift.",
  },
  {
    to: "/lab/metrics",
    label: "Lab 02",
    title: "Metrics Lab",
    blurb:
      "A fictional usage drop. Explore the questions a product person would ask before trusting any explanation.",
  },
  {
    to: "/lab/mvp",
    label: "Lab 03",
    title: "MVP Lab",
    blurb:
      "Eight features, one risky assumption. Choose the smallest product that still produces a real answer.",
  },
];

function Index() {
  const featured = featuredNote();
  const recent = notes.slice(1, 4);

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      {/* Hero */}
      <section className="pb-16 pt-20 sm:pt-28">
        <SectionLabel>A product-thinking journal</SectionLabel>
        <h1 className="mt-5 font-display text-6xl font-medium leading-[0.95] tracking-tight text-foreground sm:text-7xl">
          Product Lab
        </h1>
        <p className="mt-5 font-display text-2xl font-normal italic text-foreground/90 sm:text-3xl">
          Notes, experiments & product thinking.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          I like understanding why products work, where they struggle, and what I'd try next.
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          I come from six years in software quality engineering — breaking things carefully, it
          turns out, is good training for asking better product questions. This is where I do
          that work in the open.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/notes"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore the Lab
          </Link>
          <Link
            to="/lab/prioritization"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/35"
          >
            Try an experiment
          </Link>
        </div>
      </section>

      {/* Featured note */}
      <section className="border-t border-border py-14">
        <SectionLabel>Featured note</SectionLabel>
        <div className="mt-6 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="label-mono text-moss">{featured.number}</p>
            <Link to={`/notes/${featured.slug}`} className="group mt-3 block">
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-foreground group-hover:underline decoration-1 underline-offset-4 sm:text-4xl">
                {featured.title}
              </h2>
            </Link>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              {featured.subtitle}
            </p>
            <Link
              to={`/notes/${featured.slug}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Read the note
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
          <div className="md:col-span-2">
            <SourceAttribution source={featured.source!} />
          </div>
        </div>
      </section>

      {/* Recent notes */}
      <section className="border-t border-border py-14">
        <div className="flex items-baseline justify-between gap-4">
          <SectionLabel>Product notes</SectionLabel>
          <Link
            to="/notes"
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground"
          >
            All notes
          </Link>
        </div>
        <div className="mt-6">
          {recent.map((note) => (
            <NoteRow
              key={note.slug}
              href={`/notes/${note.slug}`}
              number={note.number}
              title={note.title}
              subtitle={note.subtitle}
              kindLabel={note.kindLabel}
              draft={note.draft}
            />
          ))}
        </div>
      </section>

      {/* Labs */}
      <section className="border-t border-border py-14">
        <SectionLabel>Experiments — try them</SectionLabel>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {labs.map((lab) => (
            <Link
              key={lab.to}
              to={lab.to}
              className="card-hover flex flex-col rounded-lg border border-border bg-card p-5"
            >
              <span className="label-mono text-moss">{lab.label}</span>
              <span className="mt-3 font-display text-lg font-medium tracking-tight text-foreground">
                {lab.title}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {lab.blurb}
              </span>
              <span className="mt-4 text-sm font-medium text-foreground">Open →</span>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Every experiment uses a fictional product scenario. The point is the thinking, not the
          answer.
        </p>
      </section>

      {/* This site is also an experiment */}
      <section className="border-t border-border py-14">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <SectionLabel>This site is also an experiment</SectionLabel>
            <p className="mt-4 max-w-sm font-display text-2xl font-medium leading-snug tracking-tight text-foreground">
              I didn't want to build another portfolio that simply lists skills and certifications.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              So I treated this site as a small product:
            </p>
            <p className="label-mono mt-3 text-foreground">
              Problem → MVP → Build → Learn → Iterate
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              The problem: portfolios tend to claim; this one tries to show. The MVP is what
              you're looking at. What I'll learn, and what changes next, is the part I can't fake
              in advance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
