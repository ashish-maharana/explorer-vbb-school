import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { CurriculumGrid } from "@/components/curriculum-grid";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ParallaxImage } from "@/components/parallax-image";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { createPageMetadata } from "@/lib/metadata";
import {
  coCurricular,
  coCurricularItems,
  curriculumCards,
  curriculumOverview,
  homeAdmissionsPreview,
  homeCampusMoments,
  homeHero,
  homeHighlights,
  homeLearningPathway,
  homeQuickLinks,
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
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={homeHero} />
      </section>

      <section className="section-wrap glass-panel doodle-bg p-7 sm:p-10">
        <div className="max-w-5xl">
          <span className="sticker bg-[#2ee881]">Welcome</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#15112b] sm:text-5xl">{learningIntro.title}</h2>
          <div className="mt-6 grid gap-5 text-sm font-medium leading-7 text-[#5b5570] sm:text-base md:grid-cols-2">
            <p>{learningIntro.paragraphs[0]}</p>
            <div>
              <p>{learningIntro.paragraphs[1]}</p>
              <Link href={learningIntro.link.href} className="btn-secondary mt-5">
                {learningIntro.link.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="beam-divider section-wrap" aria-hidden="true" />

      <section className="section-wrap">
        <h3 className="text-center text-3xl font-semibold text-[#15112b]">{schoolAtAGlance}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {legacyStats.map((item, index) => (
            <article key={item.label} className="stat-holo glass-panel relative overflow-hidden p-6 text-center">
              <p className={`relative z-[1] text-4xl font-semibold ${index % 2 === 0 ? "text-[#6d1b7b]" : "text-[#ff6b35]"}`}>{item.value}</p>
              <p className="relative z-[1] mt-2 text-sm font-extrabold text-[#15112b]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Why Parents Choose Us"
          title="A School Experience Built Around Growth"
          description="Families see Explorer & V.B.B. as a place where academics, values, confidence, and future learning grow together."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeHighlights.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div>
          <SectionHeader
            eyebrow="Learning Pathway"
            title="How Students Grow Year by Year"
            description="The homepage view of our learning journey: clear basics, meaningful participation, and steady future readiness."
          />
          <div className="mt-8">
            <Timeline items={homeLearningPathway} />
          </div>
        </div>
        <article className="glass-panel flex h-full flex-col gap-5 overflow-hidden p-4">
          <ParallaxImage
            src={imageSlots.learningSection}
            alt="Explorer school students standing together on campus"
            width={1200}
            height={640}
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.35rem] bg-[#fff3dc] p-5">
              <span className="sticker bg-[#ffd84d]">Steady Progress</span>
              <p className="mt-3 text-sm font-medium leading-6 text-[#5b5570]">
                Every stage builds on the previous one, so students grow with clarity instead of pressure.
              </p>
            </div>
            <div className="rounded-[1.35rem] bg-[#eafff1] p-5">
              <span className="sticker bg-[#2ee881]">Whole Child</span>
              <p className="mt-3 text-sm font-medium leading-6 text-[#5b5570]">
                Academics, confidence, values, communication, and activities develop together.
              </p>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white/70">
            <span className="sticker bg-[#f45fa2] text-white">In School</span>
            <h3 className="mt-4 text-2xl font-semibold text-[#15112b]">What this looks like every day</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                "Guided classroom practice with teacher support",
                "Activities that turn concepts into real understanding",
                "Opportunities to speak, lead and participate",
              ].map((item) => (
                <p key={item} className="rounded-[1.2rem] bg-[#fff3dc] p-4 text-sm font-medium leading-6 text-[#5b5570]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-1 items-end rounded-[1.5rem] bg-[#6d1b7b] p-6 text-white">
            <div className="w-full">
            <span className="sticker bg-[#ffd84d] text-[#15112b]">Balanced Growth</span>
            <div className="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h3 className="text-2xl font-semibold leading-tight text-white">Learning continues beyond one lesson</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/85">
                One pathway blends learning, activities, communication, and future-ready skills.
                </p>
              </div>
              <Link href="/academics" className="btn-primary w-fit">
                View Academics
              </Link>
            </div>
            </div>
          </div>
        </article>
      </section>

      <section className="section-wrap">
        <div className="max-w-4xl">
          <span className="sticker bg-[#ffd84d]">Curriculum</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#15112b] sm:text-5xl">{curriculumOverview.title}</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-[#5b5570] sm:text-base">{curriculumOverview.description}</p>
        </div>
        <CurriculumGrid items={curriculumCards} />
      </section>

      <div className="beam-divider section-wrap" aria-hidden="true" />

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Campus Moments"
          title="A Glimpse of Learning, Play, and Celebration"
          description="A short preview of the real student life moments that make the campus feel active and joyful."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeCampusMoments.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-[1.5rem] border-2 border-white bg-white shadow-[0_18px_42px_rgba(21,17,43,0.08)]">
              <Image src={item.src} alt={item.alt} width={720} height={520} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#15112b]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <Link href="/activities" className="btn-secondary mt-6">
          View More Activities
        </Link>
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
          <span className="sticker bg-[#2ee881]">Activities</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#15112b] sm:text-5xl">{coCurricular.title}</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-[#5b5570] sm:text-base">{coCurricular.description}</p>
          <ul className="mt-6 space-y-5 border-l-4 border-[#f45fa2] pl-5">
            {coCurricularItems.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[29px] top-2 h-4 w-4 rounded-full border-2 border-white bg-[#ff6b35] shadow-[0_0_0_4px_rgba(255,216,77,0.45)]" aria-hidden="true" />
                <p className="text-sm font-medium leading-7 text-[#5b5570] sm:text-base">
                  <span className="font-extrabold text-[#15112b]">{item.title}: </span>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Admissions Preview"
          title="A Simple Start for New Families"
          description="A quick overview of the path from first inquiry to enrollment. The full admissions page has documents, FAQs, and details."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {homeAdmissionsPreview.map((step, index) => (
            <article key={step.step} className="play-card">
              <span className={`sticker ${index === 1 ? "bg-[#2ee881]" : "bg-[#ffd84d]"}`}>{step.step}</span>
              <h3 className="mt-4 text-xl font-semibold text-[#15112b]">{step.title}</h3>
              <p className="mt-3 font-medium leading-7 text-[#5b5570]">{step.description}</p>
            </article>
          ))}
        </div>
        <Link href="/admissions" className="btn-primary mt-6">
          See Admission Details
        </Link>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Explore More"
          title="Continue Through the School Story"
          description="Jump into focused pages when you want more detail about academics, student life, technology learning, or admissions."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeQuickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="block h-full">
              <ProgramCard title={item.title} description={item.description} icon={item.icon} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <article className="signal-card glass-panel relative overflow-hidden p-7 sm:p-10">
          <p className="relative z-[1] text-5xl leading-none text-[#f45fa2] sm:text-6xl" aria-hidden="true">
            &ldquo;
          </p>
          <blockquote className="relative z-[1] -mt-3 text-3xl font-semibold italic leading-tight text-[#15112b]">
            {principalSection.quote}
          </blockquote>
          <p className="relative z-[1] mt-5 text-sm font-extrabold text-[#6d1b7b]">{principalSection.author}</p>
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
