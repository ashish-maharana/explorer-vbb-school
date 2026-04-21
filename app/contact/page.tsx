import { Mail, MapPin, Phone } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { contactHero, officeHours } from "@/data/contact";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact | Explorer & V.B.B. English Medium School",
  description:
    "Contact Explorer & V.B.B. English Medium School in Sayan, Surat for admissions, school information, and campus visits.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={contactHero} />
      </section>

      <section className="section-wrap grid gap-5 md:grid-cols-3">
        <article className="glass-panel p-6">
          <MapPin className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
          <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Address</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">{site.address}</p>
        </article>
        <article className="glass-panel p-6">
          <Phone className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
          <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Phone</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">{site.phones[0]}</p>
          <p className="text-slate-700 dark:text-slate-300">{site.phones[1]}</p>
        </article>
        <article className="glass-panel p-6">
          <Mail className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
          <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Email</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">{site.email}</p>
        </article>
      </section>

      <section className="section-wrap grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <article className="glass-panel p-6">
          <SectionHeader
            eyebrow="Inquiry Form"
            title="Send an Admissions Inquiry"
            description="This static form is designed for UI preview and can be connected to your preferred lead workflow later."
          />
          <form className="mt-8 grid gap-4" action="#">
            <label className="text-sm text-slate-700 dark:text-slate-200">
              Full Name
              <input className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500 focus:ring-2 dark:border-white/20 dark:bg-slate-900/80 dark:text-slate-100 dark:ring-cyan-300" type="text" />
            </label>
            <label className="text-sm text-slate-700 dark:text-slate-200">
              Email
              <input className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500 focus:ring-2 dark:border-white/20 dark:bg-slate-900/80 dark:text-slate-100 dark:ring-cyan-300" type="email" />
            </label>
            <label className="text-sm text-slate-700 dark:text-slate-200">
              Phone
              <input className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500 focus:ring-2 dark:border-white/20 dark:bg-slate-900/80 dark:text-slate-100 dark:ring-cyan-300" type="tel" />
            </label>
            <label className="text-sm text-slate-700 dark:text-slate-200">
              Message
              <textarea className="mt-2 min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500 focus:ring-2 dark:border-white/20 dark:bg-slate-900/80 dark:text-slate-100 dark:ring-cyan-300" />
            </label>
            <button type="button" className="btn-primary w-fit">
              Submit Inquiry
            </button>
          </form>
        </article>

        <div className="space-y-6">
          <article className="glass-panel overflow-hidden p-2">
            <iframe
              title="School location map"
              src="https://maps.google.com/maps?q=V.B.B.%20%26%20Explorer%20English%20Medium%20School%2C%20Sayan%2C%20Surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
          <article className="glass-panel p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Office Hours</h2>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              {officeHours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
              For priority admissions support, call during admissions desk hours.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Admissions Team Ready to Assist"
          description="Talk directly with our school team to discuss class options, eligibility, and enrollment process."
          primary={{ label: "Call Admissions", href: "tel:+919427472781" }}
          secondary={{ label: "View Admissions Page", href: "/admissions" }}
        />
      </section>
    </div>
  );
}
