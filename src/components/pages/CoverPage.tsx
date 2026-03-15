import Image from "next/image";

export default function CoverPage() {
  return (
    <div className="w-full h-full flex bg-white relative overflow-hidden border-r">
      {/* 왼쪽 사진 배치 */}
      <div className="w-full h-full relative">
        <Image
          src="/images/image_0.png"
          alt="Architect Visual"
          fill
          className="object-cover grayscale"
          priority
        />
        {/* 사진 위 오버레이 텍스트 */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex flex-col justify-end p-16">
          <h1 className="text-black text-8xl font-serif-mag italic leading-[0.8] tracking-tighter">
            ICE
            <br />
            BREAKING
            <br />
            LAB.
          </h1>
          <p className="mt-8 font-sans-mag font-bold tracking-[0.5em] text-[12px] text-neutral-600">
            WEB PUBLISHER PORTFOLIO
          </p>
        </div>
      </div>
    </div>
  );
}
