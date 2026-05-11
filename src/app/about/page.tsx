import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { careers, education, profileHighlights } from "@/data/profile";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "서보영 소개 | 서보영.kr",
  description: "듣고, 고민하고, 해결하는 달서구의원 후보 서보영을 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page grid gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-center">
          <ProfileCard />
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">서보영 소개</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">듣고, 고민하고, 해결하는 달서구의원 후보</h1>
            <p className="mt-5 text-lg leading-8 text-[#344054]">
              서보영은 달서구의회에서 지역의 목소리를 듣고 행정과 예산을 다뤄온 현역 구의원입니다. 진천·유천·대곡의 보육, 교육, 복지, 교통 문제를 생활 속에서 보고, 주민과 함께 해법을 만들겠습니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/pledges" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0052B8] px-6 py-4 font-black text-white">
                핵심 공약 보기
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/voice" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD84D] px-6 py-4 font-black text-[#11205A]">
                의견 남기기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionTitle eyebrow="핵심 강점" title="현역의 경험, 예산과 행정을 아는 실무 감각" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {profileHighlights.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-[#0052B8]">{item.title}</h2>
                <p className="mt-3 leading-7 text-[#667085]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="주요 경력" title="지역과 의회를 모두 아는 후보" />
            <div className="mt-8 grid gap-3">
              {careers.map((item) => (
                <p key={item} className="flex gap-2 rounded-2xl bg-white px-4 py-3 font-black text-[#11205A] shadow-sm">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="학력·배경" title="진천·유천·대곡 생활권을 이해합니다" />
            <div className="mt-8 grid gap-3">
              {education.map((item) => (
                <p key={item} className="flex gap-2 rounded-2xl bg-white px-4 py-3 font-black text-[#11205A] shadow-sm">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionTitle eyebrow="의정활동" title="자료를 보고, 현장을 듣고, 의회에서 묻겠습니다" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <CampaignImageBlock src={siteConfig.images.councilMeeting} alt="의정활동 중 자료를 검토하는 서보영 후보" title="예산과 행정을 아는 후보" description="회의장과 자료 앞에서 지역 문제의 근거를 확인해 왔습니다." />
            <CampaignImageBlock src={siteConfig.images.councilSpeech} alt="의회에서 발언하는 서보영 후보" title="의회에서 말해본 사람" description="주민의 불편을 의회에서 묻고 행정에 요구하는 경험을 쌓아왔습니다." />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <CampaignImageBlock src={siteConfig.images.busCampaign} alt="버스 안에서 시민을 만나는 서보영 후보" title="시민이 있는 곳으로 가겠습니다" description="버스에서, 골목에서, 학교 앞에서 시민의 목소리를 듣겠습니다." />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <CTASection title="아이키우기 좋은 동네를 함께 만들겠습니다" description="핵심 공약을 확인하고 우리 동네 의견을 남겨주세요." href="/pledges" buttonLabel="핵심 공약 보기" tone="yellow" />
        </div>
      </section>
    </>
  );
}
