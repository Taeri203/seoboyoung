import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Pledge = {
  id: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  tasks: string[];
};

export type District = {
  name: string;
  headline: string;
  description: string;
  focusAreas: string[];
  image?: string;
  imageAlt?: string;
  pledges: string[];
};

export type Generation = {
  audience: string;
  title: string;
  message: string;
  pledges: string[];
  icon: LucideIcon;
  image?: string;
};

export type MapCategory =
  | "전체"
  | "보육"
  | "교육"
  | "복지"
  | "교통"
  | "도시설계"
  | "소상공인"
  | "주차"
  | "안전";

export type MapMarker = {
  title: string;
  category: Exclude<MapCategory, "전체"> | "교육·안전";
  area: string;
  issue: string;
  pledge: string;
  x: number;
  y: number;
};

export type GalleryItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
  kind: "공약 이미지" | "현장 사진" | "의정활동" | "프로필";
};
