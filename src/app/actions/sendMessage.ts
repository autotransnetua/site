'use server'

type MessageData = {
	name: string
	phone: string
	message: string
	sentAt: string
}

export async function sendMessage(data: MessageData): Promise<{ success: boolean }> {
	const token = process.env.TG_BOT_TOKEN
	const chatId = process.env.TG_CHAT_ID

	if (!token || !chatId) {
		throw new Error('Telegram credentials are not configured')
	}

	const text = [
		`🚗 <b>Нова заявка з сайту</b>`,
		``,
		`👤 <b>Ім'я:</b> ${data.name}`,
		`📞 <b>Телефон:</b> ${data.phone}`,
		`💬 <b>Повідомлення:</b> ${data.message || '—'}`,
		``,
		`🕐 <b>Час:</b> ${data.sentAt}`
	].join('\n')

	const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			chat_id: chatId,
			text,
			parse_mode: 'HTML'
		})
	})

	const result = await res.json()

	if (!res.ok || !result.ok) {
		throw new Error(result.description || 'Telegram API error')
	}

	return { success: true }
}
