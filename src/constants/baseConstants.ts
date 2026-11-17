import type { Metadata } from 'next'

export const tel = '+380991233131'
export const email = 'autotrans.net.ua@gmail.com'
export const telegram = 'https://t.me/Autotransss'

// Основний хост: autotrans.net.ua редиректить на www
export const siteUrl = 'https://www.autotrans.net.ua'

// Прев'ю-деплої Vercel не індексуються
export const isIndexable = process.env.VERCEL_ENV !== 'preview'

// openGraph сторінки повністю замінює батьківський, тому спільні поля — тут
export const openGraphBase: Metadata['openGraph'] = {
	type: 'website',
	locale: 'uk_UA',
	siteName: 'AutoTrans',
	images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
}

export const navLinks = [
	{ name: 'Послуги', href: '/#services' },
	{ name: 'Перегін з водієм', href: '/#driver' },
	{ name: 'Переваги', href: '/#guarantees' },
	{ name: 'Зв’язатися', href: '/#contact' }
]
export const servicesFooter = [
	{ name: 'Попутний Евакуатор', href: '/#services' },
	{ name: 'Перевезення по Україні', href: '/#services' },
	{ name: 'Доставка Європа-Україна', href: '/#services' },
	{ name: 'Екстрена Евакуація', href: '/#services' },
	{ name: 'Індивідуальний Евакуатор', href: '/#services' },
	{ name: 'Перегін з водієм', href: '/#driver' }
]
