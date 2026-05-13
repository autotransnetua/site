import Logo from '../UI/Logo'
import Container from '../base/Container'

import { navLinks, servicesFooter } from '@/constants/baseConstants'

import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='w-full bg-primary py-8 md:py-10'>
			<Container className='py-8 flex flex-col'>
				<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-8 items-start'>
					<div className='w-full flex flex-col gap-y-5 -mt-2 items-center md:items-start'>
						<Logo />
						<p className='w-full text-white/80 text-center md:text-left'>
							Супутній евакуатор та професійні послуги автовоза по всій Україні та
							Європі. <br />
							Ваш автомобіль - наша турбота.
						</p>
					</div>
					<div className='w-full flex flex-col gap-y-3 mx-auto xl:pl-4 items-center md:items-start'>
						<h4 className='text-xl font-bold mb-2 text-white'>Навігація</h4>
						{navLinks.map(el => (
							<Link
								href={el.href}
								key={el.href}
								className='text-lg text-white hover:text-accent-secondary transition-colors duration-300 hover:underline'
							>
								{el.name}
							</Link>
						))}
					</div>

					<div className='w-full flex flex-col gap-y-3 mx-auto items-center md:items-start'>
						<h4 className='text-xl font-bold mb-2 text-white'>Послуги</h4>
						{servicesFooter.map(el => (
							<Link
								href='#services'
								key={el.name}
								className='text-lg text-white hover:text-accent-secondary transition-colors duration-300 hover:underline'
							>
								{el.name}
							</Link>
						))}
					</div>

					<div className='w-full flex flex-col gap-y-3 mx-auto items-center md:items-start'>
						<h4 className='text-xl font-bold mb-2 text-white'>Контакти</h4>
					</div>
				</div>
				<div className='mt-12 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm'>
					<p>© 2026 AutoTrans. Всі права захищено.</p>
				</div>
			</Container>
		</footer>
	)
}
export default Footer
