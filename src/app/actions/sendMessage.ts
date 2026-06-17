'use server'

type MessageData = {
	name: string
	phone: string
	message: string
	sentAt: string
}

// ─── Telegram ────────────────────────────────────────────────
async function sendToTelegram(data: MessageData): Promise<void> {
	const token = process.env.TG_BOT_TOKEN
	const chatId = process.env.TG_CHAT_ID

	if (!token || !chatId) throw new Error('Telegram credentials are not configured')

	const text = [
		`<b>Нова заявка з сайту</b>`,
		``,
		`<b>Ім'я:</b> ${data.name}`,
		`<b>Телефон:</b> ${data.phone}`,
		`<b>Повідомлення:</b> ${data.message || '—'}`,
		``,
		`<b>Час:</b> ${data.sentAt}`
	].join('\n')

	const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
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
		})
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
