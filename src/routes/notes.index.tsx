import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/editorial";
import { BlogGrid } from "@/components/site/blog-grid";

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

function NotesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="pt-16 sm:pt-24"><PageIntro label="Blog" title="Ideas I wanted to keep thinking about"><p>Notes on products, AI, books, and the quality instincts I carry into product work. These are my interpretations—not borrowed summaries.</p></PageIntro></div>
      <BlogGrid />
    </div>
  );
}