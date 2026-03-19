"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function LawyerLeftPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    /* 1. section 태그와 page-section 클래스로 브라우저 렌더링 격리 
       2. 모바일은 이미지 풀사이즈, PC는 매거진 특유의 여백 유지
    */
    <section
      className="page-section"
      style={{
        backgroundColor: "#ffffff",
        padding: isMobile ? "0" : "100px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          /* PC에서는 프레임 높이를 꽉 채우고, 모바일은 이미지 비율에 맞춤 */
          height: isMobile ? "auto" : "100%",
          overflow: "hidden",
          isolation: "isolate", // 이미지 레이어 격리 (깨짐 방지)
        }}
      >
        {isMobile ? (
          /* 모바일 최적화: 레이아웃 시프트 방지를 위해 WebkitBackfaceVisibility 추가 */
          <Image
            src="/images/lawyer_visual.webp"
            alt="Lawyer Visual Mobile"
            fill // 부모 div 꽉 채우기
            priority // 🚨 드디어 사용 가능! "미리 로드"
            unoptimized={true} // 원본 화질 유지 (깜빡임 최소화)
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "grayscale(100%) contrast(1.1)", // 대비를 살짝 올려 선명하게
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        ) : (
          /* PC 최적화: Next.js Image로 고화질 처리 */
          <div
            style={{ position: "relative", width: "100%", height: "100%" }}
            className="magazine-image-container"
          >
            <Image
              src="/images/lawyer_visual.webp"
              alt="Lawyer Visual PC"
              fill
              style={{
                objectFit: "cover",
                filter: "grayscale(100%) contrast(1.1)",
              }}
              unoptimized
              priority
            />
          </div>
        )}
      </div>

      {/* 3. 하단 캡션: category 스타일을 적용하여 디자인 통일성 확보 */}
      {!isMobile && (
        <div
          className="category"
          style={{
            paddingTop: "24px", // 여백을 조금 더 주어 여유롭게
            fontSize: "11px",
            color: "#888",
            letterSpacing: "0.2em",
          }}
        >
          Portfolio Case 02 / Legal Service
        </div>
      )}
    </section>
  );
}
