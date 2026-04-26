import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { academicPrograms, academicsHero, learningPathway, pedagogy } from "@/data/academics";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Academics | Explorer & V.B.B. English Medium School",
  description:
    "Explore our broad and balanced curriculum across computer science, primary education, science, public speaking, mathematics, and languages.",
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={academicsHero} />
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Curriculum Themes"
          title="Academic Tracks That Build Strong Foundations"
          description="Our curriculum supports rigorous concepts, communication confidence, and practical thinking."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {academicPrograms.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Teaching Approach"
          title="How We Deliver Learning That Stays"
          description="Every classroom practice is designed to make understanding deeper, communication clearer, and progress measurable."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pedagogy.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Learning Pathway"
          title="From Foundations to Future Skills"
          description="Students progress through well-defined stages that support both academic and personal growth."
        />
        <div className="mt-8">
          <Timeline items={learningPathway} />
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Build Academic Confidence from Day One"
          description="Join an academic environment that balances conceptual excellence with communication and future-ready abilities."
          primary={{ label: "Start Admissions", href: "/admissions" }}
          secondary={{ label: "Talk to School", href: "/contact" }}
        />
      </section>
    </div>
  );
}
