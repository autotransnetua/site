import data from '../data/tech.json'

import Image from 'next/image'

type TechItem = {
	id: string
	title: string
	description: string
	properties: string[]
	img: string
}

const techData = data as TechItem[]

const TechnologyList = () => {
	return (
		<ul className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 mx-auto'>
			{techData.map(el => (
				<li
					key={el.id}
					className='w-full xl:max-w-95 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100'
				>
					<div className='h-64 overflow-hidden relative'>
						<Image
							src={el.img}
							alt={el.title}
							width={400}
							height={256}
							className='class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"'
						/>
						<div className='absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6' />
					</div>
					<div className='p-8'>
						<h3 className='text-xl font-bold mb-3 text-primary'>{el.title}</h3>
						<p className='text-sm mb-6 leading-relaxed min-h-17'>{el.description}</p>
						<div className='class="space-y-2 pt-6 border-t border-white/40"'>
							{el.properties.map((prop, idx) => (
								<p
									key={idx}
									className='text-sm flex items-center gap-x-2 text-primary'
								>
									<span className='w-1.5 h-1.5 bg-accent-secondary rounded-full inline-block' />
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
export default TechnologyList
