import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // 노출하고 싶지 않은 경로가 있다면 추가하세요
    },
    // 배포된 실제 도메인 주소를 넣으세요
    sitemap: 'https://portfolio.djicebreaking.org/sitemap.xml',
  }
}