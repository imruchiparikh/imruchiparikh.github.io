import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getNote, notes } from "@/lib/site/notes";
import {
  SectionLabel,
  SourceAttribution,
  DraftBadge,
  Prose,
} from "@/components/site/editorial";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const note = getNote(params.slug);
    if (!note) throw notFound();
    return { note };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Note not found — Ruchi Parikh" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { note } = loaderData;
    return {
      meta: [
        { title: `${note.title} — Ruchi Parikh` },
        { name: "description", content: note.subtitle },
        { property: "og:title", content: `${note.title} — Ruchi Parikh` },
        { property: "og:description", content: note.subtitle },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: NotePage,
});

function NotePage() {
  const { note } = Route.useLoaderData();
  const idx = notes.findIndex((n) => n.slug === note.slug);
  const prev = idx > 0 ? notes[idx - 1] : undefined;
  const next = idx >= 0 && idx < notes.length - 1 ? notes[idx + 1] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-5 sm:px-8">
      <div className="pt-14">
        <Link
          to="/notes"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All notes
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <SectionLabel>Note {note.number}</SectionLabel>
          {note.draft && <DraftBadge>Draft — editable work in progress</DraftBadge>}
        </div>
        <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {note.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{note.subtitle}</p>
        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-sm bg-cyan/12 px-2.5 py-1 font-semibold text-cyan">{note.tag}</span>
          <span>Ruchi</span><span aria-hidden="true">·</span><span>{note.date}</span><span aria-hidden="true">·</span><span>{note.readTime}</span>
        </div>
      </div>

      {note.source && (
        <div className="mt-8">
          <SourceAttribution source={note.source} />
        </div>
      )}

      <div className="mt-12 space-y-12">
        {note.sections.map((section, i) => (
          <section key={i}>
            <h2 className="font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-4 border-l-2 border-border pl-5">
              {section.placeholder && (
                <p className="label-mono mb-3 text-signal">Placeholder — awaiting real content</p>
              )}
              <Prose>
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className={section.placeholder ? "text-muted-foreground italic" : ""}>
                    {p}
                  </p>
                ))}
              </Prose>
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[1.0625rem] leading-relaxed">
                      <span className="label-mono mt-1 text-moss">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      <nav className="mt-16 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
        {prev ? (
          <Link
            to="/notes/$slug"
            params={{ slug: prev.slug }}
            className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="mr-1.5 inline-block transition-transform group-hover:-translate-x-0.5" aria-hidden="true">
              ←
            </span>
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/notes/$slug"
            params={{ slug: next.slug }}
            className="group text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-right"
          >
            {next.title}
            <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
