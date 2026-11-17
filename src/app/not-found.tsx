import Container from '@/components/base/Container'
import Section from '@/components/base/Section'

import { tel } from '@/constants/baseConstants'

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Сторінку не знайдено',
	description:
		'Такої сторінки на сайті AutoTrans немає. Поверніться на головну або зателефонуйте нам.'
}

export default function NotFound() {
	return (
		<Section className='py-16 lg:py-20 bg-bg' id='not-found'>
			<Container className='w-full flex flex-col items-center text-center gap-y-6'>
				<p className='heading text-7xl font-bold text-accent-secondary'>404</p>
				<h1 className='text-3xl font-bold text-primary'>Сторінку не знайдено</h1>
				<p className='text-lg max-w-xl'>
					Можливо, посилання застаріло або в адресі помилка. Перейдіть на головну або
					зателефонуйте — диспетчер підкаже маршрут і вартість.
				</p>
				<div className='flex flex-col sm:flex-row gap-4'>
					<Link href='/' className='btn btn-primary border border-transparent'>
						На головну
					</Link>
					<Link
						href={`tel:${tel}`}
						className='btn border border-primary text-primary hover:bg-primary hover:text-white'
					>
						+38 (099) 123 31 31
					</Link>
				</div>
			</Container>
		</Section>
	)
}
