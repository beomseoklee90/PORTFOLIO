"use client";
import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// --- 페이지 컴포넌트 임포트 ---
import CoverLeftPage from "./pages/CoverLeftPage";
import CoverRightPage from "./pages/CoverRightPage";
import IntroLeftPage from "./pages/IntroLeftPage";
import IntroRightPage from "./pages/IntroRightPage";
import LawyerLeftPage from "./pages/LawyerLeftPage";
import LawyerRightPage from "./pages/LawyerRightPage";

export default function Magazine() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    isMobile: false,
  });
  const bookRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768;
      const isLandscape = window.innerWidth > window.innerHeight; // 가로가 더 긴지 확인

      setDimensions({
        // 모바일이더라도 가로로 돌리면(Landscape) 다시 두 페이지(width / 2)로 보여줌
        width:
          isMobile && !isLandscape ? window.innerWidth : window.innerWidth / 2,
        height: window.innerHeight,
        isMobile: isMobile && !isLandscape, // 세로 모드일 때만 '모바일 1페이지 모드' 작동
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768;
      setDimensions({
        // 모바일은 전체 가로, PC는 절반
        width: isMobile ? window.innerWidth : window.innerWidth / 2,
        height: window.innerHeight,
        isMobile: isMobile,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // 초기 렌더링 에러 방지
  if (dimensions.width === 0) return null;

  // 네비게이션 함수
  const goToPage = (pageIndex: number) => {
    if (bookRef.current) {
      // @ts-ignore
      bookRef.current.pageFlip().flip(pageIndex);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 우측 상단 Navbar */}
      <nav
        style={{
          position: "absolute",
          top: dimensions.isMobile ? "25px" : "60px",
          right: dimensions.isMobile ? "25px" : "80px",
          zIndex: 9999,
          display: "flex",
          gap: dimensions.isMobile ? "1.5rem" : "4rem",
          fontSize: dimensions.isMobile ? "16px" : "20px",
          fontWeight: "bold",
          fontFamily: '"Cormorant Garamond", serif',
          letterSpacing: "0.1em",
          color: "#000000",
        }}
      >
        <span style={{ cursor: "pointer" }} onClick={() => goToPage(3)}>
          ABOUT
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => goToPage(5)}>
          WORKS
        </span>
        <span style={{ cursor: "pointer", color: "#ccc" }}>CONTACT</span>
      </nav>

      {/* 잡지 본체 컨테이너 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* @ts-ignore */}
        <HTMLFlipBook
          ref={bookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="stretch"
          minWidth={dimensions.width}
          maxWidth={dimensions.width}
          minHeight={dimensions.height}
          maxHeight={dimensions.height}
          usePortrait={dimensions.isMobile}
          // startPortrait={dimensions.isMobile}
          showCover={dimensions.isMobile}
          flippingTime={800}
          // --- 모바일 터치 및 인터랙션 강화 ---
          clickEventForward={true} // 자식 컴포넌트 클릭 이벤트 허용
          useMouseEvents={true} // 데스크탑 마우스 클릭 허용
          swipeDistance={20} // 모바일 스와이프 민감도 (작을수록 예민)
          showPageCorners={false} // 모서리 효과 제거 (터치 방해 방지)
          disableFlipByClick={false} // 클릭으로 넘기기 활성화
          mobileScrollSupport={true} // 모바일 터치 스크롤 지원
          style={{ boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
        >
          {/* 0, 1페이지: 표지 (Cover) */}
          <div style={{ width: "100%", height: "100%" }}>
            <CoverLeftPage />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <CoverRightPage />
          </div>

          {/* 2, 3페이지: 철학 (ABOUT) */}
          <div style={{ width: "100%", height: "100%" }}>
            <IntroLeftPage />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <IntroRightPage />
          </div>

          {/* 4, 5페이지: 포트폴리오 (WORKS) */}
          <div style={{ width: "100%", height: "100%" }}>
            <LawyerLeftPage />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <LawyerRightPage />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
