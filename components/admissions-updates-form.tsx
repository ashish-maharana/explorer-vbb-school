import type { AdmissionsUpdatesContent } from "@/lib/types";

export function AdmissionsUpdatesForm({ content }: { content: AdmissionsUpdatesContent }) {
  return (
    <section className="rounded-3xl border border-cyan-300/50 bg-gradient-to-br from-blue-600 to-cyan-600 p-7 shadow-sm sm:p-10 dark:border-cyan-300/35 dark:from-blue-700 dark:to-cyan-700">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{content.title}</h2>
        <p className="mt-4 text-sm text-cyan-100">{content.description}</p>

        <form action="#" className="mt-7 space-y-3" aria-label="Admissions and updates subscription form">
          {content.fields.map((field) => (
            <label key={field.name} className="block">
              <span className="sr-only">{field.label}</span>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full rounded-md border border-white/40 bg-white/95 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-white focus:ring-2 focus:ring-white/70"
              />
            </label>
          ))}
          <label className="block">
            <span className="sr-only">{content.message.label}</span>
            <textarea
              name={content.message.name}
              rows={4}
              placeholder={content.message.placeholder}
              className="w-full rounded-md border border-white/40 bg-white/95 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-white focus:ring-2 focus:ring-white/70"
            />
          </label>
          <button
            type="submit"
            className="btn-primary !rounded-md !bg-white !px-4 !py-2 !text-blue-700 hover:!bg-cyan-50 focus-visible:!ring-white focus-visible:!ring-offset-transparent"
          >
            {content.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
