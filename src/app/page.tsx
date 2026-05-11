import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { SectionTitle } from "@/components/common/SectionTitle";
import { DistrictCard } from "@/components/cards/DistrictCard";
import { StatCard } from "@/components/cards/StatCard";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { HeroSection } from "@/components/sections/HeroSection";
import { StaticMap } from "@/components/sections/StaticMap";
import { districts } from "@/data/districts";
import { pledgeGroups, promiseCards } from "@/data/pledges";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "서보영.kr | 아이키우기 좋은 동네",
  description: "더불어민주당 서보영 달서구의원선거 후보의 진천·유천·대곡 생활공약을 확인하세요.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="핵심 지역" value="진천·유천·대곡" />
            <StatCard label="핵심 방향" value="아이키우기 좋은 동네" />
            <StatCard label="후보 강점" value="현역 구의원 실행력" />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="3대 핵심 약속" title="시민들에게 약속드립니다" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {promiseCards.map((promise, index) => (
              <article key={promise} className="rounded-[2rem] bg-white p-7 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0052B8] text-lg font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-black text-[#11205A]">{promise}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <CampaignImageBlock
            src={siteConfig.images.councilSpeech}
            alt="의회에서 발언하는 서보영 후보"
            title="말이 아니라, 의회에서 일해본 사람"
            description="현 달서구의회 의원으로서 지역 현안을 듣고, 자료를 검토하고, 행정과 예산을 다뤄왔습니다."
          />
          <div>
            <SectionTitle title="검증된 현역 구의원의 실행력" description="서보영은 약속을 말로만 남기지 않고 실행 과정으로 만들겠습니다." />
            <div className="mt-6 grid gap-3">
              {["자료를 보고", "현장에서 듣고", "의회에서 묻겠습니다"].map((item) => (
                <p key={item} className="flex gap-2 rounded-2xl bg-[#EAF4FF] px-4 py-3 font-black text-[#11205A]">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E8] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="공약 이미지" title="홍보물 속 약속을 자세히 확인하세요" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pledgeGroups.filter((_, index) => [0, 2, 4].includes(index)).map((pledge) => (
              <article key={pledge.id} className="rounded-[2rem] bg-white p-5 shadow-sm">
                <CampaignImageBlock src={pledge.image} alt={pledge.imageAlt} title={pledge.category} description={pledge.summary} />
                <Link href={`/pledges#${pledge.id}`} className="mt-5 inline-flex items-center gap-2 font-black text-[#0052B8]">
                  자세히 보기
                  <ArrowRight size={17} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionTitle eyebrow="동별 공약" title="진천·유천·대곡, 생활권별로 다르게 보겠습니다" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {districts.map((district) => <DistrictCard key={district.name} district={district} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#11205A] py-16 text-white">
        <div className="container-page grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="inline-flex rounded-full bg-[#FFD84D] px-4 py-2 text-sm font-black text-[#11205A]">시민 곁으로 가는 후보</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">버스에서, 골목에서, 학교 앞에서 듣겠습니다</h2>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              의회 안에서만이 아니라 버스에서, 골목에서, 학교 앞에서, 시장에서 시민의 목소리를 듣겠습니다.
            </p>
          </div>
          <CampaignImageBlock
            src={siteConfig.images.busCampaign}
            alt="버스 안에서 시민을 만나는 서보영 후보"
            title="시민의 하루 가까이"
            description="생활정치는 시민을 만나는 자리에서 시작됩니다."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionTitle eyebrow="우리동네 공약지도" title="지역 현안을 지도처럼 한눈에" description="진천·유천·대곡의 생활 불편과 개선 약속을 지역별로 확인하세요." />
          <div className="mt-8">
            <StaticMap preview />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <CTASection title="우리 동네 의견을 남겨주세요" description="작은 의견도 모이면 동네를 바꾸는 공약이 됩니다." href="/voice" buttonLabel="의견 남기기" />
        </div>
      </section>
    </>
  );
}
