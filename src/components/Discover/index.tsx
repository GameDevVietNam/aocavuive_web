import Card from './Card'

const items = [
	{
		title: 'Get Started with Axie Infinity in 4 Simple Key Steps',
		src: '/discover-get-started.jpg',
		description:
			'Follow these essential steps to kickstart your adventure!',
	},
	{
		title: "A New & Returning Player's Guide to Axie Infinity",
		src: '/discover-player-guide.jpg',
		description: "A summary of Lunacia's fruitful history.",
	},
	{
		title: 'The Collectible Axies Overview',
		src: '/discover-collectible.jpg',
		description:
			'Dive deep into fascinating axies and learn how they came to be.',
	},
]

const Discover = () => {
	return (
		<div className='space-y-4'>
			<div className='text-2xl font-semibold'>Discover</div>

			<div className='grid gap-4 md:grid-cols-3'>
				{items.map((item, i) => (
					<Card
						key={item.title}
						{...item}
						i={i}
					/>
				))}
			</div>
		</div>
	)
}

export default Discover
