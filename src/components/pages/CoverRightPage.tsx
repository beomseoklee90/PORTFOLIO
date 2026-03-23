"use client";
import React, { useState, useEffect } from "react";

export default function CoverRightPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="page-section"
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        /* 모바일과 PC 여백 최적화 */
        padding: isMobile ? "40px" : "100px 120px",
        position: "relative", // 🚨 하단 텍스트의 기준점을 잡기 위해 추가
      }}
    >
      <div
        style={{
          /* 1. 선과 텍스트를 하나의 그룹으로 묶어 렌더링 격리 */
          borderLeft: isMobile ? "2px solid #000" : "3px solid #000",
          paddingLeft: isMobile ? "24px" : "40px",
          isolation: "isolate",
          display: "block",
          width: "100%",
        }}
      >
        {/* 2. 타이틀: Cormorant Garamond의 우아함을 살리되 깨짐 방지 적용 */}
        <h1
          style={{
            fontSize: isMobile ? "50px" : "100px", // 타이틀 임팩트 강화
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            color: "#000",
            lineHeight: "0.85",
            marginBottom: "30px",
            letterSpacing: "-0.03em",
            fontWeight: "400",
            display: "block",
            wordBreak: "keep-all",
          }}
        >
          ICE
          <br />
          BREAKING
          <br />
          LAB.
        </h1>

        {/* 3. 하단 텍스트: globals.css의 category 스타일 활용 */}
        <p
          className="category"
          style={{
            fontSize: isMobile ? "11px" : "15px",
            fontWeight: "900",
            letterSpacing: "0.4em",
            color: "#666",
            /* 대문자 변환은 이미 category 클래스에 포함되어 있으나 명시적 유지 */
            textTransform: "uppercase",
          }}
        >
          Landing Page Designer
        </p>
      </div>
    </section>
  );
}
