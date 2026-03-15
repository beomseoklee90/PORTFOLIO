import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="m-0 p-0 overflow-hidden bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
