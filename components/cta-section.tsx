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
    <section className="rounded-3xl border border-cyan-300/55 bg-gradient-to-br from-cyan-50 via-white to-blue-100 p-8 shadow-sm sm:p-10 dark:border-cyan-400/35 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-cyan-950/50">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">{description}</p>
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
