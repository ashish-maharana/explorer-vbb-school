"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-500/70 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/25 dark:bg-white/10 dark:text-slate-200 dark:hover:border-cyan-300/80 dark:hover:text-cyan-200 dark:focus-visible:ring-cyan-300 dark:focus-visible:ring-offset-slate-900"
    >
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="block dark:hidden" />
    </button>
  );
}
