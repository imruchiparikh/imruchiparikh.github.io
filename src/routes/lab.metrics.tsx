import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, FictionalBadge } from "@/components/site/editorial";
import { MetricsLab } from "@/components/site/labs/metrics-lab";

export const Route = createFileRoute("/lab/metrics")({
  head: () => ({
    meta: [
      { title: "Metrics Lab — Product Lab" },
      {
        name: "description",
        content:
          "Weekly active users dropped unexpectedly. Explore the questions worth asking before trusting any explanation.",
      },
      { property: "og:title", content: "Metrics Lab — Product Lab" },
      {
        property: "og:description",
        content: "WAU dropped unexpectedly. Explore the questions before trusting an explanation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MetricsLabPage,
});

function MetricsLabPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="Experiments · Metrics Lab" title="Metrics Lab">
          <p>
            Weekly active users dropped unexpectedly. Before anyone proposes a fix, the useful
            work is in the questions — organized here by where a drop can actually come from.
          </p>
        </PageIntro>
      </div>

      <div className="mt-6">
        <FictionalBadge />
      </div>

      <div className="mt-10">
        <MetricsLab />
      </div>
    </div>
  );
}
