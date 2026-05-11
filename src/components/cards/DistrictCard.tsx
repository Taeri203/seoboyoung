import { CheckCircle2 } from "lucide-react";
import type { District } from "@/types";

export function DistrictCard({ district }: { district: District }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
        {district.image ? (
          <div className="border-b border-[#E5E7EB] bg-[#FFF9E8] p-2 md:p-4 lg:border-b-0 lg:border-r">
            <div className="rounded-[1.4rem] bg-white">
              <img
                src={district.image}
                alt={district.imageAlt || `${district.name} 공약 이미지`}
                className="block h-auto w-full lg:h-full lg:min-h-[420px] lg:object-contain"
              />
            </div>
          </div>
        ) : null}
        <div className="p-6 md:p-8">
          <p className="text-sm font-black text-[#0052B8]">진천·유천·대곡 생활권</p>
          <h3 className="mt-2 text-3xl font-black text-[#11205A]">{district.name}</h3>
          <p className="mt-3 text-xl font-black leading-8 text-[#11205A]">{district.headline}</p>
          <p className="mt-3 leading-7 text-[#667085]">{district.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {district.focusAreas.map((focus) => (
              <span key={focus} className="rounded-full bg-[#EAF4FF] px-3 py-1.5 text-xs font-black text-[#0052B8]">
                {focus}
              </span>
            ))}
          </div>

          <div className="mt-7 rounded-[1.5rem] bg-[#F8FAFC] p-5">
            <p className="text-sm font-black text-[#11205A]">세부 약속</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {district.pledges.map((pledge) => (
                <li key={pledge} className="flex gap-2 text-sm leading-6 text-[#344054]">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
                  {pledge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
