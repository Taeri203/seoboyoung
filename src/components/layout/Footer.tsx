import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#11205A] pb-24 pt-12 text-white md:pb-12">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-3xl font-black">{siteConfig.candidateName}</p>
          <p className="mt-2 text-blue-100">{siteConfig.party} {siteConfig.electionName}</p>
          <p className="mt-1 text-blue-100">{siteConfig.area}</p>
        </div>
        <div className="grid gap-2 text-sm leading-7 text-blue-50">
          <p>전화: {siteConfig.phone}</p>
          <Link href="/privacy" className="font-bold text-[#FFD84D]">개인정보처리방침</Link>
          <p>본 사이트의 공약 및 후보자 정보는 선거사무소 검수 후 업데이트될 수 있습니다.</p>
          <p>공약 이미지는 후보 선거홍보물 내용을 바탕으로 구성되었습니다.</p>
        </div>
      </div>
    </footer>
  );
}
