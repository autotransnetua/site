import data from '../data/transport.json'

import Image from 'next/image'

type TransportItem = {
	id: string
	title: string
	description: string
	properties: string[]
	img: string
}

const transportData = data as TransportItem[]

const Transport = () => {
	return (
		<ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mx-auto'>
			{transportData.map(el => (
				<li
					key={el.id}
					className='w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 mx-auto'
				>
					<div className='h-64 overflow-hidden relative'>
						<Image
							src={el.img}
							alt={el.title}
							width={400}
							height={256}
							className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
						/>
						<div className='absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6' />
					</div>
					<div className='p-8'>
						<h3 className='text-xl font-bold mb-3 text-primary'>{el.title}</h3>
						<p className='text-sm mb-6 leading-relaxed min-h-17'>{el.description}</p>
						<div className='space-y-2 pt-6 border-t border-slate-100'>
							{el.properties.map((prop, idx) => (
								<p
									key={idx}
									className='text-sm flex items-center gap-x-2 text-primary'
								>
									<span className='w-1.5 h-1.5 bg-accent-secondary rounded-full inline-block shrink-0' />
									{prop}
								</p>
							))}
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}
export default Transport
