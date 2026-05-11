import { Baby, BriefcaseBusiness, GraduationCap, HeartHandshake, School, Store } from "lucide-react";
import { siteConfig } from "@/data/site";
import type { Generation } from "@/types";

export const generations: Generation[] = [
  {
    audience: "아이·학부모",
    title: "아이 키우기 좋은 동네",
    message: "양육부담은 낮추고, 가족행복은 높이겠습니다.",
    image: siteConfig.images.pledgeChildEducation,
    icon: Baby,
    pledges: [
      "24시간 맞춤형 돌봄센터 유치",
      "한실 숲속 도서관 보육·육아 시설 확충",
      "유천동 장난감 도서관 프로그램 확대",
      "진천동 어린이보호구역 확대",
      "안전한 어린이 보행환경 마련",
    ],
  },
  {
    audience: "학생·청소년",
    title: "교육 접근성이 좋은 동네",
    message: "통학로와 학습권을 함께 보는 교육환경을 만들겠습니다.",
    image: siteConfig.images.pledgeChildEducation,
    icon: School,
    pledges: [
      "유천동 중학교 설립 논의",
      "한솔초 중학교 전환 논의 가능성 검토",
      "상인·월성 고등학교 학군과 학원가 접근성 향상",
      "교육 접근성과 안전을 함께 보는 환경 조성",
    ],
  },
  {
    audience: "청년",
    title: "기회가 있는 동네",
    message: "지역 상권과 청년의 활동 기반을 함께 보겠습니다.",
    icon: GraduationCap,
    pledges: [
      "청년의 다양한 기회 확대",
      "지역 상권과 연계한 청년 활동 기반 마련",
      "골목형 상점가와 청년 창업 연계 검토",
      "현실적인 생활 기반 지원",
    ],
  },
  {
    audience: "장년",
    title: "다시 도약할 수 있는 동네",
    message: "일자리, 복지, 교육이 연결되는 생활 지원망을 만들겠습니다.",
    icon: BriefcaseBusiness,
    pledges: [
      "장년 재도약 기회 시스템 구축",
      "관내 노인복지센터들과 연계한 생활지원 체계",
      "일자리·복지·교육 프로그램 연계",
      "행정과 복지가 연결되는 지원망 구축",
    ],
  },
  {
    audience: "어르신",
    title: "부담 없는 노인복지",
    message: "복지관 접근성과 프로그램, 돌봄 사각지대를 함께 살피겠습니다.",
    image: siteConfig.images.pledgeWelfareTraffic,
    icon: HeartHandshake,
    pledges: [
      "월배노인종합복지관 프로그램 확대",
      "재가노인복지센터와 연계한 노인복지 시스템 향상",
      "복지관 접근성, 프로그램, 지원 확대",
      "위기가정과 어르신 돌봄 사각지대 발굴",
    ],
  },
  {
    audience: "소상공인",
    title: "상권이 살아나는 동네",
    message: "주차와 접근성, 공모사업을 함께 챙기겠습니다.",
    image: siteConfig.images.pledgeCityBusiness,
    icon: Store,
    pledges: [
      "월배시장 주차장 설립 추진",
      "유천동 골목형 상점가 지정 지원",
      "주차와 접근성 개선",
      "공모사업을 통한 상권 지원 확대",
    ],
  },
];
