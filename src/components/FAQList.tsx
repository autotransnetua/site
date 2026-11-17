'use client'

import faqData from '@/data/faq.json'

import { useState } from 'react'

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
		<div className='w-full lg:max-w-[80%] border-b border-white/10 transition-colors duration-200 group bg-white rounded-lg px-5 py-3 mx-auto'>
			<h3 className='font-(family-name:--font-body)'>
				<button
					type='button'
					onClick={onToggle}
					aria-expanded={isOpen}
					aria-controls={`faq-${item.id}`}
					className='w-full py-5 flex justify-between items-center text-left'
				>
					<span className='text-base md:text-lg text-primary font-semibold pr-8 transition-colors duration-200 group-hover:text-accent-secondary'>
						{item.question}
					</span>
					<span
						aria-hidden='true'
						className={`text-accent-secondary text-xl font-light shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
					>
						+
					</span>
				</button>
			</h3>

			<div
				id={`faq-${item.id}`}
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
		<div className='w-full xl:max-w-[80%] 2xl:max-w-[60%] mt-10 flex flex-col items-center gap-y-4 mx-auto'>
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
