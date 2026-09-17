import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

// Replace with the real LinkedIn profile URL when available.
const LINKEDIN_URL = "https://www.linkedin.com";

const groups: {
  label: string;
  items: { to: string; label: string }[];
}[] = [
  {
    label: "Product Lab",
    items: [{ to: "/", label: "Home" }],
  },
  {
    label: "Thinking",
    items: [
      { to: "/notes", label: "Product Notes" },
      { to: "/teardowns", label: "Product Teardowns" },
      { to: "/changed-my-mind", label: "What I Changed My Mind About" },
    ],
  },
  {
    label: "Experiments",
    items: [
      { to: "/lab/prioritization", label: "Prioritization Lab" },
      { to: "/lab/metrics", label: "Metrics Lab" },
      { to: "/lab/mvp", label: "MVP Lab" },
    ],
  },
  {
    label: "About",
    items: [
      { to: "/path-to-product", label: "My Path to Product" },
      { to: "/certifications", label: "Certifications" },
    ],
  },
];

function groupClass(to: string) {
  return "block w-full text-left px-2 py-1.5 text-sm rounded-sm outline-none focus:bg-accent hover:bg-accent cursor-pointer";
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="group flex items-baseline gap-2.5">
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Ruchi Parikh
          </span>
          <span className="hidden text-muted-foreground sm:inline" aria-hidden="true">
            |
          </span>
          <span className="label-mono text-moss">Product Lab</span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground outline-none transition-colors hover:border-foreground/35 focus-visible:ring-2 focus-visible:ring-ring">
            Explore
            <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 p-1.5">
            {groups.map((group, gi) => (
              <div key={group.label}>
                {gi > 0 && <DropdownMenuSeparator className="my-1.5" />}
                <DropdownMenuLabel className="label-mono px-2 py-1.5 text-[0.625rem] text-muted-foreground">
                  {group.label}
                </DropdownMenuLabel>
                {group.items.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className={groupClass(item.to)}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            ))}
            <DropdownMenuSeparator className="my-1.5" />
            <DropdownMenuItem asChild>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-full px-2 py-1.5 text-sm rounded-sm outline-none focus:bg-accent hover:bg-accent cursor-pointer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
