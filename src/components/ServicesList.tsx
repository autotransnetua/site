import services from '../data/services.json'

import { CheckIcon } from './assets/iconst'
import { tel } from '@/constants/baseConstants'

import Image from 'next/image'
import Link from 'next/link'

const ServicesList = () => {
	return (
		<ul className='w-full'>
			{services.map((el, index) => (
				<li
					key={el.id}
					className='flex flex-col lg:flex-row lg:not-odd:flex-row-reverse group'
				>
					<div className='w-full p-10 md:p-14 lg:p-16 xl:p-24 lg:w-[55%] flex flex-col '>
						<h3 className='text-4xl uppercase font-bold text-primary mb-6'>
							{el.title}
						</h3>
						<div className='w-full h-px bg-accent-secondary opacity-50 mb-8'></div>
						<p className='text-lg mb-8'>{el.description}</p>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-10'>
							{el.properties.map((property, index) => (
								<p
									key={index}
									className='text-lg font-medium text-primary flex items-center gap-x-2 leading-normal'
								>
									<CheckIcon className='text-accent-secondary shrink-0' />
									{property}
								</p>
							))}
						</div>
						<Link href={`tel:${tel}`} className='btn btn-primary w-fit'>
							{el.textBtn}
						</Link>
					</div>
					<div className='relative w-full lg:w-[45%] min-h-64 lg:min-h-auto overflow-hidden'>
						<Image
							src={el.img}
							alt={el.title}
							className='object-cover group-hover:scale-105 transition-transform duration-300'
							fill
							priority
						/>
						<div
							className={`absolute inset-0 ${index % 2 === 0 ? 'lg:bg-linear-to-r' : 'lg:bg-linear-to-l'} from-white via-white/30 to-transparent z-1`}
						/>
					</div>
				</li>
			))}
		</ul>
	)
}
export default ServicesList
