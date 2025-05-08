import Discover from '@/components/Discover'
import Hero from '@/components/Hero'
import Leaderboards from '@/components/Leaderboards'
import Marketplace from '@/components/Marketplace'
import OverallStats from '@/components/OverallStats'
import Subscribe from '@/components/Subscribe'

const banners = [
	'/banners/atias-legacy-home-banner.jpg',
	'/banners/nightmare.jpg',
	'/banners/forging-banner.jpg',
]

export default function Home() {
	return (
		<>
			<Hero />

			<Subscribe />

			<div className='grid md:grid-cols-2 gap-6'>
				<div className='flex-1 space-y-12 overflow-hidden'>
					<Leaderboards />
					<Marketplace />
					<Discover />
				</div>

				<OverallStats />
			</div>
		</>
	)
}
