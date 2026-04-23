import Image from "next/image";
import type { PersonProfile } from "@/lib/types";

type PersonProfileCardProps = {
  person: PersonProfile;
  compact?: boolean;
  showImage?: boolean;
  imageClassName?: string;
};

export function PersonProfileCard({ person, compact = false, showImage = true, imageClassName }: PersonProfileCardProps) {
  const defaultImageClass = compact ? "aspect-[4/3] object-cover" : "aspect-square object-cover";

  return (
    <article className="glass-panel group h-full overflow-hidden p-5 sm:p-6">
      {showImage ? (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/15 dark:bg-white/5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.14),transparent_40%)]" />
          <Image
            src={person.imageSrc}
            alt={person.imageAlt}
            width={420}
            height={420}
            className={`relative z-[1] w-full ${imageClassName ?? defaultImageClass}`}
          />
        </div>
      ) : null}

      <h3 className={`${showImage ? "mt-5" : "mt-1"} text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100`}>{person.name}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.13em] text-cyan-700 dark:text-cyan-300">{person.role}</p>
      <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{person.bio}</p>

      {person.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {person.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-300/40 dark:bg-cyan-300/10 dark:text-cyan-200"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
