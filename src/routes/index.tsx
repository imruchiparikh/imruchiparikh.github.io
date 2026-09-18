import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20 text-center sm:py-28">
        <p className="label-mono text-cyan">Quality engineer · Product thinker · AI curious</p>
        <h1 className="mt-7 font-display text-6xl font-bold leading-none text-foreground sm:text-8xl lg:text-9xl">
          Hi, I&apos;m <span className="text-cyan">Ruchi.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          I break software for a living and overthink products for fun.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg"><Link to="/notes">Read the blog <ArrowRight /></Link></Button>
        </div>
      </section>
    </div>
  );
}