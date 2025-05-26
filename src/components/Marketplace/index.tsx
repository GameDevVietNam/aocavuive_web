'use client'

import { collection, getDocs } from 'firebase/firestore'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { db } from '@/config/firebase'
import { animation } from '@/constants/animation'
import { IBlock } from '@/interfaces/block'

import Category from './Category'

const Marketplace = () => {
	const carouselRef = useRef(null)
	const [categories, setCategories] = useState<IBlock[]>([])
	const [scrollPosition, setScrollPosition] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)

	const scrollAmount = 200

	const scrollLeft = () => {
		if (isAnimating) return

		setIsAnimating(true)
		const newPosition = Math.max(scrollPosition - scrollAmount, 0)
		setScrollPosition(newPosition)
	}

	const scrollRight = () => {
		if (isAnimating) return

		setIsAnimating(true)
		const maxScroll = (categories.length - 3) * 280
		const newPosition = Math.min(scrollPosition + scrollAmount, maxScroll)
		setScrollPosition(newPosition)
	}

	useEffect(() => {
		;(async () => {
			const snapshot = await getDocs(collection(db, 'marketplaces'))
			const data = snapshot.docs.map((doc) => doc.data()) as IBlock[]
			setCategories(data)
		})()
	}, [])

	useEffect(() => {
		if (isAnimating) {
			const timer = setTimeout(() => {
				setIsAnimating(false)
			}, 500)
			return () => clearTimeout(timer)
		}
	}, [isAnimating])

	return (
		<div className='space-y-4'>
			<motion.div
				{...animation.fromBot}
				className='text-2xl font-bold'>
				Sàn giao dịch
			</motion.div>

			<div className='relative'>
				{/* Navigation buttons */}
				<button
					className='absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10 transition-colors'
					onClick={scrollLeft}
					disabled={isAnimating || scrollPosition <= 0}>
					<ChevronLeft size={24} />
				</button>

				<button
					className='absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10 transition-colors'
					onClick={scrollRight}
					disabled={
						isAnimating ||
						scrollPosition >= (categories.length - 3) * 280
					}>
					<ChevronRight size={24} />
				</button>

				{/* Cards container with overflow mask */}
				<div className='overflow-hidden mx-4'>
					<div
						ref={carouselRef}
						className='flex gap-4 transition-transform duration-500 ease-out'
						style={{
							transform: `translateX(-${scrollPosition}px)`,
						}}>
						{categories.map((category) => (
							<Category
								key={category.id}
								{...category}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Marketplace
