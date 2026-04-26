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
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={contactHero} />
      </section>

      <section className="section-wrap grid gap-5 md:grid-cols-3">
        <article className="glass-panel p-6">
          <MapPin className="h-7 w-7 text-[#ff6b35]" />
          <h2 className="mt-4 text-xl font-semibold text-[#15112b]">Address</h2>
          <p className="mt-2 font-medium leading-7 text-[#5b5570]">{site.address}</p>
        </article>
        <article className="glass-panel p-6">
          <Phone className="h-7 w-7 text-[#2ee881]" />
          <h2 className="mt-4 text-xl font-semibold text-[#15112b]">Phone</h2>
          <p className="mt-2 font-medium text-[#5b5570]">{site.phones[0]}</p>
          <p className="font-medium text-[#5b5570]">{site.phones[1]}</p>
        </article>
        <article className="glass-panel p-6">
          <Mail className="h-7 w-7 text-[#f45fa2]" />
          <h2 className="mt-4 text-xl font-semibold text-[#15112b]">Email</h2>
          <p className="mt-2 font-medium text-[#5b5570]">{site.email}</p>
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
            <label className="text-sm font-extrabold text-[#15112b]">
              Full Name
              <input className="mt-2 w-full rounded-2xl border-2 border-[#15112b]/10 bg-white px-4 py-3 text-[#15112b] outline-none ring-[#6d1b7b] focus:ring-2" type="text" />
            </label>
            <label className="text-sm font-extrabold text-[#15112b]">
              Email
              <input className="mt-2 w-full rounded-2xl border-2 border-[#15112b]/10 bg-white px-4 py-3 text-[#15112b] outline-none ring-[#6d1b7b] focus:ring-2" type="email" />
            </label>
            <label className="text-sm font-extrabold text-[#15112b]">
              Phone
              <input className="mt-2 w-full rounded-2xl border-2 border-[#15112b]/10 bg-white px-4 py-3 text-[#15112b] outline-none ring-[#6d1b7b] focus:ring-2" type="tel" />
            </label>
            <label className="text-sm font-extrabold text-[#15112b]">
              Message
              <textarea className="mt-2 min-h-28 w-full rounded-2xl border-2 border-[#15112b]/10 bg-white px-4 py-3 text-[#15112b] outline-none ring-[#6d1b7b] focus:ring-2" />
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
            <h2 className="text-2xl font-semibold text-[#15112b]">Office Hours</h2>
            <ul className="mt-4 space-y-2 font-medium text-[#5b5570]">
              {officeHours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-[#5b5570]">
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
