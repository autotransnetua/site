'use client'

import Script from 'next/script'

export default function Analytics() {
	return (
		<>
			{/* Google tag (gtag.js) */}
			<Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=AW-18193541907'
			></Script>
			<Script id='gtag-init' strategy='afterInteractive'>
				{` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18193541907');
`}
			</Script>
		</>
	)
}
