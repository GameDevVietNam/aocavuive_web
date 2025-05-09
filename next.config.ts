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
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
			},
		],
	},
}

export default nextConfig
