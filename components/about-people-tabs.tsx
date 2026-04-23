"use client";

import { useId, useState } from "react";
import { PersonProfileCard } from "@/components/person-profile-card";
import { Reveal } from "@/components/reveal";
import type { FacultyContent, ManagementContent, PersonProfile } from "@/lib/types";

type AboutPeopleTabsProps = {
  management: ManagementContent;
  faculty: FacultyContent;
};

type TabKey = "management" | "faculty";

function PeopleCardsGrid({ members, imageClassName }: { members: PersonProfile[]; imageClassName?: string }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((person) => (
        <Reveal key={person.name}>
          <PersonProfileCard person={person} imageClassName={imageClassName} />
        </Reveal>
      ))}
    </div>
  );
}

export function AboutPeopleTabs({ management, faculty }: AboutPeopleTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("management");
  const tabsBaseId = useId();
  const unifiedPortraitImageClass = "h-80 object-contain object-top bg-slate-50 dark:bg-slate-900/40";

  const managementPanelId = `${tabsBaseId}-management-panel`;
  const facultyPanelId = `${tabsBaseId}-faculty-panel`;

  return (
    <section className="section-wrap">
      <div role="tablist" aria-label="About people sections" className="flex items-center gap-6 border-b border-slate-300/70 pb-3 dark:border-white/15">
        <button
          type="button"
          role="tab"
          id={`${tabsBaseId}-management-tab`}
          aria-selected={activeTab === "management"}
          aria-controls={managementPanelId}
          onClick={() => setActiveTab("management")}
          className={`relative pb-2 text-sm font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-300 ${
            activeTab === "management" ? "text-cyan-700 dark:text-cyan-200" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          }`}
        >
          Management
          <span
            aria-hidden="true"
            className={`absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 transition dark:bg-cyan-300 ${
              activeTab === "management" ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
        <button
          type="button"
          role="tab"
          id={`${tabsBaseId}-faculty-tab`}
          aria-selected={activeTab === "faculty"}
          aria-controls={facultyPanelId}
          onClick={() => setActiveTab("faculty")}
          className={`relative pb-2 text-sm font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-300 ${
            activeTab === "faculty" ? "text-cyan-700 dark:text-cyan-200" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          }`}
        >
          Faculty
          <span
            aria-hidden="true"
            className={`absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 transition dark:bg-cyan-300 ${
              activeTab === "faculty" ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </div>

      {activeTab === "management" ? (
        <div
          role="tabpanel"
          id={managementPanelId}
          aria-labelledby={`${tabsBaseId}-management-tab`}
          className="mt-6"
        >
          <PeopleCardsGrid members={management.leaders} imageClassName={unifiedPortraitImageClass} />

          <article className="signal-card glass-panel relative mt-10 overflow-hidden p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300">
              {management.chairmanMessage.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-300">
              {management.chairmanMessage.intro}
            </p>
            <blockquote className="mt-6 border-l-2 border-cyan-400/40 pl-5 text-lg italic leading-8 text-slate-800 dark:text-slate-100">
              &ldquo;{management.chairmanMessage.quote}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">{management.chairmanMessage.quoteSource}</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-300">
              {management.chairmanMessage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      ) : (
        <div
          role="tabpanel"
          id={facultyPanelId}
          aria-labelledby={`${tabsBaseId}-faculty-tab`}
          className="mt-6"
        >
          <p className="text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-300">{faculty.quickIntro}</p>

          <PeopleCardsGrid members={faculty.members} imageClassName={unifiedPortraitImageClass} />
        </div>
      )}
    </section>
  );
}
