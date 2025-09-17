import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wiphawee_Portfolio',
  icons: {
    icon: '/favicon.ico?v=1',
    shortcut: '/favicon.ico?v=1',
    apple: '/apple-touch-icon.png?v=1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=1" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
