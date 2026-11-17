import ContactsBtns from '@/components/ContactsBtns'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

import './globals.css'
import { isIndexable, openGraphBase, siteUrl } from '@/constants/baseConstants'

import type { Metadata } from 'next'
import { Montserrat, Raleway } from 'next/font/google'
import Script from 'next/script'

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

const title = 'Евакуатор по Україні — попутний та індивідуальний | AutoTrans'
const description =
	'Попутний та індивідуальний евакуатор між містами України, доставка авто з Європи. Київ, Харків, Дніпро, Одеса, Львів. Фіксована ціна, відповідь за 5 хвилин.'

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: { default: title, template: '%s | AutoTrans' },
	description,
	robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
	openGraph: {
		...openGraphBase,
		url: '/',
		title,
		description:
			'Перевезення авто між містами України та доставка з Польщі, Німеччини, Литви. Платите лише в один бік — до 50% економії.'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk' className={`${raleway.variable} ${montserrat.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col relative'>
				<Script id='gtm' strategy='afterInteractive'>
					{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZQ65FWN');`}
				</Script>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-NZQ65FWN'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				<Header />
				{children}
				<Footer />
				<ContactsBtns />
			</body>
		</html>
	)
}
