"use client";

import React, { useState, useEffect, useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

// 🚨 [풀 로드] dynamic 대신 정적 임포트로 빌드 시점에 다 묶어버립니다.
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
      className="page-wrapper"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#fff",
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
  const [orientation, setOrientation] = useState("portrait");
  const bookRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      const vw = window.innerWidth;
      const isLandscape = vw > vh;

      setOrientation(isLandscape ? "landscape" : "portrait");
      setSize({
        width: isLandscape ? Math.floor(vw / 2) : vw,
        height: vh,
      });
      document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", () => {
      // 🚨 가로 전환 시 즉각 재배치 (카톡 브라우저 대응)
      setTimeout(updateSize, 300);
    });

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("orientationchange", updateSize);
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
      {/* Navbar - zIndex 최상단 고정 */}
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
          usePortrait={orientation === "portrait"}
          flippingTime={600} // 🚨 더 빠른 전환으로 잔상 제거
          autoSize={true}
          startPage={0}
          disableFlipByClick={false}
          className="magazine-canvas"
        >
          {/* 🚨 모든 페이지를 즉시 로드 */}
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
