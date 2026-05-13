'use client'

import { useState } from 'react'

const faqData = [
	{
		id: 'faq-1',
		question: 'Скільки коштує перевезення автомобіля?',
		answer: 'Вартість залежить від відстані, типу транспортування та габаритів авто. Зателефонуйте нам або залиште заявку — розрахуємо індивідуально протягом 15 хвилин.'
	},
	{
		id: 'faq-2',
		question: 'Як швидко ви можете забрати автомобіль?',
		answer: 'У більшості випадків подаємо транспорт протягом 1–3 годин після підтвердження замовлення. У термінових ситуаціях — намагаємось приїхати якнайшвидше.'
	},
	{
		id: 'faq-3',
		question: 'Чи застраховане моє авто під час перевезення?',
		answer: 'Так, всі перевезення здійснюються з повним страховим покриттям. У разі будь-яких пошкоджень — несемо повну матеріальну відповідальність.'
	},
	{
		id: 'faq-4',
		question: 'Ви перевозите авто після ДТП або на ходу?',
		answer: 'Перевозимо будь-які автомобілі — як на ходу, так і після аварій, з пошкодженнями підвіски, без коліс тощо. Маємо відповідне обладнання для будь-якого випадку.'
	},
	{
		id: 'faq-5',
		question: 'Що таке попутне перевезення і як воно працює?',
		answer: 'Попутне перевезення — це коли ваше авто їде разом з іншими в одному напрямку. Ви платите лише свою частину маршруту, що дозволяє заощадити до 50% вартості.'
	},
	{
		id: 'faq-6',
		question: 'Чи перевозите ви автомобілі за кордон?',
		answer: 'Так, здійснюємо перевезення між Україною та країнами ЄС. Беремо на себе всі питання щодо митного оформлення та документації.'
	}
]

type FaqItem = (typeof faqData)[number]

const FAQItem = ({
	item,
	isOpen,
	onToggle
}: {
	item: FaqItem
	isOpen: boolean
	onToggle: () => void
}) => {
	return (
		<div
			className={`w-full lg:max-w-[80%] lx:max-w-[70%] border-b border-white/10 cursor-pointer transition-colors duration-200 group bg-white rounded-lg px-5 py-3 mx-auto`}
			onClick={onToggle}
		>
			<div className='py-5 flex justify-between items-center'>
				<h4 className='text-base md:text-lg text-primary font-semibold pr-8 transition-colors duration-200 group-hover:text-accent-secondary'>
					{item.question}
				</h4>
				<span
					className={`text-accent-secondary text-xl font-light shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
				>
					+
				</span>
			</div>

			<div
				className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} pl-4`}
			>
				<div className='overflow-hidden'>
					<p className='pb-5 text-base leading-relaxed '>{item.answer}</p>
				</div>
			</div>
		</div>
	)
}

const FAQList = () => {
	const [openId, setOpenId] = useState<string | null>(null)

	const handleToggle = (id: string) => {
		setOpenId(prev => (prev === id ? null : id))
	}

	return (
		<div className='w-full mt-10 flex flex-col items-center gap-y-4'>
			{faqData.map(item => (
				<FAQItem
					key={item.id}
					item={item}
					isOpen={openId === item.id}
					onToggle={() => handleToggle(item.id)}
				/>
			))}
		</div>
	)
}

export default FAQList
