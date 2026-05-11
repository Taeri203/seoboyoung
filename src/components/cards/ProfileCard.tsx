import { siteConfig } from "@/data/site";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function ProfileCard() {
  return (
    <aside className="overflow-hidden rounded-[2rem] bg-[#11205A] text-white shadow-2xl">
      <div className="bg-gradient-to-b from-white to-[#EAF4FF] px-4 pt-4">
        <ImageWithFallback
          src={siteConfig.images.profileSmile}
          alt="서보영 후보 공식 프로필 사진"
          className="h-[430px] rounded-t-[1.4rem] bg-white md:h-[500px]"
          imgClassName="object-contain object-top"
        />
      </div>
      <div className="p-6">
        <p className="text-4xl font-black">{siteConfig.candidateName}</p>
        <p className="mt-2 text-blue-100">{siteConfig.party} {siteConfig.electionName}</p>
        <p className="mt-1 text-blue-100">{siteConfig.area}</p>
        <p className="mt-5 rounded-2xl bg-white/10 px-4 py-3 font-black">현 달서구의회 의원</p>
      </div>
    </aside>
  );
}
