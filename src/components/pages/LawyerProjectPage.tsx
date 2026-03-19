"use client";
import Image from "next/image";
import React from "react";

export default function LawyerLeftPage() {
  return (
    /* 1. section 태그와 page-section 클래스로 브라우저 렌더링 격리 
       2. 배경색을 어두운 톤(neutral-900)으로 잡아 이미지 로딩 전에도 고급스럽게 유지
    */
    <section
      className="page-section"
      style={{
        padding: 0,
        backgroundColor: "#171717", // bg-neutral-900
        borderRight: "1px solid #333", // 어두운 지면에 맞는 경계선
        position: "relative",
      }}
    >
      <div
        className="w-full h-full relative magazine-image-container"
        style={{ isolation: "isolate" }}
      >
        <Image
          src="/images/lawyer_visual.webp"
          alt="Premium Lawyer Branding Concept"
          fill
          style={{ objectFit: "cover" }}
          sizes="50vw"
          priority
          unoptimized={true} // 렌더링 부하 감소
        />

        {/* 3. 이미지 위 오버레이 문구: 
           mix-blend-difference는 깨짐 방지를 위해 z-index와 함께 사용 
        */}
        <div
          className="absolute top-10 left-10 md:top-16 md:left-16 text-white"
          style={{
            mixBlendMode: "difference",
            zIndex: 10,
            display: "block", // 레이아웃 고정
          }}
        >
          <p
            className="category"
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              fontWeight: "300",
              opacity: 0.8,
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            Case Study 01
          </p>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontFamily: "serif",
              letterSpacing: "-0.02em",
              fontWeight: "400",
              lineHeight: "1.1",
            }}
          >
            The Advocate
          </h3>
        </div>

        {/* 4. 페이지 넘김 그림자 (왼쪽 지면): 
           그라데이션이 끊겨 보이지 않도록 투명도 조절 
        */}
        <div
          className="absolute inset-y-0 right-0 w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.2) 0%, transparent 100%)",
            zIndex: 20,
          }}
        ></div>
      </div>
    </section>
  );
}
