import Link from "next/link";

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="scallop-y relative overflow-hidden rounded-[2rem] bg-[#6d1b7b] p-8 text-white shadow-[0_24px_64px_rgba(109,27,123,0.22)] sm:p-10">
      <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-[#f45fa2]" />
      <div className="pointer-events-none absolute bottom-5 right-8 h-16 w-16 rounded-full bg-[#ffd84d]" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 font-semibold leading-7 text-white/85">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="btn-primary" href={primary.href}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="btn-secondary" href={secondary.href}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
