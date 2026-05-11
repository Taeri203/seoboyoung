"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Images, MapPinned, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/data/site";

const heroSlides = [
  {
    src: siteConfig.images.kimField,
    alt: "김부겸 시장 후보와 함께한 서보영 후보 현장 사진",
    eyebrow: "힘 있는 동행",
    title: "지역 변화를 함께 만들겠습니다",
    description: "진천·유천·대곡의 생활 현안을 더 크게 듣고 더 책임 있게 챙기겠습니다.",
    imgClassName: "object-cover object-center",
  },
  {
    src: siteConfig.images.busCampaign,
    alt: "버스 안에서 시민을 만나는 서보영 후보",
    eyebrow: "시민 곁에서",
    title: "버스에서, 골목에서 듣겠습니다",
    description: "생활 속 불편과 제안을 직접 듣고 공약으로 이어가겠습니다.",
    imgClassName: "object-cover object-center",
  },
  {
    src: siteConfig.images.councilSpeech,
    alt: "의회에서 발언하는 서보영 후보",
    eyebrow: "의회에서 검증",
    title: "묻고 확인하고 바꾸겠습니다",
    description: "주민의 불편을 의회에서 묻고 행정에 요구해 온 경험으로 일하겠습니다.",
    imgClassName: "object-cover object-center",
  },
  {
    src: siteConfig.images.councilMeeting,
    alt: "의정활동 중 자료를 검토하는 서보영 후보",
    eyebrow: "준비된 실행력",
    title: "자료를 보고 예산을 살피겠습니다",
    description: "말보다 근거로, 구호보다 실행 과정으로 지역 변화를 만들겠습니다.",
    imgClassName: "object-cover object-center",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

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
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <Link href="/pledges" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0052B8] px-6 py-4 font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5">
              핵심 공약 보기
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link href="/gallery" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#FFD84D] px-6 py-4 font-black text-[#11205A] shadow-lg transition hover:-translate-y-0.5">
              <Images size={18} aria-hidden />
              공약 이미지 보기
            </Link>
            <Link href="/voice" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#B9DBFF] bg-white/90 px-6 py-4 font-black text-[#11205A] shadow-lg transition hover:-translate-y-0.5">
              <MessageSquareText size={18} aria-hidden />
              의견 남기기
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-[#0052B8] opacity-10 blur-3xl" aria-hidden />
          <div className="image-card-glow relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white p-3">
            <div className="relative z-0 h-[430px] overflow-hidden rounded-[1.7rem] md:h-[590px]">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`pointer-events-none absolute inset-0 h-full w-full transition duration-1000 ease-out ${
                    activeSlide === index ? "z-10 scale-100 opacity-100" : "z-0 scale-[1.03] opacity-0"
                  } ${slide.imgClassName}`}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-3 bottom-3 z-20 rounded-b-[1.7rem] bg-gradient-to-t from-[#11205A]/80 via-[#11205A]/18 to-transparent p-5 pt-24 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FFD84D] px-3 py-1 text-sm font-black text-[#11205A]">
                <MapPinned size={15} aria-hidden />
                {currentSlide.eyebrow}
              </p>
              <p className="mt-3 text-2xl font-black">{currentSlide.title}</p>
              <p className="mt-2 max-w-md text-sm font-bold leading-6 text-blue-50">{currentSlide.description}</p>
            </div>
            <div className="absolute right-5 top-5 z-30 flex gap-2" aria-label="메인 사진 선택">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition ${
                    activeSlide === index ? "w-8 bg-[#FFD84D]" : "w-2.5 bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`${index + 1}번째 메인 사진 보기`}
                  aria-pressed={activeSlide === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
