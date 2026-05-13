import { MessageIcon, PhoneIcon, PriceIcon, WalletIcon } from '../assets/iconst'
import Container from '../base/Container'
import Section from '../base/Section'

import { tel } from '@/constants/baseConstants'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<Section className='relative bg-slate-900 text-white overflow-hidden h-185 lg:min-h-200 flex flex-col justify-center pb-10 md:pb-0'>
			{/* Background Image with Overlay */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/hero.png'
					alt='Car carrier truck background'
					className='w-full h-full object-cover opacity-40'
					fill
					priority
				/>
				<div className='absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-transparent'></div>
			</div>
			<Container className='relative z-10 h-full flex flex-col justify-center'>
				<div className='max-w-3xl flex flex-col gap-y-8 h-full justify-center pt-10 md:pt-0'>
					<h3 className='hidden md:flex items-center text-xl text-accent order-1 gap-x-2'>
						Перевозимо авто
						<span className='w-2 h-2 rounded-full bg-accent-secondary/80' /> Доставляємо
						спокій
					</h3>

					<h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white order-2'>
						Супутній Евакуатор <br />
						<span className='text-accent-secondary'>Україна та Європа</span>
					</h1>

					<p className='text-xl text-white/80 leading-relaxed order-3'>
						Економія до 50% на перевезенні авто завдяки попутним маршрутам. Надійно,
						безпечно та вчасно. Ваш автомобіль у надійних руках.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 xl:gap-6 order-5 md:order-4'>
						<Link href='#contact' className='text-lg btn btn-primary'>
							<MessageIcon />
							<span>Залишити Заявку</span>
						</Link>
						<Link
							href={`tel:${tel}`}
							className='btn btn-secondary-transparent text-lg '
						>
							<PhoneIcon />
							Зателефонувати
						</Link>
					</div>

					<div className='md:mt-8 flex flex-wrap items-center gap-6 md:gap-8 font-medium text-white/80 order-4 md:order-5'>
						<div className='flex items-center gap-2'>
							<WalletIcon className='text-accent-secondary' />
							<span>Безкоштовний розрахунок вартості</span>
						</div>
						{/* <div className='flex items-center gap-2'>
							<LocaleIcon className='text-accent-secondary' />
							<span>Щоденні рейси по Україні</span>
						</div> */}
						<div className='flex items-center gap-2'>
							<PriceIcon className='text-accent-secondary' />
							<span>Фіксована ціна без сюрпризів</span>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}
export default Hero
