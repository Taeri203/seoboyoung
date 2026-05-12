import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { SectionTitle } from "@/components/common/SectionTitle";
import { VoiceForm } from "@/components/sections/VoiceForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "유권자의 소리 | 서보영.kr",
  description: "우리 동네 보육, 교육, 복지, 교통 의견을 서보영 후보에게 남겨주세요.",
};

export default function VoicePage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">유권자의 소리</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">유권자의 소리</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">우리 동네 보육, 교육, 복지, 교통 의견을 남겨주세요. 접수된 내용은 서보영 선거사무소 담당자에게 전달됩니다.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-5 self-start">
            <SectionTitle title="작은 의견도 동네를 바꿉니다" description="생활 속 불편과 필요한 변화를 편하게 남겨주세요. 접수된 의견은 공약 보완과 현장점검에 참고하겠습니다." />
            <article className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm">
              <ImageWithFallback
                src={siteConfig.images.busCampaign}
                alt="버스 안에서 시민을 만나는 서보영 후보"
                className="h-[420px] bg-[#FFF9E8] md:h-[500px] lg:h-[560px]"
                imgClassName="object-cover object-center"
              />
              <div className="p-6">
                <p className="text-sm font-black text-[#0052B8]">시민 곁에서 듣겠습니다</p>
                <h2 className="mt-2 text-2xl font-black text-[#11205A]">생활 속 목소리를 공약으로 이어가겠습니다</h2>
                <ul className="mt-5 grid gap-3">
                  {["우리 동네 불편", "아이 돌봄과 교육 제안", "교통·주차·상권 의견"].map((item) => (
                    <li key={item} className="flex gap-2 text-sm font-bold leading-6 text-[#344054]">
                      <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
          <VoiceForm />
        </div>
      </section>
    </>
  );
}
