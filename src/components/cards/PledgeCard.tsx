import { CheckCircle2 } from "lucide-react";
import type { Pledge } from "@/types";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function PledgeCard({ pledge }: { pledge: Pledge }) {
  return (
    <article id={pledge.id} className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm">
      <ImageWithFallback
        src={pledge.image}
        alt={pledge.imageAlt}
        className="h-[320px] md:h-[360px]"
        imgClassName="object-contain bg-[#FFF9E8] p-2"
      />
      <div className="p-6">
        <p className="inline-flex rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-black text-[#0052B8]">
          {pledge.category}
        </p>
        <h3 className="mt-4 text-2xl font-black text-[#11205A]">{pledge.title}</h3>
        <p className="mt-3 leading-7 text-[#667085]">{pledge.summary}</p>
        <ul className="mt-5 grid gap-3">
          {pledge.tasks.map((task) => (
            <li key={task} className="flex gap-2 text-sm leading-6 text-[#344054]">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
