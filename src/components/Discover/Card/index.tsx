'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC, memo, useState } from 'react'

import { animation } from '@/constants/animation'

interface CardProps {
	src: string
	title: string
	description: string
	i: number
}

const Card: FC<CardProps> = ({ src, title, description, i }) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<motion.div
			{...animation.fadeIn}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className={clsx(
				'rounded-2xl transition-colors overflow-hidden bg-semidark cursor-pointer border-2 border-transparent',
				isHover && '!border-orange-500 shadow-xl',
			)}>
			<div
				className={clsx(
					'h-28 border-b-2 relative overflow-hidden',
					isHover && 'border-orange-500',
				)}
				style={{
					backgroundImage: `url(${src})`,
				}}>
				<div
					className={clsx(
						'absolute inset-0 object-cover bg-cover bg-no-repeat bg-center transition-all',
						isHover && 'scale-120',
					)}
					style={{
						backgroundImage: `url(${src})`,
					}}></div>
			</div>

			<div className='p-2 space-y-2'>
				<div
					className={clsx(
						'text-xl font-semibold line-clamp-2',
						isHover && 'text-orage-500',
					)}>
					{title}
				</div>
				<div className='text-sm text-gray-300'>{description}</div>
			</div>
		</motion.div>
	)
}

export default memo(Card)
