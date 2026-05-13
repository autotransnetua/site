'use client'

import Logo from '../UI/Logo'
import { HambMenuIcon } from '../assets/iconst'
import Container from '../base/Container'

import { navLinks, tel } from '@/constants/baseConstants'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const close = () => setIsMenuOpen(false)

	// Блокуємо скрол body коли меню відкрите
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isMenuOpen])

	return (
		<>
			<header className='w-full sticky top-0 z-50 shadow-md shadow-accent-secondary/30 border-b border-accent/40 h-26 flex items-center bg-primary backdrop-blur-sm'>
				<Container className='justify-between items-center'>
					<div className='w-full mx-auto flex justify-between items-center h-20'>
						{/* Logo */}
						<Logo />

						{/* Desktop Nav */}
						<nav className='hidden lg:flex items-center gap-6 xl:gap-10'>
							{navLinks.map(link => (
								<Link
									key={link.name}
									href={link.href}
									className='text-xl font-semibold text-accent-secondary hover:text-accent transition-colors'
								>
									{link.name}
								</Link>
							))}
							<Link
								href={`tel:${tel}`}
								className='px-3 py-4 xl:px-6 xl:py-4 rounded-lg border border-accent-secondary text-xl font-semibold text-accent-secondary hover:bg-accent hover:text-white transition-colors'
							>
								+38 (099) 123 31 31
							</Link>
						</nav>

						{/* Mobile burger */}
						<button
							className='lg:hidden p-2 text-accent-secondary hover:text-accent transition-colors'
							onClick={() => setIsMenuOpen(true)}
							aria-label='Відкрити меню'
						>
							<HambMenuIcon />
						</button>
					</div>
				</Container>
			</header>

			{/* Затемнення фону */}
			<div
				className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden ${
					isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				}`}
				onClick={close}
			/>

			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 z-50 h-full w-72 bg-primary flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Шапка сайдбару */}
				<div className='flex items-center justify-between px-6 py-5 border-b border-white/10'>
					<Logo />
					<button
						onClick={close}
						className='text-white/60 hover:text-white transition-colors p-1'
						aria-label='Закрити меню'
					>
						{/* X через SVG — без бібліотек */}
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						>
							<line x1='18' y1='6' x2='6' y2='18' />
							<line x1='6' y1='6' x2='18' y2='18' />
						</svg>
					</button>
				</div>

				{/* Посилання */}
				<nav className='flex flex-col px-6 py-8 gap-2 flex-1'>
					{navLinks.map(link => (
						<Link
							key={link.name}
							href={link.href}
							onClick={close}
							className='text-lg font-semibold text-white/80 hover:text-accent-secondary py-3 border-b border-white/10 transition-colors duration-200'
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Кнопка внизу */}
				<div className='px-6 pb-10'>
					<Link
						href='#contact'
						onClick={close}
						className='btn btn-primary w-full text-center block'
					>
						Залишити заявку
					</Link>
				</div>
			</div>
		</>
	)
}
export default Header
