import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { notes, featuredNote } from "@/lib/site/notes";
import { SectionLabel } from "@/components/site/editorial";
import { ProductWorkflow } from "@/components/site/product-workflow";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruchi Parikh — Product Thinking & AI" },
      { name: "description", content: "Ruchi Parikh writes about product decisions, AI usefulness, metrics, and what quality engineering taught her to notice." },
      { property: "og:title", content: "Ruchi Parikh — Product Thinking & AI" },
      { property: "og:description", content: "Product notes, AI questions, and a quality-led approach to product thinking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sideNotes = [notes[1], notes[2], notes[3]].filter((note) => note !== undefined);

const topics = [
  { label: "Product fundamentals", description: "Problems, trade-offs, metrics, and why the obvious feature is rarely the whole answer.", note: notes[1] },
  { label: "AI & emerging products", description: "What makes an AI feature useful after the first impressive demo.", note: notes[2] },
  { label: "Quality as product insight", description: "How testing, APIs, and data validation sharpen product questions.", note: notes[4] },
  { label: "Books & conversations", description: "Ideas from The Mom Test, Smart Brevity, and product conversations—applied, not summarized.", note: notes[5] },
];

function Index() {
  const featured = featuredNote();

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <section className="flex min-h-[72vh] flex-col justify-center border-b border-border py-20 text-center sm:py-28">
        <p className="label-mono text-cyan">Quality engineer · Product thinker · AI curious</p>
        <h1 className="mt-7 font-display text-6xl font-bold leading-none text-foreground sm:text-8xl lg:text-9xl">
          Hi, I&apos;m <span className="text-cyan">Ruchi.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          I break software for a living and overthink products for fun.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          This is where I write down what I notice about useful products, AI, metrics, and the
          questions worth asking before anyone builds.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg"><Link to="/notes">Read the blog <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/workflow">See my approach</Link></Button>
        </div>
      </section>

      <section className="py-20">
        <div className="flex items-end justify-between gap-6">
          <div><SectionLabel>Selected thinking</SectionLabel><h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">Start with the mechanism.</h2></div>
          <Link to="/notes" className="hidden items-center gap-2 text-sm text-cyan sm:flex">Browse all writing <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="mt-10 grid gap-10 border-t border-border pt-10 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <p className="label-mono text-cyan">Featured · {featured.kindLabel}</p>
            <Link to="/notes/$slug" params={{ slug: featured.slug }} className="group mt-5 block">
              <h3 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-foreground transition-colors group-hover:text-cyan sm:text-5xl">{featured.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{featured.subtitle}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan">Read the reflection <ArrowUpRight className="size-4" /></span>
            </Link>
          </article>
          <div className="space-y-0 border-t border-border lg:col-span-5">
            {sideNotes.map((note) => (
              <Link key={note.slug} to="/notes/$slug" params={{ slug: note.slug }} className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-6">
                <span className="label-mono text-muted-foreground">{note.number}</span>
                <span><span className="block font-display text-lg font-semibold text-foreground group-hover:text-cyan">{note.title}</span><span className="mt-2 block text-sm leading-6 text-muted-foreground">{note.subtitle}</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <SectionLabel>Browse by topic</SectionLabel>
        <div className="mt-8 grid border-l border-t border-border sm:grid-cols-2">
          {topics.map((topic, index) => topic.note ? (
            <Link key={topic.label} to="/notes/$slug" params={{ slug: topic.note.slug }} className="card-hover min-h-56 border-b border-r border-border p-6 sm:p-8">
              <p className="label-mono text-cyan">0{index + 1}</p>
              <h3 className="mt-8 font-display text-2xl font-semibold text-foreground">{topic.label}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{topic.description}</p>
            </Link>
          ) : null)}
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mb-10 max-w-2xl"><SectionLabel>How I approach the work</SectionLabel><h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">From a fuzzy problem to a useful learning loop.</h2><p className="mt-4 text-muted-foreground">Click a stage for the short version. This is an approach I am practicing—not a claim about products I have launched.</p></div>
        <ProductWorkflow />
        <Link to="/workflow" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan">See the full workflow <ArrowUpRight className="size-4" /></Link>
      </section>

      <section className="grid gap-8 border-t border-border py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div><SectionLabel>AI & Product Skills</SectionLabel><h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Useful after the demo.</h2></div>
        <div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">I focus on problem fit, source quality, evaluation, failure states, and whether the feature earns repeat use. My background in automation, APIs, SQL, data validation, performance testing, and AI/RAG helps me ask where an answer came from—and what could fail upstream.</p><Link to="/ai-skills" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan">Explore the skill map <ArrowUpRight className="size-4" /></Link></div>
      </section>
    </div>
  );
}