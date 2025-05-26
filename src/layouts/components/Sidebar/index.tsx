import { BsBank2 } from 'react-icons/bs'
import { FaBlog } from 'react-icons/fa'
import {
	FaBagShopping,
	FaBookBookmark,
	FaDiscord,
	FaGamepad,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6'
import { GiSwapBag } from 'react-icons/gi'
import { GoHomeFill, GoLog } from 'react-icons/go'
import { IoStorefront } from 'react-icons/io5'
import { WiTrain } from 'react-icons/wi'

import { Button } from '@/components/ui/button'

import ActiveLink from './ActiveLink'

const pages = [
	{
		href: '/',
		label: 'Home',
		icon: <GoHomeFill />,
	},
	{
		href: '/marketplace',
		label: 'Marketplace',
		icon: <FaBagShopping />,
	},
	{
		href: '/bounty-board',
		label: 'Bounty Board',
		icon: <GoLog />,
	},
	{
		href: '/games',
		label: 'Games',
		icon: <FaGamepad />,
	},
	{
		href: '/governance',
		label: 'Governance',
		icon: <BsBank2 />,
	},
	{
		href: '/lunalog',
		label: 'Lunalog',
		icon: <FaBookBookmark />,
	},
	{
		href: '/staking',
		label: 'Staking',
		icon: <GiSwapBag size={20} />,
	},
	{
		href: '/express',
		label: 'Lunacian Express',
		icon: <WiTrain size={20} />,
	},
	{
		href: '/game-store',
		label: 'Axie game store',
		icon: <IoStorefront />,
	},
]

const Sidebar = () => {
	return (
		<div className='shrink-0 hidden md:flex flex-col justify-around items-center w-16 h-full bg-dark'>
			<div className='flex flex-col gap-4 items-center'>
				{pages.slice(0, 5).map((page) => (
					<ActiveLink
						key={page.href}
						{...page}
					/>
				))}
			</div>

			<div className='flex flex-col gap-4 items-center'>
				<Button className='hover:text-orange-500 bg-transparent'>
					<FaBlog />
				</Button>

				<Button className='hover:text-orange-500 bg-transparent'>
					<FaXTwitter />
				</Button>

				<Button className='hover:text-orange-500 bg-transparent'>
					<FaDiscord />
				</Button>

				<Button className='hover:text-orange-500 bg-transparent'>
					<FaYoutube />
				</Button>
			</div>
		</div>
	)
}

export default Sidebar
