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
  verification: {
    google:
      "google-site-verification=F18MFiZCi_LQ4IGQgqVNWXC7ytse5ie3ysEQ7vk4254",
  },
};
