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
					src='/images/hero.webp'
					alt=''
					className='w-full h-full object-cover opacity-40'
					fill
					sizes='100vw'
					priority
				/>
				<div className='absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-transparent'></div>
			</div>
			<Container className='relative z-10 h-full flex flex-col justify-center'>
				<div className='max-w-4xl flex flex-col gap-y-6 h-full justify-center pt-8 md:pt-0'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white order-2'>
						<span className='text-accent-secondary'>Попутний</span> та <br />
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
					<p className='heading text-xl text-accent-secondary gap-x-2 order-5'>
						Ціна: від 25 грн/км — Телефонуйте!
					</p>
					<div className='flex flex-col sm:flex-row gap-4 xl:gap-6 order-7 md:order-6'>
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
					<div className='w-fit px-4 py-3 border border-accent-secondary bg-accent-secondary/10 flex flex-col lg:flex-row gap-y-4 gap-x-3 order-7 md:items-center justify-center rounded-lg'>
						<div className='flex items-center gap-x-2'>
							<div className='relative flex w-3 h-3'>
								<span className='absolute inline-flex h-full w-full rounded-full bg-accent-secondary animate-ping-smooth' />
								<span className='relative inline-flex w-3 h-3 rounded-full bg-accent-secondary/80' />
							</div>
							<p className='text-accent-secondary'>
								Не хочете їхати самі? Новий сервіс —{' '}
								<span className='font-semibold'>Перегін авто з водієм.</span>
							</p>
						</div>
						<Link
							href='#driver'
							className='text-accent-secondary font-semibold hover:underline'
						>
							Дізнатись умови
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	)
}
export default Hero
