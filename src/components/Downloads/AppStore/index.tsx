import { motion } from 'motion/react'
import Image from 'next/image'
import { memo } from 'react'

import { style } from '@/constants/style'

interface AppStoreProps {
	onClick: () => void
}

const AppStore = ({ onClick }: AppStoreProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: -40 }}
			whileInView={{
				opacity: 1,
				translateX: 0,
			}}
			transition={{ duration: 0.3 }}
			onClick={onClick}
			className='absolute top-1/2 left-full -translate-y-1/2 h-18 w-36 md:w-64 bg-orange-500 cursor-pointer flex items-center justify-center'
			style={{
				backgroundImage: style.backgroundImage,
				clipPath:
					'polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%)',
			}}>
			<div className='flex items-center gap-1 md:gap-3'>
				<Image
					src='/appstore.png'
					alt='App Store'
					width={32}
					height={32}
				/>

				<span className='font-semibold text-sm md:text-base'>
					App Store
				</span>
			</div>
		</motion.div>
	)
}

export default memo(AppStore)
