import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  tone?: "blue" | "yellow";
};

export function CTASection({ title, description, href, buttonLabel, tone = "blue" }: CTASectionProps) {
  const isBlue = tone === "blue";

  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] p-7 shadow-xl md:p-10 ${
        isBlue ? "bg-[#0052B8] text-white shadow-blue-900/20" : "bg-[#FFF7D6] text-[#11205A] shadow-yellow-900/10"
      }`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-black ${isBlue ? "bg-white/15" : "bg-white text-[#0052B8]"}`}>
            시민들에게 약속드립니다
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
          <p className={`mt-3 text-lg leading-8 ${isBlue ? "text-blue-50" : "text-[#667085]"}`}>{description}</p>
        </div>
        <Link
          href={href}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-black shadow-lg transition hover:-translate-y-0.5 ${
            isBlue ? "bg-[#FFD84D] text-[#11205A]" : "bg-[#0052B8] text-white"
          }`}
        >
          {buttonLabel}
          <ArrowRight size={18} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
