import Link from "next/link";
import { footerLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#fff3dc]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <section>
          <h2 className="text-xl font-semibold text-[#15112b]">{site.name}</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-[#5b5570]">{site.address}</p>
          <p className="mt-2 text-sm font-medium text-[#5b5570]">Email: {site.email}</p>
          <div className="mt-2 text-sm font-medium text-[#5b5570]">
            <p>Phone:</p>
            <div className="mt-1 space-y-1">
              {site.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h3 className="sticker bg-[#ffd84d]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.quick.map((item) => (
              <li key={item.href}>
                <Link className="text-sm font-bold text-[#5b5570] hover:text-[#6d1b7b]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="sticker bg-[#2ee881]">Admissions</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.admissions.map((item) => (
              <li key={item.href}>
                <Link className="text-sm font-bold text-[#5b5570] hover:text-[#6d1b7b]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[1.5rem] bg-[#6d1b7b] p-5 text-white shadow-[0_18px_44px_rgba(109,27,123,0.18)]">
          <h3 className="text-xl font-semibold text-white">Admissions Open</h3>
          <p className="mt-3 text-sm font-semibold leading-7 text-white/85">
            Give your child a confident, future-ready start with Explorer & V.B.B. English Medium School.
          </p>
          <Link href="/admissions" className="btn-primary mt-4 !px-4 !py-2">
            Apply Now
          </Link>
        </section>
      </div>
      <div className="border-t border-[#15112b]/10 py-4 text-center text-xs font-bold text-[#5b5570]">
        © {new Date().getFullYear()} {site.shortName}. All rights reserved.
      </div>
    </footer>
  );
}
