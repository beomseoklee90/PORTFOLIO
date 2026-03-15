"use client";
import React, { useState, useEffect } from "react";

export default function LawyerRightPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
        // 모바일/PC 반응형 패딩
        padding: isMobile ? "60px 24px 40px 24px" : "100px 120px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        // 모바일에서 내용이 길어질 경우 스크롤 허용
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* 본문 컨테이너 */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "flex-start" : "center",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "42px" : "72px",
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            color: "#000",
            marginBottom: isMobile ? "30px" : "48px",
            letterSpacing: "-0.05em",
            lineHeight: "1.1",
          }}
        >
          The
          <br />
          Advocate.
        </h2>

        <div
          style={{
            fontSize: isMobile ? "15.5px" : "18px",
            fontFamily: '"Noto Serif KR", serif',
            lineHeight: "2.0",
            color: "#222",
            textAlign: "justify",
            wordBreak: "keep-all",
          }}
        >
          <p style={{ marginBottom: "24px" }}>
            변호사님께서 고객분들을 위해 어떤 점을 고민하고 계시는지, 그리고 그
            진심을 실제 업무에 어떻게 녹여내고 있는지를 시각적으로 증명하는
            페이지입니다.
          </p>
          <p>
            신규 고객과의 계약이 더 수월하게 이뤄질 수 있도록 설계된 이
            웹사이트는 단순히 디자인이 예쁜 것을 넘어,{" "}
            <strong style={{ fontWeight: "700", color: "#000" }}>
              변호사님만의 업무 철학을 온전히 전달하는 것
            </strong>
            에 목적을 두었습니다. 신뢰는 화려함이 아니라 진정성 있는 구조에서
            나옵니다.
          </p>
        </div>
      </div>

      {/* 하단 페이지 번호 */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          borderTop: "1px solid #e5e5e5",
          paddingTop: "20px",
        }}
      >
        <span
          style={{
            fontSize: isMobile ? "28px" : "40px",
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          04
        </span>
      </div>
    </div>
  );
}
