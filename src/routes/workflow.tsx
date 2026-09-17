import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionLabel } from "@/components/site/editorial";
import { ProductWorkflow } from "@/components/site/product-workflow";

export const Route = createFileRoute("/workflow")({
  head: () => ({
    meta: [
      { title: "PRD to Product Workflow — Product Lab" },
      { name: "description", content: "How Ruchi Parikh would move from a product problem to a measurable learning loop." },
      { property: "og:title", content: "PRD to Product Workflow — Product Lab" },
      { property: "og:description", content: "A clear, clickable approach from problem framing through product learning." },
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
        <PageIntro label="Product approach · Interactive" title="From PRD to product">
          <p>
            This is how I would structure the work—not a claim about a product I launched. Click
            each stage to see the decisions, questions, and quality checks I would bring forward.
          </p>
        </PageIntro>
      </div>
      <section className="mt-12">
        <ProductWorkflow />
      </section>
      <section className="mt-20 grid gap-8 border-t border-border py-12 md:grid-cols-3">
        <div><SectionLabel>Principle 01</SectionLabel><p className="mt-3 text-lg text-foreground">Evidence before confidence.</p></div>
        <div><SectionLabel>Principle 02</SectionLabel><p className="mt-3 text-lg text-foreground">Edge cases belong in discovery.</p></div>
        <div><SectionLabel>Principle 03</SectionLabel><p className="mt-3 text-lg text-foreground">A release is the start of learning.</p></div>
      </section>
    </div>
  );
}