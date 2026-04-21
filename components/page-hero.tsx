import Link from "next/link";
import type { HeroContent } from "@/lib/types";

export function PageHero({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 shadow-sm sm:p-12 dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-cyan-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.14),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.25),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.25),transparent_35%)]" />
      <div className="hero-grid-overlay pointer-events-none absolute inset-0" />
      <div className="relative max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{content.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{content.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">{content.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-primary" href={content.primaryCta.href}>
            {content.primaryCta.label}
          </Link>
          {content.secondaryCta ? (
            <Link className="btn-secondary" href={content.secondaryCta.href}>
              {content.secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
