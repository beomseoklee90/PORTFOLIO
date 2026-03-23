"use client";

import React, { useState, useEffect, useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

// 컴포넌트 임포트
import CoverRightPage from "./pages/CoverRightPage";
import CoverLeftPage from "./pages/CoverLeftPage";
import IntroLeftPage from "./pages/IntroLeftPage";
import IntroRightPage from "./pages/IntroRightPage";
import LawyerLeftPage from "./pages/LawyerLeftPage";
import LawyerRightPage from "./pages/LawyerRightPage";

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  ),
);
Page.displayName = "Page";

export default function Magazine() {
  const [mounted, setMounted] = useState(false);
  const [isUnsupported, setIsUnsupported] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 🚨 모바일 여부 상태 추가
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [currentPage, setCurrentPage] = useState(0); // 🚨 현재 페이지 상태 추가
  const bookRef = useRef<any>(null);

  // 🚨 전체 페이지 수 (마지막 페이지 제외를 위해 필요, 총 6페이지)
  const totalPages = 6;

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => setIsMobile(window.innerWidth < 768); // 🚨 모바일 체크 로직 추가

    const checkSupport = () => {
      const vw = window.innerWidth;
      const agent = window.navigator.userAgent.toLowerCase();
      const isIE =
        agent.indexOf("trident") !== -1 || agent.indexOf("msie") !== -1;

      if (vw < 300 || isIE) {
        setIsUnsupported(true);
      } else {
        setIsUnsupported(false);
      }
    };

    const updateSize = () => {
      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      const vw = window.innerWidth;
      const isDesktop = vw > 768 && vw > vh;

      if (isDesktop) {
        setSize({ width: Math.floor(vw / 2), height: vh });
      } else {
        setSize({ width: vw, height: vh });
      }
      document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
    };

    // 초기 실행
    checkMobile(); // 🚨 초기 실행 추가
    checkSupport();
    updateSize();

    // 이벤트 리스너 통합 (메모리 누수 방지)
    const handleResize = () => {
      checkMobile(); // 🚨 resize 시 실행 추가
      checkSupport();
      updateSize();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () =>
      setTimeout(handleResize, 300),
    );

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  if (!mounted) return null;

  if (isUnsupported) {
    return (
      <div id="unsupported-overlay" style={{ display: "flex" }}>
        <h2>지원하지 않는 환경입니다.</h2>
        <p>
          본 디지털 매거진은 최신 브라우저와 <br />
          세로 모드 환경에 최적화되어 있습니다. <br />
          크롬(Chrome)이나 사파리(Safari) 이용을 권장합니다.
        </p>
      </div>
    );
  }

  return (
    <main
      style={{
        width: "100%",
        height: "calc(var(--vh, 1vh) * 100)",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: "30px",
          right: "40px",
          zIndex: 9999,
          display: "flex",
          gap: "2rem",
          mixBlendMode: "difference",
        }}
      >
        <button
          onClick={() => bookRef.current?.pageFlip().flip(2)}
          style={{
            cursor: "pointer",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "900",
            background: "none",
            border: "none",
          }}
        >
          ABOUT
        </button>
        <button
          onClick={() => bookRef.current?.pageFlip().flip(4)}
          style={{
            cursor: "pointer",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "900",
            background: "none",
            border: "none",
          }}
        >
          WORKS
        </button>
      </nav>

      {/* @ts-ignore */}
      <HTMLFlipBook
        ref={bookRef}
        width={size.width}
        height={size.height}
        size="stretch"
        minWidth={size.width}
        maxWidth={size.width}
        minHeight={size.height}
        maxHeight={size.height}
        showCover={false}
        // 🚨 핵심 원복 1: 어제 반짝임을 완벽하게 잡았던 1등 공신 (그림자 연산 차단)
        drawShadow={false}
        maxShadowOpacity={0}
        usePortrait={
          window.innerWidth <= 768 || window.innerWidth <= window.innerHeight
        }
        // 🚨 핵심 원복 2: 어제 쾌적했던 그 속도로 롤백 (1000 -> 400)
        flippingTime={1000}
        mobileScrollSupport={true}
        swipeDistance={15}
        autoSize={true}
        startPage={0}
        clickEventForward={true}
        useMouseEvents={true}
        className="magazine-canvas"
        // 🚨 페이지가 넘어갈 때마다 currentPage 상태를 업데이트하는 이벤트 추가
        onFlip={(e: any) => setCurrentPage(e.data)}
      >
        <Page>
          <CoverLeftPage />
        </Page>
        <Page>
          <CoverRightPage />
        </Page>
        <Page>
          <IntroLeftPage />
        </Page>
        <Page>
          <IntroRightPage />
        </Page>
        <Page>
          <LawyerLeftPage />
        </Page>
        <Page>
          <LawyerRightPage />
        </Page>
      </HTMLFlipBook>

      {/* 🚨 마지막 페이지가 아닌 경우에만 띄우는 고정 유도 문구 */}
      {currentPage < totalPages - 1 && (
        <div
          style={{
            position: "fixed",
            // 🚨 높이 통일 기준: isMobile ? "40px" : "60px"
            bottom: isMobile ? "40px" : "60px",
            // 🚨 우측 고정: isMobile ? "40px" : "120px" (CoverRightPage의 여백과 일치시킴)
            right: isMobile ? "40px" : "120px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 9998, // 플립북 위, 네브바 아래 배치
            opacity: 0.8, // 튀지 않게 반투명 처리
            // 🚨 이미지 페이지에서도 잘 보이게 그림자 추가
            textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          <span
            style={{
              fontSize: isMobile ? "12px" : "18px",
              fontFamily: '"Cormorant Garamond", serif', // 타이틀과 폰트 통일
              fontStyle: "italic",
              letterSpacing: "0.05em",
              color: "#000",
              backgroundColor: "white",
            }}
          >
            Swipe or click to turn
          </span>
        </div>
      )}
    </main>
  );
}
