import type { MapCategory, MapMarker } from "@/types";

export const mapCategories: MapCategory[] = [
  "전체",
  "보육",
  "교육",
  "복지",
  "교통",
  "도시설계",
  "소상공인",
  "주차",
  "안전",
];

export const mapMarkers: MapMarker[] = [
  { title: "진천동 어린이보호구역", category: "교육·안전", area: "진천동", issue: "어린이 보행환경 개선", pledge: "어린이보호구역 확대와 안전한 보행환경 마련", x: 22, y: 34 },
  { title: "유천동 장난감 도서관", category: "보육", area: "유천동", issue: "육아 프로그램 확대", pledge: "장난감 도서관 프로그램 확대", x: 58, y: 26 },
  { title: "한실 숲속 도서관", category: "보육", area: "대곡", issue: "보육·육아 시설 확충", pledge: "도서관 내 보육·육아 기능 강화", x: 74, y: 72 },
  { title: "유천동 중학교 논의 지역", category: "교육", area: "유천동", issue: "중학교 설립 논의", pledge: "주민 의견 수렴 후 논의 개시", x: 64, y: 42 },
  { title: "한솔초등학교 생활권", category: "교육", area: "유천동", issue: "중학교 전환 논의 가능성", pledge: "주민 의견을 최대한 수렴 후 검토", x: 70, y: 36 },
  { title: "월배노인종합복지관", category: "복지", area: "진천·유천", issue: "프로그램과 지원 확대", pledge: "부담 없는 노인종합복지관으로 발전", x: 44, y: 52 },
  { title: "재가노인복지센터 연계", category: "복지", area: "생활권", issue: "노인복지 시스템 향상", pledge: "재가노인복지센터와 연계한 복지체계 강화", x: 38, y: 68 },
  { title: "한샘초~월배아이파크2차 네거리", category: "교통", area: "대곡", issue: "불안전한 도로", pledge: "도로 완공 추진", x: 80, y: 56 },
  { title: "유천포스코더샵 주변", category: "교통", area: "유천동", issue: "상화로 지하화 공사 준공 대비 불편", pledge: "주민 의견 반영 도로 설계 제안", x: 66, y: 58 },
  { title: "대곡역 화성파크드림 주변", category: "교통", area: "대곡", issue: "공사 이후 교통 불편", pledge: "불편 최소화와 도로 설계 의견 제시", x: 84, y: 78 },
  { title: "수목원 입구 삼거리", category: "교통", area: "대곡", issue: "교통체계 개선", pledge: "교통체계 개선 및 육교 개설 재추진", x: 88, y: 66 },
  { title: "월배차량기지~월곡로", category: "도시설계", area: "생활권", issue: "도시계획실효도로", pledge: "도로 재설정과 착공 기반 마련", x: 47, y: 38 },
  { title: "월배차량기지 후적지", category: "도시설계", area: "생활권", issue: "주민에게 돌려주는 공간", pledge: "주민 중심 도시계획 의견 제시", x: 50, y: 45 },
  { title: "진천천", category: "도시설계", area: "진천동", issue: "복개된 진천천", pledge: "생태하천 사업 추진", x: 28, y: 60 },
  { title: "진천동 주택가", category: "주차", area: "진천동", issue: "주차장 부족", pledge: "공한지 주차장 확대", x: 18, y: 58 },
  { title: "월배시장", category: "소상공인", area: "진천동", issue: "시장 주차장 부족", pledge: "공모사업을 통한 주차장 설립 추진", x: 30, y: 42 },
  { title: "유천동 골목상권", category: "소상공인", area: "유천동", issue: "상권 지원 부족", pledge: "골목형 상점가 지정 지원", x: 60, y: 70 },
];
