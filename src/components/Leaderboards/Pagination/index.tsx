'use client'

import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface PaginationProps {
	length: number
	itemsPerPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<PaginationProps> = ({
	length,
	itemsPerPage,
	setCurrentPage,
}) => {
	const [value, setValue] = useState('1')

	const maxPage = Math.ceil(length / itemsPerPage)

	const handlePrev = () =>
		setCurrentPage((prev) => {
			if (prev <= 0) {
				setValue(String(maxPage))
				return maxPage
			}

			setValue(String(prev - 1))
			return prev - 1
		})

	const handleNext = () =>
		setCurrentPage((prev) => {
			if (prev >= maxPage) {
				setValue('1')
				return 1
			}

			setValue(String(prev + 1))
			return prev + 1
		})

	console.log({ maxPage })

	return (
		<div className='flex items-center gap-3'>
			<Button onClick={handlePrev}>
				<FaAngleLeft />
			</Button>
			Page
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className='max-w-12'
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						if (Number(value) > maxPage) {
							setCurrentPage(maxPage)
						}

						setCurrentPage(Number(value))
					}
				}}
			/>
			of {maxPage}
			<Button onClick={handleNext}>
				<FaAngleRight />
			</Button>
		</div>
	)
}

export default memo(Pagination)
