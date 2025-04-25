import Image from 'next/image'

import Stat from './Stat'

const stats = [
	{
		src: '/axie-tab-icon.png',
		label: 'Total axies',
		value: 11442835,
	},
	{
		src: '/player.png',
		label: 'Total owners',
		value: 2077354,
	},
	{
		src: '/meo-token.png',
		label: 'Total volume',
		value: 1391983,
	},
	{
		src: '/contract.png',
		label: 'Total volume',
		value: 24157006,
	},
]

const thisWeekStats = [
	{
		src: '/axies-stats.png',
		label: 'Total axies',
		value: 11442835,
	},
	{
		src: '/player.png',
		label: 'Total owners',
		value: 2077354,
	},
	{
		src: '/meo-token.png',
		label: 'Total volume',
		value: 1391983,
	},
	{
		src: '/sales-stats.png',
		label: 'Total volume',
		value: 24157006,
	},
]

const OverallStats = () => {
	return (
		<div className='space-y-6 shrink-0 w-2/5'>
			<div className='py-6 px-12 space-y-6 rounded-2xl bg-semidark'>
				<div className='text-2xl font-semibold'>Overall Stats</div>

				{stats.map((stat) => (
					<Stat
						key={stat.src}
						{...stat}
					/>
				))}

				<div className='h-1 bg-gray-300 rounded-full'></div>

				<div className='text-2xl font-semibold'>
					This week in Lunacia
				</div>

				<div className='text-sm text-gray-300'>
					General stats from the past 7 days in the Axie Infinity
					universe.
				</div>

				{thisWeekStats.map((stat) => (
					<Stat
						key={stat.src}
						{...stat}
					/>
				))}

				<div className='absolute bottom-0 right-0'>
					<Image
						src='/axie-hiding.png'
						alt='Axie hiding'
						width={80}
						height={80}
					/>
				</div>
			</div>
			<div
				className='h-44 bg-cover bg-center rounded-2xl border-2 border-transparent cursor-pointer hover:border-orange-500 transition bg-no-repeat'
				style={{
					backgroundImage: 'url("/axie-wiki.png")',
				}}></div>
		</div>
	)
}

export default OverallStats
