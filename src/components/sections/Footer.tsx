import Logo from '../UI/Logo'
import { ClockIcon, LocaleIcon, PhoneIcon } from '../assets/iconst'
import Container from '../base/Container'

import { navLinks, servicesFooter, tel } from '@/constants/baseConstants'

import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='w-full bg-primary py-8 md:py-10'>
			<Container className='py-8 flex flex-col'>
				<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-8 items-start'>
					<div className='w-full flex flex-col gap-y-5 -mt-2 items-center md:items-start order-1'>
						<Logo />
						<p className='w-full text-white/80 text-center md:text-left'>
							Супутній евакуатор та професійні послуги автовоза по всій Україні та
							Європі. <br />
							Ваш автомобіль - наша турбота.
						</p>
					</div>
					<div className='w-full flex flex-col gap-y-3 mx-auto xl:pl-4 items-center md:items-start order-2 md:order-3 lg:order-2'>
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
						<Link
							href={'#faq'}
							className='text-lg text-white hover:text-accent-secondary transition-colors duration-300 hover:underline'
						>
							Часті запитання
						</Link>
					</div>

					<div className='w-full flex flex-col gap-y-3 mx-auto items-center md:items-start order-3 md:order-4 lg:order-3'>
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

					<div className='w-full flex flex-col gap-y-3 mx-auto items-center md:items-start order-4 md:order-2 lg:order-4'>
						<h4 className='text-xl font-bold mb-2 text-white'>Зв`язок</h4>
						<div className='flex items-center gap-x-2 text-accent-secondary'>
							<PhoneIcon className='w-5! h-5!' />{' '}
							<Link
								href={`tel:${tel}`}
								className='text-accent-secondary hover:underline duration-300 text-lg'
							>
								{tel}
							</Link>
						</div>
						<div className='flex items-center gap-x-2 text-accent-secondary mx-auto md:ml-0'>
							<ClockIcon className='w-5! h-5! shrink-0' />{' '}
							<p className='text-white'>
								Відповідаємо щодня з 8:00 до 22:00 · <br />
								Термінові заявки — цілодобово
							</p>
						</div>
						<div className='flex items-center gap-x-2 text-accent-secondary'>
							<LocaleIcon className='w-5! h-5!' />{' '}
							<p className='text-white'>Україна та Європа</p>
						</div>
					</div>
				</div>
				<div className='mt-12 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm'>
					<p>© 2026 AutoTrans. Всі права захищено.</p>
					{/* <div className='w-fit flex flex-col md:flex-row gap-4 text-white/80 text-xs mx-auto mt-6'>
						<Link href='/privacy' className='hover:underline'>
							Політика конфіденційності
						</Link>{' '}
						-
						<Link href='/terms' className='hover:underline'>
							Умови використання
						</Link>
					</div> */}
				</div>
			</Container>
		</footer>
	)
}
export default Footer
