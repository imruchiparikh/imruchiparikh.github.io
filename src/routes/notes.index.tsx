import { createFileRoute, Link } from "@tanstack/react-router";
import { notes, notesIndexEntry } from "@/lib/site/notes";
import { PageIntro, NoteRow } from "@/components/site/editorial";

export const Route = createFileRoute("/notes/")({
  head: () => ({
    meta: [
      { title: "Product Notes — Product Lab" },
      {
        name: "description",
        content:
          "Original product thinking by Ruchi Parikh: reflections on features, metrics, AI, and lessons from books and product thinkers.",
      },
      { property: "og:title", content: "Product Notes — Product Lab" },
      {
        property: "og:description",
        content: "Original product thinking: features, metrics, AI, and lessons from strong product thinkers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotesIndex,
});

function NotesIndex() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="Thinking · Product Notes" title="Product Notes">
          <p>
            Short pieces of thinking, written the way I'd say them out loud. Some start from an
            article or a book; some start from something I couldn't stop noticing. None are
            summaries — the interesting part is what I did with the idea.
          </p>
        </PageIntro>
      </div>

      <div className="mt-10">
        {notes.map((note) => (
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
        <NoteRow
          href={notesIndexEntry.linkTo}
          number={notesIndexEntry.number}
          title={notesIndexEntry.title}
          subtitle={notesIndexEntry.subtitle}
          kindLabel={notesIndexEntry.kindLabel}
        />
      </div>

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
        New notes land here when there's something worth saying — not on a schedule. If you want
        a different way in, try the{" "}
        <Link to="/lab/prioritization" className="underline decoration-border underline-offset-4 hover:decoration-foreground">
          experiments
        </Link>{" "}
        instead.
      </p>
    </div>
  );
}
