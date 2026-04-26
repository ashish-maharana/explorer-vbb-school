import type { SectionIntro } from "@/lib/types";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntro & { align?: "left" | "center" }) {
  return (
    <header className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="sticker bg-[#ffd84d] text-[#15112b]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#15112b] sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base font-medium leading-7 text-[#4b4564]">{description}</p>
    </header>
  );
}
