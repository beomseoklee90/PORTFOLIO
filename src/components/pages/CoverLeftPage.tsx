"use client";
import React, { useState, useEffect } from "react";
// 안 쓰는 next/image 임포트는 지웠습니다.

export default function CoverLeftPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
          borderRadius: 12,
        }}
      >
        <img
          src="/images/main_visual.webp"
          alt="Main Visual"
          loading="eager" /* 무조건 미리 가져오기 */
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            /* GPU 가속의 핵심 */
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            borderRadius: 12,
          }}
        />
      </div>
    </section>
  );
}
