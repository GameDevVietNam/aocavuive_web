import { motion } from 'motion/react'
import Image from 'next/image'
import { memo } from 'react'

import { style } from '@/constants/style'

interface ChPlayProps {
	onClick: () => void
}

const ChPlay = ({ onClick }: ChPlayProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: 40 }}
			whileInView={{
				opacity: 1,
				translateX: 0,
			}}
			transition={{ duration: 0.3 }}
			onClick={onClick}
			className='absolute top-1/2 right-full -translate-y-1/2 h-18 w-36 md:w-64 cursor-pointer flex items-center justify-center'
			style={{
				backgroundImage: style.backgroundImage,
				clipPath:
					'polygon(100% 0%, 90% 53%, 100% 100%, 10% 100%, 0% 50%, 10% 0)',
			}}>
			<div className='flex items-center gap-1 md:gap-3'>
				<Image
					src='/chplay.png'
					alt='Google Play'
					width={32}
					height={32}
				/>

				<div className='font-semibold text-sm md:text-base'>
					Google Play
				</div>
			</div>
		</motion.div>
	)
}

export default memo(ChPlay)
