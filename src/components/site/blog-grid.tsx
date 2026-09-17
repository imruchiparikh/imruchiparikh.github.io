import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogImages } from "@/lib/site/blog-assets";
import { notes, type NoteTag } from "@/lib/site/notes";

const filters: Array<"All" | NoteTag> = ["All", "Product Management", "AI/ML", "QA", "Book", "Product Teardown"];

export function BlogGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (active === "All" ? notes : notes.filter((note) => note.tag === active)),
    [active],
  );

  return (
    <>
      <div className="mt-10 flex gap-2 overflow-x-auto pb-2" aria-label="Filter blog posts">
        {filters.map((filter) => (
          <Button
            key={filter}
            type="button"
            size="sm"
            variant={active === filter ? "default" : "outline"}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className="shrink-0"
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((note, index) => {
          const image = blogImages[note.slug];
          return (
            <Link
              key={note.slug}
              to="/notes/$slug"
              params={{ slug: note.slug }}
              className={`group flex min-h-[32rem] flex-col overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:border-cyan/70 ${index % 5 === 0 ? "md:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""}`}
            >
              {image ? (
                <div className={`overflow-hidden bg-muted ${index % 5 === 0 ? "min-h-64 lg:min-h-full" : "aspect-[3/2]"}`}>
                  <img src={image} alt="" loading="lazy" width={992} height={672} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-sm bg-cyan/12 px-2.5 py-1 text-[0.6875rem] font-semibold text-cyan">{note.tag}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-cyan" aria-hidden="true" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold leading-tight text-foreground">{note.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{note.subtitle}</p>
                <div className="mt-auto pt-8 text-xs text-muted-foreground">
                  <p className="font-medium text-foreground">Ruchi</p>
                  <p className="mt-1">{note.date} · {note.readTime}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}