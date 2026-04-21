import type { TimelineItem } from "@/lib/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-6">
      {items.map((item) => (
        <li key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/15 dark:bg-white/[0.04]">
          <div className="mb-3 inline-flex rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:border-cyan-300/40 dark:bg-cyan-300/10 dark:text-cyan-200">
            {item.year}
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
