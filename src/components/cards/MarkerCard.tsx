import { MapPin } from "lucide-react";
import type { MapMarker } from "@/types";

export function MarkerCard({ marker }: { marker: MapMarker }) {
  return (
    <article className="rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7D6] px-3 py-1 text-xs font-black text-[#11205A]">
        <MapPin size={14} className="text-[#0052B8]" aria-hidden />
        {marker.category}
      </span>
      <h3 className="mt-3 text-lg font-black text-[#11205A]">{marker.title}</h3>
      <p className="mt-2 text-sm font-bold text-[#0052B8]">{marker.issue}</p>
      <p className="mt-2 text-sm leading-6 text-[#667085]">{marker.pledge}</p>
    </article>
  );
}
