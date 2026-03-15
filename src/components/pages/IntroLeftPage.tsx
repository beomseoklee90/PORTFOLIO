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
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        padding: isMobile ? "0" : "100px 120px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // PC에서 중앙 정렬
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "auto" : "100%", // 모바일은 높이 자동
          overflow: "hidden",
        }}
      >
        {isMobile ? (
          /* --- 모바일용: 가로 꽉 채우고 높이 자동 (찌그러짐 방지) --- */
          <img
            src="/images/intro_visual.png"
            alt="Philosophy Visual Mobile"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "grayscale(100%)",
            }}
          />
        ) : (
          /* --- PC용: 기존 fill 방식 --- */
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src="/images/intro_visual.png"
              alt="Philosophy Visual PC"
              fill
              style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              unoptimized
            />
          </div>
        )}
      </div>

      {!isMobile && (
        <div
          style={{
            paddingTop: "20px",
            fontSize: "11px",
            fontFamily: "sans-serif",
            letterSpacing: "0.2em",
            color: "#999",
            textTransform: "uppercase",
          }}
        >
          Portfolio Concept 01 / Philosophy
        </div>
      )}
    </div>
  );
}
