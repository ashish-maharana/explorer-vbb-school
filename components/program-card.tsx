import { IconGlyph } from "@/components/icons";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
};

export function ProgramCard({ title, description, icon, tag }: ProgramCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)] dark:border-slate-700/80 dark:bg-slate-950/60">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-200">
          <IconGlyph name={icon} />
        </div>
        {tag ? <span className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600 dark:border-slate-600 dark:text-slate-300">{tag}</span> : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-slate-700 dark:text-slate-300">{description}</p>
    </article>
  );
}
