import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: '*', allow: '/' },
		sitemap: 'https://autotrans.com.ua/sitemap.xml'
	}
}
