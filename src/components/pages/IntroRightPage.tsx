"use client";
import React, { useState, useEffect } from "react";

export default function IntroRightPage() {
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
        // 모바일에서는 패딩을 줄여 공간 확보, PC에서는 넓은 여백
        padding: isMobile ? "60px 24px 40px 24px" : "100px 120px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        // 내용이 길어지면 내부 스크롤 허용
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* 본문 컨테이너: PC에서는 중앙 정렬, 모바일에서는 상단부터 배치 */}
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
          Philosophy.
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
            저는 그동안 공장, 로우 코드 플랫폼, 신용카드 시스템, 고속도로 순찰,
            소개팅 앱, 숙박 예약, 건설 프로젝트 등 수많은 산업 현장의 프로젝트에
            참여해 왔습니다. 웹 어플리케이션의 설계부터 구현, 테스트, 배포,
            유지보수까지 전체 프로세스를 경험 했습니다.
          </p>
          <p style={{ marginBottom: "24px" }}>
            모든 프로세스가 다 중요하지만, 결국 고객의 사용 의향은 겉모습인{" "}
            <strong style={{ fontWeight: "700", color: "#000" }}>
              디자인과 사용 편의성
            </strong>
            에서 결정됩니다. 저는 그 접점에 대해 끊임없이 고민해 왔습니다.
          </p>
          <p>
            단순히 예쁘고 보기 좋은 결과물에 머물지 않습니다. 대표님의
            고객들에게 깊이 각인되는 디자인을 만듭니다. 홈페이지를 단순한
            웹사이트가 아닌,{" "}
            <strong style={{ fontWeight: "700", color: "#000" }}>
              사업에 대한 공감과 신뢰를 얻는 결정적 기회
            </strong>
            로 접근합니다. 저의 이러한 철학이 담긴 프로젝트들을 이 지면에
            공개합니다.
          </p>
        </div>
      </div>

      {/* 하단 페이지 번호 영역 */}
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
          02
        </span>
      </div>
    </div>
  );
}
