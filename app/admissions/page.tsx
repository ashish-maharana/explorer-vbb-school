import { CTASection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { admissionFaqs, admissionsHero, documents, eligibility, parentReasons, processSteps } from "@/data/admissions";

export const metadata = createPageMetadata({
  title: "Admissions | Explorer & V.B.B. English Medium School",
  description:
    "Admissions are open at Explorer & V.B.B. English Medium School. Explore process, eligibility, required documents, and FAQs.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  return (
    <div className="pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={admissionsHero} />
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Why Parents Choose Us"
          title="A Trusted School for Future-Focused Growth"
          description="Families choose Explorer & V.B.B. for structured academics, strong values, and progressive learning opportunities."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {parentReasons.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="process" className="section-wrap">
        <SectionHeader
          eyebrow="Admissions Process"
          title="Simple and Parent-Friendly Admission Steps"
          description="Our process is transparent and supportive from initial inquiry to enrollment."
        />
        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {processSteps.map((step) => (
            <li key={step.step} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/15 dark:bg-white/[0.04]">
              <span className="text-sm font-bold tracking-[0.14em] text-cyan-600 dark:text-cyan-300">{step.step}</span>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-wrap grid gap-6 md:grid-cols-2">
        <article className="glass-panel p-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Eligibility & Class Overview</h2>
          <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
            {eligibility.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article id="documents" className="glass-panel p-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Documents Required</h2>
          <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
            {documents.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section id="faq" className="section-wrap">
        <SectionHeader
          eyebrow="Admissions FAQ"
          title="Common Parent Questions"
          description="Quick answers to help you move ahead with confidence."
        />
        <div className="mt-8">
          <FaqAccordion items={admissionFaqs} />
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Ready to Begin the Admission Journey?"
          description="Contact our admissions team today for class availability and enrollment guidance."
          primary={{ label: "Start Inquiry", href: "/contact" }}
          secondary={{ label: "Call +91 9762330236", href: "tel:+919762330236" }}
        />
      </section>
    </div>
  );
}
