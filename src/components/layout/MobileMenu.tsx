"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { navItems, siteConfig } from "@/data/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuTitleId = useId();

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const menuDialog =
    open &&
    createPortal(
      <div className="fixed inset-0 z-[100] bg-[#11205A]/70" role="dialog" aria-modal="true" aria-labelledby={menuTitleId} onClick={closeMenu}>
        <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white p-6 text-[#11205A] shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" onClick={closeMenu} id={menuTitleId} className="font-black text-[#11205A]">
              {siteConfig.siteName}
            </Link>
            <button type="button" onClick={closeMenu} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC]" aria-label="모바일 메뉴 닫기">
              <X size={20} aria-hidden />
            </button>
          </div>
          <nav className="grid gap-2 rounded-3xl bg-[#F8FAFC] p-2" aria-label="모바일 주요 메뉴">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-2xl bg-white px-4 py-3 text-lg font-extrabold text-[#11205A] shadow-sm">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/voice" onClick={closeMenu} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0052B8] px-5 py-4 font-black text-white shadow-lg">
            의견 남기기
          </Link>
        </div>
      </div>,
      document.body,
    );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#11205A]"
        aria-label="모바일 메뉴 열기"
        aria-expanded={open}
      >
        <Menu size={22} aria-hidden />
      </button>
      {menuDialog}
    </div>
  );
}
