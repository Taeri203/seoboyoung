"use client";

import { X } from "lucide-react";
import { useState } from "react";
import type { GalleryItem } from "@/types";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setSelected(item)}
            className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <ImageWithFallback
              src={item.src}
              alt={item.alt}
              className="h-[330px]"
              imgClassName={item.kind === "공약 이미지" ? "object-contain bg-[#FFF9E8] p-2" : "object-cover"}
            />
            <div className="p-5">
              <p className="text-xs font-black text-[#0052B8]">{item.kind}</p>
              <h3 className="mt-2 text-xl font-black text-[#11205A]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#667085]">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[120] bg-[#11205A]/82 p-4 backdrop-blur" role="dialog" aria-modal="true">
          <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] p-4">
                <div>
                  <p className="text-xs font-black text-[#0052B8]">{selected.kind}</p>
                  <h2 className="text-xl font-black text-[#11205A]">{selected.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#11205A]"
                  aria-label="이미지 닫기"
                >
                  <X size={20} aria-hidden />
                </button>
              </div>
              <ImageWithFallback
                src={selected.src}
                alt={selected.alt}
                className="max-h-[76vh]"
                imgClassName="max-h-[76vh] object-contain bg-[#FFF9E8]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
