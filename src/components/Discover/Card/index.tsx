'use client'

import clsx from 'clsx'
import { FC, memo, useState } from 'react'

interface CardProps {
	src: string
	title: string
	description: string
}

const Card: FC<CardProps> = ({ src, title, description }) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className={clsx(
				'rounded-2xl transition-all overflow-hidden bg-semidark cursor-pointer border-2 border-transparent',
				isHover && '!border-orange-500 -translate-y-3 shadow-xl',
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
		</div>
	)
}

export default memo(Card)
