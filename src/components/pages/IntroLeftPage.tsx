"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function IntroLeftPage() {
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
        /* 모바일은 이미지가 꽉 차게, PC는 여백을 주어 고급스럽게 */
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
          /* PC에서는 전체 높이를 쓰고, 모바일에서는 이미지 비율에 맞춤 */
          height: isMobile ? "auto" : "100%",
          overflow: "hidden",
          isolation: "isolate", // 레이어 엉킴 방지
        }}
      >
        {isMobile ? (
          /* 모바일용 최적화: 
             Next.js Image 대신 일반 img를 쓸 때도 스타일로 격리 
          */
          <img
            src="/images/intro_visual.png"
            alt="Philosophy Visual Mobile"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "grayscale(100%)",
              /* 렌더링 시 타일 깨짐 방지 */
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        ) : (
          /* PC용 최적화 */
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src="/images/intro_visual.png"
              alt="Philosophy Visual PC"
              fill
              style={{
                objectFit: "cover",
                filter: "grayscale(100%)",
              }}
              unoptimized
              priority
            />
          </div>
        )}
      </div>

      {/* 캡션: PC에서만 노출되도록 설정 유지 및 category 스타일 적용 */}
      {!isMobile && (
        <div
          className="category"
          style={{
            paddingTop: "20px",
            fontSize: "11px",
            color: "#999",
            letterSpacing: "0.2em",
          }}
        >
          Portfolio Concept 01 / Philosophy
        </div>
      )}
    </section>
  );
}
