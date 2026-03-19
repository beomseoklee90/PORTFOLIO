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
      const isLandscape = window.innerWidth > window.innerHeight;

      setDimensions({
        width:
          isMobile && !isLandscape ? window.innerWidth : window.innerWidth / 2,
        height: window.innerHeight,
        isMobile: isMobile && !isLandscape,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (dimensions.width === 0) return null;

  const goToPage = (pageIndex: number) => {
    if (bookRef.current) {
      // @ts-ignore
      bookRef.current.pageFlip().flip(pageIndex);
    }
  };

  // 공통 페이지 스타일 (깨짐 방지용)
  const pageWrapperStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    contain: "content", // 4분할 깨짐 방지 핵심
    overflow: "hidden",
    display: "block",
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
      {/* Navbar - 폰트 스타일 적용 */}
      <nav
        style={{
          position: "absolute",
          top: dimensions.isMobile ? "25px" : "60px",
          right: dimensions.isMobile ? "25px" : "80px",
          zIndex: 9999,
          display: "flex",
          gap: dimensions.isMobile ? "1.5rem" : "4rem",
          fontSize: dimensions.isMobile ? "16px" : "18px",
          fontWeight: "700",
          fontFamily: "var(--font-sans)", // 우리가 설정한 고딕 적용
          letterSpacing: "0.1em",
          color: "#000000",
        }}
      >
        <span style={{ cursor: "pointer" }} onClick={() => goToPage(2)}>
          ABOUT
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => goToPage(4)}>
          WORKS
        </span>
        <span style={{ cursor: "pointer", color: "#ccc" }}>CONTACT</span>
      </nav>

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
          showCover={true} // 표지가 하나씩 나오게 설정
          flippingTime={800}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={false}
          disableFlipByClick={false}
          mobileScrollSupport={true}
          className="magazine-book"
        >
          {/* 각 페이지를 wrapper로 감싸서 깨짐 방지 */}
          <div style={pageWrapperStyle}>
            <CoverLeftPage />
          </div>
          <div style={pageWrapperStyle}>
            <CoverRightPage />
          </div>
          <div style={pageWrapperStyle}>
            <IntroLeftPage />
          </div>
          <div style={pageWrapperStyle}>
            <IntroRightPage />
          </div>
          <div style={pageWrapperStyle}>
            <LawyerLeftPage />
          </div>
          <div style={pageWrapperStyle}>
            <LawyerRightPage />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
