# AutoTrans — Car Towing & Transportation Ukraine

A single-page landing for a vehicle transportation service. Companion towing, individual evacuation, car delivery from Europe, car carrier, and emergency towing.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **react-hook-form** — contact form
- **countup.js** — animated counters
- **toastify-js** — toast notifications

## Project Structure

```
src/
├── app/
│   ├── actions/
│   │   └── sendMessage.ts       # Server Action — sends form data to Telegram
│   ├── privacy/page.tsx         # Privacy Policy page
│   ├── terms/page.tsx           # Terms of Use page
│   ├── globals.css
│   ├── layout.tsx               # RootLayout: metadata, fonts, Header, Footer
│   ├── page.tsx                 # Main (home) page
│   ├── robots.ts                # /robots.txt
│   └── sitemap.ts               # /sitemap.xml
│
├── components/
│   ├── sections/                # Page sections
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
│   ├── assets/iconst.tsx        # SVG icons
│   ├── ContactForm.tsx
│   ├── ...
│
├── constants/
│   └── baseConstants.ts         # Phone, nav links, footer links
│
├── data/                        # Static JSON data
│   ├── ...
│
└── types/
    └── baseTypes.ts
```

## Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env` file in the project root:

```env
TG_BOT_TOKEN=     # Telegram bot token (get from @BotFather)
TG_CHAT_ID=       # Chat ID to receive form submissions
```

> **Note:** the contact form will not work without these variables. To get your `TG_CHAT_ID`, message your bot and use `@userinfobot`.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the repository at [vercel.com](https://vercel.com) for automatic deploys on every push to `main`.

**Important:** add `TG_BOT_TOKEN` and `TG_CHAT_ID` in Vercel Dashboard → Settings → Environment Variables.

After deploy, uncomment in `layout.tsx`, `robots.ts`, `sitemap.ts`:

```ts
metadataBase: new URL('https://yourdomain.ua')
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Planned

- [ ] Advertising analytics (Google Analytics / Meta Pixel)
- [ ] Real domain and uncommented `metadataBase`
- [ ] OG image (`/public/og-image.jpg`) for social sharing

# AutoTrans — Евакуатор по Україні та з Європи

Односторінковий лендінг для служби перевезення автомобілів.
Попутний та індивідуальний евакуатор, доставка авто з Європи, автовоз, екстрена евакуація, перевезення автотехніки.

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
