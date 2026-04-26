import { IconGlyph } from "@/components/icons";

type GlowCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
  variant?: "card" | "flat";
};

export function GlowCard({ title, description, icon, tag, variant = "card" }: GlowCardProps) {
  if (variant === "flat") {
    return (
      <article className="flex gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#22c7e8]/18 text-[#6d1b7b] ring-2 ring-white">
          <IconGlyph name={icon} />
        </div>
        <div>
          {tag ? <span className="sticker mb-3 bg-[#f45fa2] text-white">{tag}</span> : null}
          <h3 className="text-xl font-semibold text-[#15112b]">{title}</h3>
          <p className="mt-3 font-medium leading-7 text-[#5b5570]">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="play-card group transition hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(109,27,123,0.14)]">
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#ffd84d]/60 transition group-hover:bg-[#2ee881]/60" />
      <div className="relative">
        {tag ? (
          <span className="sticker bg-[#f45fa2] text-white">
            {tag}
          </span>
        ) : null}
        <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22c7e8]/18 text-[#6d1b7b] ring-2 ring-white">
          <IconGlyph name={icon} />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#15112b]">{title}</h3>
        <p className="mt-3 font-medium leading-7 text-[#5b5570]">{description}</p>
      </div>
    </article>
  );
}
