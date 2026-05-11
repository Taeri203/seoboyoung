import type { NavItem } from "@/types";

export const siteConfig = {
  siteName: "서보영.kr",
  candidateName: "서보영",
  party: "더불어민주당",
  electionName: "달서구의원선거 후보",
  area: "진천·유천·대곡",
  slogan: "아이키우기 좋은 동네!",
  heroTitle: "양육부담 DOWN, 가족행복 UP",
  heroSubtitle: "시민들에게 약속드립니다",
  phone: "010-8390-9797",
  phoneHref: "tel:01083909797",
  images: {
    kimField: "/images/candidate/candidate-kim-bugeom-field.jpg",
    busCampaign: "/images/candidate/candidate-bus-campaign.jpg",
    councilSpeech: "/images/candidate/candidate-council-speech.jpg",
    councilMeeting: "/images/candidate/candidate-council-meeting.jpg",
    profileSmile: "/images/candidate/candidate-profile-smile.jpg",
    pledgeChildEducation: "/images/pledges/pledge-child-education.jpg",
    pledgeWelfareTraffic: "/images/pledges/pledge-welfare-traffic.jpg",
    pledgeCityBusiness: "/images/pledges/pledge-city-business.jpg",
  },
};

export const navItems: NavItem[] = [
  { label: "서보영 소개", href: "/about" },
  { label: "핵심 공약", href: "/pledges" },
  { label: "동별 공약", href: "/districts" },
  { label: "세대별 공약", href: "/generations" },
  { label: "공약지도", href: "/map" },
  { label: "유권자의 소리", href: "/voice" },
  { label: "공약 이미지", href: "/gallery" },
];

export const defaultSeo = {
  title: "서보영.kr | 아이키우기 좋은 동네",
  description:
    "더불어민주당 서보영 달서구의원선거 후보의 진천·유천·대곡 생활공약, 보육·교육·복지·교통 공약을 확인하세요.",
};
