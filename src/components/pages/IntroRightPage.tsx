"use client";
import React, { useState, useEffect } from "react";

export default function IntroRightPage() {
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
        /* 모바일/PC 여백 최적화: 스크롤이 생기지 않도록 높이 관리 */
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
          isolation: "isolate", // 텍스트 렌더링 레이어 격리
          width: "100%",
        }}
      >
        {/* 2. 제목: Cormorant Garamond의 우아함 극대화 */}
        <h2
          style={{
            fontSize: isMobile ? "48px" : "80px",
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            color: "#000",
            marginBottom: isMobile ? "24px" : "40px",
            letterSpacing: "-0.03em",
            lineHeight: "1.0",
            fontWeight: "400",
            display: "block",
          }}
        >
          Philosophy.
        </h2>

        {/* 3. 본문: Noto Serif KR의 가독성과 양쪽 정렬 최적화 */}
        <div
          style={{
            fontSize: isMobile ? "15px" : "18px",
            fontFamily: '"Noto Serif KR", serif',
            lineHeight: "1.9",
            color: "#222",
            textAlign: "justify", // 잡지 특유의 양쪽 정렬 유지
            wordBreak: "keep-all",
            /* 양쪽 정렬 시 글자 깨짐 방지를 위한 텍스트 보호막 */
            textJustify: "inter-word",
            display: "block",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>
            저는 그동안 공장, 로우 코드 플랫폼, 신용카드 시스템, 고속도로 순찰,
            소개팅 앱, 숙박 예약, 건설 프로젝트 등 수많은 산업 현장의 프로젝트에
            참여해 왔습니다. 웹 어플리케이션의 설계부터 구현, 테스트, 배포,
            유지보수까지 전체 프로세스를 경험 했습니다.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            모든 프로세스가 다 중요하지만, 결국 고객의 사용 의향은 겉모습인{" "}
            <strong
              style={{
                fontWeight: "700",
                color: "#000",
                borderBottom: "1px solid #ddd",
              }}
            >
              디자인과 사용 편의성
            </strong>
            에서 결정됩니다. 저는 그 접점에 대해 끊임없이 고민해 왔습니다.
          </p>
          <p>
            단순히 예쁘고 보기 좋은 결과물에 머물지 않습니다. 대표님의
            고객들에게 깊이 각인되는 디자인을 만듭니다. 홈페이지를 단순한
            웹사이트가 아닌,{" "}
            <strong
              style={{
                fontWeight: "700",
                color: "#000",
                borderBottom: "1px solid #ddd",
              }}
            >
              사업에 대한 공감과 신뢰를 얻는 결정적 기회
            </strong>
            로 접근합니다. 저의 이러한 철학이 담긴 프로젝트들을 이 지면에
            공개합니다.
          </p>
        </div>
      </div>

      {/* 4. 하단 페이지 번호 영역: 선명한 구분선과 타이포그래피 */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          borderTop: "1px solid #000", // 구분선을 더 묵직하게
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
          02
        </span>
      </div>
    </section>
  );
}
