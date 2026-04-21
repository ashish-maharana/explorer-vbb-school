import type { SectionIntro } from "@/lib/types";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntro & { align?: "left" | "center" }) {
  return (
    <header className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300/90">{description}</p>
    </header>
  );
}
