// layout.tsx
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* className에 폰트 변수 넣지 말고 그냥 비워두세요. globals.css의 * { ... } 가 잡을 겁니다. */}
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  // 기존 설정들...
  // 1. 기본 타이틀 및 템플릿 설정
  title: {
    default: "이범석 포트폴리오 | Beomseok Lee Portfolio",
    template: "%s | 이범석 포트폴리오",
  },

  // 2. 검색 엔진을 위한 설명 (잡지 스타일 컨셉 반영)
  description:
    "Next.js와 TypeScript로 구축된 매거진 스타일의 전문 포트폴리오입니다. 개발 기술력과 자영업자의 비즈니스 통찰력을 담은 웹 사이트 구축 사례를 확인하세요.",

  // 3. 검색 키워드
  keywords: [
    "개발자 포트폴리오",
    "Next.js 배포",
    "자영업자 홈페이지",
    "변호사 랜딩페이지",
    "Pretendard 디자인",
    "웹 개발 학습",
  ],

  // 4. 오픈 그래프 (SNS 공유 시 노출되는 정보)
  openGraph: {
    title: "이범석 포트폴리오 - 기술과 비즈니스의 조화",
    description: "매거진 레이아웃 기반의 차별화된 웹 경험을 제공합니다.",
    url: "https://beomseoklee90.github.io/PORTFOLIO/",
    siteName: "dj ice breaking 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://dj-ice-breaking-images.s3.us-east-1.amazonaws.com/main_visual.png", // 카톡 공유 시 뜰 메인 이미지 (1200x630 권장)
        width: 1200,
        height: 630,
        alt: "포트폴리오",
      },
    ],
  },
  verification: {
    google:
      "google-site-verification=F18MFiZCi_LQ4IGQgqVNWXC7ytse5ie3ysEQ7vk4254",
  },
};
