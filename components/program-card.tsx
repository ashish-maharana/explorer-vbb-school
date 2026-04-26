import { IconGlyph } from "@/components/icons";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
};

export function ProgramCard({ title, description, icon, tag }: ProgramCardProps) {
  return (
    <article className="play-card transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffd84d] text-[#6d1b7b]">
          <IconGlyph name={icon} />
        </div>
        {tag ? <span className="sticker bg-[#2ee881]">{tag}</span> : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[#15112b]">{title}</h3>
      <p className="mt-3 font-medium leading-7 text-[#5b5570]">{description}</p>
    </article>
  );
}
