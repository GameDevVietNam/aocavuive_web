'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import AuthModal from './AuthModal'
import { toast } from 'sonner'

const Header = () => {
	return (
		<div className='h-16 sticky top-0 left-0 w-full z-20 flex items-center justify-between bg-dark px-4'>
			<Link href='/'>
				<Image
					src='/logo.png'
					alt='Logo'
					width={50}
					height={50}
				/>
			</Link>

			<div className='flex items-center gap-4'>
				<Button 
				onClick={()=>{
					toast.info('Coming soon!');
				}}
				className='bg-semidark text-xs md:text-base text-white rounded-full'>
					<Image
						src='/quests-tasks-icon.png'
						alt='Quests Tasks Icon'
						width={40}
						height={40}
						className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
					/>
					
				</Button>

				<AuthModal />
			</div>
		</div>
	)
}

export default Header
