import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";

// Replace with the real LinkedIn profile URL when available.
const LINKEDIN_URL = "https://www.linkedin.com";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/notes", label: "Blog" },
  { to: "/ai-skills", label: "AI & Product Skills" },
  { to: "/workflow", label: "PRD to Product" },
  { to: "/teardowns", label: "Teardowns" },
  { to: "/path-to-product", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <Link to="/" className="flex shrink-0 items-center gap-2 font-display text-lg font-semibold text-foreground">
          Ruchi Parikh <span className="text-cyan">·</span>
        </Link>
        <nav aria-label="Primary navigation" className="-mx-1 flex items-center gap-5 overflow-x-auto px-1 text-xs text-muted-foreground sm:gap-7">
          {tabs.map((tab) => {
            const active = tab.to === "/" ? pathname === "/" : pathname.startsWith(tab.to);
            return <Link key={tab.to} to={tab.to} className={`shrink-0 border-b py-2 transition-colors ${active ? "border-cyan text-cyan" : "border-transparent hover:text-foreground"}`}>{tab.label}</Link>;
          })}
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="shrink-0 border-b border-transparent py-2 hover:text-foreground">LinkedIn ↗</a>
        </nav>
      </div>
    </header>
  );
}
