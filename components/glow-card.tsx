import { IconGlyph } from "@/components/icons";

type GlowCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
};

export function GlowCard({ title, description, icon, tag }: GlowCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] dark:border-white/15 dark:bg-white/5 dark:hover:border-cyan-300/60 dark:hover:bg-white/10">
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl transition group-hover:bg-cyan-300/30 dark:bg-cyan-400/20" />
      <div className="relative">
        {tag ? (
          <span className="inline-flex rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-300/40 dark:bg-cyan-300/10 dark:text-cyan-200">
            {tag}
          </span>
        ) : null}
        <div className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-cyan-700 dark:border-white/20 dark:bg-slate-900/60 dark:text-cyan-200">
          <IconGlyph name={icon} />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{description}</p>
      </div>
    </article>
  );
}
