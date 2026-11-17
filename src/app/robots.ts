import { isIndexable, siteUrl } from '@/constants/baseConstants'

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	if (!isIndexable) {
		return { rules: [{ userAgent: '*', disallow: '/' }] }
	}

	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: '/thank-you'
			}
		],
		sitemap: `${siteUrl}/sitemap.xml`
	}
}
