'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { animation } from '@/constants/animation'

import Category from './Category'

const categories = [
	{
		src: 'axies-small.jpg',
		title: 'Chiến Ngư',
		desc: '0 mặt hàng',
	},
	// {
	// 	title: 'Accessories',
	// 	desc: '22 Accessories',
	// 	src: '/accessories-small.jpg',
	// },
	// {
	// 	title: 'Lands',
	// 	desc: '356 Plots',
	// 	src: '/lands-full-2.jpg',
	// },
	// {
	// 	title: 'Land Items',
	// 	desc: '1236 Items',
	// 	src: '/land-items-full-2.jpg',
	// },
]

const Marketplace = () => {
	const carouselRef = useRef(null)
	const [scrollPosition, setScrollPosition] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)

	const scrollAmount = 200 // Khoảng cách mỗi lần cuộn

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
				Chợ đen
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
								key={category.src}
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
