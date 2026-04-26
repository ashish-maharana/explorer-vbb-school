"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#15112b]/5 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-[#ffd84d] bg-white shadow-[0_8px_24px_rgba(109,27,123,0.14)]">
            <Image
              src="/images/common/logo-150x150.webp"
              alt="Explorer & V.B.B. School logo"
              width={60}
              height={60}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </span>
          <span className="hidden max-w-[15rem] text-base font-extrabold leading-tight text-[#15112b] sm:block lg:max-w-none lg:text-lg">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d1b7b] ${
                  active
                    ? "bg-[#ffd84d] text-[#15112b]"
                    : "text-[#4b4564] hover:bg-[#fff3dc] hover:text-[#6d1b7b]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#15112b]/15 bg-white text-[#15112b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d1b7b]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t-2 border-[#15112b]/5 bg-white px-4 py-3 lg:hidden">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-3 py-2 text-sm font-extrabold ${
                      active
                        ? "bg-[#ffd84d] text-[#15112b]"
                        : "text-[#4b4564] hover:bg-[#fff3dc]"
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
