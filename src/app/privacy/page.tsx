import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 서보영.kr",
  description: "서보영.kr 유권자 의견 접수 관련 개인정보처리방침입니다.",
};

const sections = [
  {
    title: "수집 항목",
    body: "이름, 연락처, 거주지, 의견 분야, 위치, 제목, 의견 내용을 수집할 수 있습니다.",
  },
  {
    title: "수집 목적",
    body: "유권자 의견 확인, 답변, 공약 보완, 현장점검 참고 목적으로 사용합니다.",
  },
  {
    title: "처리 방식",
    body: "접수된 의견은 서보영 선거사무소 담당자 이메일로 전송되며, 별도 데이터베이스에는 저장하지 않습니다.",
  },
  {
    title: "보유 기간",
    body: "접수 이메일은 목적 달성 시 또는 선거사무소 운영 종료 시 지체 없이 파기합니다.",
  },
  {
    title: "제3자 제공",
    body: "법령에 따른 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다.",
  },
  {
    title: "동의 거부권",
    body: "개인정보 수집 및 이용에 대한 동의를 거부할 수 있으나, 이 경우 의견 접수가 제한될 수 있습니다.",
  },
  {
    title: "문의처",
    body: "서보영 선거사무소 · 전화: 010-8390-9797",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">개인정보 안내</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">개인정보처리방침</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">유권자 의견 접수와 답변을 위한 개인정보 처리 기준입니다.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#11205A]">{section.title}</h2>
              <p className="mt-3 leading-8 text-[#667085]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
