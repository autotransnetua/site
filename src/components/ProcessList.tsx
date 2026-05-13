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
		description:
			'Використайте наш калькулятор або зателефонуйте, щоб отримати точний розрахунок вартості.',
		icon: <ListIcon />
	},
	{
		id: '21',
		title: 'Бронювання',
		description: 'Оберіть зручну дату та час. Ми призначимо найближчого до вас водія.',
		icon: <CalendarIcon />
	},
	{
		id: '22',
		title: 'Завантаження',
		description:
			'Водій оглядає та завантажує ваше авто. Ви отримуєте посилання для відстеження.',
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
		<ul className='w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto'>
			{processData.map((el, idx) => (
				<li
					key={el.id}
					className='w-full xl:max-w-80 flex flex-col items-start p-6 rounded-xl hover:bg-background hover:shadow-lg hover:scale-105 transition-all mx-auto relative h-full bg-white/65 border border-white/5 cursor-default select-none'
				>
					<span className='block text-slate-300 font-black text-5xl opacity-20 -mb-5 z-0 absolute top-1/3 left-1/2 transform -translate-x-1/2'>
						{'0' + (idx + 1)}
					</span>
					<div className='mx-auto w-18 h-18 rounded-full border-4 border-accent-secondary text-accent-secondary flex items-center justify-center bg-white mb-8'>
						{el.icon}
					</div>
					<p className='text-xl font-bold mb-3 relative z-10 text-primary text-center mx-auto'>
						{el.title}
					</p>
					<p className='text-sm leading-relaxed text-center'>{el.description}</p>
				</li>
			))}
		</ul>
	)
}
export default ProcessList
