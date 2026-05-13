import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Raleway } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-body',
	weight: ['400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

const raleway = Raleway({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-heading',
	weight: ['700', '900'],
	display: 'swap'
})

export const metadata: Metadata = {
	// metadataBase: new URL('https://autotrans.com.ua'),
	title: 'Супутній Евакуатор по Україні та з Європи | AutoTrans',
	description:
		'Супутній евакуатор по всій Україні та доставка авто з Європи. Платите лише в один бік — економія до 50%. Щоденні рейси, фіксована ціна, відповідь за 5 хвилин. Замовте зараз!',
	keywords: [
		'супутній евакуатор',
		'попутний евакуатор',
		'перевезення авто по Україні',
		'евакуатор міжміський',
		'автовоз Україна',
		'доставка авто з Європи',
		'евакуатор з Польщі',
		'перевезення авто дешево',
		'евакуатор попутно',
		'AutoTrans'
	],
	robots: { index: true, follow: true },

	// alternates: {
	// 	canonical: 'https://autotrans.com.ua'
	// },

	openGraph: {
		type: 'website',
		// url: 'https://autotrans.com.ua',
		title: 'Супутній Евакуатор по Україні та з Європи | AutoTrans',
		description:
			'Перевезення авто між містами України та доставка з Польщі, Німеччини, Литви. Платите лише в один бік — до 50% економії.',
		images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
		locale: 'uk_UA',
		siteName: 'AutoTrans'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk' className={`${raleway.variable} ${montserrat.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col relative'>{children}</body>
		</html>
	)
}
