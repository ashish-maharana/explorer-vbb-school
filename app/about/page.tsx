import { AboutPeopleTabs } from "@/components/about-people-tabs";
import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import {
  aboutHero,
  coreValues,
  differentiators,
  facultyContent,
  managementContent,
  missionVision,
  philosophyTimeline,
} from "@/data/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About | Explorer & V.B.B. English Medium School",
  description:
    "Discover the school story, mission, values, and future-ready philosophy of Explorer & V.B.B. English Medium School.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={aboutHero} />
      </section>

      <section className="section-wrap grid gap-6 lg:grid-cols-2">
        <article className="glass-panel p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300">Mission</p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">{missionVision.mission}</p>
        </article>
        <article className="glass-panel p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300">Vision</p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">{missionVision.vision}</p>
        </article>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Our People"
          title="Management and Faculty in One View"
          description={managementContent.quickIntro}
        />
      </section>

      <AboutPeopleTabs management={managementContent} faculty={facultyContent} />

      <div className="beam-divider section-wrap" aria-hidden="true" />

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Core Values"
          title="Our Culture Is Built on Purpose"
          description="These values shape the way we teach, mentor, and prepare students for life."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <Reveal key={value.title}>
              <GlowCard {...value} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionHeader
            eyebrow="School Philosophy"
            title="How We Shape Future-Ready Learners"
            description="Our educational philosophy evolves across foundational learning, communication growth, and innovation mindset."
          />
          <div className="mt-6">
            <Timeline items={philosophyTimeline} />
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="What Makes Us Different"
            title="Designed for Real Student Growth"
            description="Families value our balanced focus on academics, confidence, and future fluency."
          />
          <div className="mt-6 space-y-5">
            {differentiators.map((item) => (
              <Reveal key={item.title}>
                <GlowCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Experience the Explorer & V.B.B. Difference"
          description="Visit the campus, meet our management and faculty, and see how values-led education meets future-ready learning."
          primary={{ label: "Plan a Visit", href: "/contact" }}
          secondary={{ label: "View Admissions", href: "/admissions" }}
        />
      </section>
    </div>
  );
}
