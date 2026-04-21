import Image from "next/image";
import type { CurriculumCardItem } from "@/lib/types";

const skillTags: Record<string, string[]> = {
  "Computer Science": ["Logic", "Digital", "Problem Solving"],
  "Primary Education": ["Literacy", "Numeracy", "Foundation"],
  Science: ["Inquiry", "Experiment", "Discovery"],
  "Public Speaking": ["Confidence", "Expression", "Stage Skill"],
  Mathematics: ["Reasoning", "Concepts", "Application"],
  Languages: ["Reading", "Writing", "Communication"],
};

export function CurriculumGrid({ items }: { items: CurriculumCardItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="curriculum-card group glass-panel overflow-hidden border border-slate-200/80 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/80 hover:shadow-[0_14px_32px_rgba(14,165,233,0.2)] dark:border-white/15 dark:hover:border-cyan-300/50"
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={420}
            height={280}
            className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 opacity-90 transition group-hover:opacity-100">
              {(skillTags[item.title] ?? ["Future Ready", "Creative", "Focused"]).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex -translate-y-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-700 transition duration-300 group-hover:translate-y-0 dark:border-cyan-300/35 dark:bg-cyan-300/10 dark:text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
