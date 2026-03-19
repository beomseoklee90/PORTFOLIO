// src/components/pages/LawyerLeftPage.tsx (이미지 전용)
import Image from "next/image";

export default function LawyerLeftPage() {
  return (
    <div className="page w-full h-full relative bg-neutral-900 border-r border-neutral-200">
      <Image
        src="https://dj-ice-breaking-images.s3.us-east-1.amazonaws.com/lawyer-profile.png"
        alt="Premium Lawyer Branding Concept"
        fill
        className="object-cover"
        sizes="50vw"
      />
      {/* 이미지 위 오버레이 문구 */}
      <div className="absolute top-10 left-10 text-white mix-blend-difference">
        <p className="text-[10px] tracking-[0.4em] font-light uppercase opacity-70">
          Case Study 01
        </p>
        <h3 className="text-2xl font-serif mt-2 tracking-tighter">
          The Advocate
        </h3>
      </div>
      {/* 페이지 넘김 그림자 (왼쪽 지면) */}
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
