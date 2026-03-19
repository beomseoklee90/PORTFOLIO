"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function CoverLeftPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    /* 1. section 태그와 page-section 클래스를 사용하여 globals.css의 격리 속성 적용
      2. 인라인 스타일을 최소화하고 구조적 안정성 확보
    */
    <section
      className="page-section"
      style={{
        padding: 0,
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          /* 이미지 렌더링 시 타일 분할 현상을 방지하기 위한 레이어 격리 */
          isolation: "isolate",
        }}
      >
        <Image
          src="/images/main_visual.png"
          alt="Main Visual"
          fill
          style={{
            /* 이미지는 cover로 꽉 채우되, 
               혹시라도 브라우저가 이미지를 쪼개지 못하도록 설정 
            */
            objectFit: "cover",
            objectPosition: "center center",
          }}
          priority // 첫 페이지이므로 최우선 로딩
          unoptimized={true} // 원본 화질 유지 및 처리 부하 감소
        />

        {/* 이미지 위에 텍스트를 얹고 싶으시다면 
          여기에 <h1>이나 <span>을 추가하면 됩니다. 
        */}
      </div>
    </section>
  );
}
