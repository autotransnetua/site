'use client'

import Logo from '../UI/Logo'
import Container from '../base/Container'

import { navLinks } from '@/constants/baseConstants'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='w-full sticky top-0 z-50 shadow-md shadow-accent-secondary/30 border-b border-accent/40 h-26 flex items-center bg-primary backdrop-blur-sm'>
			<Container className='justify-between items-center'>
				<div className='w-full mx-auto flex justify-between items-center h-20'>
					{/* Logo */}
					<Logo />

					{/* Desktop Nav */}
					<nav className='hidden md:flex items-center gap-12'>
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
							href='#contact'
							className='px-6 py-4 rounded-lg border border-accent text-xl font-semibold text-accent hover:bg-accent hover:text-white transition-colors'
						>
							Залишити заявку
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden p-2 text-slate-600'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div
							className={isMenuOpen ? 'icon-x text-2xl' : 'icon-menu text-2xl'}
						></div>
					</button>
				</div>
			</Container>

			{/* Mobile Nav */}
			{isMenuOpen && (
				<div className='md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg'>
					<div className='container-custom py-4 flex flex-col gap-4'>
						{navLinks.map(link => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => setIsMenuOpen(false)}
								className='text-lg font-medium py-2 text-slate-600 hover:text-[var(--primary)]'
							>
								{link.name}
							</a>
						))}
						<a
							href='#contact'
							onClick={() => setIsMenuOpen(false)}
							className='btn btn-primary w-full text-center'
						>
							Залишити заявку
						</a>
					</div>
				</div>
			)}
		</header>
	)
}
export default Header
