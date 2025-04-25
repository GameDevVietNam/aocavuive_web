import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				pathname: '/api/portraits/**',
			},
		],
	},
}

export default nextConfig
