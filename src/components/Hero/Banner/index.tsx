'use client'

import clsx from 'clsx'
import { collection, getDocs } from 'firebase/firestore'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { db } from '@/config/firebase'
import { animation } from '@/constants/animation'
import { style } from '@/constants/style'
import { IBlock } from '@/interfaces/block'

import { Button } from '../../ui/button'

const Banner = () => {
	const [banners, setBanners] = useState<IBlock[]>([])
	const [loading, setLoading] = useState(true)
	const [activeIndex, setActiveIndex] = useState(0)
	const timerRef = useRef<NodeJS.Timeout>(null)

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

	useEffect(() => {
		;(async () => {
			const snapshot = await getDocs(collection(db, 'banners'))
			const data = snapshot.docs.map((doc) => doc.data())
			setBanners(data as IBlock[])
			setLoading(false)
		})()
	}, [])

	if (loading) return <Skeleton className='h-84' />

	return (
		<motion.div
			{...animation.fromBot}
			className='h-84 rounded-2xl relative overflow-hidden'>
			{/* animation bg */}
			{banners.map(
				(banner, i) =>
					i === activeIndex && (
						<motion.div
							key={banner.id}
							initial={{ opacity: 0, translateX: '-100%' }}
							animate={{ opacity: 1, translateX: 0 }}
							className='absolute inset-0 bg-cover bg-bottom-right md:bg-center bg-no-repeat'
							style={{
								backgroundImage: `url(${banner.backgroundURL})`,
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

			<div className='absolute bottom-4 right-4 hidden md:flex items-center gap-4'>
				{banners.map((banner, i) => (
					<div
						key={banner.id}
						className={clsx(
							'w-32 h-16 rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer transition-all border-2 border-transparent',
							i === activeIndex && 'border-white',
						)}
						onClick={() => setActiveIndex(i)}
						style={{
							backgroundImage: `url(${banner.backgroundURL})`,
						}}></div>
				))}
			</div>
		</motion.div>
	)
}

export default Banner
