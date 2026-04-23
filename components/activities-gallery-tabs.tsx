"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/types";

type ActivitiesGalleryTabsProps = {
  campusItems: GalleryItem[];
  schoolTripItems: GalleryItem[];
};

type TabKey = "campus" | "school-trips";

function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.title}-${item.src}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/15 dark:bg-white/5">
          <Image src={item.src} alt={item.alt} width={960} height={640} className="h-56 w-full object-cover" />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ActivitiesGalleryTabs({ campusItems, schoolTripItems }: ActivitiesGalleryTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("campus");
  const baseId = useId();
  const campusPanelId = `${baseId}-campus-panel`;
  const tripsPanelId = `${baseId}-trips-panel`;

  return (
    <div>
      <div role="tablist" aria-label="Activities gallery tabs" className="flex items-center gap-6 border-b border-slate-300/70 pb-3 dark:border-white/15">
        <button
          type="button"
          role="tab"
          id={`${baseId}-campus-tab`}
          aria-selected={activeTab === "campus"}
          aria-controls={campusPanelId}
          onClick={() => setActiveTab("campus")}
          className={`relative pb-2 text-sm font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-300 ${
            activeTab === "campus" ? "text-cyan-700 dark:text-cyan-200" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          }`}
        >
          Campus Life
          <span
            aria-hidden="true"
            className={`absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 transition dark:bg-cyan-300 ${
              activeTab === "campus" ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
        <button
          type="button"
          role="tab"
          id={`${baseId}-trips-tab`}
          aria-selected={activeTab === "school-trips"}
          aria-controls={tripsPanelId}
          onClick={() => setActiveTab("school-trips")}
          className={`relative pb-2 text-sm font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-300 ${
            activeTab === "school-trips" ? "text-cyan-700 dark:text-cyan-200" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          }`}
        >
          School Trips
          <span
            aria-hidden="true"
            className={`absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 transition dark:bg-cyan-300 ${
              activeTab === "school-trips" ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </div>

      {activeTab === "campus" ? (
        <div role="tabpanel" id={campusPanelId} aria-labelledby={`${baseId}-campus-tab`}>
          <GalleryGrid items={campusItems} />
        </div>
      ) : (
        <div role="tabpanel" id={tripsPanelId} aria-labelledby={`${baseId}-trips-tab`}>
          <GalleryGrid items={schoolTripItems} />
        </div>
      )}
    </div>
  );
}
