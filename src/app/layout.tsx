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
