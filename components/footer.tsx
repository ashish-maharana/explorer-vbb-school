import Link from "next/link";
import { footerLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50/95 dark:border-white/10 dark:bg-slate-950/90">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{site.name}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{site.address}</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Email: {site.email}</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Phone: {site.phones.join(" | ")}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-700 dark:text-cyan-300">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.quick.map((item) => (
              <li key={item.href}>
                <Link className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-700 dark:text-cyan-300">Admissions</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.admissions.map((item) => (
              <li key={item.href}>
                <Link className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-cyan-400/35 bg-cyan-50 p-5 dark:border-cyan-400/30 dark:bg-cyan-500/10">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Admissions Open</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
            Give your child a confident, future-ready start with Explorer & V.B.B. English Medium School.
          </p>
          <Link href="/admissions" className="btn-primary mt-4 !px-4 !py-2">
            Apply Now
          </Link>
        </section>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
        © {new Date().getFullYear()} {site.shortName}. All rights reserved.
      </div>
    </footer>
  );
}
