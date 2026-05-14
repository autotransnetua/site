import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Умови використання | AutoTrans',
	description:
		'Умови використання сайту AutoTrans — правила замовлення послуг перевезення автомобілів по Україні та з Європи.',
	robots: { index: true, follow: true }
}

const BRAND = 'AutoTrans'
const SITE = 'autotrans.com.ua'
const EMAIL = 'info@autotrans.com.ua'
const PHONE = '+38 (099) 123 31 31'
const DATE = '13 травня 2026 року'

export default function TermsPage() {
	return (
		<div className='bg-[#f8f9fb] py-12 md:py-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6'>
				<div className='mb-10'>
					<div className='inline-block bg-[#f0a500]/10 border border-[#f0a500]/30 text-[#f0a500] text-xs font-medium px-3 py-1 rounded-full mb-4'>
						Юридична інформація
					</div>
					<h1 className='text-3xl md:text-4xl font-bold text-[#0d1b2e] mb-2'>
						Умови використання
					</h1>
					<p className='text-gray-400 text-sm'>Редакція від {DATE}</p>
				</div>

				<div className='bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100'>
					<Intro>
						Ці Умови використання («Умови») регулюють ваш доступ до сайту{' '}
						<strong>{SITE}</strong> та використання послуг компанії{' '}
						<strong>{BRAND}</strong>. Використовуючи наш сайт, ви підтверджуєте, що
						прочитали, зрозуміли та погоджуєтесь з цими Умовами.
					</Intro>

					<Section num='1' title='Загальні положення'>
						<p>
							{BRAND} є диспетчерською службою з організації перевезення автомобілів
							по Україні та з країн Європи. Ми надаємо послуги з підбору виконавців,
							організації логістики та координації перевезень.
						</p>
						<p className='mt-3'>
							Сайт призначений для фізичних та юридичних осіб, які мають намір
							скористатися послугами перевезення транспортних засобів.
						</p>
					</Section>

					<Section num='2' title='Послуги'>
						<p>Через сайт ви можете замовити:</p>
						<List
							items={[
								'Супутній (попутний) евакуатор по Україні',
								'Індивідуальне перевезення автомобіля',
								'Доставка автомобіля з країн Європи (Польща, Німеччина, Литва та ін.)',
								'Екстрена евакуація після ДТП або поломки',
								'Перевезення автовозом (від 2 до 8 авто)',
								'Перевезення негабаритної техніки та спецтранспорту'
							]}
						/>
					</Section>

					<Section num='3' title='Замовлення та оплата'>
						<SubPoint n='3.1'>
							Заявка оформлюється через форму на сайті або по телефону і вважається
							прийнятою після підтвердження менеджером.
						</SubPoint>
						<SubPoint n='3.2'>
							Вартість перевезення узгоджується індивідуально і фіксується до початку
							виконання. Підтверджена ціна не може бути змінена в односторонньому
							порядку.
						</SubPoint>
						<SubPoint n='3.3'>
							Форми оплати: готівка або безготівковий розрахунок — обумовлюється при
							оформленні.
						</SubPoint>
						<SubPoint n='3.4'>
							Скасування замовлення можливе до моменту виїзду виконавця. Після виїзду
							можуть стягуватись витрати на порожній виїзд.
						</SubPoint>
					</Section>

					<Section num='4' title='Обов`язки сторін'>
						<p className='font-medium text-[#0d1b2e]'>Клієнт зобов`язується:</p>
						<List
							items={[
								'Надати достовірну інформацію про транспортний засіб та маршрут',
								'Забезпечити доступ до автомобіля у домовлений час',
								'Попередити про особливості авто (низький кліренс, пошкодження, заблоковані колеса)',
								'Прибрати цінні речі з салону перед завантаженням'
							]}
						/>
						<p className='font-medium text-[#0d1b2e] mt-5'>{BRAND} зобов`язується:</p>
						<List
							items={[
								'Надати виконавця у домовлений час',
								'Забезпечити акуратне та безпечне транспортування',
								'Здійснити фото- та відеофіксацію при завантаженні та вивантаженні',
								'Підтримувати зв`язок з клієнтом протягом усього маршруту'
							]}
						/>
					</Section>

					<Section num='5' title='Відповідальність'>
						<SubPoint n='5.1'>
							Ми несемо відповідальність за збереження транспортного засобу з моменту
							завантаження до моменту передачі клієнту.
						</SubPoint>
						<p className='mt-3 font-medium text-[#0d1b2e]'>
							Ми не несемо відповідальності за:
						</p>
						<List
							items={[
								'Затримки через форс-мажор (воєнний стан, стихійні лиха, перекриття доріг)',
								'Ушкодження, про які клієнт не повідомив до завантаження',
								'Цінні речі, залишені у салоні автомобіля',
								'Затримки на митниці при міжнародних перевезеннях'
							]}
						/>
						<Note>
							У разі пошкодження авто з нашої вини — несемо повну матеріальну
							відповідальність на підставі акту огляду.
						</Note>
					</Section>

					<Section num='6' title='Форс-мажор'>
						<p>
							Сторони звільняються від відповідальності за невиконання зобов`язань,
							спричинене обставинами непереборної сили: воєнними діями, надзвичайними
							ситуаціями, рішеннями державних органів, стихійними лихами. Про настання
							таких обставин сторона зобов`язана повідомити іншу в найкоротші строки.
						</p>
					</Section>

					<Section num='7' title='Інтелектуальна власність'>
						<p>
							Усі матеріали сайту {SITE} — тексти, зображення, логотип, дизайн — є
							власністю {BRAND} і захищені законодавством про авторське право.
							Копіювання або використання матеріалів без письмового дозволу
							заборонено.
						</p>
					</Section>

					<Section num='8' title='Обмеження відповідальності сайту'>
						<p>
							Сайт надається «як є». Ми не гарантуємо безперебійну роботу та не несемо
							відповідальності за технічні збої з незалежних від нас причин.
						</p>
					</Section>

					<Section num='9' title='Вирішення спорів'>
						<p>
							Усі спори вирішуються шляхом переговорів. У разі неможливості досягнення
							згоди — у судовому порядку відповідно до законодавства України.
						</p>
						<Note>
							Для досудового врегулювання:{' '}
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

					<Section num='10' title='Зміни до Умов'>
						<p>
							Ми залишаємо за собою право змінювати ці Умови. Актуальна версія завжди
							розміщена на сайті. Продовження використання сайту після змін означає
							вашу згоду з оновленими Умовами.
						</p>
					</Section>

					<Section num='11' title='Контакти' last>
						<p>З питань щодо цих Умов:</p>
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

function SubPoint({ n, children }: { n: string; children: React.ReactNode }) {
	return (
		<div className='flex gap-3 py-1'>
			<span className='flex-shrink-0 text-[#f0a500] font-semibold text-sm'>{n}</span>
			<p>{children}</p>
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
