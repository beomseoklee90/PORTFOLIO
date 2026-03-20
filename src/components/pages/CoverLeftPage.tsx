"use client";
import Image from "next/image";
import React from "react";

export default function CoverLeftPage() {
  return (
    <section className="page-section" style={{ padding: 0 }}>
      {/* 1. magazine-image-container: globals.css에 정의된 라운딩 및 그림자 적용
         2. isolation: "isolate": 내부 요소와 외부 레이어 간섭 차단 (반짝임 방지)
      */}
      <div
        className="magazine-image-container"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          isolation: "isolate",
          borderRadius: 0, // 표지이므로 꽉 채우기 위해 라운딩 제거 (원하시면 12px로 변경)
        }}
      >
        <Image
          src="/images/main_visual.webp"
          alt="Main Visual"
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

        {/* 텍스트가 필요하다면 이 아래에 배치 (모바일 좌측 정렬 자동 적용됨) */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "24px",
            zIndex: 10,
          }}
        >
          {/* 예시: <h1 style={{ color: "#fff" }}>ICE BREAKING LAB</h1> */}
        </div>
      </div>
    </section>
  );
}
