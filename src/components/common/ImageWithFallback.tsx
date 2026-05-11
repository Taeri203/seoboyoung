"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
};

export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  fallbackLabel,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-[#EAF4FF]", className)}>
      {failed ? (
        <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_20%,#FFFFFF_0%,#EAF4FF_58%,#FFF7D6_100%)] p-6 text-center text-[#11205A]">
          <ImageIcon size={36} aria-hidden />
          <p className="text-sm font-black">{fallbackLabel || alt}</p>
          <p className="text-xs font-bold text-[#667085]">이미지를 지정 경로에 추가하면 자동 표시됩니다.</p>
        </div>
      ) : (
        <img src={src} alt={alt} className={cn("h-full w-full", imgClassName || "object-cover")} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
