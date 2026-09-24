import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'TechNova 2026 — AI & Future Technology Summit',
  description:
    'TechNova 2026 is a one-day technology summit on Artificial Intelligence, Generative AI, software development, and emerging technologies. October 18, 2026 in Pune, Maharashtra, India.',
  generator: 'v0.app',
  openGraph: {
    title: 'TechNova 2026 — AI & Future Technology Summit',
    description:
      'A one-day summit on AI, Generative AI, and emerging technologies. October 18, 2026 — Pune, India.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
