import { CheckCircle2 } from "lucide-react";
import type { Generation } from "@/types";

const tones = [
  "border-[#B9DBFF] bg-[#F8FBFF]",
  "border-[#FFE88A] bg-[#FFFDF0]",
  "border-[#D1E9FF] bg-white",
  "border-[#E5E7EB] bg-[#F8FAFC]",
  "border-[#B9DBFF] bg-white",
  "border-[#FFE88A] bg-[#FFF9E8]",
];

export function GenerationCard({ generation, index = 0 }: { generation: Generation; index?: number }) {
  const Icon = generation.icon;
  const tone = tones[index % tones.length];

  return (
    <article className={`h-full rounded-[2rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${tone}`}>
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0052B8] shadow-sm">
          <Icon size={26} aria-hidden />
        </span>
        <div>
          <p className="text-sm font-black text-[#0052B8]">{generation.audience}</p>
          <h3 className="mt-1 text-2xl font-black text-[#11205A]">{generation.title}</h3>
        </div>
      </div>
      <p className="mt-5 font-bold leading-7 text-[#344054]">{generation.message}</p>
      <ul className="mt-5 grid gap-2">
        {generation.pledges.slice(0, 4).map((pledge) => (
          <li key={pledge} className="flex gap-2 text-sm leading-6 text-[#667085]">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
            {pledge}
          </li>
        ))}
      </ul>
    </article>
  );
}
