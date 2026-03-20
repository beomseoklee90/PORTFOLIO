"use client";

import React, { useState, useEffect, useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

// 컴포넌트 임포트
import CoverLeftPage from "./pages/CoverLeftPage";
import CoverRightPage from "./pages/CoverRightPage";
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
  const [size, setSize] = useState({ width: 0, height: 0 });
  const bookRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);

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
    checkSupport();
    updateSize();

    // 이벤트 리스너 통합 (메모리 누수 방지)
    const handleResize = () => {
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
        drawShadow={true}
        usePortrait={
          window.innerWidth <= 768 || window.innerWidth <= window.innerHeight
        }
        flippingTime={1000}
        mobileScrollSupport={true}
        maxShadowOpacity={0.2}
        swipeDistance={15}
        autoSize={true}
        startPage={0}
        clickEventForward={true}
        useMouseEvents={true}
        // 🚨 문제가 되었던 className과 style 속성을 삭제했습니다.
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
    </main>
  );
}
