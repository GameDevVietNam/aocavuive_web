'use client'

import { motion } from 'motion/react'

import Benefit from './Benefit'
import RegisterForm from './RegisterForm'

const benefits = [
	'Receive the latest information, events',
	'Get rewards for pre-subscribers',
	"Don't miss out on the latest products",
	'Receiving fan badges',
]

const Subscribe = () => {
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
				<div className='text-3xl text-center font-bold'>Benefits</div>

				{benefits.map((benefit, i) => (
					<Benefit
						key={benefit}
						text={benefit}
						index={i}
					/>
				))}
			</motion.div>

			<RegisterForm />
		</div>
	)
}

export default Subscribe
