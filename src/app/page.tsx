import Benefits from '@/components/sections/Benefits'
import Contacts from '@/components/sections/Contacts'
import Counter from '@/components/sections/Counter'
import Footer from '@/components/sections/Footer'
import Form from '@/components/sections/Form'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Reviews from '@/components/sections/Reviews'
import Services from '@/components/sections/Services'
import Technology from '@/components/sections/Technology'

export default function Home() {
	return (
		<main className='flex flex-1 w-full flex-col items-center justify-between'>
			<Header />
			<Hero />
			<Benefits />
			<Counter />
			<Services />
			<Technology />
			<Form />
			<Reviews />
			<Contacts />
			<Footer />
		</main>
	)
}
