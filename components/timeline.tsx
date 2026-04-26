import type { TimelineItem } from "@/lib/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="divide-y-2 divide-[#15112b]/10 rounded-[1.5rem] bg-white/55 px-5">
      {items.map((item, index) => (
        <li key={item.title} className="py-6">
          <div className={`sticker mb-3 ${index % 2 === 0 ? "bg-[#ffd84d]" : "bg-[#2ee881]"}`}>
            {item.year}
          </div>
          <h3 className="text-xl font-semibold text-[#15112b]">{item.title}</h3>
          <p className="mt-3 font-medium leading-7 text-[#5b5570]">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
