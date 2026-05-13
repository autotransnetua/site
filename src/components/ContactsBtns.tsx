import { FlyIcon, PhoneIcon } from './assets/iconst'
import { tel } from '@/constants/baseConstants'

import Link from 'next/link'

const ContactsBtns = () => {
	return (
		<div className='fixed bottom-5 right-3 flex flex-col gap-y-5 z-20'>
			<Link
				href={`tel:${tel}`}
				className='w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center shadow-lg bg-white text-primary hover:scale-105 transform-all duration-300 cursor-pointer z-15 group'
			>
				<PhoneIcon className='w-7! h-7! xl:w-10! xl:h-10! group-hover:rotate-15 transform-all duration-300' />
			</Link>
			<Link
				href={`https://t.me/${tel}`}
				className='w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center shadow-xl shadow-accent-secondary bg-accent-secondary text-white hover:scale-105 transform-all duration-300 cursor-pointer z-15 group'
			>
				<FlyIcon className='-rotate-45 w-7! h-7! xl:w-10! xl:h-10! group-hover:-rotate-15 transform-all duration-300' />
			</Link>
		</div>
	)
}
export default ContactsBtns
