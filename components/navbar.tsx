"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-400/70 bg-white shadow-[0_0_0_3px_rgba(14,165,233,0.15)] dark:border-cyan-300/70 dark:bg-slate-900">
            <Image
              src="/images/common/logo-150x150.webp"
              alt="Explorer & V.B.B. School logo"
              width={60}
              height={60}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </span>
          <span className="hidden text-base font-semibold text-slate-800 sm:block lg:text-lg dark:text-slate-100">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-300 ${
                  active
                    ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-400/20 dark:text-cyan-200"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:focus-visible:ring-cyan-300"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden dark:border-white/10 dark:bg-slate-900/95">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                      active
                        ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-200"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
