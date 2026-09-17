import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { NoteSource } from "@/lib/site/notes";

export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label-mono text-muted-foreground ${className}`}>{children}</p>
  );
}

export function DraftBadge({ children = "Draft" }: { children?: ReactNode }) {
  return (
    <span className="label-mono inline-flex items-center rounded-sm border border-dashed border-signal/50 px-2 py-0.5 text-[0.625rem] text-signal">
      {children}
    </span>
  );
}

export function FictionalBadge() {
  return (
    <span className="label-mono inline-flex items-center rounded-sm border border-border bg-muted px-2 py-0.5 text-[0.625rem] text-muted-foreground">
      Fictional product scenario
    </span>
  );
}

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border pb-10">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}

/**
 * "Inspired by" attribution pattern:
 * SOURCE -> WHAT CAUGHT MY ATTENTION -> MY INTERPRETATION -> HOW I WOULD APPLY IT.
 * Used as a compact card; the full pattern lives inside the notes themselves.
 */
export function SourceAttribution({
  source,
  compact = false,
}: {
  source: NoteSource;
  compact?: boolean;
}) {
  return (
    <div className="rounded-md border border-border bg-card px-4 py-3.5">
      <p className="label-mono text-muted-foreground">Inspired by</p>
      <p className="mt-1.5 text-sm leading-relaxed">
        {source.url ? (
          <a
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-moss underline decoration-moss/30 underline-offset-4 transition-colors hover:decoration-moss"
          >
            {source.label} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="font-medium">{source.label}</span>
        )}
        {source.detail ? (
          <span className="text-muted-foreground"> — {source.detail}</span>
        ) : null}
      </p>
      {!compact && (
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          An original reflection, not a summary. What follows is my interpretation and how I'd
          apply it.
        </p>
      )}
    </div>
  );
}

export function NoteRow({
  href,
  number,
  title,
  subtitle,
  kindLabel,
  draft = false,
}: {
  href?: string;
  number: string;
  title: string;
  subtitle: string;
  kindLabel: string;
  draft?: boolean;
}) {
  const inner = (
    <>
      <span className="label-mono pt-1 text-muted-foreground">{number}</span>
      <span className="flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-display text-xl font-medium tracking-tight text-foreground">
            {title}
          </span>
          {draft && <DraftBadge>Draft</DraftBadge>}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </span>
        <span className="label-mono mt-2.5 block text-[0.625rem] text-moss">{kindLabel}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="group flex gap-5 border-b border-border py-6 transition-colors last:border-b-0 hover:bg-card/60"
      >
        {inner}
      </Link>
    );
  }
  return <div className="flex gap-5 border-b border-border py-6 last:border-b-0">{inner}</div>;
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-note">{children}</div>;
}
