import { ClockIcon, LockIcon, PeopleIcon, PiggyBankIcon } from './assets/iconst'

import { JSX } from 'react'

type GuaranteeItem = {
	id: string
	title: string
	description: string
	icon: string | JSX.Element
}

const guaranteeData: GuaranteeItem[] = [
	{
		id: '41',
		title: 'Оптимальна Вартість',
		description:
			'Фіксуємо ціну до виїзду. Жодних «доплат на місці» чи змін після підтвердження.',
		icon: <PiggyBankIcon />
	},
	{
		id: '42',
		title: 'Вчасна Доставка',
		description:
			'Авто доставляється у вказане місце — без перевантажень і «до залізничної станції».',
		icon: <ClockIcon />
	},
	{
		id: '43',
		title: 'Професійні Водії',
		description:
			'Кожен виконавець перевірений — досвід у перевезенні авто, а не просто "є машина".',
		icon: <PeopleIcon />
	},
	{
		id: '44',
		title: 'Безпечне Поводження',
		description:
			'Ми використовуємо м`які ремені та сучасне обладнання, щоб запобігти будь-яким пошкодженням вашого авто',
		icon: <LockIcon />
	}
]

const GuaranteesList = () => {
	return (
		<ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto'>
			{guaranteeData.map(el => (
				<li
					key={el.id}
					className='text-center p-6 rounded-xl border border-white/50 hover:shadow-lg transition-shadow bg-bg'
				>
					<div className='w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-accent-secondary shadow-sm mb-6'>
						{el.icon}
					</div>
					<h3 className='text-xl font-bold mb-3 text-primary'>{el.title}</h3>
					<p className='leading-relaxed'>{el.description}</p>
				</li>
			))}
		</ul>
	)
}
export default GuaranteesList
