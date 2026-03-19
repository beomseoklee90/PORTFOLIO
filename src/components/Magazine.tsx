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
    // 🚨 여기서도 내부 스크롤을 허용해야 합니다.
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
      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      const vw = window.innerWidth;

      const isDesktop = vw > 768 && vw > vh;

      if (isDesktop) {
        // PC: 100% 꽉 채우는 풀사이즈 (양면)
        setSize({ width: Math.floor(vw / 2), height: vh });
      } else {
        // 🚨 모바일 세로: 100%가 아니라 90% 크기로 띄워서 '드래그 가능한 객체'임을 시각적으로 강조
        const targetWidth = Math.floor(vw * 0.92);
        const targetHeight = Math.floor(vh * 0.88);
        setSize({ width: targetWidth, height: targetHeight });
      }

      document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", () =>
      setTimeout(updateSize, 300),
    );

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted || size.width === 0) return null;

  return (
    <main
      style={{
        width: "100vw",
        height: "calc(var(--vh, 1vh) * 100)",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#121212",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: "20px",
          right: "30px",
          zIndex: 9999,
          display: "flex",
          gap: "1.5rem",
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
        maxShadowOpacity={0.5}
        /* 🚨 터치로 드래그해서 넘기기 최적화 */
        swipeDistance={20} // 살짝만 드래그해도 반응하도록 수치 낮춤
        clickEventForward={true}
        useMouseEvents={true}
        mobileScrollSupport={true}
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
