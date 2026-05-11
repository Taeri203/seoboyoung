import { siteConfig } from "@/data/site";
import type { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [
  {
    title: "보육·교육 공약 이미지",
    description: "동네 보육 공약과 동네 교육 공약을 한눈에 볼 수 있는 홍보 이미지입니다.",
    src: siteConfig.images.pledgeChildEducation,
    alt: "서보영 후보 동네 보육 교육 공약 이미지",
    kind: "공약 이미지",
  },
  {
    title: "김부겸 시장 후보와 함께한 현장 사진",
    description: "지역과 시정을 잇는 현장성을 보여주는 대표 이미지입니다.",
    src: siteConfig.images.kimField,
    alt: "김부겸 시장 후보와 함께한 서보영 후보 현장 사진",
    kind: "현장 사진",
  },
  {
    title: "버스 안 선거운동 사진",
    description: "시민 곁으로 찾아가는 생활정치의 장면입니다.",
    src: siteConfig.images.busCampaign,
    alt: "버스 안에서 시민을 만나는 서보영 후보",
    kind: "현장 사진",
  },
  {
    title: "복지·교통 공약 이미지",
    description: "동네 복지 공약과 동네 교통 공약을 정리한 홍보 이미지입니다.",
    src: siteConfig.images.pledgeWelfareTraffic,
    alt: "서보영 후보 동네 복지 교통 공약 이미지",
    kind: "공약 이미지",
  },
  {
    title: "도시설계·소상공인 공약 이미지",
    description: "도시설계와 지역 소상공인 활성화 공약을 담은 홍보 이미지입니다.",
    src: siteConfig.images.pledgeCityBusiness,
    alt: "서보영 후보 도시설계 소상공인 공약 이미지",
    kind: "공약 이미지",
  },
  {
    title: "의회 발언 사진",
    description: "의회에서 발언하는 검증된 현역 구의원의 모습입니다.",
    src: siteConfig.images.councilSpeech,
    alt: "의회에서 발언하는 서보영 후보",
    kind: "의정활동",
  },
  {
    title: "의정활동 회의 사진",
    description: "자료를 검토하고 행정을 살피는 의정활동 장면입니다.",
    src: siteConfig.images.councilMeeting,
    alt: "의정활동 중 자료를 검토하는 서보영 후보",
    kind: "의정활동",
  },
  {
    title: "공식 프로필 사진",
    description: "서보영 후보 공식 프로필 이미지입니다.",
    src: siteConfig.images.profileSmile,
    alt: "서보영 후보 공식 프로필 사진",
    kind: "프로필",
  },
];
