"use client";

import { useMemo, useState } from "react";
import { MapPin, Route } from "lucide-react";
import { mapCategories, mapMarkers } from "@/data/map";
import type { MapCategory, MapMarker } from "@/types";

function matchesCategory(marker: MapMarker, category: MapCategory) {
  if (category === "전체") return true;
  if (category === "안전") return marker.category === "교육·안전";
  return marker.category === category;
}

const categoryColors: Record<MapMarker["category"], string> = {
  보육: "bg-[#FFD84D] text-[#11205A]",
  교육: "bg-[#0052B8] text-white",
  "교육·안전": "bg-[#0052B8] text-white",
  복지: "bg-[#6E56CF] text-white",
  교통: "bg-[#10B981] text-white",
  도시설계: "bg-[#F97316] text-white",
  소상공인: "bg-[#EF4444] text-white",
  주차: "bg-[#475467] text-white",
  안전: "bg-[#0052B8] text-white",
};

export function StaticMap({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<MapCategory>("전체");
  const [selected, setSelected] = useState<MapMarker>(mapMarkers[0]);
  const visibleMarkers = useMemo(() => mapMarkers.filter((marker) => matchesCategory(marker, category)), [category]);
  const markersToRender = preview ? mapMarkers.slice(0, 8) : visibleMarkers;

  function handleCategoryChange(nextCategory: MapCategory) {
    setCategory(nextCategory);
    const nextMarkers = mapMarkers.filter((marker) => matchesCategory(marker, nextCategory));
    if (!nextMarkers.some((marker) => marker.title === selected.title)) {
      setSelected(nextMarkers[0] || mapMarkers[0]);
    }
  }

  return (
    <div className={`grid gap-6 ${preview ? "" : "lg:grid-cols-[1.08fr_0.92fr]"}`}>
      <div className="rounded-[2rem] border border-[#B9DBFF] bg-[#EAF4FF] p-3 shadow-xl shadow-blue-900/10">
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          <div className="flex flex-col gap-3 border-b border-[#E5E7EB] p-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-[#FFF7D6] px-3 py-1 text-xs font-black text-[#11205A]">진천 · 유천 · 대곡 생활권</p>
              <h2 className="mt-3 text-2xl font-black text-[#11205A]">지역 현안 공약지도</h2>
            </div>
            <p className="text-sm leading-6 text-[#667085]">마커를 선택하면 현안과 약속을 볼 수 있습니다.</p>
          </div>

          <div className="relative h-[520px] overflow-hidden bg-[#F8FBFF] md:h-[620px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="img" aria-label="진천동, 유천동, 대곡 생활권 공약지도">
              <defs>
                <pattern id="mapGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#D9EAFB" strokeWidth="0.35" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#mapGrid)" />
              <path d="M4 77 C22 69 38 76 53 66 C67 56 79 60 96 49" fill="none" stroke="#B9DBFF" strokeWidth="9" strokeLinecap="round" opacity="0.7" />
              <path d="M4 77 C22 69 38 76 53 66 C67 56 79 60 96 49" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
              <path d="M7 21 C25 13 40 17 53 25 C66 33 77 28 93 18" fill="none" stroke="#FFE88A" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
              <path d="M15 8 L10 88" fill="none" stroke="#D0D5DD" strokeWidth="2" strokeDasharray="2 3" opacity="0.75" />
              <path d="M48 5 L42 90" fill="none" stroke="#D0D5DD" strokeWidth="2" strokeDasharray="2 3" opacity="0.75" />
              <path d="M74 12 L82 92" fill="none" stroke="#D0D5DD" strokeWidth="2" strokeDasharray="2 3" opacity="0.75" />
              <path d="M6 14 L36 9 L42 44 L34 83 L6 88 Z" fill="#EAF4FF" stroke="#B9DBFF" strokeWidth="0.8" opacity="0.94" />
              <path d="M39 10 L67 8 L72 44 L65 86 L35 83 L43 44 Z" fill="#FFF7D6" stroke="#FFE88A" strokeWidth="0.8" opacity="0.94" />
              <path d="M70 17 L94 13 L96 82 L72 88 L66 47 Z" fill="#F8FAFC" stroke="#D0D5DD" strokeWidth="0.8" opacity="0.97" />
              <text x="18" y="18" fill="#11205A" fontSize="4" fontWeight="800">진천동</text>
              <text x="49" y="17" fill="#11205A" fontSize="4" fontWeight="800">유천동</text>
              <text x="80" y="24" fill="#11205A" fontSize="4" fontWeight="800">대곡</text>
              <text x="10" y="82" fill="#0052B8" fontSize="2.8" fontWeight="800">진천천 · 주택가</text>
              <text x="48" y="82" fill="#0052B8" fontSize="2.8" fontWeight="800">상화로 생활축</text>
              <text x="76" y="84" fill="#0052B8" fontSize="2.8" fontWeight="800">대곡역 · 수목원</text>
            </svg>

            {markersToRender.map((marker) => {
              const isSelected = selected.title === marker.title;

              return (
                <button
                  key={marker.title}
                  type="button"
                  onClick={() => setSelected(marker)}
                  className="group absolute -translate-x-1/2 -translate-y-full"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  aria-label={`${marker.title} 공약 보기`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white shadow-xl transition ${
                      isSelected ? "scale-110 bg-[#0052B8] text-white ring-4 ring-[#FFD84D]/70" : categoryColors[marker.category]
                    }`}
                  >
                    <MapPin size={21} fill="currentColor" aria-hidden />
                  </span>
                  <span
                    className={`pointer-events-none absolute left-1/2 top-12 hidden w-40 -translate-x-1/2 rounded-2xl border border-[#E5E7EB] bg-white px-3 py-2 text-center text-xs font-black leading-5 text-[#11205A] shadow-lg md:block ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {marker.title}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/80 bg-white/95 p-5 shadow-xl backdrop-blur md:left-5 md:right-auto md:max-w-md">
              <p className="text-xs font-black text-[#0052B8]">{selected.category} · {selected.area}</p>
              <p className="mt-2 text-xl font-black text-[#11205A]">{selected.title}</p>
              <p className="mt-2 font-bold text-[#0052B8]">{selected.issue}</p>
              <p className="mt-2 leading-7 text-[#667085]">{selected.pledge}</p>
            </div>
          </div>
        </div>
      </div>
      {!preview ? (
        <aside className="grid gap-4 lg:content-start">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Route size={19} className="text-[#0052B8]" aria-hidden />
              <p className="font-black text-[#11205A]">현안 분류</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
            {mapCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleCategoryChange(item)}
                className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                  category === item ? "border-[#0052B8] bg-[#0052B8] text-white" : "border-[#E5E7EB] bg-white text-[#11205A]"
                }`}
              >
                {item}
              </button>
            ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-xs font-black text-[#0052B8]">선택된 현안</p>
            <h3 className="mt-2 text-2xl font-black text-[#11205A]">{selected.title}</h3>
            <p className="mt-2 text-sm font-bold text-[#0052B8]">{selected.issue}</p>
            <p className="mt-3 leading-7 text-[#667085]">{selected.pledge}</p>
          </div>

          <div className="grid max-h-[460px] gap-2 overflow-y-auto pr-1">
            {visibleMarkers.map((marker) => (
              <button
                key={marker.title}
                type="button"
                onClick={() => setSelected(marker)}
                className={`rounded-2xl border p-4 text-left transition ${
                  selected.title === marker.title
                    ? "border-[#0052B8] bg-[#0052B8] text-white"
                    : "border-[#E5E7EB] bg-white text-[#11205A] hover:border-[#B9DBFF] hover:bg-[#F8FBFF]"
                }`}
              >
                <span className={`text-xs font-black ${selected.title === marker.title ? "text-[#FFD84D]" : "text-[#0052B8]"}`}>
                  {marker.category} · {marker.area}
                </span>
                <span className="mt-1 block font-black leading-6">{marker.title}</span>
              </button>
            ))}
          </div>
        </aside>
      ) : null}
    </div>
  );
}
