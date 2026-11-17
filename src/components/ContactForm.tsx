'use client'

import { sendMessage } from '@/app/actions/sendMessage'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const LS_KEY = 'contact_form_data'

type FormValues = {
	name: string
	phone: string
	message: string
	honeypot: string
}

function showErrorToast(text: string) {
	Toastify({
		text,
		duration: 4000,
		gravity: 'top',
		position: 'right',
		style: {
			background: '#ef4444',
			borderRadius: '8px',
			fontFamily: 'inherit',
			fontSize: '14px'
		}
	}).showToast()
}

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState(false)

	const openedAtRef = useRef<number>(0)

	const router = useRouter()

	const {
		register,
		handleSubmit,
		setValue,
		control,
		reset,
		formState: { errors }
	} = useForm<FormValues>({
		defaultValues: { name: '', phone: '', message: '', honeypot: '' }
	})

	useEffect(() => {
		// store open time (ms since epoch)
		openedAtRef.current = Date.now()
		try {
			const saved = localStorage.getItem(LS_KEY)
			if (saved) {
				const parsed = JSON.parse(saved) as Partial<FormValues>
				if (parsed.name) setValue('name', parsed.name)
				if (parsed.phone) setValue('phone', parsed.phone)
			}
		} catch {}
	}, [setValue])

	const handlePersist = (field: 'name' | 'phone', value: string) => {
		try {
			const saved = localStorage.getItem(LS_KEY)
			const current = saved ? JSON.parse(saved) : {}
			localStorage.setItem(LS_KEY, JSON.stringify({ ...current, [field]: value }))
		} catch {}
	}

	const onSubmit = async (data: FormValues) => {
		if (data.honeypot) {
			router.push('/thank-you')
			return
		}

		// check elapsed time since form opened
		// eslint-disable-next-line react-hooks/purity -- виконується в обробнику submit, не в рендері
		const elapsed = Date.now() - openedAtRef.current
		if (elapsed < 3000) {
			router.push('/thank-you')
			return
		}

		setIsLoading(true)

		try {
			await sendMessage({
				name: data.name,
				phone: data.phone,
				message: data.message,
				sentAt: new Date().toLocaleString('uk-UA', {
					timeZone: 'Europe/Kyiv',
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				})
			})

			localStorage.removeItem(LS_KEY)
			reset({ name: '', phone: '', message: '', honeypot: '' }, { keepDefaultValues: false })
			router.push('/thank-you')
		} catch (err) {
			console.error(err)
			showErrorToast('Помилка відправки. Спробуйте ще раз або зателефонуйте нам.')
		} finally {
			setIsLoading(false)
		}
	}

	// ─── Form ────────────────────────────────────────────────────
	return (
		<div className='w-full lg:w-[50%] flex flex-col bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100'>
			<h3 className='text-primary text-2xl font-bold mb-6'>Напишіть Нам</h3>

			<form
				// eslint-disable-next-line react-hooks/refs -- ref читається лише під час submit
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col flex-1 gap-y-5'
			>
				{/* Honeypot */}
				<div
					aria-hidden='true'
					className='absolute w-px h-px overflow-hidden opacity-0 pointer-events-none'
				>
					<label htmlFor='website'>Website</label>
					<input
						id='website'
						type='text'
						tabIndex={-1}
						autoComplete='off'
						{...register('honeypot')}
					/>
				</div>

				{/* Ім'я */}
				<div className='flex flex-col gap-y-1.5 relative'>
					<label htmlFor='name' className='text-sm font-bold text-primary'>
						Ваше Ім’я
					</label>
					<input
						id='name'
						type='text'
						placeholder='Роман Петренко'
						autoComplete='name'
						className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-primary placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-accent-secondary focus:ring-2 focus:ring-accent-secondary/20 ${
							errors.name
								? 'border-red-400 ring-2 ring-red-400/20'
								: 'border-slate-200'
						}`}
						{...register('name', {
							required: "Вкажіть ваше ім'я",
							minLength: { value: 2, message: 'Мінімум 2 символи' },
							onChange: e => handlePersist('name', e.target.value)
						})}
					/>
					{errors.name && (
						<span className='text-xs text-red-500 absolute -bottom-4 left-1 italic'>
							{errors.name.message}
						</span>
					)}
				</div>

				{/* Телефон */}

				<div className='flex flex-col gap-y-1.5 relative'>
					<label htmlFor='phone' className='text-sm font-bold text-primary'>
						Номер Телефону (формат: +380XXXXXXXXX)
					</label>
					<Controller
						name='phone'
						control={control}
						rules={{
							required: 'Вкажіть номер телефону',
							validate: value =>
								value.replace(/\D/g, '').length === 12 || 'Введіть повний номер'
						}}
						render={({ field }) => (
							<IMaskInput
								id='phone'
								mask='+380 00 000 00 00'
								autoComplete='off'
								defaultValue='+380'
								onAccept={(value: string) => {
									field.onChange(value)
									handlePersist('phone', value)
								}}
								onFocus={e => {
									setTimeout(() => e.target.setSelectionRange(5, 5), 0)
								}}
								className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-primary outline-none transition-all duration-200 focus:bg-white focus:border-accent-secondary focus:ring-2 focus:ring-accent-secondary/20 ${
									errors.phone
										? 'border-red-400 ring-2 ring-red-400/20'
										: 'border-slate-200'
								}`}
							/>
						)}
					/>
					{errors.phone && (
						<span className='text-xs text-red-500 absolute -bottom-4 left-1 italic'>
							{errors.phone.message}
						</span>
					)}
				</div>

				{/* Повідомлення — без валідації і без поля помилки */}
				<div className='flex flex-col gap-y-1.5 flex-1'>
					<label htmlFor='message' className='text-sm font-bold text-primary'>
						Повідомлення
					</label>
					<textarea
						id='message'
						placeholder='Опишіть ваш запит...'
						className='w-full flex-1 min-h-32 px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-accent-secondary focus:ring-2 focus:ring-accent-secondary/20 resize-none'
						{...register('message')}
					/>
				</div>

				<button
					type='submit'
					disabled={isLoading}
					className='w-full py-4 bg-accent-secondary hover:bg-accent-secondary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 cursor-pointer'
				>
					{isLoading ? 'Відправляємо...' : 'Надіслати Повідомлення'}
				</button>
			</form>
		</div>
	)
}
