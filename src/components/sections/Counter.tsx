'use client'

import Container from '../base/Container'
import Section from '../base/Section'

import { CountUp } from 'countup.js'
import { useEffect, useRef } from 'react'

const items = [
	{
		id: 'counter-experience',
		end: 5,
		suffix: '+',
		startVal: 0,
		description: 'Років досвіду.',
		text: 'На ринку перевезень з 2019 року.'
	},
	{
		id: 'counter-cars',
		end: 500,
		suffix: '+',
		startVal: 0,
		description: 'Перевезених Авто.',
		text: 'Щорічно перевозимо понад 100 авто по Україні та Європі.'
	},
	{
		id: 'counter-incidents',
		end: 0,
		suffix: '',
		startVal: 100,
		description: 'Інцидентів.',
		text: 'Бездоганна репутація.'
	}
]

const Counter = () => {
	const sectionRef = useRef<HTMLDivElement>(null)
	const animated = useRef(false)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !animated.current) {
					animated.current = true

					items.forEach(item => {
						const el = document.getElementById(item.id)
						if (!el) return

						const instance = new CountUp(el, item.end, {
							startVal: item.startVal,
							duration: 2.5,
							suffix: item.suffix
						})

						if (!instance.error) instance.start()
					})

					observer.disconnect()
				}
			},
			{ threshold: 0.3 }
		)

		observer.observe(section)
		return () => observer.disconnect()
	}, [])

	return (
		<Section className='py-16 bg-slate-50 border-t border-slate-200'>
			<Container>
				<div
					ref={sectionRef}
					className='w-full mx-auto grid grid-cols-1 gap-6 md:gap-3 lg:gap-10 sm:grid-cols-3 items-center'
				>
					{items.map((item, idx) => (
						<div
							key={item.id}
							className={`w-full flex flex-col items-center text-center px-5 md:px-3 lg:px-5 ${
								idx === 1
									? 'border-t-2 border-b-2 md:border-r-2 md:border-l-2 md:border-t-0 md:border-b-0 border-slate-200'
									: ''
							}`}
						>
							<span
								id={item.id}
								className='text-5xl xl:text-7xl font-extrabold text-accent-secondary'
							>
								{item.startVal}
							</span>
							<p className='mt-4 text-2xl font-semibold text-primary'>
								{item.description}
							</p>
							<p className='mt-2 text-xl max-w-[75%]'>{item.text}</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	)
}

export default Counter
