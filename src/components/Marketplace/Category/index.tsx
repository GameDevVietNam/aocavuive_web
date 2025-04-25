import { AnimatePresence, motion } from 'motion/react'
import { FC, memo, useState } from 'react'

interface CategoryProps {
	src: string
	title: string
	desc: string
}

const Category: FC<CategoryProps> = ({ src, title, desc }) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<div
			className='flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<div className='relative h-32'>
				<img
					src={src}
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

								<p className='text-gray-300'>{desc}</p>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default memo(Category)
