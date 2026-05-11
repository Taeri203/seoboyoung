import type { Metadata } from "next";
import { MapPinned } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { SectionTitle } from "@/components/common/SectionTitle";
import { StaticMap } from "@/components/sections/StaticMap";
import { mapMarkers } from "@/data/map";

export const metadata: Metadata = {
  title: "우리동네 공약지도 | 서보영.kr",
  description: "진천·유천·대곡의 보육, 교육, 복지, 교통, 도시설계, 소상공인 공약지도입니다.",
};

const areaSummaries = [
  {
    area: "진천동",
    description: "어린이 보행안전, 진천천, 주택가 주차, 월배시장 접근성",
    count: mapMarkers.filter((marker) => marker.area === "진천동").length,
  },
  {
    area: "유천동",
    description: "보육·교육 수요, 상화로 공사 이후 교통, 골목상권",
    count: mapMarkers.filter((marker) => marker.area === "유천동").length,
  },
  {
    area: "대곡",
    description: "대곡역 주변 교통, 수목원 입구, 한실 숲속 도서관",
    count: mapMarkers.filter((marker) => marker.area === "대곡").length,
  },
];

export default function MapPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">공약지도</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">우리동네 공약지도</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">진천·유천·대곡의 생활 현안을 살피고, 주민이 체감할 변화를 약속드립니다.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="생활권별 현안"
            title="진천·유천·대곡 생활권을 한눈에"
            description="보육, 교육, 복지, 교통, 도시설계, 상권 현안을 지역별로 묶어 확인할 수 있습니다."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {areaSummaries.map((item) => (
              <article key={item.area} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#0052B8]">
                    <MapPinned size={22} aria-hidden />
                  </span>
                  <span className="rounded-full bg-[#FFF7D6] px-3 py-1 text-xs font-black text-[#11205A]">{item.count}개 현안</span>
                </div>
                <h2 className="mt-4 text-2xl font-black text-[#11205A]">{item.area}</h2>
                <p className="mt-2 text-sm leading-6 text-[#667085]">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <StaticMap />
          </div>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <CTASection title="지도에 없는 의견도 남겨주세요" description="우리 동네 불편을 알려주시면 현장점검과 공약 보완에 참고하겠습니다." href="/voice" buttonLabel="유권자의 소리 남기기" />
        </div>
      </section>
    </>
  );
}
