import { siteUrl } from '@/constants/baseConstants'

import type { MetadataRoute } from 'next'

const pages = ['/', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
	return pages.map(path => ({ url: `${siteUrl}${path}` }))
}
