import { Link } from "@tanstack/react-router";

// Replace with the real LinkedIn profile URL when available.
const LINKEDIN_URL = "https://www.linkedin.com";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">
            Ruchi Parikh
          </p>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
             Product notes, AI questions, and the thinking behind how I would approach product work.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <Link
            to="/path-to-product"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            My path
          </Link>
          <Link
            to="/notes"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Notes
          </Link>
          <Link to="/workflow" className="text-muted-foreground transition-colors hover:text-foreground">Workflow</Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
