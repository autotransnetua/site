# AutoTrans — Евакуатор по Україні та з Європи

Односторінковий лендінг для служби перевезення автомобілів. Попутний та індивідуальний евакуатор, доставка авто з Європи, автовоз, екстрена евакуація.

## Технології

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **react-hook-form** — форма заявки
- **countup.js** — анімація лічильників
- **toastify-js** — сповіщення

## Структура проєкту

```
src/
├── app/
│   ├── actions/
│   │   └── sendMessage.ts       # Server Action — відправка заявки в Telegram
│   ├── privacy/page.tsx         # Сторінка політики конфіденційності
│   ├── terms/page.tsx           # Сторінка умов використання
│   ├── globals.css
│   ├── layout.tsx               # RootLayout: metadata, шрифти, Header, Footer
│   ├── page.tsx                 # Головна сторінка
│   ├── robots.ts                # /robots.txt
│   └── sitemap.ts               # /sitemap.xml
│
├── components/
│   ├── sections/                # Секції сторінки
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── .....
│   │   ├── Reviews.tsx
│   │   ├── Form.tsx
│   │   └── Footer.tsx
│   ├── base/
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── UI/
│   │   ├── Logo.tsx
│   │   └── Title.tsx
│   ├── assets/icons.tsx        # SVG-іконки
│   ├── ContactForm.tsx
│   ├── ...
│
├── constants/
│   └── baseConstants.ts         # Телефон, навігація, посилання футера
│
├── data/                        # JSON-дані (послуги, транспорт, відгуки, кроки)
│   ├── ...
│
└── types/
    └── baseTypes.ts
```

## Локальний запуск

```bash
# Встановити залежності
npm install

# Створити файл змінних середовища
cp .env.example .env

# Запустити у режимі розробки
npm run dev
```

Відкрити [http://localhost:3000](http://localhost:3000)

## Змінні середовища

Створи файл `.env` у корені проєкту:

```env
TG_BOT_TOKEN=     # Токен Telegram-бота (отримати у @BotFather)
TG_CHAT_ID=       # ID чату для отримання заявок
```

> **Увага:** без цих змінних форма заявки не працюватиме. Для отримання `TG_CHAT_ID` напиши боту і скористайся `@userinfobot`.

## Деплой на Vercel

```bash
# Встановити Vercel CLI
npm i -g vercel

# Деплой
vercel --prod
```

Або підключи репозиторій у [vercel.com](https://vercel.com) — автодеплой при кожному push у `main`.

**Важливо:** додай `TG_BOT_TOKEN` і `TG_CHAT_ID` у Vercel Dashboard → Settings → Environment Variables.

Після деплою розкоментуй у `layout.tsx`, `robots.ts`, `sitemap.ts`:

```ts
metadataBase: new URL('https://твійдомен.ua')
```

## Скрипти

| Команда         | Дія                      |
| --------------- | ------------------------ |
| `npm run dev`   | Запуск у режимі розробки |
| `npm run build` | Продакшн білд            |
| `npm run start` | Запуск продакшн-сервера  |
| `npm run lint`  | Перевірка коду           |

## Що буде додано пізніше

- [ ] Аналітика для реклами (Google Analytics / Meta Pixel)
- [ ] Реальний домен та розкоментований `metadataBase`
- [ ] OG-зображення (`/public/og-image.jpg`) для соцмереж
