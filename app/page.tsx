import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { CurriculumGrid } from "@/components/curriculum-grid";
import { PageHero } from "@/components/page-hero";
import { ParallaxImage } from "@/components/parallax-image";
import { createPageMetadata } from "@/lib/metadata";
import {
  coCurricular,
  coCurricularItems,
  curriculumCards,
  curriculumOverview,
  homeHero,
  imageSlots,
  learningIntro,
  legacyStats,
  principalSection,
  schoolAtAGlance,
} from "@/data/home";

export const metadata = createPageMetadata({
  title: "Home | Explorer & V.B.B. English Medium School",
  description:
    "Future-ready schooling in Sayan, Surat with balanced academics, confidence development, and modern learning pathways.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={homeHero} />
      </section>

      <section className="section-wrap glass-panel p-7 sm:p-10">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{learningIntro.title}</h2>
          <div className="mt-6 grid gap-5 text-sm leading-7 text-slate-700 sm:text-base md:grid-cols-2 dark:text-slate-300">
            <p>{learningIntro.paragraphs[0]}</p>
            <div>
              <p>{learningIntro.paragraphs[1]}</p>
              <Link href={learningIntro.link.href} className="mt-5 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200">
                {learningIntro.link.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="beam-divider section-wrap" aria-hidden="true" />

      <section className="section-wrap">
        <h3 className="text-center text-lg font-medium text-slate-700 dark:text-slate-300">{schoolAtAGlance}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {legacyStats.map((item) => (
            <article key={item.label} className="stat-holo glass-panel relative overflow-hidden p-6 text-center">
              <p className="relative z-[1] text-4xl font-semibold text-blue-600 dark:text-cyan-300">{item.value}</p>
              <p className="relative z-[1] mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <article className="glass-panel p-4">
          <ParallaxImage
            src={imageSlots.learningSection}
            alt="Campus and students group placeholder"
            width={1200}
            height={640}
            className="h-auto w-full object-cover"
          />
        </article>
      </section>

      <section className="section-wrap">
        <article className="signal-card glass-panel relative overflow-hidden p-7 sm:p-10">
          <p className="relative z-[1] text-4xl leading-none text-cyan-600 dark:text-cyan-300 sm:text-5xl" aria-hidden="true">
            &ldquo;
          </p>
          <blockquote className="relative z-[1] -mt-3 text-3xl font-semibold italic leading-tight text-slate-800 dark:text-slate-100">
            {principalSection.quote}
          </blockquote>
          <p className="relative z-[1] mt-5 text-sm font-semibold text-slate-600 dark:text-slate-300">{principalSection.author}</p>
        </article>
      </section>

      <div className="beam-divider section-wrap" aria-hidden="true" />

      <section className="section-wrap">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{curriculumOverview.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-300">{curriculumOverview.description}</p>
        </div>
        <CurriculumGrid items={curriculumCards} />
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <article className="glass-panel p-4">
          <ParallaxImage
            src={imageSlots.coCurricularSection}
            alt="Co-curricular activity placeholder"
            width={720}
            height={860}
            className="h-full w-full object-cover"
          />
        </article>

        <article className="glass-panel p-7 sm:p-10">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{coCurricular.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-300">{coCurricular.description}</p>
          <ul className="mt-6 space-y-5 border-l-2 border-cyan-400/35 pl-5">
            {coCurricularItems.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border border-cyan-300 bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.15)]" aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{item.title}: </span>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Admissions Open for 2026-27"
          description="Take the next step toward a balanced, premium, and future-ready school experience in Sayan, Surat."
          primary={{ label: "Apply for Admission", href: "/admissions" }}
          secondary={{ label: "Contact School", href: "/contact" }}
        />
      </section>
    </div>
  );
}
