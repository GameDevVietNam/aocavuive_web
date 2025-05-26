import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'

import {
	cookieName,
	fallbackLng,
	headerName,
	languages,
} from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest|.*\\.(?:jpg|png|svg|ico)).*)',
	],
}

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl

	// Skip middleware for specific static assets
	if (
		pathname.includes('icon') ||
		pathname.includes('chrome') ||
		pathname.match(/\.(jpg|png|svg|ico)$/)
	) {
		return NextResponse.next()
	}

	let lng: string | undefined | null
	if (req.cookies.has(cookieName))
		lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
	if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
	if (!lng) lng = fallbackLng

	const lngInPath = languages.find((loc) => pathname.startsWith(`/${loc}`))
	const headers = new Headers(req.headers)
	headers.set(headerName, lngInPath || lng)

	// Redirect if lng in path is not supported
	if (!lngInPath && !pathname.startsWith('/_next')) {
		return NextResponse.redirect(
			new URL(`/${lng}${pathname}${req.nextUrl.search}`, req.url),
		)
	}

	if (req.headers.has('referer')) {
		const refererUrl = new URL(req.headers.get('referer') || '')
		const lngInReferer = languages.find((l) =>
			refererUrl.pathname.startsWith(`/${l}`),
		)
		const response = NextResponse.next({ headers })
		if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
		return response
	}

	return NextResponse.next({ headers })
}
