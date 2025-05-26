import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'png.pngtree.com',
				pathname: '/**',
			},
		],
		unoptimized: true,
	},
}

export default nextConfig
