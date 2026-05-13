import { FlyIcon, PhoneIcon } from './assets/iconst'
import { tel } from '@/constants/baseConstants'

import Link from 'next/link'

const ContactsBtns = () => {
	return (
		<div className='fixed bottom-5 right-3 flex flex-col gap-y-5'>
			<Link
				href={`tel:${tel}`}
				className='w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center shadow-lg bg-white text-primary hover:scale-105 transform-all duration-300'
			>
				<PhoneIcon className='w-10! h-10! md:w-12! md:h-12!' />
			</Link>
			<Link
				href={`https://t.me/${tel}`}
				className='w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center shadow-lg shadow-accent-secondary bg-accent-secondary text-white hover:scale-105 transform-all duration-300'
			>
				<FlyIcon className='-rotate-45 w-10! h-10! md:w-12! md:h-12!' />
			</Link>
		</div>
	)
}
export default ContactsBtns
