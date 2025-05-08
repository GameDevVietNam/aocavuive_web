import type { Metadata } from 'next'
import './globals.css'

import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'

import DefaultLayout from '@/layouts/Default'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Ao cá vui vẻ',
	description:
		'Trang chủ chính thức của Ao Cá Vui Vẻ, nhanh chóng, an toàn, tiện lợi.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>
				<DefaultLayout>{children}</DefaultLayout>
				<Toaster />
			</body>
		</html>
	)
}
