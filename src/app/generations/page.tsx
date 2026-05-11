import type { Metadata } from "next";
import { CTASection } from "@/components/common/CTASection";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GenerationCard } from "@/components/cards/GenerationCard";
import { generations } from "@/data/generations";

export const metadata: Metadata = {
  title: "세대별 생활공약 | 서보영.kr",
  description: "아이·학부모, 학생·청소년, 청년, 장년, 어르신, 소상공인을 위한 세대별 공약입니다.",
};

export default function GenerationsPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">세대별 공약</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">세대별 생활공약</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">같은 동네라도 필요한 변화는 세대마다 다릅니다.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionTitle
                eyebrow="생애주기별 생활정치"
                title="아이부터 어르신까지, 생활에 필요한 변화를 챙기겠습니다"
                description="돌봄과 교육, 일자리와 복지, 상권의 활력을 세대별 생활 속에서 살피겠습니다."
              />
              <div className="mt-6 rounded-[2rem] bg-[#11205A] p-6 text-white">
                <p className="text-sm font-black text-[#FFD84D]">정책 기준</p>
                <p className="mt-3 text-2xl font-black leading-8">돌봄, 교육, 일자리, 복지, 상권을 생활권 안에서 연결합니다.</p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {generations.map((generation, index) => (
                <GenerationCard key={generation.audience} generation={generation} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-page">
          <CTASection title="우리 가족에게 필요한 공약을 알려주세요" description="세대별 공약은 주민 의견을 반영해 계속 다듬겠습니다." href="/voice" buttonLabel="의견 남기기" tone="yellow" />
        </div>
      </section>
    </>
  );
}
