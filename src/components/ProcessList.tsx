import { CalendarIcon, CarIcon, CheckRoundIcon, ListIcon } from './assets/iconst'

import { JSX } from 'react'

type ProcessItem = {
	id: string
	title: string
	description: string
	icon: string | JSX.Element
}

const processData: ProcessItem[] = [
	{
		id: '20',
		title: 'Запит Ціни',
		description: 'Заповніть форму або зателефонуйте. Вкажіть маршрут і тип авто.',
		icon: <ListIcon />
	},
	{
		id: '21',
		title: 'Бронювання',
		description: 'Підбираємо попутний рейс і називаємо фіксовану ціну.',
		icon: <CalendarIcon />
	},
	{
		id: '22',
		title: 'Завантаження',
		description: 'Водій прибуває в узгоджений час, завантажує авто та фіксує стан фото/відео.',
		icon: <CarIcon />
	},
	{
		id: '23',
		title: 'Доставка',
		description:
			'Авто доставляється в пункт призначення. Огляд та фінальне підписання документів.',
		icon: <CheckRoundIcon />
	}
]

const ProcessList = () => {
	return (
		<ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto'>
			{processData.map((el, idx) => (
				<li
					key={el.id}
					className='w-full xl:max-w-80 lg:max-h-75 flex flex-col items-start p-6 rounded-xl hover:bg-hovered/15 hover:shadow-lg hover:scale-105 transition-all duration-300 mx-auto relative bg-white/65 border border-white/5 cursor-default select-none group'
				>
					<span className='block text-slate-300 font-black text-5xl opacity-20 -mb-5 z-0 absolute top-1/3 left-1/2 transform -translate-x-1/2 group-hover:text-white group-hover:opacity-80 transition-all duration-300'>
						{'0' + (idx + 1)}
					</span>
					<div className='mx-auto w-18 h-18 rounded-full border-4 border-accent-secondary text-accent-secondary flex items-center justify-center bg-white mb-8 group-hover:bg-hovered/5 transition-colors duration-300'>
						{el.icon}
					</div>
					<p className='text-xl font-bold mb-3 relative z-10 text-primary text-center mx-auto'>
						{el.title}
					</p>
					<p className='leading-relaxed text-center'>{el.description}</p>
				</li>
			))}
		</ul>
	)
}
export default ProcessList
