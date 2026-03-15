"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function LawyerLeftPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
        padding: isMobile ? "0" : "100px 120px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "auto" : "100%",
          overflow: "hidden",
        }}
      >
        {isMobile ? (
          /* --- 모바일용 --- */
          <img
            src="/images/lawyer_visual.png"
            alt="Lawyer Visual Mobile"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "grayscale(100%)",
            }}
          />
        ) : (
          /* --- PC용 --- */
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src="/images/lawyer_visual.png"
              alt="Lawyer Visual PC"
              fill
              style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              unoptimized
            />
          </div>
        )}
      </div>

      {!isMobile && (
        <div
          style={{
            paddingTop: "20px",
            fontSize: "11px",
            fontFamily: "sans-serif",
            letterSpacing: "0.2em",
            color: "#999",
            textTransform: "uppercase",
          }}
        >
          Portfolio Case 02 / Legal Service
        </div>
      )}
    </div>
  );
}
