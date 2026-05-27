import Title from '@/components/UI/Title'
import Container from '@/components/base/Container'
import Section from '@/components/base/Section'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Дякуємо за звернення | AutoTrans',
	description: 'Ваша заявка прийнята. Ми зв`яжемося з вами найближчим часом',
	robots: { index: false, follow: false }
}

export default function ThankYouPage() {
	return (
		<Section className='py-16 lg:py-20 bg-bg' id='thank-you'>
			<Container className='w-full flex flex-col items-center gap-y-10 xl:gap-y-14'>
				<Title
					className='max-w-5xl mx-auto'
					title='Дякуємо за звернення!'
					subtitle='Наші оператори працюють 24/7.'
					isCentered
				/>

				<div className='flex flex-col lg:flex-row items-stretch justify-between w-full gap-10'>
					{/* Фото — таке саме як у Form */}
					<div className='w-full lg:w-[50%] rounded-2xl overflow-hidden'>
						<Image
							src='/images/form-photo.jpg'
							alt='Дякуємо'
							width={600}
							height={400}
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Блок подяки — повторює стилі ContactForm */}
					<div className='w-full lg:w-[50%] flex flex-col items-center justify-center bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 min-h-64'>
						<div className='flex flex-col items-center text-center'>
							<div className='w-16 h-16 rounded-full bg-accent-secondary flex items-center justify-center text-white text-2xl font-bold mb-5'>
								✓
							</div>
							<h2 className='text-2xl font-bold text-primary mb-3'>
								Заявку прийнято!
							</h2>
							<p className='text-slate-500 text-base leading-relaxed max-w-xs'>
								Ваше повідомлення отримано. Ми зв`яжемося з вами найближчим часом.
							</p>

							<div className='mt-8 flex flex-col items-center gap-4 w-full'>
								<Link
									href='/'
									className='w-full py-4 bg-accent-secondary hover:bg-accent-secondary/90 active:scale-[0.99] text-white font-bold rounded-lg transition-all duration-200 text-center'
								>
									Повернутись на головну
								</Link>
								<p className='text-sm text-slate-400'>
									Відповідаємо впродовж 5 хвилин.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}
