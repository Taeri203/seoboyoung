import { siteConfig } from "@/data/site";
import type { Pledge } from "@/types";

export const pledgeGroups: Pledge[] = [
  {
    id: "childcare",
    category: "동네 보육 공약",
    title: "아이를 맡길 곳이 있는 동네",
    summary:
      "아이를 맡길 곳이 있어야 부모의 하루가 편해집니다. 서보영은 동네 안에서 해결되는 돌봄 체계를 만들겠습니다.",
    image: siteConfig.images.pledgeChildEducation,
    imageAlt: "서보영 후보 동네 보육 교육 공약 이미지",
    tasks: [
      "구·월성1동 주민센터에 24시간 맞춤형 돌봄센터 유치",
      "기존 건물 리모델링을 통한 현실적인 예산 활용",
      "2027년 말 완공 목표인 한실 숲속 도서관에 보육·육아 시설 확충",
      "아이사랑카드 사용처 확대를 통한 현실적 사용 기반 마련",
      "유천동 장난감 도서관 프로그램 확대",
    ],
  },
  {
    id: "education",
    category: "동네 교육 공약",
    title: "교육 접근성이 좋은 동네",
    summary: "교육은 시설 하나의 문제가 아니라 통학, 학군, 안전, 접근성의 문제입니다.",
    image: siteConfig.images.pledgeChildEducation,
    imageAlt: "서보영 후보 동네 보육 교육 공약 이미지",
    tasks: [
      "유천동 중학교 설립 논의를 위한 주민 의견 수렴",
      "한솔초등학교 중학교 전환 논의 가능성 검토",
      "상인·월성 고등학교 학군과 학원가에 대한 유천동 접근성 향상 체계 마련",
      "진천동 어린이보호구역 확대",
      "안전한 어린이 보행환경 마련",
    ],
  },
  {
    id: "welfare",
    category: "동네 복지 공약",
    title: "생활권 안에서 이어지는 복지",
    summary:
      "복지는 시설 안에서만 이루어지지 않습니다. 위기가정, 어르신, 청년과 장년까지 생활권 안에서 연결되어야 합니다.",
    image: siteConfig.images.pledgeWelfareTraffic,
    imageAlt: "서보영 후보 동네 복지 교통 공약 이미지",
    tasks: [
      "지역 내 위기가정 발굴과 현실적인 지원",
      "월배노인종합복지관 프로그램과 지원 확대",
      "부담 없는 노인종합복지관으로 발전",
      "재가노인복지센터와 연계한 노인복지 시스템 향상",
      "청년의 다양한 기회와 장년 재도약 기반 시스템 구축",
    ],
  },
  {
    id: "traffic",
    category: "동네 교통 공약",
    title: "매일 체감하는 교통 불편 개선",
    summary: "교통은 주민이 매일 체감하는 문제입니다. 공사 이후의 불편까지 미리 보고 설계해야 합니다.",
    image: siteConfig.images.pledgeWelfareTraffic,
    imageAlt: "서보영 후보 동네 복지 교통 공약 이미지",
    tasks: [
      "한샘초등학교에서 월배아이파크2차 네거리 간 불안전한 도로의 완공 추진",
      "상화로 지하화 공사 준공 대비 주민 불편 최소화",
      "유천포스코더샵 아파트와 대곡역 화성파크드림 아파트 주민 의견 반영 도로 설계 제안",
      "수목원 입구 삼거리 교통체계 개선",
      "육교 개설 재추진",
    ],
  },
  {
    id: "city",
    category: "동네 도시설계 공약",
    title: "주민에게 돌아오는 생활 인프라",
    summary: "도시설계는 지도 위 선이 아니라 주민의 삶을 바꾸는 생활 인프라입니다.",
    image: siteConfig.images.pledgeCityBusiness,
    imageAlt: "서보영 후보 도시설계 소상공인 공약 이미지",
    tasks: [
      "월배차량기지에서 월곡로 간 도시계획실효도로 재설정과 착공 기반 마련",
      "월배차량기지 후적지를 주민에게 돌려주는 도시계획 의견 제시",
      "복개된 진천천을 주민에게 돌려줄 수 있는 생태하천 사업 추진",
      "진천동 주택가 주차장 부족 해소를 위한 공한지 주차장 확대",
    ],
  },
  {
    id: "business",
    category: "지역 소상공인 활성화",
    title: "상권이 살아나는 동네",
    summary: "상권이 살아야 동네가 살아납니다. 주차, 접근성, 행정 지원을 함께 보겠습니다.",
    image: siteConfig.images.pledgeCityBusiness,
    imageAlt: "서보영 후보 도시설계 소상공인 공약 이미지",
    tasks: [
      "중소벤처기업부 공모사업 진행을 통한 월배시장 주차장 설립 추진",
      "유천동 일대 골목형 상점가 지정 지원",
      "골목상권 지원 확대를 위한 토대 마련",
    ],
  },
];

export const promiseCards = [
  "24시간 맞춤형 아동돌봄센터 유치",
  "양질의 돌봄, 안전이 보장되는 학교",
  "관내 노인복지센터와 연계한 장년 재도약 기회 시스템 구축",
];
