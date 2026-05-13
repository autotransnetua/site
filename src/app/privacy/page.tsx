import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Політика конфіденційності | AutoTrans',
	description:
		'Політика конфіденційності сервісу AutoTrans — як ми збираємо, використовуємо та захищаємо ваші персональні дані.',
	robots: { index: true, follow: true }
}

const BRAND = 'AutoTrans'
const SITE = 'autotrans.com.ua'
const EMAIL = 'info@autotrans.com.ua'
const PHONE = '+38 (099) 123 31 31'
const DATE = '13 травня 2026 року'

export default function PrivacyPage() {
	return (
		<div className='bg-[#f8f9fb] py-12 md:py-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6'>
				<div className='mb-10'>
					<div className='inline-block bg-[#f0a500]/10 border border-[#f0a500]/30 text-[#f0a500] text-xs font-medium px-3 py-1 rounded-full mb-4'>
						Юридична інформація
					</div>
					<h1 className='text-3xl md:text-4xl font-bold text-[#0d1b2e] mb-2'>
						Політика конфіденційності
					</h1>
					<p className='text-gray-400 text-sm'>Редакція від {DATE}</p>
				</div>

				<div className='bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100'>
					<Intro>
						Ця Політика конфіденційності описує, як <strong>{BRAND}</strong> («ми»,
						«нас», «наш») збирає, використовує та захищає інформацію, яку ви надаєте при
						використанні нашого сайту <strong>{SITE}</strong> та послуг з перевезення
						автомобілів.
					</Intro>

					<Section num='1' title='Яку інформацію ми збираємо'>
						<p>При залишенні заявки або зверненні до нас ми можемо збирати:</p>
						<List
							items={[
								'Ім`я та прізвище',
								'Номер телефону',
								'Адресу електронної пошти (якщо надається)',
								'Міста відправлення та призначення',
								'Інформацію про транспортний засіб (тип, стан)',
								'IP-адресу та технічні дані браузера (автоматично)'
							]}
						/>
					</Section>

					<Section num='2' title='Як ми використовуємо ваші дані'>
						<p>Зібрана інформація використовується виключно для:</p>
						<List
							items={[
								'Обробки вашої заявки та надання послуг перевезення',
								'Зв`язку з вами щодо вашого замовлення',
								'Розрахунку вартості та підбору маршруту',
								'Покращення якості наших послуг',
								'Виконання юридичних зобов`язань'
							]}
						/>
						<p className='mt-4'>
							Ми не використовуємо ваші дані для автоматизованого прийняття рішень або
							профілювання.
						</p>
					</Section>

					<Section num='3' title='Передача даних третім особам'>
						<p>Ми можемо передавати ваші дані:</p>
						<List
							items={[
								'Водіям-виконавцям — виключно в обсязі, необхідному для виконання перевезення (маршрут, контактний телефон)',
								'Страховим компаніям — при оформленні страхування вантажу',
								'Державним органам — у випадках, передбачених законодавством України'
							]}
						/>
						<Note>
							Ми не продаємо, не здаємо в оренду та не передаємо ваші персональні дані
							третім особам у комерційних цілях.
						</Note>
					</Section>

					<Section num='4' title='Зберігання та захист даних'>
						<p>
							Ваші персональні дані зберігаються протягом строку, необхідного для
							виконання замовлення та юридичних зобов`язань, але не більше{' '}
							<strong>3 (трьох) років</strong> з дати останнього звернення.
						</p>
						<p className='mt-3'>
							Ми вживаємо технічних і організаційних заходів для захисту ваших даних:
						</p>
						<List
							items={[
								'Захищені канали передачі даних (HTTPS)',
								'Обмежений доступ до персональних даних для співробітників',
								'Регулярний перегляд заходів безпеки'
							]}
						/>
					</Section>

					<Section num='5' title='Файли cookie'>
						<p>
							Сайт {SITE} може використовувати файли cookie для покращення роботи
							сайту та аналізу відвідуваності. Cookie не містять персональних даних.
						</p>
						<p className='mt-3'>
							Ви можете відключити cookie у налаштуваннях браузера — це не вплине на
							основні функції сайту.
						</p>
					</Section>

					<Section num='6' title='Ваші права'>
						<p>
							Відповідно до Закону України «Про захист персональних даних» ви маєте
							право:
						</p>
						<List
							items={[
								'Знати про джерела збору та місцезнаходження своїх персональних даних',
								'Отримати інформацію про умови надання доступу до своїх даних',
								'Вимагати виправлення неточних або застарілих даних',
								'Вимагати видалення своїх персональних даних',
								'Відкликати згоду на обробку персональних даних'
							]}
						/>
						<Note>
							Для реалізації своїх прав:{' '}
							<a href={`mailto:${EMAIL}`} className='text-[#f0a500] hover:underline'>
								{EMAIL}
							</a>{' '}
							або{' '}
							<a
								href={`tel:${PHONE.replace(/\s/g, '')}`}
								className='text-[#f0a500] hover:underline'
							>
								{PHONE}
							</a>
						</Note>
					</Section>

					<Section num='7' title='Посилання на сторонні сайти'>
						<p>
							Наш сайт може містити посилання на сторонні ресурси. Ми не несемо
							відповідальності за їхню політику конфіденційності.
						</p>
					</Section>

					<Section num='8' title='Зміни до Політики'>
						<p>
							Ми залишаємо за собою право вносити зміни до цієї Політики. Актуальна
							версія завжди доступна на сайті. Продовження використання сайту означає
							вашу згоду з оновленою Політикою.
						</p>
					</Section>

					<Section num='9' title='Контактна інформація' last>
						<p>З питань щодо обробки персональних даних:</p>
						<ContactBlock email={EMAIL} phone={PHONE} />
					</Section>
				</div>

				<div className='mt-6 flex items-center justify-end gap-4 text-sm text-gray-400'>
					<Link href='/privacy' className='hover:text-[#f0a500] transition-colors'>
						Конфіденційність
					</Link>
					<span>·</span>
					<Link href='/terms' className='hover:text-[#f0a500] transition-colors'>
						Умови використання
					</Link>
				</div>
			</div>
		</div>
	)
}

function Intro({ children }: { children: React.ReactNode }) {
	return (
		<div className='px-6 md:px-10 py-6 bg-[#f0a500]/5 rounded-t-2xl'>
			<p className='text-gray-600 leading-relaxed'>{children}</p>
		</div>
	)
}

function Section({
	num,
	title,
	children,
	last = false
}: {
	num: string
	title: string
	children: React.ReactNode
	last?: boolean
}) {
	return (
		<div className={`px-6 md:px-10 py-7 ${last ? 'rounded-b-2xl' : ''}`}>
			<div className='flex items-start gap-4'>
				<span className='flex-shrink-0 w-8 h-8 rounded-full bg-[#0d1b2e] text-[#f0a500] text-sm font-bold flex items-center justify-center mt-0.5'>
					{num}
				</span>
				<div className='flex-1 min-w-0'>
					<h2 className='text-lg font-bold text-[#0d1b2e] mb-3'>{title}</h2>
					<div className='text-gray-600 leading-relaxed text-[15px] space-y-2'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

function List({ items }: { items: string[] }) {
	return (
		<ul className='mt-3 space-y-2'>
			{items.map((item, i) => (
				<li key={i} className='flex items-start gap-2.5'>
					<span className='flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#f0a500] mt-2' />
					<span>{item}</span>
				</li>
			))}
		</ul>
	)
}

function Note({ children }: { children: React.ReactNode }) {
	return (
		<div className='mt-4 bg-[#0d1b2e]/5 border-l-4 border-[#f0a500] rounded-r-lg px-4 py-3 text-sm text-gray-700'>
			{children}
		</div>
	)
}

function ContactBlock({ email, phone }: { email: string; phone: string }) {
	return (
		<div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3'>
			{[
				{ label: 'Email', value: email, href: `mailto:${email}` },
				{ label: 'Телефон', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
				{ label: 'Месенджери', value: 'Telegram, Viber' }
			].map(({ label, value, href }) => (
				<div key={label} className='bg-gray-50 rounded-xl px-4 py-3 border border-gray-100'>
					<div className='text-xs text-gray-400 mb-0.5'>{label}</div>
					{href ? (
						<a
							href={href}
							className='text-[#f0a500] font-medium hover:underline text-sm'
						>
							{value}
						</a>
					) : (
						<div className='text-gray-800 font-medium text-sm'>{value}</div>
					)}
				</div>
			))}
		</div>
	)
}
