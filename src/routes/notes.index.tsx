import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { notes } from "@/lib/site/notes";
import { PageIntro } from "@/components/site/editorial";

export const Route = createFileRoute("/notes/")({
  head: () => ({
    meta: [
      { title: "Blog — Ruchi Parikh" },
      { name: "description", content: "Original writing on product decisions, AI, metrics, quality, books, and product conversations." },
      { property: "og:title", content: "Blog — Ruchi Parikh" },
      { property: "og:description", content: "Original product thinking, organized by topic rather than chronology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotesIndex,
});

const groups = [
  { label: "Product fundamentals", description: "Problems, mechanisms, metrics, and decisions.", kinds: ["source", "original"] },
  { label: "AI & technical depth", description: "AI usefulness, quality, data, and the edges that determine trust.", kinds: ["qa"] },
  { label: "Books & conversations", description: "What I carried forward from books and product conversations—not chapter summaries.", kinds: ["book", "podcast"] },
  { label: "Learning in progress", description: "Notes tied to my own product education, kept honest when details are still forming.", kinds: ["program"] },
] as const;

function NotesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="pt-16 sm:pt-24"><PageIntro label="Blog" title="Ideas I wanted to keep thinking about"><p>Some begin with a product I use. Others begin with a book, a podcast, or something my quality background taught me to question. These are interpretations and applications—not borrowed summaries.</p></PageIntro></div>
      <div className="mt-16 space-y-20">
        {groups.map((group, groupIndex) => {
          const groupNotes = notes.filter((note) => group.kinds.some((kind) => kind === note.kind) && (groupIndex !== 0 || note.kind !== "original" || note.slug !== "what-makes-an-ai-feature-useful"));
          const aiNote = notes[2];
          if (groupIndex === 1 && aiNote) groupNotes.unshift(aiNote);
          return (
            <section key={group.label} className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.38fr_1fr]">
              <div><p className="label-mono text-cyan">0{groupIndex + 1} · Topic</p><h2 className="mt-3 font-display text-2xl font-semibold text-foreground">{group.label}</h2><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{group.description}</p></div>
              <div className="grid border-l border-t border-border sm:grid-cols-2">
                {groupNotes.map((note) => (
                  <Link key={note.slug} to="/notes/$slug" params={{ slug: note.slug }} className="group min-h-56 border-b border-r border-border p-6 transition-colors hover:bg-card">
                    <div className="flex items-center justify-between"><span className="label-mono text-muted-foreground">{note.number}</span><ArrowUpRight className="size-4 text-cyan opacity-0 transition-opacity group-hover:opacity-100" /></div>
                    <h3 className="mt-8 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-cyan">{note.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{note.subtitle}</p>
                    <p className="label-mono mt-6 text-[0.625rem] text-cyan">{note.kindLabel}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}