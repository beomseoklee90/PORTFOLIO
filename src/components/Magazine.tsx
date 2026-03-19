"use client";

import React, { useState, useEffect, useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

// 컴포넌트 임포트 (폴더 구조 유지)
import CoverLeftPage from "./pages/CoverLeftPage";
import CoverRightPage from "./pages/CoverRightPage";
import IntroLeftPage from "./pages/IntroLeftPage";
import IntroRightPage from "./pages/IntroRightPage";
import LawyerLeftPage from "./pages/LawyerLeftPage";
import LawyerRightPage from "./pages/LawyerRightPage";

// 🚨 [사장님 요청 4] 잡지 껍데기(Page)에서 이벤트를 뺏지 않도록 스타일 최적화
const Page = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => (
    // 내부 스크롤을 위해 overflow-y 허용, 가로 넘침 방지
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
  const [size, setSize] = useState({ width: 0, height: 0 });
  const bookRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      // 카톡 브라우저 상하단 바 영역 제외한 진짜 가시 영역 높이 대응
      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      const vw = window.innerWidth;

      const isDesktop = vw > 768 && vw > vh;

      if (isDesktop) {
        // [사장님 요청 5] 데스크탑: 100% 꽉 채우기 (양면이니까 width는 반갈죽)
        setSize({ width: Math.floor(vw / 2), height: vh });
      } else {
        // [사장님 요청 6] 모바일: 100% 꽉 채우기 (단면)
        setSize({ width: vw, height: vh });
      }

      document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", () =>
      setTimeout(updateSize, 300),
    );

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("orientationchange", updateSize);
    };
  }, []);

  if (!mounted || size.width === 0) return null;

  return (
    <main
      style={{
        width: "100%",
        height: "calc(var(--vh, 1vh) * 100)" /* 🚨 100vw -> 100% 변경 */,
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#ffffff", // [사장님 요청 9] 검은 배경 삭제 -> 흰색
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // 브라우저 전체 스크롤 방지
      }}
    >
      {/* 🚨 네비게이션: 클릭 이벤트를 뺏기지 않도록 확실한 위치 고정 */}
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
        flippingTime={600}
        autoSize={true}
        startPage={0}
        className="magazine-canvas"
        maxShadowOpacity={0.4}
        /* 🚨 [사장님 요청 4] 터치 넘기기 및 휠 방지 조화 옵션 */
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
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
