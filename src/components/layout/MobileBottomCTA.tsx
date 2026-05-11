import Link from "next/link";
import { Images, MapPinned, MessageSquareText, Phone, ScrollText } from "lucide-react";
import { siteConfig } from "@/data/site";

const items = [
  { label: "공약보기", href: "/pledges", icon: ScrollText },
  { label: "공약지도", href: "/map", icon: MapPinned },
  { label: "의견남기기", href: "/voice", icon: MessageSquareText },
  { label: "이미지보기", href: "/gallery", icon: Images },
  { label: "전화하기", href: siteConfig.phoneHref, icon: Phone },
];

export function MobileBottomCTA() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/94 px-2 pb-2 pt-2 shadow-[0_-12px_30px_rgba(17,32,90,0.12)] backdrop-blur-xl md:hidden" aria-label="모바일 빠른 이동">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.label} href={item.href} className="flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-black text-[#11205A]" aria-label={item.label}>
              <Icon size={18} className="text-[#0052B8]" aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
