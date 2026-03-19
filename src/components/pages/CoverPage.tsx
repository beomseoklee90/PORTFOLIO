import Image from "next/image";

export default function CoverPage() {
  return (
    /* 1. section 태그와 page-section 클래스로 브라우저 렌더링 격리 
       2. border-r은 잡지의 '책등' 느낌을 위해 유지하되 스타일 간소화
    */
    <section
      className="page-section"
      style={{
        padding: 0,
        backgroundColor: "#ffffff",
        borderRight: "1px solid #eee",
        position: "relative",
      }}
    >
      <div
        className="w-full h-full relative magazine-image-container"
        style={{ isolation: "isolate" }}
      >
        {/* 사진 배치 - grayscale 효과 유지 */}
        <Image
          src="/images/image_0.webp"
          alt="Architect Visual"
          fill
          className="object-cover grayscale"
          priority
          unoptimized={true} // 처리 부하 감소
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            /* 🚨 핵심: 그래픽 카드(GPU)를 강제로 깨워서 미리 그려두게 함 */
            transform: "translateZ(0)",
            willChange: "transform",
            display: "block",
          }}
        />

        {/* 3. 사진 위 오버레이 텍스트: 
           그라데이션이 텍스트와 엉키지 않게 mix-blend-mode와 z-index 조절 
        */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-12 md:p-16"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
            zIndex: 10,
          }}
        >
          {/* 타이틀: 쪼개짐 방지를 위해 display: block 강제 및 globals.css의 h1 스타일 적용 */}
          <h1
            className="text-black leading-[0.8] tracking-tighter"
            style={{
              fontSize: "clamp(4rem, 15vw, 8rem)", // 반응형 크기 조절
              fontFamily: "var(--font-sans)", // 설정한 고딕 폰트 사용
              fontWeight: 900,
              display: "block",
              wordBreak: "keep-all",
            }}
          >
            ICE
            <br />
            BREAKING
            <br />
            LAB.
          </h1>

          {/* 하단 텍스트: category 클래스 활용하여 세련된 느낌 유지 */}
          <p
            className="category mt-8"
            style={{
              color: "#555",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.5em",
            }}
          >
            WEB PUBLISHER PORTFOLIO
          </p>
        </div>
      </div>
    </section>
  );
}
