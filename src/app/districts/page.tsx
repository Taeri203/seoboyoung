import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { DistrictCard } from "@/components/cards/DistrictCard";
import { districts } from "@/data/districts";

export const metadata: Metadata = {
  title: "동별 공약 | 서보영.kr",
  description: "진천동, 유천동, 대곡 생활권별 서보영 후보의 생활공약입니다.",
};

export default function DistrictsPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">동별 공약</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">동별 공약</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">같은 생활권이라도 필요한 변화는 동마다 다릅니다.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {districts.map((district) => (
              <a
                key={district.name}
                href={`#${district.name}`}
                className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#B9DBFF] hover:shadow-xl"
              >
                <span className="inline-flex items-center gap-2 text-sm font-black text-[#0052B8]">
                  <MapPin size={16} fill="currentColor" aria-hidden />
                  {district.name}
                </span>
                <p className="mt-3 font-black leading-7 text-[#11205A]">{district.headline}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-8">
            {districts.map((district) => (
              <section key={district.name} id={district.name} className="scroll-mt-28">
                <DistrictCard district={district} />
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-page">
          <CTASection title="동네별 제안은 유권자의 소리로 남겨주세요" description="주민의 의견이 공약을 더 구체적으로 만듭니다." href="/voice" buttonLabel="의견 남기기" tone="yellow" />
        </div>
      </section>
    </>
  );
}
