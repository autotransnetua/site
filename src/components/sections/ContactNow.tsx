import Container from '../base/Container'
import Section from '../base/Section'

import { tel } from '@/constants/baseConstants'

import Link from 'next/link'

const ContactNow = () => {
	return (
		<Section className='bg-primary  py-16'>
			<Container>
				<div className='w-full md:w-[85%] xl:w-[70%] mx-auto flex flex-col gap-y-10 text-white text-center'>
					<p>
						Зв&apos;яжіться з нами зараз — підберемо найближчий попутний рейс <br /> для
						вашого автомобіля.
					</p>
					<Link href={`tel:${tel}`} className='btn btn-primary mx-auto text-lg'>
						Зателефонувати зараз
					</Link>
				</div>
			</Container>
		</Section>
	)
}
export default ContactNow
