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
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#ffffff", // 잘리는 부분은 차라리 깔끔하게 흰색으로
        display: "flex",
        alignItems: "center", // 세로 중앙 정렬
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          // 모바일일 때만 이미지가 찌그러지지 않도록 cover 처리
          // 만약 사진 전체가 다 나와야 하면 'contain'으로 바꾸세요
        }}
      >
        <Image
          src="/images/main_visual.png"
          alt="Main Visual"
          fill
          style={{
            objectFit: isMobile ? "cover" : "cover", // cover는 꽉 채우고, contain은 전체 다 보여줌
            objectPosition: "center center",
          }}
          priority
          unoptimized={true}
        />
      </div>
    </div>
  );
}
