import { ClockIcon, LocaleIcon, PeopleIcon, WalletIcon } from '../assets/iconst'
import Container from '../base/Container'
import Section from '../base/Section'

import { JSX } from 'react'

type BenefitsItem = {
	title: string
	description: string
	icon: JSX.Element
}

const items: BenefitsItem[] = [
	{
		title: 'Миттєвий Підбір',
		description: 'Знайдемо попутний рейс у вашому напрямку протягом кількох годин.',
		icon: <ClockIcon />
	},
	{
		title: 'Найвигідніша Ціна',
		description: 'Платите лише в один бік — економія до 50% проти звичайного замовлення.',
		icon: <WalletIcon />
	},
	{
		title: 'Будь-яка Точка',
		description: 'Доставляємо з будь-якого міста України та з країн Європи прямо до Вас.',
		icon: <LocaleIcon />
	},
	{
		title: 'Досвідчені Водії',
		description: 'Перевіряємо кожного виконавця — Ваше авто у надійних руках.',
		icon: <PeopleIcon />
	}
]

const Benefits = () => {
	return (
		<Section className='bg-white py-20 lg:py-30'>
			<Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8'>
				{items.map(el => (
					<ul
						key={el.description}
						className='w-full md:w-95 flex flex-col items-start p-6 rounded-xl hover:bg-background hover:shadow-lg hover:scale-105 transition-all mx-auto'
					>
						<li className='mb-6 w-16 h-16 flex items-center justify-center text-white bg-accent-secondary shadow-lg shadow-orange-500/30 rounded-lg'>
							{el.icon}
						</li>
						<li className='text-2xl font-semibold text-primary mb-4'>{el.title}</li>
						<li className='text-xl text-justify'>{el.description}</li>
					</ul>
				))}
			</Container>
		</Section>
	)
}
export default Benefits
