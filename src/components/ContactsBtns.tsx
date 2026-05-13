import { PhoneIcon } from './assets/iconst'
import { tel } from '@/constants/baseConstants'

import Link from 'next/link'

const ContactsBtns = () => {
	return (
		<div className='absolute bottom-5 right-3 flex flex-col psg-y-5'>
			<Link
				href={`tel:${tel}`}
				className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-white text-primary'
			>
				<PhoneIcon />
			</Link>
			<Link
				href={`tel:${tel}`}
				className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-accent-secondary text-white'
			></Link>
		</div>
	)
}
export default ContactsBtns
