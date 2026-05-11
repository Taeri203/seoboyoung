import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "공약 이미지 | 서보영.kr",
  description: "서보영 후보의 공약 이미지와 현장 사진을 한눈에 확인하세요.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">공약 이미지</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">공약 이미지</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">서보영의 공약과 현장 활동을 사진으로 확인하세요.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page">
          <SectionTitle title="보육·교육부터 도시설계까지" description="이미지를 클릭하면 크게 볼 수 있습니다." />
          <div className="mt-10">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>
    </>
  );
}
