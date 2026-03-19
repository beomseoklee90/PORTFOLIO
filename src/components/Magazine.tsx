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
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    );
  },
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
      setSize({
        width: vw < 768 ? vw : Math.floor(vw / 2),
        height: vh,
      });
      document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    if (window.visualViewport)
      window.visualViewport.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      if (window.visualViewport)
        window.visualViewport.removeEventListener("resize", updateSize);
    };
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
        backgroundColor: "#000",
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
            fontSize: "13px",
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
            fontSize: "13px",
            fontWeight: "900",
            background: "none",
            border: "none",
          }}
        >
          WORKS
        </button>
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
          width={size.width}
          height={size.height}
          size="stretch"
          minWidth={size.width}
          maxWidth={size.width}
          minHeight={size.height}
          maxHeight={size.height}
          showCover={false}
          drawShadow={true}
          usePortrait={window.innerWidth < 768}
          flippingTime={800} // 전환 속도를 살짝 높여 반짝임 인지 저하
          autoSize={true}
          startPage={0}
          className="magazine-canvas"
          // 🚨 [반짝임 방지 핵심] 모바일 성능 최적화 옵션
          mobileScrollSupport={false}
          swipeDistance={30}
          clickEventForward={true}
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
      </div>
    </main>
  );
}
