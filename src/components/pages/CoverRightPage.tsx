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
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        padding: isMobile ? "40px" : "100px 120px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          borderLeft: isMobile ? "1.5px solid #000" : "2px solid #000",
          paddingLeft: isMobile ? "24px" : "40px",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "50px" : "80px", // 모바일 타이틀 축소
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            color: "#000",
            lineHeight: "0.9",
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          ICE
          <br />
          BREAKING
          <br />
          LAB.
        </h1>
        <p
          style={{
            fontSize: isMobile ? "10px" : "14px",
            fontFamily: "sans-serif",
            fontWeight: "900",
            letterSpacing: "0.4em",
            color: "#666",
            textTransform: "uppercase",
          }}
        >
          Landing Page Designer
        </p>
      </div>
    </div>
  );
}
