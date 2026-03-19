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
            objectFit: "cover",
            filter: "grayscale(100%)",
            /* 🚨 GPU 가속 */
            transform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
          }}
          priority // 🚨 다음 페이지 미리 로딩 (반짝임 방지 핵심)
          unoptimized={true}
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
