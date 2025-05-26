import { AnimatePresence, motion } from 'motion/react'
import { FC, memo, useState } from 'react'

import { animation } from '@/constants/animation'
import { IBlock } from '@/interfaces/block'

const Category: FC<IBlock> = ({ backgroundURL, title, description }) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<motion.div
			{...animation.fromBot}
			className='flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden cursor-pointer'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<div className='relative h-32'>
				<img
					src={backgroundURL}
					alt={title}
					className='w-full h-full object-cover'
				/>

				<AnimatePresence>
					{!isHover && (
						<>
							<motion.div
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className='absolute inset-0 bg-[rgba(0,0,0,.5)]'></motion.div>

							<motion.div
								initial={{ translateY: -20, opacity: 0 }}
								animate={{ translateY: 0, opacity: 1 }}
								exit={{ translateY: -20, opacity: 0 }}
								className='absolute bottom-4 left-4'>
								<h3 className='text-xl font-medium'>{title}</h3>

								<p className='text-gray-300'>{description}</p>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	)
}

export default memo(Category)
