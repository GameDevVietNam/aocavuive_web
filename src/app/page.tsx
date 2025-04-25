import Banner from '@/components/Banner'
import Discover from '@/components/Discover'
import Header from '@/components/Header'
import Leaderboards from '@/components/Leaderboards'
import Marketplace from '@/components/Marketplace'
import OverallStats from '@/components/OverallStats'
import Sidebar from '@/components/Sidebar'

const banners = [
	'/banners/atias-legacy-home-banner.jpg',
	'/banners/nightmare.jpg',
	'/banners/forging-banner.jpg',
]

export default function Home() {
	return (
		<>
			<Header />

			<div className='flex h-[calc(100vh-64px)] bg-darker overflow-hidden'>
				<Sidebar />

				<main className='flex-1 min-h-screen overflow-y-scroll max-w-5xl pt-8 pb-20 mx-auto text-white space-y-7 no-scrollbar'>
					<div className='space-y-7'>
						<div className='text-4xl font-bold'>
							Welcome, Lunacian!
						</div>

						<Banner />
					</div>

					<div className='flex space-y-7 gap-6'>
						<div className='flex-1 space-y-7 overflow-hidden'>
							<Leaderboards />
							<Marketplace />
							<Discover />
						</div>

						<OverallStats />
					</div>
				</main>
			</div>
		</>
	)
}
