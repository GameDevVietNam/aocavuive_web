'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { style } from '@/constants/style'

import { Button } from '../ui/button'

const banners = [
	{
		src: '/banners/atias-legacy-home-banner.jpg',
		title: 'Pre-register and refer your friends!',
		description: "Playtest Summer '25",
	},
	{
		src: '/banners/nightmare.jpg',
		title: 'Introducing: The Wings of Nightmare!',
		description:
			'Close your eyes and enter the Dream World of Lunacia, where imagination thrives and dreams come true.',
	},
	{
		src: '/banners/forging-banner.jpg',
		title: 'Introducing: Forging',
		description: 'A new axie core mechanic.',
	},
]

const Banner = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const timerRef = useRef<NodeJS.Timeout>(null)

	const handlePrev = () => setActiveIndex(Math.max(0, activeIndex - 1))
	const handleNext = () => {
		setActiveIndex((prev) => {
			if (prev >= banners.length - 1) {
				return 0
			}

			return prev + 1
		})
	}

	useEffect(() => {
		timerRef.current = setInterval(() => handleNext(), 5000)

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}
		}
	}, [])

	return (
		<div className='h-84 rounded-2xl relative overflow-hidden'>
			{/* animation bg */}
			{banners.map(
				(banner, i) =>
					i === activeIndex && (
						<motion.div
							key={banner.src}
							initial={{ opacity: 0, translateX: '-100%' }}
							animate={{ opacity: 1, translateX: 0 }}
							className='absolute inset-0 bg-cover bg-center bg-no-repeat'
							style={{
								backgroundImage: `url(${banner.src})`,
							}}></motion.div>
					),
			)}

			{/* overlay */}
			<div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,.2)]'></div>

			<div className='absolute bottom-4 left-4 space-y-4 max-w-xl'>
				<div className='text-3xl font-bold'>
					{banners[activeIndex].title}
				</div>

				<div className='text-xs font-medium'>
					{banners[activeIndex].description}
				</div>

				<div className='flex items-center gap-3'>
					<Button
						style={{
							backgroundImage: style.backgroundImage,
						}}>
						Get started
					</Button>

					<Button>Learn more</Button>
				</div>
			</div>
			<div className='absolute bottom-4 right-4 flex items-center gap-4'>
				{banners.map((banner, i) => (
					<div
						key={banner.src}
						className={clsx(
							'w-32 h-16 rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer transition-all border-2 border-transparent',
							i === activeIndex && 'border-white',
						)}
						onClick={() => setActiveIndex(i)}
						style={{
							backgroundImage: `url(${banner.src})`,
						}}></div>
				))}
			</div>
		</div>
	)
}

export default Banner
