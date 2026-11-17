import JsonLd, { faqSchema, organizationSchema, websiteSchema } from '@/components/JsonLd'
import Benefits from '@/components/sections/Benefits'
import ContactNow from '@/components/sections/ContactNow'
import Cost from '@/components/sections/Cost'
import Counter from '@/components/sections/Counter'
import Driver from '@/components/sections/Driver'
import Form from '@/components/sections/Form'
import Guarantees from '@/components/sections/Guarantees'
import Hero from '@/components/sections/Hero'
import Process from '@/components/sections/Process'
import Questions from '@/components/sections/Questions'
import Reviews from '@/components/sections/Reviews'
import Services from '@/components/sections/Services'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	alternates: { canonical: '/' }
}

export default function Home() {
	return (
		<main className='flex flex-1 w-full flex-col items-center justify-between relative'>
			<JsonLd data={organizationSchema} />
			<JsonLd data={websiteSchema} />
			<JsonLd data={faqSchema} />
			<Hero />
			<Form />
			<Cost />
			<Benefits />
			<Counter />
			<Services />
			<Driver />
			<Process />
			<ContactNow />
			{/* <Transport /> */}
			<Guarantees />
			<Questions />
			<Reviews />
		</main>
	)
}
