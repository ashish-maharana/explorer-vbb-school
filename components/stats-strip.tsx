"use client";

import { useEffect, useRef, useState } from "react";
import type { StatItem } from "@/lib/types";

function useCountUp(target: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let started = false;
    let frame = 0;
    const duration = 1100;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const startedAt = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          setCount(Math.round(progress * target));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return { count, ref };
}

function Counter({ item }: { item: StatItem }) {
  const { count, ref } = useCountUp(item.value);

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
      <p className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
        {count}
        {item.suffix}
      </p>
      <p className="mt-2 text-lg font-medium text-cyan-700 dark:text-cyan-200">{item.label}</p>
      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
    </div>
  );
}

export function StatsStrip({ stats }: { stats: StatItem[] }) {
  return (
    <section aria-label="School impact highlights" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <Counter key={item.label} item={item} />
      ))}
    </section>
  );
}
