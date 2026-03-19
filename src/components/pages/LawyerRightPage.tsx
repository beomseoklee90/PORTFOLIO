"use client";
import React, { useState, useEffect } from "react";

export default function LawyerRightPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    /* 1. section 태그와 page-section 클래스로 브라우저 렌더링 격리 */
    <section
      className="page-section"
      style={{
        backgroundColor: "#ffffff",
        padding: isMobile ? "60px 24px 40px" : "100px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
          isolation: "isolate", // 텍스트 레이어 보호막
          width: "100%",
        }}
      >
        {/* 2. 제목: Cormorant Garamond의 강직한 느낌 */}
        <h2
          style={{
            fontSize: isMobile ? "48px" : "80px",
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            color: "#000",
            marginBottom: isMobile ? "24px" : "48px",
            letterSpacing: "-0.04em",
            lineHeight: "0.95",
            fontWeight: "400",
          }}
        >
          The
          <br />
          Advocate.
        </h2>

        {/* 3. 본문: 신뢰감을 주는 명조체(Noto Serif KR) 레이아웃 */}
        <div
          style={{
            fontSize: isMobile ? "15px" : "18px",
            fontFamily: '"Noto Serif KR", serif',
            lineHeight: "1.9",
            color: "#222",
            textAlign: "justify",
            textJustify: "inter-word",
            wordBreak: "keep-all",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>
            변호사님께서 고객분들을 위해 어떤 점을 고민하고 계시는지, 그리고 그
            진심을 실제 업무에 어떻게 녹여내고 있는지를 시각적으로 증명하는
            페이지입니다.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            신규 고객과의 계약이 더 수월하게 이뤄질 수 있도록 설계된 이
            웹사이트는 단순히 디자인이 예쁜 것을 넘어,{" "}
            <strong
              style={{
                fontWeight: "700",
                color: "#000",
                borderBottom: "1px solid #000",
              }}
            >
              변호사님만의 업무 철학을 온전히 전달하는 것
            </strong>
            에 목적을 두었습니다. 신뢰는 화려함이 아니라 진정성 있는 구조에서
            나옵니다.
          </p>

          {/* 4. 포트폴리오 이동 링크: 클릭하기 쉽게 버튼 형태로 최적화 */}
          <div style={{ marginTop: "2rem" }}>
            <a
              href="https://portfolio-lawfirm.djicebreaking.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: "700",
                color: "#000",
                textDecoration: "none",
                borderBottom: "2px solid #000",
                paddingBottom: "4px",
                fontFamily: "var(--font-sans)", // 링크는 가독성을 위해 고딕 권장
                letterSpacing: "0.05em",
              }}
            >
              VIEW PROJECT →
            </a>
          </div>
        </div>
      </div>

      {/* 5. 하단 페이지 번호 영역 */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          borderTop: "1px solid #000",
          paddingTop: "15px",
        }}
      >
        <span
          style={{
            fontSize: isMobile ? "32px" : "48px",
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            color: "#000",
            fontWeight: "700",
            lineHeight: "1",
          }}
        >
          04
        </span>
      </div>
    </section>
  );
}
