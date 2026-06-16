import { MessageIcon, PhoneIcon, PriceIcon, WalletIcon } from '../assets/iconst'
import Container from '../base/Container'
import Section from '../base/Section'

import { tel } from '@/constants/baseConstants'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<Section className='relative bg-slate-900 text-white overflow-hidden min-h-200 flex flex-col justify-center pb-10 md:pb-0'>
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
				<div className='max-w-4xl flex flex-col gap-y-6 h-full justify-center pt-8 md:pt-0'>
					{/* <h3 className='hidden md:flex items-center text-xl text-accent order-1 gap-x-2'>
						Перевозимо авто
						<span className='w-2 h-2 rounded-full bg-accent-secondary/80' /> Доставляємо
						спокій
					</h3> */}

					<h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white order-2'>
						<span className='text-accent-secondary'>Супутній</span> та <br />
						<span className='text-accent-secondary'>індивідуальний</span> Евакуатор{' '}
						<br />
						<span className=''>Україна та Європа</span>
					</h1>

					<Link
						href={`tel:${tel}`}
						className='text-3xl md:text-4xl xl:text-5xl font-bold text-accent-secondary hover:underline order-3 my-2'
					>
						+38 (099) 123 31 31
					</Link>

					<p className='text-xl font-semibold text-white leading-relaxed order-4'>
						Економія до 50% на перевезенні авто завдяки попутним маршрутам. <br />
						Надійно, безпечно та вчасно. Ваш автомобіль у надійних руках.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 xl:gap-6 order-6 md:order-5'>
						<Link href={`tel:${tel}`} className='text-lg btn btn-primary'>
							<PhoneIcon />
							Зателефонувати
						</Link>
						<Link href='#contact' className='btn btn-secondary-transparent text-lg'>
							<MessageIcon />
							<span>Залишити Заявку</span>
						</Link>
					</div>

					<div className='md:mt-3 flex flex-wrap items-center gap-6 md:gap-8 font-medium text-white/90 order-5 md:order-6'>
						<div className='flex items-center gap-2'>
							<WalletIcon className='text-accent-secondary' />
							<span>Безкоштовний розрахунок вартості</span>
						</div>

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
