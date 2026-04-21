"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Item = { question: string; answer: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <article key={item.question} className="rounded-2xl border border-slate-200 bg-white dark:border-white/15 dark:bg-white/[0.04]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : idx)}
            >
              <span className="font-medium text-slate-900 dark:text-white">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-700 transition dark:text-cyan-200 ${open ? "rotate-180" : ""}`} />
            </button>
            {open ? <p className="px-5 pb-5 text-slate-700 dark:text-slate-300">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
