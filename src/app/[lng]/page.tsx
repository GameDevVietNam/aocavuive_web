import Discover from '@/components/Discover'
import Hero from '@/components/Hero'
import Leaderboards from '@/components/Leaderboards'
import Marketplace from '@/components/Marketplace'
import Register from '@/components/Register'

export default function Home() {
	return (
		<>
			<Hero />

			<Register />

			<div className='space-y-12 overflow-hidden'>
				<Leaderboards />
				<Marketplace />
				<Discover />
			</div>
		</>
	)
}
