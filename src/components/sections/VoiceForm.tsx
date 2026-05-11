"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const residences = ["진천동", "유천동", "대곡동", "기타"];
const categories = ["보육", "교육", "복지", "교통", "도시설계", "소상공인", "주차", "안전", "기타"];

export function VoiceForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-[#B9DBFF] bg-[#EAF4FF] p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0052B8] text-white">
          <CheckCircle2 size={34} aria-hidden />
        </div>
        <h2 className="mt-5 text-3xl font-black text-[#11205A]">소중한 의견 감사합니다</h2>
        <p className="mx-auto mt-3 max-w-xl leading-8 text-[#344054]">
          주민의 목소리를 듣고 공약과 현장점검에 더 세심하게 반영하겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full bg-[#0052B8] px-6 py-3 font-black text-white"
        >
          다른 의견 남기기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="이름" id="name">
          <input required id="name" name="name" className="form-input" placeholder="성함을 입력해 주세요" />
        </Field>
        <Field label="연락처" id="phone">
          <input required id="phone" name="phone" className="form-input" placeholder="010-0000-0000" />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="거주지" id="residence">
          <select required id="residence" name="residence" className="form-input">
            <option value="">선택</option>
            {residences.map((item) => <option key={item}>{item}</option>)}
          </select>
        </Field>
        <Field label="분야" id="category">
          <select required id="category" name="category" className="form-input">
            <option value="">선택</option>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </Field>
      </div>
      <Field label="위치" id="location">
        <input id="location" name="location" className="form-input" placeholder="예: 유천동 장난감 도서관 인근" />
      </Field>
      <Field label="제목" id="title">
        <input required id="title" name="title" className="form-input" placeholder="의견을 한 줄로 적어주세요" />
      </Field>
      <Field label="내용" id="content">
        <textarea required id="content" name="content" rows={7} className="form-input resize-y" placeholder="언제, 어디서, 어떤 의견이 있는지 편하게 적어주세요." />
      </Field>
      <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm leading-7 text-[#667085]">
        서보영 선거사무소는 유권자 의견 접수 및 답변을 위해 이름, 연락처, 거주지, 의견 내용을 수집합니다.
        수집된 정보는 의견 확인 및 답변 목적으로만 사용되며 목적 달성 시 파기됩니다.
      </div>
      <label className="flex items-start gap-3 rounded-2xl bg-[#FFF7D6] p-4 text-sm font-bold text-[#344054]">
        <input required type="checkbox" className="mt-1" aria-label="개인정보 수집 동의" />
        개인정보 수집 및 이용에 동의합니다.
      </label>
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0052B8] px-7 py-4 text-lg font-black text-white shadow-lg">
        <Send size={19} aria-hidden />
        의견 남기기
      </button>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black text-[#11205A]">
        {label}
      </label>
      {children}
    </div>
  );
}
