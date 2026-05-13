'use client'

import data from '../data/reviews.json'

import { useRef } from 'react'

type Review = {
	id: string
	name: string
	text: string
	position: string
	rating: number
}

// Ініціали з імені: "Олег Коваль" → "ОК"
const getInitials = (name: string): string => {
	return name
		.split(' ')
		.slice(0, 2)
		.map(word => word[0])
		.join('')
		.toUpperCase()
}

// Зірочки
const Stars = ({ rating }: { rating: number }) => {
	return (
		<div className='flex gap-1 mb-4'>
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					className={`w-5 h-5 ${i < rating ? 'text-accent-secondary' : 'text-white/20'}`}
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
				</svg>
			))}
		</div>
	)
}

// Картка відгуку
const ReviewCard = ({
	el,
	onMouseEnter,
	onMouseLeave,
	onTouchStart,
	onTouchEnd
}: {
	el: Review
	onMouseEnter: () => void
	onMouseLeave: () => void
	onTouchStart: () => void
	onTouchEnd: () => void
}) => {
	return (
		<div
			className='bg-primary/5 border border-primary/10 rounded-xl p-6 w-72 md:w-80 shrink-0 flex flex-col justify-between cursor-default select-none'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
		>
			<div>
				<Stars rating={el.rating} />
				<p className='italic text-sm leading-relaxed mb-6'>&quot;{el.text}&quot;</p>
			</div>
			<div className='flex items-center gap-3'>
				<div className='w-10 h-10 rounded-full bg-accent-secondary flex items-center justify-center font-bold text-white text-sm shrink-0'>
					{getInitials(el.name)}
				</div>
				<div>
					<h4 className='text-sm font-bold text-primary'>{el.name}</h4>
					<p className='text-xs text-primary/50'>{el.position}</p>
				</div>
			</div>
		</div>
	)
}

const ReviewsList = () => {
	const reviewsData = data as Review[]
	const trackRef = useRef<HTMLDivElement>(null)

	const pause = () => {
		if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
	}

	const play = () => {
		if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
	}

	// Дублюємо масив для безшовної петлі
	const doubled = [...reviewsData, ...reviewsData]

	return (
		<>
			<style>{`
				@keyframes marquee {
					0%   { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.marquee-track {
					animation: marquee ${reviewsData.length * 8}s linear infinite;
				}
			`}</style>

			<div className='mt-10 w-full overflow-hidden'>
				<div ref={trackRef} className='marquee-track flex gap-6 w-max'>
					{doubled.map((el, index) => (
						<ReviewCard
							key={`${el.id}-${index}`}
							el={el}
							onMouseEnter={pause}
							onMouseLeave={play}
							onTouchStart={pause}
							onTouchEnd={play}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default ReviewsList
