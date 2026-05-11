import Link from "next/link";
import { ArrowRight, Images, MapPinned, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

const badges = ["김부겸 시장 후보와 함께", "현 달서구의회 의원", "보육·교육·복지·교통", "시민들에게 약속드립니다"];

export function HeroSection() {
  return (
    <section className="campaign-gradient overflow-hidden">
      <div className="container-page grid min-h-[calc(100svh-72px)] items-center gap-8 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <div className="relative z-10 text-center lg:text-left">
          <p className="inline-flex rounded-full border border-[#B9DBFF] bg-white/88 px-4 py-2 text-sm font-black text-[#0052B8] shadow-sm">
            {siteConfig.party} · {siteConfig.electionName}
          </p>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#11205A] md:text-7xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-3 text-[4.8rem] font-black leading-none tracking-[-0.08em] text-[#0052B8] sm:text-[6rem] md:text-[8rem]">
            {siteConfig.candidateName}
          </p>
          <p className="mt-4 text-2xl font-black text-[#11205A] md:text-3xl">{siteConfig.heroTitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium leading-8 text-[#344054] lg:mx-0">
            진천·유천·대곡의 보육, 교육, 복지, 교통을 생활 속에서 바꾸겠습니다. 현역 구의원의 경험으로 듣고,
            고민하고, 해결하겠습니다.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="/pledges" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0052B8] px-7 py-4 font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5">
              핵심 공약 보기
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link href="/gallery" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD84D] px-7 py-4 font-black text-[#11205A] shadow-lg transition hover:-translate-y-0.5">
              <Images size={18} aria-hidden />
              공약 이미지 보기
            </Link>
            <Link href="/voice" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B9DBFF] bg-white/90 px-7 py-4 font-black text-[#11205A] shadow-lg transition hover:-translate-y-0.5">
              <MessageSquareText size={18} aria-hidden />
              의견 남기기
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-[#0052B8] opacity-10 blur-3xl" aria-hidden />
          <div className="image-card-glow relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white p-3">
            <ImageWithFallback
              src={siteConfig.images.kimField}
              alt="김부겸 시장 후보와 함께한 서보영 후보 현장 사진"
              className="h-[430px] rounded-[1.7rem] md:h-[590px]"
              imgClassName="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-b-[1.7rem] bg-gradient-to-t from-[#11205A]/80 via-[#11205A]/18 to-transparent p-5 pt-24 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FFD84D] px-3 py-1 text-sm font-black text-[#11205A]">
                <MapPinned size={15} aria-hidden />
                {siteConfig.area}
              </p>
              <p className="mt-3 text-2xl font-black">시민들에게 약속드립니다</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {badges.map((badge) => (
              <span key={badge} className="rounded-2xl border border-[#B9DBFF] bg-white/88 px-3 py-2 text-center text-xs font-black text-[#11205A] shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
