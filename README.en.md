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
