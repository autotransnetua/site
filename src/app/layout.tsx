import ContactsBtns from '@/components/ContactsBtns'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

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
	metadataBase: new URL('https://autotrans.net.ua'),
	title: 'Евакуатор по Україні — Супутній та Індивідуальний | AutoTrans',
	description:
		'Супутній та індивідуальний евакуатор між містами України та доставка авто з Європи. Київ, Харків, Дніпро, Одеса, Львів — щоденні рейси. Фіксована ціна, відповідь за 5 хвилин.',
	keywords: [
		'супутній евакуатор',
		'індивідуальний евакуатор',
		'екстрений евакуатор',
		'термінова евакуація',
		'евакуатор ДТП',
		'попутний евакуатор',
		'перевезення авто по Україні',
		'евакуатор міжміський',
		'автовоз Україна',
		'доставка авто з Європи',
		'евакуатор з Польщі',
		'перевезення авто дешево',
		'евакуатор попутно',
		'індивідуальний евакуатор по Україні',
		'перевезення авто після ДТП',
		'евакуатор цілодобово',
		'негабаритне перевезення',
		'евакуатор Київ Харків',
		'евакуатор Київ Дніпро',
		'евакуатор Київ Одеса',
		'евакуатор Львів Київ',
		'ввезення авто з Польщі',
		'доставка авто з Німеччини',
		'AutoTrans'
	],
	robots: { index: true, follow: true },

	alternates: {
		canonical: 'https://autotrans.net.ua'
	},

	openGraph: {
		type: 'website',
		url: 'https://autotrans.net.ua',
		title: 'Евакуатор по Україні — Супутній та Індивідуальний | AutoTrans',
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
			<head>
				{/* eslint-disable-next-line @next/next/next-script-for-ga */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4ZFRX95');`
					}}
				/>
			</head>
			<body className='min-h-full flex flex-col relative'>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-T4ZFRX95'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				<Header />
				{children} <Footer />
				<ContactsBtns />
			</body>
		</html>
	)
}
