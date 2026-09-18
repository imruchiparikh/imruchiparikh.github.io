import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionLabel } from "@/components/site/editorial";
import { ProductWorkflow } from "@/components/site/product-workflow";

export const Route = createFileRoute("/workflow")({
  head: () => ({
    meta: [
      { title: "PRD to Product Workflow — Ruchi Parikh" },
      { name: "description", content: "What Ruchi learned to practice across a real product flow, from discovery through learning." },
      { property: "og:title", content: "PRD to Product Workflow — Ruchi Parikh" },
      { property: "og:description", content: "A connected, clickable flow of product practices learned through hands-on exposure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkflowPage,
});

function WorkflowPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="pt-16 sm:pt-24">
        <PageIntro label="What I learned · Interactive flow" title="From PRD to product">
          <p>
            This is the product flow I learned to practice through real work: stay with the problem,
            verify the evidence, make decisions visible, and carry learning back into the next cycle.
            Select any stage to open the detail behind it.
          </p>
        </PageIntro>
      </div>
      <section className="mt-12">
        <ProductWorkflow />
      </section>
      <section className="mt-20 grid gap-8 border-t border-border py-12 md:grid-cols-3">
        <div><SectionLabel>Practice 01</SectionLabel><p className="mt-3 text-lg text-foreground">Stay curious longer than feels comfortable.</p></div>
        <div><SectionLabel>Practice 02</SectionLabel><p className="mt-3 text-lg text-foreground">Trust the signal only after verifying it.</p></div>
        <div><SectionLabel>Practice 03</SectionLabel><p className="mt-3 text-lg text-foreground">Treat delivery as part of the learning loop.</p></div>
      </section>
    </div>
  );
}