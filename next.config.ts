import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'myfish.devmini.com',
			},
		],
	},
}

export default nextConfig
