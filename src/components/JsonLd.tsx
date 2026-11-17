import faqData from '@/data/faq.json'

import { email, siteUrl, tel } from '@/constants/baseConstants'

const googleMapsUrl = 'https://maps.google.com/?cid=5637633333492432222'
const organizationId = `${siteUrl}/#organization`

// JSON.stringify не екранує "<" — без заміни текст із "</script>" закрив би тег
const serializeJsonLd = (data: unknown) =>
	JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')

const JsonLd = ({ data }: { data: object }) => (
	<script
		type='application/ld+json'
		dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
	/>
)
export default JsonLd

// Адреси немає (бізнес із зоною обслуговування) — тому areaServed замість address
export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': organizationId,
	name: 'AutoTrans',
	url: siteUrl,
	logo: `${siteUrl}/images/logo.webp`,
	image: `${siteUrl}/og-image.jpg`,
	telephone: tel,
	email,
	priceRange: 'від 25 грн/км',
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '00:00',
		closes: '23:59'
	},
	areaServed: ['Україна', 'Польща', 'Німеччина', 'Литва', 'Чехія'].map(name => ({
		'@type': 'Country',
		name
	})),
	hasMap: googleMapsUrl,
	sameAs: [googleMapsUrl]
}

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'AutoTrans',
	url: siteUrl,
	inLanguage: 'uk',
	publisher: { '@id': organizationId }
}

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqData.map(item => ({
		'@type': 'Question',
		name: item.question,
		acceptedAnswer: { '@type': 'Answer', text: item.answer }
	}))
}
