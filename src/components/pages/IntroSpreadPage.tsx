"use client";
import React from "react";

export default function IntroSpreadPage() {
  return (
    /* 1. section 태그와 page-section 클래스로 브라우저 렌더링 격리 
       2. 오른쪽 페이지이므로 왼쪽 경계선(border-l)을 주어 접히는 느낌 강조
    */
    <section
      className="page-section"
      style={{
        backgroundColor: "#ffffff",
        borderLeft: "1px solid #e5e5e5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 40px md:p-16",
        boxSizing: "border-box",
      }}
    >
      {/* 상단: 카테고리 & 이슈 번호 */}
      <div
        className="flex justify-between items-start border-b border-black pb-4 mb-8"
        style={{ isolation: "isolate" }}
      >
        <span
          className="category"
          style={{ fontSize: "10px", marginBottom: 0 }}
        >
          Special Interview
        </span>
        <span
          style={{
            fontSize: "10px",
            fontWeight: "500",
            letterSpacing: "0.2em",
            color: "#a3a3a3",
          }}
        >
          ISSUE NO. 01
        </span>
      </div>

      {/* 중단: 메인 컨텐츠 */}
      <div className="flex-1" style={{ display: "block", width: "100%" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
            lineHeight: "1.1",
            fontWeight: "900",
            marginBottom: "2rem",
            letterSpacing: "-0.05em",
          }}
        >
          ICE BREAKING:
          <br />
          <span style={{ color: "#a3a3a3", fontWeight: "300" }}>
            BEYOND THE CODE.
          </span>
        </h2>

        <div
          className="space-y-6 text-sm md:text-base leading-relaxed text-neutral-800"
          style={{
            fontFamily: '"Noto Serif KR", serif',
            wordBreak: "keep-all",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          {/* 드롭 캡 최적화: 렌더링 오류 방지를 위해 float 대신 span 구조 */}
          <p className="relative">
            <span
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                float: "left",
                lineHeight: "0.8",
                marginRight: "12px",
                marginTop: "4px",
                color: "#000",
              }}
            >
              안
            </span>
            녕하세요. 연세대학교 컴퓨터과학과를 졸업하고, 사람들에게 긍정적인
            영향과 영감을 드리는 일을 하고 있습니다. 단순한 코딩을 넘어 웹
            어플리케이션의 상류/하류 공정, 설계, 개발, 테스트를 아우르는
            기술력이 저의 핵심 자산입니다.
          </p>

          <p style={{ clear: "both" }}>
            저는 그동안{" "}
            <strong
              style={{
                fontWeight: "700",
                borderBottom: "1px solid #000",
                paddingBottom: "1px",
              }}
            >
              공장, 로우코드, 신용카드, 고속도로, 소개팅 앱, 숙박 예약, 건설
            </strong>{" "}
            등 다양한 도메인의 프로젝트에 참여하며 폭넓은 개발 경험을
            쌓아왔습니다. 복잡한 시스템의 설계부터 유지보수에 이르기까지 전체
            과정을 직접 관리하며 다져온 실력을 바탕으로 사장님들의 비즈니스
            문제를 실질적으로 해결해 드립니다.
          </p>

          <p
            style={{
              fontStyle: "italic",
              color: "#737373",
              paddingTop: "24px",
              borderTop: "1px solid #f0f0f0",
              marginTop: "24px",
            }}
          >
            "우리는 기술로 얼어붙은 문제를 깨고, 새로운 비즈니스의 흐름을
            만듭니다."
          </p>
        </div>
      </div>

      {/* 하단: 시그니처 & 페이지 번호 */}
      <div
        className="mt-8 flex justify-between items-end"
        style={{ isolation: "isolate" }}
      >
        <div>
          <div
            className="category"
            style={{ fontSize: "9px", marginBottom: "4px" }}
          >
            Expertise
          </div>
          <div
            style={{
              fontSize: "9px",
              color: "#a3a3a3",
              letterSpacing: "0.1em",
            }}
          >
            NEXT.JS • ARCHITECTURE • CI/CD
          </div>
        </div>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "900",
            fontFamily: "var(--font-sans)",
          }}
        >
          01
        </span>
      </div>
    </section>
  );
}
