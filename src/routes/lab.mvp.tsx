import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, FictionalBadge } from "@/components/site/editorial";
import { MvpLab } from "@/components/site/labs/mvp-lab";

export const Route = createFileRoute("/lab/mvp")({
  head: () => ({
    meta: [
      { title: "MVP Lab — Product Lab" },
      {
        name: "description",
        content:
          "Eight features, one risky assumption. Choose the smallest product that still produces a real answer.",
      },
      { property: "og:title", content: "MVP Lab — Product Lab" },
      {
        property: "og:description",
        content: "Eight features, one risky assumption — choose the smallest useful product.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MvpLabPage,
});

function MvpLabPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="pt-16">
        <PageIntro label="Experiments · MVP Lab" title="MVP Lab">
          <p>
            A fictional product idea, eight possible features, and capacity for three. The goal of
            an MVP is not simply to build less — it's to learn something important with the
            smallest useful product. Choose accordingly.
          </p>
        </PageIntro>
      </div>

      <div className="mt-6">
        <FictionalBadge />
      </div>

      <div className="mt-10">
        <MvpLab />
      </div>
    </div>
  );
}
