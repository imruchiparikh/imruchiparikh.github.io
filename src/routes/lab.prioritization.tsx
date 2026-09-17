import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, FictionalBadge } from "@/components/site/editorial";
import { PrioritizationLab } from "@/components/site/labs/prioritization-lab";

export const Route = createFileRoute("/lab/prioritization")({
  head: () => ({
    meta: [
      { title: "Prioritization Lab — Product Lab" },
      {
        name: "description",
        content:
          "An interactive prioritization exercise: six improvements, limited capacity, four adjustable inputs. Watch the ranking shift.",
      },
      { property: "og:title", content: "Prioritization Lab — Product Lab" },
      {
        property: "og:description",
        content: "Six improvements, limited capacity — adjust the inputs and watch the ranking shift.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrioritizationLabPage,
});

function PrioritizationLabPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="Experiments · Prioritization Lab" title="Prioritization Lab">
          <p>
            You have six possible improvements and limited engineering capacity. What would you
            prioritize — and more interestingly, what happens to your answer when the inputs
            change?
          </p>
        </PageIntro>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <FictionalBadge />
        <span className="text-xs text-muted-foreground">
          There is no “correct answer” here — only your prioritization and what it reveals.
        </span>
      </div>

      <div className="mt-10">
        <PrioritizationLab />
      </div>
    </div>
  );
}
