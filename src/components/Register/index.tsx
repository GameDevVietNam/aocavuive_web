'use client'

import { motion } from 'motion/react'

import { useT } from '@/app/i18n/client'

import Benefit from './Benefit'
import RegisterForm from './RegisterForm'

const Register = () => {
	const { t } = useT()

	return (
		<div className='flex justify-evenly gap-7'>
			<motion.div
				initial={{
					translateX: -20,
					opacity: 0,
				}}
				whileInView={{
					translateX: 0,
					opacity: 1,
				}}
				className='space-y-4'>
				<div className='text-3xl text-center font-bold'>
					{t('benefits')}
				</div>

				{new Array(4).fill(undefined).map((_benefit, i) => (
					<Benefit
						key={i}
						index={i}
					/>
				))}
			</motion.div>

			<RegisterForm />
		</div>
	)
}

export default Register
