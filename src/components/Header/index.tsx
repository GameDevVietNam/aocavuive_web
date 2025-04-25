import Image from 'next/image'

import { style } from '@/constants/style'

import { Button } from '../ui/button'

const Header = () => {
	return (
		<div className='h-16 sticky top-0 left-0 w-full z-20 flex items-center justify-between bg-dark px-4'>
			<Image
				src='/logo.png'
				alt='Logo'
				width={50}
				height={50}
			/>

			<div className='flex items-center gap-4'>
				<Button className='bg-semidark text-white rounded-full'>
					<Image
						src='/quests-tasks-icon.png'
						alt='Quests Tasks Icon'
						width={40}
						height={40}
					/>
					Daily bounties
				</Button>

				<Button
					style={{
						backgroundImage: style.backgroundImage,
					}}>
					Log In
				</Button>
			</div>
		</div>
	)
}

export default Header
