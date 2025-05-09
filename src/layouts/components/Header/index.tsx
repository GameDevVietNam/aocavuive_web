'use client'

import Image from 'next/image'

import { useT } from '@/app/i18n/client'
import { Button } from '@/components/ui/button'

import AuthModal from './AuthModal'

const Header = () => {
	const { t } = useT()

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
						className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
					/>
					{t('dailyBounties')}
				</Button>

				<AuthModal />
			</div>
		</div>
	)
}

export default Header
