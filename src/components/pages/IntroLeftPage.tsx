"use client";
import Image from "next/image";
import React from "react";

export default function IntroLeftPage() {
  return (
    <section className="page-section">
      {/* 텍스트 영역 (globals.css 설정으로 모바일에서 자동 왼쪽 정렬) */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ color: "#000", fontWeight: 800 }}>ICE BREAKING LAB</h1>
        <p style={{ color: "#666" }}>Philosophy & Vision</p>
      </div>

      {/* 이미지 영역: 일반 img 대신 Next/Image + priority 조합 */}
      <div
        className="magazine-image-container"
        style={{ position: "relative", width: "100%", height: "45vh" }}
      >
        <Image
          src="/images/intro_visual.webp"
          alt="Philosophy Visual"
          fill
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            /* 🚨 핵심: 그래픽 카드(GPU)를 강제로 깨워서 미리 그려두게 함 */
            transform: "translateZ(0)",
            willChange: "transform",
            display: "block",
            backfaceVisibility: "hidden",
          }}
          sizes="50vw"
          priority={true}
          unoptimized={true} // 렌더링 부하 감소
        />
      </div>

      <div style={{ marginTop: "30px" }}>
        <p>
          우리는 본질을 꿰뚫는 전략으로
          <br />
          당신의 가치를 증명합니다.
        </p>
      </div>
    </section>
  );
}
