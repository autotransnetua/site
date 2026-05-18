import data from '../data/price.json'

import { tel } from '@/constants/baseConstants'

import Image from 'next/image'
import Link from 'next/link'

type CostItem = {
	id: string
	title: string
	price: string
	img: string
}

const CostsList = () => {
	const costData = data as CostItem[]

	return (
		<ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mx-auto'>
			{costData.map(el => (
				<li
					key={el.id}
					className='w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 mx-auto'
				>
					<div className='h-56 overflow-hidden relative'>
						<Image
							src={el.img}
							alt={el.title}
							width={400}
							height={256}
							className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
						/>
					</div>
					<div className='p-6'>
						<h3 className='text-xl font-bold mb-3 text-primary text-center'>
							{el.title}
						</h3>
						<p className='text-xl font-bold text-accent-secondary text-center'>
							Ціна: {el.price}
						</p>
						<Link
							href={`tel:${tel}`}
							className='btn btn-primary mx-auto text-lg mt-5 w-full!'
						>
							Замовити
						</Link>
					</div>
				</li>
			))}
		</ul>
	)
}
export default CostsList
