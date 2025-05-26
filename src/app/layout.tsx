import './globals.css'

import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Toaster } from 'sonner'

import DefaultLayout from '@/layouts/Default'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const roboto = Roboto({
	weight: ['300', '400', '500', '600', '700', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Ao cá vui vẻ',
	description:
		'Trang chủ chính thức của ao cá vui vẻ, chơi là ghiền, thử ngay!!!',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='vi'>
			<body className={`${roboto.className} antialiased`}>
				<DefaultLayout>{children}</DefaultLayout>
				<Toaster />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
