'use client'

import { motion } from 'motion/react'

import Benefit from './Benefit'
import RegisterForm from './RegisterForm'

const Register = () => {
	return (
		<div className='flex justify-evenly flex-wrap gap-7'>
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
				<div className='text-3xl text-center font-bold'>Lợi ích</div>

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
