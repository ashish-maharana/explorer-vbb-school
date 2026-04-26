import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/lib/types";

export function PageHero({ content }: { content: HeroContent }) {
  return (
    <section className="scallop-y relative overflow-hidden rounded-[2rem] bg-[#6d1b7b] p-6 text-white shadow-[0_24px_70px_rgba(109,27,123,0.22)] sm:p-10 lg:p-12">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-10 top-12 h-24 w-24 rounded-full bg-[#ffd84d]" />
      <div className="pointer-events-none absolute right-8 top-8 h-12 w-12 rounded-full bg-[#2ee881]" />
      <div className="pointer-events-none absolute bottom-12 left-[48%] h-14 w-14 rotate-12 rounded-[1rem] bg-[#f45fa2]" />

      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="sticker bg-[#ffd84d] text-[#15112b]">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/88 sm:text-lg">{content.description}</p>
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
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {["700+ families", "30+ staff", "Joyful learning"].map((item, index) => (
              <span
                key={item}
                className={`rounded-2xl px-4 py-3 text-sm font-extrabold text-[#15112b] shadow-lg ${
                  index === 0 ? "bg-[#2ee881]" : index === 1 ? "bg-[#ffd84d]" : "bg-[#22c7e8]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {content.imageSrc ? (
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 top-7 z-[1] rounded-full bg-[#ff6b35] px-4 py-2 text-sm font-extrabold text-white shadow-xl">
              Explore
            </div>
            <div className="absolute -right-3 bottom-8 z-[1] rounded-full bg-[#ffd84d] px-4 py-2 text-sm font-extrabold text-[#15112b] shadow-xl">
              Grow
            </div>
            <div className="relative overflow-hidden rounded-[3rem] border-[10px] border-white bg-white shadow-[0_24px_60px_rgba(21,17,43,0.24)]">
              <Image
                src={content.imageSrc}
                alt={content.imageAlt ?? content.title}
                width={720}
                height={560}
                priority
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
