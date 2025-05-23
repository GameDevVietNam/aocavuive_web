import './globals.css'

import { dir } from 'i18next'
import { Roboto } from 'next/font/google'
import { Toaster } from 'sonner'

import DefaultLayout from '@/layouts/Default'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { getT } from '../i18n'
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
}

export async function generateMetadata() {
	const { t } = await getT()
	return {
		title: t('title'),
		content: t('description'),
	}
}

const roboto = Roboto({
	weight: ['300', '400', '500', '600', '700', '900'],
	subsets: ['latin'],
})

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ lng: string }>
}) {
	const { lng } = await params

	return (
		<html
			lang={lng}
			dir={dir(lng)}>
			<body className={`${roboto.className} antialiased`}>
				<DefaultLayout>{children}</DefaultLayout>
				<Toaster />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
