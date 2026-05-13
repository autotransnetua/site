import ContactsBtns from '@/components/ContactsBtns'
import Benefits from '@/components/sections/Benefits'
import ContactNow from '@/components/sections/ContactNow'
import Counter from '@/components/sections/Counter'
import Footer from '@/components/sections/Footer'
import Form from '@/components/sections/Form'
import Guarantees from '@/components/sections/Guarantees'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Process from '@/components/sections/Process'
import Questions from '@/components/sections/Questions'
import Reviews from '@/components/sections/Reviews'
import Services from '@/components/sections/Services'
import Transport from '@/components/sections/Transport'

export default function Home() {
	return (
		<main className='flex flex-1 w-full flex-col items-center justify-between relative'>
			<Header />
			<Hero />
			<Form />
			<Benefits />
			<Counter />
			<Services />
			<ContactNow />
			<Process />
			<Transport />
			<Guarantees />
			<Questions />
			<Reviews />
			<Footer />
			<ContactsBtns />
		</main>
	)
}
