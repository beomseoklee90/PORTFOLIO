/** @type {import('next').NextConfig} */
const nextConfig = {
  // 깃허브 페이지 배포를 위해 빌드 결과물을 정적으로 추출합니다.
  output: 'export', 
  // 이미지 최적화는 깃허브 서버가 못하니 꺼줍니다.
  images: {
    unoptimized: true,
  },
  // 주소 끝에 슬래시를 붙여서 경로 인식을 안정적으로 만듭니다.
  trailingSlash: true,
};

export default nextConfig;