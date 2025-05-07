'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { FC, memo } from 'react'

import { animation } from '@/constants/animation'

interface StatProps {
	src: string
	label: string
	value: number
}

const Stat: FC<StatProps> = ({ src, label, value }) => {
	return (
		<motion.div
			{...animation.fromBot}
			className='flex items-center gap-3'>
			<div className='shrink-0 w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full'>
				<Image
					src={src}
					alt={src}
					width={32}
					height={32}
				/>
			</div>

			<div className='flex-1 space-y-1'>
				<div className='text-gray-300 text-sm'>{label}</div>
				<div>{value.toLocaleString()}</div>
			</div>
		</motion.div>
	)
}

export default memo(Stat)
