'use server'

type MessageData = {
	name: string
	phone: string
	message: string
	sentAt: string
}

const REQUEST_TIMEOUT = 10_000

// Telegram parse_mode HTML: без екранування "<" у тексті клієнта ламає відправку
const escapeHtml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// ─── Telegram ────────────────────────────────────────────────
async function sendToTelegram(data: MessageData): Promise<void> {
	const token = process.env.TG_BOT_TOKEN
	const chatId = process.env.TG_CHAT_ID

	const text = [
		`<b>Нова заявка з сайту</b>`,
		``,
		`<b>Ім'я:</b> ${escapeHtml(data.name)}`,
		`<b>Телефон:</b> ${escapeHtml(data.phone)}`,
		`<b>Повідомлення:</b> ${escapeHtml(data.message) || '—'}`,
		``,
		`<b>Час:</b> ${escapeHtml(data.sentAt)}`
	].join('\n')

	if (!token || !chatId) {
		// Локальна розробка без ключів: заявка йде в консоль замість Telegram
		if (process.env.NODE_ENV !== 'production') {
			console.info('[DEV] Telegram message:\n' + text)
			return
		}
		throw new Error('Telegram credentials are not configured')
	}

	const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
		signal: AbortSignal.timeout(REQUEST_TIMEOUT)
	})

	const result = await res.json()

	if (!res.ok || !result.ok) throw new Error(result.description || 'Telegram API error')
}

// ─── SalesDrive ──────────────────────────────────────────────
async function sendToSalesDrive(data: MessageData): Promise<void> {
	const apiKey = process.env.SD_API_KEY
	const domain = process.env.SD_DOMAIN

	if (!apiKey || !domain) throw new Error('SalesDrive credentials are not configured')

	const nameParts = data.name.trim().split(' ')
	const fName = nameParts[0] ?? ''
	const lName = nameParts[1] ?? ''

	const res = await fetch(`https://${domain}.salesdrive.me/handler/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Api-Key': apiKey
		},
		body: JSON.stringify({
			getResultData: '1',
			fName,
			lName,
			phone: data.phone,
			comment: data.message || '',
			sajt: process.env.NEXT_PUBLIC_SITE_URL ?? '',
			utmPage: '/'
		}),
		signal: AbortSignal.timeout(REQUEST_TIMEOUT)
	})

	if (!res.ok) {
		const text = await res.text()
		throw new Error(`SalesDrive API error: ${res.status} — ${text}`)
	}
}

// ─── Головна функція ─────────────────────────────────────────
export async function sendMessage(data: MessageData): Promise<{ success: boolean }> {
	const results = await Promise.allSettled([sendToTelegram(data), sendToSalesDrive(data)])

	results.forEach((result, i) => {
		if (result.status === 'rejected') {
			const service = i === 0 ? 'Telegram' : 'SalesDrive'
			console.error(`${service} error:`, result.reason)
		}
	})

	if (results[0].status === 'rejected') {
		throw new Error('Помилка відправки повідомлення')
	}

	return { success: true }
}
