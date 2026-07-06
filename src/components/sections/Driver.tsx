import Title from '../UI/Title'
import { CheckIcon } from '../assets/iconst'
import Container from '../base/Container'
import Section from '../base/Section'

import { tel } from '@/constants/baseConstants'

import Image from 'next/image'
import Link from 'next/link'

const Driver = () => {
	return (
		<Section className='py-10 lg:py-14 bg-bg' id='driver'>
			<Container className='py-6 w-full rounded-2xl bg-primary flex flex-col lg:flex-row items-center gap-10 xl:gap-8'>
				<div className='w-full lg:w-1/2 flex rounded-2xl flex-col items-center overflow-hidden'>
					<Image
						src='/images/driver.png'
						alt='Driver'
						width={800}
						height={600}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='w-full lg:w-1/2 flex flex-col items-center gap-6 py-6 px-6'>
					<Title
						className='max-w-5xl mx-auto'
						title='Нова послуга'
						subtitle='Перегін Авто з Водієм'
						titleColor='white'
					/>
					<div className='w-full bg-accent-secondary/10 border-accent-secondary rounded-xl flex items-center justify-center px-4 py-3'>
						<p className='font-semibold text-accent'>
							Вартість розраховується індивідуально — за дзвінком
						</p>
					</div>

					<p className='text-white/90'>
						Іноді простіше доручити перегін авто нашому водію, ніж їхати самому: забрали
						нову машину в іншому місті, немає часу на дорогу, або просто не хочете
						витрачати на це день. Водій сідає за кермо вашого автомобіля і доставляє
						його своїм ходом за узгодженим маршрутом.
					</p>

					<ul className='grid grid-cols-1 gap-4'>
						<li className=' text-white flex items-center gap-x-2 leading-normal'>
							<CheckIcon className='text-accent-secondary shrink-0' />
							<p>Авто виїжджає одразу після оформлення документів</p>
						</li>
						<li className=' text-white flex items-center gap-x-2 leading-normal'>
							<CheckIcon className='text-accent-secondary shrink-0' />
							<p>Акт прийому-передачі та фото/відеофіксація стану авто</p>
						</li>

						<li className=' text-white flex items-center gap-x-2 leading-normal'>
							<CheckIcon className='text-accent-secondary shrink-0' />
							<p>Підходить лише для технічно справних авто на ходу</p>
						</li>
						<li className=' text-white flex items-center gap-x-2 leading-normal'>
							<CheckIcon className='text-accent-secondary shrink-0' />
							<p>Маршрути по Україні та між Україною і країнами ЄС</p>
						</li>
					</ul>

					<Link href={`tel:${tel}`} className='btn btn-primary w-fit'>
						Замовити перегін з водієм
					</Link>
				</div>
			</Container>
		</Section>
	)
}
export default Driver
