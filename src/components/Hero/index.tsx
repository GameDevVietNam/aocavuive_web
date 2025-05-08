'use client'

import { motion } from 'motion/react'

import { useT } from '@/app/i18n/client'
import { animation } from '@/constants/animation'

import Banner from './Banner'

const Hero = () => {
	const { t } = useT()
	return (
		<div className='space-y-7'>
			<motion.div
				{...animation.fromBot}
				className='text-3xl md:text-4xl font-bold'>
				{t('welcome')}
			</motion.div>

			<Banner />
		</div>
	)
}

export default Hero
