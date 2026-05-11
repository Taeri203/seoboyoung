import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { SectionTitle } from "@/components/common/SectionTitle";
import { pledgeGroups } from "@/data/pledges";

export const metadata: Metadata = {
  title: "시민들에게 약속드립니다 | 서보영.kr",
  description: "서보영 후보의 보육·교육·복지·교통·도시설계·소상공인 핵심 공약입니다.",
};

const pledgeSections = [
  {
    id: "care-education",
    label: "보육·교육",
    image: pledgeGroups[0].image,
    imageAlt: pledgeGroups[0].imageAlt,
    pledges: pledgeGroups.slice(0, 2),
  },
  {
    id: "welfare-traffic",
    label: "복지·교통",
    image: pledgeGroups[2].image,
    imageAlt: pledgeGroups[2].imageAlt,
    pledges: pledgeGroups.slice(2, 4),
  },
  {
    id: "city-business",
    label: "도시설계·소상공인",
    image: pledgeGroups[4].image,
    imageAlt: pledgeGroups[4].imageAlt,
    pledges: pledgeGroups.slice(4, 6),
  },
];

export default function PledgesPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">핵심 공약</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">시민들에게 약속드립니다</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">
            보육·교육·복지·교통·도시설계·소상공인까지, 진천·유천·대곡의 오늘을 바꾸겠습니다.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <nav aria-label="핵심 공약 바로가기" className="sticky top-20 z-20 -mx-4 mb-8 overflow-x-auto px-4 py-2 backdrop-blur">
            <div className="flex min-w-max gap-2 rounded-full border border-[#E5E7EB] bg-white/90 p-2 shadow-sm">
              {pledgeSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full px-4 py-2 text-sm font-black text-[#11205A] transition hover:bg-[#EAF4FF] hover:text-[#0052B8]"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="grid gap-10">
            {pledgeSections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm"
              >
                <div className={`grid gap-0 lg:grid-cols-[0.94fr_1.06fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="border-b border-[#E5E7EB] bg-[#FFF9E8] p-4 lg:border-b-0 lg:border-r">
                    <ImageWithFallback
                      src={section.image}
                      alt={section.imageAlt}
                      className="h-[260px] rounded-[1.5rem] bg-white md:h-[420px] lg:h-full lg:min-h-[560px]"
                      imgClassName="object-contain"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="inline-flex rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-black text-[#0052B8]">
                      핵심 공약 {index + 1}
                    </p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight text-[#11205A] md:text-4xl">{section.label}</h2>
                    <div className="mt-7 grid gap-5">
                      {section.pledges.map((pledge) => (
                        <section key={pledge.id} id={pledge.id} className="scroll-mt-32 rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                          <p className="text-sm font-black text-[#0052B8]">{pledge.category}</p>
                          <h3 className="mt-2 text-2xl font-black text-[#11205A]">{pledge.title}</h3>
                          <p className="mt-3 leading-7 text-[#667085]">{pledge.summary}</p>
                          <ul className="mt-5 grid gap-3">
                            {pledge.tasks.map((task) => (
                              <li key={task} className="flex gap-2 text-sm leading-6 text-[#344054]">
                                <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <SectionTitle title="우리 동네의 오늘을 바꾸고, 아이들의 내일을 바꾸겠습니다." align="center" />
          <div className="mt-8">
            <CTASection title="공약은 주민 의견에서 더 단단해집니다" description="동별 공약을 확인하고, 지도에 없는 의견도 남겨주세요." href="/districts" buttonLabel="동별 공약 보기" />
          </div>
        </div>
      </section>
    </>
  );
}
